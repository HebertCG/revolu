"use client";

// Inspired by ui.aceternity.com/components/infinite-moving-cards
import { cn } from "@/lib/utils";

export interface MovingCard {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export function InfiniteMovingCards({
  items,
  speed = "slow",
  direction = "left",
  className,
}: {
  items: MovingCard[];
  speed?: "fast" | "normal" | "slow";
  direction?: "left" | "right";
  className?: string;
}) {
  const duration =
    speed === "fast" ? "20s" : speed === "normal" ? "40s" : "70s";
  const animationDirection = direction === "right" ? "reverse" : "normal";

  return (
    <div
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className,
      )}
    >
      <ul
        className="flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4"
        style={{
          animation: `scroll-x ${duration} linear infinite`,
          animationDirection,
        }}
      >
        {[...items, ...items].map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            className="relative w-[340px] max-w-full shrink-0 rounded-2xl border border-border bg-card px-6 py-5 md:w-[420px]"
          >
            <blockquote className="relative">
              <div
                aria-hidden
                className="user-select-none pointer-events-none absolute -inset-x-0.5 -top-0.5 h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent"
              />
              <span className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{item.quote}&rdquo;
              </span>
              <div className="mt-5 flex flex-row items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-xs font-semibold text-amber-950">
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}
