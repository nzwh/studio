import Link from "next/link";
import Logo from "../Logo";

const NAV_LINKS = [
  { href: "/about", label: "—cv", cursor: "download my cv" },
  { href: "/works", label: "—works", cursor: "view my works" },
  { href: "/connect", label: "—connect", cursor: "get in touch" },
  { href: "/archive", label: "—playground", cursor: "visit my playground" },
];

export default function GlobalNav() {
  return (
    <nav className="flex cursor-default items-center justify-between py-6 select-none">
      <div className="flex flex-row items-center gap-4">
        <Logo />
        <div
          data-cursor="and some more..."
          className="flex flex-col text-[0.625rem] leading-2.5 font-light whitespace-nowrap"
        >
          <span>UI/UX Designer</span>
          <span>Front-end Engineer</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {NAV_LINKS.map(({ href, label, cursor }) => (
          <div key={href} className="group">
            <Link
              href={href}
              data-cursor={cursor}
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
