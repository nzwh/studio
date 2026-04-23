export async function GET() {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks` +
      `&user=${process.env.LASTFM_USER}` +
      `&api_key=${process.env.LASTFM_API_KEY}` +
      `&format=json&limit=1`,
    { next: { revalidate: 30 } },
  );

  const data = await res.json();
  const track = data.recenttracks.track[0];
  const isPlaying = track["@attr"]?.nowplaying === "true";

  return Response.json({
    isPlaying,
    title: track.name,
    artist: track.artist["#text"],
    album: track.album["#text"],
    albumArt: track.image.find(
      (i: { size: string }) => i.size === "extralarge",
    )?.["#text"],
    url: track.url,
  });
}
