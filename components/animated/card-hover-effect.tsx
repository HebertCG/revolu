"use client";

// Inspired by ui.aceternity.com/components/card-hover-effect
import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface HoverItem {
  title: string;
  description: string;
  icon?: ReactNode;
  badge?: string;
}

export function CardHoverEffect({
  items,
  className,
}: {
  items: HoverItem[];
  className?: string;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
        >
          <AnimatePresence>
            {hovered === idx && (
              <motion.span
                key="hover-bg"
                className="absolute inset-0 block h-full w-full rounded-2xl bg-gradient-to-br from-indigo-400/20 via-indigo-500/10 to-transparent"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.1 } }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10 h-full w-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors duration-200 group-hover:border-amber-400/50">
            {item.badge && (
              <span className="mb-3 inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-600 dark:text-amber-300">
                {item.badge}
              </span>
            )}
            {item.icon && (
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-amber-950 shadow-[0_0_20px_-4px_rgb(245_158_11/0.5)]">
                {item.icon}
              </div>
            )}
            <h3 className="mb-2 text-lg font-semibold tracking-tight text-card-foreground">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
