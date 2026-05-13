"use client";

import { ShimmerButton } from "@/components/animated/shimmer-button";
import { Sparkles } from "@/components/animated/sparkles";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";

export function CTAFinal() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-indigo-400/30 bg-gradient-to-br from-indigo-400/[0.08] via-card to-emerald-300/[0.05] dark:from-indigo-400/[0.12] dark:via-card dark:to-sky-500/[0.06]">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-grid-small opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
          />
          <div
            aria-hidden
            className="absolute -top-20 left-1/2 -z-10 h-72 w-[120%] -translate-x-1/2 rounded-full bg-indigo-400/20 blur-[100px] dark:bg-indigo-500/30"
          />
          <Sparkles count={28} className="opacity-60 dark:opacity-100" />

          <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:px-12 sm:py-24">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-indigo-700 dark:text-indigo-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse-primary" />
              Tu próximo paso
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              Tu academia merece más que
              <br />
              <span className="gradient-text-gold">WhatsApp y Excel.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Solicita una demo personalizada de 30 minutos sin costo. Te mostramos Klassia
              funcionando con los datos reales de tu academia, sin compromisos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <ShimmerButton className="h-14 px-8 text-base">
                Solicitar demo gratuita <ArrowRight className="h-4 w-4" />
              </ShimmerButton>
              <a
                href="#precios"
                className="inline-flex h-14 items-center gap-2 rounded-full border border-border bg-background/60 px-7 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-indigo-400/50 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                Ver precios
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
            >
              <span>14 días gratis</span>
              <span className="hidden h-3 w-px bg-border sm:inline-block" />
              <span>Sin tarjeta de crédito</span>
              <span className="hidden h-3 w-px bg-border sm:inline-block" />
              <span>Cancela cuando quieras</span>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
