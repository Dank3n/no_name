"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Calendar, Expand } from "lucide-react";
import { upcomingEvents } from "@/data/events";
import { useLocale } from "@/contexts/LocaleContext";
import ReserveButton from "@/components/reservation/ReserveButton";
import ImageLightbox from "@/components/gallery/ImageLightbox";

type EventsVibeSectionProps = {
  headingLevel?: "h1" | "h2";
};

export default function EventsVibeSection({ headingLevel = "h2" }: EventsVibeSectionProps) {
  const { t, ui } = useLocale();
  const Heading = headingLevel;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxItems = useMemo(
    () => upcomingEvents.map((event) => ({ src: event.image, alt: t(event.title) })),
    [t]
  );

  return (
    <section id="vibe" className="relative border-t border-[var(--color-gold)]/10 bg-[var(--color-base)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 gold-dots-bg opacity-[0.03]" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="text-[10px] tracking-[0.45em] text-[var(--color-pink)]/70 uppercase">{ui("vibe.sectionLabel")}</span>
          <Heading className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl font-light tracking-[0.22em] text-gold-gradient uppercase sm:text-4xl">
            {ui("vibe.title")}
          </Heading>
          <p className="mx-auto mt-5 max-w-xl text-sm text-[var(--color-text-muted)]">{ui("vibe.sectionDesc")}</p>
          <div className="gold-line mx-auto mt-6 max-w-sm" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <article
              key={event.id}
              className="group overflow-hidden border border-[var(--color-gold)]/15 bg-black/50 transition duration-500 hover:-translate-y-1 hover:border-[var(--color-gold)]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(upcomingEvents.findIndex((item) => item.id === event.id))}
                  className="absolute inset-0 z-10 cursor-zoom-in"
                  aria-label={`${ui("a11y.enlarge")}: ${t(event.title)}`}
                />
                <Image
                  src={event.image}
                  alt={t(event.title)}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <span className="pointer-events-none absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center border border-[var(--color-gold)]/40 bg-black/50 text-[var(--color-gold-light)] opacity-0 transition group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                </span>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <span className="pointer-events-none absolute top-3 left-3 z-20 border border-[var(--color-gold)]/40 bg-black/70 px-3 py-1 text-[10px] tracking-[0.2em] text-[var(--color-gold-light)] uppercase backdrop-blur-sm">
                  {t(event.weekday)} · {event.time}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl tracking-[0.12em] text-gold-gradient uppercase">
                  {t(event.title)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{t(event.description)}</p>
                <ReserveButton
                  intent={{ eventId: event.id, eventTitle: `${t(event.weekday)}: ${t(event.title)}` }}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 border border-[var(--color-pink)]/50 px-4 py-3 text-[10px] tracking-[0.2em] text-[var(--color-pink)] uppercase hover:border-[var(--color-pink)] hover:bg-[var(--color-pink)]/10"
                >
                  <Calendar className="h-3.5 w-3.5" />
                  {ui("vibe.reserveEvent")}
                </ReserveButton>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ImageLightbox
        items={lightboxItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </section>
  );
}
