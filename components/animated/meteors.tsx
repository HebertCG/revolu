"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorPos {
  left: string;
  delay: string;
  duration: string;
}

export function Meteors({ number = 20, className }: { number?: number; className?: string }) {
  const [meteors, setMeteors] = useState<MeteorPos[]>([]);

  useEffect(() => {
    const items = Array.from({ length: number }, () => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 0.6 + 0.2}s`,
      duration: `${Math.random() * 8 + 2}s`,
    }));
    setMeteors(items);
  }, [number]);

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {meteors.map((m, idx) => (
        <span
          key={idx}
          className="absolute left-1/2 top-0 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-full bg-indigo-400 shadow-[0_0_0_1px_#ffffff10] before:absolute before:top-1/2 before:h-px before:w-[50px] before:-translate-y-1/2 before:transform before:bg-gradient-to-r before:from-indigo-400 before:to-transparent before:content-['']"
          style={{
            top: 0,
            left: m.left,
            animationDelay: m.delay,
            animationDuration: m.duration,
          }}
        />
      ))}
    </div>
  );
}
