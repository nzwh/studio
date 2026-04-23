import Image from "next/image";

import CassetteShape from "../../shapes/CassetteShape";
import { MdOutlineAutoStories } from "react-icons/md";

interface CassetteProps {
  title: string;
  description: string;
  work_type: string;
  read_time: string;
  date_published: string;
  logo_url?: string;
  cover_url?: string;
}
export default function Cassette({
  title,
  description,
  work_type,
  read_time,
  date_published,
  logo_url,
  cover_url,
}: CassetteProps) {
  return (
    <main className="relative my-3 w-full rounded-lg shadow-[0_16px_36px_0_rgba(0,0,0,0.05),0_8px_0_0_#F0F0F0] select-none">
      <section className="absolute -top-2 left-8 z-11 flex h-[calc(100%+1.5rem)] w-48 flex-col rounded-lg border border-[#dadada] bg-[linear-gradient(rgba(255,255,255,0.9)_0%,rgba(240,240,240,0.9)_100%)] pb-2 backdrop-blur-md">
        <div className="flex h-full flex-col gap-2 p-4">
          <div className="flex w-full flex-row items-center justify-between">
            <span className="text-xs font-light tracking-tight text-[#a5a5a5]">
              case—study
            </span>
            <span className="text-xs font-light tracking-tight text-[#a5a5a5]">
              {read_time}
            </span>
          </div>
          <h1 className="bg-linear-to-b from-[#393939] to-[#7F7F7F] bg-clip-text text-4xl font-light tracking-tighter text-transparent">
            {title}
          </h1>

          <div className="flex h-full flex-col justify-end gap-2">
            {description.split("\n").map((line, i) => (
              <p
                key={i}
                className="text-sm leading-4 font-light text-[#393939]"
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        <button className="flex appearance-none flex-row items-center justify-between gap-1 bg-[#ffffff] px-3 py-1.5 text-[#707070] outline-none">
          <span className="text-xs font-light tracking-tight">Read more</span>
          <MdOutlineAutoStories size={14} />
        </button>
      </section>

      <main className="absolute inset-0 m-3 flex flex-col gap-4">
        <section className="flex w-full flex-row justify-end-safe gap-2">
          <span className="text-xs font-light text-[#707070]">
            [{work_type}]
          </span>
          <span className="text-xs font-medium text-[#a5a5a5]">
            {date_published}
          </span>
        </section>

        <section className="relative flex h-full w-full flex-row justify-between gap-2 overflow-hidden">
          <Image
            src={logo_url || "/placeholder.jpg"}
            alt="cassette"
            width={0}
            height={0}
            className="absolute bottom-[-20] left-1/2 z-10 h-auto w-48 object-cover object-top"
            draggable={false}
          />

          <div
            className="relative w-64 rounded-lg"
            style={{
              maskImage:
                "radial-gradient(circle 4rem at 130% 50%, transparent 99%, black 100%)",
              WebkitMaskImage:
                "radial-gradient(circle 4rem at 130% 50%, transparent 99%, black 100%)",
            }}
          >
            <div className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#FFFFFF_0%,#8D93FF_100%)] shadow-[inset_0_0_0_115px_rgba(255,255,255,0.2),inset_0_0_0_10px_rgba(255,255,255,0.2)]" />
            <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-row gap-2 pr-5">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-1 rounded-lg bg-[#ffffff] shadow-lg"
                />
              ))}
            </div>
          </div>

          <div className="re lative ] h-full w-full overflow-hidden rounded-lg bg-[#f0f0f0]">
            <Image
              src={cover_url || "/placeholder.jpg"}
              alt="placeholder"
              fill
              className="shadow-[inset_0_0_0_10px_rgba(255,255,255,0.2) object-cover"
              draggable={false}
            />
          </div>

          <div
            className="relative w-64 rounded-lg"
            style={{
              maskImage:
                "radial-gradient(circle 4rem at -30% 50%, transparent 99%, black 100%)",
              WebkitMaskImage:
                "radial-gradient(circle 4rem at -30% 50%, transparent 99%, black 100%)",
            }}
          >
            <div className="absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#FFFFFF_0%,#8D93FF_100%)] shadow-[inset_0_0_0_115px_rgba(255,255,255,0.2),inset_0_0_0_10px_rgba(255,255,255,0.2)]" />
            <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-row gap-2 pl-5">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-1 rounded-lg bg-[#ffffff] shadow-lg"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <CassetteShape
        className="h-auto w-full"
        stroke="#dadada"
        fill="#ffffff"
      />
    </main>
  );
}
