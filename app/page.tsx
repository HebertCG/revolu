import { FloatingNavbar } from "@/components/animated/floating-navbar";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Diferenciadores } from "@/components/sections/diferenciadores";
import { BentoFeatures } from "@/components/sections/bento-features";
import { ComoFunciona } from "@/components/sections/como-funciona";
import { MotorSimulacros } from "@/components/sections/motor-simulacros";
import { MultiTenant } from "@/components/sections/multi-tenant";
import { Pricing } from "@/components/sections/pricing";
import { Calculadora } from "@/components/sections/calculadora";
import { Testimonios } from "@/components/sections/testimonios";
import { HechoEnPeru } from "@/components/sections/hecho-en-peru";
import { FAQ } from "@/components/sections/faq";
import { CTAFinal } from "@/components/sections/cta-final";
import { Footer } from "@/components/sections/footer";

const navItems = [
  { label: "Producto", href: "#producto" },
  { label: "Funciones", href: "#funciones" },
  { label: "Precios", href: "#precios" },
  { label: "Demo", href: "/demo" },
  { label: "Clientes", href: "#clientes" },
];

export default function Home() {
  return (
    <>
      <FloatingNavbar items={navItems} />
      <main>
        <Hero />
        <Stats />
        <ProblemSolution />
        <Diferenciadores />
        <BentoFeatures />
        <ComoFunciona />
        <MotorSimulacros />
        <MultiTenant />
        <Pricing />
        <Calculadora />
        <Testimonios />
        <HechoEnPeru />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
