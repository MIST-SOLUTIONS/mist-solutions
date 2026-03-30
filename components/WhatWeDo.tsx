"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const capabilities = [
  {
    title: "AI-Powered Products",
    description:
      "We integrate practical AI into real product experiences, not feature demos.",
    icon: "01",
  },
  {
    title: "Web Platforms",
    description:
      "Fast, scalable platforms built with modern engineering standards.",
    icon: "02",
  },
  {
    title: "Product Design",
    description:
      "Clear product thinking, from concept to a polished user experience.",
    icon: "03",
  },
  {
    title: "Experimental Technology",
    description:
      "We validate bold ideas quickly and ship what proves meaningful.",
    icon: "04",
  },
];

export default function WhatWeDo() {
  return (
    <section className="mx-auto mt-6 max-w-7xl px-6 py-10 sm:px-10 sm:py-14 lg:px-12">
      <Reveal>
        <div className="mb-9 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="kicker text-sm font-semibold uppercase">What We Do</p>
            <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">
              Capabilities that cover the product from framing to launch.
            </h2>
          </div>
          <p className="meta-copy max-w-xl text-base leading-7 lg:text-right">
            We work across the full product surface, but we keep the decisions
            connected so the outcome feels like one idea.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-4">
        {capabilities.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <motion.article
              whileHover={{ y: -4 }}
              className="section-shell rounded-[1.75rem] p-6"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b35a38]">
                {item.icon}
              </span>
              <h3 className="mt-6 text-2xl">{item.title}</h3>
              <p className="meta-copy mt-3 leading-7">{item.description}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.26}>
        <div className="mt-6 grid gap-4 rounded-[2rem] border border-[rgba(24,33,38,0.08)] bg-[#182126] px-7 py-8 text-[#f5eee5] sm:grid-cols-3 sm:px-8 sm:py-9">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#f0b496]">
              Frame
            </p>
            <p className="mt-3 text-lg leading-7">
              Clarify the product thesis, user problem, and smallest useful
              release.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#f0b496]">
              Design
            </p>
            <p className="mt-3 text-lg leading-7">
              Turn the product into a system of screens, states, and priorities
              that makes sense.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#f0b496]">
              Ship
            </p>
            <p className="mt-3 text-lg leading-7">
              Build with modern web tooling, practical AI, and enough structure
              to scale later.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
