export function useThock() {
  function play(volume = 0.4) {
    const audio = new Audio("/audio/thock.mp3");
    audio.volume = volume;
    audio.play().catch(() => {});
  }

  return {
    onMouseDown: () => play(0.8),
  };
}
