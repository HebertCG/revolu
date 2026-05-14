const words = [
  "Proctoring IA",
  "CHASIDE adaptativo",
  "Asistencia pública",
  "WhatsApp por curso",
  "KaTeX nativo",
  "Bento integrado",
  "SEO por academia",
  "Import desde Word",
];

function Row({
  direction = "normal",
  track,
}: {
  direction?: "normal" | "reverse";
  track: string[];
}) {
  return (
    <div className="mask-fade-x overflow-hidden py-1">
      <div
        className={`flex items-center gap-10 whitespace-nowrap ${
          direction === "reverse" ? "marquee-track-rev" : "marquee-track"
        }`}
      >
        {track.concat(track).map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="display-tight text-[44px] font-semibold tracking-tight md:text-[68px]">
              {w}
            </span>
            <span className="font-serif-italic text-3xl text-coral-500">
              ✱
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function WordsMarquee() {
  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-[color:var(--line)] bg-paper py-6 md:py-10"
    >
      <Row track={words} />
      <Row direction="reverse" track={[...words].reverse()} />
    </section>
  );
}
