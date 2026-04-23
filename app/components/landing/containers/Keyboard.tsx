import { useState } from "react";

import { FiLoader } from "react-icons/fi";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
  MdKeyboardCommandKey,
  MdKeyboardOptionKey,
} from "react-icons/md";

import { concrete } from "@/app/fonts/fonts";
import { useThock } from "@/app/hooks/useThock";
import { useClick } from "@/app/hooks/useClick";

type KeySize = "default" | "small";
type KeyData = { text: string; fill?: boolean; size?: KeySize };

const ROWS: KeyData[][] = [
  [
    { text: "nzwh", size: "small" },
    { text: "hey there!" },
    { text: "i'm nzwh.", fill: true },
    { text: "👋" },
    { text: "i create solutions," },
    { text: "🔎" },
    { text: "design it," },
  ],
  [
    { text: "ദ്ദി(ᵔ—ᵔ)", fill: true, size: "small" },
    { text: "and" },
    { text: "⌨️" },
    { text: "write the code" },
    { text: "to bring the" },
    { text: "idea" },
    { text: "💡" },
    { text: "to life." },
  ],
  [
    { text: "✏️" },
    { text: "ui/ux," },
    { text: "front-end," },
    { text: "product design," },
    { text: "full-stack," },
    { text: "i'll handle it." },
    { text: "🤞", fill: true },
  ],
  [
    { text: "need anything" },
    { text: "done?" },
    { text: "🥽" },
    { text: "let's work on it." },
    { text: "🤝" },
  ],
];

const Keycap = ({
  children,
  text,
  fill,
  size = "default",
}: {
  children?: React.ReactNode;
  text?: string;
  fill?: boolean;
  size?: KeySize;
}) => {
  const thock = useThock();
  const textClass =
    size === "small"
      ? `text-xs font-extrabold italic -tracking-widest text-[#a5a5a5] ${concrete.className}`
      : "whitespace-nowrap text-[1.625rem] tracking-tight";

  return (
    <div className={`relative h-full select-none ${fill ? "w-full" : "w-fit"}`}>
      <div className="absolute inset-0 translate-y-1 rounded-md bg-[#dddddd]" />
      <button
        className="bg-keycap relative h-full w-full cursor-pointer rounded-md border-none p-px text-[#393939] transition-transform duration-100 active:translate-y-1"
        {...thock}
      >
        <div className="bg-keycap-inner flex h-full items-center justify-center rounded-md p-2 text-xs font-light tracking-tight">
          {text ? <h4 className={textClass}>{text}</h4> : children}
        </div>
      </button>
    </div>
  );
};

const Dial = () => {
  const [spinning, setSpinning] = useState(false);
  const click = useClick();
  return (
    <div className="relative aspect-square h-full select-none">
      <div className="absolute inset-0 translate-y-1 rounded-full bg-[#dddddd]" />
      <button
        onClick={() => !spinning && setSpinning(true)}
        onAnimationEnd={() => setSpinning(false)}
        className={`bg-keycap relative h-full w-full rounded-full border-none p-px text-[#393939] ${spinning ? "spinning cursor-pointer" : ""}`}
        {...click}
      >
        <div className="bg-keycap-inner flex h-full items-center justify-center rounded-full p-2 text-xs font-light tracking-tight">
          <FiLoader size={20} color="#a5a5a5" />
        </div>
      </button>
    </div>
  );
};

const ArrowCluster = () => (
  <div className="flex h-full w-full gap-1">
    <Keycap fill>
      <MdKeyboardArrowLeft size={16} color="#a5a5a5" />
    </Keycap>
    <div className="flex h-full w-10 shrink-0 flex-col gap-1">
      <div className="min-h-0 flex-1">
        <Keycap fill>
          <MdKeyboardArrowUp size={16} color="#a5a5a5" />
        </Keycap>
      </div>
      <div className="min-h-0 flex-1">
        <Keycap fill>
          <MdKeyboardArrowDown size={16} color="#a5a5a5" />
        </Keycap>
      </div>
    </div>
    <Keycap fill>
      <MdKeyboardArrowRight size={16} color="#a5a5a5" />
    </Keycap>
  </div>
);

export default function Keyboard() {
  return (
    <main className="shadow-card z-10 flex w-full flex-col gap-1.5 overflow-scroll rounded-lg border border-[#dadada] bg-[#ffffff] p-3 pb-4 text-[#393939]">
      <section className="flex h-10 w-full gap-1">
        {ROWS[0].map((key, i) => (
          <Keycap key={i} {...key} />
        ))}
        <Dial />
      </section>
      {ROWS.slice(1, 3).map((row, i) => (
        <section key={i} className="flex h-10 w-full gap-1">
          {row.map((key, j) => (
            <Keycap key={j} {...key} />
          ))}
        </section>
      ))}
      <section className="flex h-10 w-full gap-1">
        <Keycap>
          <MdKeyboardCommandKey size={20} color="#a5a5a5" />
        </Keycap>
        <Keycap>
          <MdKeyboardOptionKey size={20} color="#a5a5a5" />
        </Keycap>
        {ROWS[3].map((key, i) => (
          <Keycap key={i} {...key} />
        ))}
        <ArrowCluster />
      </section>
    </main>
  );
}
