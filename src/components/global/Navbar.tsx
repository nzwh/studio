"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useLenis } from "./effects/LenisScroll";

const NAV_LINKS = [
  { href: "/#work", label: "—works", cursor: "see my work" },
  { href: "/about", label: "—about", cursor: "more about me" },
  { href: "/playground", label: "—playground", cursor: "visit my playground" },
];

export default function Navbar() {
  const lenis = useLenis();

  const HandleScroll = (e: React.MouseEvent, href: string) => {
    if (!href.startsWith("/#")) return;
    e.preventDefault();
    const id = href.replace("/#", "");
    const el = document.getElementById(id);
    if (el) lenis?.scrollTo(el, { duration: 1.2 });
  };

  return (
    <nav className="flex w-200 items-center justify-between px-6 py-4 select-none max-md:w-full max-md:px-0">
      <div className="flex items-center gap-4">
        <Logo />
        <div
          className="flex flex-col text-[0.625rem] leading-2.5 font-light whitespace-nowrap"
          data-cursor="and more!"
        >
          <span>Front-end Engineer</span>
          <span>UI/UX Designer</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {NAV_LINKS.map(({ href, label, cursor }) => (
          <div key={href} className="group">
            <Link
              href={href}
              data-cursor={cursor}
              onClick={(e) => HandleScroll(e, href)}
              className="block text-sm font-light tracking-tight whitespace-nowrap transition-transform duration-200 group-hover:-translate-y-0.5"
            >
              {label}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
