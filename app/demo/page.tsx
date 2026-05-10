import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CircleCheck,
  ClipboardList,
  Clock,
  PieChart,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  courseAccentClasses,
  demoAcademy,
  demoAttendance,
  demoAttendanceStats,
  demoCourses,
  demoNextClass,
  demoUser,
} from "@/lib/demo-data";

export default function DemoDashboard() {
  const presentRecords = demoAttendance.filter((r) => r.status === "presente");

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header card with greeting + stats + Próxima clase */}
      <section className="grid gap-4 lg:grid-cols-3">
        <div className="relative overflow-hidden rounded-3xl border border-amber-300/40 bg-gradient-to-br from-amber-50 via-amber-50/50 to-yellow-50/40 p-6 dark:border-amber-400/20 dark:from-amber-400/[0.06] dark:via-amber-400/[0.02] dark:to-yellow-400/[0.04] sm:p-8 lg:col-span-2">
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-300/30 blur-3xl dark:bg-amber-400/20"
          />
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Sparkles className="h-3 w-3" />
            {demoUser.greetingTime}
            <span aria-hidden>👋</span>
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Hola,{" "}
            <span className="gradient-text-gold">{demoUser.shortName}</span>
          </h1>
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {demoUser.todayFormatted}
          </div>

          {/* Stats row */}
          <div className="mt-7 grid grid-cols-3 gap-3">
            <StatCard
              label="Cursos"
              value={demoCourses.length.toString()}
              icon={BookOpen}
              tone="amber"
            />
            <StatCard
              label="Hoy"
              value="1"
              icon={Calendar}
              tone="cream"
              hint="clase"
            />
            <StatCard
              label="Asistencia"
              value={`${demoAttendanceStats.percentage}%`}
              icon={TrendingUp}
              tone="emerald"
            />
          </div>
        </div>

        {/* Próxima clase */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-amber-500 to-amber-600 p-6 text-amber-50 shadow-[0_12px_40px_-12px_rgb(245_158_11/0.5)] sm:p-8">
          <div
            aria-hidden
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-300/30 blur-2xl"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-grid-small opacity-10"
          />
          <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-100">
            <Sparkles className="h-3 w-3" />
            Próxima clase
          </p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">
            {demoNextClass.course.name}
          </h2>
          <p className="mt-1 text-sm text-amber-50/80">
            con {demoNextClass.course.professor} · {demoNextClass.course.cycle}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-amber-950/30 px-3 py-2 text-sm font-medium text-amber-50 ring-1 ring-amber-100/20">
            <Clock className="h-4 w-4" />
            {demoNextClass.startLabel} — {demoNextClass.endLabel}
          </div>
          <Link
            href="/demo/materiales"
            className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-900 transition-transform hover:scale-[1.02]"
          >
            Ir a materiales
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* Mis cursos + sidebar widgets */}
      <section className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl border border-border bg-card p-5 sm:p-7 lg:col-span-2">
          <header className="mb-5 flex flex-wrap items-end justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">Mis cursos</h3>
              <p className="text-xs text-muted-foreground">
                {demoCourses.length} cursos este ciclo
              </p>
            </div>
            <Link
              href="/demo/horario"
              className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 hover:underline dark:text-amber-400"
            >
              Ver horario
              <ArrowRight className="h-3 w-3" />
            </Link>
          </header>

          <div className="grid gap-3 sm:grid-cols-2">
            {demoCourses.map((c) => {
              const accent = courseAccentClasses[c.accent];
              return (
                <article
                  key={c.id}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-background p-4 transition-all hover:-translate-y-0.5 hover:border-amber-400/50 hover:shadow-[0_12px_30px_-12px_rgb(245_158_11/0.35)]"
                >
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent.bg}`}
                  />
                  <div className="flex items-start justify-between gap-2">
                    <div
                      className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${accent.bg} text-amber-950 shadow-[0_4px_18px_-4px_rgb(245_158_11/0.4)]`}
                    >
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${accent.chip}`}
                    >
                      {c.cycle} · {c.schedule}
                    </span>
                  </div>
                  <h4 className="mt-3 truncate text-sm font-semibold text-card-foreground">
                    {c.name}
                  </h4>
                  <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold ${accent.chip}`}
                      >
                        {c.professorInitials}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {c.professor}
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-amber-600 dark:text-amber-400">
                      Ver →
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="space-y-4">
          {/* Clases de hoy */}
          <div className="rounded-3xl border border-border bg-card p-5">
            <header className="mb-3 flex items-center justify-between">
              <h3 className="inline-flex items-center gap-2 text-sm font-semibold">
                <Calendar className="h-4 w-4 text-amber-500" />
                Clases de hoy
              </h3>
              <span className="rounded-full bg-amber-400/15 px-2 py-0.5 text-[10px] font-bold text-amber-700 dark:text-amber-300">
                1
              </span>
            </header>
            <div className="rounded-xl border border-amber-300/40 bg-amber-50/50 p-3 dark:border-amber-400/20 dark:bg-amber-400/[0.04]">
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-semibold tracking-tight">
                  {demoNextClass.startLabel}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Rango
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground">
                — {demoNextClass.endLabel}
              </p>
              <div className="mt-3 border-t border-amber-300/30 pt-2 dark:border-amber-400/15">
                <p className="text-xs font-medium text-card-foreground">
                  {demoNextClass.course.name}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {demoNextClass.course.cycle} · {demoNextClass.course.professor}
                </p>
              </div>
            </div>
            <Link
              href="/demo/horario"
              className="mt-3 block w-full rounded-lg border border-border bg-background py-2 text-center text-[10px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:border-amber-400/40 hover:text-amber-600 dark:hover:text-amber-300"
            >
              Ver horario completo
            </Link>
          </div>

          {/* Asistencia global */}
          <div className="rounded-3xl border border-border bg-card p-5">
            <header className="mb-3 flex items-center justify-between">
              <h3 className="inline-flex items-center gap-2 text-sm font-semibold">
                <PieChart className="h-4 w-4 text-amber-500" />
                Asistencia global
              </h3>
              <Link
                href="/demo/asistencia"
                className="text-[11px] font-medium text-amber-600 hover:underline dark:text-amber-400"
              >
                Detalle →
              </Link>
            </header>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-semibold tabular-nums gradient-text-gold">
                {demoAttendanceStats.percentage}%
              </span>
              <span className="text-xs text-muted-foreground">
                {presentRecords.length} asistencias / {demoAttendanceStats.totalRecords} clases
              </span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all"
                style={{ width: `${demoAttendanceStats.percentage}%` }}
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <Tally label="Pres." value={demoAttendanceStats.presents} tone="emerald" />
              <Tally label="Tard." value={demoAttendanceStats.tardies} tone="amber" />
              <Tally label="Ausen." value={demoAttendanceStats.absences} tone="rose" />
            </div>
          </div>

          {/* Últimos registros */}
          <div className="rounded-3xl border border-border bg-card p-5">
            <header className="mb-3 flex items-center justify-between">
              <h3 className="inline-flex items-center gap-2 text-sm font-semibold">
                <ClipboardList className="h-4 w-4 text-amber-500" />
                Últimos registros
              </h3>
              <Link
                href="/demo/asistencia"
                className="text-[11px] font-medium text-amber-600 hover:underline dark:text-amber-400"
              >
                Ver todo →
              </Link>
            </header>
            <ul className="space-y-2">
              {demoAttendance.map((r) => (
                <li
                  key={r.id}
                  className="flex items-center justify-between rounded-xl border border-border bg-background px-3 py-2.5"
                >
                  <div className="flex items-center gap-2">
                    <CircleCheck className="h-4 w-4 text-emerald-500" />
                    <div>
                      <p className="text-xs font-medium">{r.formatted}</p>
                      <p className="text-[10px] text-muted-foreground">{r.cycle}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
                    Presente
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Demo academy hint */}
          <div className="rounded-2xl border border-dashed border-border bg-background px-4 py-3 text-[11px] text-muted-foreground">
            <p className="font-medium text-foreground">{demoAcademy.name}</p>
            <p className="mt-0.5 truncate">{demoAcademy.domain}</p>
            <p className="mt-1 inline-flex items-center gap-1 text-amber-600 dark:text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse-gold" />
              {demoAcademy.ciclo}
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
  tone,
  hint,
}: {
  label: string;
  value: string;
  icon: typeof Sparkles;
  tone: "amber" | "cream" | "emerald";
  hint?: string;
}) {
  const styles = {
    amber:
      "border-amber-300/50 from-amber-100/80 to-amber-50/40 dark:border-amber-400/15 dark:from-amber-400/[0.10] dark:to-amber-400/[0.02]",
    cream:
      "border-yellow-300/50 from-yellow-100/80 to-amber-50/40 dark:border-yellow-400/15 dark:from-yellow-400/[0.10] dark:to-yellow-400/[0.02]",
    emerald:
      "border-emerald-300/50 from-emerald-100/80 to-emerald-50/40 dark:border-emerald-400/15 dark:from-emerald-400/[0.08] dark:to-emerald-400/[0.02]",
  }[tone];
  return (
    <div
      className={`rounded-2xl border bg-gradient-to-br ${styles} px-4 py-3 backdrop-blur`}
    >
      <p className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        <Icon className="h-3 w-3" />
        {label}
      </p>
      <div className="mt-1 flex items-baseline gap-1">
        <span className="text-2xl font-semibold tabular-nums sm:text-3xl">
          {value}
        </span>
        {hint && <span className="text-[10px] text-muted-foreground">{hint}</span>}
      </div>
    </div>
  );
}

function Tally({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "emerald" | "amber" | "rose";
}) {
  const bg = {
    emerald:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300",
    amber:
      "bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300",
    rose: "bg-rose-100 text-rose-700 dark:bg-rose-400/10 dark:text-rose-300",
  }[tone];
  return (
    <div className={`rounded-lg ${bg} px-2 py-2 text-center`}>
      <div className="text-[8px] font-semibold uppercase tracking-wider opacity-70">
        {label}
      </div>
      <div className="text-base font-semibold tabular-nums">{value}</div>
    </div>
  );
}

