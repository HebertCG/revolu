"use client";

// Cobe globe — gold tinted, focused on Peru
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let width = 0;
    const onResize = () => {
      width = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.15, 0.13, 0.1],
      markerColor: [0.98, 0.75, 0.14],
      glowColor: [0.95, 0.75, 0.3],
      markers: [
        { location: [-5.1945, -80.6328], size: 0.08 },
        { location: [-6.7714, -79.8409], size: 0.07 },
        { location: [-8.1116, -79.0288], size: 0.07 },
        { location: [-12.0464, -77.0428], size: 0.06 },
        { location: [4.711, -74.0721], size: 0.05 },
        { location: [-33.4489, -70.6693], size: 0.05 },
        { location: [19.4326, -99.1332], size: 0.05 },
        { location: [-34.6037, -58.3816], size: 0.05 },
        { location: [-15.5007, -70.0166], size: 0.05 },
      ],
      onRender: (state: Record<string, number>) => {
        phiRef.current += 0.003;
        state.phi = phiRef.current;
        state.width = width * 2;
        state.height = width * 2;
      },
    } as Parameters<typeof createGlobe>[1]);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className={cn(
        "relative aspect-square w-full max-w-[600px] mx-auto",
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ contain: "layout paint size" }}
      />
    </div>
  );
}
