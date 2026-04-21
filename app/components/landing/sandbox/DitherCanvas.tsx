const BAYER = [0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5]

export default function DitherCanvas(
  canvas: HTMLCanvasElement, W: number, H: number, pixel = 6, duration = 1400, spread = 0.35
) {
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d', { alpha: true })!

  const cols = Math.ceil(W / pixel)
  const rows = Math.ceil(H / pixel)

  const thresholds = new Float32Array(rows * cols)
  let lo = Infinity, hi = -Infinity
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const v = (r / (rows - 1)) * (1 - spread) + (BAYER[(r % 4) * 4 + (c % 4)] / 16) * spread
      thresholds[r * cols + c] = v
      if (v < lo) lo = v
      if (v > hi) hi = v
    }
  }
  const range = hi - lo
  for (let i = 0; i < thresholds.length; i++) thresholds[i] = (thresholds[i] - lo) / range

  const WHITE = 0xffffffff
  const blackSegment = new Uint32Array(pixel).fill(WHITE)
  const lastColW = W - (cols - 1) * pixel
  const lastSegment = new Uint32Array(lastColW).fill(WHITE)

  const img = ctx.createImageData(W, H)
  const buf = new Uint32Array(img.data.buffer)

  const start = performance.now()
  let frame: number

  const draw = (now: number) => {
    const t = Math.min((now - start) / duration, 1)
    const p = t < 0.5 ? 2*t*t : -1+(4-2*t)*t

    buf.fill(0) // clear in one shot

    for (let r = 0; r < rows; r++) {
      const rowBase = r * cols
      const yStart = r * pixel
      const yEnd = Math.min(yStart + pixel, H)

      for (let c = 0; c < cols; c++) {
        if (p < thresholds[rowBase + c]) {
          const xStart = c * pixel
          const seg = c === cols - 1 ? lastSegment : blackSegment
          // stamp this segment into every pixel row of this cell
          for (let y = yStart; y < yEnd; y++) {
            buf.set(seg, y * W + xStart)
          }
        }
      }
    }

    ctx.putImageData(img, 0, 0)

    if (t < 1) frame = requestAnimationFrame(draw)
    else canvas.remove()
  }

  frame = requestAnimationFrame(draw)
  return () => cancelAnimationFrame(frame)
}