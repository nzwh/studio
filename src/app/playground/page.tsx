"use client";

import Boilerplate from "@/src/components/global/Boilerplate";
import AnimateFlyIn from "@/src/components/global/effects/AnimateFlyIn";

export default function PlaygroundPage() {
  const Pattern = (index: number) => {
    return [4, 6, 7, 8, 9, 11, 16].includes(index);
  };
  return (
    <Boilerplate className="flex h-auto flex-1 flex-col items-center justify-center gap-3">
      <AnimateFlyIn delay={100} className="mb-4 flex w-full gap-3">
        <h1>More to come soon.</h1>
      </AnimateFlyIn>
      {/* <section className="flex h-40 w-96 flex-col gap-2 rounded-md bg-linear-to-b from-[#19191C] to-[#131314] p-3 shadow-[inset_0_1px_0_0_#4A4A54,inset_0_0_0_4px_rgba(0,0,0,0.15),inset_0_0_0_1px_#212124]">
        <div className="flex w-full gap-3">
          <div className="relative h-16 w-16">
            <Image
              src="/placeholder.jpg"
              alt="Playground"
              fill
              className="rounded-full object-cover shadow-[inset_0_0_16px_0_rgba(0,0,0,0.3)]"
            />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(26,26,27,0)_50%,rgba(26,26,27,1)_100%)] opacity-60" />
            <div className="absolute inset-0 rounded-full shadow-[inset_-0.5px_-0.5px_1px_0_rgba(0,0,0,0.2),inset_0.5px_0.5px_1px_0_rgba(255,255,255,0.2)]" />
            <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-[radial-gradient(circle,#D4D4D4,#FFFFFF)] mix-blend-hard-light shadow-[inset_0_0_0_3px_rgba(0,0,0,0.1),inset_0_0_0_0.5px_rgba(0,0,0,0.2)]" />

            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="h-1 w-1 place-self-start rounded-full border border-[#2c2c2f]" />
              <div className="h-1 w-1 place-self-start justify-self-end rounded-full border border-[#2c2c2f]" />
              <div className="h-1 w-1 place-self-end justify-self-start rounded-full border border-[#2c2c2f]" />
            </div>
          </div>
          <div className="flex h-16 flex-col gap-0 pb-2">
            <div className="flex flex-row items-center gap-2">
              <h6 className="font-normal tracking-tighter text-[#d9d9d9] [text-shadow:0_-0.25px_0.1px_#F6F6F6,0_0.25px_0.1px_#9F9F9F]">
                Sleepwalking
              </h6>
              <FaCircleCheck size={10} className="text-[#CAA47A]" />
            </div>
            <p className="h-full text-xs text-[0.5rem] font-light tracking-tighter text-[#a4a4a4]">
              The Chain Gang of 1974
              <span className="m-2 text-[#6e6e6e]">54 plays</span>
            </p>
            <div className="flex w-full flex-row gap-0.5">
              <div className="grid grid-cols-6 grid-rows-3 gap-px rounded-xs bg-[#202023] p-0.5 shadow-[inset_0_0.5px_0_0_#2c2c2f]">
                {Array.from({ length: 18 }, (_, i) => (
                  <div
                    key={i}
                    className={`h-0.5 w-0.5 rounded-full ${Pattern(i) ? "bg-[#caa47a]" : "bg-[#2c2c2f]"}`}
                  />
                ))}
              </div>
              <span className="rounded-xs bg-[#202023] p-0.5 px-0.75 text-[0.5rem] leading-none font-light tracking-tighter text-[#caa47a] shadow-[inset_0_0.5px_0_0_#2c2c2f]">
                from <strong className="font-normal">Daydream Forever</strong>
              </span>
              <span className="rounded-xs bg-[#202023] p-0.5 px-0.75 text-[0.5rem] leading-none font-light tracking-tighter text-[#caa47a] shadow-[inset_0_0.5px_0_0_#2c2c2f]">
                (2018)
              </span>
            </div>
          </div>
        </div>
        <div className="flex h-5 flex-row items-center rounded-full bg-linear-to-l from-[#343439] to-[#000000] p-1 pr-32 shadow-[inset_0_1px_0_0_#2C2C2F,0_4px_10px_0_rgba(0,0,0,0.5),inset_0_0_0_4px_#131315]">
          <div className="h-full flex-1 rounded-full bg-linear-to-r from-[#23232C] via-[#98293E] to-[#C19B6D] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]" />
          <div className="h-8 w-0.5 rounded-full bg-[#d9d9d9]" />
        </div>
        <div></div>
      </section> */}
    </Boilerplate>
  );
}
