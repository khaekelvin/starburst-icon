import type { StarburstProps } from "../types/index.js";
import { STARBURST_PATH, STARBURST_VIEWBOX } from "../characters/starburst/path.js";
import { starburstColor } from "../utils/color.js";

/**
 * **StarburstDetermined** — Determined / Intense
 *
 * Diagonal inward eyebrows (\ /) and solid dot eyes.
 * Default fill: pastel pink `#ED95F4`.
 *
 * @example
 * ```tsx
 * <StarburstDetermined color="#ED95F4" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
export function StarburstDetermined({
  color = "#ED95F4",
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
      aria-label="Determined starburst character"
    >
      {/* Starburst shape */}
      <path d={STARBURST_PATH} fill={_color} />

      {/* Eyebrows: diagonal inward \ / */}
      <path
        d="M9 12.5L14 16.5M23 12.5L18 16.5"
        stroke={strokeColor}
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      {/* Eyes: solid dots */}
      <circle cx="11.5" cy="18" r="1.6" fill={strokeColor} />
      <circle cx="20.5" cy="18" r="1.6" fill={strokeColor} />
    </svg>
  );
}