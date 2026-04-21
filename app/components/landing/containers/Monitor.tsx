import dynamic from 'next/dynamic';
import Link from 'next/link';

import { MdAllInbox, MdOutlinePlayCircle, MdOutlineDarkMode, MdOutlineWbCloudy } from "react-icons/md";
import { FaBehance, FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

import MonitorShape from '../MonitorShape';
import DitherCanvas from '../sandbox/DitherCanvas';
import DateTime from '../DateTime';
import { SiGmail } from 'react-icons/si';

import { redaction20 } from '@/app/fonts/fonts';

const SandboxCanvas = dynamic(() => import("@/app/components/landing/sandbox/SandboxCanvas"), {
  ssr: false,
});

const KeyButton = ({ icon: Icon, url, 'data-cursor': dataCursor }: { 
  icon: React.ComponentType<{ size?: number }>, 
  url: string,
  'data-cursor'?: string 
}) => (
  <div className="bg-linear-to-b from-[#ffffff] to-[#dadada] shadow-[0_4px_0_0_#F0F0F0] p-px rounded-lg text-[#393939]">
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor={dataCursor}
      className="flex justify-center items-center bg-linear-to-b from-[#f2f2f2] to-[#ffffff] p-2 rounded-lg font-light text-xs tracking-tight transition-all hover:-translate-y-1 duration-300"
    >
      <Icon size={12} />
    </Link>
  </div>
)

export default function Monitor() {
  return (
    <main className="relative shadow-[0_16px_36px_0_rgba(0,0,0,0.05),0_8px_0_0_#F0F0F0] my-36 rounded-lg w-full select-none">
      <main className="absolute inset-0 flex flex-col gap-2 m-3 text-[#888888]">
        <section className="flex flex-row justify-between w-full cursor-default">
          <div className="flex flex-row items-center gap-2">
            <MdAllInbox size={14} />
            <h6 className="text-xs tracking-tight">Intellecture</h6>
            <h6 className="font-light text-xs tracking-tight">Futurist-based Architect</h6>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div data-cursor="where i'm based on" className="flex flex-row items-center gap-2">
              <MdOutlineWbCloudy size={14} />
              <span className="font-light text-xs tracking-tight">Manila, PH</span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <MdOutlinePlayCircle size={14} /><MdOutlineDarkMode size={14} />
            </div>
            <DateTime className="font-light text-xs tracking-tight" />
          </div>
        </section>

        <section className="@container mb-3 rounded-sm w-full h-full">
          <div className="relative shadow-[inset_0_-20px_50px_0_rgba(0,0,0,0.05)] border border-[#f0f0f0] rounded-lg w-full h-full overflow-hidden">
            <canvas
              className="z-10 absolute inset-0 w-full h-full pointer-events-none"
              ref={(c) => {
                if (!c) return
                const section = c.parentElement!
                const W = section.offsetWidth
                const H = section.offsetHeight
                DitherCanvas(c, W, H)
              }}
            />
            <SandboxCanvas />
            
            <div className="top-3 left-3 absolute flex flex-row items-center gap-1 pointer-events-none">
              <div className="bg-[#dadada] rounded w-1.5 h-1.5"></div>
              <div className="bg-[#dadada] rounded w-1.5 h-1.5"></div>
              <div className="bg-[#dadada] rounded w-1.5 h-1.5"></div>
            </div>
            <span className="top-1/9 left-1/2 -z-10 absolute font-light text-[#c0c0c0] text-[0.5rem] tracking-tight -translate-x-1/2 -translate-y-1/2 pointer-events-none">click for a surprise</span>
            <span className={`${redaction20.className} top-[42%] left-[45%] -z-10 absolute font-thin italic [-webkit-text-stroke:2px_#dadada] text-[#ffffff] text-[30rem] tracking-[-4rem] [paint-order:stroke_fill] -translate-x-1/2 -translate-y-1/2 pointer-events-none`}>nzwh</span>
          </div>
        </section>

        <section className="bottom-0 left-1/2 z-11 absolute flex flex-row gap-1.5 bg-[#ffffff] shadow-[0_2px_8px_0_rgba(0,0,0,0.04)] px-2 pt-1.5 pb-2 border border-[#f0f0f0] rounded-xl w-fit -translate-x-1/2">
          <KeyButton data-cursor="email me!" icon={SiGmail} url="mailto:notzerowh@gmail.com" />
          <KeyButton data-cursor="@arkusgray on x!" icon={FaXTwitter} url="https://x.com/arkusgray" />
          <KeyButton data-cursor="@arkusgray on instagram!" icon={FaInstagram} url="https://instagram.com/arkusgray" />
          <KeyButton data-cursor="@nzwh on github!" icon={FaGithub} url="https://github.com/nzwh" />
          <KeyButton data-cursor="@nzwh on linkedin!" icon={FaLinkedin} url="https://linkedin.com/in/nzwh" />
          <KeyButton data-cursor="@nzwh on behance!" icon={FaBehance} url="https://behance.net/nzwh" />
        </section>
      </main>
      <MonitorShape className="w-full h-auto" stroke="#dadada" />
    </main>
  )
}