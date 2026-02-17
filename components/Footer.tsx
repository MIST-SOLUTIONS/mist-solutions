export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-900 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">MIST Solutions BV</h3>
            <p className="mt-2 text-sm text-slate-400">Based in Belgium</p>
            <p className="mt-1 text-sm text-slate-400">VAT: BE XXXX.XXX.XXX</p>
          </div>
          <nav className="flex gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © {currentYear} MIST Solutions BV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
