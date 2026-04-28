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

export default function Article({
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
      <AnimateFlyIn
        className={`${instrumentsans.className} my-12 flex w-300 gap-4 max-xl:w-full`}
      >
        <aside className="sticky top-24 flex h-fit w-48 flex-col gap-4 max-md:hidden">
          <h3 className="text-xs font-extrabold text-[#a5a5a5]">CHAPTERS</h3>
          <ul className="gap-1text-sm flex flex-col">
            {project?.article?.sections.map((section) => (
              <li key={section.header}>
                <a
                  href={`#${ConvertID(section.header)}`}
                  onClick={(e) => HandleScroll(e, section.header)}
                  className={`text-sm transition-colors duration-200 hover:text-[#8d93ff] ${
                    activeId === ConvertID(section.header)
                      ? "font-extrabold text-[#393939]"
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
          <Image
            src={project?.cover || "/placeholder.jpg"}
            alt={`${project?.title} cover image`}
            className="h-40 w-full rounded-lg object-cover"
            width={0}
            height={0}
            sizes="100vw"
          />
          <h1 className="text-4xl">{project?.title}</h1>
          <p className="text-lg text-[#a5a5a5]">{project?.description}</p>
          <Divider type="short" />
          <div className="flex w-full flex-row gap-4">
            <div className="flex w-full flex-col gap-1">
              <h4 className="text-xs text-[#a5a5a5] uppercase">Type</h4>
              <p>{project?.work_type}</p>
            </div>
            <div className="flex w-full flex-col gap-1">
              <h4 className="text-xs text-[#a5a5a5] uppercase">Stack</h4>
              <p>{project?.stack.join(", ")}</p>
            </div>
            <div className="flex w-full flex-col gap-1">
              <h4 className="text-xs text-[#a5a5a5] uppercase">Roles</h4>
              <p>{project?.roles.join(", ")}</p>
            </div>
          </div>
          <Divider type="short" />
          <div className="my-6 flex flex-col gap-12">
            {project?.article?.sections.map((section) => (
              <div key={section.header} className="flex flex-col gap-3">
                <h2
                  id={ConvertID(section.header)}
                  className="text-2xl font-medium"
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
          </div>
        </article>
      </AnimateFlyIn>
    </Boilerplate>
  );
}
