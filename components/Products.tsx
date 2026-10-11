import Reveal from "@/components/ui/Reveal";

const facts = [
  { label: "Positioning", value: "Friendlier candidate experience" },
  { label: "Focus", value: "Better recruiter signal" },
  { label: "Craft", value: "Clear UX, practical AI" },
];

const numCol = "flex-[0_0_56px]";
const nameCol = "flex-[2_1_260px] text-[clamp(28px,3.4vw,48px)] font-bold tracking-[-0.03em]";
const briefCol = "flex-[3_1_320px] text-[17px] leading-normal";
const statusCol = "flex-[0_0_160px]";

export default function Products() {
  return (
    <section id="work" className="mx-auto max-w-[1360px] px-4 pt-20 sm:px-6 sm:pt-28 lg:px-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <h2 className="text-[clamp(44px,6vw,96px)] font-extrabold leading-[0.92] tracking-[-0.045em]">
            Index of work
          </h2>
        </Reveal>
        <p className="label text-muted">(02) Selected work</p>
      </div>

      <div
        aria-hidden="true"
        className="label mt-12 hidden gap-x-6 px-2 pb-3 text-[12px] text-muted md:flex"
      >
        <span className={numCol}>No.</span>
        <span className="flex-[2_1_260px]">Project</span>
        <span className="flex-[3_1_320px]">Brief</span>
        <span className={statusCol}>Status</span>
      </div>

      <a className="index-row mt-10 md:mt-0" href="https://assess4me.com" target="_blank" rel="noreferrer">
        <span className={`${numCol} font-mono text-sm`}>001</span>
        <span className={nameCol}>
          Assess4Me <span aria-hidden="true">↗</span>
        </span>
        <span className={briefCol}>Gamified recruitment assessments powered by AI.</span>
        <span className={statusCol}>
          <span className="chip">● Live</span>
        </span>
      </a>

      <a className="index-row border-b border-ink" href="#contact">
        <span className={`${numCol} font-mono text-sm`}>002</span>
        <span className={`${nameCol} opacity-55`}>Your product?</span>
        <span className={briefCol}>Have an idea with real product ambition? Let’s talk.</span>
        <span className={statusCol}>
          <span className="chip border-dashed">Open</span>
        </span>
      </a>

      <Reveal className="mt-16 sm:mt-28">
        <article className="grid gap-12 bg-signal p-7 text-white sm:p-12 lg:grid-cols-2 lg:p-18">
          <div>
            <p className="label text-signal-soft">Featured — 001</p>
            <h3 className="mt-5 text-[clamp(56px,8vw,128px)] font-extrabold leading-[0.85] tracking-[-0.06em]">
              Assess
              <br />
              4Me
            </h3>
          </div>
          <div className="flex flex-col justify-between gap-8">
            <p className="text-[clamp(20px,2vw,26px)] font-medium leading-[1.35]">
              Candidates complete short cognitive and behavioural games.
              Recruiters get sharper signal — without turning hiring into
              guesswork.
            </p>
            <dl className="grid grid-cols-1 gap-4 border-t border-white/40 pt-5 sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="label text-[11px] text-signal-soft">{fact.label}</dt>
                  <dd className="mt-2 text-[15px] leading-snug">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <a
              className="btn btn-white self-start"
              href="https://assess4me.com"
              target="_blank"
              rel="noreferrer"
            >
              Visit assess4me.com <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
