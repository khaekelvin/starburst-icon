/**
 * Deterministic pseudo-random number generator seeded by a string.
 * Returns a function that produces numbers in [0, 1) — same seed = same sequence.
 */
export function seededRandom(seed: string): () => number {
  // Simple xmur3 hash → mulberry32 PRNG
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }

  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

/**
 * Pick a random item from an array using the provided PRNG.
 */
export function pickRandom<T>(items: readonly T[], rand: () => number): T {
  const index = Math.floor(rand() * items.length);
  // Safe: index is always in [0, items.length - 1]
  return items[index] as T;
}

/**
 * Generate a random alphanumeric seed string.
 */
export function randomSeed(): string {
  return Math.random().toString(36).slice(2, 10);
}
