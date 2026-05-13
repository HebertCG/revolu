"use client";

import { Container, SectionHeading } from "@/components/ui/container";
import { motion } from "motion/react";
import { ArrowRight, FileText, Sparkles, Brain, ChartBar } from "lucide-react";
import { BackgroundBeams } from "@/components/animated/background-beams";

const stages = [
  { icon: FileText, label: ".docx subido", color: "text-blue-500" },
  { icon: Sparkles, label: "IA parsea", color: "text-indigo-500" },
  { icon: Brain, label: "Genera variantes", color: "text-indigo-500" },
  { icon: ChartBar, label: "Reporte de competencias", color: "text-emerald-500" },
];

export function MotorSimulacros() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-0">
        <BackgroundBeams />
      </div>
      <Container className="relative">
        <SectionHeading
          eyebrow="Motor de simulacros"
          title="Convertimos tu banco de Word en práctica infinita"
          description="Tu profesor de Razonamiento Matemático tiene un banco de 200 preguntas en Word. Subiéndolas a Klassia se convierten en miles de variantes, todas calibradas al mismo nivel UDEP/UPAO."
        />

        <div className="mt-14 rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-md sm:p-10">
          {/* Pipeline */}
          <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-4 md:gap-6">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl border border-indigo-400/30 bg-indigo-400/5">
                    <Icon className={`h-5 w-5 ${stage.color}`} />
                  </div>
                  <p className="mt-3 text-xs font-medium">{stage.label}</p>
                  {i < stages.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-5 hidden h-4 w-4 text-muted-foreground md:block" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Sample question mockup */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 rounded-2xl border border-border bg-background p-5 sm:p-6"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-full bg-indigo-400/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
                Variante #842
              </span>
              <span className="text-[10px] text-muted-foreground">
                Razonamiento Matemático · Nivel UDEP
              </span>
            </div>
            <p className="text-sm leading-relaxed text-card-foreground sm:text-base">
              Si <span className="font-mono text-indigo-600 dark:text-indigo-400">f(x) = 2x² − 5x + 3</span>, calcula el valor de{" "}
              <span className="font-mono text-indigo-600 dark:text-indigo-400">f(3) − f(1)</span>.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                { label: "A) 4", correct: false },
                { label: "B) 8", correct: true },
                { label: "C) 6", correct: false },
                { label: "D) 10", correct: false },
              ].map((opt) => (
                <li
                  key={opt.label}
                  className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
                    opt.correct
                      ? "border-indigo-400/50 bg-indigo-400/10 text-indigo-700 dark:text-indigo-300"
                      : "border-border bg-card text-muted-foreground"
                  }`}
                >
                  <span
                    className={`grid h-4 w-4 place-items-center rounded-full border ${
                      opt.correct
                        ? "border-indigo-500 bg-indigo-500"
                        : "border-border"
                    }`}
                  >
                    {opt.correct && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </span>
                  {opt.label}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
