import Image from "next/image";
import { AboutWindow } from "./AboutWindow";

export const WindowImage = ({
  src = "/placeholder.jpg",
  title,
  className,
}: {
  src?: string;
  title: string;
  className?: string;
}) => (
  <AboutWindow title={title} className={className}>
    <div className="relative h-full w-full">
      <Image src={src} alt={title} fill className="rounded-sm object-cover" />
    </div>
  </AboutWindow>
);
