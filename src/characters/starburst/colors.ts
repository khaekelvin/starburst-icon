/**
 * Official Starburst color palette.
 *
 * Pair each fill with its intended stroke color:
 * - Light fills → "black" stroke
 * - Dark fills   → "white" stroke
 */
export const STARBURST_COLORS = {
  /** Pastel pink — StarburstBadge1 (Determined) */
  pastelPink: "#ED95F4",
  /** Soft yellow — StarburstBadge2 (Happy) */
  softYellow: "#F3E777",
  /** Electric blue — StarburstBadge3 (Quirky) */
  electricBlue: "#7ED7F5",
  /** Sad red — SadRedStarburstBadge (Sad) */
  sadRed: "#FF6B6B",
  /** Mint green — StarburstBadge5 (Surprised) */
  mint: "#B5EAD7",
  /** Soft peach — StarburstBadge6 (Winking) */
  peach: "#FFCBA4",
  /** Lavender — StarburstBadge7 (Sleepy) */
  lavender: "#C4B5FD",
  /** Orange — StarburstBadge8 (Excited) */
  orange: "#FFB347",
  /** Angry red — StarburstBadge9 (Angry) */
  angryRed: "#FF4040",
  /** Lemon yellow — StarburstBadge10 (Laughing) */
  lemon: "#FFE14D",
  /** Lime green — StarburstBadge11 (Nervous) */
  lime: "#BAFAC8",
  /** Rose pink — StarburstBadge12 (In Love) */
  rose: "#FFB3C6",
  /** Sky blue — StarburstBadge13 (Cool) */
  skyBlue: "#93C5FD",
  /** Amber — StarburstBadge14 (Confused) */
  amber: "#FDE68A",
  /** Soft purple — StarburstBadge15 (Smug) */
  softPurple: "#DDD6FE",
  /** Pale blue — StarburstBadge16 (Crying) */
  paleBlue: "#BFDBFE",
  /** Pale cream — StarburstBadge17 (Scared) */
  cream: "#FFEDD5",
  /** Light gray — StarburstBadge18 (Bored) */
  gray: "#E5E7EB",
  /** Inverted dark — used for summary counter badges */
  dark: "#000000",
  /** Inverted light — stroke color for dark-fill badges */
  white: "#FFFFFF",
} as const;

export type StarburstFillColor =
  (typeof STARBURST_COLORS)[keyof typeof STARBURST_COLORS] | (string & Record<never, never>);

export type StarburstStrokeColor = "black" | "white" | (string & Record<never, never>);
