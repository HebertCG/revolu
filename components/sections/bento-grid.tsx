"use client";

import type { ReactNode } from "react";
import {
  ArrowRight,
  Calendar,
  Camera,
  CheckSquare,
  FileText,
  Folder,
  Globe,
  Link as LinkIcon,
  MessageCircle,
  Play,
  Sigma,
  Users,
  Wand2,
  Compass,
} from "lucide-react";
import { Reveal } from "@/components/animated/reveal";
import { Spot } from "@/components/animated/spot";
import { SectionHeader } from "@/components/sections/section-header";

type Tone = "white" | "cream" | "mist" | "dark";

function BentoCard({
  icon: Icon,
  mono,
  title,
  desc,
  tone = "white",
  className = "",
  children,
}: {
  icon?: React.ComponentType<{ className?: string }>;
  mono?: string;
  title: string;
  desc: string;
  tone?: Tone;
  className?: string;
  children?: ReactNode;
}) {
  const isDark = tone === "dark";
  const bg =
    tone === "cream"
      ? "card-cream"
      : tone === "mist"
        ? "card-mist"
        : tone === "dark"
          ? "card-dark"
          : "";

  return (
    <Spot className={`card ${bg} flex flex-col rounded-3xl p-6 md:p-7 ${className}`}>
      <div className="relative z-10 flex h-full flex-col">
        {children && <div className="mb-6 flex-1">{children}</div>}
        <div className={children ? "mt-auto" : ""}>
          {Icon && (
            <div
              className={`mb-4 grid h-9 w-9 place-items-center rounded-lg border ${
                isDark
                  ? "border-white/15 bg-white/10 text-white"
                  : "border-[color:var(--line)] bg-white text-cobalt-700"
              }`}
            >
              <Icon className="h-4 w-4" />
            </div>
          )}
          {mono && (
            <div
              className={`mb-2 font-mono text-[10px] uppercase tracking-wider ${
                isDark ? "text-white/55" : "text-ink-soft"
              }`}
            >
              {mono}
            </div>
          )}
          <h3
            className={`mb-2 text-[17px] font-semibold tracking-tight md:text-[19px] ${
              isDark ? "text-white" : "text-ink"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-[13.5px] leading-relaxed ${
              isDark ? "text-white/65" : "text-ink-soft"
            }`}
          >
            {desc}
          </p>
        </div>
      </div>
    </Spot>
  );
}

function VRoles() {
  const items: Array<{
    label: string;
    x: string;
    color: "cobalt" | "ink" | "coral";
    glow?: boolean;
  }> = [
    { label: "Admin", x: "left-2 top-2", color: "cobalt", glow: true },
    { label: "Profesor", x: "left-24 top-16", color: "ink" },
    { label: "Alumno", x: "right-16 top-2", color: "ink" },
    { label: "Apoderado", x: "right-2 bottom-2", color: "coral" },
  ];
  return (
    <div className="relative h-44">
      {items.map((n, i) => (
        <div
          key={i}
          className={`absolute ${n.x} flex items-center gap-2 rounded-lg border px-2.5 py-1.5 font-mono text-[11px] ${
            n.glow
              ? "border-cobalt-100 bg-cobalt-50 text-cobalt-700"
              : n.color === "coral"
                ? "border-[#FFC8B6] bg-[#FFE9E1] text-coral-600"
                : "border-[color:var(--line-strong)] bg-white text-ink"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              n.color === "cobalt"
                ? "bg-cobalt-500"
                : n.color === "coral"
                  ? "bg-coral-500"
                  : "bg-ink"
            }`}
          />
          {n.label}
        </div>
      ))}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 240 180"
        fill="none"
        aria-hidden
      >
        <path
          d="M40 30 L 80 76 L 60 110 L 180 150"
          stroke="rgba(10,14,31,0.15)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <path
          d="M40 30 L 180 30"
          stroke="rgba(10,14,31,0.15)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
      </svg>
    </div>
  );
}

function VCycles() {
  const groups = [
    { c: "Ciclo VERANO", n: 412, dot: "bg-sun-500" },
    { c: "Ciclo ANUAL", n: 1280, dot: "bg-cobalt-600", active: true },
    { c: "Ciclo INTENSIVO", n: 304, dot: "bg-coral-500" },
  ];
  return (
    <div className="space-y-2">
      {groups.map((g, i) => (
        <div
          key={i}
          className={`flex items-center justify-between rounded-lg border p-2.5 ${
            g.active
              ? "border-cobalt-100 bg-cobalt-50"
              : "border-[color:var(--line)] bg-white"
          }`}
        >
          <div className="flex items-center gap-2.5">
            <span className={`h-1.5 w-1.5 rounded-full ${g.dot}`} />
            <span className="font-mono text-[11px]">{g.c}</span>
          </div>
          <span className="font-mono text-[11px] text-ink-soft">
            {g.n} alumnos
          </span>
        </div>
      ))}
      <div className="flex items-center gap-1.5 pt-1 font-mono text-[10px] text-ink-soft">
        <ArrowRight className="h-3 w-3" /> traslado 1-clic
      </div>
    </div>
  );
}

function VSchedule() {
  return (
    <div>
      <div className="mb-1.5 grid grid-cols-7 gap-1 text-center font-mono text-[9px] text-ink-soft">
        {["L", "M", "X", "J", "V", "S", "D"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 21 }).map((_, i) => {
          const week = Math.floor(i / 7);
          const odd = week % 2 === 0;
          const has = [0, 2, 4, 7, 9, 14, 16, 18].includes(i);
          return (
            <div
              key={i}
              className={`aspect-square rounded ${
                has
                  ? odd
                    ? "border border-cobalt-700 bg-cobalt-500"
                    : "border border-cobalt-500 bg-cobalt-100"
                  : "border border-[color:var(--line)] bg-white"
              }`}
            />
          );
        })}
      </div>
      <div className="mt-3 flex items-center gap-3 font-mono text-[9px] text-ink-soft">
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-sm bg-cobalt-500" />
          PAR
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-sm border border-cobalt-500 bg-cobalt-100" />
          IMPAR
        </span>
      </div>
    </div>
  );
}

function VLink() {
  const rows: Array<[string, string, "mint" | "sun"]> = [
    ["A. Cruz", "Presente", "mint"],
    ["M. Reyes", "Tarde", "sun"],
    ["L. Vela", "Presente", "mint"],
  ];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between rounded-lg border border-[color:var(--line-strong)] bg-white px-3 py-2.5 font-mono text-[11px]">
        <span className="truncate text-ink-soft">
          klassia.io/
          <span className="font-semibold text-cobalt-700">a/helios/3b</span>
        </span>
        <LinkIcon className="h-3.5 w-3.5 shrink-0 text-ink-soft" />
      </div>
      <div className="space-y-1.5">
        {rows.map(([n, s, c], i) => (
          <div
            key={i}
            className="flex items-center justify-between font-mono text-[11px]"
          >
            <span className="text-ink-soft">{n}</span>
            <span
              className={`flex items-center gap-1 ${
                c === "mint" ? "text-mint-700" : "text-[#A87614]"
              }`}
            >
              <span
                className={`h-1 w-1 rounded-full ${
                  c === "mint" ? "bg-mint-500" : "bg-sun-500"
                }`}
              />
              {s}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VMaterials() {
  const files = [
    {
      name: "Sesion-04-derivadas.pdf",
      size: "2.1 MB",
      Icon: FileText,
      tone: "cobalt" as const,
    },
    {
      name: "Repaso-trigonometria.mp4",
      size: "84 MB",
      Icon: Play,
      tone: "coral" as const,
    },
    {
      name: "Podcast-historia-perú.mp3",
      size: "12 MB",
      Icon: MessageCircle,
      tone: "sun" as const,
    },
  ];
  return (
    <div className="flex flex-col gap-1.5">
      {files.map((f, i) => (
        <div
          key={i}
          className="flex items-center gap-2.5 rounded-lg border border-[color:var(--line)] bg-white p-2"
        >
          <div
            className={`grid h-7 w-7 place-items-center rounded-md ${
              f.tone === "cobalt"
                ? "bg-cobalt-50 text-cobalt-700"
                : f.tone === "coral"
                  ? "bg-[#FFE9E1] text-coral-600"
                  : "bg-[#FFF6DA] text-[#A87614]"
            }`}
          >
            <f.Icon className="h-3.5 w-3.5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[11px] text-ink">{f.name}</div>
            <div className="font-mono text-[9px] text-ink-soft">{f.size}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function VTasks() {
  const tasks: Array<[string, string, boolean]> = [
    ["Entregable: Ensayo PG", "vence 14 nov", true],
    ["Quiz: cinemática", "vence 16 nov", false],
    ["Lab: pH e indicadores", "vence 20 nov", false],
  ];
  return (
    <div className="space-y-2">
      {tasks.map(([t, d, done], i) => (
        <div
          key={i}
          className="flex items-center gap-2.5 rounded-lg border border-[color:var(--line)] bg-white p-2"
        >
          <div
            className={`grid h-4 w-4 place-items-center rounded ${
              done
                ? "border-cobalt-600 bg-cobalt-600"
                : "border border-[color:var(--line-strong)]"
            }`}
          >
            {done && (
              <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-white">
                <path
                  d="m3 6 2 2 4-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div
              className={`text-[12px] ${
                done ? "text-ink-soft line-through" : "text-ink"
              }`}
            >
              {t}
            </div>
            <div className="font-mono text-[10px] text-ink-soft">{d}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function VKatexDark() {
  return (
    <div className="flex h-full flex-col items-center justify-center py-6 text-white">
      <div className="font-serif-italic text-[34px] leading-none">
        ∫<span className="align-super text-[18px]">∞</span>
        <span className="mx-1">e</span>
        <span className="align-super text-[18px]">−x²</span>
        <span className="mx-1">dx</span>
        <span className="mx-1 text-white/55">=</span>
        <span className="inline-block align-middle">
          <span className="block border-b border-white/70 px-1 text-[20px]">
            √π
          </span>
          <span className="block px-1 text-center text-[20px]">2</span>
        </span>
      </div>
      <div className="mt-3 font-mono text-[10px] tracking-wider text-white/55">
        KATEX · INLINE + DISPLAY
      </div>
    </div>
  );
}

function VVocational() {
  const rows: Array<[string, number, string]> = [
    ["Ing. Sistemas", 87, "bg-cobalt-600"],
    ["Diseño UX", 71, "bg-coral-500"],
    ["Arquitectura", 58, "bg-sun-500"],
  ];
  return (
    <div className="space-y-2.5">
      {rows.map(([k, v, c], i) => (
        <div key={i}>
          <div className="mb-1 flex justify-between font-mono text-[11px]">
            <span className="text-ink">{k}</span>
            <span className="text-ink-soft">{v}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-[color:var(--line)]">
            <div className={`h-full ${c}`} style={{ width: `${v}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function VProctor() {
  const ds = [
    "Rostro",
    "Mirada",
    "Pestaña",
    "Sonido",
    "Personas",
    "Postura",
    "Móvil",
    "Ventana",
  ];
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {ds.map((d, i) => (
        <div
          key={i}
          className={`flex items-center gap-1.5 rounded border px-2 py-1.5 font-mono text-[10px] ${
            i === 2
              ? "border-coral-500/40 bg-[#FFE9E1] text-coral-600"
              : "border-[color:var(--line)] bg-white text-ink-soft"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              i === 2 ? "bg-coral-500" : "bg-mint-500"
            }`}
          />
          <span>{d}</span>
        </div>
      ))}
    </div>
  );
}

function VImport() {
  return (
    <div className="relative">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5 rounded-lg border border-[color:var(--line-strong)] bg-white px-2.5 py-1.5 font-mono text-[11px]">
          <FileText className="h-3.5 w-3.5 text-ink-soft" /> banco.docx
        </div>
        <ArrowRight className="h-3.5 w-3.5 text-ink-soft" />
        <div className="rounded-lg border border-cobalt-100 bg-cobalt-50 px-2.5 py-1.5 font-mono text-[11px] text-cobalt-700">
          +147 preguntas
        </div>
      </div>
      <div className="space-y-1.5 font-mono text-[11px]">
        <div className="flex justify-between text-ink-soft">
          <span>Enunciados</span>
          <span className="text-mint-700">147 OK</span>
        </div>
        <div className="flex justify-between text-ink-soft">
          <span>Alternativas</span>
          <span className="text-mint-700">588 OK</span>
        </div>
        <div className="flex justify-between text-ink-soft">
          <span>Imágenes</span>
          <span className="text-mint-700">23 OK</span>
        </div>
        <div className="flex justify-between text-ink-soft">
          <span>Conflictos</span>
          <span className="text-[#A87614]">0</span>
        </div>
      </div>
    </div>
  );
}

function VSeo() {
  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-[color:var(--line-strong)] bg-white">
        <div className="flex items-center gap-2 border-b border-[color:var(--line)] bg-[color:var(--cream)] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-coral-500" />
          <span className="h-2 w-2 rounded-full bg-sun-500" />
          <span className="ml-auto font-mono text-[10px] text-ink-soft">
            helios.klassia.io
          </span>
        </div>
        <div className="p-3">
          <div className="mb-1.5 text-[12px] font-semibold">
            Academia Helios
          </div>
          <div className="space-y-1">
            {[
              "Ciclo Verano 2026 → S/ 480",
              "Pre-UNI Anual → S/ 1,200",
              "Intensivo Sept → S/ 320",
            ].map((s, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded border border-[color:var(--line)] px-2 py-1 font-mono text-[10px] text-ink-soft"
              >
                <span>{s}</span>
                <ArrowRight className="h-3 w-3 text-ink-soft" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VWhats() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative">
        <div className="max-w-[220px] rounded-2xl rounded-bl-sm border border-[#A3E8CD] bg-[#E6FBF2] px-3 py-2">
          <div className="mb-1 font-mono text-[10px] text-mint-700">
            Grupo · Matemáticas 5A
          </div>
          <div className="text-[12px] text-ink">
            Bienvenidos al grupo del curso 🎓
          </div>
        </div>
        <div className="ml-auto mt-2 max-w-[200px] rounded-2xl rounded-br-sm border border-[color:var(--line)] bg-white px-3 py-2">
          <div className="text-[12px] text-ink">Profe, ¿hay clase mañana?</div>
        </div>
      </div>
    </div>
  );
}

export function BentoGrid() {
  return (
    <section
      id="herramientas"
      className="relative border-y border-[color:var(--line)] bg-[color:var(--cream)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          num="02"
          label="Suite completa · 12 módulos"
          accent="Herramientas"
          title={
            <>
              Todo lo que tu academia necesita,
              <br />
              <span className="font-serif-italic text-cobalt-700">
                en un solo lugar
              </span>
              .
            </>
          }
          kicker="Doce módulos integrados, una sola base de datos. Sin parches, sin Excel, sin WhatsApps perdidos."
        />

        <div
          id="proctoring"
          className="stagger grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
        >
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <BentoCard
              tone="white"
              mono="01 · GESTIÓN"
              title="Gestión de usuarios y roles"
              desc="Admin, profesor y alumno con acceso por rol. El apoderado recibe avisos en su teléfono asociado al alumno."
              className="h-full"
            >
              <VRoles />
            </BentoCard>
          </Reveal>
          <Reveal className="lg:col-span-2">
            <BentoCard
              icon={Users}
              mono="02 · GRUPOS"
              title="Grupos académicos y ciclos"
              desc="Grupos por ciclo (verano, anual, intensivo). Traslado de alumnos entre grupos en un clic."
            >
              <VCycles />
            </BentoCard>
          </Reveal>
          <Reveal className="lg:col-span-2">
            <BentoCard
              icon={Calendar}
              tone="mist"
              mono="03 · HORARIO"
              title="Cursos y horarios par/impar"
              desc="Calendario semanal con soporte de semanas par/impar. Ajustes por grupo y por curso."
            >
              <VSchedule />
            </BentoCard>
          </Reveal>

          <Reveal className="lg:col-span-2">
            <BentoCard
              icon={LinkIcon}
              mono="04 · ASISTENCIA"
              title="Asistencia con enlace público"
              desc="Link público por grupo. El apoderado consulta asistencia sin instalar nada ni iniciar sesión."
            >
              <VLink />
            </BentoCard>
          </Reveal>
          <Reveal className="lg:col-span-2">
            <BentoCard
              icon={Folder}
              mono="05 · MATERIALES"
              title="Materiales del curso"
              desc="Sube materiales del curso (PDF, video, audio) y compártelos por grupo en segundos."
            >
              <VMaterials />
            </BentoCard>
          </Reveal>

          <Reveal className="lg:col-span-3">
            <BentoCard
              icon={CheckSquare}
              mono="06 · TAREAS"
              title="Tareas y entregables"
              desc="Crea tareas con fecha de entrega y compártelas por curso. Recordatorios automáticos al alumno y apoderado."
            >
              <VTasks />
            </BentoCard>
          </Reveal>
          <Reveal className="lg:col-span-3">
            <BentoCard
              icon={Sigma}
              tone="dark"
              mono="07 · EXÁMENES"
              title="Exámenes con KaTeX"
              desc="Editor de preguntas con fórmulas KaTeX inline y display. Imágenes, código, multimedia."
            >
              <VKatexDark />
            </BentoCard>
          </Reveal>

          <div id="vocacional" className="contents">
            <Reveal className="lg:col-span-2">
              <BentoCard
                icon={Compass}
                mono="08 · VOCACIONAL"
                title="Test vocacional CHASIDE"
                desc="Test adaptativo con modelo ML que predice top-3 carreras y devuelve explicación."
              >
                <VVocational />
              </BentoCard>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-2">
            <BentoCard
              icon={Camera}
              tone="mist"
              mono="09 · PROCTORING"
              title="Proctoring con IA"
              desc="8 detecciones en vivo con MediaPipe. Reporte automático post-examen."
            >
              <VProctor />
            </BentoCard>
          </Reveal>
          <Reveal className="lg:col-span-2">
            <BentoCard
              icon={Wand2}
              mono="10 · IMPORT"
              title="Importador desde Word"
              desc="Importa tu banco de preguntas desde Word. Detecta enunciados, alternativas e imágenes."
            >
              <VImport />
            </BentoCard>
          </Reveal>

          <Reveal className="lg:col-span-3">
            <BentoCard
              icon={Globe}
              mono="11 · SEO"
              title="Landing pages SEO por academia"
              desc="Sitio público por academia con catálogo de ciclos y captación por WhatsApp."
            >
              <VSeo />
            </BentoCard>
          </Reveal>
          <Reveal className="lg:col-span-3">
            <BentoCard
              icon={MessageCircle}
              mono="12 · WHATSAPP"
              title="WhatsApp por curso"
              desc="Cada curso publica su grupo de WhatsApp. Los alumnos entran con un clic."
            >
              <VWhats />
            </BentoCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
