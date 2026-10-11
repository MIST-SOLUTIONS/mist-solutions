"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Studio", href: "#studio" },
  { name: "Contact", href: "#contact" },
];

const antwerpTime = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Brussels",
});

function AntwerpClock() {
  // Placeholder on the server; the real time is filled in after mount to avoid a hydration mismatch
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(antwerpTime.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return <time>{time ?? "--:--"}</time>;
}

export default function Header() {
  return (
    <header className="border-b border-ink">
      <div className="label mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2 sm:px-6 lg:px-10">
        <a className="nav-link font-medium" href="#top">
          Mist Solutions®
        </a>
        <span className="text-muted">
          Antwerp <AntwerpClock />
        </span>
        <nav aria-label="Primary" className="flex flex-wrap gap-x-7">
          {navLinks.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
