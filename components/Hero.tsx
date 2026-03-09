"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section className="section-shell relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-6 pb-20 pt-16 sm:px-10 sm:pb-24 sm:pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="float-slow absolute -left-8 top-14 h-44 w-44 rounded-full bg-indigo-300/20 blur-3xl" />
        <div className="float-delayed absolute right-8 top-5 h-56 w-56 rounded-full bg-blue-300/15 blur-3xl" />
        <div className="absolute bottom-4 left-1/3 h-40 w-40 rounded-full bg-slate-200/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="kicker inline-flex items-center rounded-full border border-blue-200/20 bg-blue-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">
            Mist Solutions • Antwerp Product Studio
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-8 text-4xl font-semibold leading-tight text-slate-100 sm:text-6xl">
            Building the next generation of digital products.
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-xl">
            Mist Solutions is an Antwerp-based startup designing and building
            innovative technology products through AI, software engineering,
            product design, and rapid experimentation.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary rounded-xl px-7 py-3.5 text-sm font-semibold transition-colors"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary rounded-xl px-7 py-3.5 text-sm font-semibold transition-colors"
            >
              Contact Us
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
