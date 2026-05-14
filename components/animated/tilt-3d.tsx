"use client";

import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useSpring,
} from "motion/react";
import {
  useEffect,
  useRef,
  type CSSProperties,
  type MouseEvent as RMouseEvent,
  type ReactNode,
  type TouchEvent as RTouchEvent,
} from "react";

const SPRING = { stiffness: 90, damping: 18, mass: 0.6 };

type Props = {
  children: ReactNode;
  className?: string;
  /** Resting rotateY in degrees */
  defaultRotateY?: number;
  /** Resting rotateX in degrees */
  defaultRotateX?: number;
  /** Resting rotateZ in degrees */
  defaultRotateZ?: number;
  /** Hover sweep range for Y axis (degrees) */
  rangeY?: number;
  /** Hover sweep range for X axis (degrees) */
  rangeX?: number;
  /** Glare color overlay */
  glare?: boolean;
};

export function Tilt3D({
  children,
  className = "",
  defaultRotateY = 0,
  defaultRotateX = 0,
  defaultRotateZ = 0,
  rangeY = 24,
  rangeX = 18,
  glare = true,
}: Props) {
  const reduce = useReducedMotion();

  const rotateY = useSpring(defaultRotateY, SPRING);
  const rotateX = useSpring(defaultRotateX, SPRING);
  const rotateZ = useSpring(defaultRotateZ, SPRING);
  const glareX = useSpring(35, SPRING);
  const glareY = useSpring(20, SPRING);

  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.35), transparent 55%)`;

  // True while the user is actively touching or dragging the card.
  // Pauses the auto-sway loop so manual control wins on touch devices.
  const interacting = useRef(false);
  const resumeTimer = useRef<number | undefined>(undefined);

  // On touch devices (no hover), run a slow autonomous 3D sway so the
  // mockup feels alive without a cursor. Desktop keeps the static rest.
  useEffect(() => {
    if (reduce) return;
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (!isTouch) return;

    let raf = 0;
    const startedAt = performance.now();

    const loop = (t: number) => {
      if (!interacting.current) {
        const e = (t - startedAt) / 1000;
        // Lissajous-ish sway, gentle amplitudes
        rotateY.set(defaultRotateY + Math.sin(e * 0.5) * 10);
        rotateX.set(defaultRotateX + Math.cos(e * 0.4) * 6);
        rotateZ.set(defaultRotateZ + Math.sin(e * 0.3) * 1.2);
        glareX.set(50 + Math.sin(e * 0.5) * 35);
        glareY.set(50 + Math.cos(e * 0.4) * 25);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(raf);
  }, [
    reduce,
    defaultRotateX,
    defaultRotateY,
    defaultRotateZ,
    rotateX,
    rotateY,
    rotateZ,
    glareX,
    glareY,
  ]);

  function applyFromPoint(rect: DOMRect, x: number, y: number) {
    const px = (x - rect.left) / rect.width;
    const py = (y - rect.top) / rect.height;
    rotateY.set(-rangeY / 2 + px * rangeY);
    rotateX.set(rangeX / 2 - py * rangeX);
    rotateZ.set(-1.5 + (px - 0.5) * 2.5);
    glareX.set(px * 100);
    glareY.set(py * 100);
  }

  function onMove(e: RMouseEvent<HTMLDivElement>) {
    if (reduce) return;
    applyFromPoint(e.currentTarget.getBoundingClientRect(), e.clientX, e.clientY);
  }

  function onLeave() {
    rotateY.set(defaultRotateY);
    rotateX.set(defaultRotateX);
    rotateZ.set(defaultRotateZ);
    glareX.set(35);
    glareY.set(20);
  }

  function onTouchStart() {
    interacting.current = true;
    if (resumeTimer.current) {
      window.clearTimeout(resumeTimer.current);
      resumeTimer.current = undefined;
    }
  }

  function onTouchMove(e: RTouchEvent<HTMLDivElement>) {
    if (reduce) return;
    if (e.touches.length !== 1) return;
    const t = e.touches[0];
    applyFromPoint(e.currentTarget.getBoundingClientRect(), t.clientX, t.clientY);
  }

  function onTouchEnd() {
    // Resume the auto-sway after a short pause so the user keeps feeling
    // in control right after lifting their finger.
    resumeTimer.current = window.setTimeout(() => {
      interacting.current = false;
    }, 1200);
  }

  const perspective: CSSProperties = { perspective: 2000 };

  return (
    <div
      className={`relative ${className}`}
      style={perspective}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          rotateZ,
          transformStyle: "preserve-3d",
          transformPerspective: 2000,
        }}
        className="relative will-change-transform"
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden
            style={{ background: glareBg }}
            className="pointer-events-none absolute inset-0 rounded-2xl mix-blend-overlay"
          />
        )}
      </motion.div>
    </div>
  );
}
