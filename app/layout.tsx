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
  title: "AlgoSoc - Algorithmic and Programming Society",
  description:
    "Join AlgoSoc, where algorithms meet innovation. A community of passionate programmers, competitive coders, and tech visionaries shaping the future of computing through workshops, competitions, and networking events.",
  keywords: [
    "algorithm",
    "programming",
    "competitive programming",
    "coding",
    "computer science",
    "tech society",
    "algorithms",
    "data structures",
    "programming contests",
    "hackathons",
    "software development",
    "university society",
  ],
  authors: [{ name: "AlgoSoc Team" }],
  creator: "AlgoSoc",
  publisher: "AlgoSoc",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
        style={{ backgroundColor: "#000000" }}
      >
        {children}
      </body>
    </html>
  );
}
