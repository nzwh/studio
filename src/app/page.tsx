"use client";
import { useState } from "react";

import Footer from "../components/global/static/Footer";
import Navbar from "../components/global/static/Navbar";
import Divider from "../components/global/static/Divider";
import FadeIn from "../components/global/effects/FadeIn";

import Monitor from "../components/landing/hero-section/Monitor";
import Keyboard from "../components/landing/hero-section/Keyboard";
import Cassette from "../components/landing/hero-section/Cassette";
import ProjectCard from "../components/landing/project-section/Card";
import ProjectMore from "../components/landing/project-section/SeeMore";
import ProjectTabs from "../components/landing/project-section/Tabs";

import { DEVELOPMENT_PROJECTS, DESIGN_PROJECTS } from "../lib/projects";
import VeritcalDividers from "../components/global/VerticalDividers";

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
    <main className="mx-auto w-200 px-6 max-md:w-full" data-gramm="false">
      <nav className="fixed inset-x-0 top-0 z-10 mx-auto flex w-200 flex-col justify-between bg-[#ffffff]/90 px-6 backdrop-blur-xs">
        <Navbar />
        <Divider type="long" />
      </nav>

      <div className="h-16" />
      <VeritcalDividers />

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
        <ProjectTabs type={type} HandleTypeChange={HandleTypeChange} />

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

        <FadeIn delay={100} className="flex w-full flex-col gap-4">
          <Divider type="short" />
          <ProjectMore />
        </FadeIn>
      </section>

      <Divider type="long" />
      <Footer />
    </main>
  );
}
