import * as react from 'react';

/**
 * A single layer of an SVG character (e.g. body, eyes, mouth).
 * Each character is composed of multiple layers stacked in order.
 */
interface StarburstLayer {
    /** Unique identifier for this layer */
    id: string;
    /** The raw SVG path data or element string for this layer */
    svg: string;
    /** Optional colour override — hex, hsl(), or named colour */
    color?: string;
    /** z-order; lower numbers render first (behind) */
    zIndex: number;
}
/**
 * A complete character schema.
 * Add new characters by implementing this interface.
 */
interface StarburstCharacter {
    /** Unique slug used in URLs and API calls (e.g. "blob", "star") */
    id: string;
    /** Human-readable display name */
    name: string;
    /** Short description shown in the docs */
    description: string;
    /** SVG viewBox string, e.g. "0 0 100 100" */
    viewBox: string;
    /** Function that returns the layers for a given seed + options */
    render: (seed: string, options: StarburstOptions) => StarburstLayer[];
}
interface StarburstOptions {
    /**
     * Seed string — same seed always produces the same character.
     * Defaults to a random value if omitted.
     */
    seed?: string;
    /**
     * Output size in pixels (applied as width/height on the SVG element).
     * Defaults to 128.
     */
    size?: number;
    /**
     * Background colour behind the character.
     * Set to "transparent" to disable.
     * Defaults to "transparent".
     */
    backgroundColor?: string;
    /**
     * Extra per-character options (colours, accessories, etc.).
     * Each character schema documents its own accepted keys.
     */
    [key: string]: unknown;
}
/**
 * Props shared by all Starburst badge React components.
 */
interface StarburstProps {
    /**
     * Fill colour of the starburst shape.
     * Accepts any CSS colour string. Defaults to the variant's canonical colour.
     */
    color?: string;
    /**
     * Colour used for facial features (eyebrows, eyes, mouth).
     * Use "black" for light fills and "white" for dark fills.
     * Defaults to "black".
     */
    strokeColor?: string;
    /**
     * Tailwind or custom CSS class applied to the `<svg>` element.
     * Defaults to `"w-5 h-5 shrink-0"` (20×20 px).
     */
    className?: string;
}
interface StarburstResult {
    /** The full SVG markup string — ready to embed or render */
    svg: string;
    /** The seed that was used (useful when no seed was provided) */
    seed: string;
    /** The character schema that was used */
    character: string;
}

/**
 * Generate an SVG string for a given character schema and options.
 *
 * @example
 * ```ts
 * import { generate } from "starburst";
 * import { blob } from "starburst/characters/blob";
 *
 * const result = generate(blob, { seed: "hello" });
 * document.body.innerHTML = result.svg;
 * ```
 */
declare function generate(character: StarburstCharacter, options?: StarburstOptions): StarburstResult;

declare function starburstColor(name: string): string;
declare function defineColors(colors: Record<string, string>): void;

/**
 * Official Starburst color palette.
 *
 * Pair each fill with its intended stroke color:
 * - Light fills → "black" stroke
 * - Dark fills   → "white" stroke
 */
declare const STARBURST_COLORS: {
    /** Pastel pink — StarburstDetermined */
    readonly pastelPink: "#ED95F4";
    /** Soft yellow — StarburstHappy */
    readonly softYellow: "#F3E777";
    /** Electric blue — StarburstQuirky */
    readonly electricBlue: "#7ED7F5";
    /** Sad red — StarburstSad */
    readonly sadRed: "#FF6B6B";
    /** Mint green — StarburstSurprised */
    readonly mint: "#B5EAD7";
    /** Soft peach — StarburstWinking */
    readonly peach: "#FFCBA4";
    /** Lavender — StarburstSleepy */
    readonly lavender: "#C4B5FD";
    /** Orange — StarburstExcited */
    readonly orange: "#FFB347";
    /** Angry red — StarburstAngry */
    readonly angryRed: "#FF4040";
    /** Lemon yellow — StarburstLaughing */
    readonly lemon: "#FFE14D";
    /** Lime green — StarburstNervous */
    readonly lime: "#BAFAC8";
    /** Rose pink — StarburstInLove */
    readonly rose: "#FFB3C6";
    /** Sky blue — StarburstCool */
    readonly skyBlue: "#93C5FD";
    /** Amber — StarburstConfused */
    readonly amber: "#FDE68A";
    /** Soft purple — StarburstSmug */
    readonly softPurple: "#DDD6FE";
    /** Pale blue — StarburstCrying */
    readonly paleBlue: "#BFDBFE";
    /** Pale cream — StarburstScared */
    readonly cream: "#FFEDD5";
    /** Light gray — StarburstBored */
    readonly gray: "#E5E7EB";
    /** Inverted dark — used for summary counter badges */
    readonly dark: "#000000";
    /** Inverted light — stroke color for dark-fill badges */
    readonly white: "#FFFFFF";
};
type StarburstFillColor = (typeof STARBURST_COLORS)[keyof typeof STARBURST_COLORS] | (string & Record<never, never>);
type StarburstStrokeColor = "black" | "white" | (string & Record<never, never>);

/**
 * The 12-pointed radial starburst SVG path.
 * Constructed on a 32×32 canvas, centered at (16, 16).
 * Top apex starts at (16, 1.5), alternating outer peaks and inner valleys clockwise.
 */
declare const STARBURST_PATH = "M16 1.5l2.7 3.2 4.1-.7 1.4 3.9 4.1.8.1 4.2 3.3 2.6-1.5 3.9 2 3.7-3.1 2.8.6 4.1-4.1.6-1.5 3.9-4-1.2-2.7 3.2-2.7-3.2-4 1.2-1.5-3.9-4.1-.6.6-4.1-3.1-2.8 2-3.7-1.5-3.9 3.3-2.6.1-4.2 4.1-.8 1.4-3.9 4.1.7z";
/** SVG viewBox for the 32×32 starburst canvas. */
declare const STARBURST_VIEWBOX = "0 0 32 32";

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
declare function StarburstDetermined({ color, strokeColor, className, }: StarburstProps): react.JSX.Element;

/**
 * **StarburstHappy** — Happy / Arched
 *
 * Smooth cubic Bézier arch eyebrows (^ ^) and solid dot eyes.
 * Default fill: soft yellow `#F3E777`.
 *
 * @example
 * ```tsx
 * <StarburstHappy color="#F3E777" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
declare function StarburstHappy({ color, strokeColor, className, }: StarburstProps): react.JSX.Element;

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
declare function StarburstQuirky({ color, strokeColor, className, }: StarburstProps): react.JSX.Element;

/**
 * **StarburstSad** — Sad / Frustrated
 *
 * Reverse diagonal eyebrows (/ \), solid dot eyes, and an inverted curve frown.
 * Default fill: sad red `#FF6B6B`.
 *
 * @example
 * ```tsx
 * <StarburstSad color="#FF6B6B" strokeColor="black" className="w-4 h-4 shrink-0" />
 * ```
 */
declare function StarburstSad({ color, strokeColor, className, }: StarburstProps): react.JSX.Element;

/**
 * **StarburstSurprised** — Surprised / Shocked
 *
 * Raised flat eyebrows, wide open dot eyes, and a small open-O mouth.
 * Default fill: mint `#B5EAD7`.
 *
 * @example
 * ```tsx
 * <StarburstSurprised color="#B5EAD7" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
declare function StarburstSurprised({ color, strokeColor, className, }: StarburstProps): react.JSX.Element;

/**
 * **StarburstWinking** — Winking
 *
 * Left eye closed (squinting arc), right eye open dot.
 * Arched right eyebrow, flat left eyebrow, and a smirk.
 * Default fill: soft peach `#FFCBA4`.
 *
 * @example
 * ```tsx
 * <StarburstWinking color="#FFCBA4" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
declare function StarburstWinking({ color, strokeColor, className, }: StarburstProps): react.JSX.Element;

/**
 * **StarburstSleepy** — Sleepy / Tired
 *
 * Drooping inward eyebrows, both eyes closed as heavy arcs, and a small neutral mouth.
 * Default fill: lavender `#C4B5FD`.
 *
 * @example
 * ```tsx
 * <StarburstSleepy color="#C4B5FD" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
declare function StarburstSleepy({ color, strokeColor, className, }: StarburstProps): react.JSX.Element;

/**
 * **StarburstExcited** — Excited / Sparkly
 *
 * Very high arched eyebrows, cross-star shaped eyes (✦), and a wide open smile.
 * Default fill: orange `#FFB347`.
 *
 * @example
 * ```tsx
 * <StarburstExcited color="#FFB347" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
declare function StarburstExcited({ color, strokeColor, className, }: StarburstProps): react.JSX.Element;

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
declare function StarburstAngry({ color, strokeColor, className, }: StarburstProps): react.JSX.Element;

/**
 * **StarburstLaughing** — Laughing / LOL
 *
 * High happy arched eyebrows, both eyes squinting shut (happy closed arcs),
 * and a very wide open belly-laugh smile.
 * Default fill: bright lemon yellow `#FFE14D`.
 *
 * @example
 * ```tsx
 * <StarburstLaughing color="#FFE14D" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
declare function StarburstLaughing({ color, strokeColor, className, }: StarburstProps): react.JSX.Element;

/**
 * **StarburstNervous** — Nervous
 *
 * Asymmetric eyebrows (one arched, one flat), small dot eyes,
 * and a wavy nervous mouth.
 * Default fill: lime green `#BAFAC8`.
 *
 * @example
 * ```tsx
 * <StarburstNervous color="#BAFAC8" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
declare function StarburstNervous({ color, strokeColor, className, }: StarburstProps): react.JSX.Element;

/**
 * **StarburstInLove** — In Love
 *
 * No eyebrows, filled heart eyes, and a dreamy smile.
 * Default fill: rose pink `#FFB3C6`.
 *
 * @example
 * ```tsx
 * <StarburstInLove color="#FFB3C6" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
declare function StarburstInLove({ color, strokeColor, className, }: StarburstProps): react.JSX.Element;

/**
 * **StarburstCool** — Cool
 *
 * No eyebrows (shades cover top of face), filled rectangular sunglass lenses
 * with a bridge and arms, and a slight smirk.
 * Default fill: sky blue `#93C5FD`.
 *
 * @example
 * ```tsx
 * <StarburstCool color="#93C5FD" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
declare function StarburstCool({ color, strokeColor, className, }: StarburstProps): react.JSX.Element;

/**
 * **StarburstConfused** — Confused
 *
 * Asymmetric eyebrows (one arched, one angled down outward), mismatched dot
 * eyes (different sizes), and a wavy confused mouth.
 * Default fill: amber `#FDE68A`.
 *
 * @example
 * ```tsx
 * <StarburstConfused color="#FDE68A" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
declare function StarburstConfused({ color, strokeColor, className, }: StarburstProps): react.JSX.Element;

/**
 * **StarburstSmug** — Smug
 *
 * Relaxed low-arched eyebrows, closed content eyes (arcs bowing upward),
 * and an asymmetric smug smirk.
 * Default fill: light purple `#DDD6FE`.
 *
 * @example
 * ```tsx
 * <StarburstSmug color="#DDD6FE" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
declare function StarburstSmug({ color, strokeColor, className, }: StarburstProps): react.JSX.Element;

/**
 * **StarburstCrying** — Crying
 *
 * Sad inward-tilted eyebrows, small dot eyes, teardrop ellipses below each
 * eye, and a frown.
 * Default fill: pale blue `#BFDBFE`.
 *
 * @example
 * ```tsx
 * <StarburstCrying color="#BFDBFE" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
declare function StarburstCrying({ color, strokeColor, className, }: StarburstProps): react.JSX.Element;

/**
 * **StarburstScared** — Scared / Frightened
 *
 * Very high arched eyebrows (higher than Surprised), large wide-open eyes,
 * and a big open-O mouth conveying genuine fear.
 * Default fill: pale cream `#FFEDD5`.
 *
 * @example
 * ```tsx
 * <StarburstScared color="#FFEDD5" strokeColor="black" className="w-5 h-5 shrink-0" />
 * ```
 */
declare function StarburstScared({ color, strokeColor, className, }: StarburstProps): react.JSX.Element;

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
declare function StarburstBored({ color, strokeColor, className, }: StarburstProps): react.JSX.Element;

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
declare function RandomStarburstBadge({ badgeIndex, strokeColor, className, }: RandomStarburstBadgeProps): react.JSX.Element;

export { RandomStarburstBadge, STARBURST_COLORS, STARBURST_PATH, STARBURST_VIEWBOX, StarburstSad as SadRedStarburstBadge, StarburstAngry, StarburstDetermined as StarburstBadge1, StarburstLaughing as StarburstBadge10, StarburstNervous as StarburstBadge11, StarburstInLove as StarburstBadge12, StarburstCool as StarburstBadge13, StarburstConfused as StarburstBadge14, StarburstSmug as StarburstBadge15, StarburstCrying as StarburstBadge16, StarburstScared as StarburstBadge17, StarburstBored as StarburstBadge18, StarburstHappy as StarburstBadge2, StarburstQuirky as StarburstBadge3, StarburstSurprised as StarburstBadge5, StarburstWinking as StarburstBadge6, StarburstSleepy as StarburstBadge7, StarburstExcited as StarburstBadge8, StarburstAngry as StarburstBadge9, StarburstBored, type StarburstCharacter, StarburstConfused, StarburstCool, StarburstCrying, StarburstDetermined, StarburstExcited, type StarburstFillColor, StarburstHappy, StarburstInLove, StarburstLaughing, type StarburstLayer, StarburstNervous, type StarburstOptions, type StarburstProps, StarburstQuirky, type StarburstResult, StarburstSad, StarburstScared, StarburstSleepy, StarburstSmug, type StarburstStrokeColor, StarburstSurprised, StarburstWinking, defineColors, generate, starburstColor };
