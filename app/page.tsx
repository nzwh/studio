'use client'

import Divider from "./components/global/Divider";
import Monitor from './components/landing/containers/Monitor';
import GlobalFooter from './components/global/GlobalFooter';
import GlobalNav from "./components/global/GlobalNav";

export default function Home() {

  return (
    <main className="mx-auto px-6 border-x border-zinc-200 w-200 max-md:w-full">

        <GlobalNav />

        <Divider />
        <Monitor />
        <Divider />

        <GlobalFooter />

    </main>
  )
}