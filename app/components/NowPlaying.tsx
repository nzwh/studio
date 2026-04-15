'use client'

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
        .then(r => {
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
    <div className="flex flex-row gap-3 bg-zinc-900 py-2 pr-4 pl-2 rounded-lg">
      <Image src={track.albumArt} alt={track.album} width={36} height={36} className="rounded-sm" />
      {/* {track.isPlaying ? "🎵 Now playing" : "🎧 Last played"}:{" "} */}
      <div className="flex flex-col">
        <h6 className="font-semibold text-sm">{track.title}</h6>
        <a href={track.url} target="_blank" className="text-gray-400 text-xs">
          {track.artist}
        </a>
      </div>
    </div>
  );
}