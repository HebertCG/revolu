"use client";

import { Container, SectionHeading } from "@/components/ui/container";
import { BentoGrid, BentoCard } from "@/components/animated/bento-grid";
import {
  ClipboardCheck,
  Eye,
  FileText,
  FolderOpen,
  Globe,
  GraduationCap,
  Calendar,
  Layers,
  MessageCircle,
  ScrollText,
  Sigma,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Gestión de usuarios y roles",
    description:
      "Admin, profesor y alumno con acceso por rol. El apoderado recibe avisos en su teléfono asociado al alumno.",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Grupos académicos y ciclos",
    description:
      "Grupos por ciclo (verano, anual, intensivo). Traslado de alumnos entre grupos en un clic.",
    icon: <Layers className="h-4 w-4" />,
  },
  {
    title: "Cursos y horarios par/impar",
    description: "Calendario semanal con soporte de semanas par/impar.",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    title: "Asistencia con enlace público",
    description:
      "Link público por grupo. El apoderado consulta asistencia sin instalar nada ni iniciar sesión.",
    icon: <ClipboardCheck className="h-4 w-4" />,
  },
  {
    title: "Materiales del curso",
    description:
      "Sube materiales del curso (PDF, video, audio) y compártelos por grupo.",
    icon: <FolderOpen className="h-4 w-4" />,
  },
  {
    title: "Tareas y entregables",
    description:
      "Crea tareas con fecha de entrega y compártelas por curso.",
    icon: <ScrollText className="h-4 w-4" />,
  },
  {
    title: "Exámenes con KaTeX",
    description:
      "Editor de preguntas con fórmulas KaTeX inline ($...$) y display ($$...$$).",
    icon: <Sigma className="h-4 w-4" />,
  },
  {
    title: "Proctoring con IA",
    description:
      "8 detecciones en vivo con MediaPipe. Reporte automático post-examen.",
    icon: <Eye className="h-4 w-4" />,
  },
  {
    title: "Test vocacional CHASIDE",
    description:
      "Test adaptativo con modelo ML que predice top-3 carreras y devuelve explicación.",
    icon: <GraduationCap className="h-4 w-4" />,
  },
  {
    title: "Importador desde Word",
    description:
      "Importa tu banco de preguntas desde Word. Detecta enunciados, alternativas e imágenes.",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Landing pages SEO por academia",
    description:
      "Sitio público por academia con catálogo de ciclos y captación por WhatsApp.",
    icon: <Globe className="h-4 w-4" />,
  },
  {
    title: "WhatsApp por curso",
    description:
      "Cada curso publica su grupo de WhatsApp. Los alumnos entran con un clic.",
    icon: <MessageCircle className="h-4 w-4" />,
  },
];

function renderBentoHeader(idx: number) {
  switch (idx) {
    case 0: // Usuarios y roles (lg)
      return (
        <div className="relative h-28 overflow-hidden rounded-lg border border-border bg-muted/40">
          <div className="absolute inset-0 bg-grid-small opacity-30" />
          {["Admin", "Profesor", "Alumno"].map((role, i) => (
            <div
              key={role}
              className="absolute inline-flex items-center gap-1.5 rounded-full border border-indigo-400/30 bg-card px-2.5 py-0.5 text-[10px] font-medium text-indigo-700 dark:text-indigo-300 shadow-sm"
              style={{
                top: `${15 + (i % 2) * 35}%`,
                left: `${15 + (i * 28) % 65}%`,
              }}
            >
              <span className="h-1 w-1 rounded-full bg-indigo-400" />
              {role}
            </div>
          ))}
        </div>
      );
    case 1: // Grupos / ciclos
      return (
        <div className="relative h-20 overflow-hidden rounded-lg border border-border bg-muted/40 p-2">
          <div className="grid h-full grid-cols-3 gap-1.5">
            {["Verano", "Anual", "Intensivo"].map((c, i) => (
              <div
                key={c}
                className={`flex flex-col justify-end rounded p-1.5 text-[9px] font-medium ${
                  i === 1
                    ? "bg-indigo-400/20 text-indigo-700 dark:text-indigo-300"
                    : "bg-card text-muted-foreground"
                }`}
              >
                {c}
                <div
                  className={`mt-1 h-1 rounded-full ${
                    i === 1 ? "bg-indigo-400" : "bg-muted-foreground/30"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      );
    case 2: // Cursos / horarios par/impar
      return (
        <div className="relative h-20 overflow-hidden rounded-lg border border-border bg-muted/40 p-2">
          <div className="grid h-full grid-cols-6 gap-0.5">
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className={`rounded-sm ${
                  [3, 7, 8, 12, 14, 17].includes(i)
                    ? "bg-indigo-400"
                    : [1, 5, 11, 16].includes(i)
                      ? "bg-indigo-400/40"
                      : "bg-card"
                }`}
              />
            ))}
          </div>
        </div>
      );
    case 3: // Asistencia con enlace público
      return (
        <div className="relative flex h-20 items-center justify-center overflow-hidden rounded-lg border border-border bg-muted/40 p-3">
          <div className="flex w-full max-w-[200px] items-center gap-1.5 rounded-full border border-indigo-400/40 bg-card px-2.5 py-1.5 shadow-sm">
            <span className="grid h-3 w-3 place-items-center rounded-full bg-indigo-400/30">
              <span className="h-1 w-1 rounded-full bg-indigo-500" />
            </span>
            <code className="flex-1 truncate font-mono text-[9px] text-muted-foreground">
              klassia.pe/a/g-7K9
            </code>
            <span className="rounded bg-emerald-500/15 px-1 py-px text-[7px] font-bold tracking-wide text-emerald-600 dark:text-emerald-400">
              LIVE
            </span>
          </div>
        </div>
      );
    case 4: // Materiales del curso (lg)
      return (
        <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-lg border border-border bg-muted/40">
          <div className="flex gap-2.5">
            {["PDF", "MP4", "MP3"].map((ext, i) => (
              <div
                key={ext}
                className="flex h-14 w-11 flex-col rounded border border-border bg-card p-1.5 shadow-sm"
                style={{ transform: `rotate(${(i - 1) * 5}deg)` }}
              >
                <span className="text-[8px] font-bold text-indigo-600 dark:text-indigo-400">
                  {ext}
                </span>
                <div className="mt-auto space-y-0.5">
                  <div className="h-0.5 rounded bg-muted" />
                  <div className="h-0.5 w-2/3 rounded bg-muted" />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 5: // Tareas y entregables
      return (
        <div className="relative h-20 overflow-hidden rounded-lg border border-border bg-muted/40 p-2.5">
          <ul className="space-y-1.5">
            {[
              { label: "Resolver Cap. 4", date: "Lun 12" },
              { label: "Lectura crítica", date: "Mié 14" },
              { label: "Ensayo de 800 palabras", date: "Vie 16" },
            ].map((t) => (
              <li
                key={t.label}
                className="flex items-center justify-between gap-2 text-[9px]"
              >
                <div className="flex items-center gap-2">
                  <span className="grid h-3 w-3 place-items-center rounded border border-indigo-500/60 bg-card">
                    <span className="h-1 w-1 rounded-sm bg-indigo-500/40" />
                  </span>
                  <span className="text-card-foreground">{t.label}</span>
                </div>
                <span className="rounded bg-indigo-400/15 px-1 py-px text-[7px] font-medium text-indigo-700 dark:text-indigo-300">
                  {t.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    case 6: // Examen KaTeX
      return (
        <div className="relative flex h-20 items-center justify-center overflow-hidden rounded-lg border border-border bg-muted/40 p-2">
          <code className="font-mono text-base font-semibold text-indigo-600 dark:text-indigo-400">
            ∫₀<sup>π</sup> sin(x) dx = 2
          </code>
        </div>
      );
    case 7: // Proctoring (tall)
      return (
        <div className="relative h-48 overflow-hidden rounded-lg border border-border bg-muted/40">
          <div className="absolute inset-3 rounded border border-indigo-400/30 bg-card">
            <div className="absolute inset-x-3 top-3 h-3 rounded bg-muted" />
            <div className="absolute left-3 top-9 h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400/40 to-emerald-400/40">
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-indigo-400 animate-spin [animation-duration:8s]" />
            </div>
            <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-1.5 py-0.5 text-[9px] font-medium text-emerald-600 dark:text-emerald-400">
              <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
              Vigilando
            </div>
            <div className="absolute inset-x-3 bottom-3 space-y-1">
              <div className="h-1.5 w-full rounded-full bg-muted" />
              <div className="h-1.5 w-2/3 rounded-full bg-muted" />
            </div>
          </div>
        </div>
      );
    case 8: // Vocacional CHASIDE (lg)
      return (
        <div className="relative h-28 overflow-hidden rounded-lg border border-border bg-muted/40 p-3">
          <div className="space-y-2">
            {[
              { label: "Ingeniería", value: 82 },
              { label: "Ciencias", value: 64 },
              { label: "Humanidades", value: 38 },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-2">
                <span className="w-20 truncate text-[10px] text-muted-foreground">
                  {row.label}
                </span>
                <div className="flex-1 h-1.5 rounded-full bg-muted">
                  <div
                    style={{ width: `${row.value}%` }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-emerald-400"
                  />
                </div>
                <span className="text-[10px] font-medium tabular-nums text-indigo-600 dark:text-indigo-400">
                  {row.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    case 9: // Importador de Word
      return (
        <div className="relative flex h-20 items-center justify-center gap-2 overflow-hidden rounded-lg border border-border bg-muted/40">
          <div className="flex h-10 w-9 flex-col rounded border border-border bg-card p-1 shadow-sm">
            <span className="text-[8px] font-bold text-blue-500">DOCX</span>
            <div className="mt-auto space-y-0.5">
              <div className="h-0.5 rounded bg-muted" />
              <div className="h-0.5 w-2/3 rounded bg-muted" />
            </div>
          </div>
          <span className="text-indigo-500">→</span>
          <div className="grid h-10 w-9 place-items-center rounded bg-gradient-to-br from-indigo-300 to-indigo-600 text-[8px] font-bold text-white">
            DB
          </div>
        </div>
      );
    case 10: // Landing SEO
      return (
        <div className="relative h-20 overflow-hidden rounded-lg border border-border bg-muted/40">
          <div className="absolute inset-x-2 top-2 flex h-5 items-center gap-1 rounded border border-border bg-card px-2">
            <span className="h-1 w-1 rounded-full bg-indigo-400" />
            <span className="text-[8px] text-muted-foreground">academia.klassia.pe</span>
          </div>
          <div className="absolute inset-x-2 bottom-2 grid h-9 grid-cols-3 gap-1">
            <div className="rounded bg-indigo-400/30" />
            <div className="rounded bg-card border border-border" />
            <div className="rounded bg-card border border-border" />
          </div>
        </div>
      );
    case 11: // WhatsApp por curso
      return (
        <div className="relative h-20 overflow-hidden rounded-lg border border-border bg-muted/40 p-2">
          <div className="space-y-1.5">
            <div className="flex items-end gap-1.5">
              <div className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500/20 text-[7px] font-bold text-emerald-600 dark:text-emerald-400">
                P
              </div>
              <div className="rounded-lg rounded-bl-sm bg-card px-2 py-1 text-[9px] text-muted-foreground">
                Únete al grupo del curso
              </div>
            </div>
            <div className="flex items-end justify-end gap-1.5">
              <div className="rounded-lg rounded-br-sm bg-indigo-400/20 px-2 py-1 text-[9px] text-indigo-700 dark:text-indigo-300">
                wa.me/...
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export function BentoFeatures() {
  return (
    <section id="funciones" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="12 módulos integrados"
          title="Una intranet, todas las herramientas"
          description="Cada módulo se conecta con los demás. Asistencia, exámenes, materiales y comunicación con el apoderado en una sola plataforma."
        />

        <BentoGrid className="mt-14">
          {features.map((f, idx) => {
            const span =
              idx === 0 ? "lg" : idx === 7 ? "tall" : idx === 8 ? "lg" : undefined;
            return (
              <BentoCard
                key={f.title}
                title={f.title}
                description={f.description}
                icon={f.icon}
                span={span as "lg" | "tall" | undefined}
                header={renderBentoHeader(idx)}
              />
            );
          })}
        </BentoGrid>
      </Container>
    </section>
  );
}
