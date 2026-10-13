import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist_Mono, Schibsted_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mist-solutions.com"),
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
    url: "https://www.mist-solutions.com",
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Force dynamic rendering so CSP nonce is fresh per request
  await headers();

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${schibsted.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
