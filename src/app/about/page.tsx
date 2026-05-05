"use client";

import { FaRegFilePdf } from "react-icons/fa6";
import { MdOutlineDownload } from "react-icons/md";

import Boilerplate from "@/src/components/global/Boilerplate";
import AnimateFlyIn from "@/src/components/global/effects/AnimateFlyIn";
import FooterButton from "@/src/components/global/Redirect";

import { AboutWindow } from "@/src/components/page-about/AboutWindow";
import { WindowToolbar } from "@/src/components/page-about/WindowToolbar";
import { WindowImage } from "@/src/components/page-about/WindowImage";

import { PARAGRAPHS } from "@/src/lib/about.data";

export default function AboutPage() {
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
        } else {
          return <span key={`${lineIndex}-${index}`}>{part}</span>;
        }
      });

      return lineIndex < lines.length - 1
        ? [...parsed, <br key={`br-${lineIndex}`} className="max-md:hidden" />]
        : parsed;
    });
  };

  return (
    <Boilerplate
      dividers={true}
      className="flex h-auto flex-1 flex-col items-center justify-center gap-3"
    >
      <AnimateFlyIn delay={100} className="mb-4 flex w-full gap-3">
        <AboutWindow title="about_me.md — Edited" className="w-full">
          <WindowToolbar />
          <article className="flex w-full flex-col gap-3 p-2 pt-4 font-light">
            <h2 className="text-2xl font-normal">
              Hey there!
              <span className="mx-0.5 mb-1 inline-block h-5 w-0.5 animate-[caret_1.1s_ease-in-out_infinite] bg-[#393939] align-middle" />
            </h2>
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
              className="flex w-full items-center gap-3 rounded-sm border border-[#f0f0f0] px-3.5 py-2.5 text-sm font-light text-[#a5a5a5] transition-colors hover:bg-[#f9f9f9]"
            >
              <FaRegFilePdf size={16} />
              <span className="w-full text-[#393939]">
                nzwh_resume_cv_2026.pdf
              </span>
              <MdOutlineDownload size={16} />
            </a>
          </article>
        </AboutWindow>

        <aside className="relative flex w-52 shrink-0 flex-col gap-3 self-stretch text-sm max-md:hidden">
          <WindowImage
            src="/images/about/photo1.jpg"
            title="0001.jpg"
            className="z-3 h-full"
          />
          <WindowImage
            src="/images/about/photo2.jpg"
            title="0002.jpg"
            className="absolute top-40 right-14 z-4 h-68"
          />
          <WindowImage
            src="/images/about/photo3.jpg"
            title="0003.jpg"
            className="z-5 h-40"
          />
        </aside>
      </AnimateFlyIn>

      <FooterButton
        left="send—me—an—email—!"
        right="notzerowh@gmail.com"
        href="mailto:notzerowh@gmail.com"
      />
    </Boilerplate>
  );
}
