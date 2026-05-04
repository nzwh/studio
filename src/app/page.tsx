"use client";
import { useState } from "react";

import Divider from "../components/global/Divider";
import AnimateFlyIn from "../components/global/effects/AnimateFlyIn";

import Monitor from "../components/landing/Monitor";
import Keyboard from "../components/landing/Keyboard";
import Cassette from "../components/landing/Cassette";
import ProjectCard from "../components/landing/project/Card";
import ProjectTabs from "../components/landing/project/Tabs";

import { PROJECTS } from "../lib/projects.data";
import Boilerplate from "../components/global/Boilerplate";
import FooterButton from "../components/global/FooterButton";

export default function HomePage() {
  const [type, setType] = useState<"development" | "design">("development");

  const DEVELOPMENT_PROJECTS = PROJECTS.filter(
    (p) => p.work_type === "development",
  );

  const DESIGN_PROJECTS = PROJECTS.filter((p) => p.work_type === "design");
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
      <section className="my-12 flex flex-col gap-1">
        <AnimateFlyIn delay={100}>
          <Monitor />
        </AnimateFlyIn>

        <AnimateFlyIn delay={200}>
          <Keyboard />
        </AnimateFlyIn>
      </section>

      <Divider type="long" />
      <ProjectTabs type={type} HandleTypeChange={HandleTypeChange} />
      <Divider type="long" />

      <section
        id="work"
        className="my-12 flex w-full flex-col items-center gap-6"
      >
        <div key={type} className="flex w-full flex-col">
          <AnimateFlyIn delay={100} className="flex w-full flex-col">
            <ProjectCard project={projects[0]}>
              <Cassette project={projects[0]} />
            </ProjectCard>
          </AnimateFlyIn>

          {projects && (
            <div className="flex w-full flex-col gap-6">
              {projects.slice(1).map((project, i) => (
                <AnimateFlyIn key={project.title} delay={200 + i * 100}>
                  <ProjectCard key={i} project={project} />
                </AnimateFlyIn>
              ))}
            </div>
          )}
        </div>
        <FooterButton left="more—about—me—here—!" href="/about" />
      </section>
    </Boilerplate>
  );
}
