import { Project } from "@/src/lib/projects";

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="flex w-full flex-row items-center gap-2 text-sm tracking-tight whitespace-nowrap text-[#393939]">
      <div className="flex w-40 flex-row items-center gap-2">
        <h6>{project.title}</h6>
        <div className="flex h-4 w-4 items-center justify-center rounded-xs bg-[#f0f0f0]">
          <project.Icon className="h-2.5 w-2.5" fill="#707070" />
        </div>
      </div>

      <div className="h-1 w-1 rounded-full bg-[#dadada]" />
      <p className="w-full font-light">{project.description}</p>

      <div className="flex flex-row gap-1 text-xs whitespace-nowrap text-[#707070]">
        {project.roles.slice(0, 2).map((role, i) => (
          <span key={i} className="h-fit rounded-sm bg-[#F0F0F0] px-1 py-0.5">
            {role}
          </span>
        ))}
        {project.roles.length > 2 && (
          <span className="h-fit rounded-sm bg-[#F0F0F0] px-1 py-0.5">
            +{project.roles.length - 2}
          </span>
        )}
      </div>
    </div>
  );
}
