import dynamic from "next/dynamic";
import Link from "next/link";

import {
  MdAllInbox,
  MdOutlineDarkMode,
  MdOutlinePlayCircle,
} from "react-icons/md";

import { redaction20 } from "@/src/fonts/fonts";
import { useClick } from "@/src/hooks/useClick";

import MonitorShape from "../svgs/shapes/Monitor";
import DitherCanvas from "./sandbox/DitherCanvas";
import DateTime from "./DateTime";
import { SOCIALS } from "@/src/lib/socials";
import { FaLocationArrow } from "react-icons/fa6";

const SandboxCanvas = dynamic(
  () => import("@/src/components/landing/sandbox/SandboxCanvas"),
  { ssr: false },
);

export default function Monitor() {
  const click = useClick();
  return (
    <div className="relative z-0 w-full rounded-lg whitespace-nowrap shadow-[0_16px_36px_0_rgba(0,0,0,0.05),0_8px_0_0_#F0F0F0] select-none">
      <div className="absolute inset-0 m-3 flex flex-col gap-2 text-[#888888]">
        <section className="flex w-full cursor-default flex-row justify-between">
          <div className="flex items-center gap-2">
            <MdAllInbox size={14} />
            <h6 className="text-xs tracking-tight">Intellecture</h6>
            <h6
              data-cursor="currently looking for work"
              className="text-xs font-light tracking-tight"
            >
              Open to new opportunities!
            </h6>
          </div>
          <div className="flex items-center gap-3">
            <div
              data-cursor="where i'm based on"
              className="flex items-center gap-1"
            >
              <FaLocationArrow size={14} />
              <span className="text-xs font-light tracking-tight">
                Manila, PH
              </span>
            </div>
            <div className="flex items-center gap-1">
              <MdOutlinePlayCircle size={14} />
              <MdOutlineDarkMode size={14} />
            </div>
            <DateTime className="text-xs font-light tracking-tight" />
          </div>
        </section>

        <section className="mb-3 h-full w-full rounded-sm">
          <div
            className="relative h-full w-full overflow-hidden rounded-lg border border-[#f0f0f0] shadow-[inset_0_-20px_50px_0_rgba(0,0,0,0.05)]"
            {...click}
          >
            <canvas
              className="pointer-events-none absolute inset-0 z-10 h-full w-full"
              ref={(c) => {
                if (!c || !c.parentElement) return;
                DitherCanvas(
                  c,
                  c.parentElement.offsetWidth,
                  c.parentElement.offsetHeight,
                );
              }}
            />
            <SandboxCanvas />
            <div className="pointer-events-none absolute top-3 left-3 flex gap-1">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="h-1 w-1 rounded bg-[#dadada]" />
              ))}
            </div>
            <span className="pointer-events-none absolute top-1/11 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-xs font-light tracking-tight text-[#c0c0c0]">
              click for a surprise
            </span>
            <span
              className={`${redaction20.className} pointer-events-none absolute top-[42%] left-[45%] z-0 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-normal tracking-[-4rem] text-[#ffffff] italic [-webkit-text-stroke:2px_#dadada] [paint-order:stroke_fill]`}
            >
              nzwh
            </span>
          </div>
        </section>

        <section className="absolute bottom-0 left-1/2 z-11 flex w-fit -translate-x-1/2 gap-1.5 rounded-xl border border-[#f0f0f0] bg-[#ffffff]/50 p-2 shadow-[0_2px_8px_0_rgba(0,0,0,0.04)] backdrop-blur-md">
          {SOCIALS.map(({ icon, href, cursor }) => (
            <KeyButton key={href} icon={icon} url={href} cursor={cursor} />
          ))}
        </section>
      </div>
      <MonitorShape className="h-auto w-full" stroke="#dadada" fill="#ffffff" />
    </div>
  );
}

const KeyButton = ({
  icon: Icon,
  url,
  cursor,
}: {
  icon: React.ComponentType<{ size?: number }>;
  url: string;
  cursor?: string;
}) => (
  <div className="bg-keycap rounded-md p-px text-[#393939] shadow-[0_3px_0_0_#F0F0F0] transition-all duration-300 hover:-translate-y-1">
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor={cursor}
      className="bg-keycap-inner flex items-center justify-center rounded-md p-2 text-xs font-light tracking-tight"
    >
      <Icon size={14} />
    </Link>
  </div>
);
