"use client";

import { Layers, Building2, TrendingUp, Gauge } from "lucide-react";
import { Container } from "@/components/ui/container";
import { AnimatedCounter } from "@/components/animated/animated-counter";
import { motion } from "motion/react";

const stats = [
  { icon: Layers, value: 14, suffix: "", label: "Módulos integrados", description: "Todo en una sola intranet" },
  { icon: Building2, value: 50, suffix: "+", label: "Academias proyectadas", description: "En el norte del Perú" },
  { icon: TrendingUp, value: 98, suffix: "%", label: "Margen SaaS", description: "Sin costos por usuario extra" },
  { icon: Gauge, value: 80, suffix: "ms", label: "Latencia a Perú", description: "Hosted en Hetzner Ashburn" },
];

export function Stats() {
  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08 }}
                className="group relative bg-card p-6 transition-colors hover:bg-indigo-400/5 sm:p-8"
              >
                <Icon className="h-5 w-5 text-indigo-500 transition-transform group-hover:scale-110" />
                <div className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-sm font-medium text-card-foreground">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
