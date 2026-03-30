import type { Metadata } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mist.solutions"),
  title: "Mist Solutions | Antwerp Product Studio",
  description:
    "Mist Solutions is an Antwerp-based startup building modern digital products with AI, software engineering, product design, and experimentation.",
  keywords: [
    "Mist Solutions",
    "Antwerp startup",
    "product studio",
    "digital products",
    "AI",
    "software engineering",
    "product design",
    "Assess4Me",
  ],
  authors: [{ name: "Mist Solutions" }],
  openGraph: {
    title: "Mist Solutions | Antwerp Product Studio",
    description:
      "We build modern digital products and experiments, with Assess4Me as our first launched project.",
    url: "https://mist.solutions",
    siteName: "Mist Solutions",
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
        className={`${dmSans.variable} ${newsreader.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
