"use client";

import Footer from "../components/global/static/Footer";
import Navbar from "../components/global/static/Navbar";
import Divider from "../components/global/static/Divider";

import Monitor from "../components/landing/containers/Monitor";
import Keyboard from "../components/landing/containers/Keyboard";
import Cassette from "../components/landing/containers/Cassette";

import InfoRow from "../components/landing/InfoRow";
import FadeIn from "../components/global/effects/FadeIn";
import HoverText from "../components/global/effects/HoverText";

import Image from "next/image";
import Link from "next/link";
import { Project, PROJECTS } from "../lib/projects";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <main
      className="mx-auto w-200 border-x border-[#f0f0f0] px-6 max-md:w-full"
      data-gramm="false"
    >
      <Navbar />
      <Divider />

      <section className="my-12 flex flex-col">
        <FadeIn delay={100}>
          <Monitor />
        </FadeIn>
        <FadeIn delay={200}>
          <Keyboard />
        </FadeIn>
      </section>

      <Divider />

      <section className="mt-6 mb-12 flex w-full flex-col items-center gap-6">
        <FadeIn delay={100} className="w-full">
          <HoverText
            hoverText="all my relevant works as of late"
            className="w-full text-center text-sm font-light tracking-tight"
          >
            highlighted—works
          </HoverText>
        </FadeIn>

        <div className="flex h-fit w-full flex-col gap-12">
          <ProjectCard project={PROJECTS[0]}>
            <Cassette project={PROJECTS[0]} />
          </ProjectCard>

          <div className="flex w-full flex-col gap-6">
            {PROJECTS.slice(1).map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>

        <div className="w-full border-b border-[#f0f0f0]" />
        <Link
          href="/works"
          className="trakcing-tight flex w-full flex-row justify-between text-sm font-light text-[#393939] transition-transform duration-200 hover:-translate-y-1"
        >
          <span>see—more—works—here</span>
          <div className="flex flex-row items-center gap-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <FaArrowRightLong key={i} size={12} />
            ))}
          </div>
        </Link>
      </section>

      <Divider />
      <Footer />
    </main>
  );
}

const ProjectCard = ({
  project,
  children,
}: {
  project: Project;
  children?: React.ReactNode;
  data_cursor?: string;
}) => (
  <FadeIn delay={200} className="flex w-full flex-col gap-6">
    <Link
      href={project.href}
      className="transition-transform duration-200 hover:-translate-y-1"
      data-cursor={`read about ${project.title} here!`}
    >
      {children ?? (
        <div className="shadow-card relative h-48 w-full rounded-lg border border-[#dadada] bg-[#ffffff] px-12 pt-4">
          <Image
            src={project.cover_url || "/placeholder.jpg"}
            alt="Project Cover Image"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full cursor-pointer rounded-t-lg object-cover"
            draggable={false}
          />
        </div>
      )}
    </Link>
    <InfoRow project={project} />
  </FadeIn>
);
