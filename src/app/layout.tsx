import type { Metadata } from "next";
import { nikkeimaru } from "../fonts/fonts";
import "./globals.css";

import Cursor from "../components/global/effects/Cursor";
import { LenisScroll } from "../components/global/effects/LenisScroll";

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
        <LenisScroll>
          <Cursor />
          {children}
        </LenisScroll>
      </body>
    </html>
  );
}
