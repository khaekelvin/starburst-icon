import React from "react";
import type { StarburstProps } from "../types/index.js";
import { STARBURST_PATH, STARBURST_VIEWBOX } from "../characters/starburst/path.js";

/**
 * **StarburstBadge7** — Sleepy / Tired
 *
 * Drooping inward eyebrows, both eyes closed as heavy arcs, and a small neutral mouth.
 * Default fill: lavender `#C4B5FD`.
 *
 * @example
 * ```tsx
 * <StarburstBadge7 color="#C4B5FD" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
export function StarburstBadge7({
  color = "#C4B5FD",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0",
}: StarburstProps) {
  return (
    <svg
      className={className}
      viewBox={STARBURST_VIEWBOX}
      fill="none"
      role="img"
      aria-label="Sleepy starburst character"
    >
      {/* Starburst shape */}
      <path d={STARBURST_PATH} fill={color} />

      {/* Eyebrows: inner ends droop slightly (tired look) */}
      <path
        d="M9.5 14.5L14 15.5M18 15.5L22.5 14.5"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Left eye: heavy closed arc bowing upward */}
      <path
        d="M9.5 18.5Q11.75 16.8 14 18.5"
        stroke={strokeColor}
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Right eye: heavy closed arc bowing upward */}
      <path
        d="M18.5 18.5Q20.75 16.8 23 18.5"
        stroke={strokeColor}
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Mouth: small neutral line */}
      <path
        d="M13 23H19"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
