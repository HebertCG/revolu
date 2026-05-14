import { Globe, Link as LinkIcon, MessageCircle } from "lucide-react";

function Logo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M6 6 L6 26 M6 16 L18 6 M6 16 L18 26 M22 6 L26 16 L22 26"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const productLinks = [
  "Características",
  "Proctoring IA",
  "Vocacional ML",
  "Precios",
  "Changelog",
];
const companyLinks = [
  "Sobre Klassia",
  "Casos de éxito",
  "Blog",
  "Carreras",
  "Contacto",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pb-10 pt-20 text-white">
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mb-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-2.5">
              <Logo className="h-7 w-7" />
              <span className="text-[20px] font-semibold tracking-tight">
                Klassia
              </span>
            </a>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/65">
              El sistema operativo para academias, colegios e institutos que ya
              están construyendo la educación de 2030.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[MessageCircle, Globe, LinkIcon].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 bg-white/5 text-white/75 transition hover:bg-white/10 hover:text-white"
                  aria-label="Social link"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-white/50">
                Producto
              </div>
              <ul className="space-y-2 text-[13px] text-white/75">
                {productLinks.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-white/50">
                Compañía
              </div>
              <ul className="space-y-2 text-[13px] text-white/75">
                {companyLinks.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-white/50">
                Contacto
              </div>
              <ul className="space-y-2 text-[13px] text-white/75">
                <li>hola@klassia.pe</li>
                <li>Piura · Perú</li>
                <li>Hecho en casa, con manos peruanas</li>
                <li className="flex items-center gap-1.5 text-mint-500">
                  <span className="pulse-mint h-1.5 w-1.5 rounded-full" />
                  Sistemas operativos
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 font-mono text-[12px] text-white/55 sm:flex-row sm:items-center">
          <div>
            © 2026 Klassia Education S.A.C. — Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="transition hover:text-white">
              Privacidad
            </a>
            <a href="#" className="transition hover:text-white">
              Términos
            </a>
            <a href="#" className="transition hover:text-white">
              Seguridad
            </a>
          </div>
        </div>

        <div className="mt-12 overflow-hidden">
          <div className="select-none bg-gradient-to-b from-white/15 via-white/5 to-transparent bg-clip-text text-center text-[19vw] font-semibold leading-[0.85] tracking-[-0.06em] text-transparent">
            KLASSIA
          </div>
        </div>
      </div>
    </footer>
  );
}
