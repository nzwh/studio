import dynamic from "next/dynamic";
import Link from "next/link";

import {
  MdAllInbox,
  MdOutlineDarkMode,
  MdOutlinePlayCircle,
  MdOutlineWbCloudy,
} from "react-icons/md";

import { redaction20 } from "@/app/fonts/fonts";
import { useClick } from "@/app/hooks/useClick";

import MonitorShape from "../../shapes/MonitorShape";
import DitherCanvas from "../sandbox/DitherCanvas";
import DateTime from "../DateTime";
import { SOCIALS } from "@/app/lib/socials";

const SandboxCanvas = dynamic(
  () => import("@/app/components/landing/sandbox/SandboxCanvas"),
  { ssr: false },
);

export default function Monitor() {
  const click = useClick();
  return (
    <div className="relative z-0 w-full rounded-lg shadow-[0_16px_36px_0_rgba(0,0,0,0.05),0_8px_0_0_#F0F0F0] select-none">
      <div className="absolute inset-0 m-3 flex flex-col gap-2 text-[#888888]">
        <section className="flex w-full cursor-default flex-row justify-between">
          <div className="flex items-center gap-2">
            <MdAllInbox size={14} />
            <h6 className="text-xs tracking-tight">Intellecture</h6>
            <h6 className="text-xs font-light tracking-tight">
              Futurist-based Architect
            </h6>
          </div>
          <div className="flex items-center gap-3">
            <div
              data-cursor="where i'm based on"
              className="flex items-center gap-2"
            >
              <MdOutlineWbCloudy size={14} />
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
                if (!c) return;
                const section = c.parentElement!;
                DitherCanvas(c, section.offsetWidth, section.offsetHeight);
              }}
            />
            <SandboxCanvas />
            <div className="pointer-events-none absolute top-3 left-3 flex gap-1">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="h-1 w-1 rounded bg-[#dadada]" />
              ))}
            </div>
            <span className="pointer-events-none absolute top-1/9 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-[0.5rem] font-light tracking-tight text-[#c0c0c0]">
              click for a surprise
            </span>
            <span
              className={`${redaction20.className} pointer-events-none absolute top-[42%] left-[45%] z-0 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-normal tracking-[-4rem] text-[#ffffff] italic [-webkit-text-stroke:2px_#dadada] [paint-order:stroke_fill]`}
            >
              nzwh
            </span>
          </div>
        </section>

        <section className="absolute bottom-0 left-1/2 z-11 flex w-fit -translate-x-1/2 gap-1.5 rounded-xl border border-[#f0f0f0] bg-[#ffffff] px-2 pt-1.5 pb-2 shadow-[0_2px_8px_0_rgba(0,0,0,0.04)]">
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
  <div className="bg-keycap rounded-lg p-px text-[#393939] shadow-[0_4px_0_0_#F0F0F0]">
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor={cursor}
      className="bg-keycap-inner flex items-center justify-center rounded-lg p-2 text-xs font-light tracking-tight transition-all duration-300 hover:-translate-y-1"
    >
      <Icon size={12} />
    </Link>
  </div>
);
