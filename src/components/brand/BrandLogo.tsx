import { siteConfig } from "@/data/config";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
  align?: "center" | "left";
  className?: string;
};

export default function BrandLogo({
  size = "md",
  align = "center",
  className = "",
}: BrandLogoProps) {
  const { brand } = siteConfig;

  const primarySizes = {
    sm: "text-xl sm:text-2xl tracking-[0.15em]",
    md: "text-3xl sm:text-4xl tracking-[0.2em]",
    lg: "text-5xl sm:text-7xl lg:text-8xl tracking-[0.22em]",
  };

  const secondarySizes = {
    sm: "text-[10px] tracking-[0.25em] mr-1",
    md: "text-xs sm:text-sm tracking-[0.3em] mr-2",
    lg: "text-sm sm:text-base tracking-[0.35em] mr-4 sm:mr-8",
  };

  const alignClass =
    align === "center" ? "items-center" : "items-start";

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      <span
        className={`font-[family-name:var(--font-cormorant)] font-light text-gold-gradient uppercase ${primarySizes[size]}`}
      >
        {brand.primary}
      </span>
      <span
        className={`font-[family-name:var(--font-italiana)] -mt-1 self-end text-[var(--color-gold)]/75 italic ${secondarySizes[size]}`}
      >
        {brand.secondary}
      </span>
    </div>
  );
}
