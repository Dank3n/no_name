"use client";

import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

export type LightboxItem = {
  src: string;
  alt: string;
  caption?: string;
};

type ImageLightboxProps = {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export default function ImageLightbox({ items, index, onClose, onIndexChange }: ImageLightboxProps) {
  const { ui } = useLocale();
  const item = index !== null ? items[index] : null;

  const go = useCallback(
    (delta: number) => {
      if (index === null || items.length === 0) return;
      onIndexChange((index + delta + items.length) % items.length);
    },
    [index, items.length, onIndexChange]
  );

  useEffect(() => {
    if (index === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, onClose, go]);

  if (index === null || !item || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/92 backdrop-blur-sm"
        onClick={onClose}
        aria-label={ui("a11y.close")}
      />

      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center border border-[var(--color-gold)]/40 bg-black/60 text-[var(--color-gold-light)] transition hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10"
        aria-label={ui("a11y.close")}
      >
        <X className="h-5 w-5" />
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center border border-[var(--color-gold)]/40 bg-black/60 text-[var(--color-gold-light)] transition hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 sm:left-6"
            aria-label={ui("a11y.prevImage")}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center border border-[var(--color-gold)]/40 bg-black/60 text-[var(--color-gold-light)] transition hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 sm:right-6"
            aria-label={ui("a11y.nextImage")}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <figure className="relative z-10 flex max-h-[92vh] max-w-[min(96vw,1400px)] flex-col items-center">
        {/* Native img so the original file is shown full-size, not cropped. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[82vh] max-w-full object-contain shadow-[0_20px_80px_rgba(0,0,0,0.55)]"
        />
        {(item.caption || items.length > 1) && (
          <figcaption className="mt-4 text-center text-[10px] tracking-[0.22em] text-[var(--color-gold-light)] uppercase">
            {item.caption}
            {items.length > 1 && (
              <span className="ml-3 text-[var(--color-text-muted)]">
                {index + 1} / {items.length}
              </span>
            )}
          </figcaption>
        )}
      </figure>
    </div>,
    document.body
  );
}
