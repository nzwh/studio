"use client";
import { useState } from "react";

import Divider from "../components/global/Divider";
import AnimateFlyIn from "../components/global/effects/AnimateFlyIn";

import Monitor from "../components/landing/Monitor";
import Keyboard from "../components/landing/Keyboard";
import Cassette from "../components/landing/Cassette";
import ProjectCard from "../components/landing/project/Card";
import ProjectMore from "../components/landing/project/SeeMore";
import ProjectTabs from "../components/landing/project/Tabs";

import { DEVELOPMENT_PROJECTS, DESIGN_PROJECTS } from "../lib/projects";
import Boilerplate from "../components/global/Boilerplate";

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
    <Boilerplate>
      <section className="my-12 flex flex-col">
        <AnimateFlyIn delay={100}>
          <Monitor />
        </AnimateFlyIn>

        <AnimateFlyIn delay={200}>
          <Keyboard />
        </AnimateFlyIn>
      </section>

      <Divider type="long" />

      <section className="mt-6 mb-12 flex w-full flex-col items-center gap-6">
        <ProjectTabs type={type} HandleTypeChange={HandleTypeChange} />

        <div key={type} className="flex h-fit w-full flex-col gap-12">
          <AnimateFlyIn delay={100} className="flex w-full flex-col gap-6">
            <ProjectCard project={projects[0]}>
              <Cassette project={projects[0]} />
            </ProjectCard>
          </AnimateFlyIn>

          <div className="flex w-full flex-col gap-6">
            {projects.slice(1).map((project, i) => (
              <AnimateFlyIn key={project.title} delay={200 + i * 100}>
                <ProjectCard key={i} project={project} />
              </AnimateFlyIn>
            ))}
          </div>
        </div>

        <AnimateFlyIn delay={100} className="flex w-full flex-col gap-4">
          <Divider type="short" />
          <ProjectMore />
        </AnimateFlyIn>
      </section>
    </Boilerplate>
  );
}
