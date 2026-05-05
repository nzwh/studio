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
import File from "../components/landing/File";

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

  const DESIGNED_PROJECTS = [
    {
      href: "https://www.figma.com/community/file/1616703158808681788/array",
      title: "Array",
      description: "A design system for Figma users.",
    },
    {
      href: "https://www.figma.com/community/file/1616702986484755771/senge",
      title: "Senge",
      description: "A design system for Figma users.",
    },
    {
      href: "https://www.figma.com/community/file/1616702824695818552/influx",
      title: "Influx",
      description: "A design system for Figma users.",
    },
  ];

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
        <div key={type} className="flex w-full flex-col gap-6">
          <AnimateFlyIn delay={100} className="flex w-full flex-col">
            <ProjectCard project={projects[0]}>
              <Cassette project={projects[0]} />
            </ProjectCard>
          </AnimateFlyIn>

          {type === "design" && (
            <div className="flex w-full flex-col gap-3">
              {DESIGNED_PROJECTS.map((project, i) => (
                <AnimateFlyIn
                  key={project.title}
                  delay={200 + (projects.length + i) * 100}
                >
                  <File
                    href={project.href}
                    title={project.title}
                    description={project.description}
                  />
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
