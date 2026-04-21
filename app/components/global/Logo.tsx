import { cmuconcrete } from "@/app/fonts/fonts";
import Link from "next/link";

export default function Logo() {
  return(
    <Link 
      href="/" 
      data-cursor="hi there!"
      className={`${cmuconcrete.className} font-black text-xl italic tracking-[-0.15em] select-none cursor-crosshair`}
    >
      nzwh
    </Link>
  )
}