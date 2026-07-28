// ─── Core types ───────────────────────────────────────────────────────────────
export type {
  StarburstCharacter,
  StarburstLayer,
  StarburstOptions,
  StarburstProps,
  StarburstResult,
} from "./types/index.js";

// ─── Core SVG generation (framework-agnostic) ─────────────────────────────────
export { generate } from "./core/generate.js";

// ─── Color utilities ───────────────────────────────────────────────────────────
export { starburstColor, defineColors } from "./utils/color.js";
export { STARBURST_COLORS } from "./characters/starburst/colors.js";
export type { StarburstFillColor, StarburstStrokeColor } from "./characters/starburst/colors.js";

// ─── Shape constants ──────────────────────────────────────────────────────────
export { STARBURST_PATH, STARBURST_VIEWBOX } from "./characters/starburst/path.js";

// ─── React components (emotion names) ──────────────────────────────────────────
export { StarburstDetermined } from "./components/StarburstDetermined.js";
export { StarburstHappy } from "./components/StarburstHappy.js";
export { StarburstQuirky } from "./components/StarburstQuirky.js";
export { StarburstSad } from "./components/StarburstSad.js";
export { StarburstSurprised } from "./components/StarburstSurprised.js";
export { StarburstWinking } from "./components/StarburstWinking.js";
export { StarburstSleepy } from "./components/StarburstSleepy.js";
export { StarburstExcited } from "./components/StarburstExcited.js";
export { StarburstAngry } from "./components/StarburstAngry.js";
export { StarburstLaughing } from "./components/StarburstLaughing.js";
export { StarburstNervous } from "./components/StarburstNervous.js";
export { StarburstInLove } from "./components/StarburstInLove.js";
export { StarburstCool } from "./components/StarburstCool.js";
export { StarburstConfused } from "./components/StarburstConfused.js";
export { StarburstSmug } from "./components/StarburstSmug.js";
export { StarburstCrying } from "./components/StarburstCrying.js";
export { StarburstScared } from "./components/StarburstScared.js";
export { StarburstBored } from "./components/StarburstBored.js";
export { RandomStarburstBadge } from "./components/RandomStarburstBadge.js";

// ─── Deprecated numbered aliases ───────────────────────────────────────────────
/** @deprecated Use {@link StarburstDetermined} instead */
export { StarburstDetermined as StarburstBadge1 } from "./components/StarburstDetermined.js";
/** @deprecated Use {@link StarburstHappy} instead */
export { StarburstHappy as StarburstBadge2 } from "./components/StarburstHappy.js";
/** @deprecated Use {@link StarburstQuirky} instead */
export { StarburstQuirky as StarburstBadge3 } from "./components/StarburstQuirky.js";
/** @deprecated Use {@link StarburstSad} instead */
export { StarburstSad as SadRedStarburstBadge } from "./components/StarburstSad.js";
/** @deprecated Use {@link StarburstSurprised} instead */
export { StarburstSurprised as StarburstBadge5 } from "./components/StarburstSurprised.js";
/** @deprecated Use {@link StarburstWinking} instead */
export { StarburstWinking as StarburstBadge6 } from "./components/StarburstWinking.js";
/** @deprecated Use {@link StarburstSleepy} instead */
export { StarburstSleepy as StarburstBadge7 } from "./components/StarburstSleepy.js";
/** @deprecated Use {@link StarburstExcited} instead */
export { StarburstExcited as StarburstBadge8 } from "./components/StarburstExcited.js";
/** @deprecated Use {@link StarburstAngry} instead */
export { StarburstAngry as StarburstBadge9 } from "./components/StarburstAngry.js";
/** @deprecated Use {@link StarburstLaughing} instead */
export { StarburstLaughing as StarburstBadge10 } from "./components/StarburstLaughing.js";
/** @deprecated Use {@link StarburstNervous} instead */
export { StarburstNervous as StarburstBadge11 } from "./components/StarburstNervous.js";
/** @deprecated Use {@link StarburstInLove} instead */
export { StarburstInLove as StarburstBadge12 } from "./components/StarburstInLove.js";
/** @deprecated Use {@link StarburstCool} instead */
export { StarburstCool as StarburstBadge13 } from "./components/StarburstCool.js";
/** @deprecated Use {@link StarburstConfused} instead */
export { StarburstConfused as StarburstBadge14 } from "./components/StarburstConfused.js";
/** @deprecated Use {@link StarburstSmug} instead */
export { StarburstSmug as StarburstBadge15 } from "./components/StarburstSmug.js";
/** @deprecated Use {@link StarburstCrying} instead */
export { StarburstCrying as StarburstBadge16 } from "./components/StarburstCrying.js";
/** @deprecated Use {@link StarburstScared} instead */
export { StarburstScared as StarburstBadge17 } from "./components/StarburstScared.js";
/** @deprecated Use {@link StarburstBored} instead */
export { StarburstBored as StarburstBadge18 } from "./components/StarburstBored.js";
