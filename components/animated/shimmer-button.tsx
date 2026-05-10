"use client";

// Inspired by magicui.design / 21st.dev shimmer button — gold variant
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  shimmerColor?: string;
  className?: string;
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "#fef3c7",
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      type="button"
      {...props}
      style={
        {
          "--shimmer": shimmerColor,
        } as React.CSSProperties
      }
      className={cn(
        "group relative inline-flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-amber-400/40 bg-gradient-to-b from-amber-400 to-amber-500 px-7 text-sm font-medium text-amber-950 shadow-[0_4px_20px_-4px_rgb(245_158_11/0.5)] transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
      >
        <span
          aria-hidden
          className="absolute -inset-x-full top-0 h-full w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-[var(--shimmer)] to-transparent opacity-70 blur-sm transition-transform duration-1000 group-hover:translate-x-[200%]"
        />
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/40"
      />
    </button>
  );
}
