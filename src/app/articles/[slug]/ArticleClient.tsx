"use client";

import { useEffect, useState } from "react";
import { instrumentsans } from "@/src/fonts/fonts";

import Divider from "@/src/components/global/Divider";
import Boilerplate from "@/src/components/global/Boilerplate";

import AnimateFlyIn from "@/src/components/global/effects/AnimateFlyIn";

const ConvertID = (header: string) => {
  return header
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
};

export default function ArticleClient({
  headline,
  headings,
  children,
}: {
  headline: React.ReactNode;
  headings: string[];
  children: React.ReactNode;
}) {
  const HandleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    header: string,
  ) => {
    e.preventDefault();
    const id = ConvertID(header);

    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80; // -80 offset like before
      window.scrollTo({ top, behavior: "smooth" });
    }
    history.pushState(null, "", `#${id}`);
  };

  const [activeId, setActiveId] = useState<string | null>(null);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    headings.forEach((header) => {
      const id = ConvertID(header);
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-30% 0px -60% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [headings]);

  return (
    <Boilerplate dividers={false}>
      <div
        className={`my-12 flex w-270 gap-12 px-6 max-[1080px]:w-full max-[1080px]:p-0`}
      >
        <aside className="sticky top-24 flex h-fit w-60 flex-col gap-4 font-light max-md:hidden">
          <h3 className="text-xs font-normal text-[#a5a5a5]">CHAPTERS</h3>
          <ul className="gap-1text-sm flex flex-col">
            {headings.map((header) => (
              <li key={header}>
                <a
                  href={`#${ConvertID(header)}`}
                  onClick={(e) => HandleScroll(e, header)}
                  className={`text-sm transition-colors duration-200 hover:text-[#8d93ff] ${
                    activeId === ConvertID(header)
                      ? "font-normal text-[#393939]"
                      : "text-[#a5a5a5]"
                  }`}
                >
                  {header}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <article className="flex w-full flex-col gap-3 text-lg font-light tracking-tight">
          <AnimateFlyIn delay={100} className="flex w-full flex-col gap-3">
            {headline}
            <Divider type="short" />
          </AnimateFlyIn>
          <AnimateFlyIn
            delay={200}
            className={`${instrumentsans.className} my-6 flex flex-col gap-3`}
          >
            {children}
          </AnimateFlyIn>
        </article>
      </div>
    </Boilerplate>
  );
}
