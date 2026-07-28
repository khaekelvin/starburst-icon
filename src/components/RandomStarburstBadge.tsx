import { StarburstDetermined } from "./StarburstDetermined.js";
import { StarburstHappy } from "./StarburstHappy.js";
import { StarburstQuirky } from "./StarburstQuirky.js";
import type { StarburstProps } from "../types/index.js";

interface RandomStarburstBadgeProps extends StarburstProps {
  /**
   * A numeric index used to deterministically select a badge variant.
   * The selection cycles through Determined → Happy → Quirky using `badgeIndex % 3`.
   * Same index always produces the same badge.
   */
  badgeIndex: number;
}

/**
 * **RandomStarburstBadge** — Deterministic badge selector
 *
 * Cycles through the three light badge variants based on `badgeIndex % 3`.
 * Designed for use in profile pill marquees and lists where each item
 * should have a distinct but predictable badge.
 *
 * Variant cycle:
 * - `0` → StarburstDetermined (pastel pink)
 * - `1` → StarburstHappy (soft yellow)
 * - `2` → StarburstQuirky (electric blue)
 *
 * @example
 * ```tsx
 * profiles.map((profile, index) => (
 *   <RandomStarburstBadge key={profile.id} badgeIndex={index} />
 * ))
 * ```
 */
export function RandomStarburstBadge({
  badgeIndex,
  strokeColor = "black",
  className,
}: RandomStarburstBadgeProps) {
  const mod = badgeIndex % 3;
  const classNameProp = className !== undefined ? { className } : {};

  if (mod === 0) {
    return (
      <StarburstDetermined color="#ED95F4" strokeColor={strokeColor} {...classNameProp} />
    );
  }

  if (mod === 1) {
    return (
      <StarburstHappy color="#F3E777" strokeColor={strokeColor} {...classNameProp} />
    );
  }

  return <StarburstQuirky color="#7ED7F5" strokeColor={strokeColor} {...classNameProp} />;
}