import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { WordsMarquee } from "@/components/sections/words-marquee";
import { Differentiator } from "@/components/sections/differentiator";
import { BentoGrid } from "@/components/sections/bento-grid";
import { Process } from "@/components/sections/process";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <WordsMarquee />
        <Differentiator />
        <BentoGrid />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
