"use client";

import Image from "next/image";
import { siteConfig } from "@/data/config";
import BrandLogo from "@/components/brand/BrandLogo";
import SectionDivider from "@/components/decor/SectionDivider";
import { useLocale } from "@/contexts/LocaleContext";

export default function ContactSection() {
  const { contact } = siteConfig;
  const { t, ui, dir } = useLocale();

  return (
    <>
      <SectionDivider />
      <section id="contact" className="section-padding bg-[var(--color-base)]">
        <div className="mx-auto max-w-6xl" dir={dir}>
          <div className="mb-16 text-center">
            <span className="text-[10px] tracking-[0.45em] text-[var(--color-gold)]/60 uppercase">
              {ui("contact.sectionLabel")}
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light tracking-[0.25em] text-gold-gradient uppercase sm:text-5xl">
              {ui("contact.title")}
            </h2>
            <div className="gold-line mx-auto mt-6 max-w-sm" />
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <BrandLogo size="md" align="left" />

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
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
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

              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="inline-block border border-[var(--color-pink)]/60 px-8 py-3 text-xs tracking-[0.25em] text-[var(--color-pink)] uppercase transition hover:bg-[var(--color-pink)]/10"
              >
                {ui("contact.reserveCta")}
              </a>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-[var(--color-gold)]/25 bg-black shadow-2xl shadow-black/40 sm:rounded-xl lg:min-h-[420px]">
              {contact.mapEmbedUrl ? (
                <>
                  <iframe
                    src={contact.mapEmbedUrl}
                    title={ui("contact.title")}
                    className="h-full min-h-[360px] w-full border-0 lg:min-h-[420px]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 border border-[var(--color-gold)]/50 bg-black/80 px-4 py-2 text-[10px] tracking-[0.18em] text-[var(--color-gold-light)] uppercase backdrop-blur-sm transition hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10"
                  >
                    {ui("contact.openInMaps")}
                  </a>
                </>
              ) : (
                <>
                  <Image
                    src={contact.mapPlaceholder}
                    alt={ui("contact.mapAlt")}
                    fill
                    className="object-cover opacity-40"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-6 text-center">
                    <p className="text-sm text-[var(--color-text-muted)]">
                      {ui("contact.mapHint")}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
