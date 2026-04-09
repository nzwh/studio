import StickerSandbox from "@/app/components/StickerSandbox"

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-white min-h-screen">

      <div className="flex flex-col items-center gap-4 w-full">
        <StickerSandbox />
      </div>

    </main>
  )
}