"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Track = {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  url: string;
};

export default function NowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    const fetchTrack = () => {
      fetch("/api/now-playing")
        .then((r) => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          return r.json();
        })
        .then(setTrack)
        .catch(console.error);
    };

    fetchTrack();
    const interval = setInterval(fetchTrack, 30000);

    return () => clearInterval(interval);
  }, []);

  if (!track) return null;

  return (
    <div className="absolute top-5 left-1/2 z-10 flex w-60 -translate-x-1/2 flex-row gap-2 rounded-md border border-[#f0f0f0] bg-[#ffffff]/80 p-2 tracking-tight text-[#393939] backdrop-blur-sm">
      <Image
        src={track.albumArt}
        alt={track.album}
        width={36}
        height={36}
        className="rounded-sm"
      />
      <div className="flex flex-col gap-0">
        <h6 className="text-sm font-normal">{track.title}</h6>
        <a href={track.url} target="_blank" className="text-xs">
          {track.artist}
        </a>
      </div>
    </div>
  );
}
