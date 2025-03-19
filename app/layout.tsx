import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "آموزش باریستا و بارتندری | خرید قهوه و تجهیزات کافی‌شاپ",
  description:
    "دوره‌های حرفه‌ای باریستا و بارتندری، آموزش تهیه قهوه‌های تخصصی، و فروش قهوه و تجهیزات کافی‌شاپ برای علاقه‌مندان به دنیای قهوه.",

  keywords: [
    "باریستا",
    "بارتندری",
    "آموزش باریستا",
    "آموزش بارتندری",
    "قهوه تخصصی",
    "دوره باریستا",
    "دوره بارتندر",
    "لوازم کافی‌شاپ",
    "دستگاه اسپرسو",
    "آسیاب قهوه",
  ],

  openGraph: {
    title: "آموزش باریستا و بارتندری | خرید قهوه و تجهیزات کافی‌شاپ",
    description:
      "یادگیری حرفه‌ای باریستا و بارتندری با دوره‌های تخصصی، آموزش تهیه قهوه‌های ویژه، و خرید بهترین تجهیزات کافی‌شاپ.",
    url: "https://example.com",
    type: "website",
    images: [
      {
        url: "https://example.com/images/barista-course.jpg",
        width: 1200,
        height: 630,
        alt: "آموزش باریستا و تهیه قهوه",
      },
    ],
  },

  alternates: {
    canonical: "https://example.com",
  },

  robots: {
    follow: true,
    index: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="dark:bg-black">
        {children}
      </body>
    </html>
  );
}
