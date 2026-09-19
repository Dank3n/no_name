"use client";

import { Star } from "lucide-react";
import { siteConfig } from "@/data/config";
import { useLocale } from "@/contexts/LocaleContext";

export default function ReviewsCarousel() {
  const { ui } = useLocale();
  const { google } = siteConfig;

  return (
    <section className="relative border-t border-[var(--color-gold)]/10 bg-[var(--color-base)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-[10px] tracking-[0.45em] text-[var(--color-gold)]/70 uppercase">
          {ui("reviews.sectionLabel")}
        </span>
        <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl font-light tracking-[0.22em] text-gold-gradient uppercase sm:text-5xl">
          {ui("reviews.title")}
        </h2>
        <div className="gold-line mx-auto mt-6 max-w-sm" />
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
          {ui("reviews.invite")}
        </p>

        <div className="mt-8 flex items-center justify-center gap-1.5" aria-hidden>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className="h-6 w-6 fill-[var(--color-gold)] text-[var(--color-gold)] sm:h-7 sm:w-7"
              strokeWidth={1}
            />
          ))}
        </div>

        <a
          href={google.photosUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-premium mt-10 inline-flex items-center justify-center border border-[var(--color-gold)] bg-[var(--color-gold)]/10 px-8 py-3.5 text-[10px] tracking-[0.22em] text-[var(--color-gold-light)] uppercase hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10"
        >
          {ui("reviews.writeCta")}
        </a>
      </div>
    </section>
  );
}
