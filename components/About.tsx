"use client";

import Reveal from "@/components/ui/Reveal";

const focusAreas = ["AI", "Software Products", "Modern Web Platforms"];

export default function About() {
  return (
    <section id="about" className="mx-auto mt-6 max-w-7xl rounded-3xl px-6 py-16 sm:px-10 sm:py-20">
      <Reveal className="section-shell rounded-3xl p-8 sm:p-12">
        <p className="kicker text-sm font-semibold uppercase tracking-[0.14em]">
          About Mist Solutions
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-100 sm:text-4xl">
          A product-focused startup building experimental technology.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          We are a small team focused on creating impactful tools and
          platforms. Mist Solutions builds multiple products, with Assess4Me as
          our first project and more ideas already in development.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          {focusAreas.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-300/20 bg-slate-900/50 px-4 py-2 text-sm text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
