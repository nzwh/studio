"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimateFlyIn({
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
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-64px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const TRANSLATE = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0, 0)" : TRANSLATE[direction],
        transition: `opacity ${duration}s cubic-bezier(0.21, 0.47, 0.32, 0.98) ${delay}ms, transform ${duration}s cubic-bezier(0.21, 0.47, 0.32, 0.98) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
