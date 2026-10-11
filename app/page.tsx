import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Products from "@/components/Products";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import Collaboration from "@/components/Collaboration";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="overflow-hidden">
        <Hero />
        <Marquee />
        <Products />
        <About />
        <WhatWeDo />
        <Collaboration />
      </main>
      <Footer />
    </>
  );
}
