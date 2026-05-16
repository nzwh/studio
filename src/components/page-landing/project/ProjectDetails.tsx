import { Project } from "@/src/lib/projects.types";
import { FiFigma, FiGithub } from "react-icons/fi";

export default function ProjectDetails({
  project,
  isExpanded = false,
}: {
  project: Project;
  isExpanded?: boolean;
}) {
  return (
    <div
      className={`flex w-full text-sm tracking-tight whitespace-nowrap text-[#393939] ${isExpanded ? "flex-col gap-2" : "flex-row items-center gap-2"}`}
    >
      <div className="flex w-full flex-row items-center justify-between gap-2 pt-2">
        <div className="flex flex-row items-center gap-2 pr-4">
          <h6>{project.title}</h6>
          <div className="flex h-4 w-4 items-center justify-center rounded-xs bg-[#f0f0f0]">
            <project.icon className="h-2.5 w-2.5" fill="#707070" />
          </div>
        </div>

        {!isExpanded && <div className="h-1 w-1 rounded-full bg-[#dadada]" />}
        {!isExpanded && (
          <p className="w-full font-light">{project.description}</p>
        )}

        <div className="flex flex-row gap-1 text-xs whitespace-nowrap text-[#707070]">
          <span className="flex h-4.5 items-center justify-center rounded-xs bg-[#F0F0F0] px-1 py-1">
            {project.work_type === "design" ? (
              <FiFigma className="h-2.5 w-2.5" />
            ) : (
              <FiGithub className="h-2.5 w-2.5" />
            )}
          </span>
          {project.roles.slice(0, 2).map((role, i) => (
            <span
              key={i}
              className="h-4.5 rounded-xs bg-[#F0F0F0] px-1.5 py-0.5 leading-3.5"
            >
              {role}
            </span>
          ))}
          {project.roles.length > 2 && (
            <span className="h-4.5 rounded-xs bg-[#F0F0F0] px-1.5 py-0.5 leading-3.5">
              +{project.roles.length - 2}
            </span>
          )}
        </div>
      </div>

      {isExpanded && (
        <p className="w-full font-light text-[#393939]">
          {project.description}
        </p>
      )}
    </div>
  );
}
