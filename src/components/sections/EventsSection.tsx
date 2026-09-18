"use client";

import SocialLinks from "@/components/layout/SocialLinks";
import { useLocale } from "@/contexts/LocaleContext";

export default function EventsSection() {
  const { ui } = useLocale();

  return (
    <section
      id="events"
      className="page-section relative min-h-[70vh] border-t border-[var(--color-gold)]/5 bg-[var(--color-charcoal)]"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="text-[10px] tracking-[0.45em] text-[var(--color-pink)]/70 uppercase">
            {ui("events.sectionLabel")}
          </span>
          <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light tracking-[0.25em] text-gold-gradient uppercase sm:text-5xl">
            {ui("events.title")}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm text-[var(--color-text-muted)]">
            {ui("events.sectionDesc")}
          </p>
          <div className="gold-line mx-auto mt-6 max-w-sm" />
        </div>

        <div className="mx-auto max-w-xl border border-[var(--color-gold)]/20 bg-black/40 px-8 py-14 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-light tracking-[0.2em] text-gold-gradient uppercase sm:text-3xl">
            {ui("events.emptyTitle")}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[var(--color-text-muted)]">
            {ui("events.emptyDesc")}
          </p>
          <div className="mt-8 flex justify-center">
            <SocialLinks size="md" showLabel />
          </div>
        </div>
      </div>
    </section>
  );
}
