"use client";

// Inspired by ui.aceternity.com/components/text-generate-effect
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function TextGenerateEffect({
  words,
  className,
  highlight = [],
  duration = 0.5,
  stagger = 0.08,
}: {
  words: string;
  className?: string;
  highlight?: string[];
  duration?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const tokens = words.split(" ");

  return (
    <h1 className={cn("font-semibold tracking-tight", className)}>
      {tokens.map((word, idx) => {
        const isHighlight = highlight.some((h) =>
          word.toLowerCase().includes(h.toLowerCase()),
        );
        return (
          <motion.span
            key={`${word}-${idx}`}
            initial={reduce ? { opacity: 1 } : { opacity: 0, filter: "blur(8px)", y: 8 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration,
              delay: reduce ? 0 : idx * stagger,
              ease: "easeOut",
            }}
            className={cn(
              "inline-block",
              isHighlight && "gradient-text-gold",
            )}
          >
            {word}
            {idx < tokens.length - 1 && " "}
          </motion.span>
        );
      })}
    </h1>
  );
}
