"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const quickNotes = [
  "Founder-led product direction",
  "AI features with operational discipline",
  "Built in Antwerp for global markets",
];

const heroStats = [
  { value: "01", label: "live product already in market" },
  { value: "03", label: "new product tracks in exploration" },
  { value: "24h", label: "to turn rough ideas into a clear plan" },
];

export default function Hero() {
  return (
    <section className="section-shell section-grid relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-8 lg:px-12 lg:pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="accent-orb drift-slow -left-10 top-16 h-48 w-48 bg-[#f3b193]" />
        <div className="accent-orb drift-delayed right-0 top-8 h-64 w-64 bg-[#9bc5be]" />
        <div className="grid-wash absolute inset-x-[6%] bottom-6 top-28 rounded-[1.75rem] opacity-35" />
      </div>

      <div className="relative z-10">
        <Reveal>
          <div className="flex flex-col gap-6 border-b line-divider pb-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold tracking-[0.18em] text-[#1b2a30] uppercase">
                Mist Solutions
              </p>
              <p className="mt-2 text-sm meta-copy">
                Antwerp product studio for ambitious software ideas.
              </p>
            </div>

            <nav className="flex flex-wrap items-center gap-3 text-sm text-[#324249] sm:justify-end">
              <a
                className="label-pill rounded-full px-4 py-2 transition hover:bg-white/95"
                href="#about"
              >
                Studio
              </a>
              <a
                className="label-pill rounded-full px-4 py-2 transition hover:bg-white/95"
                href="#projects"
              >
                Products
              </a>
              <a
                className="label-pill rounded-full px-4 py-2 transition hover:bg-white/95"
                href="#contact"
              >
                Contact
              </a>
            </nav>
          </div>
        </Reveal>

        <div className="relative mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.9fr)] lg:items-end">
          <div>
            <Reveal delay={0.06}>
              <div className="flex items-center gap-4">
                <p className="kicker text-xs font-semibold uppercase">
                  New design direction
                </p>
                <span className="eyebrow-rule" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 max-w-4xl text-[3.2rem] leading-[0.96] sm:text-[4.6rem] lg:text-[6rem]">
                We shape sharp software ideas into products people actually use.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="meta-copy mt-6 max-w-2xl text-lg leading-8 sm:text-xl">
                Mist Solutions combines product strategy, modern engineering,
                and practical AI to launch focused digital products with taste,
                speed, and enough rigor to survive contact with the real world.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap gap-3">
                {quickNotes.map((item) => (
                  <span
                    key={item}
                    className="label-pill rounded-full px-4 py-2 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary rounded-full px-7 py-3.5 text-sm font-semibold transition"
                >
                  Explore our work
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary rounded-full px-7 py-3.5 text-sm font-semibold transition"
                >
                  Start a conversation
                </motion.a>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-[rgba(24,33,38,0.1)] bg-white/60 px-5 py-5 soft-shadow"
                  >
                    <p className="text-sm uppercase tracking-[0.2em] text-[#6a746f]">
                      {item.value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#2f3d43]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="h-full">
            <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(24,33,38,0.12)] bg-[#1b2428] p-6 text-[#f6efe6] soft-shadow sm:p-8">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />
              <div className="relative max-w-xl">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ffd0b8]">
                    Studio snapshot
                  </p>
                  <h2
                    className="mt-5 text-3xl sm:text-4xl"
                    style={{ color: "#fffaf4" }}
                  >
                    Product thinking first. Technology in service of clarity.
                  </h2>
                </div>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-[#c8d2ce]">
                  Right now
                </p>
                <p className="mt-4 text-base leading-7 text-[#e8e0d6]">
                  Shipping Assess4Me while developing the next set of focused
                  experiments across AI workflows, product tooling, and modern
                  web platforms.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-[#f5ebdf] px-5 py-5 text-[#1b2428]">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#6e5141]">
                    Approach
                  </p>
                  <p className="mt-3 text-lg leading-7">
                    Small teams, fast loops, and opinionated decisions.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 px-5 py-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#c8d2ce]">
                    Focus
                  </p>
                  <p className="mt-3 text-lg leading-7 text-[#f3ebe1]">
                    Solve one meaningful problem before scaling the surface
                    area.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
