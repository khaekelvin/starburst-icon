import React from "react";
import type { StarburstProps } from "../types/index.js";
import { STARBURST_PATH, STARBURST_VIEWBOX } from "../characters/starburst/path.js";

/**
 * **StarburstBadge5** — Surprised / Shocked
 *
 * Raised flat eyebrows, wide open dot eyes, and a small open-O mouth.
 * Default fill: mint `#B5EAD7`.
 *
 * @example
 * ```tsx
 * <StarburstBadge5 color="#B5EAD7" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
export function StarburstBadge5({
  color = "#B5EAD7",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0",
}: StarburstProps) {
  return (
    <svg
      className={className}
      viewBox={STARBURST_VIEWBOX}
      fill="none"
      role="img"
      aria-label="Surprised starburst character"
    >
      {/* Starburst shape */}
      <path d={STARBURST_PATH} fill={color} />

      {/* Eyebrows: raised horizontal lines */}
      <path
        d="M9.5 11.5H14M18 11.5H22.5"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Eyes: wide open large dots */}
      <circle cx="11.5" cy="17.5" r="2.4" fill={strokeColor} />
      <circle cx="20.5" cy="17.5" r="2.4" fill={strokeColor} />

      {/* Mouth: small open O */}
      <ellipse cx="16" cy="23.5" rx="2.2" ry="2" fill={strokeColor} />
    </svg>
  );
}
