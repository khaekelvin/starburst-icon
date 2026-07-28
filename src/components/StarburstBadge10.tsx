import React from "react";
import type { StarburstProps } from "../types/index.js";
import { STARBURST_PATH, STARBURST_VIEWBOX } from "../characters/starburst/path.js";

/**
 * **StarburstBadge10** — Laughing / LOL
 *
 * High happy arched eyebrows, both eyes squinting shut (happy closed arcs),
 * and a very wide open belly-laugh smile.
 * Default fill: bright lemon yellow `#FFE14D`.
 *
 * @example
 * ```tsx
 * <StarburstBadge10 color="#FFE14D" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
export function StarburstBadge10({
  color = "#FFE14D",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0",
}: StarburstProps) {
  return (
    <svg
      className={className}
      viewBox={STARBURST_VIEWBOX}
      fill="none"
      role="img"
      aria-label="Laughing starburst character"
    >
      {/* Starburst shape */}
      <path d={STARBURST_PATH} fill={color} />

      {/* Eyebrows: high happy arches */}
      <path
        d="M9 11C10.5 9 12.5 9 14 11M18 11C19.5 9 21.5 9 23 11"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Left eye: squinting shut (arc bowing upward) */}
      <path
        d="M9.5 17Q11.75 15.2 14 17"
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Right eye: squinting shut (arc bowing upward) */}
      <path
        d="M18.5 17Q20.75 15.2 23 17"
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Mouth: very wide open belly-laugh smile */}
      <path
        d="M8.5 21C11 26 21 26 23.5 21"
        stroke={strokeColor}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
