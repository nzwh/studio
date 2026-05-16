"use client";
import { useState } from "react";

import AnimateFlyIn from "../components/global/effects/AnimateFlyIn";
import Boilerplate from "../components/global/Boilerplate";
import Divider from "../components/global/Divider";
import Redirect from "../components/global/Redirect";

import LandingMonitor from "../components/page-landing/LandingMonitor";
import LandingKeyboard from "../components/page-landing/LandingKeyboard";
import LandingCassette from "../components/page-landing/LandingCassette";
import ProjectCard from "../components/page-landing/project/ProjectCard";
import ProjectTabs from "../components/page-landing/project/ProjectTabs";
import ProjectGridItem from "../components/page-landing/project/ProjectGridItem";

import { PROJECTS } from "../lib/projects.data";

export default function HomePage() {
  const [type, setType] = useState<"development" | "design">("design");

  const DEVELOPMENT_PROJECTS = PROJECTS.filter(
    (p) => p.work_type === "development",
  );

  const DESIGN_PROJECTS = PROJECTS.filter((p) => p.work_type === "design");
  const [projects, setProjects] = useState(DESIGN_PROJECTS);

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
      <section id="hero" className="my-12 flex flex-col items-center gap-1">
        <AnimateFlyIn delay={100} className="w-full">
          <LandingMonitor />
        </AnimateFlyIn>

        <AnimateFlyIn delay={200} className="w-full">
          <LandingKeyboard />
        </AnimateFlyIn>
      </section>

      <Divider type="long" />
      <ProjectTabs type={type} HandleTypeChange={HandleTypeChange} />
      <Divider type="long" />

      <section
        id="work"
        className="my-12 flex w-full flex-col items-center gap-12"
      >
        <div key={type} className="flex w-full flex-col gap-12">
          <AnimateFlyIn delay={100} className="w-full">
            <ProjectCard project={projects[0]}>
              <LandingCassette project={projects[0]} />
            </ProjectCard>
          </AnimateFlyIn>

          {projects && (
            <div className="grid grid-cols-2 gap-6">
              {projects.slice(1).map((project, i) => (
                <AnimateFlyIn
                  key={project.title}
                  delay={100 + (projects.length + i) * 100}
                >
                  <ProjectGridItem project={project} />
                </AnimateFlyIn>
              ))}
            </div>
          )}
        </div>

        <Redirect left="more—about—me—here—!" href="/about" />
      </section>
    </Boilerplate>
  );
}
