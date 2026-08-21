import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "src", "content", "projects");

export function getProjectArticleSource(slug: string) {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);

  const headings = Array.from(content.matchAll(/^##\s+(.+)$/gm)).map((m) =>
    m[1].trim(),
  );

  return { content, frontmatter: data, headings };
}
