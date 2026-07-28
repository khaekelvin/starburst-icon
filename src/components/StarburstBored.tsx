import type { StarburstProps } from "../types/index.js";
import { STARBURST_PATH, STARBURST_VIEWBOX } from "../characters/starburst/path.js";
import { starburstColor } from "../utils/color.js";

/**
 * **StarburstBored** — Bored / Unimpressed
 *
 * Flat horizontal eyebrows, half-lidded narrow oval eyes (distinctly different
 * from Sleepy's fully-closed arcs), and a barely-there flat mouth.
 * Default fill: light gray `#E5E7EB`.
 *
 * @example
 * ```tsx
 * <StarburstBored color="#E5E7EB" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
export function StarburstBored({
  color = "#E5E7EB",
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
      aria-label="Bored starburst character"
    >
      {/* Starburst shape */}
      <path d={STARBURST_PATH} fill={_color} />

      {/* Eyebrows: flat, neutral, slightly low */}
      <path
        d="M9.5 14H14M18 14H22.5"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Eyes: narrow half-lidded ovals — not closed, just unimpressed */}
      <ellipse cx="11.5" cy="17.5" rx="2.2" ry="1.1" fill={strokeColor} />
      <ellipse cx="20.5" cy="17.5" rx="2.2" ry="1.1" fill={strokeColor} />

      {/* Mouth: barely a frown — nearly flat, very slight downward curve */}
      <path
        d="M12 22.5C13.5 22.2 18.5 22.2 20 22.5"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}