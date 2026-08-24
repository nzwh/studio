"use client";

import { AnimateFlyIn } from "@/src/components/global/effects/AnimateFlyIn";
import { Boilerplate, Redirect } from "@/src/components/global";

import {
  AboutWindow,
  WindowToolbar,
  WindowImage,
  WindowLink,
} from "@/src/components/page-about/";

export function AboutClient({ children }: { children: React.ReactNode }) {
  return (
    <Boilerplate
      dividers={true}
      className="flex h-auto w-full min-w-0 flex-1 flex-col items-center justify-center gap-3"
    >
      <AnimateFlyIn delay={100} className="mb-4 flex w-full gap-3">
        <AboutWindow title="about_me.md — Edited" className="w-full min-w-0">
          <WindowToolbar />
          <article className="flex w-full min-w-0 flex-col gap-3 p-2 pt-4 font-light">
            {children}
            <div className="flex w-full min-w-0 flex-row gap-2 pt-2">
              <WindowLink
                path="/Ivan_Serato_Frontend_Developer_Resume.pdf"
                name="nzwh_frontend_dev_cv.pdf"
              />
              <WindowLink
                path="/Ivan_Serato_UIUX_Designer_Resume.pdf"
                name="nzwh_uiux_design_cv.pdf"
              />
            </div>
          </article>
        </AboutWindow>

        <aside className="relative flex w-52 shrink-0 flex-col gap-3 self-stretch text-sm max-md:hidden">
          <AnimateFlyIn delay={200} className="h-full">
            <WindowImage src="/images/about/photo1.jpeg" title="0001.jpg" />
          </AnimateFlyIn>
          <AnimateFlyIn
            delay={300}
            className="absolute top-40 right-14 z-4 h-68 w-52"
          >
            <WindowImage src="/images/about/photo2.jpeg" title="0002.jpg" />
          </AnimateFlyIn>
          <AnimateFlyIn delay={400} className="z-5 h-40">
            <WindowImage src="/images/about/photo3.jpeg" title="0003.jpg" />
          </AnimateFlyIn>
        </aside>
      </AnimateFlyIn>

      <Redirect
        left="send—me—an—email—!"
        right="nzwh@proton.me"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=nzwh@proton.me"
      />
    </Boilerplate>
  );
}
