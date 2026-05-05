"use client";
import { useState } from "react";

import Divider from "../components/global/Divider";
import AnimateFlyIn from "../components/global/effects/AnimateFlyIn";

import Monitor from "../components/page-landing/LandingMonitor";
import Keyboard from "../components/page-landing/LandingKeyboard";
import Cassette from "../components/page-landing/LandingCassette";
import ProjectCard from "../components/page-landing/project/ProjectCard";
import ProjectTabs from "../components/page-landing/project/ProjectTabs";

import { PROJECTS } from "../lib/projects.data";
import Boilerplate from "../components/global/Boilerplate";
import FooterButton from "../components/global/Redirect";
import File from "../components/page-landing/project/ProjectGridItem";

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
            <div className="grid grid-cols-2 gap-2">
              {DESIGNED_PROJECTS.map((project, i) => (
                <AnimateFlyIn
                  key={project.title}
                  delay={200 + (projects.length + i) * 100}
                >
                  <File
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
        <FooterButton left="more—about—me—here—!" href="/about" />
      </section>
    </Boilerplate>
  );
}
