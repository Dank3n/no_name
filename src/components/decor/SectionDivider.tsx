import GoldWaves from "./GoldWaves";

export default function SectionDivider() {
  return (
    <div className="relative -mt-px bg-[var(--color-base)]">
      <GoldWaves variant="divider" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[var(--color-base)]" />
    </div>
  );
}
