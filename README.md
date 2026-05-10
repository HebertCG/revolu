# REVOLU — Landing comercial

Landing visual de la intranet con IA para academias preuniversitarias del norte del Perú.

> **Nota:** Esta es solo la landing comercial (vitrina). La intranet real (multi-tenant, proctoring, simulacros, etc.) vive en otro repositorio. Los botones de esta landing son **visuales** — todavía no tienen handlers reales.

## Stack

- **Next.js 16** (App Router · React Server Components · Turbopack)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4** (config en CSS, sin `tailwind.config.js`)
- **Motion 12** (antes Framer Motion)
- **next-themes** (dark/light toggle)
- **lucide-react** (iconos)
- **cobe** (globo 3D del Perú/LATAM)
- `clsx` + `tailwind-merge` para `cn()`
- `class-variance-authority` para variants

## Estética

- Paleta **dorada/ámbar** (`amber-400` → `gold-600`) sobre tema oscuro/claro toggleable
- Animaciones inspiradas en [21st.dev](https://21st.dev) y [ui.aceternity.com](https://ui.aceternity.com), portadas y adaptadas a la paleta dorada
- Tipografía Geist Sans/Mono
- `prefers-reduced-motion` respetado en todas las animaciones

## Cómo correrlo

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # producción optimizada
npm run start  # servir el build
```

## Estructura

```
app/
├── layout.tsx        # ThemeProvider + metadata SEO + JSON-LD
├── page.tsx          # composición de las 16 secciones
├── globals.css       # tokens dark/light + animaciones CSS
├── sitemap.ts        # /sitemap.xml
└── robots.ts         # /robots.txt

components/
├── animated/         # AuroraBackground, BackgroundBeams, Spotlight,
│                     # TextGenerateEffect, BentoGrid, CardHoverEffect,
│                     # InfiniteMovingCards, TracingBeam, Lamp, Sparkles,
│                     # Meteors, Globe (cobe), ShimmerButton,
│                     # FloatingNavbar, ScrollProgress, AnimatedCounter
├── sections/         # Hero, Stats, Problem/Solution, Diferenciadores,
│                     # BentoFeatures, ComoFunciona, MotorSimulacros,
│                     # MultiTenant, Pricing, Calculadora, Testimonios,
│                     # HechoEnPeru, FAQ, CTAFinal, Footer, DashboardMockup
├── ui/               # Button, Container/SectionHeading, Accordion
├── theme-provider.tsx
└── theme-toggle.tsx

lib/
└── utils.ts          # cn() helper

public/
├── favicon.svg       # logo "R" en gradient dorado
└── og-image.svg      # OpenGraph 1200×630
```

## Secciones (en orden)

1. **FloatingNavbar** — aparece al scroll up, desaparece al scroll down
2. **Hero** — Spotlight + TextGenerateEffect + dashboard mockup CSS-only
3. **Stats** — 4 contadores animados al entrar al viewport
4. **Problem/Solution** — split antes/después
5. **Diferenciadores** — 3 cards con CardHoverEffect
6. **BentoFeatures** — 14 módulos en bento asimétrico
7. **ComoFunciona** — 4 pasos con TracingBeam (línea dorada al scroll)
8. **MotorSimulacros** — pipeline IA + pregunta KaTeX-style
9. **MultiTenant** — diagrama radial de academias aisladas
10. **Pricing** — 3 planes, toggle Mensual/Anual
11. **Calculadora** — sliders interactivos de ahorro
12. **Testimonios** — InfiniteMovingCards con marquees
13. **HechoEnPeru** — Globe (cobe) + ciudades LATAM
14. **FAQ** — Accordion con 8 preguntas
15. **CTAFinal** — Lamp effect + Sparkles + Meteors
16. **Footer** — 4 columnas + bottom bar

## Próximos pasos

- [ ] Conectar formularios reales (Resend / HubSpot / etc)
- [ ] Generar imágenes Nanobanana (prompts en el plan original) y reemplazar mockups CSS donde aplique
- [ ] Conectar `/iniciar-sesion` y `/pedir-demo` con la app real
- [ ] Agregar páginas `/clientes`, `/blog`, `/legal/*`
- [ ] Lighthouse audit — objetivo 95+ Performance, 100 SEO/A11y
