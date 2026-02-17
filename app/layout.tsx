import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MIST Solutions | Building Digital Products for the Future",
  description:
    "MIST Solutions is a Belgian holding company developing innovative digital products across HR tech, AI, and business automation. We build scalable solutions that deliver measurable impact.",
  keywords: [
    "MIST Solutions",
    "HR tech",
    "AI",
    "business automation",
    "digital products",
    "Belgium",
    "Assess4Me",
  ],
  authors: [{ name: "MIST Solutions" }],
  openGraph: {
    title: "MIST Solutions | Building Digital Products for the Future",
    description:
      "Developing innovative digital products across HR tech, AI, and business automation.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
