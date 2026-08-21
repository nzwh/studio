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

interface ResumeLinkProps {
  path: string;
  name: string;
}
const ResumeLink = ({ path, name }: ResumeLinkProps) => {
  return (
    <a
      href={path}
      download
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full min-w-0 flex-1 items-center gap-3 rounded-sm border border-[#f0f0f0] px-3.5 py-2.5 text-sm font-light text-[#a5a5a5] transition-colors hover:bg-[#f9f9f9]"
    >
      <FaRegFilePdf size={18} className="shrink-0" />
      <span className="min-w-0 flex-1 text-[#393939]">{name}</span>
      <MdOutlineDownload size={20} className="shrink-0" />
    </a>
  );
};

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
      className="flex h-auto w-full min-w-0 flex-1 flex-col items-center justify-center gap-3"
    >
      <AnimateFlyIn delay={100} className="mb-4 flex w-full gap-3">
        <AboutWindow title="about_me.md — Edited" className="w-full min-w-0">
          <WindowToolbar />
          <article className="flex w-full min-w-0 flex-col gap-3 p-2 pt-4 font-light">
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
            <div className="flex w-full min-w-0 flex-row gap-2 pt-2">
              <ResumeLink
                path="/Ivan_Serato_Frontend_Developer_Resume.pdf"
                name="nzwh_frontend_dev_cv.pdf"
              />
              <ResumeLink
                path="/Ivan_Serato_UIUX_Designer_Resume.pdf"
                name="nzwh_uiux_design_cv.pdf"
              />
            </div>
          </article>
        </AboutWindow>

        <aside className="relative flex w-52 shrink-0 flex-col gap-3 self-stretch text-sm max-md:hidden">
          <AnimateFlyIn delay={200} className="h-full">
            <WindowImage src="/images/about/photo1.jpeg" title="0001.jpg" />
          </AnimateFlyIn>
          <AnimateFlyIn
            delay={300}
            className="absolute top-40 right-14 z-4 h-68 w-52"
          >
            <WindowImage src="/images/about/photo2.jpeg" title="0002.jpg" />
          </AnimateFlyIn>
          <AnimateFlyIn delay={400} className="z-5 h-40">
            <WindowImage src="/images/about/photo3.jpeg" title="0003.jpg" />
          </AnimateFlyIn>
        </aside>
      </AnimateFlyIn>

      <FooterButton
        left="send—me—an—email—!"
        right="nzwh@proton.me"
        href="mailto:nzwh@proton.me"
      />
    </Boilerplate>
  );
}
