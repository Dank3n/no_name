"use client";

import Link from "next/link";
import { siteConfig } from "@/data/config";
import BrandLogo from "@/components/brand/BrandLogo";
import HeroVideoBackdrop from "@/components/hero/HeroVideoBackdrop";
import OpenNowBadge from "@/components/layout/OpenNowBadge";
import ReserveButton from "@/components/reservation/ReserveButton";
import { useLocale } from "@/contexts/LocaleContext";

const heroCtaClass =
  "btn-premium inline-flex min-w-[220px] items-center justify-center px-8 py-3.5 text-center font-[family-name:var(--font-dm-sans)] !text-xs !font-semibold !tracking-[0.25em] !leading-none text-black uppercase shadow-[0_10px_30px_rgba(0,0,0,0.55)] [text-shadow:none]";

export default function HeroSection() {
  const { hero } = siteConfig;
  const { t, ui } = useLocale();
  const firstHoursRow = siteConfig.contact.hours[0];

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      <HeroVideoBackdrop />

      <div className="hero-copy relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-0 sm:px-6">
        <p className="mb-6 text-[11px] font-semibold tracking-[0.55em] text-white uppercase sm:text-sm">
          {t(siteConfig.tagline)}
        </p>

        <BrandLogo size="lg" align="center" emphasis />

        <div className="gold-line mx-auto mt-8 h-0.5 max-w-md" />
        <p className="mt-6 max-w-lg text-center text-base font-medium text-white sm:text-lg">
          {t(hero.subtitle)}
        </p>
        {firstHoursRow && (
          <div className="mt-4 flex flex-col items-center gap-3">
            <p className="text-center text-xs font-semibold tracking-[0.2em] text-white uppercase sm:text-sm">
              {t(firstHoursRow.days)}: {t(firstHoursRow.time)}
            </p>
            <OpenNowBadge className="bg-black/70" />
          </div>
        )}

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/menu"
            className={`${heroCtaClass} border border-[var(--color-gold)] bg-[var(--color-gold)] hover:border-[var(--color-gold-light)] hover:bg-[var(--color-gold-light)]`}
          >
            {t(hero.ctaMenu)}
          </Link>
          <ReserveButton className={`${heroCtaClass} border border-[var(--color-pink)] bg-[var(--color-pink)] hover:bg-[#e6a8db]`}>
            {ui("contact.reserveCta")}
          </ReserveButton>
        </div>
      </div>

      <p className="hero-copy relative z-10 mt-auto pb-8 text-center text-[11px] font-semibold tracking-[0.4em] text-white uppercase">
        {ui("hero.scroll")}
      </p>
    </section>
  );
}
