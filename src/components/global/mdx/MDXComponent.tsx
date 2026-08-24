import Image from "next/image";

export const MDXComponent = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-normal">
      {props.children}
      <span className="mx-0.5 mb-1 inline-block h-5 w-0.5 animate-[caret_1.1s_ease-in-out_infinite] bg-[#393939] align-middle" />
    </h2>
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="leading-5.5 text-[#393939]">{props.children}</p>
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-normal">{props.children}</strong>
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <Image
      src={props.src as string}
      alt={props.alt || "Article media"}
      width={0}
      height={0}
      sizes="100vw"
      className="w-full max-w-md rounded-lg shadow-md"
    />
  ),
};
