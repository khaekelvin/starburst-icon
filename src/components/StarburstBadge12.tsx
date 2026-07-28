import React from "react";
import type { StarburstProps } from "../types/index.js";
import { STARBURST_PATH, STARBURST_VIEWBOX } from "../characters/starburst/path.js";

/**
 * **StarburstBadge12** — In Love
 *
 * No eyebrows, filled heart eyes, and a dreamy smile.
 * Default fill: rose pink `#FFB3C6`.
 *
 * @example
 * ```tsx
 * <StarburstBadge12 color="#FFB3C6" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
export function StarburstBadge12({
  color = "#FFB3C6",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0",
}: StarburstProps) {
  return (
    <svg
      className={className}
      viewBox={STARBURST_VIEWBOX}
      fill="none"
      role="img"
      aria-label="In love starburst character"
    >
      {/* Starburst shape */}
      <path d={STARBURST_PATH} fill={color} />

      {/* Left heart eye */}
      <path
        d="M11.5 15.75 C9 13.75 9 11.75 11.5 13.75 C14 11.75 14 13.75 11.5 15.75"
        fill={strokeColor}
        stroke="none"
      />

      {/* Right heart eye */}
      <path
        d="M20.5 15.75 C18 13.75 18 11.75 20.5 13.75 C23 11.75 23 13.75 20.5 15.75"
        fill={strokeColor}
        stroke="none"
      />

      {/* Mouth: dreamy smile */}
      <path
        d="M13 22C14.5 23.5 17.5 23.5 19 22"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
