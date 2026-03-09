import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhatWeDo from "@/components/WhatWeDo";
import Collaboration from "@/components/Collaboration";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden px-4 pb-8 pt-4 sm:px-6 lg:px-10">
      <Hero />
      <About />
      <Products />
      <WhatWeDo />
      <Collaboration />
      <Footer />
    </main>
  );
}
