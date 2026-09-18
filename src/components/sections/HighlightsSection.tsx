"use client";

import { siteConfig } from "@/data/config";
import { useLocale } from "@/contexts/LocaleContext";

const highlightKeys = [
  "highlights.romanian",
  "highlights.portions",
  "highlights.music",
  "highlights.terrace",
  "highlights.dineIn",
  "highlights.delivery",
  "highlights.pickup",
  "highlights.hours",
] as const;

export default function HighlightsSection() {
  const { ui } = useLocale();
  const { google } = siteConfig;

  return (
    <section className="relative bg-[var(--color-base)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="text-[10px] tracking-[0.45em] text-[var(--color-emerald)]/80 uppercase">
            {ui("highlights.sectionLabel")}
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl font-light tracking-[0.25em] text-gold-gradient uppercase sm:text-4xl">
            {ui("highlights.title")}
          </h2>
          <div className="gold-line mx-auto mt-6 max-w-sm" />
        </div>

        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <a
            href={google.placeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--color-gold)]/25 bg-black/40 px-4 py-6 text-center transition hover:border-[var(--color-gold)]"
          >
            <p className="font-[family-name:var(--font-cormorant)] text-3xl text-gold-gradient">{google.rating.toFixed(1)}</p>
            <p className="mt-2 text-[10px] tracking-[0.2em] text-[var(--color-text-muted)] uppercase">{ui("contact.rating")}</p>
          </a>
          <div className="border border-[var(--color-gold)]/25 bg-black/40 px-4 py-6 text-center">
            <p className="font-[family-name:var(--font-cormorant)] text-3xl text-gold-gradient">{google.reviewCount}</p>
            <p className="mt-2 text-[10px] tracking-[0.2em] text-[var(--color-text-muted)] uppercase">{ui("hero.reviews")}</p>
          </div>
          <div className="border border-[var(--color-gold)]/25 bg-black/40 px-4 py-6 text-center">
            <p className="font-[family-name:var(--font-cormorant)] text-2xl text-gold-gradient sm:text-3xl">{google.priceRange}</p>
            <p className="mt-2 text-[10px] tracking-[0.2em] text-[var(--color-text-muted)] uppercase">{ui("contact.price")}</p>
          </div>
          <div className="border border-[var(--color-gold)]/25 bg-black/40 px-4 py-6 text-center">
            <p className="font-[family-name:var(--font-cormorant)] text-2xl text-gold-gradient sm:text-3xl">{google.plusCode}</p>
            <p className="mt-2 text-[10px] tracking-[0.2em] text-[var(--color-text-muted)] uppercase">{ui("contact.plusCode")}</p>
          </div>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-3">
          {highlightKeys.map((key) => (
            <li
              key={key}
              className="border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/5 px-4 py-2 text-[10px] tracking-[0.18em] text-[var(--color-gold-light)] uppercase"
            >
              {ui(key)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
