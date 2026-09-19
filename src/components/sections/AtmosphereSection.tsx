"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import { siteConfig } from "@/data/config";
import { useLocale } from "@/contexts/LocaleContext";
import ImageLightbox from "@/components/gallery/ImageLightbox";

type GalleryCategory = (typeof siteConfig.gallery)[number]["category"];
type AtmosphereSectionProps = {
  headingLevel?: "h1" | "h2";
};

const CATEGORIES: { id: GalleryCategory; labelKey: string }[] = [
  { id: "interior", labelKey: "gallery.catInterior" },
  { id: "food", labelKey: "gallery.catFood" },
];

export default function AtmosphereSection({ headingLevel = "h2" }: AtmosphereSectionProps) {
  const { ui } = useLocale();
  const { gallery, google } = siteConfig;
  const Heading = headingLevel;
  const isPage = headingLevel === "h1";
  const [active, setActive] = useState<GalleryCategory>("interior");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = useMemo(
    () => gallery.filter((item) => item.category === active),
    [gallery, active]
  );

  const lightboxItems = useMemo(
    () => items.map((item) => ({ src: item.src, alt: item.alt, caption: ui(item.captionKey) })),
    [items, ui]
  );

  return (
    <section
      className={`relative border-t border-[var(--color-gold)]/10 bg-[var(--color-charcoal)] px-4 sm:px-6 lg:px-8 ${
        isPage ? "page-section" : "py-16 lg:py-24"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 gold-dots-bg opacity-[0.03]" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <span className="text-[10px] tracking-[0.45em] text-[var(--color-pink)]/70 uppercase">
            {ui("gallery.sectionLabel")}
          </span>
          <Heading className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl font-light tracking-[0.22em] text-gold-gradient uppercase sm:text-4xl lg:text-5xl">
            {ui("gallery.title")}
          </Heading>
          {isPage && (
            <p className="mx-auto mt-5 max-w-xl text-sm text-[var(--color-text-muted)]">{ui("gallery.pageDesc")}</p>
          )}
          <div className="gold-line mx-auto mt-6 max-w-sm" />
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3" role="tablist" aria-label={ui("gallery.sectionLabel")}>
          {CATEGORIES.map((category) => {
            const selected = active === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => {
                  setActive(category.id);
                  setLightboxIndex(null);
                }}
                className={`btn-premium min-w-[140px] border px-7 py-2.5 text-[10px] tracking-[0.28em] uppercase transition ${
                  selected
                    ? "border-[var(--color-gold)] bg-[var(--color-gold)]/15 text-[var(--color-gold-light)]"
                    : "border-[var(--color-gold)]/25 text-[var(--color-text-muted)] hover:border-[var(--color-gold)]/50 hover:text-[var(--color-gold-light)]"
                }`}
              >
                {ui(category.labelKey)}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4" role="tabpanel">
          {items.map((item, index) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden border border-[var(--color-gold)]/15 bg-black transition duration-500 hover:-translate-y-0.5 hover:border-[var(--color-gold)]/40 ${
                index === 0 || index === 1 ? "col-span-2 min-h-[240px] md:min-h-[320px]" : "min-h-[180px] md:min-h-[220px]"
              }`}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="absolute inset-0 z-10 cursor-zoom-in"
                aria-label={`${ui("a11y.enlarge")}: ${item.alt}`}
              />
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                className="object-cover transition duration-700 group-hover:scale-110"
                sizes={index === 0 || index === 1 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
              />
              <span className="pointer-events-none absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center border border-[var(--color-gold)]/40 bg-black/50 text-[var(--color-gold-light)] opacity-0 transition group-hover:opacity-100">
                <Expand className="h-4 w-4" />
              </span>
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 to-transparent px-4 py-3 text-[10px] tracking-[0.2em] text-[var(--color-gold-light)] uppercase">
                {ui(item.captionKey)}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={google.photosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium inline-flex items-center border border-[var(--color-gold)]/50 px-7 py-3 text-[10px] tracking-[0.22em] text-[var(--color-gold-light)] uppercase hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10"
          >
            {ui("gallery.seeMaps")}
          </a>
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
