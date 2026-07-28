import React from "react";
import type { StarburstProps } from "../types/index.js";
import { STARBURST_PATH, STARBURST_VIEWBOX } from "../characters/starburst/path.js";

/**
 * **SadRedStarburstBadge** — Sad / Frustrated
 *
 * Reverse diagonal eyebrows (/ \), solid dot eyes, and an inverted curve frown.
 * Default fill: sad red `#FF6B6B`.
 *
 * @example
 * ```tsx
 * <SadRedStarburstBadge color="#FF6B6B" strokeColor="black" className="w-4 h-4 shrink-0" />
 * ```
 */
export function SadRedStarburstBadge({
  color = "#FF6B6B",
  strokeColor = "black",
  className = "w-4 h-4 shrink-0",
}: StarburstProps) {
  return (
    <svg
      className={className}
      viewBox={STARBURST_VIEWBOX}
      fill="none"
      role="img"
      aria-label="Sad starburst character"
    >
      {/* Starburst shape */}
      <path d={STARBURST_PATH} fill={color} />

      {/* Eyebrows: reverse diagonal slants / \ (opposite of StarburstBadge1) */}
      <path
        d="M9 16.5L14 12.5M23 16.5L18 12.5"
        stroke={strokeColor}
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      {/* Eyes: solid dots */}
      <circle cx="11.5" cy="18" r="1.6" fill={strokeColor} />
      <circle cx="20.5" cy="18" r="1.6" fill={strokeColor} />

      {/* Mouth: inverted curve frown */}
      <path
        d="M12 22C14 20 18 20 20 22"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
