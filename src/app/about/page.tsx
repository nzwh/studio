"use client";

import Boilerplate from "@/src/components/global/Boilerplate";
import Image from "next/image";

export default function Home() {
  const PARAGRAPHS = [
    "Hey there! I'm Van Serato, but I usually go under the alias \"nzwh\". For the meaning of it, feel free to make your own deductions. I'm a fresh graduate from De La Salle University, and I'm a Front-end Developer and UI/UX designer based in Manila. I build web apps and design the interfaces that make them worth using.",
    "I've been designing since middle school, and been coding for roughly 7 years. I like looking at problems and thinking, “I know a good solution for this”. I can work both independently and as a team player, and I keep improving until something is ready to ship. Feedback is always welcome.",
    "My ideology is simple: design is more important than you think. It's a first impression, it's something to admire, and it's proof that something has been thought out well. To implement good design, proper code needs to back it up, too. For me, a great experience has to be built well, and one without another feels tacky to use.",
    "Other than that, I like playing a few games (mostly Honkai: Star Rail), listening to music, going out, taking pictures, drinking good coffee, and observing the world for what it's worth. Oh, I love going to conventions. I like collecting nice keychains.",
    "I'm currently open to work and grow into a role where I can confidently do both. Feel free to reach out if you have something you want to build. I'd love to work on something together.",
  ];

  return (
    <Boilerplate dividers={true}>
      <section className="my-16 flex h-fit w-full gap-6">
        <article className="flex h-fit w-full flex-col gap-6 font-light">
          <h2 className={`text-2xl font-normal tracking-tighter`}>
            A little more about me...
          </h2>
          <div className="flex flex-col gap-3">
            {PARAGRAPHS.map((paragraph, index) => (
              <p key={index} className="leading-5.5 text-[#393939]">
                {paragraph}
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
    </Boilerplate>
  );
}
