import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

import { PROJECTS } from "@/src/lib/projects.data";

import ArticleClient from "./client";
import Headline from "@/src/components/page-articles/ArticleHeadline";
import { getMdxSource } from "@/src/lib/mdx";

export const ConvertID = (header: string) => {
  return header
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
};

const getTextContent = (node: React.ReactNode): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getTextContent).join("");
  if (
    node &&
    typeof node === "object" &&
    "props" in node &&
    (node as { props?: { children?: React.ReactNode } }).props?.children
  ) {
    return getTextContent(
      (node as { props: { children: React.ReactNode } }).props.children,
    );
  }
  return "";
};

const MDXComponent = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = getTextContent(props.children);
    const id = ConvertID(text);
    return (
      <h2
        id={id}
        className={`text-2xl font-medium ${
          text === "Introduction" ? "h-0 overflow-hidden" : "mt-6"
        }`}
      >
        {props.children}
      </h2>
    );
  },
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-justify">{props.children}</p>
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <Image
      src={props.src as string}
      alt={props.alt || "Project media"}
      width={0}
      height={0}
      sizes="100vw"
      className="w-full max-w-md rounded-lg shadow-md"
    />
  ),
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const article = getMdxSource("projects", slug);
  if (!article) notFound();

  return (
    <ArticleClient
      headline={<Headline project={project} />}
      headings={article.headings}
    >
      <MDXRemote source={article.content} components={MDXComponent} />
    </ArticleClient>
  );
}
