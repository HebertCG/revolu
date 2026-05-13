import { FloatingNavbar } from "@/components/animated/floating-navbar";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Diferenciadores } from "@/components/sections/diferenciadores";
import { BentoFeatures } from "@/components/sections/bento-features";
import { ComoFunciona } from "@/components/sections/como-funciona";
import { SistemaEstable } from "@/components/sections/sistema-estable";
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
        <HechoEnPeru />
        <SistemaEstable />
        <Pricing />
        <Calculadora />
        <Testimonios />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
