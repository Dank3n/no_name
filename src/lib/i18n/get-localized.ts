import type { Locale, LocalizedList, LocalizedText } from "./types";

/** Rezolvă text localizat; string simplu = netradus (ex: nume preparat local) */
export function pickText(value: LocalizedText | string | undefined, locale: Locale): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[locale] ?? value.ro ?? value.en ?? "";
}

export function pickList(value: LocalizedList | undefined, locale: Locale): string[] {
  if (!value) return [];
  return value[locale] ?? value.ro ?? value.en ?? [];
}
