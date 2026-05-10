"use client";

import { Container, SectionHeading } from "@/components/ui/container";
import { CardHoverEffect } from "@/components/animated/card-hover-effect";
import { Brain, Eye, Infinity as InfinityIcon } from "lucide-react";

const items = [
  {
    title: "Proctoring con IA en vivo",
    description:
      "MediaPipe detecta 8 tipos de fraude en tiempo real: rostro ausente, múltiples personas, mirada fuera de pantalla, cambio de pestaña. Cero alumnos copiando, sin instalar nada.",
    icon: <Eye className="h-5 w-5" />,
    badge: "Anti-fraude",
  },
  {
    title: "Simulacros UDEP/UPAO infinitos",
    description:
      "Sube tus exámenes en Word. La IA genera variantes ilimitadas con el mismo nivel de dificultad. Tu banco de preguntas nunca se quema, los alumnos nunca repiten.",
    icon: <InfinityIcon className="h-5 w-5" />,
    badge: "Generativo",
  },
  {
    title: "Test vocacional con ML explicable",
    description:
      "CHASIDE adaptativo con calibración por respuesta. No solo dice qué carrera elegir, explica por qué con métricas de confianza y áreas de fortaleza.",
    icon: <Brain className="h-5 w-5" />,
    badge: "ML Explicable",
  },
];

export function Diferenciadores() {
  return (
    <section id="diferenciadores" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Lo que solo REVOLU tiene"
          title="Tres armas que ninguna academia tradicional puede igualar"
          description="No estás comparando intranets. Estás comparando tu academia del 2026 contra una del 2030."
        />
        <CardHoverEffect items={items} className="mt-12" />
      </Container>
    </section>
  );
}
