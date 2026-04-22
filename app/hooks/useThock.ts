// app/hooks/useThock.ts
export function useThock() {
  function play(volume = 0.4) {
    const audio = new Audio('/audio/thock.ogg')
    audio.volume = volume
    audio.play().catch(() => {})
  }

  return {
    onMouseDown: () => play(0.4),
    // onMouseUp: () => play(0.15),
  }
}