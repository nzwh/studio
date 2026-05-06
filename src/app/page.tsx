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

const DESIGNED_PROJECTS = [
  {
    href: "https://www.figma.com/community/file/1616703158808681788/array",
    title: "Array",
    description:
      "Real-time mentor-mentee journaling platform for structured growth.",
    src: "/images/banners/array.png",
  },
  {
    href: "https://www.figma.com/community/file/1616702986484755771/senge",
    title: "Senge",
    description: "Facebook Messenger redesign for productivity.",
    src: "/images/banners/senge.png",
  },
  {
    href: "https://www.figma.com/community/file/1616702824695818552/influx",
    title: "Influx",
    description:
      "Niche community marketplace for buying, selling, and discovery.",
    src: "/images/banners/influx.png",
  },
];

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
        className="my-12 flex w-full flex-col items-center gap-6"
      >
        <div key={type} className="flex w-full flex-col gap-6">
          <AnimateFlyIn delay={100} className="w-full">
            <ProjectCard project={projects[0]}>
              <LandingCassette project={projects[0]} />
            </ProjectCard>
          </AnimateFlyIn>

          {/* TODO:takes Project object as prop */}
          {type === "design" && (
            <div className="grid grid-cols-2 gap-2">
              {DESIGNED_PROJECTS.map((project, i) => (
                <AnimateFlyIn
                  key={project.title}
                  delay={200 + (projects.length + i) * 100}
                >
                  <ProjectGridItem
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    src={project.src}
                  />
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
