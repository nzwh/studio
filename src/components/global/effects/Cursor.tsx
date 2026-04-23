"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const current = useRef({ x: -200, y: -200 });
  const hovering = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const box = boxRef.current;
    const label = labelRef.current;
    const root = rootRef.current;
    if (!box || !label || !root) return;

    let rafId = 0;

    function loop() {
      current.current.x += (pos.current.x - current.current.x) * 0.1;
      current.current.y += (pos.current.y - current.current.y) * 0.1;
      root!.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
      rafId = requestAnimationFrame(loop);
    }

    function onMove(e: MouseEvent) {
      pos.current = { x: e.clientX, y: e.clientY };
    }

    function onOver(e: MouseEvent) {
      const el = (e.target as HTMLElement).closest(
        "[data-cursor]",
      ) as HTMLElement | null;
      if (!el) return;
      const text = el.dataset.cursor ?? "";
      label!.textContent = text;
      label!.style.opacity = "1";
      const natural = label!.scrollWidth + 16;
      box!.style.width = `${Math.max(28, natural)}px`;
      box!.style.height = "28px";
      box!.style.borderRadius = "4px";

      const rect = el.getBoundingClientRect();
      const isNearBottom = rect.bottom > window.innerHeight * 0.8;
      box!.style.transform = isNearBottom
        ? "translate(-50%, calc(-100% - 8px))"
        : "translate(-50%, 12px)";
      hovering.current = true;
    }

    function onOut(e: MouseEvent) {
      const to = e.relatedTarget as HTMLElement | null;
      if (to?.closest("[data-cursor]")) return;
      label!.textContent = "";
      label!.style.opacity = "0";
      box!.style.width = "12px";
      box!.style.height = "12px";
      box!.style.borderRadius = "2px";
      box!.style.transform = "translate(-50%, -50%)";
      hovering.current = false;
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver, {
      capture: true,
      passive: true,
    });
    document.addEventListener("mouseout", onOut, {
      capture: true,
      passive: true,
    });
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver, { capture: true });
      document.removeEventListener("mouseout", onOut, { capture: true });
    };
  }, []);

  return (
    <div
      ref={rootRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 99999,
        willChange: "transform",
      }}
    >
      <div
        ref={boxRef}
        className="hidden md:block"
        style={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "12px",
          height: "12px",
          borderRadius: "2px",
          fontSize: "10px",
          fontFamily: "inherit",
          letterSpacing: "0",
          whiteSpace: "nowrap",
          overflow: "hidden",
          transition:
            "width 0.4s cubic-bezier(0.16,1,0.3,1), height 0.4s cubic-bezier(0.16,1,0.3,1), border-radius 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <span
          ref={labelRef}
          style={{
            opacity: 0,
            transition: "opacity 0.2s ease",
            padding: "0 6px",
          }}
        />
      </div>
    </div>
  );
}
