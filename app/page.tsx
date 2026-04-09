import StickerSandbox from "@/app/components/StickerSandbox"

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-black min-h-screen">

      <div className="flex flex-col items-center border border-white/10 rounded-lg overflow-auto">
        <StickerSandbox />
      </div>

    </main>
  )
}