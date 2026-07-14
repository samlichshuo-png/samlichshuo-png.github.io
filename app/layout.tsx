import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  weight: "variable",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lichangshuo.com"),
  title: "李昌朔 / Li Changshuo｜计算设计与 AI CAD",
  description: "李昌朔的双语作品集：ORCA、OrcaFlow、参数化设计、AI CAD 与数字制造。",
  openGraph: {
    title: "李昌朔 / Li Changshuo｜构建下一种设计逻辑",
    description: "ORCA × OrcaFlow × 参数化设计 × AI CAD × 数字制造",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: "李昌朔 / Li Changshuo — Computational Design, AI CAD and Digital Fabrication",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "李昌朔 / Li Changshuo｜构建下一种设计逻辑",
    description: "ORCA × OrcaFlow × 参数化设计 × AI CAD × 数字制造",
    images: ["/og.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoSansSC.variable}`}>{children}</body>
    </html>
  );
}
