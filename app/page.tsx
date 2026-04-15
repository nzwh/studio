'use client'
import dynamic from "next/dynamic";
import { korataki } from './fonts/fonts';

const StickerSandbox = dynamic(() => import("@/app/components/StickerSandbox"), {
  ssr: false,
});
const Headline = dynamic(() => import("@/app/components/Headline"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="flex flex-col items-center gap-4 w-full min-h-screen">
      <div className="flex flex-col gap-24 w-7/12 h-full">

        <nav className="flex justify-between items-center py-8 w-full">
          <h1 className={`${korataki.className} font-light text-xs tracking-tighter`}>nzwh</h1>
          <div className="flex items-center gap-4">
            <a href="/works" className="font-light text-sm tracking-tight">/works</a>
            <a href="/connect" className="font-light text-sm tracking-tight">/connect</a>
            <a href="/archive" className="font-light text-sm tracking-tight">/archive</a>
          </div>
        </nav>
        
        <section className="@container flex flex-col items-center gap-4 w-full pointer-events-none">
          <div className="border border-zinc-200 rounded-lg w-full h-80 overflow-hidden pointer-events-none">
            <StickerSandbox />
          </div>
          <Headline />
        </section>
      </div>

    </main>
  )
}