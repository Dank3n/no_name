"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";
import type { MenuItem } from "@/data/config";
import { useLocale } from "@/contexts/LocaleContext";

type DishModalProps = {
  item: MenuItem | null;
  onClose: () => void;
};

export default function DishModal({ item, onClose }: DishModalProps) {
  const { t, tn, ui, dir, isRtl, locale } = useLocale();

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!item) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [item, handleKey]);

  if (!item) return null;

  const ingredients = item.ingredients[locale] || item.ingredients.ro;
  const localizedName = tn(item.name);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
        aria-label={ui("a11y.close")}
      />
      <div
        dir={dir}
        className={`relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto border border-[var(--color-gold)]/25 bg-[var(--color-base-elevated)] shadow-2xl shadow-black/70 ${
          isRtl ? "text-right" : "text-left"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          className={`absolute top-4 z-20 flex h-10 w-10 items-center justify-center border border-[var(--color-gold)]/40 text-[var(--color-gold-light)] transition hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 ${
            isRtl ? "left-4" : "right-4"
          }`}
          aria-label={ui("a11y.close")}
        >
          ✕
        </button>

        <div className="relative aspect-[4/3] w-full bg-black">
          {item.image ? (
            <Image
              src={item.image}
              alt={localizedName}
              fill
              className="object-cover"
              sizes="(max-width: 512px) 100vw, 512px"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          ) : null}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black via-black/30 to-transparent">
            <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.35em] text-[var(--color-gold)]/50 uppercase">
              {ui("menu.imagePlaceholder")}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <h2
            id="dish-modal-title"
            className="max-w-full break-words whitespace-normal font-[family-name:var(--font-cormorant)] text-2xl font-light tracking-wide text-gold-gradient sm:text-3xl"
            dir="ltr"
          >
            {localizedName}
          </h2>
          <p className="mt-2 text-xs tracking-[0.24em] text-[var(--color-pink)] uppercase">
            {ui("menu.price")}: {item.price || "—"}
          </p>
          <div className="gold-line my-4" />
          {item.description && (
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
              {t(item.description)}
            </p>
          )}

          {ingredients && (
            <div className="mt-4">
              <h3 className="text-[10px] font-medium tracking-[0.3em] text-[var(--color-emerald)] uppercase">
                {ui("menu.ingredients")}
              </h3>
              <p className="mt-2 break-words whitespace-normal text-sm text-[var(--color-text)]">
                {ingredients}
              </p>
            </div>
          )}

          <div className="mt-6 border border-[var(--color-pink)]/20 bg-black/50 p-4">
            <h3 className="text-[10px] font-medium tracking-[0.3em] text-[var(--color-pink)]/90 uppercase">
              {ui("menu.nutritionTitle")}
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              {t(item.nutrition) || ui("menu.nutritionPlaceholder")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
