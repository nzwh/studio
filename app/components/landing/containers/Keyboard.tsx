import { useState } from "react"
import { concrete } from "@/app/fonts/fonts"
import { FiLoader } from "react-icons/fi"
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowUp, MdKeyboardCommandKey, MdKeyboardOptionKey } from "react-icons/md"

const Keycap = ({ children, text, fill }: { children?: React.ReactNode, text?: string, fill?: boolean }) => {
  return (
    <div className={`relative h-full cursor-pointer select-none ${fill ? 'w-full' : 'w-fit'}`}>
      <div className="absolute inset-0 bg-[#dddddd] rounded-md translate-y-1" />
      <div className="relative bg-linear-to-b from-[#ffffff] to-[#dadada] p-px rounded-md h-full text-[#393939] transition-transform active:translate-y-1 duration-100">
        <div className="flex justify-center items-center bg-linear-to-b from-[#f2f2f2] to-[#ffffff] p-2 rounded-md h-full font-light text-xs tracking-tight">
          {text
            ? <h4 className="text-[1.625rem] tracking-tight whitespace-nowrap">{text}</h4>
            : children
          }
        </div>
      </div>
    </div>
  )
}

const Dial = () => {
  const [spinning, setSpinning] = useState(false)
  return (
    <div className="relative h-full aspect-square cursor-pointer select-none">
      <div className="absolute inset-0 bg-[#F0F0F0] rounded-full translate-y-1" />
      <div
        onClick={() => !spinning && setSpinning(true)}
        onAnimationEnd={() => setSpinning(false)}
        className="relative bg-linear-to-b from-[#ffffff] to-[#dadada] p-px rounded-full h-full text-[#393939]"
        style={spinning ? { animation: "spin-once 3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards" } : {}}
      >
        <div className="flex justify-center items-center bg-linear-to-b from-[#f2f2f2] to-[#ffffff] p-2 rounded-full h-full font-light text-xs tracking-tight">
          <FiLoader size={20} color="#a5a5a5"/>
        </div>
      </div>
    </div>
  )
}

export default function Keyboard() {
  return (
    <main className="z-10 flex flex-col justify-center items-center gap-0.5 bg-[#ffffff] shadow-[0_16px_36px_0_rgba(0,0,0,0.05),0_8px_0_0_#F0F0F0] p-3 pb-4 border border-[#dadada] rounded-lg w-full text-[#393939]">
      <section className="flex flex-row gap-1 w-full h-10">
        <Keycap fill={true}>
          <h6 className={`text-xs font-bold -tracking-widest italic text-[#a5a5a5] ${concrete.className}`}>
            nzwh
          </h6>
        </Keycap>
        {["hey there!", "i'm van.", "👋", "i create solutions,", "🔎", "design it,"].map((text, i) => (
          <Keycap key={i} text={text} />
        ))}
        <Dial></Dial>
      </section>
      <section className="flex flex-row gap-1 mt-1 w-full h-10">
        <Keycap fill={true}>
          <h6 className={`text-lg text-[#a5a5a5]`}>ദ്ദി(ᵔ—ᵔ)</h6>
        </Keycap>
        {["and", "⌨️", "write the code", "to bring the", "idea", "💡", "to life." ].map((text, i) => (
          <Keycap key={i} text={text} />
        ))}
      </section>
      <section className="flex flex-row gap-1 mt-1 w-full h-10">
        {["✏️", "ui/ux,", "front—end dev", "product design", "💬💬", "i'll handle it.", "🤞"].map((text, i) => (
          <Keycap key={i} text={text} />
        ))}
      </section>
      <section className="flex flex-row gap-1 mt-1 w-full h-10">
        <Keycap><MdKeyboardCommandKey size={20} color="#a5a5a5"/></Keycap>
        <Keycap><MdKeyboardOptionKey size={20} color="#a5a5a5"/></Keycap>
        {["need anything", "done?", "🥽", "let's work on it.", "🤝"].map((text, i) => (
          <Keycap key={i} text={text} />
        ))}
        <div className="flex flex-row gap-1 w-full h-full min-h-0">
          <Keycap fill={true}><MdKeyboardArrowLeft size={16} color="#a5a5a5"/></Keycap>
          <div className="flex flex-col gap-1 w-10 h-full min-h-0 shrink-0">
            <div className="flex-1 min-h-0"><Keycap fill={true}><MdKeyboardArrowUp size={16} color="#a5a5a5"/></Keycap></div>
            <div className="flex-1 min-h-0"><Keycap fill={true}><MdKeyboardArrowDown size={16} color="#a5a5a5"/></Keycap></div>
          </div>
          <Keycap fill={true}><MdKeyboardArrowRight size={16} color="#a5a5a5"/></Keycap>
        </div>
      </section>
    </main>
  )
}