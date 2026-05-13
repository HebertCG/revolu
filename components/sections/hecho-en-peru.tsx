"use client";

import { Container } from "@/components/ui/container";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";

const cities = [
  { name: "Piura", role: "HQ", x: 28, y: 22, primary: true },
  { name: "Sullana", role: "Activo", x: 22, y: 14 },
  { name: "Tumbes", role: "Activo", x: 18, y: 6 },
  { name: "Talara", role: "Próximo", x: 15, y: 18 },
  { name: "Chiclayo", role: "Activo", x: 36, y: 38 },
  { name: "Cajamarca", role: "Próximo", x: 56, y: 46 },
  { name: "Trujillo", role: "Activo", x: 46, y: 58 },
  { name: "Chimbote", role: "Próximo", x: 50, y: 76 },
];

export function HechoEnPeru() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse-primary" />
              Hecho en el norte del Perú
            </span>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Diseñado en Piura.{" "}
              <span className="gradient-text-gold">
                Construido para transformar la educación del norte.
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Klassia nace del norte porque ahí es donde más academias preuniversitarias compiten
              por preparar alumnos para UDEP y UPAO. Entendemos las distancias, los cortes de luz,
              el internet variable: Klassia está pensada para tu realidad — no para una oficina en San Isidro.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2">
              {cities.map((c, i) => (
                <motion.li
                  key={c.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 transition-colors ${
                    c.primary
                      ? "border-indigo-400/40 bg-indigo-400/5"
                      : "border-border bg-card"
                  }`}
                >
                  <MapPin
                    className={`h-3.5 w-3.5 ${
                      c.primary ? "text-indigo-500" : "text-muted-foreground"
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{c.name}</p>
                    <p className="text-[10px] text-muted-foreground">{c.role}</p>
                  </div>
                  {c.primary && (
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse-primary" />
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Stylized map of northern Peru */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-gradient-radial from-indigo-400/10 via-transparent to-transparent blur-2xl"
            />

            <svg
              viewBox="0 0 100 100"
              className="h-full w-full"
              preserveAspectRatio="xMidYMid meet"
              aria-label="Mapa estilizado del norte del Perú"
            >
              {/* Coastline silhouette of northern Peru */}
              <defs>
                <linearGradient id="coast-fill" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.04" />
                </linearGradient>
                <radialGradient id="city-glow">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                </radialGradient>
              </defs>
              <path
                d="M 12 4 L 22 5 L 28 11 L 26 18 L 32 22 L 30 28 L 38 32 L 36 40 L 44 44 L 50 50 L 48 60 L 56 64 L 54 74 L 60 82 L 56 92 L 44 94 L 38 88 L 32 82 L 26 70 L 22 60 L 18 48 L 14 36 L 10 24 L 8 14 Z"
                fill="url(#coast-fill)"
                stroke="rgb(var(--indigo-400))"
                strokeOpacity="0.45"
                strokeWidth="0.4"
              />
              {/* River/route hint lines */}
              <path
                d="M 28 22 L 36 38 L 46 58"
                stroke="rgb(var(--indigo-400))"
                strokeOpacity="0.25"
                strokeWidth="0.35"
                strokeDasharray="0.8 0.8"
                fill="none"
              />

              {/* City markers */}
              {cities.map((c, i) => (
                <g key={c.name}>
                  <motion.circle
                    cx={c.x}
                    cy={c.y}
                    r={c.primary ? 4 : 2.5}
                    fill="url(#city-glow)"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                  />
                  <motion.circle
                    cx={c.x}
                    cy={c.y}
                    r={c.primary ? 1.4 : 0.9}
                    fill={c.primary ? "#818cf8" : "rgb(var(--foreground))"}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  />
                  {c.primary && (
                    <motion.circle
                      cx={c.x}
                      cy={c.y}
                      r="1.4"
                      fill="none"
                      stroke="#818cf8"
                      strokeWidth="0.4"
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: [0.8, 0, 0.8], scale: [1, 3, 1] }}
                      transition={{ duration: 2.4, repeat: Infinity }}
                    />
                  )}
                  <text
                    x={c.x + 2.5}
                    y={c.y + 0.6}
                    fontSize="2.6"
                    fill="currentColor"
                    className={
                      c.primary
                        ? "fill-foreground font-semibold"
                        : "fill-muted-foreground"
                    }
                  >
                    {c.name}
                  </text>
                </g>
              ))}

              {/* Compass hint */}
              <g transform="translate(85, 12)">
                <circle r="5" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.3" className="text-foreground" />
                <text x="0" y="-2.2" fontSize="2.4" textAnchor="middle" className="fill-indigo-500 font-semibold">
                  N
                </text>
                <line x1="0" y1="-4" x2="0" y2="4" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.3" className="text-foreground" />
              </g>
            </svg>

            {/* Decorative legend */}
            <div className="pointer-events-none absolute bottom-2 left-2 inline-flex items-center gap-3 rounded-full border border-border bg-card/80 px-3 py-1.5 backdrop-blur">
              <span className="inline-flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse-primary" />
                HQ
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                Activo
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
