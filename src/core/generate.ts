import type { StarburstCharacter, StarburstOptions, StarburstResult } from "../types/index.js";
import { randomSeed } from "../utils/prng.js";

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
export function generate(
  character: StarburstCharacter,
  options: StarburstOptions = {}
): StarburstResult {
  const seed = options.seed ?? randomSeed();
  const size = options.size ?? 128;
  const backgroundColor = options.backgroundColor ?? "transparent";

  const layers = character.render(seed, options);

  // Sort layers by zIndex so they stack correctly
  const sortedLayers = [...layers].sort((a, b) => a.zIndex - b.zIndex);

  const layerSvg = sortedLayers.map((layer) => layer.svg).join("\n  ");

  const backgroundRect =
    backgroundColor !== "transparent"
      ? `<rect width="100%" height="100%" fill="${backgroundColor}" />`
      : "";

  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg"`,
    `     viewBox="${character.viewBox}"`,
    `     width="${size}"`,
    `     height="${size}"`,
    `     role="img"`,
    `     aria-label="${character.name}">`,
    backgroundRect ? `  ${backgroundRect}` : null,
    `  ${layerSvg}`,
    `</svg>`,
  ]
    .filter(Boolean)
    .join("\n");

  return { svg, seed, character: character.id };
}
