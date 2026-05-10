import { ExternalLink, FileText } from "lucide-react";
import { demoMaterials } from "@/lib/demo-data";

export default function DemoMateriales() {
  return (
    <div className="mx-auto max-w-7xl">
      <header className="mb-7">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
          Recursos del ciclo
        </p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          Mis <span className="gradient-text-gold">materiales</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {demoMaterials.reduce((acc, w) => acc + w.count, 0)} archivos disponibles ·
          Organizados por semana
        </p>
      </header>

      <div className="space-y-10">
        {demoMaterials.map((week) => (
          <section key={week.week}>
            <header className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="h-6 w-1 rounded-full bg-gradient-to-b from-amber-400 to-amber-600"
                />
                <h2 className="text-xl font-semibold tracking-tight">
                  Semana {week.week}
                </h2>
              </div>
              <span className="rounded-full bg-amber-400/15 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700 dark:text-amber-300">
                {week.count} recursos
              </span>
            </header>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {week.items.map((m) => (
                <article
                  key={m.id}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-amber-400/50 hover:shadow-[0_12px_30px_-12px_rgb(245_158_11/0.35)]"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-orange-300 via-amber-400 to-amber-500 text-amber-950 shadow-[0_8px_22px_-8px_rgb(245_158_11/0.5)]">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-bold text-orange-700 dark:bg-orange-400/15 dark:text-orange-300">
                      {m.type}
                    </span>
                  </div>
                  <h3 className="mt-3 truncate text-sm font-semibold text-card-foreground">
                    {m.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">Semana {week.week}</p>
                  {m.size && (
                    <p className="mt-0.5 text-[10px] text-muted-foreground">{m.size}</p>
                  )}
                  <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                    <div>
                      <p className="text-[10px] font-semibold tracking-wide text-amber-600 dark:text-amber-400">
                        {m.cycle}
                      </p>
                      <p className="text-[10px] text-muted-foreground">{m.date}</p>
                    </div>
                    <span className="grid h-7 w-7 place-items-center rounded-full text-muted-foreground transition-colors group-hover:bg-amber-400/10 group-hover:text-amber-600 dark:group-hover:text-amber-300">
                      <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
