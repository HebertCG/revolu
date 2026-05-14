"use client";

import { ArrowRight, PlayCircle } from "lucide-react";
import { Reveal } from "@/components/animated/reveal";
import { NumberTicker } from "@/components/animated/number-ticker";
import { DashboardMockup } from "@/components/sections/dashboard-mockup";

const stats = [
  { v: 180, s: "+", d: 0, l: "academias activas" },
  { v: 99.98, s: "%", d: 2, l: "uptime garantizado" },
  { v: 8, s: "", d: 0, l: "detecciones de fraude IA" },
  { v: 4.8, s: "M", d: 1, l: "exámenes corridos" },
];

const trustList = [
  "INSTITUTO NORDEN",
  "ACADEMIA HELIOS",
  "UNI TÉCNICA QORI",
  "COLEGIO SAN ARIEL",
  "FUNDACIÓN LUMEN",
  "ACADEMIA OBSIDIANA",
  "CETPRO ALTAMIRA",
  "INSTITUTO VEGA",
  "ACADEMIA POLARIS",
  "ESCUELA MERIDIANA",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36"
    >
      <div
        aria-hidden
        className="grid-bg pointer-events-none absolute inset-0 opacity-60"
        style={{
          maskImage:
            "radial-gradient(ellipse at center top, #000, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center top, #000, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="sec-rule mb-12">
          <span className="font-semibold text-ink">§00</span>
          <span>Inicio / Klassia</span>
          <span className="dashed-h h-px flex-1" />
          <span>Mayo 14, 2026</span>
        </Reveal>

        <div className="grid items-start gap-8 md:grid-cols-12">
          <Reveal className="hidden flex-col items-start gap-6 pt-3 md:col-span-2 md:flex">
            <span className="rail">EDICIÓN · 2026</span>
            <span className="h-20 w-px bg-[color:var(--line-strong)]" />
          </Reveal>

          <div className="md:col-span-10">
            <Reveal>
              <span className="chip chip-cobalt">
                <span className="h-1 w-1 rounded-full bg-cobalt-600" />
                Plataforma educativa · LATAM
              </span>
            </Reveal>

            <Reveal
              as="h1"
              delay={60}
              className="display-tight mt-6 text-[44px] font-semibold leading-[1.02] sm:text-6xl md:text-[88px]"
            >
              <span className="block">El sistema</span>
              <span className="block">
                <span className="font-serif-italic text-cobalt-700">
                  operativo
                </span>
                <span> para las</span>
              </span>
              <span className="block">
                academias
                <span className="relative ml-3 inline-block">
                  <span>del futuro</span>
                  <svg
                    aria-hidden
                    className="absolute -bottom-2 left-0 w-full"
                    height="14"
                    viewBox="0 0 380 14"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9 C 90 3, 220 3, 378 9"
                      className="scribble spark-path"
                    />
                  </svg>
                </span>
                <span className="text-coral-500">.</span>
              </span>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-12">
              <Reveal
                as="p"
                delay={120}
                className="text-[16px] leading-relaxed text-ink-soft md:col-span-7 md:text-[19px]"
              >
                Gestiona alumnos, evita fraudes con IA y aumenta tus matrículas
                con la plataforma educativa más avanzada del mercado.
              </Reveal>

              <Reveal
                delay={180}
                className="flex flex-wrap items-start gap-3 md:col-span-5 md:justify-end"
              >
                <a
                  href="#cta"
                  className="btn-primary btn-magnetic-glow group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[14px] font-medium"
                >
                  Solicitar Demo
                  <ArrowRight className="arrow-loop h-4 w-4" />
                </a>
                <a
                  href="/demo"
                  className="btn-ghost group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[14px] font-medium"
                >
                  <PlayCircle className="h-4 w-4 text-cobalt-700" />
                  Ver demo en vivo
                </a>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <Reveal delay={260}>
          <div className="mt-14 grid grid-cols-2 divide-x divide-[color:var(--line)] border-y border-[color:var(--line)] md:grid-cols-4">
            {stats.map((k, i) => (
              <div key={i} className="px-4 py-5 first:pl-0 md:first:pl-4">
                <div className="num-mono text-[28px] font-semibold leading-none tracking-tight md:text-[34px]">
                  <NumberTicker
                    value={k.v}
                    suffix={k.s}
                    decimals={k.d}
                  />
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                  {k.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Dashboard */}
        <Reveal delay={300} className="relative mt-16 md:mt-20">
          <div className="pointer-events-none absolute -inset-x-10 -inset-y-6 -z-10 rounded-[40px] bg-gradient-to-br from-[color:var(--cobalt-50)] via-transparent to-[#FFEFE9] opacity-70" />
          <DashboardMockup />
        </Reveal>

        {/* Trust strip */}
        <Reveal delay={400} className="mt-20">
          <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
            +180 academias e institutos en LATAM —
          </div>
          <div className="mask-fade-x overflow-hidden">
            <div className="marquee-track flex items-center gap-12 whitespace-nowrap">
              {trustList.concat(trustList).map((n, i) => (
                <span
                  key={i}
                  className="text-[13px] font-medium tracking-[0.22em] text-ink-soft opacity-70"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
