"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import type { MenuBookConfig } from "@/data/config";
import { getMenuItem } from "@/data/config";
import { useLocale } from "@/contexts/LocaleContext";
import FlipbookPage from "./FlipbookPage";
import DishModal from "./DishModal";

type MenuFlipbookProps = {
  book: MenuBookConfig;
  showPdfButton?: boolean;
  pdfUrl?: string;
};

export default function MenuFlipbook({
  book,
  showPdfButton = false,
  pdfUrl,
}: MenuFlipbookProps) {
  const { t, tn, ui, dir } = useLocale();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bookRef = useRef<any>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const selectedItem = selectedId ? getMenuItem(selectedId) ?? null : null;

  const handleItemClick = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  const flipNext = () => bookRef.current?.pageFlip()?.flipNext();
  const flipPrev = () => bookRef.current?.pageFlip()?.flipPrev();
  const toggleExpanded = () => setIsExpanded((prev) => !prev);
  const closeExpanded = useCallback(() => setIsExpanded(false), []);

  useEffect(() => {
    if (!isExpanded) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isExpanded]);

  useEffect(() => {
    if (!isExpanded) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeExpanded();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isExpanded, closeExpanded]);

  return (
    <div className="flex w-full flex-col items-center" dir={dir}>
      <div className="mb-8 text-center">
        <div className="menu-ornament mb-4">
          <span className="menu-ornament-diamond" />
        </div>
        <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light tracking-[0.35em] text-gold-gradient uppercase sm:text-3xl">
          {t(book.title)}
        </h3>
        {book.subtitle && (
          <p className="mt-3 font-[family-name:var(--font-italiana)] text-lg text-[var(--color-gold)]/70 italic">
            {t(book.subtitle)}
          </p>
        )}
        <div className="gold-line mx-auto mt-5 max-w-xs" />
      </div>

      <div
        className={`${
          isExpanded
            ? "fixed inset-0 z-[95] flex items-center justify-center bg-black/90 px-4 py-10 backdrop-blur-sm sm:px-8"
            : "relative w-full max-w-4xl"
        }`}
      >
        <button
          type="button"
          onClick={toggleExpanded}
          className={`absolute z-[96] rounded-sm border border-[var(--color-gold)]/40 bg-black/60 px-4 py-2 text-[10px] tracking-[0.22em] text-[var(--color-gold-light)] uppercase transition hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10 ${
            isExpanded ? "right-4 top-4" : "right-2 top-2"
          }`}
          aria-label={isExpanded ? ui("menu.collapse") : ui("menu.expand")}
        >
          {isExpanded ? `✕ ${ui("menu.collapse")}` : `⤢ ${ui("menu.expand")}`}
        </button>

        <div className={isExpanded ? "w-full max-w-7xl" : "flipbook-wrapper relative w-full max-w-4xl"}>
          <HTMLFlipBook
            ref={bookRef}
            width={320}
            height={480}
            size="stretch"
            minWidth={280}
            maxWidth={isExpanded ? 720 : 480}
            minHeight={400}
            maxHeight={isExpanded ? 900 : 640}
            startPage={0}
            drawShadow={true}
            flippingTime={800}
            usePortrait={true}
            startZIndex={0}
            autoSize={true}
            maxShadowOpacity={0.55}
            showCover={true}
            mobileScrollSupport={true}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
            className="mx-auto"
            style={{}}
          >
            {book.pages.map((page) => (
              <FlipbookPage key={page.id}>
                {page.variant === "cover" && (
                  <div className="flex w-full flex-col items-center text-center">
                    <h4 className="max-w-full break-words whitespace-normal font-[family-name:var(--font-cormorant)] text-4xl font-light tracking-[0.45em] text-gold-gradient uppercase sm:text-5xl">
                      {page.title ? t(page.title) : ui("menu.coverMenu")}
                    </h4>
                    {page.subtitle && (
                      <p className="mt-5 max-w-full break-words whitespace-normal font-[family-name:var(--font-italiana)] text-xl text-[var(--color-gold)]/80 italic">
                        {t(page.subtitle)}
                      </p>
                    )}
                    <div className="menu-ornament mt-8 w-full max-w-[180px]">
                      <span className="menu-ornament-diamond" />
                    </div>
                    <p className="mt-8 text-[10px] tracking-[0.4em] text-[var(--color-text-muted)] uppercase">
                      {ui("menu.browseHint")}
                    </p>
                  </div>
                )}

                {page.variant === "category" && (
                  <div className="flex w-full flex-col items-center text-center">
                    <div className="menu-ornament mb-4 w-full max-w-[140px]">
                      <span className="menu-ornament-diamond" />
                    </div>
                    <h4 className="max-w-full break-words whitespace-normal font-[family-name:var(--font-cormorant)] text-2xl font-light tracking-[0.3em] text-gold-gradient uppercase sm:text-3xl">
                      {page.title ? t(page.title) : ""}
                    </h4>
                    {page.subtitle && (
                      <p className="mt-4 max-w-full break-words whitespace-normal font-[family-name:var(--font-italiana)] text-base text-[var(--color-gold)]/65 italic">
                        {t(page.subtitle)}
                      </p>
                    )}
                  </div>
                )}

                {page.variant === "items" && (
                  <div className="flex w-full flex-col gap-4">
                    {page.title && (
                      <h5 className="w-full break-words whitespace-normal text-center font-[family-name:var(--font-cormorant)] text-base tracking-[0.18em] text-[var(--color-gold)] uppercase sm:text-lg">
                        {t(page.title)}
                      </h5>
                    )}
                    <ul className="flex w-full flex-col gap-4">
                      {page.itemIds?.map((id) => {
                        const item = getMenuItem(id);
                        if (!item) return null;
                        const localizedName = tn(item.name);
                        return (
                          <li key={id}>
                            <button
                              type="button"
                              onClick={() => handleItemClick(id)}
                              className="group w-full text-start transition"
                            >
                              <div className="flex w-full items-baseline justify-between">
                                <h3 className="text-left max-w-[65%] flex-none break-words whitespace-normal font-[family-name:var(--font-cormorant)] text-base font-light tracking-wide text-[var(--color-gold-light)] transition group-hover:text-[var(--color-emerald)] sm:text-lg">
                                  {localizedName}
                                </h3>
                                <div
                                  className="mx-2 mb-1 flex-grow border-b-2 border-dotted border-gray-500/40"
                                  aria-hidden
                                />
                                <span className="flex-none whitespace-nowrap text-right text-xs tracking-wider text-[var(--color-pink)]/80">
                                  {item.price || "—"}
                                </span>
                              </div>
                              <span className="mt-1 block text-[10px] tracking-widest text-[var(--color-pink)]/50 uppercase opacity-0 transition group-hover:opacity-100">
                                {ui("menu.details")}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </FlipbookPage>
            ))}
          </HTMLFlipBook>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={flipPrev}
          className="rounded-sm border border-[var(--color-gold)]/35 px-5 py-2 text-xs tracking-[0.2em] text-[var(--color-gold-light)] uppercase transition hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/5"
        >
          {ui("menu.flipPrev")}
        </button>
        <button
          type="button"
          onClick={flipNext}
          className="rounded-sm border border-[var(--color-gold)]/35 px-5 py-2 text-xs tracking-[0.2em] text-[var(--color-gold-light)] uppercase transition hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/5"
        >
          {ui("menu.flipNext")}
        </button>
      </div>

      {showPdfButton && pdfUrl && (
        <a
          href={pdfUrl}
          download
          className="mt-10 inline-flex items-center gap-2 border border-[var(--color-gold)] bg-transparent px-8 py-3 text-xs font-medium tracking-[0.25em] text-[var(--color-gold-light)] uppercase transition hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10"
        >
          <span aria-hidden>↓</span>
          {ui("menu.downloadPdf")}
        </a>
      )}

      <DishModal item={selectedItem} onClose={() => setSelectedId(null)} />
    </div>
  );
}
