"use client";

import { Container, SectionHeading } from "@/components/ui/container";
import { motion } from "motion/react";
import { Check, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { ShimmerButton } from "@/components/animated/shimmer-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Plan {
  name: string;
  monthly: number;
  annual: number;
  tagline: string;
  cta: string;
  popular?: boolean;
  included: { label: string; included: boolean }[];
}

const plans: Plan[] = [
  {
    name: "Básico",
    monthly: 199,
    annual: 159,
    tagline: "Ideal para academias que empiezan a digitalizar",
    cta: "Empezar 14 días gratis",
    included: [
      { label: "50 alumnos · 5 profesores · 1 admin", included: true },
      { label: "5 GB de almacenamiento", included: true },
      { label: "Exámenes con KaTeX, asistencia, pagos", included: true },
      { label: "Test vocacional CHASIDE", included: true },
      { label: "Proctoring con IA", included: false },
      { label: "Simulacros UDEP/UPAO ilimitados", included: false },
    ],
  },
  {
    name: "Pro",
    monthly: 449,
    annual: 359,
    tagline: "Para academias que quieren liderar su ciudad",
    cta: "Solicitar demo",
    popular: true,
    included: [
      { label: "200 alumnos · 15 profesores · 3 admins", included: true },
      { label: "25 GB de almacenamiento", included: true },
      { label: "Todo lo de Básico", included: true },
      { label: "Proctoring con IA (8 detecciones)", included: true },
      { label: "Motor de simulacros UDEP/UPAO", included: true },
      { label: "Heatmap de competencias", included: true },
      { label: "WhatsApp integrado", included: true },
      { label: "Soporte en horario laboral", included: true },
    ],
  },
  {
    name: "Institución",
    monthly: 899,
    annual: 719,
    tagline: "Para academias grandes, colegios e institutos",
    cta: "Hablar con ventas",
    included: [
      { label: "Alumnos y profesores ilimitados", included: true },
      { label: "100 GB de almacenamiento", included: true },
      { label: "Todo lo de Pro", included: true },
      { label: "Dominio propio (intranet.tuacademia.pe)", included: true },
      { label: "Marca blanca completa", included: true },
      { label: "Predictor de ingreso UDEP/UPAO con ML", included: true },
      { label: "Portal del apoderado", included: true },
      { label: "API REST", included: true },
      { label: "Soporte 24/7 prioritario", included: true },
    ],
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="precios" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Precios transparentes"
          title="Paga por academia, no por alumno"
          description="Sin sorpresas, sin cobros ocultos. Invierte en tu academia con la confianza de que puedes cancelar cuando quieras."
        />

        {/* Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={cn(
                "relative rounded-full px-5 py-1.5 text-sm font-medium transition-colors",
                !annual ? "text-white" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {!annual && (
                <motion.div
                  layoutId="billing-toggle"
                  className="absolute inset-0 rounded-full bg-gradient-to-b from-indigo-500 to-indigo-700 shadow"
                  transition={{ duration: 0.25 }}
                />
              )}
              <span className="relative">Mensual</span>
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={cn(
                "relative inline-flex items-center gap-2 rounded-full px-5 py-1.5 text-sm font-medium transition-colors",
                annual ? "text-white" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {annual && (
                <motion.div
                  layoutId="billing-toggle"
                  className="absolute inset-0 rounded-full bg-gradient-to-b from-indigo-500 to-indigo-700 shadow"
                  transition={{ duration: 0.25 }}
                />
              )}
              <span className="relative inline-flex items-center gap-2">
                Anual
                <span className="rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                  -20%
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-4 lg:items-stretch">
          {plans.map((plan, idx) => {
            const price = annual ? plan.annual : plan.monthly;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={cn(
                  "relative flex flex-col rounded-3xl border bg-card p-6 sm:p-8 transition-shadow",
                  plan.popular
                    ? "border-indigo-400/50 shadow-[0_0_60px_-12px_rgb(99_102_241/0.5)] lg:scale-[1.04] lg:z-10"
                    : "border-border hover:border-indigo-400/30",
                )}
              >
                {plan.popular && (
                  <>
                    <div
                      aria-hidden
                      className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-indigo-400/30 via-sky-300/15 to-emerald-400/20 opacity-50"
                    />
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 rounded-full border border-indigo-400/50 bg-gradient-to-r from-indigo-500 to-indigo-700 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow">
                        <Sparkles className="h-3 w-3" />
                        Más popular
                      </span>
                    </div>
                  </>
                )}

                <h3 className="text-lg font-semibold tracking-tight">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight tabular-nums">
                    S/ {price}
                  </span>
                  <span className="text-sm text-muted-foreground">/mes</span>
                </div>
                {annual && (
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Facturado anualmente · ahorras S/ {(plan.monthly - plan.annual) * 12}/año
                  </p>
                )}

                <div className="mt-6">
                  {plan.popular ? (
                    <ShimmerButton className="w-full justify-center">{plan.cta}</ShimmerButton>
                  ) : (
                    <Button variant="ghost" size="lg" className="w-full justify-center">
                      {plan.cta}
                    </Button>
                  )}
                </div>

                <ul className="mt-7 space-y-3">
                  {plan.included.map((feat) => (
                    <li
                      key={feat.label}
                      className={cn(
                        "flex items-start gap-3 text-sm",
                        feat.included ? "text-card-foreground" : "text-muted-foreground/60 line-through",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full",
                          feat.included ? "bg-indigo-400/20 text-indigo-600 dark:text-indigo-300" : "bg-muted text-muted-foreground",
                        )}
                      >
                        {feat.included ? <Check className="h-2.5 w-2.5" /> : <X className="h-2.5 w-2.5" />}
                      </span>
                      {feat.label}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-muted-foreground">
          Todos los planes incluyen SSL, multi-tenant aislado, actualizaciones automáticas y hosting en{" "}
          <span className="text-foreground font-medium">Hetzner Cloud</span>.
        </p>
      </Container>
    </section>
  );
}
