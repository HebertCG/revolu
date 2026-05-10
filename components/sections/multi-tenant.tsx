"use client";

import { Container, SectionHeading } from "@/components/ui/container";
import { motion } from "motion/react";
import { Lock, Server } from "lucide-react";
import { useState } from "react";

const tenants = [
  { name: "Andinos Piura", short: "AND", color: "from-amber-300 to-amber-500", students: 247 },
  { name: "Saber Piura", short: "SAB", color: "from-yellow-300 to-amber-400", students: 412 },
  { name: "Newton Sullana", short: "NEW", color: "from-amber-400 to-yellow-500", students: 320 },
  { name: "Pamer Chiclayo", short: "PAM", color: "from-yellow-400 to-orange-400", students: 1024 },
  { name: "Galois Trujillo", short: "GAL", color: "from-amber-200 to-amber-500", students: 198 },
];

export function MultiTenant() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Multi-tenant aislado"
          title="Tus datos. Aislados. Siempre."
          description="Cada academia vive en su propio espacio aislado por PostgreSQL Row-Level Security. Una academia jamás puede ver datos de otra, ni accidentalmente."
        />

        <div className="relative mt-14 grid items-center gap-10 lg:grid-cols-2">
          {/* Diagram */}
          <div className="relative mx-auto h-[420px] w-full max-w-md">
            {/* Center server */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid h-24 w-24 place-items-center rounded-2xl border border-amber-400/40 bg-card shadow-[0_0_60px_-12px_rgb(245_158_11/0.5)]"
              >
                <Server className="h-8 w-8 text-amber-500" />
                <span className="mt-1 text-[10px] font-medium text-muted-foreground">
                  PG · RLS
                </span>
              </motion.div>
            </div>

            {/* Tenant nodes */}
            {tenants.map((t, idx) => {
              const angle = (idx / tenants.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 160;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-default"
                  style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                >
                  <div
                    className={`grid h-14 w-14 place-items-center rounded-xl border bg-gradient-to-br ${t.color} text-amber-950 shadow-md transition-transform ${
                      hovered === idx ? "scale-110 ring-2 ring-amber-400" : ""
                    }`}
                  >
                    <span className="text-[10px] font-bold">{t.short}</span>
                  </div>
                </motion.div>
              );
            })}

            {/* Connection lines */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="-200 -200 400 400"
              aria-hidden
            >
              {tenants.map((_, idx) => {
                const angle = (idx / tenants.length) * 2 * Math.PI - Math.PI / 2;
                const x = Math.cos(angle) * 160;
                const y = Math.sin(angle) * 160;
                return (
                  <motion.line
                    key={idx}
                    x1="0"
                    y1="0"
                    x2={x}
                    y2={y}
                    stroke={hovered === idx ? "#fbbf24" : "#fbbf24"}
                    strokeOpacity={hovered === idx ? 0.8 : 0.2}
                    strokeWidth={hovered === idx ? "2" : "1"}
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + idx * 0.05 }}
                  />
                );
              })}
            </svg>
          </div>

          {/* Right side info */}
          <div>
            <div className="space-y-3">
              {tenants.map((t, idx) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  className={`flex items-center gap-3 rounded-xl border p-3 transition-all ${
                    hovered === idx
                      ? "border-amber-400/50 bg-amber-400/5"
                      : "border-border bg-card"
                  }`}
                >
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br ${t.color} text-amber-950`}
                  >
                    <span className="text-[10px] font-bold">
                      {t.short}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.students} alumnos · datos aislados
                    </p>
                  </div>
                  <Lock className="h-4 w-4 text-amber-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
