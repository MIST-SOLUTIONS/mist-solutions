export default function Products() {
  const products = [
    {
      title: "Assess4Me",
      description:
        "An AI-powered gamified recruitment platform that transforms how companies discover and evaluate talent. Built for modern HR teams who value data-driven insights and candidate experience.",
      link: "#",
      available: true,
    },
    {
      title: "More ventures coming soon",
      description:
        "We're constantly exploring new opportunities in AI, automation, and digital transformation. Stay tuned for our next launch.",
      link: null,
      available: false,
    },
  ];

  return (
    <section id="products" className="px-6 py-24 sm:py-32 lg:px-8 bg-slate-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Digital solutions built for real business impact
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
          {products.map((product) => (
            <div
              key={product.title}
              className={`rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md ${
                !product.available ? "opacity-75" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold text-slate-900">
                {product.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {product.description}
              </p>
              {product.link && (
                <div className="mt-6">
                  <a
                    href={product.link}
                    className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-slate-700 transition-colors"
                  >
                    Learn more
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
