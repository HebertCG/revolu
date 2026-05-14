"use client";

const sidebar: Array<[string, boolean, boolean?]> = [
  ["Vista general", true, false],
  ["Alumnos", false, false],
  ["Grupos", false, false],
  ["Exámenes", false, false],
  ["Proctoring", false, true],
  ["Vocacional", false, false],
  ["Materiales", false, false],
];

const cycles: Array<[string, string]> = [
  ["Anual", "1,280"],
  ["Verano", "412"],
  ["Intensivo", "304"],
];

type Kpi = {
  k: string;
  v: string;
  d: string;
  color: "cobalt" | "ink" | "mint" | "coral";
};

const kpis: Kpi[] = [
  { k: "Matrículas hoy", v: "+124", d: "+18%", color: "cobalt" },
  { k: "Alumnos activos", v: "4,812", d: "+2.1%", color: "ink" },
  { k: "Exámenes en curso", v: "37", d: "live", color: "mint" },
  { k: "Alertas IA", v: "2", d: "revisar", color: "coral" },
];

const attendance = [60, 75, 82, 68, 90, 84, 78, 92, 88, 70, 86, 94, 80, 76];

const vocacional: Array<[string, number, "cobalt" | "coral" | "sun"]> = [
  ["Ing. Sistemas", 87, "cobalt"],
  ["Diseño UX", 71, "coral"],
  ["Arquitectura", 58, "sun"],
];

export function DashboardMockup() {
  return (
    <div className="dash-window mx-auto w-full max-w-[1120px] overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-[color:var(--line)] bg-[color:var(--cream)] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-coral-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-sun-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-mint-500" />
        </div>
        <div className="font-mono text-[11px] tracking-wider text-ink-soft">
          app.klassia.io <span className="opacity-30">/</span> dashboard
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-ink">
            <span className="pulse-mint h-1.5 w-1.5 rounded-full" />
            EN VIVO
          </span>
        </div>
      </div>

      {/* Body grid */}
      <div className="grid grid-cols-12 bg-paper">
        {/* Sidebar */}
        <aside className="col-span-2 hidden border-r border-[color:var(--line)] p-4 md:block">
          <div className="mb-3 font-mono text-[10px] tracking-wider text-ink-soft">
            PANEL
          </div>
          {sidebar.map(([label, active, live], i) => (
            <div
              key={i}
              className={`mb-0.5 flex items-center justify-between rounded-md px-2.5 py-1.5 text-[12px] ${
                active
                  ? "bg-cobalt-50 font-medium text-cobalt-700"
                  : "text-ink-soft"
              }`}
            >
              <span>{label}</span>
              {live && <span className="pulse-mint h-1.5 w-1.5 rounded-full" />}
            </div>
          ))}
          <div className="mt-6 border-t border-[color:var(--line)] pt-4">
            <div className="mb-2 font-mono text-[10px] tracking-wider text-ink-soft">
              CICLOS
            </div>
            {cycles.map(([k, v], i) => (
              <div key={i} className="mb-1 flex justify-between text-[11px]">
                <span className="text-ink-soft">{k}</span>
                <span className="font-mono">{v}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main className="col-span-12 p-5 md:col-span-10">
          {/* KPI row */}
          <div className="mb-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            {kpis.map((kpi, i) => (
              <div
                key={i}
                className="rounded-xl border border-[color:var(--line)] p-3"
              >
                <div className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">
                  {kpi.k}
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <div className="num-mono text-2xl font-semibold tracking-tight">
                    {kpi.v}
                  </div>
                  <div
                    className={`font-mono text-[10px] ${
                      kpi.color === "coral"
                        ? "text-coral-600"
                        : kpi.color === "mint"
                          ? "text-mint-700"
                          : kpi.color === "cobalt"
                            ? "text-cobalt-700"
                            : "text-ink-soft"
                    }`}
                  >
                    {kpi.d}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart + proctoring */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
            <div className="relative overflow-hidden rounded-xl border border-[color:var(--line)] p-4 md:col-span-3">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                    Matrículas · últimos 90d
                  </div>
                  <div className="mt-0.5 num-mono text-base font-semibold">
                    2,847{" "}
                    <span className="text-sm font-normal text-ink-soft">
                      nuevas
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 font-mono text-[10px]">
                  <span className="rounded border border-[color:var(--line)] px-1.5 py-0.5 text-ink-soft">
                    30D
                  </span>
                  <span className="rounded bg-ink px-1.5 py-0.5 text-white">
                    90D
                  </span>
                  <span className="rounded border border-[color:var(--line)] px-1.5 py-0.5 text-ink-soft">
                    1A
                  </span>
                </div>
              </div>
              <svg viewBox="0 0 400 130" className="h-32 w-full">
                <defs>
                  <linearGradient id="gFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#2B5BFF" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#2B5BFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[0, 32, 64, 96, 128].map((y, i) => (
                  <line
                    key={i}
                    x1="0"
                    x2="400"
                    y1={y}
                    y2={y}
                    stroke="rgba(10,14,31,0.05)"
                  />
                ))}
                <path
                  d="M0,95 L25,88 L50,92 L75,75 L100,80 L125,65 L150,68 L175,52 L200,58 L225,42 L250,50 L275,38 L300,44 L325,28 L350,32 L375,20 L400,24"
                  fill="none"
                  stroke="#1E3FE6"
                  strokeWidth="2.2"
                  className="spark-path"
                />
                <path
                  d="M0,95 L25,88 L50,92 L75,75 L100,80 L125,65 L150,68 L175,52 L200,58 L225,42 L250,50 L275,38 L300,44 L325,28 L350,32 L375,20 L400,24 L400,130 L0,130 Z"
                  fill="url(#gFill)"
                />
                <circle cx="375" cy="20" r="3.5" fill="#1E3FE6" />
                <circle cx="375" cy="20" r="7" fill="#1E3FE6" opacity="0.18" />
                <line
                  x1="375"
                  y1="20"
                  x2="375"
                  y2="128"
                  stroke="#1E3FE6"
                  strokeOpacity="0.2"
                  strokeDasharray="2 2"
                />
              </svg>
              <div className="mt-2 flex justify-between font-mono text-[10px] text-ink-soft">
                <span>Mar</span>
                <span>Abr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Ago</span>
              </div>
            </div>

            <div className="relative rounded-xl border border-[color:var(--line)] p-4 md:col-span-2">
              <div className="mb-3 flex items-center justify-between">
                <div className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                  Proctoring · sala 04
                </div>
                <span className="flex items-center gap-1 font-mono text-[10px] text-mint-700">
                  <span className="pulse-mint h-1.5 w-1.5 rounded-full" />
                  LIVE
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {Array.from({ length: 9 }).map((_, i) => {
                  const flagged = i === 4;
                  return (
                    <div
                      key={i}
                      className={`relative aspect-[4/3] overflow-hidden rounded-md border bg-[color:var(--cream)] ${
                        flagged
                          ? "border-coral-500"
                          : "border-[color:var(--line)]"
                      }`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          viewBox="0 0 40 40"
                          className={`h-6 w-6 ${
                            flagged
                              ? "text-coral-600"
                              : "text-ink-soft opacity-40"
                          }`}
                        >
                          <circle
                            cx="20"
                            cy="15"
                            r="6"
                            fill="currentColor"
                            opacity="0.55"
                          />
                          <path
                            d="M8 36 C 8 26 32 26 32 36 Z"
                            fill="currentColor"
                            opacity="0.55"
                          />
                        </svg>
                      </div>
                      {flagged && (
                        <div className="absolute left-1 top-1 rounded border border-[#FFC8B6] bg-[#FFE9E1] px-1 font-mono text-[8px] text-coral-600">
                          !FRAUDE
                        </div>
                      )}
                      <div className="absolute bottom-1 left-1 font-mono text-[7px] text-ink-soft">
                        A{(i + 1).toString().padStart(2, "0")}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-3 flex justify-between font-mono text-[10px] text-ink-soft">
                <span>9 alumnos</span>
                <span className="text-coral-600">1 alerta</span>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3">
            <div className="col-span-2 rounded-xl border border-[color:var(--line)] p-3 md:col-span-2">
              <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                Asistencia · semana actual
              </div>
              <div className="flex h-16 items-end gap-1.5">
                {attendance.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      height: `${h}%`,
                      animationDelay: `${i * 60}ms`,
                    }}
                    className="bar flex-1 rounded-t bg-gradient-to-t from-cobalt-100 to-cobalt-500"
                  />
                ))}
              </div>
            </div>
            <div className="hidden rounded-xl border border-[color:var(--line)] bg-[color:var(--cream)] p-3 md:block">
              <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                Test vocacional
              </div>
              <div className="space-y-2">
                {vocacional.map(([k, v, c], i) => (
                  <div key={i}>
                    <div className="mb-1 flex justify-between font-mono text-[10px] text-ink-soft">
                      <span>{k}</span>
                      <span>{v}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full border border-[color:var(--line)] bg-white">
                      <div
                        className={`h-full ${
                          c === "cobalt"
                            ? "bg-cobalt-600"
                            : c === "coral"
                              ? "bg-coral-500"
                              : "bg-sun-500"
                        }`}
                        style={{ width: `${v}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
