import React from "react";
import type { StarburstProps } from "../types/index.js";
import { STARBURST_PATH, STARBURST_VIEWBOX } from "../characters/starburst/path.js";

/**
 * **StarburstBadge6** — Winking
 *
 * Left eye closed (squinting arc), right eye open dot.
 * Arched right eyebrow, flat left eyebrow, and a smirk.
 * Default fill: soft peach `#FFCBA4`.
 *
 * @example
 * ```tsx
 * <StarburstBadge6 color="#FFCBA4" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
export function StarburstBadge6({
  color = "#FFCBA4",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0",
}: StarburstProps) {
  return (
    <svg
      className={className}
      viewBox={STARBURST_VIEWBOX}
      fill="none"
      role="img"
      aria-label="Winking starburst character"
    >
      {/* Starburst shape */}
      <path d={STARBURST_PATH} fill={color} />

      {/* Left eyebrow: flat / neutral */}
      {/* Right eyebrow: happy arch */}
      <path
        d="M9.5 14H14M18 12.5C19.5 10.8 21.5 10.8 23 12.5"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Left eye: closed squinting arc (bows upward = shut) */}
      <path
        d="M9.5 18Q11.75 16.5 14 18"
        stroke={strokeColor}
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Right eye: open dot */}
      <circle cx="20.5" cy="17" r="1.7" fill={strokeColor} />

      {/* Mouth: smirk leaning toward the open eye */}
      <path
        d="M13.5 21.5C15 23 19.5 23 21.5 21.5"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
