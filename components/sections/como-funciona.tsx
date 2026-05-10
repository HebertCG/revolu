"use client";

import { Container, SectionHeading } from "@/components/ui/container";
import { TracingBeam } from "@/components/animated/tracing-beam";
import { Activity, Link as LinkIcon, Settings, Upload } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: Upload,
    title: "01 · Subes tu información actual",
    description:
      "Excel de alumnos, contactos de profesores, exámenes en Word, cuaderno de pagos. Lo importamos todo respetando estructura.",
    visual: (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-card">
        <div className="absolute inset-0 bg-grid-small opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center gap-4 p-6">
          <div className="flex h-20 w-16 flex-col rounded border border-border bg-background p-1.5 shadow-sm">
            <span className="text-[8px] font-bold text-emerald-500">XLS</span>
            <div className="mt-auto h-1 rounded bg-muted" />
          </div>
          <div className="flex h-20 w-16 flex-col rounded border border-border bg-background p-1.5 shadow-sm">
            <span className="text-[8px] font-bold text-blue-500">DOC</span>
            <div className="mt-auto h-1 rounded bg-muted" />
          </div>
          <div className="flex h-20 w-16 flex-col rounded border border-border bg-background p-1.5 shadow-sm">
            <span className="text-[8px] font-bold text-amber-500">CSV</span>
            <div className="mt-auto h-1 rounded bg-muted" />
          </div>
          <Upload className="absolute right-4 top-4 h-4 w-4 text-amber-500" />
        </div>
      </div>
    ),
  },
  {
    icon: Settings,
    title: "02 · Configuramos tu academia en 24h",
    description:
      "Tu academia tiene su propio subdominio, branding, ciclos activos y catálogo de cursos. Sin tocar una línea de código.",
    visual: (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-card">
        <div className="grid h-full grid-cols-3 gap-2 p-4">
          {[
            "Branding",
            "Subdominio",
            "Ciclos",
            "Cursos",
            "Roles",
            "Pagos",
          ].map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center justify-center rounded border border-amber-400/30 bg-amber-400/5 text-[10px] font-medium text-amber-700 dark:text-amber-300"
            >
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: LinkIcon,
    title: "03 · Profesores y alumnos entran con un link",
    description:
      "Sin descargar app. Solo abren el link, ingresan su DNI o usuario y entran a la intranet.",
    visual: (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-card p-6">
        <div className="mx-auto flex max-w-xs flex-col items-center justify-center gap-3 rounded-xl border border-amber-400/30 bg-amber-400/5 p-4">
          <div className="grid h-12 w-12 place-items-center rounded bg-gradient-to-br from-amber-300 to-amber-600">
            <span className="text-xs font-bold text-amber-950">QR</span>
          </div>
          <div className="text-center">
            <p className="text-xs font-medium">academia-andinos.revolu.pe</p>
            <p className="mt-1 text-[10px] text-muted-foreground">
              Escanea o haz clic
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Activity,
    title: "04 · Mides resultados con dashboards en vivo",
    description:
      "Asistencia, morosos, rendimiento por curso, predictor de ingreso. Todo se actualiza solo.",
    visual: (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-card p-4">
        <div className="grid h-full grid-cols-2 gap-2">
          <div className="rounded border border-border bg-background p-3">
            <p className="text-[9px] text-muted-foreground">Asistencia</p>
            <p className="mt-1 text-lg font-semibold">94%</p>
            <div className="mt-2 h-1 rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "94%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
              />
            </div>
          </div>
          <div className="rounded border border-border bg-background p-3">
            <p className="text-[9px] text-muted-foreground">Pagos al día</p>
            <p className="mt-1 text-lg font-semibold">87%</p>
            <div className="mt-2 h-1 rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "87%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
              />
            </div>
          </div>
          <div className="col-span-2 rounded border border-border bg-background p-3">
            <p className="text-[9px] text-muted-foreground">Predictor UDEP</p>
            <div className="mt-2 flex items-end gap-1">
              {[35, 50, 65, 75, 80, 85, 88].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.05 * i }}
                  className="flex-1 rounded-t bg-gradient-to-t from-amber-500 to-amber-300"
                  style={{ minHeight: "8px" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Cómo funciona"
          title="De Excel disperso a intranet en 4 pasos"
          description="No necesitas migrar nada manualmente. Nosotros importamos tu data actual y la ponemos a funcionar."
        />

        <div className="mt-16">
          <TracingBeam>
            <div className="space-y-20 pl-6 md:pl-0">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="grid gap-6 md:grid-cols-2 md:items-center md:gap-10"
                  >
                    <div>
                      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-amber-400/30 bg-amber-400/10 text-amber-500">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                    {step.visual}
                  </motion.div>
                );
              })}
            </div>
          </TracingBeam>
        </div>
      </Container>
    </section>
  );
}
