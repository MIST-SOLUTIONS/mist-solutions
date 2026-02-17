export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
          Building the future of digital business
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
          MIST Solutions develops and scales innovative digital products across
          HR tech, AI, and business automation.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#products"
            className="rounded-xl bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-slate-800 transition-colors"
          >
            Explore Our Products
          </a>
          <a
            href="#contact"
            className="rounded-xl bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-md ring-1 ring-slate-200 hover:bg-slate-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
