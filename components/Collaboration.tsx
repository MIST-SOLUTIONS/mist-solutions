"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

export default function Collaboration() {
  return (
    <section id="contact" className="mx-auto mt-8 max-w-7xl px-6 pb-10 pt-6 sm:px-10 sm:pb-14">
      <Reveal className="section-shell rounded-3xl px-8 py-12 sm:px-12 sm:py-14">
        <p className="kicker text-sm font-semibold uppercase tracking-[0.14em]">
          Collaboration
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-100 sm:text-4xl">
          Interested in collaborating?
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          We are always open to discussing new ideas, partnerships, and
          projects.
        </p>

        <motion.a
          href="mailto:hello@mist.solutions"
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary mt-8 inline-flex rounded-xl px-6 py-3 text-sm font-semibold"
        >
          Contact Us
        </motion.a>
      </Reveal>
    </section>
  );
}
