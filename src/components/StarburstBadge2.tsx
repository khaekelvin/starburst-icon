import React from "react";
import type { StarburstProps } from "../types/index.js";
import { STARBURST_PATH, STARBURST_VIEWBOX } from "../characters/starburst/path.js";

/**
 * **StarburstBadge2** — Happy / Arched
 *
 * Smooth cubic Bézier arch eyebrows (^ ^) and solid dot eyes.
 * Default fill: soft yellow `#F3E777`.
 *
 * @example
 * ```tsx
 * <StarburstBadge2 color="#F3E777" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
export function StarburstBadge2({
  color = "#F3E777",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0",
}: StarburstProps) {
  return (
    <svg
      className={className}
      viewBox={STARBURST_VIEWBOX}
      fill="none"
      role="img"
      aria-label="Happy starburst character"
    >
      {/* Starburst shape */}
      <path d={STARBURST_PATH} fill={color} />

      {/* Eyebrows: smooth cubic Bézier arches ^ ^ */}
      <path
        d="M9 12C10.5 9.8 12.5 9.8 14 12M18 12C19.5 9.8 21.5 9.8 23 12"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Eyes: solid dots, positioned slightly higher than Badge1 */}
      <circle cx="11.5" cy="16.5" r="1.8" fill={strokeColor} />
      <circle cx="20.5" cy="16.5" r="1.8" fill={strokeColor} />
    </svg>
  );
}
