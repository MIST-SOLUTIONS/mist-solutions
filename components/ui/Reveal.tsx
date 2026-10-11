"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Wipes content in from the top edge when it scrolls into view. */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  // The outer element is the one observed: a fully clipped element counts as
  // not intersecting, so the clip-path has to live on the inner element.
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        variants={{
          hidden: { clipPath: "inset(0 0 100% 0)", y: 24 },
          visible: { clipPath: "inset(0 0 0% 0)", y: 0 },
        }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.9, delay, ease }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/** A 1px ink rule that draws from left to right when it scrolls into view. */
export function Rule({ delay = 0 }: { delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="h-px origin-left bg-ink"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 1 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 1.1, delay, ease }}
    />
  );
}
