import dynamic from "next/dynamic";
import Link from "next/link";

import {
  MdAllInbox,
  MdLocationSearching,
  MdOutlineDarkMode,
  MdOutlinePlayCircle,
} from "react-icons/md";

import { useClick } from "@/src/hooks/useClick";

import MonitorShape from "../svgs/shapes/Monitor";
import DitherCanvas from "./sandbox/DitherCanvas";
import DateTime from "./MonitorDateTime";
import { SOCIALS } from "@/src/lib/socials";
import { useState } from "react";

const SandboxCanvas = dynamic(
  () => import("@/src/components/page-landing/sandbox/SandboxCanvas"),
  { ssr: false },
);

const LocModal = () => (
  <div className="absolute top-5 left-1/2 z-10 flex w-60 -translate-x-1/2 flex-row gap-2 rounded-md border border-[#f0f0f0] bg-[#ffffff]/80 p-2 tracking-tight text-[#393939] backdrop-blur-sm">
    <p className="text-sm font-normal">Location Modal</p>
  </div>
);

const PlayModal = () => (
  <div className="absolute top-5 left-1/2 z-10 flex w-60 -translate-x-1/2 flex-row gap-2 rounded-md border border-[#f0f0f0] bg-[#ffffff]/80 p-2 tracking-tight text-[#393939] backdrop-blur-sm">
    <p className="text-sm font-normal">Now Playing Modal</p>
  </div>
);

const DarkModeModal = () => (
  <div className="absolute top-5 left-1/2 z-10 flex w-60 -translate-x-1/2 flex-row gap-2 rounded-md border border-[#f0f0f0] bg-[#ffffff]/80 p-2 tracking-tight text-[#393939] backdrop-blur-sm">
    <p className="text-sm font-normal">Dark Mode Modal</p>
  </div>
);

export default function LandingMonitor() {
  const click = useClick();

  const [isLocModalOpen, setIsLocModalOpen] = useState(false);
  const [isPlayModalOpen, setIsPlayModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const HandleLocClick = () => {
    setIsLocModalOpen(!isLocModalOpen);
    setIsPlayModalOpen(false);
    setIsDarkMode(false);
  };
  const HandlePlayClick = () => {
    setIsPlayModalOpen(!isPlayModalOpen);
    setIsLocModalOpen(false);
    setIsDarkMode(false);
  };
  const HandleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
    setIsLocModalOpen(false);
    setIsPlayModalOpen(false);
  };

  return (
    <div className="shadow-card relative z-0 w-full rounded-lg whitespace-nowrap select-none">
      <div className="absolute inset-0 m-3 flex flex-col gap-2 text-[#888888]">
        <section className="flex w-full cursor-default flex-row justify-between">
          <div className="flex items-center gap-2">
            <MdAllInbox size={14} />
            <h6 className="text-xs tracking-tight">Intellecture</h6>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="relative cursor-pointer" onClick={HandleLocClick}>
                <MdLocationSearching size={14} />
                {isLocModalOpen && <LocModal />}
              </div>
              <div
                className="relative cursor-pointer"
                onClick={HandlePlayClick}
              >
                <MdOutlinePlayCircle size={14} />
                {isPlayModalOpen && <PlayModal />}
              </div>
              <div
                className="relative cursor-pointer"
                onClick={HandleDarkModeClick}
              >
                <MdOutlineDarkMode size={14} />
                {isDarkMode && <DarkModeModal />}
              </div>
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
          </div>
        </section>

        <section className="absolute bottom-0 left-1/2 z-11 flex w-fit -translate-x-1/2 gap-1.5 rounded-xl border border-[#f0f0f0] bg-[#ffffff]/50 p-2 pb-2.5 shadow-[0_2px_8px_0_rgba(0,0,0,0.04)] backdrop-blur-sm">
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
  <div className="bg-keycap rounded-lg p-px text-[#393939] shadow-[0_2px_0_0_#F0F0F0] transition-all duration-300 hover:-translate-y-1">
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor={cursor}
      className="bg-keycap-inner flex items-center justify-center rounded-lg p-2 text-xs font-light tracking-tight"
    >
      <Icon size={14} />
    </Link>
  </div>
);
