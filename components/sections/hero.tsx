"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import {
  Activity,
  ArrowRight,
  PlayCircle,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { ShimmerButton } from "@/components/animated/shimmer-button";
import { TextGenerateEffect } from "@/components/animated/text-generate-effect";
import { Spotlight } from "@/components/animated/spotlight";
import { DashboardMockup } from "@/components/sections/dashboard-mockup";

const SPRING = { stiffness: 80, damping: 16, mass: 0.6 };
const DEFAULT_ROTATE_Y = -14;
const DEFAULT_ROTATE_X = 7;
const DEFAULT_ROTATE_Z = -1.5;
const HOVER_ROTATE_Y_RANGE = 28;
const HOVER_ROTATE_X_RANGE = 22;

export function Hero() {
  const reduce = useReducedMotion();

  const rotateY = useSpring(DEFAULT_ROTATE_Y, SPRING);
  const rotateX = useSpring(DEFAULT_ROTATE_X, SPRING);
  const rotateZ = useSpring(DEFAULT_ROTATE_Z, SPRING);
  const glareX = useSpring(35, SPRING);
  const glareY = useSpring(20, SPRING);

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(200, 210, 255, 0.25), transparent 55%)`;

  function handleMouseMove(e: ReactMouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set(-HOVER_ROTATE_Y_RANGE / 2 + px * HOVER_ROTATE_Y_RANGE);
    rotateX.set(HOVER_ROTATE_X_RANGE / 2 - py * HOVER_ROTATE_X_RANGE);
    rotateZ.set(-2 + (px - 0.5) * 3);
    glareX.set(px * 100);
    glareY.set(py * 100);
  }

  function handleMouseLeave() {
    rotateY.set(DEFAULT_ROTATE_Y);
    rotateX.set(DEFAULT_ROTATE_X);
    rotateZ.set(DEFAULT_ROTATE_Z);
    glareX.set(35);
    glareY.set(20);
  }

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-36"
    >
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />
      <Spotlight
        className="left-full top-10 h-[80vh] w-[50vw] md:left-[55%]"
        fill="#c7d2fe"
      />

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-small opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-400/[0.06] via-transparent to-emerald-400/[0.06] dark:from-indigo-400/[0.08] dark:to-sky-400/[0.06]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-8 xl:gap-12">
          {/* LEFT — copy */}
          <div className="relative z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/8 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-indigo-700 dark:text-indigo-300"
            >
              <Sparkles className="h-3 w-3" />
              Plataforma Educativa · Norte del Perú · 2026
            </motion.div>

            <TextGenerateEffect
              words="La plataforma que convierte tu academia en una institución de élite."
              highlight={["élite"]}
              className="mt-6 text-balance text-left text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.5rem]"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Olvida el WhatsApp para tareas y el Excel para asistencia.{" "}
              <span className="font-medium text-foreground">Klassia</span> centraliza
              gestión académica, proctoring con IA, test vocacional ML y simulacros
              UDEP/UPAO ilimitados en un solo lugar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
            >
              <a href="https://wa.link/9vgb2z" target="_blank" rel="noopener noreferrer">
                <ShimmerButton>
                  Solicitar demo gratis <ArrowRight className="h-4 w-4" />
                </ShimmerButton>
              </a>
              <a
                href="/demo"
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card/50 px-6 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-indigo-400/50 hover:text-indigo-500 dark:hover:text-indigo-400"
              >
                <PlayCircle className="h-4 w-4 text-indigo-500 transition-transform group-hover:scale-110" />
                Ver demo en vivo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-indigo-500" /> Multi-tenant
              </span>
              <span className="hidden h-3 w-px bg-border sm:inline-block" />
              <span className="inline-flex items-center gap-1.5">
                <Activity className="h-3.5 w-3.5 text-indigo-500" /> 14 módulos
              </span>
              <span className="hidden h-3 w-px bg-border sm:inline-block" />
              <span className="inline-flex items-center gap-1.5">&lt;2ms latencia</span>
              <span className="hidden h-3 w-px bg-border sm:inline-block" />
              <span className="inline-flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-indigo-500" /> 99.9% uptime
              </span>
            </motion.div>
          </div>

          {/* RIGHT — tilted mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[640px] lg:max-w-none"
            style={{ perspective: 2000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Ambient glow behind */}
            <div
              aria-hidden
              className="absolute inset-x-6 -bottom-10 h-44 rounded-full bg-indigo-400/20 blur-[110px] dark:bg-indigo-400/30"
            />
            {/* Friendly Students Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20, y: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-16 -left-20 z-20 w-64 md:w-72 pointer-events-none drop-shadow-2xl"
            >
              <img 
                src="/students-illustration.png" 
                alt="Estudiantes emocionados viendo Klassia" 
                className="w-full h-auto"
              />
            </motion.div>
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 bg-gradient-radial from-indigo-300/15 via-transparent to-transparent blur-2xl"
            />

            {/* The tilted card */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                rotateZ,
                transformStyle: "preserve-3d",
                transformPerspective: 2000,
              }}
              className="relative will-change-transform"
            >
              <DashboardMockup />

              {/* Glare overlay that follows the cursor */}
              <motion.div
                aria-hidden
                style={{ background: glareBackground }}
                className="pointer-events-none absolute inset-0 rounded-2xl mix-blend-screen"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
