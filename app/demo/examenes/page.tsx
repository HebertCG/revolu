import {
  ArrowRight,
  Calendar,
  Clock,
  Eye,
  GraduationCap,
  ListChecks,
  Shield,
  Sparkles,
} from "lucide-react";
import { demoExams } from "@/lib/demo-data";

export default function DemoExamenes() {
  const active = demoExams.filter((e) => e.status === "active");
  const scheduled = demoExams.filter((e) => e.status === "scheduled");

  return (
    <div className="mx-auto max-w-7xl">
      <header className="mb-7 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
            Evaluaciones
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
            Mis <span className="gradient-text-gold">exámenes</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {active.length} activo · {scheduled.length} programado
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-300">
          <Shield className="h-3 w-3" />
          Proctoring con IA disponible
        </span>
      </header>

      {/* Active */}
      <section>
        <header className="mb-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Disponibles ahora
          </h2>
        </header>
        <div className="space-y-3">
          {active.map((exam) => (
            <article
              key={exam.id}
              className="relative overflow-hidden rounded-3xl border border-amber-300/40 bg-gradient-to-br from-amber-50 via-amber-50/40 to-yellow-50/30 p-6 dark:border-amber-400/20 dark:from-amber-400/[0.06] dark:via-amber-400/[0.02] dark:to-yellow-400/[0.04] sm:p-8"
            >
              <div
                aria-hidden
                className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-amber-300/20 blur-3xl dark:bg-amber-400/20"
              />
              <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Activo
                    </span>
                    {exam.proctored && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                        <Eye className="h-2.5 w-2.5" />
                        Proctoring IA
                      </span>
                    )}
                    <span className="text-[11px] uppercase tracking-wide text-muted-foreground">
                      {exam.cycle}
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    {exam.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {exam.course} · {exam.professor}
                  </p>

                  <dl className="mt-5 grid grid-cols-3 gap-3">
                    <Stat
                      icon={Clock}
                      label="Duración"
                      value={`${exam.duration} min`}
                    />
                    <Stat
                      icon={ListChecks}
                      label="Preguntas"
                      value={exam.questions.toString()}
                    />
                    <Stat
                      icon={Calendar}
                      label="Cierre"
                      value="15 may · 6 PM"
                    />
                  </dl>

                  {exam.topics.length > 0 && (
                    <div className="mt-5">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Temas
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {exam.topics.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-border bg-card px-2.5 py-0.5 text-[11px] text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-stretch gap-2 lg:items-end">
                  <button
                    type="button"
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-500 px-6 text-sm font-semibold text-amber-950 shadow-[0_8px_24px_-8px_rgb(245_158_11/0.5)] transition-transform hover:scale-[1.02]"
                  >
                    Iniciar examen
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <p className="text-center text-[10px] text-muted-foreground lg:text-right">
                    Recomendamos resolver con buena conexión
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Scheduled */}
      <section className="mt-10">
        <header className="mb-3 flex items-center gap-2">
          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Programados
          </h2>
        </header>
        <div className="space-y-3">
          {scheduled.map((exam) => (
            <article
              key={exam.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <div className="min-w-0">
                <p className="text-sm font-semibold tracking-tight">
                  {exam.title}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {exam.deadline} · {exam.questions} preguntas
                </p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                <Clock className="h-3 w-3" />
                {exam.duration} min
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* Encouragement */}
      <section className="mt-10 rounded-3xl border border-dashed border-border bg-card/40 p-6 text-center sm:p-8">
        <span className="grid mx-auto h-10 w-10 place-items-center rounded-full bg-amber-400/15 text-amber-600 dark:text-amber-300">
          <GraduationCap className="h-5 w-5" />
        </span>
        <h3 className="mt-3 text-lg font-semibold">¿Listo para más práctica?</h3>
        <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
          REVOLU genera variantes ilimitadas de exámenes a partir de tu banco de Word.
          Cuando tu docente programe uno nuevo aparecerá aquí.
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 px-3 py-1 text-[11px] font-semibold text-amber-700 dark:text-amber-300">
          <Sparkles className="h-3 w-3" />
          Motor de simulacros UDEP/UPAO
        </span>
      </section>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card/70 p-3 backdrop-blur">
      <p className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        <Icon className="h-3 w-3" />
        {label}
      </p>
      <p className="mt-1 text-base font-semibold tabular-nums">{value}</p>
    </div>
  );
}
