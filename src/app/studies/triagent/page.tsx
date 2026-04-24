"use client";

import Divider from "@/src/components/global/static/Divider";
import Footer from "@/src/components/global/static/Footer";
import Navbar from "@/src/components/global/static/Navbar";

export default function Triagent() {
  const chapters = [
    {
      title: "the—beginning",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "the—process",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "the—outcome",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];
  return (
    <main className="mx-auto w-200 px-6 max-md:w-full" data-gramm="false">
      <Navbar />
      <Divider />

      <section className="my-12 flex w-full flex-row gap-2">
        <aside className="w-60 bg-red-500">
          <h3 className="text-lg font-medium">chapters</h3>
          {chapters.map((chapter, i) => (
            <div key={i} className="mt-4 flex flex-row items-start gap-2">
              <div className="mt-1 flex h-3 w-3 rounded-full bg-[#393939]" />
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-medium">{chapter.title}</h4>
                <p className="text-sm text-[#393939]">{chapter.content}</p>
              </div>
            </div>
          ))}
        </aside>
        <article className="flex w-full flex-col gap-3 bg-blue-400"></article>
      </section>

      <Divider />
      <Footer />
    </main>
  );
}
