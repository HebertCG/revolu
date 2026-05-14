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

  // True while the user is actively pointing at or touching the card.
  // The auto-sway loop pauses then so manual control wins.
  const interacting = useRef(false);
  const resumeTimer = useRef<number | undefined>(undefined);

  // Continuous idle sway. Runs on every device (desktop, mobile, Safari)
  // so the dashboard always feels alive. Pauses while a cursor is over
  // it or a finger is dragging it.
  useEffect(() => {
    if (reduce) return;
    if (typeof window === "undefined") return;

    let raf = 0;
    const startedAt = performance.now();

    const loop = (t: number) => {
      if (!interacting.current) {
        const e = (t - startedAt) / 1000;
        // Subtle drift, gentle amplitudes so it doesn't distract while reading
        rotateY.set(defaultRotateY + Math.sin(e * 0.35) * 7);
        rotateX.set(defaultRotateX + Math.cos(e * 0.28) * 4.5);
        rotateZ.set(defaultRotateZ + Math.sin(e * 0.22) * 0.9);
        glareX.set(50 + Math.sin(e * 0.35) * 30);
        glareY.set(50 + Math.cos(e * 0.28) * 22);
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

  function onMouseEnter() {
    interacting.current = true;
  }

  function onMove(e: RMouseEvent<HTMLDivElement>) {
    if (reduce) return;
    applyFromPoint(e.currentTarget.getBoundingClientRect(), e.clientX, e.clientY);
  }

  function onMouseLeave() {
    // Hand control back to the idle sway loop. The springs glide from
    // their last cursor-driven position into the auto-sway smoothly.
    interacting.current = false;
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
    resumeTimer.current = window.setTimeout(() => {
      interacting.current = false;
    }, 1200);
  }

  const perspective: CSSProperties = { perspective: 2000 };

  return (
    <div
      className={`relative ${className}`}
      style={perspective}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMove}
      onMouseLeave={onMouseLeave}
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
