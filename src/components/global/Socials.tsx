import { SOCIALS } from "@/src/lib/socials";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex items-center gap-1">
      {SOCIALS.map(({ icon: Icon, href, username }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-6 w-6 items-center justify-center rounded-sm bg-[#f0f0f0] text-[#707070] transition-all duration-200 hover:bg-[#dadada] hover:text-[#303030]"
          data-cursor={`${href.includes("@") ? "" : "@"}${username}`}
        >
          <Icon size={14} />
        </Link>
      ))}
    </div>
  );
}
