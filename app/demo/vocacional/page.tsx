import {
  ArrowRight,
  Award,
  BadgeCheck,
  Brain,
  CircleAlert,
  Clock,
  Database,
  Lock,
  Sparkles,
  Target,
} from "lucide-react";
import {
  demoVocational,
  demoVocationalSample,
} from "@/lib/demo-data";

export default function DemoVocacional() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Hero card */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-indigo-500 to-indigo-600 p-8 text-indigo-50 shadow-[0_24px_60px_-20px_rgb(99_102_241/0.5)] sm:p-12">
        <div
          aria-hidden
          className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-grid-small opacity-15"
        />
        <span className="relative inline-flex items-center gap-1.5 rounded-full bg-indigo-950/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-indigo-50 ring-1 ring-indigo-100/20">
          <Sparkles className="h-3 w-3" />
          Powered by IA
        </span>
        <h1 className="relative mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
          Descubre tu
          <br />
          <span className="bg-gradient-to-r from-indigo-50 via-sky-100 to-indigo-100 bg-clip-text text-transparent">
            carrera ideal
          </span>
        </h1>
        <p className="relative mt-5 max-w-2xl text-base leading-relaxed text-indigo-50/80 sm:text-lg">
          Un test psicológico validado + un modelo de machine learning analizando 7 áreas de tu
          personalidad para sugerirte las carreras más afines.
        </p>

        <div className="relative mt-8 flex flex-wrap gap-2">
          <Pill icon={Brain} label={`${demoVocational.questions} preguntas`} />
          <Pill icon={Target} label={`${demoVocational.careers} carreras`} />
          <Pill icon={Clock} label={`~${demoVocational.durationMinutes} minutos`} />
          <Pill icon={BadgeCheck} label={`${demoVocational.precision}% precisión`} />
        </div>
      </section>

      {/* Practice mode warning */}
      {demoVocational.practiceMode && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-indigo-300/50 bg-indigo-50 px-4 py-3 dark:border-indigo-400/20 dark:bg-indigo-400/[0.06]">
          <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
          <div className="text-xs">
            <p className="font-semibold text-indigo-900 dark:text-indigo-200">
              Sistema en modo de práctica
            </p>
            <p className="mt-0.5 text-indigo-800/80 dark:text-indigo-200/80">
              Este módulo está en fase de prueba. Los resultados son orientativos y no reemplazan
              la asesoría de un profesional. Puedes usarlo con normalidad.
            </p>
          </div>
        </div>
      )}

      {/* Test card */}
      <section className="mt-6 grid gap-5 lg:grid-cols-3">
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 lg:col-span-2">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-300 to-indigo-600 text-white shadow-[0_8px_24px_-8px_rgb(99_102_241/0.5)]">
              <Brain className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                Cuestionario CHASIDE
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">
                Test Vocacional CHASIDE
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Cuestionario de orientación vocacional basado en el modelo CHASIDE. Las
                respuestas son binarias (Sí / No) y miden afinidad a 7 áreas: Ciencias exactas,
                Humanísticas, Artísticas, Salud, Investigación, Defensa y Ejecutivas.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-5">
            <button
              type="button"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 px-6 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgb(99_102_241/0.5)] transition-transform hover:scale-[1.02]"
            >
              Comenzar test
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Sparkles className="h-3 w-3 text-indigo-500" />
              Tus respuestas se guardan automáticamente
            </span>
          </div>
        </div>

        {/* Sample preview */}
        <aside className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Resultado de muestra
          </p>
          <h3 className="mt-1 text-base font-semibold">Tus 3 carreras top</h3>
          <ul className="mt-4 space-y-3">
            {demoVocationalSample.topCareers.map((c, i) => (
              <li key={c.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="inline-flex items-center gap-2">
                    <span
                      className={`grid h-6 w-6 place-items-center rounded-md text-[10px] font-bold ${
                        i === 0
                          ? "bg-gradient-to-br from-indigo-400 to-indigo-600 text-white"
                          : "bg-indigo-400/15 text-indigo-700 dark:text-indigo-300"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="font-medium">{c.name}</span>
                  </span>
                  <span className="text-xs font-semibold tabular-nums text-indigo-600 dark:text-indigo-400">
                    {c.match}%
                  </span>
                </div>
                <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600"
                    style={{ width: `${c.match}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[11px] text-muted-foreground">
            Resultado ilustrativo. Al completar el test verás tus 7 áreas con explicación
            detallada.
          </p>
        </aside>
      </section>

      {/* How it works */}
      <section className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-6 text-zinc-100 sm:p-10">
        <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400">
          <Sparkles className="h-3 w-3" />
          ¿Cómo funciona?
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Transparencia total sobre tus resultados
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-zinc-400">
          No es magia ni adivinación. Aquí te explicamos exactamente con qué base científica y
          qué tecnología analizamos tus respuestas.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <DarkCard
            icon={Brain}
            badge="Validado"
            badgeIcon={Award}
            title="Test CHASIDE"
            body={
              <>
                Cuestionario psicológico de{" "}
                <span className="font-semibold text-zinc-100">dominio público</span>{" "}
                ampliamente utilizado por orientadores escolares en Perú y América Latina.
                Mide tu afinidad en 7 áreas vocacionales: Administrativas, Humanísticas,
                Artísticas, Salud, Investigación, Defensa y Ejecutivas.
              </>
            }
          />
          <DarkCard
            icon={Sparkles}
            badge="99.8% precisión"
            badgeIcon={BadgeCheck}
            title="Modelo de Machine Learning"
            body={
              <>
                Una{" "}
                <span className="font-semibold text-zinc-100">
                  regresión logística multinomial
                </span>{" "}
                entrenada con 20,000 perfiles sintéticos analiza tus respuestas y calcula la
                probabilidad de afinidad con cada una de las 25 carreras del catálogo. Es
                transparente, auditable y reproducible.
              </>
            }
          />
          <DarkCard
            icon={Lock}
            badge="Privado"
            badgeIcon={Database}
            title="Tus datos, tu control"
            body={
              <>
                Tus respuestas se guardan únicamente en tu cuenta y solo el equipo académico
                puede verlas para asesorarte. <span className="font-semibold text-zinc-100">Nunca</span>{" "}
                las vendemos ni las usamos para publicidad. Puedes rendir el test las veces que
                quieras durante el modo de práctica.
              </>
            }
          />
        </div>

        <p className="mt-7 text-[11px] text-zinc-500">
          <span className="font-semibold text-zinc-300">Nota honesta:</span> el resultado es una
          recomendación basada en patrones, no un destino. La decisión final sobre tu carrera
          siempre debe combinar este análisis con conversaciones con tu familia, docentes y
          orientadores profesionales.
        </p>
      </section>
    </div>
  );
}

function Pill({
  icon: Icon,
  label,
}: {
  icon: typeof Sparkles;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-950/25 px-3 py-1.5 text-xs font-semibold text-indigo-50 ring-1 ring-indigo-100/20 backdrop-blur">
      <Icon className="h-3 w-3" />
      {label}
    </span>
  );
}

function DarkCard({
  icon: Icon,
  badge,
  badgeIcon: BadgeIcon,
  title,
  body,
}: {
  icon: typeof Sparkles;
  badge: string;
  badgeIcon: typeof Sparkles;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
      <div className="flex items-start justify-between gap-2">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-zinc-800 text-indigo-400">
          <Icon className="h-4 w-4" />
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-950 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-300">
          <BadgeIcon className="h-2.5 w-2.5" />
          {badge}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-50">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{body}</p>
    </div>
  );
}
