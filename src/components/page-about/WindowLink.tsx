import { FaRegFilePdf } from "react-icons/fa6";
import { MdOutlineDownload } from "react-icons/md";

export const WindowLink = ({ path, name }: { path: string; name: string }) => {
  return (
    <a
      href={path}
      download
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full min-w-0 flex-1 items-center gap-3 rounded-sm border border-[#f0f0f0] px-3.5 py-2.5 text-sm font-light text-[#a5a5a5] transition-colors hover:bg-[#f9f9f9]"
    >
      <FaRegFilePdf size={18} className="shrink-0" />
      <span className="min-w-0 flex-1 text-[#393939]">{name}</span>
      <MdOutlineDownload size={20} className="shrink-0" />
    </a>
  );
};
