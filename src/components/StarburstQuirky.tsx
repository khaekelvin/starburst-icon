import type { StarburstProps } from "../types/index.js";
import { STARBURST_PATH, STARBURST_VIEWBOX } from "../characters/starburst/path.js";
import { starburstColor } from "../utils/color.js";

/**
 * **StarburstQuirky** — Quirky / Asymmetric
 *
 * Left eye is a horizontal dash (-), right "eye" is a rounded open 'U' loop.
 * Default fill: electric blue `#7ED7F5`.
 *
 * @example
 * ```tsx
 * <StarburstQuirky color="#7ED7F5" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
export function StarburstQuirky({
  color = "#7ED7F5",
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
      aria-label="Quirky starburst character"
    >
      {/* Starburst shape */}
      <path d={STARBURST_PATH} fill={_color} />

      {/* Left eye: horizontal dash (-) */}
      <path
        d="M8.5 16H13.5"
        stroke={strokeColor}
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      {/* Right eye: rounded open 'U' loop */}
      <path
        d="M18.5 13.5V16.5C18.5 18 19.8 19.2 21.3 19.2C22.8 19.2 24.1 18 24.1 16.5V13.5"
        stroke={strokeColor}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}