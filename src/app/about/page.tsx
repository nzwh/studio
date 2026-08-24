import { getMdxSource } from "@/src/lib/mdx";
import MdxRenderer from "@/src/components/global/mdx/MDXRenderer";
import AboutClient from "./client";
import { notFound } from "next/navigation";

export default function AboutPage() {
  const article = getMdxSource("about", "index");
  if (!article) return notFound();

  return (
    <AboutClient>
      <MdxRenderer source={article.content} className="flex flex-col gap-3" />
    </AboutClient>
  );
}
