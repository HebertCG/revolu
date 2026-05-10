"use client";

// Inspired by ui.aceternity.com/components/background-beams — gold variant
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const paths = [
  "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
  "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
  "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
  "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
  "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
  "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
  "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
];

export function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]",
        className,
      )}
    >
      <svg
        className="absolute z-0 h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke={`url(#beam-gradient-${i})`}
            strokeOpacity="0.4"
            strokeWidth="0.8"
          />
        ))}
        {paths.map((d, i) => (
          <motion.path
            key={`anim-${i}`}
            d={d}
            stroke={`url(#beam-gradient-${i})`}
            strokeWidth="1.4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{
              duration: 5 + Math.random() * 3,
              ease: "easeInOut",
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
        <defs>
          {paths.map((_, i) => (
            <linearGradient
              key={`g-${i}`}
              id={`beam-gradient-${i}`}
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
            >
              <stop stopColor="#fbbf24" stopOpacity="0" />
              <stop offset="0.4" stopColor="#fbbf24" />
              <stop offset="0.6" stopColor="#fde68a" />
              <stop offset="1" stopColor="#f59e0b" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
}
