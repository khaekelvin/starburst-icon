import type { StarburstProps } from "../types/index.js";
import { STARBURST_PATH, STARBURST_VIEWBOX } from "../characters/starburst/path.js";
import { starburstColor } from "../utils/color.js";

/**
 * **StarburstNervous** — Nervous
 *
 * Asymmetric eyebrows (one arched, one flat), small dot eyes,
 * and a wavy nervous mouth.
 * Default fill: lime green `#BAFAC8`.
 *
 * @example
 * ```tsx
 * <StarburstNervous color="#BAFAC8" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
export function StarburstNervous({
  color = "#BAFAC8",
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
      aria-label="Nervous starburst character"
    >
      {/* Starburst shape */}
      <path d={STARBURST_PATH} fill={_color} />

      {/* Left eyebrow: arch */}
      <path
        d="M9 11C10.5 9 12.5 9 14 11"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Right eyebrow: flat, lower */}
      <path
        d="M18 14H23"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Eyes: small dots */}
      <circle cx="11.5" cy="17.5" r="1.6" fill={strokeColor} />
      <circle cx="20.5" cy="17.5" r="1.6" fill={strokeColor} />

      {/* Mouth: wavy nervous */}
      <path
        d="M11 22Q12.5 20.5 14.5 22Q16.5 23.5 18.5 22Q20 20.5 21 22"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}