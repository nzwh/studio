import { Project } from "@/src/lib/projects.types";
import Image from "next/image";
import Link from "next/link";
import { FiFigma } from "react-icons/fi";

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

      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full flex-row items-center justify-between gap-2 pt-2 text-sm tracking-tight whitespace-nowrap text-[#393939]">
          <div className="flex w-40 flex-row items-center gap-2">
            <h6>{project.title}</h6>
            <div className="flex h-4 w-4 items-center justify-center rounded-xs bg-[#f0f0f0]">
              <project.icon className="h-2.5 w-2.5" fill="#707070" />
            </div>
          </div>
          <div className="flex flex-row gap-1 text-xs whitespace-nowrap text-[#707070]">
            <span className="flex h-4.5 items-center justify-center rounded-xs bg-[#F0F0F0] px-1 py-1">
              <FiFigma className="h-2.5 w-2.5" />
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
        <p className="w-full text-sm font-light text-[#393939]">
          {project.description}
        </p>
      </div>
    </Link>
  );
}

//  <Link
//       href={project.href || "#"}
//       target="_blank"
//       className="flex h-20 w-full items-center justify-center gap-4 rounded-lg border border-[#f0f0f0] bg-[#ffffff] p-2 transition-transform duration-200 hover:-translate-y-1"
//     >
//       <div className="relative h-full w-56">
//         <Image
//           src={project.cover || "/images/placeholder.png"}
//           alt="Project Thumbnail"
//           fill
//           className="rounded-sm object-cover"
//         />
//       </div>
//       <div className="w-full">
//         <div>
//           <h3 className="text-md font-medium">{project.title}</h3>
//           <div className="flex flex-row gap-1 text-xs whitespace-nowrap text-[#707070]">
//             {project.roles.slice(0, 2).map((role, i) => (
//               <span
//                 key={i}
//                 className="h-fit rounded-sm bg-[#F0F0F0] px-1 py-0.5"
//               >
//                 {role}
//               </span>
//             ))}
//             {project.roles.length > 2 && (
//               <span className="h-fit rounded-sm bg-[#F0F0F0] px-1 py-0.5">
//                 +{project.roles.length - 2}
//               </span>
//             )}
//           </div>
//         </div>
//         <p className="text-xs text-gray-500">{project.description}</p>
//       </div>
//     </Link>
