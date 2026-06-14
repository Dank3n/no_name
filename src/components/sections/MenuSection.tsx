"use client";

import { useState } from "react";
import { siteConfig, foodMenuBook, drinksMenuBook } from "@/data/config";
import MenuFlipbook from "@/components/menu/MenuFlipbook";
import SectionDivider from "@/components/decor/SectionDivider";
import { useLocale } from "@/contexts/LocaleContext";

export default function MenuSection() {
  const { t, ui } = useLocale();
  const [activeMenu, setActiveMenu] = useState<"food" | "drinks">("food");
  const activeBook = activeMenu === "food" ? foodMenuBook : drinksMenuBook;

  return (
    <>
      <SectionDivider />
      <section id="menu" className="section-padding relative bg-[var(--color-base)]">
        <div className="pointer-events-none absolute inset-0 gold-dots-bg opacity-[0.03]" aria-hidden />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="text-[10px] tracking-[0.45em] text-[var(--color-emerald)]/80 uppercase">
              {ui("menu.sectionLabel")}
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light tracking-[0.3em] text-gold-gradient uppercase sm:text-5xl">
              {t(activeBook.title)}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm text-[var(--color-text-muted)]">
              {ui("menu.sectionDesc")}
            </p>
            <div className="gold-line mx-auto mt-6 max-w-sm" />
          </div>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setActiveMenu("food")}
              className={`rounded-sm border px-5 py-2 text-xs tracking-[0.18em] uppercase transition ${
                activeMenu === "food"
                  ? "border-[var(--color-emerald)] bg-[var(--color-emerald)]/15 text-[var(--color-gold-light)]"
                  : "border-[var(--color-gold)]/35 text-[var(--color-gold-light)] hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10"
              }`}
            >
              {ui("menu.foodTab")}
            </button>
            <button
              type="button"
              onClick={() => setActiveMenu("drinks")}
              className={`rounded-sm border px-5 py-2 text-xs tracking-[0.18em] uppercase transition ${
                activeMenu === "drinks"
                  ? "border-[var(--color-emerald)] bg-[var(--color-emerald)]/15 text-[var(--color-gold-light)]"
                  : "border-[var(--color-gold)]/35 text-[var(--color-gold-light)] hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10"
              }`}
            >
              {ui("menu.drinksTab")}
            </button>
          </div>

          <MenuFlipbook
            book={activeBook}
            showPdfButton={activeMenu === "food"}
            pdfUrl={activeMenu === "food" ? siteConfig.menuPdfUrl : undefined}
          />
        </div>
      </section>
    </>
  );
}
