interface WindowPanelProps {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

export const WindowPanel = ({
  title,
  className,
  children,
}: WindowPanelProps) => {
  return (
    <div
      className={`${className} x-panel flex w-full flex-col gap-2 rounded-lg p-2`}
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center">
        <div className="flex gap-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#dddddd]" />
          ))}
        </div>
        <h3 className="text-[10px] leading-2 font-light text-[#707070] select-none">
          {title}
        </h3>
        <div />
      </div>
      <div className="min-h-0 flex-1">{children}</div>
    </div>
  );
};
