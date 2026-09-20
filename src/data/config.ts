/**
 * CONFIGURAȚIE CENTRALĂ — NO NAME by Casa Ede
 *
 * Reguli traduceri:
 * - brand.primary / brand.secondary — NU se traduc
 * - name (preparat) — string simplu dacă e termen local (ex: "Mămăligă")
 * - description, ingredients, titluri secțiuni — obiect { ro, en, it, ... }
 */

import type { Locale, LocalizedText } from "@/lib/i18n/types";
import menuJson from "@/locales/menu.json";

export type { LocalizedText };

export const siteConfig = {
  brand: {
    primary: "NO NAME",
    secondary: "by Casa Ede",
  },
  social: {
    facebook: "https://www.facebook.com/p/Casa-Ede-Restaurant-100067066414143/",
    instagram: "https://www.instagram.com/restaurantnoname/",
    tiktok: "https://www.tiktok.com/@nonamebycasaede",
  },
  tagline: {
    ro: "Restaurant · Terasă · București",
    en: "Restaurant · Terrace · Bucharest",
    it: "Ristorante · Terrazza · Bucarest",
    es: "Restaurante · Terraza · Bucarest",
    fr: "Restaurant · Terrasse · Bucarest",
    tr: "Restoran · Teras · Bükreş",
    ru: "Ресторан · Терраса · Бухарест",
    ar: "مطعم · تراس · بوخارست",
  },
  description: {
    ro: "Bucătărie românească, porții generoase și seri lungi pe Bulevardul Nicolae Grigorescu.",
    en: "Romanian cooking, generous portions and late nights on Nicolae Grigorescu Boulevard.",
    it: "Cucina rumena, porzioni generose e serate lunghe su Bulevardul Nicolae Grigorescu.",
    es: "Cocina rumana, raciones generosas y noches largas en el Bulevardul Nicolae Grigorescu.",
    fr: "Cuisine roumaine, portions généreuses et soirées prolongées sur le Bulevardul Nicolae Grigorescu.",
    tr: "Romen mutfağı, bol porsiyonlar ve Nicolae Grigorescu Bulvarı'nda uzun geceler.",
    ru: "Румынская кухня, щедрые порции и долгие вечера на бульваре Николае Григореску.",
    ar: "مطبخ روماني وحصص وفيرة وأمسيات طويلة على شارع Nicolae Grigorescu.",
  },
  google: {
    rating: 4.3,
    reviewCount: 300,
    priceRange: "60–120 lei",
    plusCode: "C5M6+M7",
    lat: 44.4342128,
    lng: 26.160696,
    placeUrl:
      "https://www.google.com/maps/place/No+Name+By+Casa+Ede/@44.4342128,26.160696,17z",
    photosUrl:
      "https://www.google.com/maps/place/No+Name+By+Casa+Ede/@44.4342128,26.160696,17z/data=!3m1!4b1!4m6!3m5!1s0x40b1ffbd958f718b:0xfb72af8e5d288edb!8m2!3d44.4342128!4d26.160696!16s%2Fg%2F11pbtnpl22",
    embedUrl:
      "https://www.google.com/maps?q=No+Name+By+Casa+Ede,+Bulevardul+Nicolae+Grigorescu+1A,+Bucure%C8%99ti&hl=ro&z=17&output=embed",
    streetViewEmbedUrl:
      "https://www.google.com/maps/embed?pb=!4v1726680000000!6m8!1m7!1sr9-WILHl9uVi_8jK2XHtDw!2m2!1d44.4342128!2d26.160696!3f73.689804!4f0!5f0.7",
  },
  gallery: [
    { src: "/images/venue/interior-1.webp", alt: "Interior NO NAME by Casa Ede", captionKey: "gallery.interior", category: "interior" as const },
    { src: "/images/venue/interior-2.webp", alt: "Interior NO NAME by Casa Ede", captionKey: "gallery.interior", category: "interior" as const },
    { src: "/images/venue/interior-3.webp", alt: "Interior NO NAME by Casa Ede", captionKey: "gallery.interior", category: "interior" as const },
    { src: "/images/venue/interior-4.webp", alt: "Interior NO NAME by Casa Ede", captionKey: "gallery.interior", category: "interior" as const },
    { src: "/images/venue/interior-5.webp", alt: "Interior NO NAME by Casa Ede", captionKey: "gallery.interior", category: "interior" as const },
    { src: "/images/venue/interior-6.webp", alt: "Interior NO NAME by Casa Ede", captionKey: "gallery.interior", category: "interior" as const },
    { src: "/images/venue/interior-7.webp", alt: "Interior NO NAME by Casa Ede", captionKey: "gallery.interior", category: "interior" as const },
    { src: "/images/venue/interior-8.webp", alt: "Interior NO NAME by Casa Ede", captionKey: "gallery.interior", category: "interior" as const },
    { src: "/images/venue/interior-9.webp", alt: "Interior NO NAME by Casa Ede", captionKey: "gallery.interior", category: "interior" as const },
    { src: "/images/venue/interior-10.webp", alt: "Interior NO NAME by Casa Ede", captionKey: "gallery.interior", category: "interior" as const },
    { src: "/images/venue/dish-1.webp", alt: "Platou grill Casa Ede", captionKey: "gallery.grill", category: "food" as const },
    { src: "/images/venue/dish-2.webp", alt: "Crispy cu cartofi prăjiți", captionKey: "gallery.crispy", category: "food" as const },
    { src: "/images/venue/dish-3.webp", alt: "Burger cu chipsuri", captionKey: "gallery.burger", category: "food" as const },
    { src: "/images/venue/dish-4.webp", alt: "Coaste la grătar", captionKey: "gallery.ribs", category: "food" as const },
    { src: "/images/venue/dish-5.webp", alt: "Creveți în sos", captionKey: "gallery.shrimp", category: "food" as const },
    { src: "/images/venue/dish-6.webp", alt: "Specialitate la tigaie", captionKey: "gallery.skillet", category: "food" as const },
    { src: "/images/venue/dish-7.webp", alt: "Paste cu fructe de mare", captionKey: "gallery.seafoodPasta", category: "food" as const },
    { src: "/images/venue/dish-8.webp", alt: "Penne cu roșii", captionKey: "gallery.penne", category: "food" as const },
    { src: "/images/venue/dish-9.webp", alt: "Cheesecake", captionKey: "gallery.cheesecake", category: "food" as const },
    { src: "/images/venue/dish-10.webp", alt: "Cafea latte", captionKey: "gallery.latte", category: "food" as const },
  ],
  menuPdfUrl: "/meniu-mancare-bauturi.pdf",
  hero: {
    subtitle: {
      ro: "Bucătărie românească · Terasă · Seri până la 4:00",
      en: "Romanian cuisine · Terrace · Open until 4:00",
      it: "Cucina rumena · Terrazza · Aperto fino alle 4:00",
      es: "Cocina rumana · Terraza · Abierto hasta las 4:00",
      fr: "Cuisine roumaine · Terrasse · Ouvert jusqu'à 4h00",
      tr: "Romen mutfağı · Teras · 04:00'e kadar açık",
      ru: "Румынская кухня · Терраса · До 4:00",
      ar: "مطبخ روماني · تراس · مفتوح حتى 4:00",
    },
    backgroundImage: "/images/venue/hero.webp",
    atmosphereVideo: "/videos/hero-banner.mp4",
    ctaMenu: {
      ro: "Meniul principal",
      en: "Main Menu",
      it: "Menu Principale",
      es: "Menú Principal",
      fr: "Menu Principal",
      tr: "Ana Menü",
      ru: "Основное меню",
      ar: "القائمة الرئيسية",
    },
    ctaEvents: {
      ro: "Evenimente speciale",
      en: "Special events",
      it: "Eventi speciali",
      es: "Eventos especiales",
      fr: "Événements spéciaux",
      tr: "Özel etkinlikler",
      ru: "Особые события",
      ar: "فعاليات خاصة",
    },
  },
  contact: {
    address: "Bulevardul Nicolae Grigorescu 1A, 030431 București",
    phone: "+40747171361",
    phoneHref: "tel:+40747171361",
    whatsappHref: "https://wa.me/40747171361",
    email: "",
    hours: [
      {
        days: {
          ro: "Luni–duminică",
          en: "Monday - Sunday",
          it: "Lunedì - Domenica",
          es: "Lunes - Domingo",
          fr: "Lundi - Dimanche",
          tr: "Pazartesi - Pazar",
          ru: "Понедельник - Воскресенье",
          ar: "الإثنين - الأحد",
        },
        time: "12:00 - 04:00",
      },
    ],
    mapPlaceholder: "/images/venue/streetview.webp",
    mapEmbedUrl:
      "https://www.google.com/maps?q=No+Name+By+Casa+Ede,+Bulevardul+Nicolae+Grigorescu+1A,+Bucure%C8%99ti&hl=ro&z=17&output=embed",
  },
  navigation: [
    { id: "hero" as const, href: "/" },
    { id: "menu" as const, href: "/menu" },
    { id: "events" as const, href: "/evenimente" },
    { id: "gallery" as const, href: "/galerie" },
    { id: "contact" as const, href: "/contact" },
  ],
};

// ─── Tipuri meniu ───────────────────────────────────────────────────────────

export type MenuItem = {
  id: string;
  name: LocalizedText | string;
  price: string;
  volume?: string;
  alcohol?: string;
  description?: LocalizedText;
  ingredients: LocalizedText;
  nutrition: LocalizedText;
  image: string;
};

export type MainMenuCategory = {
  category: LocalizedText;
  description?: LocalizedText;
  items: MenuItem[];
};

export type FlipbookTocEntry = {
  id: string;
  title: LocalizedText;
  pageIndex: number;
};

export type FlipbookPageConfig = {
  id: string;
  title?: LocalizedText | string;
  subtitle?: LocalizedText;
  variant: "cover" | "toc" | "category" | "items";
  itemIds?: string[];
  tocEntries?: FlipbookTocEntry[];
};

export type MenuBookConfig = {
  id: string;
  title: LocalizedText;
  subtitle?: LocalizedText;
  pages: FlipbookPageConfig[];
};

const RO = (text: string): LocalizedText => ({ ro: text });

const toLocalizedName = (name: MenuItem["name"]): LocalizedText => {
  if (typeof name !== "string") return name;
  return {
    ro: name,
    en: name,
    it: name,
    es: name,
    fr: name,
    tr: name,
    ru: name,
    ar: name,
  };
};

const normalizeMenuCategoryNames = (categories: MainMenuCategory[]): MainMenuCategory[] =>
  categories.map((category) => ({
    ...category,
    items: category.items.map((item) => ({
      ...item,
      name: toLocalizedName(item.name),
    })),
  }));

// ─── Meniu principal ────────────────────────────────────────────────────────

const foodMenuCategoriesSource: MainMenuCategory[] = menuJson.foodMenuCategories as MainMenuCategory[];
const drinksMenuCategoriesSource: MainMenuCategory[] = menuJson.drinksMenuCategories as MainMenuCategory[];

export const foodMenuCategories: MainMenuCategory[] = normalizeMenuCategoryNames(foodMenuCategoriesSource);
export const drinksMenuCategories: MainMenuCategory[] = normalizeMenuCategoryNames(drinksMenuCategoriesSource);

export const mainMenu = foodMenuCategories;
export const menuData = foodMenuCategories;

export const menuItems: Record<string, MenuItem> = [...foodMenuCategories, ...drinksMenuCategories].reduce<
  Record<string, MenuItem>
>(
  (acc, section) => {
    section.items.forEach((item) => {
      acc[item.id] = item;
    });
    return acc;
  },
  {}
);

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const MAX_ITEMS_PER_PAGE = 8;
const MAX_TOC_ENTRIES_PER_PAGE = 6;
const MENU_NAME_CHARS_PER_LINE = 38;

const itemLineCost = (item: MenuItem): number => {
  const name = typeof item.name === "string" ? item.name : item.name.ro;
  return Math.min(3, Math.max(1, Math.ceil(name.length / MENU_NAME_CHARS_PER_LINE)));
};

const chunkItemsByLineBudget = (items: MenuItem[], maxSlots: number): MenuItem[][] => {
  const chunks: MenuItem[][] = [];
  let current: MenuItem[] = [];
  let used = 0;
  for (const item of items) {
    const cost = itemLineCost(item);
    if (current.length > 0 && used + cost > maxSlots) {
      chunks.push(current);
      current = [item];
      used = cost;
    } else {
      current.push(item);
      used += cost;
    }
  }
  if (current.length) chunks.push(current);
  return chunks;
};

const CONTINUATION_BY_LOCALE: Record<Locale, string> = {
  ro: "continuare",
  en: "continued",
  it: "continua",
  es: "continuación",
  fr: "suite",
  tr: "devam",
  ru: "продолжение",
  ar: "متابعة",
};

const withContinuationLabel = (title: LocalizedText): LocalizedText => {
  const labeled: Partial<LocalizedText> = {};
  for (const [locale, value] of Object.entries(title) as [Locale, string][]) {
    labeled[locale] = `${value} (${CONTINUATION_BY_LOCALE[locale]})`;
  }
  return labeled as LocalizedText;
};

const chunkItems = <T>(items: T[], chunkSize: number): T[][] => {
  if (chunkSize <= 0) return [items];
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    chunks.push(items.slice(i, i + chunkSize));
  }
  return chunks;
};

const buildBookPages = (
  categories: MainMenuCategory[],
  cover: { title: LocalizedText | string; subtitle?: LocalizedText } = {
    title: "MENU",
    subtitle: RO("À la carte"),
  }
): FlipbookPageConfig[] => {
  const coverPage: FlipbookPageConfig = {
    id: "cover",
    variant: "cover",
    title: cover.title,
    subtitle: cover.subtitle,
  };

  const contentPages: FlipbookPageConfig[] = [];
  const tocEntries: FlipbookTocEntry[] = [];

  for (const section of categories) {
    const categoryId = slugify(section.category.ro);
    const itemChunks = chunkItemsByLineBudget(section.items, MAX_ITEMS_PER_PAGE);
    tocEntries.push({
      id: `cat-${categoryId}`,
      title: section.category,
      pageIndex: contentPages.length,
    });
    contentPages.push({
      id: `cat-${categoryId}`,
      variant: "category",
      title: section.category,
      subtitle: section.description,
    });
    itemChunks.forEach((chunk, chunkIndex) => {
      contentPages.push({
        id: `items-${categoryId}-${chunkIndex + 1}`,
        variant: "items",
        title: chunkIndex === 0 ? section.category : withContinuationLabel(section.category),
        itemIds: chunk.map((item) => item.id),
      });
    });
  }

  const tocChunks = chunkItems(tocEntries, MAX_TOC_ENTRIES_PER_PAGE);
  const tocOffset = 1 + tocChunks.length;
  const tocPages: FlipbookPageConfig[] = tocChunks.map((chunk, chunkIndex) => ({
    id: chunkIndex === 0 ? "toc" : `toc-${chunkIndex + 1}`,
    variant: "toc",
    tocEntries: chunk.map((entry) => ({
      ...entry,
      pageIndex: entry.pageIndex + tocOffset,
    })),
  }));

  return [coverPage, ...tocPages, ...contentPages];
};

export const foodMenuBook: MenuBookConfig = {
  id: "food-menu",
  title: {
    ro: "Meniul de mâncare",
    en: "Food Menu",
    it: "Menu Cibo",
    es: "Menú de Comida",
    fr: "Menu Nourriture",
    tr: "Yemek Menüsü",
    ru: "Меню Еды",
    ar: "قائمة الطعام",
  },
  subtitle: {
    ro: "À la carte",
    en: "À la carte",
    it: "À la carte",
    es: "A la carta",
    fr: "À la carte",
    tr: "Alakart",
    ru: "А ля карт",
    ar: "حسب الطلب",
  },
  pages: buildBookPages(foodMenuCategories, {
    title: {
      ro: "MENIU MÂNCARE",
      en: "FOOD MENU",
      it: "MENU CIBO",
      es: "MENÚ COMIDA",
      fr: "MENU NOURRITURE",
      tr: "YEMEK MENÜSÜ",
      ru: "МЕНЮ ЕДЫ",
      ar: "قائمة الطعام",
    },
    subtitle: {
      ro: "À la carte",
      en: "À la carte",
      it: "À la carte",
      es: "A la carta",
      fr: "À la carte",
      tr: "Alakart",
      ru: "А ля карт",
      ar: "حسب الطلب",
    },
  }),
};

export const drinksMenuBook: MenuBookConfig = {
  id: "drinks-menu",
  title: {
    ro: "Meniul de băuturi",
    en: "Drinks Menu",
    it: "Menu Bevande",
    es: "Menú de Bebidas",
    fr: "Menu Boissons",
    tr: "İçecek Menüsü",
    ru: "Меню Напитков",
    ar: "قائمة المشروبات",
  },
  subtitle: {
    ro: "Selecție de bar",
    en: "Bar Selection",
    it: "Selezione Bar",
    es: "Selección de Bar",
    fr: "Sélection du Bar",
    tr: "Bar Seçkisi",
    ru: "Барная коллекция",
    ar: "تشكيلة البار",
  },
  pages: buildBookPages(drinksMenuCategories, {
    title: {
      ro: "MENIU BĂUTURI",
      en: "DRINKS MENU",
      it: "MENU BEVANDE",
      es: "MENÚ BEBIDAS",
      fr: "MENU BOISSONS",
      tr: "İÇECEK MENÜSÜ",
      ru: "МЕНЮ НАПИТКОВ",
      ar: "قائمة المشروبات",
    },
    subtitle: {
      ro: "Selecție de bar",
      en: "Bar Selection",
      it: "Selezione Bar",
      es: "Selección de Bar",
      fr: "Sélection du Bar",
      tr: "Bar Seçkisi",
      ru: "Барная коллекция",
      ar: "تشكيلة البار",
    },
  }),
};

export const mainMenuBook: MenuBookConfig = foodMenuBook;

export function getMenuItem(id: string): MenuItem | undefined {
  return menuItems[id];
}
