import { Reveal } from "@/components/animated/reveal";
import type { ReactNode } from "react";

type Props = {
  num: string;
  label: string;
  accent?: string;
  title: ReactNode;
  kicker?: string;
};

export function SectionHeader({ num, label, accent, title, kicker }: Props) {
  return (
    <div className="mb-14 max-w-3xl">
      <Reveal className="sec-rule mb-10">
        <span className="font-semibold text-ink">§{num}</span>
        <span>{label}</span>
        <span className="dashed-h h-px flex-1" />
        <span>{accent ?? "Diferencial"}</span>
      </Reveal>
      <Reveal
        as="h2"
        delay={60}
        className="display-tight pb-1 text-[36px] font-semibold leading-[1.08] tracking-tight md:text-[64px]"
      >
        {title}
      </Reveal>
      {kicker && (
        <Reveal
          as="p"
          delay={140}
          className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-soft md:text-[18px]"
        >
          {kicker}
        </Reveal>
      )}
    </div>
  );
}
