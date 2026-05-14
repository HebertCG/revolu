"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Diferencial", href: "#diferencia" },
  { label: "Herramientas", href: "#herramientas" },
  { label: "Proctoring", href: "#proctoring" },
  { label: "Vocacional", href: "#vocacional" },
  { label: "Demo", href: "/demo" },
];

function Logo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M6 6 L6 26 M6 16 L18 6 M6 16 L18 26 M22 6 L26 16 L22 26"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-5 transition-all duration-500 ${
          scrolled
            ? "rounded-2xl border border-[color:var(--line)] bg-white/85 shadow-[0_8px_24px_-12px_rgba(10,14,31,0.08)] backdrop-blur-md"
            : ""
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all ${
            scrolled ? "h-12" : "h-14"
          }`}
        >
          <a href="#top" className="group flex items-center gap-2.5">
            <Logo className="h-6 w-6 text-ink" />
            <span className="text-[15px] font-semibold tracking-tight text-ink">
              Klassia
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-[13px] text-ink-soft md:flex">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="transition hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#cta"
              className="btn-primary inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-[13px] font-medium"
            >
              Solicitar Demo
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="ml-1 p-1 text-ink md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="grid gap-2 border-t border-[color:var(--line)] py-3 text-[14px] text-ink-soft md:hidden">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="py-1"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
