import type { StarburstProps } from "../types/index.js";
import { STARBURST_PATH, STARBURST_VIEWBOX } from "../characters/starburst/path.js";
import { starburstColor } from "../utils/color.js";

/**
 * **StarburstConfused** — Confused
 *
 * Asymmetric eyebrows (one arched, one angled down outward), mismatched dot
 * eyes (different sizes), and a wavy confused mouth.
 * Default fill: amber `#FDE68A`.
 *
 * @example
 * ```tsx
 * <StarburstConfused color="#FDE68A" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
export function StarburstConfused({
  color = "#FDE68A",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0",
}: StarburstProps) {
  const _color = starburstColor(color);
  return (
    <svg
      className={className}
      viewBox={STARBURST_VIEWBOX}
      fill="none"
      role="img"
      aria-label="Confused starburst character"
    >
      {/* Starburst shape */}
      <path d={STARBURST_PATH} fill={_color} />

      {/* Left eyebrow: high arch */}
      <path
        d="M9 11C10.5 9 12.5 9 14 11"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Right eyebrow: angled down outward */}
      <path
        d="M18 13.5L23 14.5"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Left eye: slightly larger dot */}
      <circle cx="11.5" cy="17.5" r="1.9" fill={strokeColor} />

      {/* Right eye: smaller dot */}
      <circle cx="20.5" cy="17.5" r="1.4" fill={strokeColor} />

      {/* Mouth: wavy confused */}
      <path
        d="M11 22Q13 23.5 15 22Q17 20.5 19 22Q21 23.5 22 22"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}