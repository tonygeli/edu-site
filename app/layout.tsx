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
  title: {
    template: "%s - 中考优学网",
    default: "中考优学网 - 专注于中考资源与名校信息分享",
  },
  description: "中考优学网，专注分享中考最新真题、优质复习资料、各省市名校排名及备考经验，助力学子轻松应对中考。",
  keywords: ["中考", "中考资料", "中考试题", "名校排名", "中考经验", "学习资源", "初中", "复习资料"],
  openGraph: {
    title: "中考优学网 - 专注于中考资源与名校信息分享",
    description: "中考优学网，专注分享中考最新真题、优质复习资料、各省市名校排名及备考经验，助力学子轻松应对中考。",
    url: "https://33334444.cn",
    siteName: "中考优学网",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "你的博客名 - 专注于前端与技术分享",
    description: "你的博客介绍，聚焦前端、技术、生活随笔等优质内容。",
  },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon.ico",
  //   apple: "/apple-touch-icon.png",
  // },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
