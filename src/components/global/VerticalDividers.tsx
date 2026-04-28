export default function VeritcalDividers({ gap = 50 }: { gap?: number }) {
  return (
    <div
      className={`pointer-events-none fixed top-0 left-1/2 z-10 flex h-full -translate-x-1/2 items-center max-md:flex ${gap >= 50 ? "gap-200" : `gap-[${gap}rem]`}`}
    >
      <div className="h-full w-px bg-[#f0f0f0]" />
      <div className="h-full w-px bg-[#f0f0f0]" />
    </div>
  );
}
