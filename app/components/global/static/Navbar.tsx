import Link from "next/link";
import Logo from "../Logo";

export default function GlobalNav() {
  return (
    <nav className="flex justify-between items-center py-6 cursor-default select-none">
      <div className="flex flex-row items-center gap-4">
        <Logo />
        <div className="flex flex-col font-light text-[0.625rem] leading-2.5">
          <span>UI/UX Designer</span>
          <span>Front-end Engineer</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/about" className="font-light text-sm tracking-tight">
          —cv
        </Link>
        <Link href="/works" className="font-light text-sm tracking-tight">
          —works
        </Link>
        <Link href="/connect" className="font-light text-sm tracking-tight">
          —connect
        </Link>
        <Link href="/archive" className="font-light text-sm tracking-tight">
          —playground
        </Link>
      </div>
    </nav>
  );
}
