import Reveal, { Rule } from "@/components/ui/Reveal";

const principles = [
  "Start with the real user tension, not the feature list.",
  "Treat design and engineering as one product discipline.",
  "Move quickly, but keep the system clean enough to scale.",
];

export default function About() {
  return (
    <section id="studio" className="mx-auto max-w-[1360px] px-4 pt-20 sm:px-6 sm:pt-28 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-3">
        <p className="label text-muted">(03) Studio thesis</p>
        <Reveal className="lg:col-span-2">
          <p className="text-[clamp(30px,3.6vw,54px)] font-bold leading-[1.04] tracking-[-0.035em]">
            Not trying to ship everything. Trying to ship{" "}
            <em className="text-signal">the right thing</em>, with enough craft
            that it earns repeated use.
          </p>
        </Reveal>
      </div>

      <ol className="mt-20 grid gap-x-8 md:grid-cols-3">
        {principles.map((item, index) => (
          <li key={item}>
            <Rule delay={index * 0.12} />
            <p className="mt-5 text-[88px] font-extrabold leading-none tracking-[-0.06em]" aria-hidden="true">
              0{index + 1}
            </p>
            <p className="mb-10 mt-4 text-[19px] leading-[1.45]">{item}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
