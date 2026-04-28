import { instrumentsans } from "@/src/fonts/fonts";
import { Project } from "@/src/lib/projects.types";
import Image from "next/image";

export default function Headline({ project }: { project: Project }) {
  const TYPES = {
    project_type: project?.project_type,
    work_type: project?.work_type + " Work",
    period: project?.duration,
    read_time: project?.read_time,
  };
  const TAGS = {
    stack: project?.stack,
    roles: project?.roles,
  };

  const Capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="flex w-full flex-col gap-6 pb-3">
      <div className="flex w-full justify-between">
        <h1 className="text-2xl font-normal">{project?.title}</h1>
        <p className="text-2xl font-light text-[#a5a5a5]">
          {project?.description}
        </p>
      </div>

      <div className="relative w-full gap-6 overflow-hidden">
        <Image
          src={project?.cover || "/placeholder.jpg"}
          alt={`${project?.title} cover image`}
          className="h-60 w-full rounded-2xl object-cover"
          width={0}
          height={0}
          sizes="100vw"
        />
        <project.icon
          className={`absolute inset-y-0 left-2 z-100 mt-2 h-56 w-28 rounded-lg bg-[#ffffff] p-8`}
          fill="#393939"
          stroke="#393939"
        />
      </div>

      <div className="flex w-full flex-row gap-8">
        <div className="grid w-full grid-cols-2 grid-rows-2 gap-3">
          {Object.entries(TYPES).map(([key, value]) => (
            <div key={key} className="flex w-full flex-col gap-0.5">
              <span className="text-xs font-normal text-[#a5a5a5]">
                {key.toUpperCase().replace("_", " ")}
              </span>
              <span
                className={`${instrumentsans.className} text-sm text-[#393939]`}
              >
                {Capitalize(value)}
              </span>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-row">
          {Object.entries(TAGS).map(([key, value]) => (
            <div key={key} className="flex w-full flex-col gap-0.5">
              <span className="text-xs font-normal text-[#a5a5a5]">
                {key.toUpperCase().replace("_", " ")}
              </span>
              <div className="flex flex-col gap-0.5">
                {value.map((item) => (
                  <span
                    key={item}
                    className={`${instrumentsans.className} text-sm text-[#393939]`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
