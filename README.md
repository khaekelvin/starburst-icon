# Starburst

> Cute expressive starburst characters as React SVG components — 18 emotions, zero runtime dependencies.

```bash
npm install starburst-icon
```

## Usage

```tsx
import { StarburstDetermined } from "starburst-icon";
import { StarburstInLove } from "starburst-icon";

function App() {
  return (
    <div>
      <StarburstDetermined />
      <StarburstInLove className="w-8 h-8" color="#FFB3C6" />
    </div>
  );
}
```

Pick from **18 emotion variants** — each with a canonical color:

### Light fill (use `strokeColor="black"`)

| Component | Emotion | Default fill |
|---|---|---|
| `StarburstDetermined` | Determined | `#ED95F4` |
| `StarburstHappy` | Happy | `#F3E777` |
| `StarburstQuirky` | Quirky | `#7ED7F5` |
| `StarburstSurprised` | Surprised | `#B5EAD7` |
| `StarburstWinking` | Winking | `#FFCBA4` |
| `StarburstSleepy` | Sleepy | `#C4B5FD` |
| `StarburstExcited` | Excited | `#FFB347` |
| `StarburstAngry` | Angry | `#FF4040` |
| `StarburstLaughing` | Laughing | `#FFE14D` |
| `StarburstNervous` | Nervous | `#BAFAC8` |
| `StarburstInLove` | In Love | `#FFB3C6` |
| `StarburstCool` | Cool | `#93C5FD` |
| `StarburstConfused` | Confused | `#FDE68A` |
| `StarburstSmug` | Smug | `#DDD6FE` |
| `StarburstCrying` | Crying | `#BFDBFE` |
| `StarburstScared` | Scared | `#FFEDD5` |
| `StarburstBored` | Bored | `#E5E7EB` |

### Dark fill (use `strokeColor="white"`)

| Component | Emotion | Default fill |
|---|---|---|
| `StarburstSad` | Sad | `#FF6B6B` |

### Random picker

```tsx
import { RandomStarburstBadge } from "starburst-icon";

// Deterministic — cycles Determined/Happy/Quirky based on index
profiles.map((p, i) => <RandomStarburstBadge key={p.id} badgeIndex={i} />)
```

### Colour names

Use palette names instead of hex codes — they resolve automatically:

```tsx
<StarburstDetermined color="pastelPink" />
<StarburstInLove color="rose" strokeColor="white" />
```

Or register your own names:

```tsx
import { defineColors } from "starburst-icon";

defineColors({ brand: "#FF5500", success: "#22C55E" });
<StarburstHappy color="brand" />
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