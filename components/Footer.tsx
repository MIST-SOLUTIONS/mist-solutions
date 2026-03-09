export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Assess4Me", href: "https://assess4me.com" },
  ];

  return (
    <footer className="mx-auto mt-6 max-w-7xl px-6 pb-10 sm:px-10">
      <div className="section-shell rounded-3xl px-7 py-8 sm:px-10 sm:py-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div>
            <h3 className="text-xl font-semibold text-slate-100">
              Mist Solutions
            </h3>
            <p className="mt-2 text-sm text-slate-300">Antwerp, Belgium</p>
          </div>
          <nav className="flex flex-wrap gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-slate-700/50 pt-6 text-sm text-slate-400">
          <p>
            © {currentYear} Mist Solutions. Building products with intent.
          </p>
        </div>
      </div>
    </footer>
  );
}
