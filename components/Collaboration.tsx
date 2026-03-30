"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

export default function Collaboration() {
  return (
    <section
      id="contact"
      className="mx-auto mt-8 max-w-7xl px-6 pb-10 pt-6 sm:px-10 sm:pb-14 lg:px-12"
    >
      <Reveal className="relative overflow-hidden rounded-[2rem] border border-[rgba(24,33,38,0.12)] bg-[#d96f4a] px-8 py-10 text-[#fff7f0] soft-shadow sm:px-12 sm:py-12">
        <div className="absolute -right-10 top-0 h-48 w-48 rounded-full bg-white/12 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#1f5c57]/22 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_320px] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#fff0e5]">
              Collaboration
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
              If you are building something with real product ambition, let’s
              talk.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#fff1e6]">
              New ideas, product collaborations, early-stage concepts, or teams
              that need sharper product execution all fit. The fastest way to
              get started is a direct email.
            </p>

            <motion.a
              href="mailto:michiel@assess4me.com"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex rounded-full bg-[#182126] px-6 py-3 text-sm font-semibold text-[#fff8f2] shadow-[0_18px_36px_rgba(24,33,38,0.22)] transition"
            >
              michiel@assess4me.com
            </motion.a>
          </div>

          <div className="rounded-[1.75rem] border border-white/16 bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-[#ffe7d8]">
              Best fit
            </p>
            <ul className="mt-4 space-y-3 text-base leading-7 text-[#fff4ec]">
              <li>Early product strategy with technical realism</li>
              <li>
                AI features that need a usable interface, not a demo wrapper
              </li>
              <li>
                Teams that value strong product taste and disciplined execution
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
