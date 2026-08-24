import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");

export function getMdxSource(collection: string, slug: string) {
  const filePath = path.join(CONTENT_ROOT, collection, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);

  const headings = Array.from(content.matchAll(/^##\s+(.+)$/gm)).map((m) =>
    m[1].trim(),
  );

  return { content, frontmatter: data, headings };
}
