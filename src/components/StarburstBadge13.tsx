import React from "react";
import type { StarburstProps } from "../types/index.js";
import { STARBURST_PATH, STARBURST_VIEWBOX } from "../characters/starburst/path.js";

/**
 * **StarburstBadge13** — Cool
 *
 * No eyebrows (shades cover top of face), filled rectangular sunglass lenses
 * with a bridge and arms, and a slight smirk.
 * Default fill: sky blue `#93C5FD`.
 *
 * @example
 * ```tsx
 * <StarburstBadge13 color="#93C5FD" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
export function StarburstBadge13({
  color = "#93C5FD",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0",
}: StarburstProps) {
  return (
    <svg
      className={className}
      viewBox={STARBURST_VIEWBOX}
      fill="none"
      role="img"
      aria-label="Cool starburst character"
    >
      {/* Starburst shape */}
      <path d={STARBURST_PATH} fill={color} />

      {/* Left sunglass lens */}
      <rect x="7.5" y="14" width="8" height="5" rx="1" fill={strokeColor} />

      {/* Right sunglass lens */}
      <rect x="16.5" y="14" width="8" height="5" rx="1" fill={strokeColor} />

      {/* Bridge between lenses */}
      <path
        d="M15.5 16.5H16.5"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Arms of glasses */}
      <path
        d="M5 16H7.5M24.5 16H27"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Mouth: slight smirk */}
      <path
        d="M13 22.5C14.5 24 18.5 24 21 22.5"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
