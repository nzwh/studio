"use client";

import { useEffect, useState } from "react";

export default function MonitorDateTime({ className }: { className?: string }) {
  const [date, setDate] = useState("");
  const [clock, setClock] = useState("");

  useEffect(() => {
    const format = () => {
      const now = new Date();
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          timeZone: "Asia/Manila",
        }),
      );
      setClock(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "Asia/Manila",
        }),
      );
    };

    format();
    const interval = setInterval(format, 1000);
    return () => clearInterval(interval);
  }, []);

  const getClockWidth = (hour: string) =>
    54 + [...hour].reduce((w, d) => w + (d === "1" ? 4 : 8), 0);

  return (
    <span
      data-cursor="current time for me"
      className={`flex items-center gap-2 tracking-wide ${className}`}
    >
      <span>{date}</span>
      <span
        className="flex justify-end"
        style={{
          width: `${getClockWidth(clock.slice(0, clock.indexOf(":")))}px`,
        }}
      >
        {clock}
      </span>
    </span>
  );
}
