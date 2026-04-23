import { concrete } from "@/app/fonts/fonts";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      data-cursor="hi there! 👋"
      className={`${concrete.className} cursor-crosshair text-xl font-extrabold tracking-[-0.15em] italic select-none`}
    >
      nzwh
    </Link>
  );
}
