'use client'
import dynamic from "next/dynamic";
import { korataki } from './fonts/fonts';

const StickerSandbox = dynamic(() => import("@/app/components/StickerSandbox"), {
  ssr: false,
});
const NowPlaying = dynamic(() => import("@/app/components/NowPlaying"), {
  ssr: false,
});

export default function Home() {

  return (
    <main className="flex flex-col items-center gap-4 bg-black py-8 w-full min-h-screen">
      <div className="flex flex-col items-center gap-32 w-7/12">

        <nav className="flex justify-between items-center w-full h-16">
          <h1 className={`${korataki.className} font-light text-sm`}>nzwh</h1>
          <div className="flex gap-4">
            <a href="/works" className="text-sm">/works</a>
            <a href="/connect" className="text-sm">/connect</a>
            <a href="/archive" className="text-sm">/archive</a>
          </div>
        </nav>

        <section className="border border-white/10 rounded-lg w-full h-80 overflow-hidden pointer-events-none neue-gradient">
          <StickerSandbox />
        </section>

      </div>
    </main>
  )
}