"use client";

import { useState } from "react";
import Link from "next/link";
import { concrete } from "@/app/fonts/fonts";

// ── Constants ─────────────────────────────────────────────────

const LETTERS = [
  { char: "n", width: "0.65em" },
  { char: "z", width: "0.48em" },
  { char: "w", width: "0.87em" },
  { char: "h", width: "0.58em" },
];
const TRAIL_COLORS = ["#ff00ff", "#ffff00", "#00ffff"];

export default function Logo() {
  const [hovered, setHovered] = useState(false);
  const [exiting, setExiting] = useState(false);

  const handleMouseEnter = () => {
    setExiting(false);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setExiting(true);
    setTimeout(() => {
      setHovered(false);
      setExiting(false);
    }, 300);
  };

  return (
    <Link
      href="/"
      data-cursor="hi there! 👋"
      className="mb-1 flex cursor-pointer flex-row items-center select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {LETTERS.map(({ char, width }, i) => (
        <span
          key={i}
          className="relative inline-block"
          style={{ width, height: "1.5em" }}
        >
          {TRAIL_COLORS.map((color, j) => (
            <span
              key={j}
              className={`${concrete.className} pointer-events-none absolute inset-0 text-xl font-extrabold tracking-[-0.15em] italic mix-blend-hard-light`}
              style={{
                color,
                opacity: hovered && !exiting ? 1 : 0,
                transition: "opacity 0.3s ease-out",
                animationName: hovered ? "letter-float" : "none",
                animationDuration: "1s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDelay: `${i * 0.1 - (j + 1) * 0.15}s`,
              }}
            >
              {char}
            </span>
          ))}
          <span
            className={`${concrete.className} absolute inset-0 z-10 text-xl font-extrabold tracking-[-0.15em] italic`}
            style={{
              display: "inline-block",
              transform: exiting ? "translateY(0)" : undefined,
              transition: exiting ? "transform 0.3s ease-out" : "none",
              animationName: !exiting && hovered ? "letter-float" : "none",
              animationDuration: "1s",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDelay: `${i * 0.1}s`,
            }}
          >
            {char}
          </span>
        </span>
      ))}
    </Link>
  );
}
