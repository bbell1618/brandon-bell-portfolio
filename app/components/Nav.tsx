"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white border-b"
      style={{ borderColor: "#DDE3ED" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Monogram */}
        <a
          href="#"
          className="text-[#0D2466] font-bold text-xl tracking-tight select-none"
          style={{ letterSpacing: "0.04em" }}
        >
          BB
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#4A5568] hover:text-[#0D2466] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#0D2466] border border-[#0D2466] px-4 py-1.5 hover:bg-[#0D2466] hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 p-1"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-0.5 bg-[#1A1A2E] transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 bg-[#1A1A2E] transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 bg-[#1A1A2E] transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t" style={{ borderColor: "#DDE3ED" }}>
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#4A5568] hover:text-[#0D2466] transition-colors duration-200 py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#0D2466] border border-[#0D2466] px-4 py-2 text-center hover:bg-[#0D2466] hover:text-white transition-colors duration-200 w-fit"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
