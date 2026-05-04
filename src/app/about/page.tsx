"use client";

import Boilerplate from "@/src/components/global/Boilerplate";
import Divider from "@/src/components/global/Divider";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const PARAGRAPHS = [
  "I'm Van Serato, also known as **nzwh**. I'm a fresh graduate from De La Salle University, and a **front-end developer** and **UI/UX designer** based in Manila.",
  "I've been designing and coding since high school, and I like looking at problems and thinking, **“I know a good solution for this”**. I can work both independently and as a team player, and I keep improving until something is ready to ship.",
  "My ideology is simple: **design is more important than you think**. It's a first impression, it's something to admire, and it's proof that something has been thought out well. To implement good design, proper code needs to back it up, too. A great experience has to be built well and doesn't feels tacky to use.",
  "Other than that, I like playing Honkai: Star Rail, listening to music, taking pictures, drinking good coffee, and observing the world for what it's worth.",
  "**I'm currently open to work!** Feel free to reach out if you have something you want to build. I'd love to work on something together.",
];

export default function AboutPage() {
  const [showCV, setShowCV] = useState(false);
  const HandleShowCV = (showCV: boolean) => {
    setShowCV(!showCV);
  };

  const ParseMarkdown = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-normal">
            {part.slice(2, -2)}
          </strong>
        );
      } else if (part.startsWith("*") && part.endsWith("*")) {
        return (
          <em key={index} className="italic">
            {part.slice(1, -1)}
          </em>
        );
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };

  return (
    <Boilerplate dividers={true}>
      <section className="mt-16 mb-6 flex h-fit w-full gap-6">
        <article className="flex h-fit w-full flex-col gap-3 font-light">
          <h2 className="text-2xl font-normal">Hey there!</h2>
          <div className="flex flex-col gap-3">
            {PARAGRAPHS.map((paragraph, index) => (
              <p key={index} className="leading-5.5 text-[#393939]">
                {ParseMarkdown(paragraph)}
              </p>
            ))}
          </div>
        </article>
        <aside className="flex w-60 shrink-0 flex-col gap-2 rounded-sm border border-[#dadada] bg-[#ffffff] p-2 text-sm">
          <Image
            src="/placeholder.jpg"
            alt="portrait"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full rounded-sm object-cover"
          />
          <Image
            src="/placeholder.jpg"
            alt="portrait"
            width={0}
            height={0}
            sizes="100vw"
            className="h-20 w-full rounded-sm object-cover"
          />
        </aside>
      </section>
      <Divider type="short" />
      <button
        className="my-3 flex h-fit w-full cursor-pointer justify-between gap-6 transition-transform duration-200 hover:translate-y-1"
        onClick={() => HandleShowCV(showCV)}
      >
        <span className="text-sm font-light text-[#393939]">
          view—whole—cv—here
        </span>
        <div className="flex flex-row items-center gap-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <FaArrowRightLong key={i} size={12} />
          ))}
        </div>
      </button>
      {showCV && (
        <div className="my-3 flex h-fit w-full gap-6">
          <span className="text-sm font-light text-[#393939]">
            Here&apos;s my full CV!
          </span>
        </div>
      )}
    </Boilerplate>
  );
}
