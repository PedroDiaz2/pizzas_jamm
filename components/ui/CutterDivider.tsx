"use client";

import { motion, useReducedMotion } from "framer-motion";

const TEETH = 18;
const TOOTH_WIDTH = 20;
const WIDTH = TEETH * TOOTH_WIDTH;
const HEIGHT = 28;
const TROUGH = HEIGHT * 0.55;

function buildZigzagPath() {
  const points: string[] = [`0,${HEIGHT}`];
  for (let i = 0; i <= TEETH; i += 1) {
    const x = i * TOOTH_WIDTH;
    const y = i % 2 === 0 ? 0 : TROUGH;
    points.push(`${x},${y}`);
  }
  points.push(`${WIDTH},${HEIGHT}`);
  return `M${points.join(" L")} Z`;
}

const PATH = buildZigzagPath();

/**
 * Signature divider: a serrated "pizza cutter" seam between sections,
 * colored to match the section above/below so it reads as a torn edge.
 * Slices open on scroll — the visual motif echoed in the ticket-style
 * menu cards and promo badges elsewhere on the page.
 */
export function CutterDivider({
  fromColor,
  toColor,
}: {
  fromColor: string;
  toColor: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative h-6 w-full overflow-hidden sm:h-7"
      style={{ backgroundColor: fromColor }}
      aria-hidden="true"
    >
      <motion.svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        initial={reduceMotion ? false : { clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, amount: 0.9 }}
        transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
      >
        <path d={PATH} fill={toColor} />
      </motion.svg>
    </div>
  );
}
