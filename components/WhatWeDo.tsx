import Reveal from "@/components/ui/Reveal";

const capabilities = [
  {
    mark: "A",
    title: "AI-powered products",
    description: "Practical AI inside real product experiences — not feature demos.",
  },
  {
    mark: "B",
    title: "Web platforms",
    description: "Fast, scalable platforms built to modern engineering standards.",
  },
  {
    mark: "C",
    title: "Product design",
    description: "Clear product thinking, from concept to a polished experience.",
  },
  {
    mark: "D",
    title: "Experimental tech",
    description: "Validate bold ideas quickly; ship what proves meaningful.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="mx-auto max-w-[1360px] px-4 pt-16 sm:px-6 sm:pt-28 lg:px-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <h2 className="text-[clamp(44px,6vw,96px)] font-extrabold leading-[0.92] tracking-[-0.045em]">
            Capabilities
          </h2>
        </Reveal>
        <p className="label text-muted">(04) Framing → launch</p>
      </div>

      <div className="mt-10 grid border-l border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((item) => (
          <article
            key={item.title}
            className="flex min-h-[220px] flex-col justify-between gap-6 border-b border-r border-ink p-8"
          >
            <span className="font-mono text-[13px] text-signal" aria-hidden="true">
              {item.mark}
            </span>
            <div>
              <h3 className="text-[28px] font-bold tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-2.5 leading-relaxed text-body">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
