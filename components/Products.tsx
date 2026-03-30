"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const comingSoonCards = [
  {
    title: "Workflow Intelligence",
    description:
      "AI-assisted tools that remove repetitive decisions from daily operations.",
  },
  {
    title: "Vertical SaaS Concepts",
    description:
      "Tighter software for narrow but meaningful business problems.",
  },
  {
    title: "Interface Experiments",
    description:
      "New interaction models for products that need clarity more than novelty.",
  },
];

export default function Products() {
  return (
    <section
      id="projects"
      className="mx-auto mt-4 max-w-7xl px-6 py-14 sm:px-10 sm:py-16 lg:px-12"
    >
      <Reveal>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="kicker text-sm font-semibold uppercase">
              Our Projects
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">
              One launched product, several deliberate bets in motion.
            </h2>
          </div>
          <p className="meta-copy max-w-xl text-base leading-7 sm:text-right">
            We prefer a small portfolio of sharp products over broad, unfocused
            output.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.95fr)] lg:items-start">
        <Reveal>
          <motion.article
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="section-shell relative overflow-hidden rounded-[2rem] p-6 sm:p-7 lg:p-8"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#f0b79e]/30 blur-3xl" />
            <span className="inline-flex rounded-full border border-[#1f5c57]/20 bg-[#1f5c57]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.13em] text-[#1f5c57]">
              Live Project
            </span>
            <h3 className="mt-5 text-3xl sm:text-[2.2rem]">Assess4Me</h3>
            <p className="mt-3 text-base text-[#33444b] sm:text-lg">
              Gamified recruitment assessments powered by AI.
            </p>
            <p className="meta-copy mt-4 max-w-2xl leading-7">
              A platform where candidates complete cognitive and behavioral
              games to help recruiters gain additional insights during hiring.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[rgba(24,33,38,0.08)] bg-white/65 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[#6b7772]">
                  Positioning
                </p>
                <p className="mt-3 text-sm leading-6 text-[#26333a]">
                  AI-enabled assessment with a friendlier candidate experience.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-[rgba(24,33,38,0.08)] bg-white/65 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[#6b7772]">
                  Focus
                </p>
                <p className="mt-3 text-sm leading-6 text-[#26333a]">
                  Better signal for recruiters without turning hiring into
                  guesswork.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-[rgba(24,33,38,0.08)] bg-white/65 px-4 py-4 sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.18em] text-[#6b7772]">
                  Craft
                </p>
                <p className="mt-3 text-sm leading-6 text-[#26333a]">
                  Clear UX, practical AI, and modern frontend execution.
                </p>
              </div>
            </div>

            <a
              href="https://assess4me.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#aa4e31] transition hover:text-[#8f4028]"
            >
              Visit Assess4Me
              <span aria-hidden="true">↗</span>
            </a>
          </motion.article>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
          {comingSoonCards.map((item, index) => (
            <Reveal key={item.title} delay={0.08 * (index + 1)}>
              <motion.article
                whileHover={{ y: -4, scale: 1.01 }}
                className="section-shell relative overflow-hidden rounded-[1.75rem] p-6"
              >
                <div className="absolute -right-7 -top-7 h-20 w-20 rounded-full bg-[#9bc5be]/35 blur-2xl" />
                <span className="rounded-full border border-[rgba(24,33,38,0.12)] bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.13em] text-[#56625e]">
                  In Development
                </span>
                <h3 className="mt-5 text-2xl">{item.title}</h3>
                <p className="meta-copy mt-3 leading-7">{item.description}</p>
              </motion.article>
            </Reveal>
          ))}

          <Reveal delay={0.32} className="sm:col-span-2">
            <div className="rounded-[1.75rem] border border-dashed border-[rgba(24,33,38,0.18)] px-6 py-8 text-center text-[#435159]">
              We are building slowly on purpose. Better products come from
              pressure-tested conviction, not volume.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
