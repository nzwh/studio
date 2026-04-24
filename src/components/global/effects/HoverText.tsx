"use client";

import { useState } from "react";

interface HoverTextProps {
  children: React.ReactNode;
  hoverText: string;
  className?: string;
  onClick?: () => void;
}
export default function HoverText({
  children,
  hoverText,
  className,
  onClick,
}: HoverTextProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className={className}
      style={{
        position: "relative",
        display: "inline-block",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <span
        style={{
          display: "block",
          transform: hovered ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {children}
      </span>
      <span
        style={{
          display: "block",
          position: "absolute",
          inset: 0,
          transform: hovered ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {hoverText}
      </span>
    </span>
  );
}
