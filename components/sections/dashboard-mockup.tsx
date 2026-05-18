"use client";

import {
  ArrowRight,
  BookOpen,
  Calendar,
  ClipboardList,
  GraduationCap,
  Home,
  type LucideIcon,
  LogOut,
  PieChart,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const sidebarItems: { icon: LucideIcon; label: string; active?: boolean }[] = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Calendar, label: "Horario" },
  { icon: ClipboardList, label: "Asistencia" },
  { icon: BookOpen, label: "Materiales" },
  { icon: GraduationCap, label: "Exámenes" },
  { icon: Sparkles, label: "Test vocacional" },
];

const courses = [
  {
    name: "Razonamiento Matemático",
    professor: "Hebert Cornejo",
    initials: "HC",
    icon: BookOpen,
  },
  {
    name: "Razonamiento Verbal",
    professor: "Prof. Carrillo",
    initials: "PC",
    icon: GraduationCap,
  },
  {
    name: "Álgebra · Aritmética",
    professor: "Armando Alama",
    initials: "AA",
    icon: Sparkles,
  },
  {
    name: "Geometría",
    professor: "Prof. Modesto",
    initials: "PM",
    icon: ClipboardList,
  },
];

export function DashboardMockup() {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white/90 p-2 shadow-2xl backdrop-blur-md">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-indigo-400/10"
      />
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="ml-3 flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[10px] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            intranet.andinos-piura.klassia.lat
          </div>
        </div>

        <div className="grid grid-cols-12 gap-0">
          {/* Sidebar — dark intranet */}
          <aside className="col-span-3 hidden flex-col bg-slate-950 p-3 text-slate-200 md:flex md:min-h-[460px]">
            <div className="mb-4 flex items-center gap-2 px-2">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-indigo-400 to-indigo-600 text-xs font-bold text-white">
                K
              </span>
              <div className="leading-tight">
                <p className="text-[10px] font-semibold tracking-wide text-white">
                  Andinos Piura
                </p>
                <p className="text-[8px] uppercase tracking-wider text-slate-400">
                  Intranet
                </p>
              </div>
            </div>

            <div className="mb-4 rounded-lg border border-slate-800 bg-slate-900 p-2">
              <div className="flex items-center gap-2">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 text-[9px] font-bold text-white">
                  AZ
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[10px] font-medium text-slate-100">
                    Adrianzen Zapata Kri…
                  </p>
                  <p className="flex items-center gap-1 text-[8px] text-indigo-300">
                    <span className="h-1 w-1 rounded-full bg-indigo-400" />
                    Estudiante
                  </p>
                </div>
              </div>
            </div>

            <ul className="space-y-0.5">
              {sidebarItems.map(({ icon: Icon, label, active }) => (
                <li key={label}>
                  <div
                    className={
                      active
                        ? "flex items-center justify-between gap-2 rounded-md bg-indigo-500/15 px-2 py-1.5 text-[10px] font-medium text-indigo-300 ring-1 ring-indigo-500/25"
                        : "flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] text-slate-400 hover:text-slate-200"
                    }
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon className="h-3 w-3" />
                      {label}
                    </span>
                    {active && <ArrowRight className="h-2.5 w-2.5" />}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-3">
              <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] text-slate-400">
                <LogOut className="h-3 w-3" />
                Cerrar sesión
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="col-span-12 bg-white p-4 md:col-span-9 md:p-5">
            {/* Header row: greeting + próxima clase */}
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50/80 to-sky-50/40 p-4 md:col-span-2">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                  Hola,{" "}
                  <span className="text-indigo-600">Adrianzen</span>
                </h3>
                <div className="mt-2 inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white/70 px-2 py-0.5 text-[10px] text-slate-500">
                  <Calendar className="h-2.5 w-2.5" />
                  Viernes, 08/05/2026
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <StatPill
                    label="Cursos"
                    value="4"
                    tone="indigo"
                    icon={BookOpen}
                  />
                  <StatPill
                    label="Hoy"
                    value="1 clase"
                    tone="sky"
                    icon={Calendar}
                  />
                  <StatPill
                    label="Asistencia"
                    value="100%"
                    tone="emerald"
                    icon={TrendingUp}
                  />
                </div>
              </div>

              {/* Próxima clase highlight */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 p-4 text-indigo-50 shadow-[0_8px_30px_-12px_rgb(99_102_241/0.6)]">
                <div
                  aria-hidden
                  className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-sky-300/30 blur-2xl"
                />
                <p className="inline-flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-wider text-indigo-200">
                  <Sparkles className="h-2.5 w-2.5" />
                  Próxima clase
                </p>
                <h4 className="mt-2 text-base font-semibold leading-tight text-white">
                  Razonamiento Matemático
                </h4>
                <p className="mt-1 text-[10px] leading-snug text-indigo-100/80">
                  con Hebert Cornejo · UDEP
                </p>
                <div className="mt-3 inline-flex items-center gap-2">
                  <span className="rounded-md bg-indigo-950/30 px-2 py-1 text-[10px] font-medium text-indigo-50 ring-1 ring-indigo-300/20">
                    06:00 — 08:00 PM
                  </span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-md bg-white/15 px-2 py-1 text-[10px] font-medium text-white ring-1 ring-white/20 transition-colors hover:bg-white/25"
                  >
                    Ir <ArrowRight className="h-2.5 w-2.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mis cursos */}
            <section className="mt-3">
              <div className="mb-2 flex items-baseline justify-between">
                <div>
                  <h4 className="text-sm font-semibold tracking-tight text-slate-900">
                    Mis cursos
                  </h4>
                  <p className="text-[10px] text-slate-500">
                    4 cursos este ciclo
                  </p>
                </div>
                <span className="text-[10px] font-medium text-indigo-600">
                  Ver horario →
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {courses.map((c) => {
                  const Icon = c.icon;
                  return (
                    <article
                      key={c.name}
                      className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2.5"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-amber-300 to-amber-500"
                      />
                      <div className="flex items-start justify-between gap-1">
                        <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-amber-300 to-amber-500 text-white">
                          <Icon className="h-3 w-3" />
                        </div>
                        <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[7px] font-semibold uppercase tracking-wider text-amber-700">
                          UDEP · SÁBADOS
                        </span>
                      </div>
                      <h5 className="mt-2 truncate text-[11px] font-semibold text-slate-900">
                        {c.name}
                      </h5>
                      <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-1.5">
                        <div className="flex items-center gap-1">
                          <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-amber-100 text-[6px] font-semibold text-amber-700">
                            {c.initials}
                          </span>
                          <span className="truncate text-[8px] text-slate-500">
                            {c.professor}
                          </span>
                        </div>
                        <span className="text-[8px] text-indigo-600">
                          Ver →
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* Bottom row */}
            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
              {/* Clases de hoy */}
              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <div className="mb-2 flex items-center justify-between">
                  <p className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-tight text-slate-900">
                    <Calendar className="h-2.5 w-2.5 text-indigo-500" />
                    Clases de hoy
                  </p>
                  <span className="rounded-full bg-indigo-100 px-1.5 py-0.5 text-[8px] font-semibold tabular-nums text-indigo-700">
                    1
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-md border border-indigo-200 bg-indigo-50/50 px-3 py-2.5">
                  <div className="flex flex-col items-center justify-center border-r border-indigo-200 pr-3">
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-indigo-700">
                      18:00
                    </span>
                    <span className="text-[8px] text-slate-500">— 20:00</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[10px] font-semibold text-slate-900">
                      Razonamiento Mat.
                    </p>
                    <p className="truncate text-[9px] text-slate-500">
                      UDEP · Hebert Cornejo
                    </p>
                  </div>
                </div>
              </div>

              {/* Asistencia global */}
              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <div className="mb-2 flex items-center justify-between">
                  <p className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-tight text-slate-900">
                    <PieChart className="h-2.5 w-2.5 text-emerald-500" />
                    Asistencia global
                  </p>
                  <span className="text-[9px] font-medium text-indigo-600">
                    Detalle →
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <span className="bg-gradient-to-br from-indigo-600 to-indigo-800 bg-clip-text text-2xl font-semibold tabular-nums text-transparent">
                      100%
                    </span>
                    <p className="text-[8px] text-slate-500">1 / 1 clases</p>
                  </div>
                  <div className="grid flex-1 grid-cols-3 gap-1 text-center">
                    <Tally label="Pres." value={1} tone="emerald" />
                    <Tally label="Tard." value={0} tone="amber" />
                    <Tally label="Ausen." value={0} tone="rose" />
                  </div>
                </div>
                <div className="mt-2 h-1 w-full rounded-full bg-slate-100">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-emerald-400 to-indigo-500" />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function StatPill({
  label,
  value,
  tone,
  icon: Icon,
}: {
  label: string;
  value: string;
  tone: "indigo" | "sky" | "emerald";
  icon: LucideIcon;
}) {
  const styles = {
    indigo: "from-indigo-100/90 to-indigo-50/60 border-indigo-200",
    sky: "from-sky-100/90 to-sky-50/60 border-sky-200",
    emerald: "from-emerald-100/90 to-emerald-50/60 border-emerald-200",
  }[tone];
  return (
    <div className={`rounded-lg border bg-gradient-to-br ${styles} px-2.5 py-2`}>
      <div className="flex items-center gap-1 text-[8px] font-semibold uppercase tracking-wider text-slate-500">
        <Icon className="h-2.5 w-2.5" />
        {label}
      </div>
      <div className="mt-0.5 text-lg font-semibold tabular-nums text-slate-900">
        {value}
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
    emerald: "bg-emerald-100/70 text-emerald-700",
    amber: "bg-amber-100/70 text-amber-700",
    rose: "bg-rose-100/70 text-rose-700",
  }[tone];
  return (
    <div className={`rounded-md ${bg} px-1.5 py-1.5`}>
      <div className="text-[7px] font-semibold uppercase tracking-wider opacity-70">
        {label}
      </div>
      <div className="text-sm font-semibold tabular-nums">{value}</div>
    </div>
  );
}
