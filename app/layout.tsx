import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lichangshuo.com"),
  title: "李昌朔｜参数化设计师 & ORCA AI 开发",
  description: "李昌朔的个人作品集：ORCA Text-to-CAD、参数化设计、AI 产品开发与数字制造。",
  openGraph: {
    title: "李昌朔｜构建下一种设计逻辑",
    description: "ORCA Text-to-CAD × 参数化设计 × AI × 数字制造",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary",
    title: "李昌朔｜构建下一种设计逻辑",
    description: "ORCA Text-to-CAD × 参数化设计 × AI × 数字制造",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
