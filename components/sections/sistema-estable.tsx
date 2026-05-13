"use client";

import { Container, SectionHeading } from "@/components/ui/container";
import { motion } from "motion/react";
import { Activity, CheckCircle2, Server, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function SistemaEstable() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Arquitectura Cloud"
          title="Sistema sobresaliente y estable"
          description="Diseñado para soportar miles de alumnos concurrentes. Nuestra infraestructura se escala automáticamente para garantizar que tu academia nunca experimente caídas ni lentitud."
        />

        <div className="relative mt-14 mx-auto max-w-5xl">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative rounded-2xl border border-border bg-card/40 backdrop-blur-xl p-4 sm:p-8 shadow-2xl">
            <div className="grid gap-6 md:grid-cols-3">
              {/* Left Column: Metrics */}
              <div className="space-y-4">
                <MetricCard
                  title="Uptime (Mensual)"
                  value="99.99%"
                  icon={<Activity className="h-4 w-4 text-emerald-500" />}
                  trend="+0.01%"
                />
                <MetricCard
                  title="Latencia Media"
                  value="12ms"
                  icon={<Zap className="h-4 w-4 text-sky-500" />}
                  trend="-2ms"
                />
                <MetricCard
                  title="Estado Servidores"
                  value="Óptimo"
                  icon={<Shield className="h-4 w-4 text-indigo-500" />}
                  status="active"
                />
              </div>

              {/* Center & Right Column: Animated Server Stack */}
              <div className="md:col-span-2 relative rounded-xl border border-indigo-500/20 bg-background/50 p-6 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                <h4 className="relative text-sm font-semibold mb-6 flex items-center gap-2">
                  <Server className="h-4 w-4 text-indigo-400" />
                  Cluster Principal
                  <span className="relative flex h-2 w-2 ml-auto">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </h4>

                <div className="relative space-y-4">
                  {[1, 2, 3].map((server) => (
                    <motion.div
                      key={server}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: server * 0.15 }}
                      className="group relative flex items-center justify-between rounded-lg border border-indigo-400/20 bg-indigo-500/5 p-4 transition-colors hover:bg-indigo-500/10"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-8 w-8 rounded bg-indigo-500/20 grid place-items-center">
                          <Server className="h-4 w-4 text-indigo-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            Nodo {server === 1 ? 'Alpha' : server === 2 ? 'Beta' : 'Gamma'}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Sincronizado y activo
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <div className="hidden sm:flex flex-col gap-1">
                          <div className="flex gap-1">
                            {[...Array(12)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ height: "4px" }}
                                animate={{
                                  height: mounted ? ["4px", `${Math.random() * 16 + 4}px`, "4px"] : "4px"
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  delay: Math.random() * 2,
                                  ease: "easeInOut"
                                }}
                                className="w-1.5 rounded-full bg-indigo-500/40 group-hover:bg-indigo-400"
                              />
                            ))}
                          </div>
                        </div>
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function MetricCard({ 
  title, 
  value, 
  icon, 
  trend, 
  status 
}: { 
  title: string; 
  value: string; 
  icon: React.ReactNode;
  trend?: string;
  status?: "active";
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-muted">
          {icon}
        </div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
      </div>
      <div className="flex items-end justify-between">
        <h4 className="text-2xl font-bold tracking-tight">{value}</h4>
        {trend && (
          <span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
            {trend}
          </span>
        )}
        {status === "active" && (
          <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            En línea
          </span>
        )}
      </div>
    </div>
  );
}
