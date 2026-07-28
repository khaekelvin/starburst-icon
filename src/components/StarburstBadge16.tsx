import React from "react";
import type { StarburstProps } from "../types/index.js";
import { STARBURST_PATH, STARBURST_VIEWBOX } from "../characters/starburst/path.js";

/**
 * **StarburstBadge16** — Crying
 *
 * Sad inward-tilted eyebrows, small dot eyes, teardrop ellipses below each
 * eye, and a frown.
 * Default fill: pale blue `#BFDBFE`.
 *
 * @example
 * ```tsx
 * <StarburstBadge16 color="#BFDBFE" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
export function StarburstBadge16({
  color = "#BFDBFE",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0",
}: StarburstProps) {
  return (
    <svg
      className={className}
      viewBox={STARBURST_VIEWBOX}
      fill="none"
      role="img"
      aria-label="Crying starburst character"
    >
      {/* Starburst shape */}
      <path d={STARBURST_PATH} fill={color} />

      {/* Eyebrows: sad, tilted upward inward */}
      <path
        d="M9 14.5L14 12.5M18 12.5L23 14.5"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Eyes: small dots */}
      <circle cx="11.5" cy="16" r="1.4" fill={strokeColor} />
      <circle cx="20.5" cy="16" r="1.4" fill={strokeColor} />

      {/* Teardrops: narrow ellipses below eyes */}
      <ellipse cx="11.5" cy="19.5" rx="1" ry="1.5" fill={strokeColor} />
      <ellipse cx="20.5" cy="19.5" rx="1" ry="1.5" fill={strokeColor} />

      {/* Mouth: frown */}
      <path
        d="M11 23.5C13 21.5 19 21.5 21 23.5"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
