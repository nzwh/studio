"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { use, useEffect, useState } from "react";

import Divider from "@/src/components/global/Divider";
import Boilerplate from "@/src/components/global/Boilerplate";
import { useLenis } from "@/src/components/global/effects/LenisScroll";

import { instrumentsans } from "@/src/fonts/fonts";
import { PROJECTS } from "@/src/lib/projects.data";
import AnimateFlyIn from "@/src/components/global/effects/AnimateFlyIn";
import Headline from "@/src/components/page-articles/ArticleHeadline";

export default function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = PROJECTS.find(
    (p) => p.title.toLowerCase() === use(params).slug,
  );
  if (!project) notFound();
  const lenis = useLenis();

  const ConvertID = (header: string) => {
    return header
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  const HandleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    header: string,
  ) => {
    e.preventDefault();
    const id = ConvertID(header);

    lenis?.scrollTo(`#${id}`, { offset: -80 });
    history.pushState(null, "", `#${id}`);
  };

  const [activeId, setActiveId] = useState<string | null>(null);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    project?.article?.sections.forEach((section) => {
      const id = ConvertID(section.header);
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
  }, [project]);

  return (
    <Boilerplate dividers={false}>
      <div
        className={`my-12 flex w-270 gap-12 px-6 max-[1080px]:w-full max-[1080px]:p-0`}
      >
        <aside className="sticky top-24 flex h-fit w-60 flex-col gap-4 font-light max-md:hidden">
          <h3 className="text-xs font-normal text-[#a5a5a5]">CHAPTERS</h3>
          <ul className="gap-1text-sm flex flex-col">
            {project?.article?.sections.map((section) => (
              <li key={section.header}>
                <a
                  href={`#${ConvertID(section.header)}`}
                  onClick={(e) => HandleScroll(e, section.header)}
                  className={`text-sm transition-colors duration-200 hover:text-[#8d93ff] ${
                    activeId === ConvertID(section.header)
                      ? "font-normal text-[#393939]"
                      : "text-[#a5a5a5]"
                  }`}
                >
                  {section.header}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <article className="flex w-full flex-col gap-3 text-lg font-light tracking-tight">
          <AnimateFlyIn delay={100} className="flex w-full flex-col gap-3">
            <Headline project={project} />
            <Divider type="short" />
          </AnimateFlyIn>
          <AnimateFlyIn
            delay={200}
            className={`${instrumentsans.className} my-6 flex flex-col gap-12`}
          >
            {project?.article?.sections.map((section) => (
              <div key={section.header} className="flex flex-col gap-3">
                <h2
                  id={ConvertID(section.header)}
                  className={`text-2xl font-medium ${section.header === "Introduction" ? "h-0 overflow-hidden" : ""}`}
                >
                  {section.header}
                </h2>

                {section.paragraphs.map((paragraph, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <p className="text-justify">{paragraph.content}</p>
                    {paragraph.media?.map((media, mediaIndex) => {
                      if (media.type === "image") {
                        return (
                          <Image
                            key={mediaIndex}
                            src={media.src}
                            alt={media.alt || "Project media"}
                            className="w-full max-w-md rounded-lg shadow-md"
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                ))}
              </div>
            ))}
          </AnimateFlyIn>
        </article>
      </div>
    </Boilerplate>
  );
}
