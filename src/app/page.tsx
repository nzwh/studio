"use client";

import Footer from "../components/global/static/Footer";
import Navbar from "../components/global/static/Navbar";
import Divider from "../components/global/static/Divider";

import Monitor from "../components/landing/containers/Monitor";
import Keyboard from "../components/landing/containers/Keyboard";
import Cassette from "../components/landing/containers/Cassette";
import ProjectCard from "../components/landing/ProjectCard";

import FadeIn from "../components/global/effects/FadeIn";
import HoverText from "../components/global/effects/HoverText";

import { PROJECTS } from "../lib/projects";
import ProjectMore from "../components/landing/ProjectMore";

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
        <ProjectMore />
      </section>

      <Divider />
      <Footer />
    </main>
  );
}
