import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mist.solutions"),
  title: "MIST Solutions | Focused Digital Product Studio",
  description:
    "MIST Solutions is a Belgian product studio building scalable digital ventures in HR tech, AI, and business automation.",
  keywords: [
    "MIST Solutions",
    "product studio",
    "HR tech",
    "AI",
    "business automation",
    "Belgium",
    "Assess4Me",
  ],
  authors: [{ name: "MIST Solutions" }],
  openGraph: {
    title: "MIST Solutions | Focused Digital Product Studio",
    description:
      "We build disciplined, scalable digital products designed for long-term impact.",
    url: "https://mist.solutions",
    siteName: "MIST Solutions",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
