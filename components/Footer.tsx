export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Assess4Me", href: "https://assess4me.com" },
  ];

  return (
    <footer className="mx-auto mt-8 max-w-7xl px-6 pb-10 sm:px-10 lg:px-12">
      <div className="rounded-[2rem] border border-[rgba(24,33,38,0.1)] bg-white/45 px-7 py-8 shadow-[0_18px_40px_rgba(69,48,34,0.08)] sm:px-10 sm:py-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <h3 className="text-2xl">Mist Solutions</h3>
            <p className="meta-copy mt-2 text-sm">Antwerp, Belgium</p>
          </div>
          <nav className="flex flex-wrap gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-sm text-[#3e4d54] transition-colors hover:text-[#1a252b]"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t line-divider pt-6 text-sm text-[#66716d]">
          <p>© {currentYear} Mist Solutions. Building products with intent.</p>
        </div>
      </div>
    </footer>
  );
}
