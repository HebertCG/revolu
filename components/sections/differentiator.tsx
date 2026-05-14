"use client";

import type { ReactNode } from "react";
import { Reveal } from "@/components/animated/reveal";
import { Spot } from "@/components/animated/spot";
import { SectionHeader } from "@/components/sections/section-header";

type Tone = "white" | "cream" | "mist" | "dark";

function HeroCard({
  idx,
  badge,
  title,
  desc,
  tone = "white",
  children,
}: {
  idx: number;
  badge: string;
  title: string;
  desc: string;
  tone?: Tone;
  children: ReactNode;
}) {
  const bg =
    tone === "cream"
      ? "card-cream"
      : tone === "mist"
        ? "card-mist"
        : tone === "dark"
          ? "card-dark"
          : "";
  const sub = tone === "dark" ? "text-white/70" : "text-ink-soft";

  return (
    <Spot className={`card ${bg} flex h-full flex-col rounded-3xl p-7 md:p-8`}>
      <div className="relative z-10 mb-6 flex items-center justify-between">
        <span
          className={`chip ${
            tone === "dark" ? "border-white/15 bg-white/10 text-white" : ""
          }`}
        >
          <span
            className={`h-1 w-1 rounded-full ${
              tone === "dark" ? "bg-white" : "bg-cobalt-600"
            }`}
          />
          {badge}
        </span>
        <span
          className={`font-mono text-[11px] ${
            tone === "dark" ? "text-white/40" : "text-ink-soft"
          }`}
        >
          0{idx}
        </span>
      </div>

      <div className="relative z-10 mb-7 min-h-[280px] flex-1">{children}</div>

      <div className="relative z-10">
        <h3 className="mb-3 text-[22px] font-semibold leading-tight tracking-tight md:text-[26px]">
          {title}
        </h3>
        <p className={`text-[14px] leading-relaxed ${sub}`}>{desc}</p>
      </div>
    </Spot>
  );
}

function ProctoringVisual() {
  return (
    <div className="relative h-full">
      <div className="mb-4 grid grid-cols-3 gap-1.5">
        {Array.from({ length: 9 }).map((_, i) => {
          const flagged = i === 3 || i === 7;
          return (
            <div
              key={i}
              className={`relative aspect-square overflow-hidden rounded-lg border bg-[color:var(--cream)] ${
                flagged ? "border-coral-500" : "border-[color:var(--line)]"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 40 40"
                  className={`h-8 w-8 ${
                    flagged ? "text-coral-600" : "text-ink-soft opacity-40"
                  }`}
                >
                  <circle
                    cx="20"
                    cy="15"
                    r="6"
                    fill="currentColor"
                    opacity="0.5"
                  />
                  <path
                    d="M8 36 C 8 26 32 26 32 36 Z"
                    fill="currentColor"
                    opacity="0.5"
                  />
                </svg>
              </div>
              {flagged && (
                <>
                  <div className="absolute inset-0 animate-pulse rounded-lg ring-2 ring-coral-500/30" />
                  <div className="absolute right-1 top-1">
                    <span className="rounded border border-coral-500/40 bg-white px-1 py-0.5 font-mono text-[8px] text-coral-600">
                      !FRAUDE
                    </span>
                  </div>
                </>
              )}
              <div className="absolute bottom-1 left-1 font-mono text-[8px] text-ink-soft">
                A{(i + 1).toString().padStart(2, "0")}
              </div>
            </div>
          );
        })}
      </div>
      <div className="rounded-lg border border-[color:var(--line)] bg-[color:var(--cream)] p-2.5">
        <div className="mb-1.5 flex justify-between font-mono text-[9px] tracking-wider text-ink-soft">
          <span>DETECCIONES · TIEMPO REAL</span>
          <span className="flex items-center gap-1 text-mint-700">
            <span className="pulse-mint h-1 w-1 rounded-full" />
            LIVE
          </span>
        </div>
        <div className="space-y-1 font-mono text-[10px]">
          <div className="flex justify-between text-coral-600">
            <span>14:02:11 · A04 · mirada fuera de pantalla</span>
            <span>0.91</span>
          </div>
          <div className="flex justify-between text-coral-600">
            <span>14:02:08 · A08 · cambio de pestaña</span>
            <span>0.98</span>
          </div>
          <div className="flex justify-between text-ink-soft">
            <span>14:01:50 · A02 · rostro confirmado</span>
            <span>0.99</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function UptimeVisual() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-1 flex items-baseline justify-between">
        <div className="num-mono text-[44px] font-semibold leading-none tracking-tight">
          99.98<span className="text-ink-soft">%</span>
        </div>
        <span className="chip chip-mint">
          <span className="pulse-mint h-1 w-1 rounded-full" />
          OPERATIVO
        </span>
      </div>
      <div className="mb-5 font-mono text-[11px] tracking-wider text-ink-soft">
        UPTIME · ÚLTIMOS 90 DÍAS
      </div>

      <div className="mb-4 flex h-24 items-end gap-[3px]">
        {Array.from({ length: 60 }).map((_, i) => {
          const h = 70 + Math.sin(i * 0.6) * 15 + Math.cos(i * 0.3) * 10;
          const incident = i === 41;
          return (
            <div
              key={i}
              style={{
                height: `${incident ? 35 : h}%`,
                animationDelay: `${i * 15}ms`,
              }}
              className={`bar flex-1 rounded-sm ${
                incident
                  ? "bg-coral-500"
                  : "bg-gradient-to-t from-cobalt-100 to-cobalt-600"
              }`}
            />
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="rounded-lg border border-[color:var(--line)] bg-white py-2">
          <div className="num-mono text-[18px] font-semibold">42ms</div>
          <div className="font-mono text-[10px] text-ink-soft">P95 LAT</div>
        </div>
        <div className="rounded-lg border border-[color:var(--line)] bg-white py-2">
          <div className="num-mono text-[18px] font-semibold">12k</div>
          <div className="font-mono text-[10px] text-ink-soft">CONCURRENT</div>
        </div>
        <div className="rounded-lg border border-[color:var(--line)] bg-white py-2">
          <div className="num-mono text-[18px] font-semibold">3</div>
          <div className="font-mono text-[10px] text-ink-soft">REGIONES</div>
        </div>
      </div>
    </div>
  );
}

function MLVisual() {
  const items = [
    {
      label: "Ing. de Sistemas",
      v: 87,
      color: "bg-sun-500",
      trait: "Lógica · Tecnología",
    },
    {
      label: "Diseño UX",
      v: 71,
      color: "bg-coral-500",
      trait: "Creatividad · Empatía",
    },
    {
      label: "Arquitectura",
      v: 58,
      color: "bg-cobalt-500",
      trait: "Espacial · Estética",
    },
  ];
  return (
    <div className="flex h-full flex-col">
      <div className="mb-3 rounded-xl border border-white/15 bg-white/5 p-4">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-white/55">
          CHASIDE · TOP 3 PREDICHO
        </div>
        <div className="space-y-3">
          {items.map((r, i) => (
            <div key={i}>
              <div className="mb-1.5 flex justify-between text-[12px]">
                <span className="text-white">{r.label}</span>
                <span className="font-mono text-white/65">{r.v}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full ${r.color}`}
                  style={{
                    width: `${r.v}%`,
                    transition: "width 1.2s ease",
                  }}
                />
              </div>
              <div className="mt-1 font-mono text-[10px] text-white/45">
                {r.trait}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto rounded-xl border border-white/15 bg-white/5 p-3">
        <div className="mb-2 font-mono text-[10px] uppercase tracking-wider text-white/55">
          PREGUNTA · CALIBRACIÓN ADAPTATIVA
        </div>
        <div className="text-[12px] italic leading-relaxed text-white/85">
          &ldquo;Prefieres entender cómo funciona algo antes que usarlo.&rdquo;
        </div>
        <div className="mt-2.5 flex gap-1.5">
          {["1", "2", "3", "4", "5"].map((n, i) => (
            <div
              key={i}
              className={`flex h-7 flex-1 items-center justify-center rounded border font-mono text-[11px] ${
                i === 3
                  ? "border-sun-500 bg-sun-500 text-ink"
                  : "border-white/15 text-white/55"
              }`}
            >
              {n}
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between font-mono text-[9px] text-white/55">
          <span>confianza: 0.84</span>
          <span>preg. 14/22</span>
        </div>
      </div>
    </div>
  );
}

export function Differentiator() {
  return (
    <section
      id="diferencia"
      className="relative bg-paper py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          num="01"
          label="Lo que solo Klassia tiene"
          accent="Anti-fraude · Estabilidad · ML"
          title={
            <>
              Tres armas que ninguna academia
              <br />
              tradicional puede{" "}
              <span className="font-serif-italic text-cobalt-700">igualar</span>.
            </>
          }
          kicker="No estás comparando intranets. Estás comparando tu academia del 2026 contra una del 2030."
        />

        <div className="stagger grid gap-4 md:grid-cols-3">
          <Reveal>
            <HeroCard
              idx={1}
              badge="ANTI-FRAUDE · PROCTORING"
              title="Proctoring con IA en vivo."
              tone="cream"
              desc="MediaPipe detecta 8 tipos de fraude en tiempo real: rostro ausente, múltiples personas, mirada fuera de pantalla, cambio de pestaña. Cero alumnos copiando, sin instalar nada."
            >
              <ProctoringVisual />
            </HeroCard>
          </Reveal>
          <Reveal>
            <HeroCard
              idx={2}
              badge="ALTA DISPONIBILIDAD"
              title="Sistema estable y sobresaliente."
              tone="white"
              desc="Arquitectura cloud de alta disponibilidad. Diseñado para soportar miles de alumnos concurrentes sin caídas ni lentitud, garantizando una experiencia educativa fluida 24/7."
            >
              <UptimeVisual />
            </HeroCard>
          </Reveal>
          <Reveal>
            <HeroCard
              idx={3}
              badge="ML · EXPLICABLE"
              title="Test vocacional con ML explicable."
              tone="dark"
              desc="CHASIDE adaptativo con calibración por respuesta. No solo dice qué carrera elegir, explica por qué con métricas de confianza y áreas de fortaleza."
            >
              <MLVisual />
            </HeroCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
