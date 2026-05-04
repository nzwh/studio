import Image from "next/image";
import { WindowPanel } from "./WindowPanel";

export const PanelImage = ({
  src = "/placeholder.jpg",
  title,
  className,
}: {
  src?: string;
  title: string;
  className?: string;
}) => (
  <WindowPanel title={title} className={className}>
    <div className="relative w-full" style={{ minHeight: "100%" }}>
      <Image
        src={src}
        alt={title}
        fill
        sizes="208px"
        className="rounded-sm object-cover"
      />
    </div>
  </WindowPanel>
);
