import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "환경창업 아이디어 상시모집",
  description: "환경창업 아이디어 상시모집 - KEITI 한국환경산업기술원",
  openGraph: {
    type: "website",
    title: "환경창업 아이디어 상시모집",
    description: "환경창업 아이디어 상시모집 - KEITI 한국환경산업기술원",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
