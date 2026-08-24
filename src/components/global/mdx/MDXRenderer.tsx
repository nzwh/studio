import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponent } from "./MDXComponent";

export default function MdxRenderer({
  source,
  className,
}: {
  source: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <MDXRemote source={source} components={MDXComponent} />
    </div>
  );
}
