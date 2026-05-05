import Image from "next/image";
import Link from "next/link";
import { FiFigma } from "react-icons/fi";

export default function ProjectGridItem({
  href,
  title,
  description,
  src,
}: {
  href: string;
  title: string;
  description: string;
  src: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex h-20 w-full items-center justify-center gap-4 rounded-lg border border-[#f0f0f0] bg-[#ffffff] p-2 transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="relative h-full w-56">
        <Image
          src={src}
          alt="Project Thumbnail"
          fill
          className="rounded-sm object-cover"
        />
      </div>
      <div className="w-full">
        <h3 className="text-md font-medium">
          {title}
          <FiFigma size={12} className="mb-1 ml-2 inline-block text-gray-500" />
        </h3>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </Link>
  );
}
