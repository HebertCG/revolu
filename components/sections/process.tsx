"use client";

import type { ReactNode } from "react";
import { FileText } from "lucide-react";
import { Reveal } from "@/components/animated/reveal";
import { Spot } from "@/components/animated/spot";
import { NumberTicker } from "@/components/animated/number-ticker";
import { SectionHeader } from "@/components/sections/section-header";

type Step = {
  n: string;
  tag: string;
  title: string;
  desc: string;
  mini: ReactNode;
  tone: "white" | "cream" | "mist" | "dark";
};

const steps: Step[] = [
  {
    n: "01",
    tag: "Discovery",
    title: "Reunimos los datos de tu academia.",
    desc: "Te entregamos un Excel modelo. Subimos cursos, grupos, alumnos y bancos de preguntas en menos de 48 horas.",
    mini: (
      <div className="flex flex-wrap gap-2">
        {["alumnos.xlsx", "cursos.csv", "preguntas.docx"].map((f) => (
          <div
            key={f}
            className="flex items-center gap-1.5 rounded-md border border-[color:var(--line)] bg-white px-2.5 py-1.5 font-mono text-[11px] text-ink-soft"
          >
            <FileText className="h-3.5 w-3.5 text-cobalt-700" />
            {f}
          </div>
        ))}
      </div>
    ),
    tone: "white",
  },
  {
    n: "02",
    tag: "Migración",
    title: "Migramos sin costo y sin downtime.",
    desc: "Tu academia sigue operando. Klassia toma la información, la limpia y construye los módulos por ti.",
    mini: (
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <div className="mb-1.5 flex justify-between font-mono text-[10px] text-ink-soft">
            <span>Migración</span>
            <span>
              <NumberTicker value={94} suffix="%" />
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-[color:var(--line)]">
            <div className="h-full bg-cobalt-600" style={{ width: "94%" }} />
          </div>
        </div>
        <span className="chip chip-mint">
          <span className="pulse-mint h-1 w-1 rounded-full" />
          LIVE
        </span>
      </div>
    ),
    tone: "cream",
  },
  {
    n: "03",
    tag: "Onboarding",
    title: "Capacitamos a tu equipo en 2 sesiones.",
    desc: "Profesores, administrativos y directores reciben capacitación en vivo. Material grabado disponible siempre.",
    mini: (
      <div className="grid grid-cols-3 gap-2">
        {["Profe", "Admin", "Director"].map((r) => (
          <div
            key={r}
            className="rounded-lg border border-[color:var(--line)] bg-white p-2.5 text-center"
          >
            <div className="mx-auto mb-1.5 h-7 w-7 rounded-full border border-cobalt-100 bg-cobalt-50" />
            <div className="font-mono text-[10px] text-ink-soft">{r}</div>
          </div>
        ))}
      </div>
    ),
    tone: "mist",
  },
  {
    n: "04",
    tag: "Lanzamiento",
    title: "En vivo en menos de 15 días.",
    desc: "Tu landing pública, tus grupos y tu primer examen con proctoring corriendo en producción.",
    mini: (
      <div className="flex items-center justify-between rounded-lg border border-cobalt-700 bg-ink px-3 py-2.5 font-mono text-[11px] text-white">
        <span className="opacity-70">Día 15 · 12:00</span>
        <span className="flex items-center gap-1.5">
          <span className="pulse-mint h-1.5 w-1.5 rounded-full" />
          LIVE
        </span>
      </div>
    ),
    tone: "dark",
  },
];

export function Process() {
  return (
    <section id="proceso" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          num="03"
          label="Cómo funciona"
          accent="Onboarding"
          title={
            <>
              De Excel a operación,
              <br />
              <span className="font-serif-italic text-cobalt-700">
                en una semana
              </span>
              .
            </>
          }
          kicker="Cuatro pasos. Sin costo de migración. Sin tarjeta de crédito hasta el día 30."
        />

        <div className="grid gap-8 md:grid-cols-12">
          <div className="hidden self-start md:sticky md:top-28 md:col-span-4 md:block">
            <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--cream)] p-6">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-ink-soft">
                Promesa
              </div>
              <div className="text-[28px] font-semibold leading-tight tracking-tight">
                15 días o{" "}
                <span className="font-serif-italic text-coral-500">gratis</span>
                .
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
                Si no estás operando en producción al día quince, devolvemos
                cualquier pago y te ayudamos a volver a tu sistema anterior.
              </p>
              <div className="dashed-h my-5 h-px" />
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="num-mono text-[24px] font-semibold leading-none">
                    <NumberTicker value={15} />
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink-soft">
                    días promedio
                  </div>
                </div>
                <div>
                  <div className="num-mono text-[24px] font-semibold leading-none">
                    <NumberTicker value={0} suffix="$" />
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink-soft">
                    de migración
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:col-span-8">
            {steps.map((s, i) => {
              const bg =
                s.tone === "cream"
                  ? "card-cream"
                  : s.tone === "mist"
                    ? "card-mist"
                    : s.tone === "dark"
                      ? "card-dark"
                      : "";
              const sub =
                s.tone === "dark" ? "text-white/65" : "text-ink-soft";
              const tag =
                s.tone === "dark" ? "text-white/55" : "text-ink-soft";
              return (
                <Reveal key={i}>
                  <Spot
                    className={`card step-card ${bg} grid gap-6 rounded-3xl p-7 md:grid-cols-12 md:p-8`}
                  >
                    <div className="flex items-baseline gap-3 md:col-span-3 md:flex-col md:items-start">
                      <div
                        className={`text-[60px] font-semibold leading-none tracking-tight md:text-[88px] ${
                          s.tone === "dark" ? "text-white/95" : "text-ink"
                        }`}
                      >
                        {s.n}
                      </div>
                      <div
                        className={`font-mono text-[10px] uppercase tracking-wider ${tag}`}
                      >
                        {s.tag}
                      </div>
                    </div>
                    <div className="md:col-span-9">
                      <h3
                        className={`mb-3 text-[22px] font-semibold leading-snug tracking-tight md:text-[26px] ${
                          s.tone === "dark" ? "text-white" : "text-ink"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <p
                        className={`mb-5 max-w-lg text-[14px] leading-relaxed ${sub}`}
                      >
                        {s.desc}
                      </p>
                      <div>{s.mini}</div>
                    </div>
                  </Spot>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
