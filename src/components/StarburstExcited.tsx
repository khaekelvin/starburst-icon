import type { StarburstProps } from "../types/index.js";
import { STARBURST_PATH, STARBURST_VIEWBOX } from "../characters/starburst/path.js";
import { starburstColor } from "../utils/color.js";

/**
 * **StarburstExcited** — Excited / Sparkly
 *
 * Very high arched eyebrows, cross-star shaped eyes (✦), and a wide open smile.
 * Default fill: orange `#FFB347`.
 *
 * @example
 * ```tsx
 * <StarburstExcited color="#FFB347" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
export function StarburstExcited({
  color = "#FFB347",
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
      aria-label="Excited starburst character"
    >
      {/* Starburst shape */}
      <path d={STARBURST_PATH} fill={_color} />

      {/* Eyebrows: very high arches */}
      <path
        d="M9 11.5C10.5 9.3 13 9.3 14.5 11.5M17.5 11.5C19 9.3 21.5 9.3 23 11.5"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Left eye: cross / sparkle star ✦ */}
      <path
        d="M11.5 14.5V18.5M9.5 16.5H13.5"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Right eye: cross / sparkle star ✦ */}
      <path
        d="M20.5 14.5V18.5M18.5 16.5H22.5"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Mouth: very wide excited U smile */}
      <path
        d="M8.5 21C11.5 25.5 20.5 25.5 23.5 21"
        stroke={strokeColor}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}