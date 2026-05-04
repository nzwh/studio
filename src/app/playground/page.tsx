"use client";

import Boilerplate from "@/src/components/global/Boilerplate";
import AnimateFlyIn from "@/src/components/global/effects/AnimateFlyIn";

export default function AboutPage() {
  return (
    <Boilerplate
      dividers={true}
      className="flex h-auto flex-1 flex-col items-center justify-center gap-3"
    >
      <AnimateFlyIn delay={100}>
        <h1 className="text-lg font-light">More to come soon.</h1>
      </AnimateFlyIn>
    </Boilerplate>
  );
}
