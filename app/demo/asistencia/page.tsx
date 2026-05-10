import {
  CircleAlert,
  CircleCheck,
  CircleX,
  Clock,
  TrendingUp,
} from "lucide-react";
import {
  demoAttendance,
  demoAttendanceStats,
} from "@/lib/demo-data";

export default function DemoAsistencia() {
  return (
    <div className="mx-auto max-w-7xl">
      <header className="mb-7">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
          Tu progreso
        </p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          Mi <span className="gradient-text-gold">asistencia</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {demoAttendanceStats.totalRecords} registro acumulado
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <PercentCard percentage={demoAttendanceStats.percentage} />
        <CountCard
          label="Presentes"
          value={demoAttendanceStats.presents}
          icon={CircleCheck}
          tone="emerald"
        />
        <CountCard
          label="Tardanzas"
          value={demoAttendanceStats.tardies}
          icon={Clock}
          tone="amber"
        />
        <CountCard
          label="Ausencias"
          value={demoAttendanceStats.absences}
          icon={CircleX}
          tone="rose"
        />
      </div>

      {/* Monthly section */}
      <section className="mt-8">
        <header className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-tight">Abril 2026</h2>
          <div className="flex items-center gap-2 text-[11px] font-semibold tabular-nums">
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
              1 P
            </span>
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300">
              0 T
            </span>
            <span className="rounded-full bg-rose-100 px-2 py-0.5 text-rose-700 dark:bg-rose-400/15 dark:text-rose-300">
              0 A
            </span>
          </div>
        </header>

        <ul className="space-y-2">
          {demoAttendance.map((r) => (
            <li
              key={r.id}
              className="flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3.5 transition-colors hover:border-amber-400/40"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300">
                  <CircleCheck className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold capitalize">
                    {r.formatted}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {r.cycle} · {r.course}
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
                Presente
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Mayo placeholder */}
      <section className="mt-8">
        <header className="mb-4 flex items-end justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Mayo 2026</h2>
          <span className="text-[11px] text-muted-foreground">En curso</span>
        </header>
        <div className="rounded-2xl border border-dashed border-border bg-card/50 px-5 py-10 text-center">
          <CircleAlert className="mx-auto h-6 w-6 text-amber-500" />
          <p className="mt-2 text-sm font-medium">Aún no hay registros este mes</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Las marcas de asistencia aparecerán aquí en cuanto tu profesor las registre.
          </p>
        </div>
      </section>
    </div>
  );
}

function PercentCard({ percentage }: { percentage: number }) {
  return (
    <div className="rounded-2xl border border-amber-300/50 bg-gradient-to-br from-amber-50 to-yellow-50/60 p-5 dark:border-amber-400/15 dark:from-amber-400/[0.08] dark:to-yellow-400/[0.04]">
      <p className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-300">
        <TrendingUp className="h-3 w-3" />
        % asistencia
      </p>
      <div className="mt-2 text-4xl font-semibold tabular-nums gradient-text-gold">
        {percentage}%
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-amber-200/60 dark:bg-amber-400/15">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="mt-3 text-xs text-amber-800 dark:text-amber-200">
        {percentage === 100 ? "Vas excelente. Sigue así." : "Mantén el ritmo."}
      </p>
    </div>
  );
}

function CountCard({
  label,
  value,
  icon: Icon,
  tone,
}: {
  label: string;
  value: number;
  icon: typeof CircleCheck;
  tone: "emerald" | "amber" | "rose";
}) {
  const styles = {
    emerald:
      "border-emerald-300/40 text-emerald-700 dark:border-emerald-400/15 dark:text-emerald-300",
    amber:
      "border-amber-300/40 text-amber-700 dark:border-amber-400/15 dark:text-amber-300",
    rose: "border-rose-300/40 text-rose-700 dark:border-rose-400/15 dark:text-rose-300",
  }[tone];
  const dot = {
    emerald: "bg-emerald-100 dark:bg-emerald-400/15",
    amber: "bg-amber-100 dark:bg-amber-400/15",
    rose: "bg-rose-100 dark:bg-rose-400/15",
  }[tone];
  return (
    <div className={`rounded-2xl border bg-card p-5 ${styles}`}>
      <p className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider">
        <span className={`grid h-5 w-5 place-items-center rounded-md ${dot}`}>
          <Icon className="h-3 w-3" />
        </span>
        {label}
      </p>
      <div className="mt-2 text-4xl font-semibold tabular-nums">{value}</div>
    </div>
  );
}
