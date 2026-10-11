const focusAreas = [
  "AI systems",
  "Founder tools",
  "Workflow products",
  "Modern web experiences",
];

// Drawn rather than a ✳ glyph, which Apple platforms render as a green emoji
function Asterisk() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mx-[0.35em] inline-block size-[0.6em] align-[0.1em] text-signal-tint"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
    >
      <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
    </svg>
  );
}

function Sequence() {
  return (
    <span className="pr-12">
      {focusAreas.map((item) => (
        <span key={item}>
          {item}
          <Asterisk />
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <section aria-label="Focus areas" className="mt-18">
      {/* Screen readers get the plain list; the moving copy is decorative */}
      <ul className="sr-only">
        {focusAreas.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div
        aria-hidden="true"
        className="marquee overflow-hidden border-y border-ink bg-ink py-5 text-paper"
      >
        <div className="marquee-track whitespace-nowrap text-[clamp(28px,3.4vw,48px)] font-bold tracking-[-0.02em]">
          <Sequence />
          <Sequence />
        </div>
      </div>
    </section>
  );
}
