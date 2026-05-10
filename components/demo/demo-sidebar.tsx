"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Calendar,
  ChevronRight,
  ClipboardList,
  Compass,
  GraduationCap,
  Home,
  LogOut,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { demoUser, demoAcademy } from "@/lib/demo-data";

const navItems: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/demo", label: "Dashboard", icon: Home },
  { href: "/demo/horario", label: "Horario", icon: Calendar },
  { href: "/demo/asistencia", label: "Asistencia", icon: ClipboardList },
  { href: "/demo/materiales", label: "Materiales", icon: BookOpen },
  { href: "/demo/examenes", label: "Exámenes", icon: GraduationCap },
  { href: "/demo/vocacional", label: "Test vocacional", icon: Compass },
];

export function DemoSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col bg-zinc-950 text-zinc-200 lg:flex">
      {/* Spacer for the demo banner (~32px) */}
      <div className="h-9" aria-hidden />

      {/* Brand */}
      <div className="flex items-center gap-2.5 px-5 pt-5 pb-4">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-amber-300 to-amber-600 text-amber-950 font-bold shadow-[0_0_18px_-4px_rgb(245_158_11/0.6)]">
          R
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold gradient-text-gold">{demoAcademy.name}</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            Intranet
          </p>
        </div>
      </div>

      {/* User card */}
      <div className="mx-3 mb-4 rounded-xl border border-zinc-800 bg-zinc-900/80 p-2.5">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-amber-300 to-amber-600 text-xs font-bold text-amber-950 shadow-[0_0_18px_-6px_rgb(245_158_11/0.5)]">
            {demoUser.initials}
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs font-medium text-zinc-100">
              {demoUser.shortName} Zapata Kri…
            </p>
            <p className="flex items-center gap-1 text-[10px] text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse-gold" />
              {demoUser.role}
            </p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-amber-400/15 text-amber-300 ring-1 ring-amber-400/25 shadow-[0_0_18px_-8px_rgb(245_158_11/0.5)]"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200",
                  )}
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Icon className="h-4 w-4" />
                    {label}
                  </span>
                  {active && <ChevronRight className="h-3.5 w-3.5" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="border-t border-zinc-900 p-3">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-200"
        >
          <LogOut className="h-4 w-4" />
          Cerrar sesión
        </Link>
      </div>
    </aside>
  );
}
