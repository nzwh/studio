interface DividerProps {
  type?: "short" | "long";
  direction?: "horizontal" | "vertical";
}
export default function Divider({
  type = "long",
  direction = "horizontal",
}: DividerProps) {
  const width = type === "short" ? "w-full" : "-mx-[calc(50vw-50%)] w-screen";
  return direction === "horizontal" ? (
    <div className={`border-b border-[#f0f0f0] ${width}`} />
  ) : (
    <>
      <div className="pointer-events-none fixed top-0 left-1/2 z-10 flex h-full -translate-x-1/2 items-center gap-200 max-md:flex">
        <div className="h-full w-px bg-[#f0f0f0]" />
        <div className="h-full w-px bg-[#f0f0f0]" />
      </div>
      <div className="pointer-events-none fixed top-0 left-1/2 z-10 flex h-full -translate-x-1/2 items-center gap-260 max-md:flex">
        <div className="h-full w-px bg-[#f0f0f0]" />
        <div className="h-full w-px bg-[#f0f0f0]" />
      </div>
      <div className="pointer-events-none fixed top-0 left-1/2 z-10 flex h-full -translate-x-1/2 items-center gap-210 max-md:flex">
        <div className="h-full w-px bg-[#f0f0f0]" />
        <div className="h-full w-px bg-[#f0f0f0]" />
      </div>
    </>
  );
}
