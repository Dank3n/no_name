"use client";

import Link from "next/link";
import { siteConfig } from "@/data/config";
import { useLocale } from "@/contexts/LocaleContext";

const quotes = [
  {
    author: "Albert C.",
    text: {
      ro: "Mâncare foarte bună și serviciu plăcut. Multe opțiuni de bucate românești tipice.",
      en: "Very good food and nice service. A lot of options for typical Romanian dishes.",
    },
  },
  {
    author: "Ivaylo T.",
    text: {
      ro: "Mâncare gustoasă, de calitate. Ospătar amabil, vorbitor de engleză. Prețuri accesibile.",
      en: "Very delicious and quality food. Helpful waiter speaking English. Affordable prices.",
    },
  },
  {
    author: "Mădălina Z.",
    text: {
      ro: "Meniul e divers, de la carne la vegan. Mâncarea e cu adevărat gustoasă.",
      en: "The menu is quite diverse, from meat to vegan. The food is really tasty.",
    },
  },
] as const;

export default function ReviewsSection() {
  const { ui, locale } = useLocale();
  const { google } = siteConfig;

  return (
    <section className="relative bg-[var(--color-base)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="text-[10px] tracking-[0.45em] text-[var(--color-gold)]/70 uppercase">
            {ui("reviews.sectionLabel")}
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl font-light tracking-[0.22em] text-gold-gradient uppercase sm:text-4xl">
            {ui("reviews.title")}
          </h2>
          <div className="gold-line mx-auto mt-6 max-w-sm" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((quote) => (
            <blockquote
              key={quote.author}
              className="border border-[var(--color-gold)]/20 bg-black/40 p-6"
            >
              <p className="text-sm leading-relaxed text-[var(--color-text)]/90">
                “{locale === "ro" ? quote.text.ro : quote.text.en}”
              </p>
              <footer className="mt-5 text-[10px] tracking-[0.22em] text-[var(--color-gold)] uppercase">
                {quote.author} · Google
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`${google.placeUrl}?hl=ro`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--color-gold)]/50 px-7 py-3 text-[10px] tracking-[0.22em] text-[var(--color-gold-light)] uppercase transition hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10"
          >
            {ui("reviews.openReviews")}
          </a>
          <Link
            href="/contact"
            className="border border-[var(--color-pink)]/40 px-7 py-3 text-[10px] tracking-[0.22em] text-[var(--color-pink)] uppercase transition hover:border-[var(--color-pink)] hover:bg-[var(--color-pink)]/10"
          >
            {ui("contact.openInMaps")}
          </Link>
        </div>
      </div>
    </section>
  );
}
