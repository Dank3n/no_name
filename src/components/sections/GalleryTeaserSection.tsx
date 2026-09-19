"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Expand } from "lucide-react";
import { siteConfig } from "@/data/config";
import { useLocale } from "@/contexts/LocaleContext";
import ImageLightbox from "@/components/gallery/ImageLightbox";

export default function GalleryTeaserSection() {
  const { ui } = useLocale();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const photos = useMemo(
    () => [
      ...siteConfig.gallery.filter((item) => item.category === "interior").slice(0, 2),
      ...siteConfig.gallery.filter((item) => item.category === "food").slice(0, 2),
    ],
    []
  );
  const lightboxItems = useMemo(
    () => photos.map((photo) => ({ src: photo.src, alt: photo.alt, caption: ui(photo.captionKey) })),
    [photos, ui]
  );

  return (
    <section className="relative border-t border-[var(--color-gold)]/10 bg-[var(--color-base)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="text-[10px] tracking-[0.45em] text-[var(--color-gold)]/70 uppercase">
            {ui("gallery.sectionLabel")}
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl font-light tracking-[0.22em] text-gold-gradient uppercase sm:text-4xl">
            {ui("gallery.teaserTitle")}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-[var(--color-text-muted)]">
            {ui("gallery.teaserDesc")}
          </p>
          <div className="gold-line mx-auto mt-6 max-w-sm" />
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-[4/5] cursor-zoom-in overflow-hidden border border-[var(--color-gold)]/15 bg-black text-left"
              aria-label={`${ui("a11y.enlarge")}: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center border border-[var(--color-gold)]/40 bg-black/50 text-[var(--color-gold-light)] opacity-0 transition group-hover:opacity-100">
                <Expand className="h-4 w-4" />
              </span>
              <span className="absolute inset-x-0 bottom-0 p-3 text-[10px] tracking-[0.2em] text-[var(--color-gold-light)] uppercase">
                {ui(photo.captionKey)}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/galerie"
            className="btn-premium inline-flex items-center justify-center border border-[var(--color-gold)] bg-[var(--color-gold)]/10 px-8 py-3.5 text-[10px] tracking-[0.22em] text-[var(--color-gold-light)] uppercase hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10"
          >
            {ui("gallery.seePage")}
          </Link>
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
