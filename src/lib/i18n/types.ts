export const LOCALES = ["ro", "en", "it", "es", "fr", "tr", "ru", "ar"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ro";

export const RTL_LOCALES: readonly Locale[] = ["ar"];

export const LOCALE_LABELS: Record<Locale, string> = {
  ro: "RO",
  en: "EN",
  it: "IT",
  es: "ES",
  fr: "FR",
  tr: "TR",
  ru: "RU",
  ar: "AR",
};

/** Text traductibil — `ro` obligatoriu, restul opțional */
export type LocalizedText = { ro: string } & Partial<Record<Exclude<Locale, "ro">, string>>;

/** Listă traductibilă (ex: ingrediente) */
export type LocalizedList = { ro: string[] } & Partial<Record<Exclude<Locale, "ro">, string[]>>;

export function isRtl(locale: Locale): boolean {
  return RTL_LOCALES.includes(locale);
}
