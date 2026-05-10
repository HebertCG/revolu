"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  courseAccentClasses,
  demoAcademy,
  demoSchedule,
} from "@/lib/demo-data";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Today is Friday, May 8, 2026 (matches user data)
const TODAY_DAY = 5;

const dayLabels = [
  { short: "LUN", num: "04", index: 1 },
  { short: "MAR", num: "05", index: 2 },
  { short: "MIÉ", num: "06", index: 3 },
  { short: "JUE", num: "07", index: 4 },
  { short: "VIE", num: "08", index: 5 },
  { short: "SÁB", num: "09", index: 6 },
  { short: "DOM", num: "10", index: 7 },
];

const condensedHours = [16, 17, 18, 19, 20, 21]; // 4pm – 9pm
const fullHours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

const formatHour = (h: number) => {
  if (h === 12) return "12 p.m.";
  if (h === 0) return "12 a.m.";
  return h < 12 ? `${String(h).padStart(2, "0")} a.m.` : `${String(h - 12).padStart(2, "0")} p.m.`;
};

export default function DemoHorario() {
  const [fullDay, setFullDay] = useState(false);
  const hours = fullDay ? fullHours : condensedHours;
  const rowHeight = fullDay ? 56 : 80;

  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
            Tu semana
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
            Mi <span className="gradient-text-gold">horario</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {demoAcademy.year} · Semana <span className="font-semibold text-foreground">{demoAcademy.weekNumber}</span> del ciclo · {demoAcademy.weekRange}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 items-center gap-1.5 rounded-full bg-gradient-to-b from-amber-400 to-amber-500 px-5 text-xs font-semibold text-amber-950 shadow-[0_4px_18px_-4px_rgb(245_158_11/0.5)] transition-transform hover:scale-[1.02]"
          >
            Hoy
          </button>
          <button
            type="button"
            aria-label="Semana anterior"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-amber-400/40 hover:text-amber-600 dark:hover:text-amber-300"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Semana siguiente"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-amber-400/40 hover:text-amber-600 dark:hover:text-amber-300"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-300">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse-gold" />
          {demoSchedule.length} clases
        </span>
        <button
          type="button"
          onClick={() => setFullDay((v) => !v)}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-amber-400/40 hover:text-amber-600 dark:hover:text-amber-300"
        >
          {fullDay ? "Ver solo turno noche" : "Ver día completo"}
        </button>
      </div>

      {/* Calendar grid */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        {/* Day headers */}
        <div className="grid grid-cols-[60px_repeat(7,minmax(0,1fr))] border-b border-border">
          <div className="border-r border-border" />
          {dayLabels.map((d) => {
            const isToday = d.index === TODAY_DAY;
            return (
              <div
                key={d.short}
                className={cn(
                  "flex flex-col items-center gap-1 border-r border-border py-3 text-center last:border-r-0",
                  isToday && "bg-amber-50/60 dark:bg-amber-400/[0.04]",
                )}
              >
                <span
                  className={cn(
                    "text-[10px] font-semibold uppercase tracking-[0.2em]",
                    isToday
                      ? "text-amber-600 dark:text-amber-300"
                      : "text-muted-foreground",
                  )}
                >
                  {d.short}
                </span>
                <span
                  className={cn(
                    "text-base font-semibold tabular-nums",
                    isToday &&
                      "grid h-7 w-7 place-items-center rounded-full bg-gradient-to-b from-amber-400 to-amber-500 text-amber-950",
                  )}
                >
                  {d.num}
                </span>
              </div>
            );
          })}
        </div>

        {/* Time grid */}
        <div
          className="relative grid grid-cols-[60px_repeat(7,minmax(0,1fr))]"
          style={{ minHeight: `${hours.length * rowHeight}px` }}
        >
          {/* Hour labels column */}
          <div className="relative border-r border-border bg-muted/30">
            {hours.map((h, i) => (
              <div
                key={h}
                className="flex items-start justify-end pr-2 pt-1.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground"
                style={{
                  height: `${rowHeight}px`,
                  borderTop: i === 0 ? undefined : "1px solid rgb(var(--border))",
                }}
              >
                {formatHour(h)}
              </div>
            ))}
          </div>

          {/* Day columns */}
          {dayLabels.map((d) => {
            const isToday = d.index === TODAY_DAY;
            return (
              <div
                key={d.short}
                className={cn(
                  "relative border-r border-border last:border-r-0",
                  isToday && "bg-amber-50/40 dark:bg-amber-400/[0.03]",
                )}
                style={{ height: `${hours.length * rowHeight}px` }}
              >
                {/* Hour cell separators */}
                {hours.map((h, i) => (
                  <div
                    key={h}
                    className="absolute inset-x-0 border-t border-dashed border-border/60"
                    style={{ top: `${i * rowHeight}px`, height: `${rowHeight}px` }}
                  />
                ))}

                {/* Class blocks */}
                {demoSchedule
                  .filter((s) => s.day === d.index)
                  .map((s) => {
                    const startIdx = hours.indexOf(s.startHour);
                    const endIdx = hours.indexOf(s.endHour);
                    if (startIdx < 0) return null;
                    const top = startIdx * rowHeight;
                    const height =
                      ((endIdx >= 0 ? endIdx : hours.length) - startIdx) * rowHeight;
                    const accent = courseAccentClasses[s.course.accent];
                    return (
                      <div
                        key={`${s.day}-${s.course.id}`}
                        className={cn(
                          "absolute left-1.5 right-1.5 overflow-hidden rounded-xl border p-2.5 text-left transition-shadow hover:shadow-[0_8px_22px_-8px_rgb(245_158_11/0.4)]",
                          accent.soft,
                          accent.border,
                        )}
                        style={{
                          top: `${top + 4}px`,
                          height: `${height - 8}px`,
                        }}
                      >
                        <span
                          aria-hidden
                          className={`absolute inset-y-2 left-0 w-0.5 rounded-full bg-gradient-to-b ${accent.bg}`}
                        />
                        <p
                          className={cn(
                            "truncate text-xs font-semibold leading-tight",
                            accent.text,
                          )}
                        >
                          {s.course.shortName}
                        </p>
                        <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
                          {s.course.cycle}
                        </p>
                        <p className="mt-1.5 text-[10px] tabular-nums text-muted-foreground">
                          06:00 p.m. – 08:00 p.m.
                        </p>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Course legend */}
      <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from(new Set(demoSchedule.map((s) => s.course.id))).map((courseId) => {
          const cls = demoSchedule.find((s) => s.course.id === courseId)!.course;
          const accent = courseAccentClasses[cls.accent];
          return (
            <div
              key={cls.id}
              className={cn(
                "flex items-center gap-3 rounded-xl border bg-card p-3",
                accent.border,
              )}
            >
              <span
                className={cn(
                  "h-8 w-1 rounded-full bg-gradient-to-b",
                  accent.bg,
                )}
                aria-hidden
              />
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold">{cls.name}</p>
                <p className="truncate text-[10px] text-muted-foreground">
                  {cls.professor}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
