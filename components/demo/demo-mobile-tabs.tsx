"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Calendar,
  ClipboardList,
  Compass,
  GraduationCap,
  Home,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const items: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/demo", label: "Inicio", icon: Home },
  { href: "/demo/horario", label: "Horario", icon: Calendar },
  { href: "/demo/asistencia", label: "Asist.", icon: ClipboardList },
  { href: "/demo/materiales", label: "Mater.", icon: BookOpen },
  { href: "/demo/examenes", label: "Exámen.", icon: GraduationCap },
  { href: "/demo/vocacional", label: "Vocac.", icon: Compass },
];

export function DemoMobileTabs() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-9 z-20 flex items-center gap-1 overflow-x-auto border-b border-border bg-background/95 px-3 py-2 backdrop-blur lg:hidden">
      {items.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              active
                ? "bg-amber-400 text-amber-950"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
