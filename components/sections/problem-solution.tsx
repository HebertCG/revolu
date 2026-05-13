"use client";

import { Container, SectionHeading } from "@/components/ui/container";
import {
  Calculator,
  Check,
  ClipboardCheck,
  FileText,
  MessageSquare,
  NotebookPen,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const problems = [
  { icon: MessageSquare, label: "WhatsApp para tareas y comunicaciones" },
  { icon: Calculator, label: "Excel para asistencia y control de alumnos" },
  { icon: FileText, label: "Word para exámenes que se filtran fácilmente" },
  { icon: NotebookPen, label: "Cuadernos físicos para registros de notas" },
];

const solutions = [
  { icon: Zap, label: "Plataforma unificada con inteligencia artificial" },
  { icon: Sparkles, label: "Proctoring automático con detección en vivo" },
  { icon: Check, label: "Exámenes con fórmulas KaTeX importados desde Word" },
  { icon: ClipboardCheck, label: "Asistencia en tiempo real visible para apoderados" },
];

export function ProblemSolution() {
  return (
    <section id="producto" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="El antes y el después"
          title="De un caos de herramientas a una sola plataforma educativa"
          description="Las academias del norte gestionan en promedio 6 herramientas distintas. Klassia las reemplaza todas, reduciendo el trabajo administrativo hasta en un 70%."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Problem side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-zinc-500/[0.04] via-transparent to-zinc-500/[0.02]"
            />
            <div className="relative">
              <div className="mb-6 flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-muted">
                  <X className="h-4 w-4 text-muted-foreground" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Hoy en tu academia</p>
                  <h3 className="text-base font-semibold">Herramientas dispersas y sin control</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {problems.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li
                      key={p.label}
                      className="flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-muted-foreground"
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-muted text-muted-foreground">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span>{p.label}</span>
                      <X className="ml-auto h-3.5 w-3.5 text-muted-foreground/60" />
                    </li>
                  );
                })}
              </ul>
              <p className="mt-5 text-xs text-muted-foreground">
                Datos perdidos, exámenes filtrados, padres desinformados, profesores desbordados.
              </p>
            </div>
          </motion.div>

          {/* Solution side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-indigo-400/40 bg-gradient-to-br from-indigo-400/[0.08] to-emerald-400/[0.04] p-6 shadow-[0_0_60px_-12px_rgb(99_102_241/0.3)] sm:p-8"
          >
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-indigo-400/15 blur-3xl"
            />
            <div className="relative">
              <div className="mb-6 flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-600 text-white">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
                    Con Klassia
                  </p>
                  <h3 className="text-base font-semibold">Una plataforma, todo bajo control</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {solutions.map((s) => {
                  const Icon = s.icon;
                  return (
                    <li
                      key={s.label}
                      className="flex items-center gap-3 rounded-xl border border-indigo-400/20 bg-card/60 px-4 py-3 text-sm text-card-foreground backdrop-blur"
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-400/15 text-indigo-500">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span>{s.label}</span>
                      <Check className="ml-auto h-3.5 w-3.5 text-emerald-500" />
                    </li>
                  );
                })}
              </ul>
              <p className="mt-5 text-xs text-indigo-700 dark:text-indigo-300">
                Un solo login. Un solo dashboard. Cero archivos sueltos. Cero estrés.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
