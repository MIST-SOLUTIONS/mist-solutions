"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const comingSoonCards = [
  "Coming Soon",
  "Coming Soon",
  "Coming Soon",
];

export default function Products() {
  return (
    <section id="projects" className="mx-auto mt-4 max-w-7xl px-6 py-12 sm:px-10 sm:py-14">
      <Reveal>
        <div className="mb-10">
          <p className="kicker text-sm font-semibold uppercase tracking-[0.14em]">
            Our Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">
            Products we are building today and next.
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal className="h-full">
          <motion.article
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="surface-glow section-shell h-full rounded-2xl p-7 sm:p-8"
          >
            <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-emerald-200">
              Live Project
            </span>
            <h3 className="mt-6 text-2xl font-semibold text-slate-50">
              Assess4Me
            </h3>
            <p className="mt-4 text-slate-300">
              Gamified recruitment assessments powered by AI.
            </p>
            <p className="mt-4 leading-7 text-slate-300/90">
              A platform where candidates complete cognitive and behavioral
              games to help recruiters gain additional insights during hiring.
            </p>

            <a
              href="https://assess4me.com"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center text-sm font-semibold text-blue-200 transition hover:text-white"
            >
              Visit Assess4Me →
            </a>
          </motion.article>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
          {comingSoonCards.map((item, index) => (
            <Reveal key={`${item}-${index}`} delay={0.08 * (index + 1)}>
              <motion.article
                whileHover={{ y: -4, scale: 1.01 }}
                className="section-shell relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute -right-7 -top-7 h-20 w-20 rounded-full bg-blue-200/20 blur-2xl" />
                <span className="rounded-full border border-slate-300/20 bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.13em] text-slate-300">
                  In Development
                </span>
                <h3 className="mt-5 text-xl font-semibold text-slate-100">
                  {item}
                </h3>
                <p className="mt-3 leading-7 text-slate-300/90">
                  New products currently in development.
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
