import type { StarburstProps } from "../types/index.js";
import { STARBURST_PATH, STARBURST_VIEWBOX } from "../characters/starburst/path.js";
import { starburstColor } from "../utils/color.js";

/**
 * **StarburstScared** — Scared / Frightened
 *
 * Very high arched eyebrows (higher than Surprised), large wide-open eyes,
 * and a big open-O mouth conveying genuine fear.
 * Default fill: pale cream `#FFEDD5`.
 *
 * @example
 * ```tsx
 * <StarburstScared color="#FFEDD5" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
export function StarburstScared({
  color = "#FFEDD5",
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
      aria-label="Scared starburst character"
    >
      {/* Starburst shape */}
      <path d={STARBURST_PATH} fill={_color} />

      {/* Eyebrows: extremely high arches — higher than Surprised */}
      <path
        d="M9 9C10.5 7 13 7 14.5 9M17.5 9C19 7 21.5 7 23 9"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Eyes: very large wide-open dots */}
      <circle cx="11.5" cy="17" r="2.8" fill={strokeColor} />
      <circle cx="20.5" cy="17" r="2.8" fill={strokeColor} />

      {/* Mouth: wide open scared O */}
      <ellipse cx="16" cy="24.5" rx="2.5" ry="2.2" fill={strokeColor} />
    </svg>
  );
}