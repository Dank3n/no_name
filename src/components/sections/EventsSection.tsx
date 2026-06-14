"use client";

import { useState } from "react";
import { siteConfig } from "@/data/config";
import SectionDivider from "@/components/decor/SectionDivider";
import { useLocale } from "@/contexts/LocaleContext";

export default function EventsSection() {
  const { ui } = useLocale();
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <SectionDivider />
      <section
        id="events"
        className="section-padding relative border-t border-[var(--color-gold)]/5 bg-[var(--color-charcoal)]"
      >
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="text-[10px] tracking-[0.45em] text-[var(--color-pink)]/70 uppercase">
              {ui("events.sectionLabel")}
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light tracking-[0.25em] text-gold-gradient uppercase sm:text-5xl">
              {ui("events.andreeaBldTitle")}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm text-[var(--color-text-muted)]">
              {ui("events.andreeaBldDesc")}
            </p>
            <div className="gold-line mx-auto mt-6 max-w-sm" />
          </div>

          <div className="mx-auto max-w-5xl border border-[var(--color-gold)]/25 bg-black/60 p-4 shadow-2xl shadow-black/50 sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p className="font-[family-name:var(--font-italiana)] text-base text-[var(--color-gold)]/85 italic sm:text-lg">
                {ui("events.andreeaBldSubtitle")}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsFullscreen(true)}
                  className="inline-flex items-center justify-center border border-[var(--color-gold)]/60 bg-[var(--color-gold)]/10 px-4 py-2 text-xs font-medium tracking-[0.16em] text-[var(--color-gold-light)] uppercase transition hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10"
                >
                  {ui("events.fullscreen")}
                </button>
                <a
                  href={siteConfig.specialEventsPdfUrl}
                  download
                  className="inline-flex items-center justify-center border border-[var(--color-gold)]/60 bg-transparent px-4 py-2 text-xs font-medium tracking-[0.16em] text-[var(--color-gold-light)] uppercase transition hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10"
                >
                  {ui("events.downloadPdf")}
                </a>
              </div>
            </div>

            <div className="overflow-hidden border border-[var(--color-gold)]/25 bg-black">
              <iframe
                src={`${siteConfig.specialEventsPdfUrl}#view=FitH`}
                title={ui("events.andreeaBldTitle")}
                className="h-[65vh] w-full"
              />
            </div>
          </div>

          {isFullscreen ? (
            <div className="fixed inset-0 z-[120] bg-black/95 p-2 sm:p-4" role="dialog" aria-modal="true">
              <div className="mb-2 flex justify-end sm:mb-3">
                <button
                  type="button"
                  onClick={() => setIsFullscreen(false)}
                  className="inline-flex items-center justify-center border border-[var(--color-gold)]/70 bg-[var(--color-gold)]/10 px-4 py-2 text-xs font-medium tracking-[0.16em] text-[var(--color-gold-light)] uppercase transition hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10"
                >
                  {ui("events.closeFullscreen")}
                </button>
              </div>
              <iframe
                src={`${siteConfig.specialEventsPdfUrl}#view=FitH`}
                title={ui("events.andreeaBldTitle")}
                className="h-[calc(100vh-4rem)] w-full border border-[var(--color-gold)]/25 bg-black sm:h-[calc(100vh-5rem)]"
              />
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
