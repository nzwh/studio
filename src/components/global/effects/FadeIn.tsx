"use client";

import { motion } from "framer-motion";

export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 24,
  duration = 0.7,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
}) {
  const OFFSET = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...OFFSET[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      viewport={{ once: true, margin: "-64px" }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}
