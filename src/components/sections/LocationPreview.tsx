"use client";

import { Clock, MapPin, PawPrint, Phone } from "lucide-react";
import { siteConfig } from "@/data/config";
import { useLocale } from "@/contexts/LocaleContext";
import OpenNowBadge from "@/components/layout/OpenNowBadge";
import ReserveButton from "@/components/reservation/ReserveButton";

export default function LocationPreview() {
  const { ui, t } = useLocale();
  const { google, contact } = siteConfig;
  const firstHoursRow = contact.hours[0];

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

          <div className="flex flex-col justify-center border border-[var(--color-gold)]/25 bg-black/50 px-6 py-8 sm:px-8">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-[var(--color-gold)]" />
              <div>
                <p className="text-[10px] tracking-[0.28em] text-[var(--color-gold)] uppercase">{ui("contact.address")}</p>
                <p className="mt-2 text-base text-[var(--color-text)]">{contact.address}</p>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-[var(--color-gold)]" />
              <div>
                <p className="text-[10px] tracking-[0.28em] text-[var(--color-gold)] uppercase">{ui("contact.reservations")}</p>
                <a
                  href={contact.phoneHref}
                  className="mt-2 inline-block text-xl text-[var(--color-gold-light)] transition hover:text-[var(--color-emerald)]"
                >
                  {contact.phone}
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3">
              <Clock className="mt-1 h-4 w-4 shrink-0 text-[var(--color-gold)]" />
              <div>
                <p className="text-[10px] tracking-[0.28em] text-[var(--color-gold)] uppercase">{ui("contact.hours")}</p>
                {firstHoursRow && (
                  <p className="mt-2 text-sm text-[var(--color-text)]">
                    {t(firstHoursRow.days)}: {t(firstHoursRow.time)}
                  </p>
                )}
                <div className="mt-3">
                  <OpenNowBadge />
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 text-[11px] tracking-[0.2em] text-[var(--color-gold)] uppercase">
              <PawPrint className="h-4 w-4" />
              <span>{ui("nav.petFriendly")}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={google.placeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium border border-[var(--color-gold)] bg-[var(--color-gold)]/10 px-7 py-3 text-[10px] tracking-[0.22em] text-[var(--color-gold-light)] uppercase hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10"
              >
                {ui("contact.openInMaps")}
              </a>
              <ReserveButton className="border border-[var(--color-pink)]/50 px-7 py-3 text-[10px] tracking-[0.22em] text-[var(--color-pink)] uppercase hover:border-[var(--color-pink)] hover:bg-[var(--color-pink)]/10">
                {ui("contact.reserveCta")}
              </ReserveButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
