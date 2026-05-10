"use client";

// Inspired by ui.aceternity.com/components/sparkles — CSS-only, lightweight
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function Sparkles({
  count = 40,
  className,
  color = "#fbbf24",
}: {
  count?: number;
  className?: string;
  color?: string;
}) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const items: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 4,
    }));
    setParticles(items);
  }, [count]);

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full overflow-hidden",
        className,
      )}
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: color,
            borderRadius: "9999px",
            boxShadow: `0 0 ${p.size * 4}px ${color}`,
          }}
        />
      ))}
    </div>
  );
}
