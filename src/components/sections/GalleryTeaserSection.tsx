"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import ImageLightbox from "@/components/gallery/ImageLightbox";

const TEASER_PHOTOS = [
  {
    src: "/images/venue/teaser-1.webp",
    alt: "Interior NO NAME by Casa Ede",
    captionKey: "gallery.interior",
  },
  {
    src: "/images/venue/teaser-2.webp",
    alt: "Interior NO NAME by Casa Ede",
    captionKey: "gallery.interior",
  },
  {
    src: "/images/venue/teaser-3.webp",
    alt: "Coaste la grătar",
    captionKey: "gallery.ribs",
  },
] as const;

export default function GalleryTeaserSection() {
  const { ui } = useLocale();
  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const photos = TEASER_PHOTOS;

  const lightboxItems = useMemo(
    () => photos.map((photo) => ({ src: photo.src, alt: photo.alt, caption: ui(photo.captionKey) })),
    [photos, ui]
  );

  return (
    <section className="relative overflow-hidden border-t border-[var(--color-gold)]/10 bg-black py-20">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:h-[600px] lg:flex-row">
          <div className="flex h-full flex-col justify-center rounded-2xl border border-white/5 bg-[var(--color-charcoal)]/80 p-8 shadow-2xl backdrop-blur-md lg:w-1/3 lg:p-12">
            <h2 className="font-[family-name:var(--font-dm-sans)] text-4xl font-bold uppercase leading-tight tracking-[0.18em] text-white">
              {ui("gallery.teaserTitle")}
              <br />
              <span className="text-[var(--color-gold)]">{ui("gallery.teaserTitleAccent")}</span>
            </h2>
            <div className="my-8 h-1 w-16 bg-[var(--color-gold)]" />
            <h3 className="mb-4 text-xl font-semibold uppercase tracking-wide text-[var(--color-text)]">
              {ui("gallery.teaserLead")}
            </h3>
            <p className="text-base leading-relaxed text-[var(--color-text-muted)]">{ui("gallery.teaserDesc")}</p>
            <Link
              href="/galerie"
              className="btn-premium mt-8 inline-flex w-fit items-center border border-[var(--color-gold)] px-6 py-2.5 text-[10px] tracking-[0.22em] text-[var(--color-gold-light)] uppercase transition hover:bg-[var(--color-gold)] hover:text-black"
            >
              {ui("gallery.seePage")}
            </Link>
          </div>

          <div className="flex h-[500px] flex-col gap-2 lg:h-full lg:w-2/3 lg:flex-row">
            {photos.map((photo, index) => {
              const isActive = active === index;
              return (
                <button
                  key={photo.src}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => {
                    if (isActive) setLightboxIndex(index);
                    else setActive(index);
                  }}
                  className={`group relative cursor-zoom-in overflow-hidden rounded-xl text-left transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isActive ? "flex-[3]" : "flex-1"
                  }`}
                  aria-label={`${ui("a11y.enlarge")}: ${photo.alt}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    loading="lazy"
                    sizes={isActive ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 18vw"}
                    className={`object-cover transition-transform duration-1000 ${isActive ? "scale-105" : "scale-100"}`}
                  />
                  <div
                    className={`absolute inset-0 transition-colors duration-500 ${
                      isActive ? "bg-transparent" : "bg-black/60"
                    }`}
                  />
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-xl border-2 border-[var(--color-gold)] transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <div
                    className={`absolute bottom-6 left-6 transition-all duration-500 ${
                      isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                  >
                    <span className="rounded-sm bg-[var(--color-gold)] px-3 py-1 text-xs font-bold tracking-widest text-black uppercase">
                      {ui(photo.captionKey)}
                    </span>
                  </div>
                </button>
              );
            })}
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
