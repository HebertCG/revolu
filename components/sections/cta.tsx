"use client";

import { ArrowUpRight, CheckSquare } from "lucide-react";
import { Reveal } from "@/components/animated/reveal";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-paper py-28 md:py-36"
    >
      <div
        aria-hidden
        className="grid-bg pointer-events-none absolute inset-0 opacity-50"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, #000, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, #000, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <Reveal className="sec-rule mb-10">
              <span className="font-semibold text-ink">§04</span>
              <span>Siguiente nivel</span>
              <span className="dashed-h h-px flex-1" />
              <span>Contacto</span>
            </Reveal>
            <Reveal
              as="h2"
              className="display-tight pb-1 text-[40px] font-semibold leading-[1.06] tracking-tight sm:text-5xl md:text-[80px]"
            >
              ¿Listo para llevar tu academia
              <br />
              al{" "}
              <span className="font-serif-italic text-cobalt-700">
                siguiente nivel
              </span>
              <span className="text-coral-500">?</span>
            </Reveal>
            <Reveal
              as="p"
              delay={140}
              className="mt-8 max-w-xl text-[16px] leading-relaxed text-ink-soft md:text-[18px]"
            >
              Agenda una demo guiada de 30 minutos. Migramos tus alumnos, cursos
              y exámenes — sin costo, en menos de una semana.
            </Reveal>
            <Reveal delay={200} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.link/9vgb2z"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-coral btn-magnetic-glow group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[14px] font-semibold"
              >
                Contactar ventas
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/demo"
                className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[14px] font-medium"
              >
                Ver demo en vivo
              </a>
            </Reveal>
            <Reveal
              delay={280}
              className="mt-10 flex flex-wrap items-center gap-6 font-mono text-[11px] tracking-wider text-ink-soft"
            >
              <span className="flex items-center gap-1.5">
                <CheckSquare className="h-3 w-3 text-cobalt-700" />
                MIGRACIÓN GRATIS
              </span>
              <span className="flex items-center gap-1.5">
                <CheckSquare className="h-3 w-3 text-cobalt-700" />
                SOPORTE 24/7
              </span>
              <span className="flex items-center gap-1.5">
                <CheckSquare className="h-3 w-3 text-cobalt-700" />
                SIN CONTRATO ANUAL
              </span>
            </Reveal>
          </div>

          <Reveal delay={300} className="md:col-span-4">
            <div className="card card-cream rounded-3xl p-6">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-ink-soft">
                PRÓXIMA DEMO ABIERTA
              </div>
              <div className="font-serif-italic text-[38px] leading-none text-ink">
                jueves
                <br />
                16 may.
              </div>
              <div className="mt-2 font-mono text-[12px] text-ink-soft">
                11:00 — 11:30 (GMT-5)
              </div>
              <div className="dashed-h my-5 h-px" />
              <div className="mb-2 text-[12px] text-ink-soft">
                Cupos disponibles
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-2 flex-1 rounded-sm ${
                      i < 5 ? "bg-cobalt-500" : "bg-[color:var(--line)]"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between font-mono text-[11px] text-ink-soft">
                <span>5/8 confirmados</span>
                <span className="text-coral-600">3 libres</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
