"use client";

// Inspired by ui.aceternity.com/components/bento-grid
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import type { ReactNode } from "react";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[14rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  className,
  title,
  description,
  icon,
  header,
  span,
}: {
  className?: string;
  title: string;
  description: string;
  icon?: ReactNode;
  header?: ReactNode;
  span?: "sm" | "md" | "lg" | "tall";
}) {
  const spanClass =
    span === "lg"
      ? "md:col-span-2"
      : span === "tall"
        ? "md:row-span-2"
        : span === "md"
          ? "md:col-span-2 md:row-span-1"
          : "";

  const hasHeader = Boolean(header);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group/bento relative row-span-1 flex flex-col gap-3 overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-amber-400/50 hover:shadow-[0_0_30px_-8px_rgb(245_158_11/0.4)]",
        spanClass,
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/bento:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(251,191,36,0.10), transparent 60%)",
        }}
      />
      {header}
      <div
        className={cn(
          "relative flex flex-col gap-1.5",
          hasHeader ? "justify-end mt-auto" : "justify-start",
        )}
      >
        {icon && (
          <div className="mb-1 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-amber-400/30 bg-amber-400/10 text-amber-500 transition-colors group-hover/bento:border-amber-400 group-hover/bento:bg-amber-400/20 dark:text-amber-400">
            {icon}
          </div>
        )}
        <h3 className="font-semibold text-base text-card-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
