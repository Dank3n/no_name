"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/lib/i18n/types";

type LanguageSwitcherProps = {
  variant?: "header" | "footer";
};

export default function LanguageSwitcher({ variant = "header" }: LanguageSwitcherProps) {
  const { locale, setLocale, ui, dir } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isHeader = variant === "header";

  return (
    <div ref={ref} className="relative" dir={dir}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={ui("lang.select")}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={
          isHeader
            ? "flex items-center gap-1.5 border border-[var(--color-gold)]/30 px-3 py-1.5 text-[10px] tracking-[0.2em] text-[var(--color-gold-light)] uppercase transition hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/5"
            : "flex items-center gap-2 border border-[var(--color-gold)]/25 px-4 py-2 text-xs tracking-[0.2em] text-[var(--color-gold)] uppercase transition hover:border-[var(--color-pink)]/50"
        }
      >
        <Globe className="h-3.5 w-3.5 text-[var(--color-gold)]" strokeWidth={1.25} />
        <span>{LOCALE_LABELS[locale]}</span>
        <ChevronDown
          className={`h-3 w-3 transition ${open ? "rotate-180" : ""}`}
          strokeWidth={1.5}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={ui("lang.label")}
          className={`absolute z-[60] min-w-[5.5rem] border border-[var(--color-gold)]/25 bg-black/95 py-1 shadow-xl shadow-black/50 ${
            isHeader
              ? "top-full mt-1 end-0"
              : "bottom-full mb-2 start-0"
          }`}
        >
          {LOCALES.map((code) => (
            <li key={code} role="option" aria-selected={locale === code}>
              <button
                type="button"
                onClick={() => {
                  setLocale(code as Locale);
                  setOpen(false);
                }}
                className={`block w-full px-4 py-2 text-start text-[10px] tracking-[0.2em] uppercase transition ${
                  locale === code
                    ? "bg-[var(--color-gold)]/15 text-[var(--color-gold-light)]"
                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-emerald)]/10 hover:text-[var(--color-emerald)]"
                }`}
              >
                {LOCALE_LABELS[code]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
