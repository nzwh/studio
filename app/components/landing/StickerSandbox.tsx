'use client'

import { useEffect, useRef } from 'react'

interface StickerConfig {
  file: string
  x: number
  y: number
  angle: number
  shape?: 'rect' | 'circle'
}

const STICKER_CONFIG: StickerConfig[] = [
  { file: '002.png', x: 0.5000, y: 0.5000, angle:  0 },
  { file: '003.png', x: 0.1735, y: 0.3935, angle:  0.4,  shape: 'circle' },
  { file: '003.png', x: 0.7857, y: 0.5226, angle:  1.4,  shape: 'circle' },
  { file: '004.png', x: 0.4929, y: 0.4839, angle: -0.08 },
  { file: '005.png', x: 0.3214, y: 0.3548, angle:  0.06 },
  { file: '006.png', x: 0.2796, y: 0.5129, angle:  0.35, shape: 'circle' },
  { file: '007.png', x: 0.2796, y: 0.7290, angle: -0.15 },
  ...Array.from({ length: 10 }, () => ({
    file: '015.png',
    x: 0.2 + Math.random() * 0.7,
    y: 0.2 + Math.random() * 0.7,
    angle: 0,
  })),
  ...Array.from({ length: 10 }, () => ({
    file: '016.png',
    x: 0.2 + Math.random() * 0.7,
    y: 0.2 + Math.random() * 0.7,
    angle: 0,
  })),
  { file: '008.png', x: 0.1786, y: 0.5806, angle: -0.3,  shape: 'circle' },
  { file: '009.png', x: 0.5551, y: 0.6645, angle: -0.02 },
  { file: '010.png', x: 0.6847, y: 0.4581, angle:  0,    shape: 'circle' },
  { file: '011.png', x: 0.7837, y: 0.4065, angle:  0.05 },
  { file: '012.png', x: 0.7980, y: 0.5613, angle: -0.07 },
  { file: '013.png', x: 0.8245, y: 0.7097, angle:  0 },
  { file: '014.png', x: 0.6224, y: 0.3871, angle:  0 },
]

interface Sticker {
  img: HTMLImageElement
  w: number
  h: number
  x: number
  y: number
  vx: number
  vy: number
  angle: number
  av: number
  alpha: Uint8ClampedArray
  shape: 'rect' | 'circle'
  flickerEnd: number
}

interface Ripple {
  x: number
  y: number
  r: number
  a: number
}

function bakeAlpha(img: HTMLImageElement, w: number, h: number): Uint8ClampedArray {
  const canvas = new OffscreenCanvas(w, h)
  const ctx = canvas.getContext('2d')!
  ctx.drawImage(img, 0, 0, w, h)
  return ctx.getImageData(0, 0, w, h).data
}

function hitTest(s: Sticker, mx: number, my: number): boolean {
  const dx = mx - s.x
  const dy = my - s.y
  const cos = Math.cos(-s.angle)
  const sin = Math.sin(-s.angle)
  const lx = Math.round(cos * dx - sin * dy + s.w / 2)
  const ly = Math.round(sin * dx + cos * dy + s.h / 2)
  if (lx < 0 || ly < 0 || lx >= s.w || ly >= s.h) return false
  return s.alpha[(ly * s.w + lx) * 4 + 3] > 10
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error(`Failed to load ${src}`))
    img.src = src
  })
}

function getBounds(s: Sticker): { hw: number; hh: number } {
  if (s.shape === 'circle') {
    const r = Math.max(s.w, s.h) / 2 + 4
    return { hw: r, hh: r }
  }
  const cos = Math.abs(Math.cos(s.angle))
  const sin = Math.abs(Math.sin(s.angle))
  return {
    hw: (s.w / 2) * cos + (s.h / 2) * sin + 4,
    hh: (s.w / 2) * sin + (s.h / 2) * cos + 4,
  }
}

const DAMP = 0.994

export default function StickerSandbox() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')!
    let rafId = 0
    let stickers: Sticker[] = []
    let ripples: Ripple[] = []
    let W = 0, H = 0
    let startTime = 0
    let pushRadius = 130

    let dragging: Sticker | null = null
    let dragOffX = 0, dragOffY = 0
    let lastX = 0, lastY = 0
    let throwVX = 0, throwVY = 0
    let didDrag = false

    function resize() {
      const dpr = window.devicePixelRatio || 1
      const parent = canvas!.parentElement!
      W = parent.clientWidth
      H = parent.clientHeight
      canvas!.style.width  = `${W}px`
      canvas!.style.height = `${H}px`
      canvas!.width  = W * dpr
      canvas!.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      stickers.forEach((s) => {
        s.x = Math.min(Math.max(s.x, s.w / 2 + 4), W - s.w / 2 - 4)
        s.y = Math.min(Math.max(s.y, s.h / 2 + 4), H - s.h / 2 - 4)
      })
    }

    const ro = new ResizeObserver(resize)
    if (canvas.parentElement) ro.observe(canvas.parentElement)
    resize()

    async function init() {
      const SCALE = W < 500 ? 0.1 : 0.2
      pushRadius = W < 500 ? 80 : 130

      const res = await fetch('/api/stickers')
      const availablePaths: string[] = await res.json()
      const availableFilenames = new Set(availablePaths.map(p => p.split('/').pop()!))
      const pathMap = Object.fromEntries(availablePaths.map(p => [p.split('/').pop()!, p]))
      const validConfig = STICKER_CONFIG.filter(cfg => availableFilenames.has(cfg.file))

      if (validConfig.length === 0) {
        ctx.fillStyle = '#000'
        ctx.clearRect(0, 0, W, H)
        ctx.fillStyle = '#fff'
        ctx.font = '13px Helvetica Neue, sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText('No matching stickers found in /public/stickers/', W / 2, H / 2)
        return
      }

      const uniqueFiles = [...new Set(validConfig.map(cfg => cfg.file))]
      const imgMap: Record<string, HTMLImageElement> = {}
      await Promise.all(uniqueFiles.map(async file => {
        imgMap[file] = await loadImage(pathMap[file])
      }))

      stickers = validConfig.map((cfg) => {
        const img = imgMap[cfg.file]
        const w = Math.round(img.naturalWidth  * SCALE)
        const h = Math.round(img.naturalHeight * SCALE)

        return {
          img, w, h,
          alpha: bakeAlpha(img, w, h),
          x: cfg.x * W,
          y: cfg.y * H,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          angle: cfg.angle,
          av: 0,
          shape: cfg.shape ?? 'rect',
          flickerEnd: 0 //400 + Math.random() * 1500,
        }
      })

      startTime = performance.now()
      loop()
    }

    function spawnRipple(x: number, y: number) {
      ripples.push({ x, y, r: 0, a: 0.6 })
    }

    function pushObjects(mx: number, my: number) {
      spawnRipple(mx, my)
      const PUSH_FORCE = 7
      for (const s of stickers) {
        const dx   = s.x - mx
        const dy   = s.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < pushRadius && dist > 1) {
          const str = (1 - dist / pushRadius) * PUSH_FORCE
          s.vx += (dx / dist) * str
          s.vy += (dy / dist) * str
          s.av += (Math.random() - 0.5) * 0.004
        }
      }
    }

    function loop() {
      ctx.clearRect(0, 0, W, H)

      const elapsed = performance.now() - startTime

      ripples = ripples.filter(r => r.a > 0.01)
      for (const r of ripples) {
        r.r += 2.5
        r.a *= 0.88
        ctx.beginPath()
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255,255,255,${r.a})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      for (const s of stickers) {
        if (s === dragging) continue
        s.vx *= DAMP; s.vy *= DAMP; s.av *= DAMP
        s.x += s.vx;  s.y += s.vy;  s.angle += s.av

        const { hw, hh } = getBounds(s)
        if (s.x < hw)     { s.vx =  Math.abs(s.vx) * 0.55; s.av *= 0.3 }
        if (s.x > W - hw) { s.vx = -Math.abs(s.vx) * 0.55; s.av *= 0.3 }
        if (s.y < hh)     { s.vy =  Math.abs(s.vy) * 0.55; s.av *= 0.3 }
        if (s.y > H - hh) { s.vy = -Math.abs(s.vy) * 0.55; s.av *= 0.3 }
        s.x = Math.max(hw, Math.min(W - hw, s.x))
        s.y = Math.max(hh, Math.min(H - hh, s.y))
      }

      for (const s of stickers) {
        ctx.save()
        ctx.translate(s.x, s.y)
        ctx.rotate(s.angle)

        if (elapsed < s.flickerEnd) {
          const progress = elapsed / s.flickerEnd
          const dip = Math.random() > 0.85 ? 0.1 : 1
          ctx.globalAlpha = progress * dip
        }

        ctx.drawImage(s.img, -s.w / 2, -s.h / 2, s.w, s.h)
        ctx.restore()
      }

      rafId = requestAnimationFrame(loop)
    }

    function getPos(e: MouseEvent | TouchEvent): { x: number; y: number } {
      const rect = canvas!.getBoundingClientRect()
      const src = 'touches' in e ? e.touches[0] : e
      return {
        x: (src.clientX - rect.left) * (W / rect.width),
        y: (src.clientY - rect.top)  * (H / rect.height),
      }
    }

    function onDown(e: MouseEvent | TouchEvent) {
      e.preventDefault()
      didDrag = false
      const { x, y } = getPos(e)
      for (let i = stickers.length - 1; i >= 0; i--) {
        if (hitTest(stickers[i], x, y)) {
          dragging = stickers[i]
          dragOffX = x - dragging.x
          dragOffY = y - dragging.y
          lastX = x; lastY = y
          throwVX = 0; throwVY = 0
          return
        }
      }
      pushObjects(x, y)
    }

    function onMove(e: MouseEvent | TouchEvent) {
      if (!dragging) return
      e.preventDefault()
      didDrag = true
      const { x, y } = getPos(e)
      throwVX = x - lastX
      throwVY = y - lastY
      lastX = x; lastY = y
      const { hw, hh } = getBounds(dragging)
      dragging.x = Math.max(hw, Math.min(W - hw, x - dragOffX))
      dragging.y = Math.max(hh, Math.min(H - hh, y - dragOffY))
      dragging.vx = 0; dragging.vy = 0
    }

    function onUp() {
      if (!dragging) return
      if (!didDrag) spawnRipple(dragging.x, dragging.y)
      const MAX = 18
      dragging.vx = Math.max(-MAX, Math.min(MAX, throwVX * 0.65))
      dragging.vy = Math.max(-MAX, Math.min(MAX, throwVY * 0.65))
      dragging.av = (throwVX + throwVY) * 0.0002
      dragging = null
    }

    canvas.addEventListener('mousedown',  onDown as EventListener)
    canvas.addEventListener('mousemove',  onMove as EventListener)
    canvas.addEventListener('mouseup',    onUp)
    canvas.addEventListener('mouseleave', onUp)
    canvas.addEventListener('touchstart', onDown as EventListener, { passive: false })
    canvas.addEventListener('touchmove',  onMove as EventListener, { passive: false })
    canvas.addEventListener('touchend',   onUp)

    init()

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      canvas.removeEventListener('mousedown',  onDown as EventListener)
      canvas.removeEventListener('mousemove',  onMove as EventListener)
      canvas.removeEventListener('mouseup',    onUp)
      canvas.removeEventListener('mouseleave', onUp)
      canvas.removeEventListener('touchstart', onDown as EventListener)
      canvas.removeEventListener('touchmove',  onMove as EventListener)
      canvas.removeEventListener('touchend',   onUp)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full touch-none pointer-events-auto"
      style={{ cursor: 'pointer' }}
    />
  )
}