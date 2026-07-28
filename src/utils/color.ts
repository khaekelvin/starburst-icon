import { STARBURST_COLORS } from "../characters/starburst/colors.js";

const COLOR_MAP: Record<string, string> = {};
for (const [key, value] of Object.entries(STARBURST_COLORS)) {
  COLOR_MAP[key.toLowerCase()] = value;
}

export function starburstColor(name: string): string {
  return COLOR_MAP[name.toLowerCase()] ?? name;
}

export function defineColors(colors: Record<string, string>): void {
  for (const [key, value] of Object.entries(colors)) {
    COLOR_MAP[key.toLowerCase()] = value;
  }
}