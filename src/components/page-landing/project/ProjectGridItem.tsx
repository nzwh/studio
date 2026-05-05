import Image from "next/image";
import Link from "next/link";

export default function ProjectGridItem({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex h-16 w-full items-center justify-center gap-4 rounded-lg border border-[#f0f0f0] bg-[#ffffff] p-2 transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="relative h-full w-36">
        <Image
          src="/placeholder.jpg"
          alt="file"
          fill
          className="rounded-sm object-cover"
        />
      </div>
      <div className="w-full">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </Link>
  );
}
