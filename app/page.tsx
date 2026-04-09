import StickerSandbox from "@/app/components/StickerSandbox"

export default function Home() {
  return (
    <main
      className="flex flex-col justify-center items-center gap-4 bg-black w-full min-h-screen">
      <div className="border border-white/10 rounded-lg w-4/5 h-80 overflow-hidden">
        <StickerSandbox />
      </div>
    </main>
  )
}