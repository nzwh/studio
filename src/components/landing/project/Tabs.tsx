import SwapOnHover from "../../global/effects/SwapOnHover";

const TABS = [
  {
    value: "development",
    label: "development—works",
    hover: "projects that i've developed",
    align: "text-right",
  },
  {
    value: "design",
    label: "design—works",
    hover: "projects that i've designed",
    align: "text-left",
  },
] as const;

export default function ProjectTabs({
  type,
  HandleTypeChange,
}: {
  type: "development" | "design";
  HandleTypeChange: (newType: "development" | "design") => void;
}) {
  return (
    <div className="flex w-full flex-row items-center justify-between gap-4 py-6">
      {TABS.map(({ value, label, hover, align }) => (
        <SwapOnHover
          key={value}
          SwapOnHover={hover}
          className={`w-full cursor-pointer ${align} text-sm font-light tracking-tight transition-colors duration-300 ${
            type === value ? "text-[#393939]" : "text-[#a5a5a5]"
          }`}
          onClick={() => HandleTypeChange(value)}
        >
          {label}
        </SwapOnHover>
      ))}
    </div>
  );
}
