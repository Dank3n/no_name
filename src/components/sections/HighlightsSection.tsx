"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Expand } from "lucide-react";
import { siteConfig } from "@/data/config";
import { useLocale } from "@/contexts/LocaleContext";
import ReserveButton from "@/components/reservation/ReserveButton";
import ImageLightbox from "@/components/gallery/ImageLightbox";

const signatures = [
  {
    id: "terrace",
    image: "/images/venue/interior-4.webp",
    titleKey: "highlights.cardTerraceTitle",
    textKey: "highlights.cardTerraceText",
    featured: true,
  },
  {
    id: "grill",
    image: "/images/venue/dish-1.webp",
    titleKey: "highlights.cardGrillTitle",
    textKey: "highlights.cardGrillText",
    featured: false,
  },
  {
    id: "dessert",
    image: "/images/venue/dish-9.webp",
    titleKey: "highlights.cardDessertTitle",
    textKey: "highlights.cardDessertText",
    featured: false,
  },
] as const;

export default function HighlightsSection() {
  const { ui } = useLocale();
  const { google } = siteConfig;
  const featured = signatures.find((item) => item.featured)!;
  const sideCards = signatures.filter((item) => !item.featured);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxItems = useMemo(
    () => signatures.map((item) => ({ src: item.image, alt: ui(item.titleKey) })),
    [ui]
  );

  const openAt = (id: (typeof signatures)[number]["id"]) => {
    setLightboxIndex(signatures.findIndex((item) => item.id === id));
  };

  return (
    <section className="relative border-t border-[var(--color-gold)]/10 bg-[var(--color-base)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <span className="text-[10px] tracking-[0.45em] text-[var(--color-emerald)]/80 uppercase">
            {ui("highlights.sectionLabel")}
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl font-light tracking-[0.18em] text-gold-gradient uppercase sm:text-5xl">
            {ui("highlights.title")}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
            {ui("highlights.sectionDesc")}
          </p>
          <div className="gold-line mt-6 max-w-sm" />
        </div>

        <div className="grid gap-4 lg:grid-cols-5">
          <article className="group relative min-h-[420px] overflow-hidden border border-[var(--color-gold)]/15 bg-black lg:col-span-3 lg:min-h-[560px]">
            <button
              type="button"
              onClick={() => openAt(featured.id)}
              className="absolute inset-0 z-10 cursor-zoom-in"
              aria-label={`${ui("a11y.enlarge")}: ${ui(featured.titleKey)}`}
            />
            <Image
              src={featured.image}
              alt={ui(featured.titleKey)}
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-[50%_85%] transition duration-700 group-hover:scale-105"
            />
            <span className="pointer-events-none absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center border border-[var(--color-gold)]/40 bg-black/50 text-[var(--color-gold-light)] opacity-0 transition group-hover:opacity-100">
              <Expand className="h-4 w-4" />
            </span>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-6 sm:p-8">
              <p className="text-[10px] tracking-[0.28em] text-[var(--color-gold)] uppercase">{ui("highlights.hours")}</p>
              <h3 className="mt-3 font-[family-name:var(--font-cormorant)] text-3xl tracking-[0.12em] text-gold-gradient uppercase sm:text-4xl">
                {ui(featured.titleKey)}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--color-text)]/85">
                {ui(featured.textKey)}
              </p>
            </div>
          </article>

          <div className="grid gap-4 lg:col-span-2">
            {sideCards.map((card) => (
              <article
                key={card.id}
                className="group relative min-h-[200px] overflow-hidden border border-[var(--color-gold)]/15 bg-black lg:min-h-[272px]"
              >
                <button
                  type="button"
                  onClick={() => openAt(card.id)}
                  className="absolute inset-0 z-10 cursor-zoom-in"
                  aria-label={`${ui("a11y.enlarge")}: ${ui(card.titleKey)}`}
                />
                <Image
                  src={card.image}
                  alt={ui(card.titleKey)}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="pointer-events-none absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center border border-[var(--color-gold)]/40 bg-black/50 text-[var(--color-gold-light)] opacity-0 transition group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                </span>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-5">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl tracking-[0.1em] text-gold-gradient uppercase">
                    {ui(card.titleKey)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text)]/80">{ui(card.textKey)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border border-[var(--color-gold)]/15 bg-black/40 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <p className="text-sm text-[var(--color-text-muted)]">
            <span className="font-[family-name:var(--font-cormorant)] text-2xl text-gold-gradient">
              {google.rating.toFixed(1)}
            </span>
            <span className="ml-3 tracking-[0.12em] text-[var(--color-gold-light)] uppercase">
              {ui("highlights.socialProof")}
            </span>
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="btn-premium border border-[var(--color-gold)] bg-[var(--color-gold)]/10 px-6 py-3 text-[10px] tracking-[0.2em] text-[var(--color-gold-light)] uppercase hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10"
            >
              {ui("highlights.seeMenu")}
            </Link>
            <ReserveButton className="border border-[var(--color-pink)]/50 px-6 py-3 text-[10px] tracking-[0.2em] text-[var(--color-pink)] uppercase hover:border-[var(--color-pink)] hover:bg-[var(--color-pink)]/10">
              {ui("contact.reserveCta")}
            </ReserveButton>
          </div>
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
