"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import BrandLogo from "@/components/brand/BrandLogo";
import GoldWaves from "@/components/decor/GoldWaves";
import { useLocale } from "@/contexts/LocaleContext";

export default function HeroSection() {
  const { hero, google } = siteConfig;
  const { t, ui } = useLocale();
  const firstHoursRow = siteConfig.contact.hours[0];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-[var(--color-base)]">
        <Image
          src={hero.backgroundImage}
          alt="No Name Cafe by Casa Ede"
          fill
          priority
          className="object-cover object-[50%_70%] scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-[var(--color-base)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_70%)]" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-0 sm:px-6">
        <a
          href={google.placeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 inline-flex items-center gap-3 border border-[var(--color-gold)]/30 bg-black/40 px-4 py-2 backdrop-blur-sm transition hover:border-[var(--color-gold)]"
        >
          <span className="font-[family-name:var(--font-cormorant)] text-lg tracking-wide text-gold-gradient">
            {google.rating.toFixed(1)}
          </span>
          <span className="text-[10px] tracking-[0.22em] text-[var(--color-gold-light)] uppercase">
            ★★★★☆ · {google.reviewCount} {ui("hero.reviews")}
          </span>
        </a>

        <p className="mb-6 text-[10px] tracking-[0.55em] text-[var(--color-gold)]/80 uppercase sm:text-xs">
          {t(siteConfig.tagline)}
        </p>

        <BrandLogo size="lg" align="center" />

        <div className="gold-line mx-auto mt-8 max-w-md" />
        <p className="mt-6 max-w-lg text-center text-base text-[var(--color-text)]/90 sm:text-lg">
          {t(hero.subtitle)}
        </p>
        {firstHoursRow && (
          <p className="mt-4 text-center text-xs tracking-[0.2em] text-[var(--color-gold)]/85 uppercase">
            {t(firstHoursRow.days)}: {t(firstHoursRow.time)} · {google.priceRange}
          </p>
        )}

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/menu"
            className="min-w-[220px] border border-[var(--color-gold)] bg-[var(--color-gold)]/15 px-8 py-3.5 text-center text-xs font-medium tracking-[0.25em] text-[var(--color-gold-light)] uppercase transition hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/15"
          >
            {t(hero.ctaMenu)}
          </Link>
          <Link
            href="/contact"
            className="min-w-[220px] border border-[var(--color-pink)]/50 px-8 py-3.5 text-center text-xs font-medium tracking-[0.25em] text-[var(--color-pink)]/90 uppercase transition hover:border-[var(--color-pink)] hover:bg-[var(--color-pink)]/10"
          >
            {ui("contact.reserveCta")}
          </Link>
        </div>
      </div>

      <div className="relative z-10 mt-auto w-full">
        <GoldWaves variant="hero" />
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-[var(--color-gold)]/50 uppercase">
          {ui("hero.scroll")}
        </p>
      </div>
    </section>
  );
}
