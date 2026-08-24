import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import { nikkeimaru } from "../fonts/fonts";
import Cursor from "../components/global/effects/Cursor";

export const metadata: Metadata = {
  title: "@nzwh—portfolio",
  description: '@nzwh portfolio 26"',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nikkeimaru.className} antialiased`}>
        <Cursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
