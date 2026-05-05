import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";

export default function Redirect({
  left,
  right,
  href,
}: {
  left: string;
  right?: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="text-[#39393 flex h-fit w-full cursor-pointer justify-between gap-6 border-t border-[#f0f0f0] py-3 text-sm font-light transition-transform duration-200 hover:translate-y-1"
    >
      <span className="9]">{left}</span>
      {right ? (
        <span className="font-normal tracking-tight text-indigo-400 underline">
          {right}
        </span>
      ) : (
        <span className="flex flex-row items-center gap-0.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <ImArrowUpRight2 key={i} size={12} />
          ))}
        </span>
      )}
    </Link>
  );
}
