"use client";

import Boilerplate from "@/src/components/global/Boilerplate";
import Divider from "@/src/components/global/Divider";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiExpandVertical } from "react-icons/bi";
import {
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaChevronDown,
  FaItalic,
  FaRegFile,
  FaStrikethrough,
  FaUnderline,
} from "react-icons/fa6";
import { MdFormatListBulleted, MdOutlineDownload } from "react-icons/md";

const PARAGRAPHS = [
  "I'm Van Serato, also known as **nzwh**. I'm a graduate from De La Salle University, a **front-end developer** and **UI/UX designer** based in Manila.",
  'I\'ve been designing and coding since high school, and I like looking at\n problems and thinking, **"I know a good solution for this"**. I can work both independently and as a team player, and I keep improving until \nsomething is ready to ship.',
  "My ideology is simple: **design is more important than you think**. It's a \nfirst impression, and it's proof that something has been thought out well. \nTo implement **good design**, **proper code** needs to back it up",
  "Other than that, I like playing HSR and AKE, listening to music, taking \npictures, drinking coffee, and observing the world for what it's worth.",
  "**I'm currently open to work!** Feel free to reach out if you have \nsomething you want to build. I'd love to work on something together.",
];

export default function AboutPage() {
  const [showCV, setShowCV] = useState(false);
  const HandleShowCV = (showCV: boolean) => {
    setShowCV(!showCV);
  };

  const ParseMarkdown = (text: string) => {
    return text.split("\n").flatMap((line, lineIndex, lines) => {
      const parts = line.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
      const parsed = parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={`${lineIndex}-${index}`} className="font-normal">
              {part.slice(2, -2)}
            </strong>
          );
        } else if (part.startsWith("*") && part.endsWith("*")) {
          return (
            <em key={`${lineIndex}-${index}`} className="italic">
              {part.slice(1, -1)}
            </em>
          );
        } else {
          return <span key={`${lineIndex}-${index}`}>{part}</span>;
        }
      });

      return lineIndex < lines.length - 1
        ? [...parsed, <br key={`br-${lineIndex}`} />]
        : parsed;
    });
  };

  return (
    <Boilerplate
      dividers={true}
      className="flex h-auto flex-1 flex-col items-center justify-center gap-3"
    >
      <section className="mb-4 flex w-full gap-3">
        <Window title="about_me.md — Edited" className="w-full">
          <Toolbar />
          <article className="flex w-full flex-col gap-3 p-2 pt-4 font-light">
            <h2 className="text-2xl font-normal">Hey there!</h2>
            <div className="flex flex-col gap-3">
              {PARAGRAPHS.map((paragraph, index) => (
                <p key={index} className="leading-5.5 text-[#393939]">
                  {ParseMarkdown(paragraph)}
                </p>
              ))}
            </div>
            <a
              href="/nzwh_resume_2026_van_serato.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center gap-2 rounded-sm border border-[#f0f0f0] px-3 py-2 transition-colors hover:bg-[#f9f9f9]"
            >
              <FaRegFile size={16} className="text-[#a5a5a5]" />
              <span className="w-full text-sm font-light text-[#393939]">
                nzwh_resume_cv_2026.pdf
              </span>
              <MdOutlineDownload size={16} className="text-[#a5a5a5]" />
            </a>
          </article>
        </Window>

        <aside className="relative flex w-50 shrink-0 flex-col gap-3 self-stretch text-sm">
          <Window title="portrait.jpg" className="z-3 h-full w-full">
            <div className="relative w-full" style={{ minHeight: "100%" }}>
              <Image
                src="/placeholder.jpg"
                alt="portrait"
                fill
                sizes="208px"
                className="rounded-sm object-cover"
              />
            </div>
          </Window>
          <Window
            title="portrait.jpg"
            className="absolute top-2/5 right-10 z-4 h-64 w-full"
          >
            <div className="relative w-full" style={{ minHeight: "100%" }}>
              <Image
                src="/placeholder.jpg"
                alt="portrait"
                fill
                sizes="208px"
                className="rounded-sm object-cover"
              />
            </div>
          </Window>
          <Window title="portrait.jpg" className="z-5 h-40 w-full">
            <div className="relative w-full" style={{ minHeight: "100%" }}>
              <Image
                src="/placeholder.jpg"
                alt="portrait"
                fill
                sizes="208px"
                className="rounded-sm object-cover"
              />
            </div>
          </Window>
        </aside>
      </section>

      <Divider type="short" />
      <button
        className="flex h-fit w-full cursor-pointer justify-between gap-6 transition-transform duration-200 hover:translate-y-1"
        onClick={() => HandleShowCV(showCV)}
      >
        <span className="text-sm font-light text-[#393939]">
          send—me—an—email—!
        </span>
        <Link
          href="mailto:notzerowh@gmail.com"
          className="text-sm font-normal tracking-tight text-indigo-400 underline"
        >
          notzerowh@gmail.com
        </Link>
      </button>
    </Boilerplate>
  );
}

const Window = ({
  className,
  title,
  children,
}: {
  className?: string;
  title?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`shadow-card flex flex-col gap-2 bg-[#ffffff] ${className} rounded-lg border border-[#f0f0f0] p-2`}
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center">
        <div className="flex gap-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#dddddd]" />
          ))}
        </div>
        <h3 className="text-[10px] leading-2 font-light text-[#707070]">
          {title}
        </h3>
        <div />
      </div>
      <div className="min-h-0 flex-1">{children}</div>
    </div>
  );
};

const Toolbar = () => {
  return (
    <div className="flex h-6 w-full gap-1">
      <div className="flex h-full w-fit flex-row items-center gap-1.5 rounded-sm bg-[#f0f0f0] px-2 text-[#a5a5a5]">
        <FaBold size={8} />{" "}
        <div className="h-2.5 w-0.5 rounded-full bg-[#dadada]" />
        <FaItalic size={8} />{" "}
        <div className="h-2.5 w-0.5 rounded-full bg-[#dadada]" />
        <FaUnderline size={8} />{" "}
        <div className="h-2.5 w-0.5 rounded-full bg-[#dadada]" />
        <FaStrikethrough size={8} />
      </div>
      <div className="aspect-square h-6 w-6 rounded-sm bg-[#f0f0f0] p-0.5">
        <div className="h-full w-full rounded-xs bg-[#ffffff]" />
      </div>

      <div className="flex w-full items-center gap-1 rounded-sm bg-[#f0f0f0] px-2 pl-2.5">
        <span className="w-full text-xs font-normal text-[#707070]">
          Helvetica
        </span>
        <BiExpandVertical size={10} className="text-[#707070]" />
      </div>
      <div className="flex w-full items-center gap-1 rounded-sm bg-[#f0f0f0] px-2 pl-2.5">
        <span className="w-full text-xs font-normal text-[#707070]">
          Regular
        </span>
        <BiExpandVertical size={10} className="text-[#707070]" />
      </div>
      <div className="flex items-center gap-1 rounded-sm bg-[#f0f0f0] px-2 pl-2.5">
        <span className="text-xs font-normal text-[#707070]">12</span>
        <BiExpandVertical size={10} className="text-[#707070]" />
      </div>
      <div className="flex h-full w-fit flex-row items-center gap-1.5 rounded-sm bg-[#f0f0f0] px-2 text-[#a5a5a5]">
        <FaAlignLeft size={10} />{" "}
        <div className="h-2.5 w-0.5 rounded-full bg-[#dadada]" />
        <FaAlignCenter size={10} />{" "}
        <div className="h-2.5 w-0.5 rounded-full bg-[#dadada]" />
        <FaAlignRight size={10} />{" "}
        <div className="h-2.5 w-0.5 rounded-full bg-[#dadada]" />
        <FaAlignJustify size={10} />
      </div>
      <div className="flex items-center gap-1 rounded-sm bg-[#f0f0f0] px-2">
        <MdFormatListBulleted size={12} className="text-[#707070]" />
        <FaChevronDown size={8} className="text-[#707070]" />
      </div>
    </div>
  );
};
