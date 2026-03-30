"use client";

import Reveal from "@/components/ui/Reveal";

const focusAreas = [
  "AI systems",
  "Founder tools",
  "Workflow products",
  "Modern web experiences",
];

const principles = [
  "Start with the real user tension, not the feature list.",
  "Treat design and engineering as one product discipline.",
  "Move quickly, but keep the system clean enough to scale.",
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto mt-8 max-w-7xl rounded-3xl px-6 py-10 sm:px-10 sm:py-14 lg:px-12"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
        <Reveal className="section-shell rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <p className="kicker text-sm font-semibold uppercase">
            Studio thesis
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl sm:text-5xl">
            A small product studio building focused technology with a clear
            point of view.
          </h2>
          <p className="meta-copy mt-6 max-w-3xl text-lg leading-8">
            Mist Solutions exists to build software that feels precise, useful,
            and durable. We are not trying to ship everything. We are trying to
            ship the right thing with enough craft that it earns repeated use.
          </p>
          <p className="meta-copy mt-5 max-w-3xl text-lg leading-8">
            Assess4Me is our first launched product, and it sets the tone: clear
            product framing, strong interface decisions, and AI used where it
            creates leverage.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="label-pill rounded-full px-4 py-2 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6">
          <Reveal
            delay={0.08}
            className="section-shell rounded-[2rem] p-8 sm:p-10"
          >
            <p className="kicker text-sm font-semibold uppercase">
              How we work
            </p>
            <div className="mt-6 space-y-6">
              {principles.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 border-t line-divider pt-5 first:border-t-0 first:pt-0"
                >
                  <span className="number-mark text-[2.4rem]">
                    0{index + 1}
                  </span>
                  <p className="text-base leading-7 text-[#2e3a40] sm:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={0.14}
            className="rounded-[2rem] border border-[rgba(24,33,38,0.1)] bg-[#1f5c57] px-8 py-8 text-[#f8f1e8] soft-shadow sm:px-10 sm:py-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7e7e3]">
              Why now
            </p>
            <p className="mt-4 text-2xl leading-9 sm:text-3xl">
              The tools for building ambitious software are faster than ever.
              The real advantage is taste and focus.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
