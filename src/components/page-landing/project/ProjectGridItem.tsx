import { Project } from "@/src/lib/projects.types";
import Image from "next/image";
import Link from "next/link";
import ProjectDetails from "./ProjectDetails";

export default function ProjectGridItem({ project }: { project: Project }) {
  return (
    <Link
      href={project.href || "#"}
      target="_blank"
      className="flex cursor-pointer flex-col gap-4 transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="shadow-card h-32 w-full overflow-hidden rounded-lg border border-[#dadada] bg-[#ffffff] px-8 pt-4">
        <div className="relative h-full w-full">
          <Image
            src={project.cover || "/images/placeholder.png"}
            alt={`${project.title} Thumbnail`}
            fill
            className="rounded-t-sm object-cover object-top shadow-lg"
          />
        </div>
      </div>

      <ProjectDetails project={project} isExpanded />
    </Link>
  );
}
