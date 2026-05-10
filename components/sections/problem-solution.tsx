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
  { icon: MessageSquare, label: "WhatsApp para tareas y notas" },
  { icon: Calculator, label: "Excel para asistencia y alumnos" },
  { icon: FileText, label: "Word para exámenes que se filtran" },
  { icon: NotebookPen, label: "Cuaderno para registros físicos" },
];

const solutions = [
  { icon: Zap, label: "Intranet unificada con IA" },
  { icon: Sparkles, label: "Proctoring con MediaPipe" },
  { icon: Check, label: "Exámenes con KaTeX e importador desde Word" },
  { icon: ClipboardCheck, label: "Asistencia en vivo para apoderados" },
];

export function ProblemSolution() {
  return (
    <section id="producto" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="El antes y el después"
          title="De un caos de herramientas a una sola intranet"
          description="Las academias del norte usan en promedio 6 herramientas distintas para operar. REVOLU las reemplaza todas con una sola plataforma con IA."
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
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Hoy</p>
                  <h3 className="text-base font-semibold">Lo que las academias usan</h3>
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
                Datos perdidos, exámenes filtrados, padres confundidos, profesores agotados.
              </p>
            </div>
          </motion.div>

          {/* Solution side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-amber-400/40 bg-gradient-to-br from-amber-400/[0.08] to-yellow-400/[0.04] p-6 shadow-[0_0_60px_-12px_rgb(245_158_11/0.3)] sm:p-8"
          >
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-amber-400/20 blur-3xl"
            />
            <div className="relative">
              <div className="mb-6 flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-amber-300 to-amber-600 text-amber-950">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-amber-700 dark:text-amber-300">
                    Con REVOLU
                  </p>
                  <h3 className="text-base font-semibold">Lo que REVOLU les da</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {solutions.map((s) => {
                  const Icon = s.icon;
                  return (
                    <li
                      key={s.label}
                      className="flex items-center gap-3 rounded-xl border border-amber-400/20 bg-card/60 px-4 py-3 text-sm text-card-foreground backdrop-blur"
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber-400/15 text-amber-500">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span>{s.label}</span>
                      <Check className="ml-auto h-3.5 w-3.5 text-amber-500" />
                    </li>
                  );
                })}
              </ul>
              <p className="mt-5 text-xs text-amber-700 dark:text-amber-300">
                Un solo login. Un solo dashboard. Cero archivos sueltos.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
