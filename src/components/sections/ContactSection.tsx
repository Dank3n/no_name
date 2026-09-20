"use client";

import { siteConfig } from "@/data/config";
import BrandLogo from "@/components/brand/BrandLogo";
import { useLocale } from "@/contexts/LocaleContext";
import ReserveButton from "@/components/reservation/ReserveButton";
import OpenNowBadge from "@/components/layout/OpenNowBadge";

export default function ContactSection() {
  const { contact, google } = siteConfig;
  const { t, ui, dir } = useLocale();

  return (
    <section id="contact" className="page-section bg-[var(--color-base)] pb-32 lg:pb-40">
      <div className="mx-auto max-w-6xl" dir={dir}>
        <div className="mb-16 text-center">
          <span className="text-[10px] tracking-[0.45em] text-[var(--color-gold)]/60 uppercase">
            {ui("contact.sectionLabel")}
          </span>
          <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light tracking-[0.25em] text-gold-gradient uppercase sm:text-5xl">
            {ui("contact.title")}
          </h1>
          <div className="gold-line mx-auto mt-6 max-w-sm" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <BrandLogo size="md" align="left" />

            <a
              href={google.placeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-[var(--color-gold)]/30 bg-black/40 px-4 py-3"
            >
              <span className="font-[family-name:var(--font-cormorant)] text-2xl text-gold-gradient">
                {google.rating.toFixed(1)}
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[var(--color-gold-light)] uppercase">
                ★★★★☆ · {google.reviewCount} {ui("hero.reviews")} · {google.priceRange}
              </span>
            </a>

            <div>
              <h3 className="text-[10px] font-medium tracking-[0.3em] text-[var(--color-gold)] uppercase">
                {ui("contact.address")}
              </h3>
              <p className="mt-2 text-lg text-[var(--color-text)]">{contact.address}</p>
            </div>

            <div>
              <h3 className="text-[10px] font-medium tracking-[0.3em] text-[var(--color-gold)] uppercase">
                {ui("contact.reservations")}
              </h3>
              <p className="mt-2">
                <a
                  href="tel:+40747171361"
                  className="text-xl text-[var(--color-gold-light)] transition hover:text-[var(--color-emerald)]"
                >
                  {contact.phone}
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-medium tracking-[0.3em] text-[var(--color-gold)] uppercase">
                {ui("contact.hours")}
              </h3>
              <div className="mt-3">
                <OpenNowBadge />
              </div>
              <ul className="mt-3 space-y-2">
                {contact.hours.map((row, i) => (
                  <li
                    key={i}
                    className="flex justify-between gap-4 border-b border-[var(--color-gold)]/10 py-2 text-sm"
                  >
                    <span className="text-[var(--color-text-muted)]">{t(row.days)}</span>
                    <span>{t(row.time)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {["highlights.dineIn", "highlights.terrace", "highlights.music"].map(
                (key) => (
                  <span
                    key={key}
                    className="border border-[var(--color-gold)]/20 px-3 py-1.5 text-[10px] tracking-[0.16em] text-[var(--color-gold-light)] uppercase"
                  >
                    {ui(key)}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <ReserveButton className="inline-block border border-[var(--color-pink)]/60 px-8 py-3 text-xs tracking-[0.25em] text-[var(--color-pink)] uppercase hover:bg-[var(--color-pink)]/10">
                {ui("contact.reserveCta")}
              </ReserveButton>
              <a
                href="tel:+40747171361"
                className="btn-premium inline-block border border-[var(--color-gold)]/50 px-8 py-3 text-xs tracking-[0.25em] text-[var(--color-gold-light)] uppercase hover:bg-[var(--color-gold)]/10"
              >
                {ui("cta.callNow")}
              </a>
              <a
                href={google.placeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium inline-block border border-[var(--color-gold)]/50 px-8 py-3 text-xs tracking-[0.25em] text-[var(--color-gold-light)] uppercase hover:bg-[var(--color-gold)]/10"
              >
                {ui("contact.openInMaps")}
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative min-h-[280px] overflow-hidden rounded-lg border border-[var(--color-gold)]/25 bg-black shadow-2xl shadow-black/40 sm:rounded-xl lg:min-h-[320px]">
              <iframe
                src={google.embedUrl}
                title={ui("contact.title")}
                className="h-full min-h-[280px] w-full border-0 lg:min-h-[320px]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="relative min-h-[240px] overflow-hidden rounded-lg border border-[var(--color-gold)]/25 bg-black shadow-2xl shadow-black/40 sm:rounded-xl lg:min-h-[280px]">
              <iframe
                src={google.streetViewEmbedUrl}
                title={ui("contact.streetView")}
                className="h-full min-h-[240px] w-full border-0 lg:min-h-[280px]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
