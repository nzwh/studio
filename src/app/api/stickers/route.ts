import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import { join } from "path";

export async function GET() {
  try {
    const dir = join(process.cwd(), "public", "images", "stickers");
    const files = await readdir(dir);
    const pngs = files
      .filter((f) => f.toLowerCase().endsWith(".png"))
      .map((f) => `/images/stickers/${f}`);
    return NextResponse.json(pngs);
  } catch {
    return NextResponse.json([]);
  }
}
