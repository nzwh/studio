import localFont from "next/font/local";

export const concrete = localFont({
  src: [
    {
      path: "concrete/concrete-norm.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "concrete/concrete-noti.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "concrete/concrete-nobx.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "concrete/concrete-nobi.ttf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-concrete",
  display: "swap",
});

export const nikkeimaru = localFont({
  src: [
    {
      path: "nikkei-maru/nikkeimaru-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "nikkei-maru/nikkeimaru-light-italic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "nikkei-maru/nikkeimaru-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "nikkei-maru/nikkeimaru-regular-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "nikkei-maru/nikkeimaru-ultrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-nikkei-maru",
  display: "swap",
});

export const redaction20 = localFont({
  src: [
    {
      path: "redaction/redaction-20-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "redaction/redaction-20-italic.otf",
      weight: "400",
      style: "italic",
    },
    { path: "redaction/redaction-20-bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-redaction20",
  display: "swap",
});
