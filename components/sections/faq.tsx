"use client";

import { Container, SectionHeading } from "@/components/ui/container";
import { Accordion } from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto demora migrar mi academia desde Excel/WhatsApp?",
    answer:
      "Entre 24 y 48 horas. Tú nos compartes tu Excel de alumnos, contactos de profesores y exámenes en Word. Nosotros importamos todo, configuramos tu subdominio, branding y ciclos. Tus profesores y alumnos reciben sus credenciales y entran al día siguiente.",
  },
  {
    question: "¿Necesito instalar algo en las computadoras de los alumnos?",
    answer:
      "No. Klassia funciona 100% en el navegador, incluso el proctoring con IA. Solo necesitan acceso a internet y una webcam. Funciona en Chrome, Edge, Safari y Firefox modernos.",
  },
  {
    question: "¿Qué pasa con los datos de mi academia? ¿Son míos?",
    answer:
      "Sí, siempre. La data es 100% tuya. Puedes exportar todo en cualquier momento (CSV, Excel, JSON). Si decides irte, te entregamos un dump completo. Cumplimos con la Ley 29733 de Protección de Datos Personales del Perú.",
  },
  {
    question: "¿El proctoring con IA es invasivo?",
    answer:
      "El proctoring corre completamente en el navegador del alumno (no enviamos video al servidor). Solo se envían eventos: 'rostro detectado', 'múltiples personas', 'mirada fuera de pantalla'. La cámara solo se activa durante el examen y el alumno lo sabe.",
  },
  {
    question: "¿Puedo usar mi propio dominio (intranet.miacademia.pe)?",
    answer:
      "Sí, en el plan Institución. Configuramos tu dominio personalizado con SSL automático y marca blanca completa. En Pro y Básico usas tu subdominio en klassia.pe (ej: andinos.klassia.pe).",
  },
  {
    question: "¿Cómo cobro mensualidades por Yape o Plin?",
    answer:
      "Conectamos tu cuenta de Yape o Plin (o MercadoPago) y los alumnos pagan desde su perfil. La conciliación es automática: el sistema marca como 'pagado' en cuanto recibe el comprobante. Sin Excel, sin idas al banco.",
  },
  {
    question: "¿Qué pasa si mi academia crece de 50 a 500 alumnos?",
    answer:
      "Cambias de plan en un click. La data se mantiene intacta. Los precios escalan por banda (Básico hasta 50, Pro hasta 200, Institución ilimitado), no por alumno individual, así que tu costo no se dispara.",
  },
  {
    question: "¿Hay un periodo de prueba o garantía?",
    answer:
      "14 días gratis sin tarjeta de crédito. Si después no te convence, no cobramos nada. Y si cancelas dentro del primer mes pagado, devolvemos el dinero completo.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Todo lo que necesitas saber"
          description="Si tu pregunta no está aquí, escríbenos. Respondemos en menos de 4 horas en horario laboral."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
