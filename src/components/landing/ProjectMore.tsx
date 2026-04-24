import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProjectMore() {
  return (
    <Link
      href="/works"
      className="flex w-full flex-row justify-between text-sm font-light tracking-tight text-[#393939] transition-transform duration-200 hover:-translate-y-1"
    >
      <span>see—more—works—here</span>
      <div className="flex flex-row items-center gap-1">
        {Array.from({ length: 4 }).map((_, i) => (
          <FaArrowRightLong key={i} size={12} />
        ))}
      </div>
    </Link>
  );
}
