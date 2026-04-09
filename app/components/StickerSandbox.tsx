'use client'

import { useEffect, useRef } from 'react'

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

const SCALE = 0.25
const BOX_W = 60
const BOX_H = 22
const DAMP  = 0.994

export default function StickerSandbox() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')!
    let rafId = 0
    let stickers: Sticker[] = []
    let W = 0, H = 0

    let dragging: Sticker | null = null
    let dragOffX = 0, dragOffY = 0
    let lastX = 0, lastY = 0
    let throwVX = 0, throwVY = 0

    function resize() {
      const dpr = window.devicePixelRatio || 1
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize)
      W = BOX_W * rem
      H = BOX_H * rem
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
      const res = await fetch('/api/stickers')
      const paths: string[] = await res.json()

      if (paths.length === 0) {
        ctx.fillStyle = '#000'
        ctx.fillRect(0, 0, W, H)
        ctx.fillStyle = '#fff'
        ctx.font = '13px Helvetica Neue, sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText('Add PNG files to /public/stickers/', W / 2, H / 2)
        return
      }

      const imgs = await Promise.all(paths.map(loadImage))

      stickers = imgs.map((img, i) => {
        const w = Math.round(img.naturalWidth  * SCALE)
        const h = Math.round(img.naturalHeight * SCALE)
        const hw = w / 2 + 4
        const hh = h / 2 + 4
        const spawnAngle = (Math.PI * 2 / imgs.length) * i + 0.4
        const rx = Math.max(20, Math.min(W * 0.3, W / 2 - hw))
        const ry = Math.max(20, Math.min(H * 0.28, H / 2 - hh))

        return {
          img, w, h,
          alpha: bakeAlpha(img, w, h),
          x: Math.max(hw, Math.min(W - hw, W / 2 + Math.cos(spawnAngle) * rx)),
          y: Math.max(hh, Math.min(H - hh, H / 2 + Math.sin(spawnAngle) * ry)),
          vx: 0, vy: 0, angle: 0, av: 0,
        }
      })

      loop()
    }

    function loop() {
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, W, H)

      for (const s of stickers) {
        if (s === dragging) continue
        s.vx *= DAMP; s.vy *= DAMP; s.av *= DAMP
        s.x += s.vx;  s.y += s.vy;  s.angle += s.av

        const px = s.w / 2 + 4
        const py = s.h / 2 + 4
        if (s.x < px)     { s.x = px;     s.vx =  Math.abs(s.vx) * 0.55 }
        if (s.x > W - px) { s.x = W - px; s.vx = -Math.abs(s.vx) * 0.55 }
        if (s.y < py)     { s.y = py;     s.vy =  Math.abs(s.vy) * 0.55 }
        if (s.y > H - py) { s.y = H - py; s.vy = -Math.abs(s.vy) * 0.55 }
      }

      for (const s of stickers) {
        ctx.save()
        ctx.translate(s.x, s.y)
        ctx.rotate(s.angle)
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
    }

    function onMove(e: MouseEvent | TouchEvent) {
      if (!dragging) return
      e.preventDefault()
      const { x, y } = getPos(e)
      throwVX = x - lastX
      throwVY = y - lastY
      lastX = x; lastY = y
      dragging.x = x - dragOffX
      dragging.y = y - dragOffY
      dragging.vx = 0; dragging.vy = 0
    }

    function onUp() {
      if (!dragging) return
      dragging.vx = throwVX * 0.65
      dragging.vy = throwVY * 0.65
      dragging.av = (throwVX + throwVY) * 0.001
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
      className="bg-black touch-none"
      style={{ cursor: 'grab' }}
    />
  )
}