"use client";
import { useState } from "react";

import Footer from "../components/global/static/Footer";
import Navbar from "../components/global/static/Navbar";
import Divider from "../components/global/static/Divider";
import FadeIn from "../components/global/effects/FadeIn";

import Monitor from "../components/landing/containers/Monitor";
import Keyboard from "../components/landing/containers/Keyboard";
import Cassette from "../components/landing/containers/Cassette";
import ProjectCard from "../components/landing/ProjectCard";
import ProjectMore from "../components/landing/ProjectMore";
import ProjectTabs from "../components/landing/ProjectTabs";

import { DEVELOPMENT_PROJECTS, DESIGN_PROJECTS } from "../lib/projects";

export default function Home() {
  const [type, setType] = useState<"development" | "design">("development");
  const [projects, setProjects] = useState(DEVELOPMENT_PROJECTS);

  const HandleTypeChange = (newType: "development" | "design") => {
    setType(newType);
    if (newType === "development") {
      setProjects(DEVELOPMENT_PROJECTS);
    } else {
      setProjects(DESIGN_PROJECTS);
    }
  };

  return (
    <main
      className="mx-auto w-200 border-x border-[#f0f0f0] px-6 max-md:w-full"
      data-gramm="false"
    >
      <Navbar />
      <Divider type="long" />

      <section className="my-12 flex flex-col">
        <FadeIn delay={100}>
          <Monitor />
        </FadeIn>
        <FadeIn delay={200}>
          <Keyboard />
        </FadeIn>
      </section>

      <Divider type="long" />

      <section className="mt-6 mb-12 flex w-full flex-col items-center gap-6">
        <FadeIn delay={100} className="w-full">
          <ProjectTabs type={type} HandleTypeChange={HandleTypeChange} />
        </FadeIn>

        <div key={type} className="flex h-fit w-full flex-col gap-12">
          <FadeIn delay={100} className="flex w-full flex-col gap-6">
            <ProjectCard project={projects[0]}>
              <Cassette project={projects[0]} />
            </ProjectCard>
          </FadeIn>

          <div className="flex w-full flex-col gap-6">
            {projects.slice(1).map((project, i) => (
              <FadeIn key={project.title} delay={200 + i * 100}>
                <ProjectCard key={i} project={project} />
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={100} className="flex w-full flex-col gap-3">
          <Divider type="short" />
          <ProjectMore />
        </FadeIn>
      </section>

      <Divider type="long" />
      <Footer />
    </main>
  );
}
