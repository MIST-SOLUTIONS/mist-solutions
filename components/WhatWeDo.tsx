"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const capabilities = [
  {
    title: "AI-Powered Products",
    description:
      "We integrate practical AI into real product experiences, not feature demos.",
    icon: "AI",
  },
  {
    title: "Web Platforms",
    description:
      "Fast, scalable platforms built with modern engineering standards.",
    icon: "WEB",
  },
  {
    title: "Product Design",
    description:
      "Clear product thinking, from concept to a polished user experience.",
    icon: "UX",
  },
  {
    title: "Experimental Technology",
    description:
      "We validate bold ideas quickly and ship what proves meaningful.",
    icon: "R&D",
  },
];

export default function WhatWeDo() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-6 py-8 sm:px-10 sm:py-12">
      <Reveal>
        <div className="mb-9">
          <p className="kicker text-sm font-semibold uppercase tracking-[0.14em]">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">
            Capabilities for modern digital product creation.
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {capabilities.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <motion.article
              whileHover={{ y: -4 }}
              className="surface-glow section-shell rounded-2xl p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-200">
                {item.icon}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-100">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                {item.description}
              </p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
