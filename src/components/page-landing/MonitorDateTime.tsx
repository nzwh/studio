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

  const [time, period] = clock.split(" ");

  return (
    <span
      data-cursor="current time for me"
      className={`flex items-center gap-2 ${className}`}
    >
      <span>{date}</span>
      <span className="flex items-center gap-1">
        <span className="flex">
          {Array.from(time ?? "").map((char, i) => (
            <span
              key={i}
              className={/\d/.test(char) ? "w-1.5 text-center" : ""}
            >
              {char}
            </span>
          ))}
        </span>
        <span>{period}</span>
      </span>
    </span>
  );
}
