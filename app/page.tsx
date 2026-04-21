'use client'

import Divider from "./components/global/Divider";
import Monitor from './components/landing/containers/Monitor';
import GlobalFooter from './components/global/GlobalFooter';
import GlobalNav from "./components/global/GlobalNav";
import Keyboard from "./components/landing/containers/Keyboard";

export default function Home() {

  return (
    <main className="mx-auto px-6 border-[#f0f0f0] border-x w-200 max-md:w-full">

        <GlobalNav />

        <Divider />
        <section className="flex flex-col my-12">
          <Monitor />
          <Keyboard />
        </section>
        <Divider />

        <GlobalFooter />

    </main>
  )
}