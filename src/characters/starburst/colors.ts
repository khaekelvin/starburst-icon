/**
 * Official Starburst color palette.
 *
 * Pair each fill with its intended stroke color:
 * - Light fills → "black" stroke
 * - Dark fills   → "white" stroke
 */
export const STARBURST_COLORS = {
  /** Pastel pink — StarburstDetermined */
  pastelPink: "#ED95F4",
  /** Soft yellow — StarburstHappy */
  softYellow: "#F3E777",
  /** Electric blue — StarburstQuirky */
  electricBlue: "#7ED7F5",
  /** Sad red — StarburstSad */
  sadRed: "#FF6B6B",
  /** Mint green — StarburstSurprised */
  mint: "#B5EAD7",
  /** Soft peach — StarburstWinking */
  peach: "#FFCBA4",
  /** Lavender — StarburstSleepy */
  lavender: "#C4B5FD",
  /** Orange — StarburstExcited */
  orange: "#FFB347",
  /** Angry red — StarburstAngry */
  angryRed: "#FF4040",
  /** Lemon yellow — StarburstLaughing */
  lemon: "#FFE14D",
  /** Lime green — StarburstNervous */
  lime: "#BAFAC8",
  /** Rose pink — StarburstInLove */
  rose: "#FFB3C6",
  /** Sky blue — StarburstCool */
  skyBlue: "#93C5FD",
  /** Amber — StarburstConfused */
  amber: "#FDE68A",
  /** Soft purple — StarburstSmug */
  softPurple: "#DDD6FE",
  /** Pale blue — StarburstCrying */
  paleBlue: "#BFDBFE",
  /** Pale cream — StarburstScared */
  cream: "#FFEDD5",
  /** Light gray — StarburstBored */
  gray: "#E5E7EB",
  /** Inverted dark — used for summary counter badges */
  dark: "#000000",
  /** Inverted light — stroke color for dark-fill badges */
  white: "#FFFFFF",
} as const;

export type StarburstFillColor =
  (typeof STARBURST_COLORS)[keyof typeof STARBURST_COLORS] | (string & Record<never, never>);

export type StarburstStrokeColor = "black" | "white" | (string & Record<never, never>);
