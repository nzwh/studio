"use client";

import Divider from "@/src/components/global/static/Divider";
import Footer from "@/src/components/global/static/Footer";
import Navbar from "@/src/components/global/static/Navbar";
import { PROJECTS } from "@/src/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";

import { instrumentsans } from "@/src/fonts/fonts";
import { useLenis } from "@/src/components/global/effects/LenisScroll";
import { use, useEffect, useState } from "react";

export default function Triagent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = PROJECTS.find((p) => p.title.toLowerCase() === slug);

  if (!project) notFound();
  const lenis = useLenis();

  const HandleIDConversion = (header: string) => {
    return header.toLowerCase().replace(/\s+/g, "-");
  };
  const HandleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    header: string,
  ) => {
    e.preventDefault();
    const id = HandleIDConversion(header);
    lenis?.scrollTo(`#${id}`, { offset: -80 });
    history.pushState(null, "", `#${id}`);
  };

  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    project?.sections.forEach((section) => {
      const id = HandleIDConversion(section.header);
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
    <main
      className="mx-auto flex w-200 flex-col items-center px-6 max-md:w-full"
      data-gramm="false"
    >
      <Navbar />
      <Divider type="long" />

      <section
        className={`${instrumentsans.className} text-md relative my-12 flex w-300 flex-row gap-4 font-light tracking-tight max-xl:w-full`}
      >
        <aside className="sticky top-20 h-fit w-60 max-md:hidden">
          <h3 className="text-xs font-extrabold text-[#a5a5a5]">CHAPTERS</h3>
          <ul className="flex flex-col gap-1 pt-2 text-sm">
            {project?.sections.map((section) => (
              <li key={section.header}>
                <a
                  href={`#${HandleIDConversion(section.header)}`}
                  onClick={(e) => HandleScroll(e, section.header)}
                  className={`text-sm transition-colors duration-200 hover:text-[#8d93ff] ${
                    activeId === HandleIDConversion(section.header)
                      ? "font-medium text-[#8d93ff]"
                      : "text-[#a5a5a5]"
                  }`}
                >
                  {section.header}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <article className="flex w-full flex-col gap-3">
          <h1 className="text-4xl">{project?.title}</h1>
          <p className="text-lg text-[#a5a5a5]">{project?.description}</p>
          <Divider type="short" />
          <div className="flex w-full flex-row gap-4">
            <div className="flex w-full flex-col gap-1">
              <h4 className="text-xs text-[#a5a5a5] uppercase">Type</h4>
              <p>{project?.type}</p>
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
          {project?.sections.map((section) => (
            <div key={section.header} className="flex flex-col gap-3">
              <h2
                id={HandleIDConversion(section.header)}
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
        </article>
      </section>

      <Divider type="long" />
      <Footer />
    </main>
  );
}
