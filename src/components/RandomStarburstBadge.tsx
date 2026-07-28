import React from "react";
import { StarburstBadge1 } from "./StarburstBadge1.js";
import { StarburstBadge2 } from "./StarburstBadge2.js";
import { StarburstBadge3 } from "./StarburstBadge3.js";
import type { StarburstProps } from "../types/index.js";

interface RandomStarburstBadgeProps extends StarburstProps {
  /**
   * A numeric index used to deterministically select a badge variant.
   * The selection cycles through Badge1 → Badge2 → Badge3 using `badgeIndex % 3`.
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
 * - `0` → StarburstBadge1 (pastel pink, determined)
 * - `1` → StarburstBadge2 (soft yellow, happy)
 * - `2` → StarburstBadge3 (electric blue, quirky)
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
      <StarburstBadge1 color="#ED95F4" strokeColor={strokeColor} {...classNameProp} />
    );
  }

  if (mod === 1) {
    return (
      <StarburstBadge2 color="#F3E777" strokeColor={strokeColor} {...classNameProp} />
    );
  }

  return <StarburstBadge3 color="#7ED7F5" strokeColor={strokeColor} {...classNameProp} />;
}
