import Image from "next/image";
import Link from "next/link";

export default function File({
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
      className="shadow-card flex h-16 w-full items-center justify-center gap-4 rounded-lg border border-[#dadada] bg-[#ffffff] p-2 transition-transform duration-200 hover:-translate-y-1"
    >
      <Image
        src="/placeholder.jpg"
        alt="file"
        width={0}
        height={0}
        sizes="100vw"
        className="h-full w-36"
      />
      <div className="w-full">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </Link>
  );
}
