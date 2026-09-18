"use client";

import Link from "next/link";
import { siteConfig } from "@/data/config";
import { useLocale } from "@/contexts/LocaleContext";

export default function LocationPreview() {
  const { ui } = useLocale();
  const { google, contact } = siteConfig;

  return (
    <section className="relative border-t border-[var(--color-gold)]/10 bg-[var(--color-charcoal)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24 lg:pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="text-[10px] tracking-[0.45em] text-[var(--color-gold)]/70 uppercase">
            {ui("contact.sectionLabel")}
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl font-light tracking-[0.22em] text-gold-gradient uppercase sm:text-4xl">
            {ui("contact.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-[var(--color-text-muted)]">{contact.address}</p>
          <div className="gold-line mx-auto mt-6 max-w-sm" />
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden border border-[var(--color-gold)]/25 bg-black shadow-2xl shadow-black/40 lg:min-h-[420px]">
            <iframe
              src={google.embedUrl}
              title={ui("contact.title")}
              className="h-full min-h-[320px] w-full border-0 lg:min-h-[420px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="relative min-h-[320px] overflow-hidden border border-[var(--color-gold)]/25 bg-black shadow-2xl shadow-black/40 lg:min-h-[420px]">
            <iframe
              src={google.streetViewEmbedUrl}
              title={ui("contact.streetView")}
              className="h-full min-h-[320px] w-full border-0 lg:min-h-[420px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={google.placeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--color-gold)] bg-[var(--color-gold)]/10 px-7 py-3 text-[10px] tracking-[0.22em] text-[var(--color-gold-light)] uppercase transition hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10"
          >
            {ui("contact.openInMaps")}
          </a>
          <Link
            href="/contact"
            className="border border-[var(--color-pink)]/50 px-7 py-3 text-[10px] tracking-[0.22em] text-[var(--color-pink)] uppercase transition hover:border-[var(--color-pink)] hover:bg-[var(--color-pink)]/10"
          >
            {ui("contact.reserveCta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
