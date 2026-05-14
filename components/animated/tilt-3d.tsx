"use client";

import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useSpring,
} from "motion/react";
import {
  type MouseEvent as RMouseEvent,
  type ReactNode,
  type CSSProperties,
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
  defaultRotateY = -10,
  defaultRotateX = 6,
  defaultRotateZ = -1,
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

  function onMove(e: RMouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    rotateY.set(-rangeY / 2 + px * rangeY);
    rotateX.set(rangeX / 2 - py * rangeX);
    rotateZ.set(-1.5 + (px - 0.5) * 2.5);
    glareX.set(px * 100);
    glareY.set(py * 100);
  }

  function onLeave() {
    rotateY.set(defaultRotateY);
    rotateX.set(defaultRotateX);
    rotateZ.set(defaultRotateZ);
    glareX.set(35);
    glareY.set(20);
  }

  const perspective: CSSProperties = { perspective: 2000 };

  return (
    <div
      className={`relative ${className}`}
      style={perspective}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
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
