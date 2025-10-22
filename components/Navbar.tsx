"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={() => window.scrollTo(0, 0)}
      aria-current={isActive ? "page" : undefined}
      className={[
        "hover:text-sky-400",
        isActive ? "text-sky-400 font-medium" : "text-slate-300",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/80 border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 h-14 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Tarun Bevara
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
          <NavLink href="/education" label="Education" />
          <NavLink href="/skills" label="Skills" />
          <NavLink href="/experience" label="Work Experience" />
          <NavLink href="/projects" label="Projects" />
          <NavLink href="/publications" label="Research" />
          <NavLink href="/certifications" label="Articles" />
          <NavLink href="/resume" label="Résumé" />
          <a
            href="https://github.com/TarunBevara10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tarunbevara10/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400"
          >
            LinkedIn
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md border border-slate-700 px-3 py-1 text-sm text-slate-300 hover:bg-slate-800"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden border-t border-slate-800 bg-slate-900/95">
          <nav className="flex flex-col gap-3 px-4 py-3 text-sm text-slate-300">
            <NavLink href="/education" label="Education" />
            <NavLink href="/skills" label="Skills" />
            <NavLink href="/experience" label="Work Experience" />
            <NavLink href="/projects" label="Projects" />
            <NavLink href="/publications" label="Publications" />
            <NavLink href="/certifications" label="Certifications" />
            <NavLink href="/resume" label="Résumé" />
            <a
              href="https://github.com/TarunBevara10"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tarunbevara10/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
