const letters = ["M", "i", "s", "t", "."];

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-[1360px] px-4 pt-6 sm:px-6 lg:px-10"
    >
      <h1 className="text-[clamp(120px,27vw,400px)] font-extrabold leading-[0.8] tracking-[-0.065em]">
        <span className="sr-only">Mist Solutions</span>
        {letters.map((letter, index) => (
          <span key={index} className="rise-mask" aria-hidden="true">
            <span
              className={`rise ${letter === "." ? "text-signal" : ""}`}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              {letter}
            </span>
          </span>
        ))}
      </h1>

      <div className="fade-in mt-10 grid gap-8 border-t border-ink pt-6 md:grid-cols-2 lg:grid-cols-4">
        <p className="label text-muted">
          (01) Product studio
          <br />
          Est. Antwerp, BE
        </p>
        <p className="text-[clamp(26px,2.6vw,38px)] font-semibold leading-[1.12] tracking-[-0.02em] lg:col-span-2">
          We shape sharp software ideas into products people actually use.
        </p>
        <div className="flex flex-col gap-5 md:col-start-2 lg:col-start-auto">
          <p className="text-base leading-relaxed text-body">
            Product strategy, modern engineering and practical AI — with taste,
            speed and enough rigor to survive the real world.
          </p>
          <div className="flex flex-wrap gap-2">
            <a className="btn btn-ink" href="#work">
              View work
            </a>
            <a className="btn btn-line" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
