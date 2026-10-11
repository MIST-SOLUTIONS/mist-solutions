export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-ink">
      <div className="label mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 sm:px-6 lg:px-10">
        <span>© {currentYear} Mist Solutions</span>
        <span className="text-muted">Antwerp, Belgium · 51.22° N 4.40° E</span>
        <a className="nav-link" href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
