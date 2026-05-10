"use client";

// Inspired by ui.aceternity.com/components/aurora-background — adapted for gold palette
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function AuroraBackground({
  children,
  className,
  showRadialGradient = true,
}: {
  children?: ReactNode;
  className?: string;
  showRadialGradient?: boolean;
}) {
  return (
    <div className={cn("relative isolate overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={cn(
            "absolute -inset-[10px] opacity-50 blur-[60px] will-change-transform",
            "[--white-gradient:repeating-linear-gradient(100deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.06)_7%,transparent_10%,transparent_12%,rgba(255,255,255,0.06)_16%)]",
            "[--dark-gradient:repeating-linear-gradient(100deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.18)_7%,transparent_10%,transparent_12%,rgba(0,0,0,0.18)_16%)]",
            "[--aurora:repeating-linear-gradient(100deg,#fbbf24_10%,#facc15_15%,#fcd34d_20%,#f59e0b_25%,#fde68a_30%)]",
            "[background-image:var(--white-gradient),var(--aurora)] dark:[background-image:var(--dark-gradient),var(--aurora)]",
            "[background-size:300%,200%] [background-position:50%_50%,50%_50%]",
            "after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] dark:after:[background-image:var(--dark-gradient),var(--aurora)]",
            "after:[background-size:200%,100%] after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference after:content-['']",
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]",
          )}
        />
      </div>
      {children}
    </div>
  );
}
