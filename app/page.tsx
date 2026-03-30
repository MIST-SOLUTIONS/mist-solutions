import Hero from "@/components/Hero";
import About from "@/components/About";
import Credibility from "@/components/Credibility";
import Products from "@/components/Products";
import WhatWeDo from "@/components/WhatWeDo";
import Collaboration from "@/components/Collaboration";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="page-frame overflow-hidden px-4 pb-8 pt-4 sm:px-6 lg:px-10">
      <Hero />
      <Credibility />
      <About />
      <Products />
      <WhatWeDo />
      <Collaboration />
      <Footer />
    </main>
  );
}
