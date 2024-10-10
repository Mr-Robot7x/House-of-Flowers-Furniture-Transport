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
  alternates: {
    canonical: process.env.PUBLIC_URL,
  },
  title: "بيت من الزهور نقل اثاث",
  description:
    "هل تبحث عن نقل دون ضغوط؟ يوفر فريقنا الماهر التعبئة الموثوقة والتنقل الفعال بأسعار تنافسية. اتصل بنا للحصول على عرض أسعار مجاني.",
  other: {
    google: "noTranslate",
  },
  openGraph: {
    type: "website",
    countryName: "UAE",
    title: "بيت من الزهور نقل اثاث",
    description:
      "هل تبحث عن نقل دون ضغوط؟ يوفر فريقنا الماهر التعبئة الموثوقة والتنقل الفعال بأسعار تنافسية. اتصل بنا للحصول على عرض أسعار مجاني.",
    url: process.env.PUBLIC_URL,
    siteName: "بيت من الزهور نقل اثاث",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${mirzaFont.className} font-[Mirza] antialiased`}>
        {children}
      </body>
    </html>
  );
}
