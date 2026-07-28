# Starburst

> Cute expressive starburst characters as React SVG components — 18 emotions, zero runtime dependencies.

```bash
npm install starburst-icon
```

## Usage

```tsx
import { StarburstBadge1 } from "starburst-icon";
import { StarburstBadge12 } from "starburst-icon";

function App() {
  return (
    <div>
      <StarburstBadge1 />
      <StarburstBadge12 className="w-8 h-8" color="#FFB3C6" />
    </div>
  );
}
```

Pick from **18 emotion variants** — each with a canonical color:

### Light fill (use `strokeColor="black"`)

| Component | Emotion | Default fill | Example |
|---|---|---|---|
| `StarburstBadge1` | Determined | `#ED95F4` | |
| `StarburstBadge2` | Happy | `#F3E777` | |
| `StarburstBadge3` | Quirky | `#7ED7F5` | |
| `StarburstBadge5` | Surprised | `#B5EAD7` | |
| `StarburstBadge6` | Winking | `#FFCBA4` | |
| `StarburstBadge7` | Sleepy | `#C4B5FD` | |
| `StarburstBadge8` | Excited | `#FFB347` | |
| `StarburstBadge9` | Angry | `#FF4040` | |
| `StarburstBadge10` | Laughing | `#FFE14D` | |
| `StarburstBadge11` | Nervous | `#BAFAC8` | |
| `StarburstBadge12` | In Love | `#FFB3C6` | |
| `StarburstBadge13` | Cool | `#93C5FD` | |
| `StarburstBadge14` | Confused | `#FDE68A` | |
| `StarburstBadge15` | Smug | `#DDD6FE` | |
| `StarburstBadge16` | Crying | `#BFDBFE` | |
| `StarburstBadge17` | Scared | `#FFEDD5` | |
| `StarburstBadge18` | Bored | `#E5E7EB` | |

### Dark fill (use `strokeColor="white"`)

| Component | Emotion | Default fill |
|---|---|---|
| `SadRedStarburstBadge` | Sad | `#FF6B6B` |

### Random picker

```tsx
import { RandomStarburstBadge } from "starburst-icon";

// Deterministic — cycles Badge1/2/3 based on index
profiles.map((p, i) => <RandomStarburstBadge key={p.id} badgeIndex={i} />)
```

### Props

All components accept:

| Prop | Type | Default | Description |
|---|---|---|---|
| `color` | `string` | Variant default | Fill colour of the starburst shape |
| `strokeColor` | `string` | `"black"` | Colour for facial features |
| `className` | `string` | `"w-5 h-5 shrink-0"` | CSS/Tailwind class |

### Framework-agnostic API

```ts
import { generate } from "starburst-icon";
import { STARBURST_PATH, STARBURST_VIEWBOX, STARBURST_COLORS } from "starburst-icon";

// Build an SVG string from raw parts (no React needed)
const svg = `<svg viewBox="${STARBURST_VIEWBOX}" width="128" height="128">
  <path d="${STARBURST_PATH}" fill="${STARBURST_COLORS.pastelPink}" />
</svg>`;
```

## CLI

Scaffold a ready-to-use component into your project:

```bash
npx starburst-icon
```

This walks you through choosing:
- **Component type** — Button, Button with Counter, or Button with Counter + Confetti
- **Emotion** — which starburst character to use (Determined, Happy, Sad, etc.)
- **Colors** — fill and stroke colours
- **Output path** — where to save the generated `.tsx` file

The generated component is self-contained and uses inline styles (no Tailwind required).

## License

MIT
