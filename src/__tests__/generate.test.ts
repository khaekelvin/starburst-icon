import { describe, it, expect } from "vitest";
import { generate } from "../core/generate.js";
import type { StarburstCharacter } from "../types/index.js";

// ─── Minimal stub character for testing ──────────────────────────────────────

const stubCharacter: StarburstCharacter = {
  id: "stub",
  name: "Stub",
  description: "A minimal character used for unit tests.",
  viewBox: "0 0 100 100",
  render: (_seed, _options) => [
    {
      id: "body",
      svg: '<circle cx="50" cy="50" r="40" fill="pink" />',
      zIndex: 0,
    },
  ],
};

// ─── Tests ────────────────────────────────────────────────────────────────────

describe("generate()", () => {
  it("returns a valid SVG string", () => {
    const result = generate(stubCharacter, { seed: "hello" });
    expect(result.svg).toContain("<svg");
    expect(result.svg).toContain("</svg>");
  });

  it("echoes back the seed that was used", () => {
    const result = generate(stubCharacter, { seed: "test-seed" });
    expect(result.seed).toBe("test-seed");
  });

  it("generates a random seed when none is provided", () => {
    const result = generate(stubCharacter);
    expect(result.seed).toBeTruthy();
    expect(typeof result.seed).toBe("string");
  });

  it("same seed always produces the same SVG", () => {
    const a = generate(stubCharacter, { seed: "deterministic" });
    const b = generate(stubCharacter, { seed: "deterministic" });
    expect(a.svg).toBe(b.svg);
  });

  it("respects the size option", () => {
    const result = generate(stubCharacter, { seed: "s", size: 256 });
    expect(result.svg).toContain('width="256"');
    expect(result.svg).toContain('height="256"');
  });

  it("renders a background rect when backgroundColor is set", () => {
    const result = generate(stubCharacter, { seed: "s", backgroundColor: "#ff0000" });
    expect(result.svg).toContain("<rect");
    expect(result.svg).toContain('fill="#ff0000"');
  });

  it("omits background rect when backgroundColor is transparent", () => {
    const result = generate(stubCharacter, { seed: "s", backgroundColor: "transparent" });
    expect(result.svg).not.toContain("<rect");
  });
});
