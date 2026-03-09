export default function Products() {
  const products = [
    {
      title: "Assess4Me",
      description:
        "An AI-powered gamified recruitment platform transforming how companies discover and evaluate talent.",
      tags: ["AI", "Gamified Assessment", "HR Tech"],
      status: "Live Product",
      link: "#",
    },
    {
      title: "New ventures in development",
      description:
        "We are actively exploring new opportunities in AI, automation, and vertical SaaS.",
      tags: ["AI", "Automation"],
      status: "In Development",
      link: null,
    },
  ];

  return (
    <section id="products" className="px-6 py-28 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">Our Products</h2>
          <p className="mt-4 text-lg text-slate-600">
            Digital solutions built for measurable impact
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.title}
              className="rounded-2xl bg-slate-50 p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                {product.status}
              </span>

              <h3 className="mt-6 text-2xl font-semibold">{product.title}</h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                {product.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white px-2 py-1 rounded-md ring-1 ring-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {product.link && (
                <a
                  href={product.link}
                  className="mt-8 inline-flex items-center text-sm font-semibold hover:opacity-70 transition"
                >
                  Learn more →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
