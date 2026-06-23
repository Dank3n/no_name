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
    ro: "Fine Dining · Casa Ede",
    en: "Fine Dining · Casa Ede",
    it: "Fine Dining · Casa Ede",
    es: "Fine Dining · Casa Ede",
    fr: "Fine Dining · Casa Ede",
    tr: "Fine Dining · Casa Ede",
    ru: "Fine Dining · Casa Ede",
    ar: "فاين داينينغ · Casa Ede",
  },
  description: {
    ro: "Experiență culinară premium în inima Bucureștiului.",
    en: "Premium dining experience in the heart of Bucharest.",
    it: "Esperienza culinaria premium nel cuore di Bucarest.",
    es: "Experiencia gastronómica premium en el corazón de Bucarest.",
    fr: "Expérience culinaire premium au cœur de Bucarest.",
    tr: "Bükreş'in kalbinde premium yemek deneyimi.",
    ru: "Премиальный гастрономический опыт в сердце Бухареста.",
    ar: "تجربة طعام فاخرة في قلب بوخارست.",
  },
  menuPdfUrl: "/meniu-mancare-bauturi.pdf",
  specialEventsPdfUrl: "/meniu-andreea-bld.pdf",
  hero: {
    subtitle: {
      ro: "Bucătărie de autor · Atmosferă rafinată",
      en: "Author cuisine · Refined atmosphere",
      it: "Cucina d'autore · Atmosfera raffinata",
      es: "Cocina de autor · Ambiente refinado",
      fr: "Cuisine d'auteur · Atmosphère raffinée",
      tr: "Şef mutfağı · Seçkin atmosfer",
      ru: "Авторская кухня · Изысканная атмосфера",
      ar: "مطبخ حر · أجواء راقية",
    },
    backgroundImage: "/images/hero.svg",
    ctaMenu: {
      ro: "Meniul Principal",
      en: "Main Menu",
      it: "Menu Principale",
      es: "Menú Principal",
      fr: "Menu Principal",
      tr: "Ana Menü",
      ru: "Основное меню",
      ar: "القائمة الرئيسية",
    },
    ctaEvents: {
      ro: "Special & Events",
      en: "Special & Events",
      it: "Special & Eventi",
      es: "Especial y Eventos",
      fr: "Spécial & Événements",
      tr: "Özel & Etkinlikler",
      ru: "Особые события",
      ar: "خاص والفعاليات",
    },
  },
  contact: {
    address: "Bulevardul Nicolae Grigorescu 1A, 030431 București",
    phone: "+40747171361",
    email: "",
    hours: [
      {
        days: {
          ro: "Luni - Duminică",
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
    mapPlaceholder: "/images/map-placeholder.svg",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Bulevardul+Nicolae+Grigorescu+1A,+030431+Bucure%C8%99ti,+Rom%C3%A2nia&hl=ro&z=16&output=embed",
  },
  navigation: [
    { id: "hero" as const },
    { id: "menu" as const },
    { id: "events" as const },
    { id: "contact" as const },
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

export type FlipbookPageConfig = {
  id: string;
  title?: LocalizedText | string;
  subtitle?: LocalizedText;
  variant: "cover" | "category" | "items";
  itemIds?: string[];
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

const MAX_ITEMS_PER_PAGE = 6;

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
    subtitle: RO("A la Carte"),
  }
): FlipbookPageConfig[] => {
  const pages: FlipbookPageConfig[] = [
    {
      id: "cover",
      variant: "cover",
      title: cover.title,
      subtitle: cover.subtitle,
    },
  ];

  for (const section of categories) {
    const categoryId = slugify(section.category.ro);
    const itemChunks = chunkItems(section.items, MAX_ITEMS_PER_PAGE);
    pages.push({
      id: `cat-${categoryId}`,
      variant: "category",
      title: section.category,
      subtitle: section.description,
    });
    itemChunks.forEach((chunk, chunkIndex) => {
      pages.push({
        id: `items-${categoryId}-${chunkIndex + 1}`,
        variant: "items",
        title: chunkIndex === 0 ? section.category : withContinuationLabel(section.category),
        itemIds: chunk.map((item) => item.id),
      });
    });
  }

  return pages;
};

export const foodMenuBook: MenuBookConfig = {
  id: "food-menu",
  title: {
    ro: "Meniul de Mâncare",
    en: "Food Menu",
    it: "Menu Cibo",
    es: "Menú de Comida",
    fr: "Menu Nourriture",
    tr: "Yemek Menüsü",
    ru: "Меню Еды",
    ar: "قائمة الطعام",
  },
  subtitle: {
    ro: "A la Carte",
    en: "A la Carte",
    it: "À la Carte",
    es: "A la Carta",
    fr: "À la Carte",
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
      ro: "A la Carte",
      en: "A la Carte",
      it: "À la Carte",
      es: "A la Carta",
      fr: "À la Carte",
      tr: "Alakart",
      ru: "А ля карт",
      ar: "حسب الطلب",
    },
  }),
};

export const drinksMenuBook: MenuBookConfig = {
  id: "drinks-menu",
  title: {
    ro: "Meniul de Băuturi",
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
