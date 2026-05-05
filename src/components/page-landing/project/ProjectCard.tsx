import Image from "next/image";
import Link from "next/link";

import { Project } from "@/src/lib/projects.types";
import ProjectDetails from "./ProjectDetails";

interface ProjectCardProps {
  project: Project;
  children?: React.ReactNode;
}
export default function ProjectCard({ project, children }: ProjectCardProps) {
  return (
    <div className="flex w-full flex-col gap-6">
      <Link
        href={`/articles/${project.title.toLowerCase()}`}
        className="transition-transform duration-200 hover:-translate-y-1"
        data-cursor={`read about ${project.title} here!`}
      >
        {children ?? (
          <div className="shadow-card relative h-48 w-full rounded-lg border border-[#dadada] bg-[#ffffff] px-12 pt-4">
            <Image
              src={project.cover || "/placeholder.jpg"}
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
      <ProjectDetails project={project} />
    </div>
  );
}
