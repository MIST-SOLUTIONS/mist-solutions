const bestFit = [
  "Early product strategy with technical realism",
  "AI features that need a usable interface, not a demo wrapper",
  "Teams that value product taste and disciplined execution",
];

export default function Collaboration() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[1360px] px-4 pb-16 pt-24 sm:px-6 sm:pb-28 sm:pt-44 lg:px-10"
    >
      <h2 className="label text-muted">
        (05) Building something with real product ambition? Let’s talk.
      </h2>
      <a
        className="big-mail mt-6 inline-block pb-3 text-[clamp(36px,7.4vw,120px)] font-extrabold leading-none tracking-[-0.05em] [overflow-wrap:anywhere]"
        href="mailto:michiel@assess4me.com"
      >
        michiel@
        <br />
        assess4me.com
      </a>
      <ul className="mt-14 grid gap-6 border-t border-ink pt-6 md:grid-cols-3">
        {bestFit.map((item) => (
          <li key={item} className="text-base leading-normal">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
