"use client";

import Footer from "./components/global/static/Footer";
import Navbar from "./components/global/static/Navbar";
import Divider from "./components/global/static/Divider";

import Monitor from "./components/landing/containers/Monitor";
import Keyboard from "./components/landing/containers/Keyboard";
import Cassette from "./components/landing/containers/Cassette";

import Triagent from "./components/branding/logo/Triagent";

export default function Home() {
  const SHOWCASE_PROJECT = {
    title: "Triagent",
    description: `Wrong doctors, wrong information, wrong care.\nSee how we used AI to change the way people seek proper care, fast.`,
    work_type: "collaborative-work",
    read_time: "5m read",
    date_published: "09-2025",
    logo_url: "/shapes/disk-sticker.svg",
    cover_url: "/placeholder.jpg",
  };

  return (
    <main
      className="mx-auto w-200 border-x border-[#f0f0f0] px-6 max-md:w-full"
      data-gramm="false"
    >
      <Navbar />

      <Divider />
      <section className="my-12 flex flex-col">
        <Monitor />
        <Keyboard />
      </section>
      <Divider />

      <section className="ites-center my-12 flex w-full flex-col gap-3">
        <h2 className="w-full text-center text-sm font-light tracking-tight">
          highlighted—works
        </h2>
        <Cassette {...SHOWCASE_PROJECT} />
        <div className="flex w-full flex-row items-center gap-2">
          <div className="flex w-40 flex-row items-center gap-2">
            <h6 className="text-sm font-normal tracking-tight text-[#393939]">
              Triagent
            </h6>
            <div className="flex h-4 w-4 items-center justify-center rounded-xs bg-[#f0f0f0]">
              <Triagent className="h-2 w-2 text-[#393939]" />
            </div>
          </div>
          <div className="aspect-square h-1 w-1 rounded-full bg-[#f0f0f0]" />
          <p className="w-full text-sm font-light tracking-tight text-[#393939]">
            AI-powered medical chatbot & doctor recommendation web-app
          </p>
          <div className="flex w-fit flex-row gap-1">
            {["Design Lead", "UX Researcher", "+4"].map((role, i) => (
              <span
                key={i}
                className="h-fit flex-nowrap rounded-xs bg-[#F0F0F0] px-1 py-0.5 text-xs font-normal tracking-tight whitespace-nowrap text-[#707070]"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <Footer />
    </main>
  );
}
