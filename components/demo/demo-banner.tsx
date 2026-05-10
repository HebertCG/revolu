import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export function DemoBanner() {
  return (
    <div className="sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-amber-400/30 bg-gradient-to-r from-amber-400/15 via-yellow-300/10 to-amber-400/15 px-4 py-2 text-xs backdrop-blur-md sm:px-6">
      <div className="flex items-center gap-2 truncate">
        <span className="inline-flex h-5 items-center gap-1 rounded-full bg-amber-500 px-2 text-[10px] font-bold uppercase tracking-wider text-amber-950">
          <Sparkles className="h-2.5 w-2.5" />
          Modo demo
        </span>
        <span className="hidden truncate text-muted-foreground sm:inline">
          Datos ficticios · Las acciones de guardar están desactivadas
        </span>
        <span className="truncate text-muted-foreground sm:hidden">
          Datos ficticios
        </span>
      </div>
      <Link
        href="/"
        className="inline-flex h-7 items-center gap-1 rounded-full border border-amber-400/40 bg-card/60 px-3 text-[11px] font-medium text-foreground transition-colors hover:border-amber-400 hover:text-amber-600 dark:hover:text-amber-300"
      >
        <ArrowLeft className="h-3 w-3" />
        Volver a la web
      </Link>
    </div>
  );
}
