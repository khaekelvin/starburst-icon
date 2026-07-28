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

// ─── Shape constants ──────────────────────────────────────────────────────────
export { STARBURST_PATH, STARBURST_VIEWBOX } from "./characters/starburst/path.js";
export { STARBURST_COLORS } from "./characters/starburst/colors.js";
export type { StarburstFillColor, StarburstStrokeColor } from "./characters/starburst/colors.js";

// ─── React components ─────────────────────────────────────────────────────────
export { StarburstBadge1 } from "./components/StarburstBadge1.js";
export { StarburstBadge2 } from "./components/StarburstBadge2.js";
export { StarburstBadge3 } from "./components/StarburstBadge3.js";
export { SadRedStarburstBadge } from "./components/SadRedStarburstBadge.js";
export { StarburstBadge5 } from "./components/StarburstBadge5.js";
export { StarburstBadge6 } from "./components/StarburstBadge6.js";
export { StarburstBadge7 } from "./components/StarburstBadge7.js";
export { StarburstBadge8 } from "./components/StarburstBadge8.js";
export { StarburstBadge9 } from "./components/StarburstBadge9.js";
export { StarburstBadge10 } from "./components/StarburstBadge10.js";
export { StarburstBadge11 } from "./components/StarburstBadge11.js";
export { StarburstBadge12 } from "./components/StarburstBadge12.js";
export { StarburstBadge13 } from "./components/StarburstBadge13.js";
export { StarburstBadge14 } from "./components/StarburstBadge14.js";
export { StarburstBadge15 } from "./components/StarburstBadge15.js";
export { StarburstBadge16 } from "./components/StarburstBadge16.js";
export { StarburstBadge17 } from "./components/StarburstBadge17.js";
export { StarburstBadge18 } from "./components/StarburstBadge18.js";
export { RandomStarburstBadge } from "./components/RandomStarburstBadge.js";
