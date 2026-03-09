export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-28 sm:py-36 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          We build focused digital products that solve real problems
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
          MIST Solutions is a Belgian product studio creating scalable ventures
          in HR tech, AI, and automation. We build fewer products, but we build
          them exceptionally well.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#products"
            className="rounded-xl bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-md hover:shadow-xl hover:bg-slate-800 transition-all duration-300"
          >
            Explore Our Products
          </a>
          <a
            href="#contact"
            className="rounded-xl bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
