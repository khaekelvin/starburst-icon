import * as p from "@clack/prompts";
import color from "picocolors";
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";

const EMOTIONS = [
  { component: "StarburstDetermined", emotion: "Determined", color: "#ED95F4", stroke: "black" },
  { component: "StarburstHappy", emotion: "Happy", color: "#F3E777", stroke: "black" },
  { component: "StarburstQuirky", emotion: "Quirky", color: "#7ED7F5", stroke: "black" },
  { component: "StarburstSad", emotion: "Sad", color: "#FF6B6B", stroke: "white" },
  { component: "StarburstSurprised", emotion: "Surprised", color: "#B5EAD7", stroke: "black" },
  { component: "StarburstWinking", emotion: "Winking", color: "#FFCBA4", stroke: "black" },
  { component: "StarburstSleepy", emotion: "Sleepy", color: "#C4B5FD", stroke: "black" },
  { component: "StarburstExcited", emotion: "Excited", color: "#FFB347", stroke: "black" },
  { component: "StarburstAngry", emotion: "Angry", color: "#FF4040", stroke: "black" },
  { component: "StarburstLaughing", emotion: "Laughing", color: "#FFE14D", stroke: "black" },
  { component: "StarburstNervous", emotion: "Nervous", color: "#BAFAC8", stroke: "black" },
  { component: "StarburstInLove", emotion: "In Love", color: "#FFB3C6", stroke: "black" },
  { component: "StarburstCool", emotion: "Cool", color: "#93C5FD", stroke: "black" },
  { component: "StarburstConfused", emotion: "Confused", color: "#FDE68A", stroke: "black" },
  { component: "StarburstSmug", emotion: "Smug", color: "#DDD6FE", stroke: "black" },
  { component: "StarburstCrying", emotion: "Crying", color: "#BFDBFE", stroke: "black" },
  { component: "StarburstScared", emotion: "Scared", color: "#FFEDD5", stroke: "black" },
  { component: "StarburstBored", emotion: "Bored", color: "#E5E7EB", stroke: "black" },
] as const;

const COMPONENT_TYPES = [
  {
    value: "button",
    label: "Button",
    hint: "simple button with a starburst badge",
  },
  {
    value: "button-counter",
    label: "Button with Counter",
    hint: "button + numeric counter badge",
  },
  {
    value: "button-counter-confetti",
    label: "Button with Counter + Confetti",
    hint: "button + counter + confetti burst on click",
  },
] as const;

function buttonTemplate(
  emotion: typeof EMOTIONS[number],
  color: string,
  stroke: string
): string {
  return `import { ${emotion.component} } from "starburst-icon";

interface StarburstButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  color?: string;
  strokeColor?: string;
}

export function StarburstButton({
  label = "Click me",
  color = "${color}",
  strokeColor = "${stroke}",
  className,
  onClick,
}: StarburstButtonProps) {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 1rem",
        border: "1px solid #e5e7eb",
        borderRadius: "9999px",
        cursor: "pointer",
        background: "white",
        fontWeight: 600,
        fontSize: "0.875rem",
        transition: "box-shadow 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      <${emotion.component} color={color} strokeColor={strokeColor} />
      <span>{label}</span>
    </button>
  );
}
`;
}

function counterTemplate(
  emotion: typeof EMOTIONS[number],
  color: string,
  stroke: string
): string {
  return `import { ${emotion.component} } from "starburst-icon";

interface StarburstButtonCounterProps {
  label?: string;
  count?: number;
  onClick?: () => void;
  className?: string;
  color?: string;
  strokeColor?: string;
}

export function StarburstButtonCounter({
  label = "Click me",
  count = 0,
  color = "${color}",
  strokeColor = "${stroke}",
  className,
  onClick,
}: StarburstButtonCounterProps) {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 1rem",
        border: "1px solid #e5e7eb",
        borderRadius: "9999px",
        cursor: "pointer",
        background: "white",
        fontWeight: 600,
        fontSize: "0.875rem",
        transition: "box-shadow 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      <${emotion.component} color={color} strokeColor={strokeColor} />
      <span>{label}</span>
      {count > 0 && (
        <span
          style={{
            background: "#ef4444",
            color: "white",
            borderRadius: "9999px",
            padding: "0.125rem 0.5rem",
            fontSize: "0.75rem",
            fontWeight: 700,
            lineHeight: 1.4,
          }}
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}
`;
}

function confettiTemplate(
  emotion: typeof EMOTIONS[number],
  color: string,
  stroke: string
): string {
  return `import { useState, useCallback } from "react";
import { ${emotion.component} } from "starburst-icon";

const CONFETTI_COLORS = [
  "#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff",
  "#ff8fab", "#c084fc", "#fbbf24", "#34d399",
];

const CONFETTI_PIECES = 30;

interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
  scale: number;
  delay: number;
}

interface StarburstConfettiButtonProps {
  label?: string;
  count?: number;
  onClick?: () => void;
  className?: string;
  color?: string;
  strokeColor?: string;
}

export function StarburstConfettiButton({
  label = "Click me",
  count = 0,
  color = "${color}",
  strokeColor = "${stroke}",
  className,
  onClick,
}: StarburstConfettiButtonProps) {
  const [particles, setParticles] = useState<ConfettiParticle[]>([]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const newParticles: ConfettiParticle[] = Array.from(
        { length: CONFETTI_PIECES },
        (_, i) => ({
          id: Date.now() + i,
          x: cx + (Math.random() - 0.5) * 40,
          y: cy,
          color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
          rotation: Math.random() * 360,
          scale: 0.4 + Math.random() * 0.6,
          delay: Math.random() * 0.15,
        })
      );

      setParticles((prev) => [...prev, ...newParticles]);

      setTimeout(() => {
        setParticles((prev) =>
          prev.filter((p) => !newParticles.find((n) => n.id === p.id))
        );
      }, 1200);

      onClick?.();
    },
    [onClick]
  );

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={handleClick}
        className={className}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.5rem 1rem",
          border: "1px solid #e5e7eb",
          borderRadius: "9999px",
          cursor: "pointer",
          background: "white",
          fontWeight: 600,
          fontSize: "0.875rem",
          transition: "box-shadow 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
      >
        <${emotion.component} color={color} strokeColor={strokeColor} />
        <span>{label}</span>
        {count > 0 && (
          <span
            style={{
              background: "#ef4444",
              color: "white",
              borderRadius: "9999px",
              padding: "0.125rem 0.5rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              lineHeight: 1.4,
            }}
          >
            {count > 99 ? "99+" : count}
          </span>
        )}
      </button>

      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "fixed",
            left: p.x,
            top: p.y,
            width: 8,
            height: 8,
            borderRadius: Math.random() > 0.5 ? "50%" : 0,
            background: p.color,
            transform: \`rotate(\${p.rotation}deg) scale(\${p.scale})\`,
            pointerEvents: "none",
            animation: \`confetti-fall 1.2s ease-out \${p.delay}s forwards\`,
          }}
        />
      ))}

      <style>{\`
        @keyframes confetti-fall {
          0% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(120px) rotate(720deg) scale(0.3);
          }
        }
      \`}</style>
    </div>
  );
}
`;
}

async function main() {
  p.intro(`${color.bgCyan(color.black(" starburst-icon "))} ${color.dim("scaffold a component")}`);

  const type = await p.select({
    message: "What type of component?",
    options: COMPONENT_TYPES.map((t) => ({
      value: t.value,
      label: t.label,
      hint: t.hint,
    })),
  });

  if (p.isCancel(type)) {
    p.cancel("Cancelled");
    process.exit(0);
  }

  const emotionChoice = await p.select({
    message: "Choose an emotion",
    options: EMOTIONS.map((e) => ({
      value: e.emotion,
      label: `${e.emotion.padEnd(12)} ${color.dim(e.color)}`,
    })),
  });

  if (p.isCancel(emotionChoice)) {
    p.cancel("Cancelled");
    process.exit(0);
  }

  const emotion = EMOTIONS.find((e) => e.emotion === emotionChoice)!;

  const customColor = await p.text({
    message: "Fill color",
    placeholder: emotion.color,
    defaultValue: emotion.color,
    validate: (val) => {
      if (val && !/^#[0-9a-fA-F]{6}$/.test(val) && !/^#[0-9a-fA-F]{3}$/.test(val)) {
        return "Enter a valid hex color (e.g. #ED95F4)";
      }
    },
  });

  if (p.isCancel(customColor)) {
    p.cancel("Cancelled");
    process.exit(0);
  }

  const finalColor = customColor || emotion.color;

  const customStroke = await p.text({
    message: "Stroke color",
    placeholder: emotion.stroke,
    defaultValue: emotion.stroke,
  });

  if (p.isCancel(customStroke)) {
    p.cancel("Cancelled");
    process.exit(0);
  }

  const finalStroke = customStroke || emotion.stroke;

  const fileName = type === "button"
    ? "StarburstButton.tsx"
    : type === "button-counter"
    ? "StarburstButtonCounter.tsx"
    : "StarburstConfettiButton.tsx";

  const outPath = await p.text({
    message: "Output path",
    placeholder: `./${fileName}`,
    defaultValue: `./${fileName}`,
  });

  if (p.isCancel(outPath)) {
    p.cancel("Cancelled");
    process.exit(0);
  }

  const resolvedPath = resolve(outPath || `./${fileName}`);

  let content: string;
  if (type === "button-counter-confetti") {
    content = confettiTemplate(emotion, finalColor, finalStroke);
  } else if (type === "button-counter") {
    content = counterTemplate(emotion, finalColor, finalStroke);
  } else {
    content = buttonTemplate(emotion, finalColor, finalStroke);
  }

  const spinner = p.spinner();
  spinner.start("Writing file");

  const dir = dirname(resolvedPath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(resolvedPath, content, "utf-8");

  spinner.stop(`Created ${color.cyan(resolvedPath)}`);

  p.outro(
    `${color.green("Done!")} Import it:\n  ${color.cyan(`import { ${type === "button-counter-confetti" ? "StarburstConfettiButton" : type === "button-counter" ? "StarburstButtonCounter" : "StarburstButton"} } from "./${fileName.replace(".tsx", "")}"`)}`
  );
}

main().catch((err) => {
  console.error(color.red(err.message));
  process.exit(1);
});