import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
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
        className={`${manrope.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
