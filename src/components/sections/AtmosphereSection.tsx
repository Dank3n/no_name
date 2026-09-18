"use client";

import Image from "next/image";
import { siteConfig } from "@/data/config";
import { useLocale } from "@/contexts/LocaleContext";

export default function AtmosphereSection() {
  const { ui } = useLocale();
  const { gallery, google } = siteConfig;

  return (
    <section className="relative border-t border-[var(--color-gold)]/10 bg-[var(--color-charcoal)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 gold-dots-bg opacity-[0.03]" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="text-[10px] tracking-[0.45em] text-[var(--color-pink)]/70 uppercase">
            {ui("gallery.sectionLabel")}
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl font-light tracking-[0.22em] text-gold-gradient uppercase sm:text-4xl">
            {ui("gallery.title")}
          </h2>
          <div className="gold-line mx-auto mt-6 max-w-sm" />
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {gallery.map((item, index) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden border border-[var(--color-gold)]/15 bg-black ${
                index === 0 || index === 1 ? "col-span-2 min-h-[240px] md:min-h-[320px]" : "min-h-[180px] md:min-h-[220px]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes={index === 0 || index === 1 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3 text-[10px] tracking-[0.2em] text-[var(--color-gold-light)] uppercase">
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
            className="inline-flex items-center border border-[var(--color-gold)]/50 px-7 py-3 text-[10px] tracking-[0.22em] text-[var(--color-gold-light)] uppercase transition hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10"
          >
            {ui("gallery.seeMaps")}
          </a>
        </div>
      </div>
    </section>
  );
}
