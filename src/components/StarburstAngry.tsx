import type { StarburstProps } from "../types/index.js";
import { STARBURST_PATH, STARBURST_VIEWBOX } from "../characters/starburst/path.js";
import { starburstColor } from "../utils/color.js";

/**
 * **StarburstAngry** — Angry / Furious
 *
 * Very steep inward-angled eyebrows (more extreme than Determined),
 * small squinting dot eyes, and a straight grimace line.
 * Default fill: angry red `#FF4040`.
 *
 * @example
 * ```tsx
 * <StarburstAngry color="#FF4040" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
export function StarburstAngry({
  color = "#FF4040",
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
      aria-label="Angry starburst character"
    >
      {/* Starburst shape */}
      <path d={STARBURST_PATH} fill={_color} />

      {/* Eyebrows: very steep angled V — more extreme than StarburstDetermined */}
      <path
        d="M8 12L14 16M24 12L18 16"
        stroke={strokeColor}
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Eyes: small dots, pushed down by heavy brows */}
      <circle cx="11.5" cy="18.5" r="1.4" fill={strokeColor} />
      <circle cx="20.5" cy="18.5" r="1.4" fill={strokeColor} />

      {/* Mouth: flat grimace line */}
      <path
        d="M11 22.5H21"
        stroke={strokeColor}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}