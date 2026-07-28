// ─── Character definition ─────────────────────────────────────────────────────

/**
 * A single layer of an SVG character (e.g. body, eyes, mouth).
 * Each character is composed of multiple layers stacked in order.
 */
export interface StarburstLayer {
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
export interface StarburstCharacter {
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

// ─── Options ──────────────────────────────────────────────────────────────────

export interface StarburstOptions {
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

// ─── Result ───────────────────────────────────────────────────────────────────

// ─── React component props ───────────────────────────────────────────────────

/**
 * Props shared by all Starburst badge React components.
 */
export interface StarburstProps {
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

// ─── Result ───────────────────────────────────────────────────────────────────

export interface StarburstResult {
  /** The full SVG markup string — ready to embed or render */
  svg: string;
  /** The seed that was used (useful when no seed was provided) */
  seed: string;
  /** The character schema that was used */
  character: string;
}
