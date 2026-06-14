import type { Locale, LocalizedText } from "./types";
import { uiTranslations, type UiTranslationTree } from "@/locales/ui";

function isLocalizedLeaf(node: unknown): node is LocalizedText {
  return typeof node === "object" && node !== null && "ro" in node;
}

export function getUi(locale: Locale, path: string): string {
  const keys = path.split(".");
  let node: unknown = uiTranslations;

  for (const key of keys) {
    if (node === undefined || node === null) return path;
    node = (node as UiTranslationTree)[key];
  }

  if (isLocalizedLeaf(node)) {
    return node[locale] ?? node.ro ?? node.en ?? path;
  }

  return path;
}
