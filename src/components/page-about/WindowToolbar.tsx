import { BiExpandVertical } from "react-icons/bi";
import {
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaChevronDown,
  FaItalic,
  FaStrikethrough,
  FaUnderline,
} from "react-icons/fa6";
import { MdFormatListBulleted } from "react-icons/md";

const ToolbarSeparator = () => (
  <div className="h-2.5 w-0.5 rounded-full bg-[#dadada]" />
);

const ToolbarGroup = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-full w-fit cursor-pointer flex-row items-center gap-1.5 rounded-md bg-[#f0f0f0] px-2 text-[#a5a5a5]">
    {children}
  </div>
);

const ToolbarSelect = ({ label, full }: { label: string; full?: boolean }) => (
  <div
    className={`flex ${full ? "w-full" : "w-fit"} cursor-pointer items-center justify-between gap-1 rounded-md bg-[#f0f0f0] px-2 pl-2.5`}
  >
    <span className="text-xs font-normal">{label}</span>
    <BiExpandVertical size={10} className="shrink-0" />
  </div>
);

export const WindowToolbar = () => (
  <div className="flex h-6 w-full gap-1 whitespace-nowrap text-[#707070] select-none">
    <ToolbarGroup>
      <FaBold size={10} />
      <ToolbarSeparator />
      <FaItalic size={10} />
      <ToolbarSeparator />
      <FaUnderline size={10} />
      <ToolbarSeparator />
      <FaStrikethrough size={10} />
    </ToolbarGroup>

    <div className="aspect-square h-6 w-6 cursor-pointer rounded-md bg-[#f0f0f0] p-0.5">
      <div className="h-full w-full rounded-sm bg-[#ffffff]" />
    </div>

    <ToolbarSelect label="Nikkei Maru" full />
    <ToolbarSelect label="Light" full />
    <ToolbarSelect label="12" />

    <ToolbarGroup>
      <FaAlignLeft size={10} />
      <ToolbarSeparator />
      <FaAlignCenter size={10} />
      <ToolbarSeparator />
      <FaAlignRight size={10} />
      <ToolbarSeparator />
      <FaAlignJustify size={10} />
    </ToolbarGroup>

    <div className="flex cursor-pointer items-center gap-1 rounded-md bg-[#f0f0f0] px-2">
      <MdFormatListBulleted size={12} />
      <FaChevronDown size={8} />
    </div>
  </div>
);
