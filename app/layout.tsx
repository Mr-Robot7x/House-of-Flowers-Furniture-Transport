import type { Metadata } from "next";
import { Mirza } from "next/font/google";
import "./globals.css";

const mirzaFont = Mirza({
  weight: ["400", "600", "700"],
  display: "auto",
  preload: true,
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "New Project",
  description: "created with create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${mirzaFont.className} antialiased`}>{children}</body>
    </html>
  );
}
