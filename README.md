# NO NAME by Casa Ede — Website Restaurant

Site Next.js + Tailwind CSS, design premium negru & auriu, ușor de editat dintr-un singur fișier.

## Pornire

```bash
npm install
npm run dev
```

## Configurare conținut


| Fișier               | Rol                                            |
| -------------------- | ---------------------------------------------- |
| `src/data/config.ts` | Restaurant, meniu, evenimente, link-uri social |
| `src/locales/ui.ts`  | Texte interfață (8 limbi)                      |


### Reguli traduceri

- **NU se traduc:** `brand.primary`, `brand.secondary`, nume locale (`name: "Mămăligă"`)
- **Obiect `{ ro, en, it, es, fr, tr, ru, ar }`:** descrieri, ingrediente, titluri meniu

### Limbi & RTL

Selector în header și footer: RO, EN, IT, ES, FR, TR, RU, AR. Araba (AR) activează `dir="rtl"`.

### Social media

`siteConfig.social` — Facebook, Instagram, TikTok.

### Adăugare produs real

```ts
"id-produs": {
  id: "id-produs",
  name: "Papanași",
  description: { ro: "...", en: "...", it: "..." },
  ingredients: { ro: ["..."], en: ["..."] },
  image: "/images/menu/id-produs.jpg",
  valori_nutritionale: { calories: 450, protein: "25g", carbs: "30g", fat: "18g" },
},
```

Apoi adaugă `"id-produs"` în `itemIds` al unei pagini `variant: "items"` din `mainMenuBook.pages`.

### Adăugare eveniment

Adaugă un obiect în `specialEvents` (vezi comentariile din fișier). Componenta `MenuFlipbook` se refolosește automat.

## Resurse în `public/`

```
public/
├── images/
│   ├── hero.jpg          ← fundal Hero
│   ├── menu/             ← câte o imagine per preparat
│   └── events/           ← imagini card evenimente
└── menu/
    └── menu-general.pdf  ← PDF descărcabil
```

## Design

- **Valuri aurii & textură punctată:** `src/components/decor/GoldWaves.tsx`, `SectionDivider.tsx`
- **Flori pe paginile meniului:** `src/components/decor/BotanicalCorner.tsx`
- **Logo brand:** `src/components/brand/BrandLogo.tsx`
- **Culori & tipografie:** `src/app/globals.css`

## Hosting static

În `next.config.ts`, decomentează `output: "export"` și `images: { unoptimized: true }`, apoi `npm run build` → încarcă folderul `out/`.