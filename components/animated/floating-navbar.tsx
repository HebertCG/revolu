"use client";

// Inspired by ui.aceternity.com/components/floating-navbar
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { ShimmerButton } from "@/components/animated/shimmer-button";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

export function FloatingNavbar({ items }: { items: NavItem[] }) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [floating, setFloating] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const direction = current - previous;
    setFloating(current > 80);
    if (current < 80) {
      setVisible(true);
    } else if (direction < 0) {
      setVisible(true);
    } else if (direction > 0) {
      setVisible(false);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.header
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className={cn(
          "fixed inset-x-0 top-4 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2 backdrop-blur-md transition-all",
          floating
            ? "border-border bg-background/70 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)]"
            : "border-transparent bg-background/40",
        )}
      >
        <a
          href="#hero"
          className="flex items-center gap-2 px-2"
          aria-label="REVOLU — Inicio"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-amber-300 to-amber-600 text-amber-950 font-bold shadow-[0_0_18px_-4px_rgb(245_158_11/0.6)]">
            R
          </span>
          <span className="font-semibold tracking-tight gradient-text-gold">
            REVOLU
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-amber-400/10 hover:text-amber-500 dark:hover:text-amber-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#login"
            className="hidden rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            Iniciar sesión
          </a>
          <ShimmerButton className="hidden h-9 px-4 text-xs sm:inline-flex">
            Pedir demo <ArrowRight className="h-3.5 w-3.5" />
          </ShimmerButton>
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute inset-x-2 top-[calc(100%+8px)] rounded-2xl border border-border bg-background/95 p-3 backdrop-blur-xl md:hidden"
            >
              <nav className="flex flex-col gap-1">
                {items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-amber-400/10 hover:text-amber-500"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-2 flex flex-col gap-2 border-t border-border pt-2">
                  <a
                    href="#login"
                    className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    Iniciar sesión
                  </a>
                  <ShimmerButton className="h-10 w-full justify-center text-sm">
                    Pedir demo
                  </ShimmerButton>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}
