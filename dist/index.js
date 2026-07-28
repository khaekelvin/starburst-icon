import { jsxs, jsx } from 'react/jsx-runtime';

// src/utils/prng.ts
function randomSeed() {
  return Math.random().toString(36).slice(2, 10);
}

// src/core/generate.ts
function generate(character, options = {}) {
  const seed = options.seed ?? randomSeed();
  const size = options.size ?? 128;
  const backgroundColor = options.backgroundColor ?? "transparent";
  const layers = character.render(seed, options);
  const sortedLayers = [...layers].sort((a, b) => a.zIndex - b.zIndex);
  const layerSvg = sortedLayers.map((layer) => layer.svg).join("\n  ");
  const backgroundRect = backgroundColor !== "transparent" ? `<rect width="100%" height="100%" fill="${backgroundColor}" />` : "";
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg"`,
    `     viewBox="${character.viewBox}"`,
    `     width="${size}"`,
    `     height="${size}"`,
    `     role="img"`,
    `     aria-label="${character.name}">`,
    backgroundRect ? `  ${backgroundRect}` : null,
    `  ${layerSvg}`,
    `</svg>`
  ].filter(Boolean).join("\n");
  return { svg, seed, character: character.id };
}

// src/characters/starburst/path.ts
var STARBURST_PATH = "M16 1.5l2.7 3.2 4.1-.7 1.4 3.9 4.1.8.1 4.2 3.3 2.6-1.5 3.9 2 3.7-3.1 2.8.6 4.1-4.1.6-1.5 3.9-4-1.2-2.7 3.2-2.7-3.2-4 1.2-1.5-3.9-4.1-.6.6-4.1-3.1-2.8 2-3.7-1.5-3.9 3.3-2.6.1-4.2 4.1-.8 1.4-3.9 4.1.7z";
var STARBURST_VIEWBOX = "0 0 32 32";

// src/characters/starburst/colors.ts
var STARBURST_COLORS = {
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
  white: "#FFFFFF"
};
function StarburstBadge1({
  color = "#ED95F4",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0"
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: STARBURST_VIEWBOX,
      fill: "none",
      role: "img",
      "aria-label": "Determined starburst character",
      children: [
        /* @__PURE__ */ jsx("path", { d: STARBURST_PATH, fill: color }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9 12.5L14 16.5M23 12.5L18 16.5",
            stroke: strokeColor,
            strokeWidth: "2.6",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: "11.5", cy: "18", r: "1.6", fill: strokeColor }),
        /* @__PURE__ */ jsx("circle", { cx: "20.5", cy: "18", r: "1.6", fill: strokeColor })
      ]
    }
  );
}
function StarburstBadge2({
  color = "#F3E777",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0"
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: STARBURST_VIEWBOX,
      fill: "none",
      role: "img",
      "aria-label": "Happy starburst character",
      children: [
        /* @__PURE__ */ jsx("path", { d: STARBURST_PATH, fill: color }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9 12C10.5 9.8 12.5 9.8 14 12M18 12C19.5 9.8 21.5 9.8 23 12",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: "11.5", cy: "16.5", r: "1.8", fill: strokeColor }),
        /* @__PURE__ */ jsx("circle", { cx: "20.5", cy: "16.5", r: "1.8", fill: strokeColor })
      ]
    }
  );
}
function StarburstBadge3({
  color = "#7ED7F5",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0"
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: STARBURST_VIEWBOX,
      fill: "none",
      role: "img",
      "aria-label": "Quirky starburst character",
      children: [
        /* @__PURE__ */ jsx("path", { d: STARBURST_PATH, fill: color }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M8.5 16H13.5",
            stroke: strokeColor,
            strokeWidth: "2.6",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M18.5 13.5V16.5C18.5 18 19.8 19.2 21.3 19.2C22.8 19.2 24.1 18 24.1 16.5V13.5",
            stroke: strokeColor,
            strokeWidth: "2.4",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function SadRedStarburstBadge({
  color = "#FF6B6B",
  strokeColor = "black",
  className = "w-4 h-4 shrink-0"
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: STARBURST_VIEWBOX,
      fill: "none",
      role: "img",
      "aria-label": "Sad starburst character",
      children: [
        /* @__PURE__ */ jsx("path", { d: STARBURST_PATH, fill: color }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9 16.5L14 12.5M23 16.5L18 12.5",
            stroke: strokeColor,
            strokeWidth: "2.6",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: "11.5", cy: "18", r: "1.6", fill: strokeColor }),
        /* @__PURE__ */ jsx("circle", { cx: "20.5", cy: "18", r: "1.6", fill: strokeColor }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12 22C14 20 18 20 20 22",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}
function StarburstBadge5({
  color = "#B5EAD7",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0"
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: STARBURST_VIEWBOX,
      fill: "none",
      role: "img",
      "aria-label": "Surprised starburst character",
      children: [
        /* @__PURE__ */ jsx("path", { d: STARBURST_PATH, fill: color }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9.5 11.5H14M18 11.5H22.5",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: "11.5", cy: "17.5", r: "2.4", fill: strokeColor }),
        /* @__PURE__ */ jsx("circle", { cx: "20.5", cy: "17.5", r: "2.4", fill: strokeColor }),
        /* @__PURE__ */ jsx("ellipse", { cx: "16", cy: "23.5", rx: "2.2", ry: "2", fill: strokeColor })
      ]
    }
  );
}
function StarburstBadge6({
  color = "#FFCBA4",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0"
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: STARBURST_VIEWBOX,
      fill: "none",
      role: "img",
      "aria-label": "Winking starburst character",
      children: [
        /* @__PURE__ */ jsx("path", { d: STARBURST_PATH, fill: color }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9.5 14H14M18 12.5C19.5 10.8 21.5 10.8 23 12.5",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9.5 18Q11.75 16.5 14 18",
            stroke: strokeColor,
            strokeWidth: "2.4",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: "20.5", cy: "17", r: "1.7", fill: strokeColor }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M13.5 21.5C15 23 19.5 23 21.5 21.5",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}
function StarburstBadge7({
  color = "#C4B5FD",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0"
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: STARBURST_VIEWBOX,
      fill: "none",
      role: "img",
      "aria-label": "Sleepy starburst character",
      children: [
        /* @__PURE__ */ jsx("path", { d: STARBURST_PATH, fill: color }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9.5 14.5L14 15.5M18 15.5L22.5 14.5",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9.5 18.5Q11.75 16.8 14 18.5",
            stroke: strokeColor,
            strokeWidth: "2.4",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M18.5 18.5Q20.75 16.8 23 18.5",
            stroke: strokeColor,
            strokeWidth: "2.4",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M13 23H19",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}
function StarburstBadge8({
  color = "#FFB347",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0"
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: STARBURST_VIEWBOX,
      fill: "none",
      role: "img",
      "aria-label": "Excited starburst character",
      children: [
        /* @__PURE__ */ jsx("path", { d: STARBURST_PATH, fill: color }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9 11.5C10.5 9.3 13 9.3 14.5 11.5M17.5 11.5C19 9.3 21.5 9.3 23 11.5",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M11.5 14.5V18.5M9.5 16.5H13.5",
            stroke: strokeColor,
            strokeWidth: "2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M20.5 14.5V18.5M18.5 16.5H22.5",
            stroke: strokeColor,
            strokeWidth: "2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M8.5 21C11.5 25.5 20.5 25.5 23.5 21",
            stroke: strokeColor,
            strokeWidth: "2.4",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}
function StarburstBadge9({
  color = "#FF4040",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0"
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: STARBURST_VIEWBOX,
      fill: "none",
      role: "img",
      "aria-label": "Angry starburst character",
      children: [
        /* @__PURE__ */ jsx("path", { d: STARBURST_PATH, fill: color }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M8 12L14 16M24 12L18 16",
            stroke: strokeColor,
            strokeWidth: "2.8",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: "11.5", cy: "18.5", r: "1.4", fill: strokeColor }),
        /* @__PURE__ */ jsx("circle", { cx: "20.5", cy: "18.5", r: "1.4", fill: strokeColor }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M11 22.5H21",
            stroke: strokeColor,
            strokeWidth: "2.4",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}
function StarburstBadge10({
  color = "#FFE14D",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0"
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: STARBURST_VIEWBOX,
      fill: "none",
      role: "img",
      "aria-label": "Laughing starburst character",
      children: [
        /* @__PURE__ */ jsx("path", { d: STARBURST_PATH, fill: color }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9 11C10.5 9 12.5 9 14 11M18 11C19.5 9 21.5 9 23 11",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9.5 17Q11.75 15.2 14 17",
            stroke: strokeColor,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M18.5 17Q20.75 15.2 23 17",
            stroke: strokeColor,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M8.5 21C11 26 21 26 23.5 21",
            stroke: strokeColor,
            strokeWidth: "2.4",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}
function StarburstBadge11({
  color = "#BAFAC8",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0"
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: STARBURST_VIEWBOX,
      fill: "none",
      role: "img",
      "aria-label": "Nervous starburst character",
      children: [
        /* @__PURE__ */ jsx("path", { d: STARBURST_PATH, fill: color }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9 11C10.5 9 12.5 9 14 11",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M18 14H23",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: "11.5", cy: "17.5", r: "1.6", fill: strokeColor }),
        /* @__PURE__ */ jsx("circle", { cx: "20.5", cy: "17.5", r: "1.6", fill: strokeColor }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M11 22Q12.5 20.5 14.5 22Q16.5 23.5 18.5 22Q20 20.5 21 22",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}
function StarburstBadge12({
  color = "#FFB3C6",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0"
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: STARBURST_VIEWBOX,
      fill: "none",
      role: "img",
      "aria-label": "In love starburst character",
      children: [
        /* @__PURE__ */ jsx("path", { d: STARBURST_PATH, fill: color }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M11.5 15.75 C9 13.75 9 11.75 11.5 13.75 C14 11.75 14 13.75 11.5 15.75",
            fill: strokeColor,
            stroke: "none"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M20.5 15.75 C18 13.75 18 11.75 20.5 13.75 C23 11.75 23 13.75 20.5 15.75",
            fill: strokeColor,
            stroke: "none"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M13 22C14.5 23.5 17.5 23.5 19 22",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round",
            fill: "none"
          }
        )
      ]
    }
  );
}
function StarburstBadge13({
  color = "#93C5FD",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0"
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: STARBURST_VIEWBOX,
      fill: "none",
      role: "img",
      "aria-label": "Cool starburst character",
      children: [
        /* @__PURE__ */ jsx("path", { d: STARBURST_PATH, fill: color }),
        /* @__PURE__ */ jsx("rect", { x: "7.5", y: "14", width: "8", height: "5", rx: "1", fill: strokeColor }),
        /* @__PURE__ */ jsx("rect", { x: "16.5", y: "14", width: "8", height: "5", rx: "1", fill: strokeColor }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M15.5 16.5H16.5",
            stroke: strokeColor,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M5 16H7.5M24.5 16H27",
            stroke: strokeColor,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M13 22.5C14.5 24 18.5 24 21 22.5",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round",
            fill: "none"
          }
        )
      ]
    }
  );
}
function StarburstBadge14({
  color = "#FDE68A",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0"
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: STARBURST_VIEWBOX,
      fill: "none",
      role: "img",
      "aria-label": "Confused starburst character",
      children: [
        /* @__PURE__ */ jsx("path", { d: STARBURST_PATH, fill: color }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9 11C10.5 9 12.5 9 14 11",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M18 13.5L23 14.5",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: "11.5", cy: "17.5", r: "1.9", fill: strokeColor }),
        /* @__PURE__ */ jsx("circle", { cx: "20.5", cy: "17.5", r: "1.4", fill: strokeColor }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M11 22Q13 23.5 15 22Q17 20.5 19 22Q21 23.5 22 22",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}
function StarburstBadge15({
  color = "#DDD6FE",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0"
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: STARBURST_VIEWBOX,
      fill: "none",
      role: "img",
      "aria-label": "Smug starburst character",
      children: [
        /* @__PURE__ */ jsx("path", { d: STARBURST_PATH, fill: color }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9.5 13.5C11 12.2 12.5 12.2 14.5 13.5M17.5 13.5C19.5 12.2 21 12.2 22.5 13.5",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9.5 17.5Q11.75 16.5 14 17.5",
            stroke: strokeColor,
            strokeWidth: "2.4",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M18.5 17.5Q20.75 16.5 23 17.5",
            stroke: strokeColor,
            strokeWidth: "2.4",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12 22.5C14.5 24.5 19 24 21 22.5",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}
function StarburstBadge16({
  color = "#BFDBFE",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0"
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: STARBURST_VIEWBOX,
      fill: "none",
      role: "img",
      "aria-label": "Crying starburst character",
      children: [
        /* @__PURE__ */ jsx("path", { d: STARBURST_PATH, fill: color }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9 14.5L14 12.5M18 12.5L23 14.5",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: "11.5", cy: "16", r: "1.4", fill: strokeColor }),
        /* @__PURE__ */ jsx("circle", { cx: "20.5", cy: "16", r: "1.4", fill: strokeColor }),
        /* @__PURE__ */ jsx("ellipse", { cx: "11.5", cy: "19.5", rx: "1", ry: "1.5", fill: strokeColor }),
        /* @__PURE__ */ jsx("ellipse", { cx: "20.5", cy: "19.5", rx: "1", ry: "1.5", fill: strokeColor }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M11 23.5C13 21.5 19 21.5 21 23.5",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round",
            fill: "none"
          }
        )
      ]
    }
  );
}
function StarburstBadge17({
  color = "#FFEDD5",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0"
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: STARBURST_VIEWBOX,
      fill: "none",
      role: "img",
      "aria-label": "Scared starburst character",
      children: [
        /* @__PURE__ */ jsx("path", { d: STARBURST_PATH, fill: color }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9 9C10.5 7 13 7 14.5 9M17.5 9C19 7 21.5 7 23 9",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: "11.5", cy: "17", r: "2.8", fill: strokeColor }),
        /* @__PURE__ */ jsx("circle", { cx: "20.5", cy: "17", r: "2.8", fill: strokeColor }),
        /* @__PURE__ */ jsx("ellipse", { cx: "16", cy: "24.5", rx: "2.5", ry: "2.2", fill: strokeColor })
      ]
    }
  );
}
function StarburstBadge18({
  color = "#E5E7EB",
  strokeColor = "black",
  className = "w-5 h-5 shrink-0"
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className,
      viewBox: STARBURST_VIEWBOX,
      fill: "none",
      role: "img",
      "aria-label": "Bored starburst character",
      children: [
        /* @__PURE__ */ jsx("path", { d: STARBURST_PATH, fill: color }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9.5 14H14M18 14H22.5",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx("ellipse", { cx: "11.5", cy: "17.5", rx: "2.2", ry: "1.1", fill: strokeColor }),
        /* @__PURE__ */ jsx("ellipse", { cx: "20.5", cy: "17.5", rx: "2.2", ry: "1.1", fill: strokeColor }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12 22.5C13.5 22.2 18.5 22.2 20 22.5",
            stroke: strokeColor,
            strokeWidth: "2.2",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}
function RandomStarburstBadge({
  badgeIndex,
  strokeColor = "black",
  className
}) {
  const mod = badgeIndex % 3;
  const classNameProp = className !== void 0 ? { className } : {};
  if (mod === 0) {
    return /* @__PURE__ */ jsx(StarburstBadge1, { color: "#ED95F4", strokeColor, ...classNameProp });
  }
  if (mod === 1) {
    return /* @__PURE__ */ jsx(StarburstBadge2, { color: "#F3E777", strokeColor, ...classNameProp });
  }
  return /* @__PURE__ */ jsx(StarburstBadge3, { color: "#7ED7F5", strokeColor, ...classNameProp });
}

export { RandomStarburstBadge, STARBURST_COLORS, STARBURST_PATH, STARBURST_VIEWBOX, SadRedStarburstBadge, StarburstBadge1, StarburstBadge10, StarburstBadge11, StarburstBadge12, StarburstBadge13, StarburstBadge14, StarburstBadge15, StarburstBadge16, StarburstBadge17, StarburstBadge18, StarburstBadge2, StarburstBadge3, StarburstBadge5, StarburstBadge6, StarburstBadge7, StarburstBadge8, StarburstBadge9, generate };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map