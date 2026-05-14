"use client";

import { type ElementType, useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  id?: string;
};

export function Reveal({
  children,
  as: As = "div",
  className = "",
  delay = 0,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const t = window.setTimeout(() => el.classList.add("in"), delay);
            io.unobserve(el);
            return () => window.clearTimeout(t);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <As id={id} ref={ref} className={`reveal ${className}`}>
      {children}
    </As>
  );
}
