"use client";

import Image from "next/image";
import { siteConfig } from "@/data/config";
import BrandLogo from "@/components/brand/BrandLogo";
import GoldWaves from "@/components/decor/GoldWaves";
import { useLocale } from "@/contexts/LocaleContext";

export default function HeroSection() {
  const { hero } = siteConfig;
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
          alt=""
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[var(--color-base)]/80 to-[var(--color-base)]" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-0 sm:px-6">
        <p className="mb-6 text-[10px] tracking-[0.55em] text-[var(--color-gold)]/70 uppercase sm:text-xs">
          {t(siteConfig.tagline)}
        </p>

        <BrandLogo size="lg" align="center" />

        <div className="gold-line mx-auto mt-8 max-w-md" />
        <p className="mt-6 max-w-lg text-center text-base text-[var(--color-text-muted)] sm:text-lg">
          {t(hero.subtitle)}
        </p>
        {firstHoursRow && (
          <p className="mt-4 text-center text-xs tracking-[0.2em] text-[var(--color-gold)]/80 uppercase">
            {t(firstHoursRow.days)}: {t(firstHoursRow.time)}
          </p>
        )}

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="#menu"
            className="min-w-[220px] border border-[var(--color-gold)] bg-[var(--color-gold)]/10 px-8 py-3.5 text-xs font-medium tracking-[0.25em] text-[var(--color-gold-light)] uppercase transition hover:bg-[var(--color-emerald)]/15 hover:border-[var(--color-emerald)]"
          >
            {t(hero.ctaMenu)}
          </a>
          <a
            href="#events"
            className="min-w-[220px] border border-[var(--color-pink)]/50 px-8 py-3.5 text-xs font-medium tracking-[0.25em] text-[var(--color-pink)]/90 uppercase transition hover:border-[var(--color-pink)] hover:bg-[var(--color-pink)]/10"
          >
            {t(hero.ctaEvents)}
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-auto w-full">
        <GoldWaves variant="hero" />
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-[var(--color-gold)]/40 uppercase">
          {ui("hero.scroll")}
        </p>
      </div>
    </section>
  );
}
