"use client";

import { Container, SectionHeading } from "@/components/ui/container";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { Calculator, TrendingDown } from "lucide-react";

const fmt = (n: number) =>
  new Intl.NumberFormat("es-PE", { maximumFractionDigits: 0 }).format(n);

export function Calculadora() {
  const [students, setStudents] = useState(150);
  const [teachers, setTeachers] = useState(10);

  const customCost = useMemo(() => {
    const developer = 9_000;
    const designer = 4_500;
    const ops = 1_500;
    const months = 8;
    const upkeep = 2_500 * 12;
    const scale = students / 100 + teachers / 20;
    return Math.round((developer + designer + ops) * months + upkeep * Math.max(1, scale));
  }, [students, teachers]);

  const klassiaMonthly = useMemo(() => {
    if (students <= 50) return 199;
    if (students <= 200) return 449;
    return 899;
  }, [students]);

  const klassiaYear = klassiaMonthly * 12;
  const savings = customCost - klassiaYear;

  return (
    <section className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Calculadora"
          title="¿Cuánto te ahorras con Klassia?"
          description="Mueve los sliders según el tamaño de tu academia. Comparamos contra construir tu propia intranet desde cero (desarrollo + mantenimiento)."
        />

        <div className="mt-12 mx-auto max-w-4xl rounded-3xl border border-border bg-card p-6 sm:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Sliders */}
            <div className="space-y-7">
              <div>
                <div className="mb-2 flex items-baseline justify-between">
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Alumnos
                  </label>
                  <span className="text-xl font-semibold tabular-nums text-indigo-600 dark:text-indigo-400">
                    {students}
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  value={students}
                  onChange={(e) => setStudents(Number(e.target.value))}
                  className="w-full accent-indigo-500"
                  aria-label="Cantidad de alumnos"
                />
                <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
                  <span>20</span>
                  <span>1,000</span>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-baseline justify-between">
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Profesores
                  </label>
                  <span className="text-xl font-semibold tabular-nums text-indigo-600 dark:text-indigo-400">
                    {teachers}
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="50"
                  step="1"
                  value={teachers}
                  onChange={(e) => setTeachers(Number(e.target.value))}
                  className="w-full accent-indigo-500"
                  aria-label="Cantidad de profesores"
                />
                <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
                  <span>2</span>
                  <span>50</span>
                </div>
              </div>
            </div>

            {/* Output */}
            <div className="rounded-2xl border border-indigo-400/30 bg-gradient-to-br from-indigo-400/[0.08] to-emerald-400/[0.04] p-5 sm:p-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                <Calculator className="h-3 w-3" />
                Construir desde cero
              </div>
              <motion.div
                key={customCost}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-2xl font-semibold tabular-nums line-through text-muted-foreground"
              >
                S/ {fmt(customCost)}/año
              </motion.div>

              <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                Con Klassia
              </div>
              <motion.div
                key={klassiaMonthly}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1"
              >
                <span className="text-3xl font-semibold tabular-nums gradient-text-primary">
                  S/ {fmt(klassiaMonthly)}
                </span>
                <span className="ml-1 text-sm text-muted-foreground">/mes</span>
              </motion.div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-card/60 px-3 py-1.5 backdrop-blur">
                <TrendingDown className="h-3.5 w-3.5 text-emerald-500" />
                <span className="text-xs font-medium">
                  Ahorras{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    S/ {fmt(savings)}/año
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
