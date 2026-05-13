"use client";

// Inspired by ui.aceternity.com/components/tracing-beam
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TracingBeam({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    { stiffness: 500, damping: 90 },
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto w-full max-w-4xl", className)}
    >
      <div className="absolute -left-4 top-3 md:-left-20">
        <motion.div
          transition={{ duration: 0.2, delay: 0.5 }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(251,191,36,0.4) 0 0 0 4px",
          }}
          className="ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border border-indigo-400/40 bg-background shadow-sm"
        >
          <motion.div
            transition={{ duration: 0.2, delay: 0.5 }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0
                  ? "rgb(250,250,249)"
                  : "rgb(251,191,36)",
              borderColor:
                scrollYProgress.get() > 0
                  ? "rgb(250,250,249)"
                  : "rgb(217,119,6)",
            }}
            className="h-2 w-2 rounded-full border bg-indigo-400"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.16"
            transition={{ duration: 10 }}
            className="text-foreground"
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#beam-gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
          />
          <defs>
            <motion.linearGradient
              id="beam-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#fbbf24" stopOpacity="0" />
              <stop stopColor="#fbbf24" />
              <stop offset="0.325" stopColor="#f59e0b" />
              <stop offset="1" stopColor="#fde68a" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
}
