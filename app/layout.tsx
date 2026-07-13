import type { Metadata } from "next";
import { headers } from "next/headers";
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

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "李昌朔｜参数化设计师 & ORCA AI 开发",
    description: "李昌朔的个人作品集：参数化设计、AI 产品开发与数字制造。",
    openGraph: {
      title: "李昌朔｜构建下一种设计逻辑",
      description: "参数化设计 × AI × 数字制造",
      type: "website",
      locale: "zh_CN",
    },
    twitter: {
      card: "summary",
      title: "李昌朔｜构建下一种设计逻辑",
      description: "参数化设计 × AI × 数字制造",
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
