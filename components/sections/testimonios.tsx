"use client";

import { Container, SectionHeading } from "@/components/ui/container";
import { InfiniteMovingCards } from "@/components/animated/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Pasamos de tener 4 grupos de WhatsApp por curso a una sola intranet donde profes y apoderados saben exactamente lo que está pasando.",
    name: "Lucía Saavedra",
    role: "Directora · Andinos Piura",
    initials: "LS",
  },
  {
    quote:
      "Lo que más me sorprendió fue el proctoring. En el primer simulacro detectó tres alumnos con celular oculto. Antes ni se daba cuenta.",
    name: "Carlos Mendoza",
    role: "Coordinador · Saber Piura",
    initials: "CM",
  },
  {
    quote:
      "El generador de simulacros UDEP es magia. Subí mi banco de Word de hace 5 años y ahora tengo variantes ilimitadas. Mis chicos ya no memorizan respuestas.",
    name: "Patricia Rojas",
    role: "Profesora RM · Pamer Chiclayo",
    initials: "PR",
  },
  {
    quote:
      "Cobrar mensualidades por Yape integrado nos ahorró un día completo de trabajo administrativo a la semana. La conciliación es automática.",
    name: "Jorge Flores",
    role: "Administrador · Newton Sullana",
    initials: "JF",
  },
  {
    quote:
      "Los apoderados ahora reciben el reporte de su hijo por WhatsApp cada viernes. Cero llamadas pidiendo notas. Cero estrés.",
    name: "Ana Vargas",
    role: "Tutora · Galois Trujillo",
    initials: "AV",
  },
  {
    quote:
      "Migrar fue más fácil de lo que pensaba. Subí mi Excel de alumnos un lunes, el martes ya tenían sus credenciales y estaban entrando a la intranet.",
    name: "Roberto Silva",
    role: "Director · Pitágoras Tumbes",
    initials: "RS",
  },
];

export function Testimonios() {
  return (
    <section id="clientes" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Lo que dicen las academias"
          title="No es teoría. Ya está funcionando."
          description="Directores, profesores y administradores de academias del norte cuentan cómo cambió su día a día."
        />

        <div className="mt-12 -mx-5 sm:-mx-6 lg:-mx-8">
          <InfiniteMovingCards items={testimonials} speed="slow" direction="left" />
          <InfiniteMovingCards
            items={testimonials.slice().reverse()}
            speed="slow"
            direction="right"
            className="mt-2"
          />
        </div>
      </Container>
    </section>
  );
}
