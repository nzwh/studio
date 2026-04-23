export function useClick() {
  function play(volume = 0.4) {
    const audio = new Audio("/audio/click.mp3");
    audio.volume = volume;
    audio.play().catch(() => {});
  }

  return {
    onMouseDown: () => play(0.1),
    // onMouseUp: () => play(0.15),
  };
}
