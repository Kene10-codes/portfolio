import { useState } from "react";
import { navItems, profile } from "../data/portfolio";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="focus-ring font-semibold">
          {profile.name}
        </a>

        <nav aria-label="Main" className="hidden gap-8 md:flex">
          {navItems.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className="link focus-ring">
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="focus-ring rounded-md border border-ink/30 px-3 py-1 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" aria-label="Mobile" className="flex flex-col gap-3 border-t border-ink/10 px-6 py-4 md:hidden">
          {navItems.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className="focus-ring" onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
