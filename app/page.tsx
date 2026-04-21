'use client'

import { cmuconcrete } from './fonts/fonts';
import Link from "next/link";

import FooterSocials from "./components/landing/FooterSocials";
import Divider from "./components/landing/Divider";
import Monitor from './components/landing/Monitor';
import Headline from './components/Headline';


export default function Home() {

  return (
    <main className="mx-auto px-6 border-x border-zinc-200 w-200 max-md:w-full">

        <nav className="flex justify-between items-center py-6">
          <div data-cursor="hi there!" className="flex flex-row items-center gap-4">
            <Link href="/" className={`${cmuconcrete.className} font-black text-xl italic tracking-[-0.15em] select-none`}>nzwh</Link>
            <div className="flex flex-col font-light text-[0.625rem] leading-2.5">
              <span>UI/UX Designer</span><span>Front-end Engineer</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/about" className="font-light text-sm tracking-tight">—cv</Link>
            <Link href="/works" className="font-light text-sm tracking-tight">—works</Link>
            <Link href="/connect" className="font-light text-sm tracking-tight">—connect</Link>
            <Link href="/archive" className="font-light text-sm tracking-tight">—playground</Link>
          </div>
        </nav>


        <Divider />
        <Monitor />
        <Divider />

        <nav className="flex justify-between items-center py-6">
          <div className="flex flex-row items-center gap-4">
            <Link href="/" className={`${cmuconcrete.className} font-black text-xl italic tracking-[-0.15em] select-none`}>nzwh</Link>
            <h2 className="font-light text-sm tracking-tighter">@2026 all—rights—reserved</h2>
          </div>

          <FooterSocials />
        </nav>

    </main>
  )
}