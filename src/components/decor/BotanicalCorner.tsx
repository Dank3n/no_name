type BotanicalCornerProps = {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  tone?: "gold" | "ghost";
};

/** Flori line-art pe marginile paginii meniului */
export default function BotanicalCorner({
  position,
  tone = "gold",
}: BotanicalCornerProps) {
  const stroke = tone === "gold" ? "#c9a962" : "#2a2a2a";
  const opacity = tone === "gold" ? 0.55 : 0.35;

  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 scale-x-[-1]",
    "bottom-left": "bottom-0 left-0 scale-y-[-1]",
    "bottom-right": "bottom-0 right-0 scale-x-[-1] scale-y-[-1]",
  };

  return (
    <svg
      className={`pointer-events-none absolute ${positionClasses[position]} h-24 w-24 sm:h-32 sm:w-32`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g opacity={opacity} stroke={stroke} strokeWidth="0.6">
        <path d="M10 90 Q40 50 70 75 Q90 90 110 40" />
        <path d="M20 100 Q35 60 55 85 Q75 100 95 55" />
        <ellipse cx="48" cy="42" rx="14" ry="20" transform="rotate(-25 48 42)" />
        <ellipse cx="62" cy="38" rx="12" ry="18" transform="rotate(15 62 38)" />
        <ellipse cx="55" cy="48" rx="8" ry="12" />
        <circle cx="55" cy="48" r="3" fill={stroke} opacity="0.4" />
        <path d="M55 48 L55 95" strokeWidth="0.5" />
        <path d="M40 70 Q55 55 70 68" />
        <path d="M30 85 Q50 72 65 88" />
      </g>
    </svg>
  );
}
