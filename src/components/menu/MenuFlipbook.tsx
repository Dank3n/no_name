"use client";

import { useRef, useState, useCallback, useEffect, useLayoutEffect, useMemo, type MouseEvent } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronRight, List } from "lucide-react";
import type { MenuBookConfig, MenuItem } from "@/data/config";
import { getMenuItem } from "@/data/config";
import { useLocale } from "@/contexts/LocaleContext";
import { pickText } from "@/lib/i18n/get-localized";
import { getUi } from "@/lib/i18n/get-ui";
import FlipbookPage from "./FlipbookPage";
import DishModal from "./DishModal";

type MenuFlipbookProps = {
  book: MenuBookConfig;
  showPdfButton?: boolean;
  pdfUrl?: string;
};

const BOOK_STYLE = { margin: "0 auto" };

export default function MenuFlipbook({
  book,
  showPdfButton = false,
  pdfUrl,
}: MenuFlipbookProps) {
  const { locale, dir } = useLocale();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bookRef = useRef<any>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const flippingRef = useRef(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [bookSize, setBookSize] = useState<{ width: number; height: number } | null>(null);
  const selectedItem = selectedId ? getMenuItem(selectedId) ?? null : null;

  useLayoutEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;

    const apply = () => {
      const width = Math.max(280, Math.round(shell.getBoundingClientRect().width));
      const height = Math.round(width * 1.5);
      setBookSize((prev) => {
        if (prev && Math.abs(prev.width - width) < 12) return prev;
        return { width, height };
      });
    };

    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, [isExpanded]);

  const tocPageIndex = useMemo(
    () => book.pages.findIndex((page) => page.variant === "toc"),
    [book.pages]
  );

  const turnTo = useCallback((pageIndex: number) => {
    if (pageIndex < 0) return;
    const flip = bookRef.current?.pageFlip?.();
    if (!flip) return;
    flippingRef.current = true;
    flip.turnToPage(pageIndex);
    window.setTimeout(() => {
      flippingRef.current = false;
    }, 200);
  }, []);

  const handleTocClick = useCallback((event: MouseEvent<HTMLButtonElement>, pageIndex: number) => {
    event.preventDefault();
    event.stopPropagation();
    turnTo(pageIndex);
  }, [turnTo]);

  const goToToc = useCallback(
    (event?: MouseEvent<HTMLButtonElement>) => {
      event?.preventDefault();
      event?.stopPropagation();
      turnTo(tocPageIndex);
    },
    [turnTo, tocPageIndex]
  );

  const handleItemClick = useCallback((event: MouseEvent<HTMLButtonElement>, id: string) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedId(id);
  }, []);

  const flipTo = useCallback((direction: "next" | "prev") => {
    if (flippingRef.current) return;
    const flip = bookRef.current?.pageFlip?.();
    if (!flip) return;
    flippingRef.current = true;
    if (direction === "next") flip.flipNext();
    else flip.flipPrev();
    window.setTimeout(() => {
      flippingRef.current = false;
    }, 900);
  }, []);

  const onChangeState = useCallback((event: { data: string }) => {
    if (event.data === "read") flippingRef.current = false;
  }, []);

  const flipNext = useCallback(
    (event?: MouseEvent<HTMLButtonElement>) => {
      event?.preventDefault();
      event?.stopPropagation();
      flipTo("next");
    },
    [flipTo]
  );

  const flipPrev = useCallback(
    (event?: MouseEvent<HTMLButtonElement>) => {
      event?.preventDefault();
      event?.stopPropagation();
      flipTo("prev");
    },
    [flipTo]
  );

  const toggleExpanded = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);
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

  const pageNodes = useMemo(
    () =>
      book.pages.map((page) => {
        const t = (value: MenuItem["name"] | undefined) => pickText(value, locale);
        const ui = (path: string) => getUi(locale, path);

        return (
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

            {page.variant === "toc" && (
              <div className="flex min-h-0 w-full flex-1 flex-col self-stretch">
                <div className="menu-ornament mx-auto mb-3 w-full max-w-[140px]">
                  <span className="menu-ornament-diamond" />
                </div>
                <h4 className="text-center font-[family-name:var(--font-cormorant)] text-2xl font-light tracking-[0.28em] text-gold-gradient uppercase">
                  {ui("menu.tocTitle")}
                </h4>
                <p className="mt-2 text-center text-[11px] tracking-[0.18em] text-[var(--color-gold)]/80 uppercase">
                  {page.id === "toc" ? ui("menu.tocHint") : ui("menu.tocContinued")}
                </p>
                <ul className="mt-4 flex min-h-0 w-full flex-1 flex-col justify-evenly gap-2">
                  {page.tocEntries?.map((entry) => (
                    <li key={entry.id}>
                      <button
                        type="button"
                        onClick={(event) => handleTocClick(event, entry.pageIndex)}
                        className="menu-flip-control group flex w-full items-center gap-3 rounded-sm border border-[var(--color-gold)]/45 bg-[var(--color-gold)]/[0.08] px-3 py-2.5 text-start transition hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10"
                      >
                        <span className="min-w-0 flex-1 break-words font-[family-name:var(--font-cormorant)] text-base font-medium leading-snug tracking-wide text-[var(--color-gold-light)] transition group-hover:text-[var(--color-emerald)] sm:text-lg">
                          {t(entry.title)}
                        </span>
                        <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-[var(--color-gold)]/55 text-[var(--color-gold)] transition group-hover:border-[var(--color-emerald)] group-hover:text-[var(--color-emerald)]">
                          <ChevronRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
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
                    const localizedName = t(item.name);
                    return (
                      <li key={id}>
                        <button
                          type="button"
                          onClick={(event) => handleItemClick(event, id)}
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
        );
      }),
    [book, locale, handleItemClick, handleTocClick]
  );

  const ui = (path: string) => getUi(locale, path);
  const title = pickText(book.title, locale);
  const subtitle = book.subtitle ? pickText(book.subtitle, locale) : "";
  const flipControlClass =
    "menu-flip-control rounded-sm border border-[var(--color-gold)]/35 px-5 py-2 text-base tracking-[0.2em] text-[var(--color-gold-light)] uppercase transition hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/5";
  const flipControls = (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <button type="button" onClick={flipPrev} className={flipControlClass}>
        {ui("menu.flipPrev")}
      </button>
      <button
        type="button"
        onClick={goToToc}
        className="menu-flip-control inline-flex items-center gap-2 rounded-sm border border-[var(--color-gold)] bg-[var(--color-gold)]/20 px-5 py-2 text-base tracking-[0.2em] text-[var(--color-gold-light)] uppercase transition hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/15"
        aria-label={ui("menu.tocBack")}
      >
        <List className="h-4 w-4" aria-hidden />
        {ui("menu.tocBack")}
      </button>
      <button type="button" onClick={flipNext} className={flipControlClass}>
        {ui("menu.flipNext")}
      </button>
    </div>
  );

  return (
    <div className="flex w-full flex-col items-center" dir={dir}>
      <div className="mb-8 text-center">
        <div className="menu-ornament mb-4">
          <span className="menu-ornament-diamond" />
        </div>
        <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light tracking-[0.35em] text-gold-gradient uppercase sm:text-3xl">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-3 font-[family-name:var(--font-italiana)] text-lg text-[var(--color-gold)]/70 italic">
            {subtitle}
          </p>
        )}
        <div className="gold-line mx-auto mt-5 max-w-xs" />
      </div>

      <div
        className={`${
          isExpanded
            ? "fixed inset-0 z-[95] flex flex-col items-center justify-center bg-black/90 px-4 py-10 backdrop-blur-sm sm:px-8"
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

        <div
          ref={shellRef}
          className={`flipbook-shell ${isExpanded ? "is-expanded" : ""}`}
        >
          {bookSize && (
            <HTMLFlipBook
              key={`${book.id}-${locale}-${isExpanded ? "xl" : "md"}-${bookSize.width}`}
              ref={bookRef}
              width={bookSize.width}
              height={bookSize.height}
              size="fixed"
              minWidth={bookSize.width}
              maxWidth={bookSize.width}
              minHeight={bookSize.height}
              maxHeight={bookSize.height}
              startPage={0}
              drawShadow
              flippingTime={800}
              usePortrait
              startZIndex={0}
              autoSize={false}
              maxShadowOpacity={0.55}
              showCover
              mobileScrollSupport
              clickEventForward
              useMouseEvents
              swipeDistance={30}
              showPageCorners
              disableFlipByClick={false}
              renderOnlyPageLengthChange
              onChangeState={onChangeState}
              className="mx-auto"
              style={BOOK_STYLE}
            >
              {pageNodes}
            </HTMLFlipBook>
          )}
        </div>

        {isExpanded && <div className="mt-6">{flipControls}</div>}
      </div>

      {!isExpanded && <div className="mt-8">{flipControls}</div>}

      {showPdfButton && pdfUrl && (
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-2 border border-[var(--color-gold)] bg-transparent px-8 py-3 text-xs font-medium tracking-[0.25em] text-[var(--color-gold-light)] uppercase transition hover:border-[var(--color-emerald)] hover:bg-[var(--color-emerald)]/10"
        >
          <span aria-hidden>↓</span>
          {ui("menu.downloadPdf")}
        </a>
      )}

      <DishModal item={selectedItem} onClose={() => setSelectedId(null)} />
    </div>
  );
}
