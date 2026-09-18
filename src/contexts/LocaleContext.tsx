"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { pickList, pickText } from "@/lib/i18n/get-localized";
import { getUi } from "@/lib/i18n/get-ui";
import {
  DEFAULT_LOCALE,
  LOCALES,
  type Locale,
  type LocalizedList,
  type LocalizedText,
  isRtl,
} from "@/lib/i18n/types";

const STORAGE_KEY = "noname-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dir: "ltr" | "rtl";
  isRtl: boolean;
  /** Text din config (description, titluri etc.) */
  t: (value: LocalizedText | string | undefined) => string;
  /** Liste din config (ingrediente) */
  tList: (value: LocalizedList | undefined) => string[];
  /** Texte UI fixe — cheie cu punct: "nav.menu" */
  ui: (path: string) => string;
  /** Texte care pot avea fallback auto-translate dacă sunt string simplu */
  tn: (value: LocalizedText | string | undefined) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && LOCALES.includes(stored as Locale)) return stored as Locale;
  return DEFAULT_LOCALE;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);
  const [runtimeNameTranslations, setRuntimeNameTranslations] = useState<Record<string, string>>({});
  const pendingTranslationsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    setLocaleState(readStoredLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const dir = isRtl(locale) ? "rtl" : "ltr";

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir, mounted]);

  const translatePlainText = useCallback(
    (text: string, targetLocale: Locale): string => {
      const trimmed = text.trim();
      if (!trimmed || targetLocale === "ro") return text;

      const key = `${targetLocale}::${trimmed}`;
      const cached = runtimeNameTranslations[key];
      if (cached) return cached;

      if (!pendingTranslationsRef.current.has(key)) {
        pendingTranslationsRef.current.add(key);
        const query = encodeURIComponent(trimmed);
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=ro&tl=${targetLocale}&dt=t&q=${query}`;

        fetch(url)
          .then(async (res) => {
            if (!res.ok) throw new Error(`Translate failed: ${res.status}`);
            return res.json();
          })
          .then((payload: unknown) => {
            const chunks = Array.isArray(payload) && Array.isArray(payload[0]) ? payload[0] : [];
            const translated = chunks
              .map((chunk) => (Array.isArray(chunk) ? chunk[0] : ""))
              .filter((part): part is string => typeof part === "string")
              .join("")
              .trim();

            setRuntimeNameTranslations((prev) => ({
              ...prev,
              [key]: translated || trimmed,
            }));
          })
          .catch(() => {
            setRuntimeNameTranslations((prev) => ({
              ...prev,
              [key]: trimmed,
            }));
          })
          .finally(() => {
            pendingTranslationsRef.current.delete(key);
          });
      }

      return text;
    },
    [runtimeNameTranslations]
  );

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      dir,
      isRtl: dir === "rtl",
      t: (v) => pickText(v, locale),
      tList: (v) => pickList(v, locale),
      ui: (path) => getUi(locale, path),
      tn: (v) => {
        if (!v) return "";
        if (typeof v === "string") return translatePlainText(v, locale);

        const localized = pickText(v, locale);
        const roValue = v.ro || localized;
        if (locale !== "ro" && localized.trim() === roValue.trim()) {
          return translatePlainText(roValue, locale);
        }
        return localized;
      },
    }),
    [locale, setLocale, dir, translatePlainText]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
