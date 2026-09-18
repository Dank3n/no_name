type GoldWavesProps = {
  className?: string;
  variant?: "hero" | "divider";
};

/** Valuri aurii fluide + textură punctată — inspirat din bannerul luxury */
export default function GoldWaves({ className = "", variant = "hero" }: GoldWavesProps) {
  const height = variant === "hero" ? "min-h-[220px] sm:min-h-[280px]" : "min-h-[120px]";

  return (
    <div className={`relative w-full overflow-hidden ${height} ${className}`} aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="goldDots" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="1.2" fill="#8a7340" opacity="0.55" />
          </pattern>
          <linearGradient id="goldWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b8942e" />
            <stop offset="40%" stopColor="#d4af37" />
            <stop offset="70%" stopColor="#e8c96a" />
            <stop offset="100%" stopColor="#9a7b2e" />
          </linearGradient>
          <filter id="waveShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* Strat negru cu linii subtile */}
        <path
          d="M0,120 C360,200 480,40 720,100 C960,160 1080,60 1440,140 L1440,320 L0,320 Z"
          fill="#0a0a0a"
          opacity="0.95"
        />
        <path
          d="M0,160 C300,80 540,220 840,130 C1080,60 1260,180 1440,100 L1440,320 L0,320 Z"
          fill="#111111"
          filter="url(#waveShadow)"
        />

        {/* Val auriu punctat */}
        <path
          d="M0,200 C240,280 420,120 660,200 C900,280 1140,140 1440,220 L1440,320 L0,320 Z"
          fill="url(#goldWaveGrad)"
          filter="url(#waveShadow)"
        />
        <path
          d="M0,200 C240,280 420,120 660,200 C900,280 1140,140 1440,220 L1440,320 L0,320 Z"
          fill="url(#goldDots)"
          opacity="0.85"
        />

        {/* Contur auriu subțire */}
        <path
          d="M0,198 C240,278 420,118 660,198 C900,278 1140,138 1440,218"
          fill="none"
          stroke="#f0d78c"
          strokeWidth="1.5"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
