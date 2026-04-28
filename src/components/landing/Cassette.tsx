import Image from "next/image";

import CassetteShape from "../svgs/shapes/Cassette";
import { MdOutlineAutoStories } from "react-icons/md";
import { Project } from "@/src/lib/projects";

export default function Cassette({ project }: { project: Project }) {
  return (
    <section className="shadow-card relative my-1.5 w-full rounded-lg">
      <div className="bg-card absolute -top-2 left-8 z-1 flex h-[calc(100%+1.5rem)] w-48 flex-col rounded-lg border border-[#dadada] pb-2 backdrop-blur-md">
        <div className="flex h-full flex-col gap-2 p-4">
          <div className="flex w-full flex-row items-center justify-between text-xs font-light tracking-tight text-[#a5a5a5]">
            <span>{project.project_type}</span>
            <span>{project.read_time}</span>
          </div>

          <h2 className="bg-gradient-text bg-clip-text text-4xl font-light tracking-tighter text-transparent">
            {project.title}
          </h2>

          <div className="flex h-full flex-col justify-end gap-2 text-sm leading-4 font-light text-[#393939]">
            {project.summary.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1 bg-white px-3 py-1.5 text-[#707070] transition-transform duration-200 hover:-translate-y-0.5 hover:text-[#393939]">
          <span className="w-full text-start text-xs font-light tracking-tight">
            Read more
          </span>
          <MdOutlineAutoStories size={14} />
        </div>
      </div>

      <div className="absolute inset-0 m-3 flex flex-col gap-3">
        <div className="flex w-full flex-row justify-end gap-2 text-xs tracking-tight">
          <span className="font-light text-[#707070]">{project.work_type}</span>
          <span className="font-normal text-[#a5a5a5]">
            {project.date_published}
          </span>
        </div>
        <div className="relative flex h-full w-full flex-row gap-2 overflow-hidden">
          <project.Icon
            className="absolute -bottom-10 left-3/5 z-2 w-40"
            fill="#ffffff"
            stroke="#dadada"
          />
          <Disk
            position="left"
            color={project.color || ["#ffffff", "#8d93ff"]}
          />
          <div className="h-full w-full rounded-lg">
            <Image
              src={project.cover_url || "/placeholder.jpg"}
              alt="Project Cover Image"
              width={0}
              height={0}
              sizes="100vw"
              className="disk-image h-full w-full cursor-pointer rounded-lg object-cover select-none"
              draggable={false}
            />
          </div>

          <Disk
            position="right"
            color={project.color || ["#ffffff", "#8d93ff"]}
          />
        </div>
      </div>

      <CassetteShape
        className="h-auto w-full"
        stroke="#dadada"
        fill="#ffffff"
      />
    </section>
  );
}

const Disk = ({
  position,
  color,
}: {
  position: "left" | "right";
  color: string[];
}) => {
  const left = position === "left";
  const mask = `radial-gradient(circle 4rem at ${left ? "130%" : "-30%"} 50%, transparent 99%, black 100%)`;

  return (
    <div
      className="relative w-64 rounded-lg"
      style={{ WebkitMaskImage: mask, maskImage: mask }}
    >
      <div
        className={`disk-circle absolute top-1/2 ${left ? "left-0" : "right-0"} h-96 w-96 -translate-y-1/2 rounded-full`}
        style={{
          background: `radial-gradient(circle, ${color[0]} 0%, ${color[1]} 100%)`,
        }}
      />
      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-row gap-2">
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="h-4 w-1 rounded-lg bg-[#ffffff] shadow-lg" />
        ))}
      </div>
    </div>
  );
};
