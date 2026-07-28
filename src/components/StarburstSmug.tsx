import type { StarburstProps } from "../types/index.js";
import { STARBURST_PATH, STARBURST_VIEWBOX } from "../characters/starburst/path.js";
import { starburstColor } from "../utils/color.js";

/**
 * **StarburstSmug** — Smug
 *
 * Relaxed low-arched eyebrows, closed content eyes (arcs bowing upward),
 * and an asymmetric smug smirk.
 * Default fill: light purple `#DDD6FE`.
 *
 * @example
 * ```tsx
 * <StarburstSmug color="#DDD6FE" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
export function StarburstSmug({
  color = "#DDD6FE",
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
      aria-label="Smug starburst character"
    >
      {/* Starburst shape */}
      <path d={STARBURST_PATH} fill={_color} />

      {/* Eyebrows: relaxed low arches */}
      <path
        d="M9.5 13.5C11 12.2 12.5 12.2 14.5 13.5M17.5 13.5C19.5 12.2 21 12.2 22.5 13.5"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Left eye: closed content arc bowing upward */}
      <path
        d="M9.5 17.5Q11.75 16.5 14 17.5"
        stroke={strokeColor}
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Right eye: closed content arc bowing upward */}
      <path
        d="M18.5 17.5Q20.75 16.5 23 17.5"
        stroke={strokeColor}
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Mouth: asymmetric smug smirk */}
      <path
        d="M12 22.5C14.5 24.5 19 24 21 22.5"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}