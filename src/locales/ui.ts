import type { LocalizedText } from "@/lib/i18n/types";

const L = (
  ro: string,
  en: string,
  it: string,
  es: string,
  fr: string,
  tr: string,
  ru: string,
  ar: string
): LocalizedText => ({ ro, en, it, es, fr, tr, ru, ar });

export type UiTranslationTree = {
  [key: string]: LocalizedText | UiTranslationTree;
};

export const uiTranslations: UiTranslationTree = {
  nav: {
    hero: L("Acasă", "Home", "Home", "Inicio", "Accueil", "Ana Sayfa", "Главная", "الرئيسية"),
    menu: L("Meniu", "Menu", "Menu", "Menú", "Menu", "Menü", "Меню", "القائمة"),
    events: L("Evenimente", "Events", "Eventi", "Eventos", "Événements", "Etkinlikler", "События", "الفعاليات"),
    contact: L("Contact", "Contact", "Contatti", "Contacto", "Contact", "İletişim", "Контакты", "اتصل بنا"),
    petFriendly: L("Permis cu animale", "Pet Friendly", "Animali ammessi", "Pet Friendly", "Animaux acceptés", "Evcil hayvan dostu", "Можно с питомцами", "صديق للحيوانات الأليفة"),
  },
  hero: {
    scroll: L("Scroll", "Scroll", "Scorri", "Desplazar", "Défiler", "Kaydır", "Листайте", "تمرير"),
  },
  menu: {
    sectionLabel: L("A la Carte", "A la Carte", "À la carte", "A la carta", "À la carte", "Alakart", "А ля карт", "آلا كارت"),
    sectionDesc: L(
      "Răsfoiește cartea interactivă. Apasă pe un preparat pentru preț, ingrediente și rețetar brut.",
      "Browse the interactive book. Tap a dish for price, ingredients and raw recipe details.",
      "Sfoglia il libro interattivo. Tocca un piatto per prezzo, ingredienti e ricetta grezza.",
      "Explora el libro interactivo. Toca un plato para precio, ingredientes y receta bruta.",
      "Parcourez le livre interactif. Touchez un plat pour le prix, les ingrédients et la recette brute.",
      "İnteraktif kitabı gezinin. Fiyat, malzemeler ve ham reçete için bir yemeğe dokunun.",
      "Листайте интерактивную книгу. Нажмите на блюдо для цены, ингредиентов и сырого рецепта.",
      "تصفح الكتاب التفاعلي. اضغط على طبق للسعر والمكونات ووصفة التحضير الخام."
    ),
    flipPrev: L("← Anterior", "← Previous", "← Precedente", "← Anterior", "← Précédent", "← Önceki", "← Назад", "→ السابق"),
    flipNext: L("Următor →", "Next →", "Successivo →", "Siguiente →", "Suivant →", "Sonraki →", "Далее →", "التالي ←"),
    foodTab: L("Meniu Mâncare", "Food Menu", "Menu Cibo", "Menú Comida", "Menu Nourriture", "Yemek Menüsü", "Меню Еды", "قائمة الطعام"),
    drinksTab: L("Meniu Băuturi", "Drinks Menu", "Menu Bevande", "Menú Bebidas", "Menu Boissons", "İçecek Menüsü", "Меню Напитков", "قائمة المشروبات"),
    expand: L("Extinde", "Expand", "Espandi", "Expandir", "Agrandir", "Genişlet", "Развернуть", "تكبير"),
    collapse: L("Restrânge", "Collapse", "Riduci", "Contraer", "Réduire", "Daralt", "Свернуть", "تصغير"),
    downloadPdf: L("Descarcă meniul PDF", "Download menu PDF", "Scarica menu PDF", "Descargar menú PDF", "Télécharger le menu PDF", "Menü PDF indir", "Скачать меню PDF", "تحميل قائمة PDF"),
    browseHint: L("Răsfoiește →", "Browse →", "Sfoglia →", "Explorar →", "Parcourir →", "Gez →", "Листать →", "تصفح ←"),
    details: L("Detalii", "Details", "Dettagli", "Detalles", "Détails", "Detay", "Подробнее", "تفاصيل"),
    price: L("Preț", "Price", "Prezzo", "Precio", "Prix", "Fiyat", "Цена", "السعر"),
    coverMenu: L("MENU", "MENU", "MENU", "MENÚ", "MENU", "MENÜ", "МЕНЮ", "قائمة"),
    imagePlaceholder: L("Imagine preparat", "Dish image", "Immagine piatto", "Imagen del plato", "Image du plat", "Yemek görseli", "Фото блюда", "صورة الطبق"),
    ingredients: L("Ingrediente", "Ingredients", "Ingredienti", "Ingredientes", "Ingrédients", "Malzemeler", "Ингредиенты", "المكونات"),
    recipe: L("Rețetar brut", "Raw recipe", "Ricetta grezza", "Receta bruta", "Recette brute", "Ham reçete", "Сырая рецептура", "وصفة خام"),
    nutritionTitle: L("Valori nutriționale", "Nutritional values", "Valori nutrizionali", "Valores nutricionales", "Valeurs nutritionnelles", "Besin değerleri", "Пищевая ценность", "القيم الغذائية"),
    nutritionPlaceholder: L(
      "Valori nutriționale în curs de completare.",
      "Nutritional values pending completion.",
      "Valori nutrizionali in attesa di completamento.",
      "Valores nutricionales pendientes de completar.",
      "Valeurs nutritionnelles en attente de complétion.",
      "Besin değerleri henüz tamamlanmadı.",
      "Пищевая ценность будет добавлена.",
      "القيم الغذائية قيد الإضافة."
    ),
    nutrition: {
      calories: L("Calorii", "Calories", "Calorie", "Calorías", "Calories", "Kalori", "Калории", "سعرات"),
      protein: L("Proteine", "Protein", "Proteine", "Proteínas", "Protéines", "Protein", "Белки", "بروتين"),
      carbs: L("Carbohidrați", "Carbs", "Carboidrati", "Carbohidratos", "Glucides", "Karbonhidrat", "Углеводы", "كربوهيدرات"),
      fat: L("Grăsimi", "Fat", "Grassi", "Grasas", "Lipides", "Yağ", "Жиры", "دهون"),
      fiber: L("Fibre", "Fiber", "Fibre", "Fibra", "Fibres", "Lif", "Клетчатка", "ألياف"),
      sodium: L("Sodiu", "Sodium", "Sodio", "Sodio", "Sodium", "Sodyum", "Натрий", "صوديوم"),
    },
  },
  events: {
    sectionLabel: L("Ediții limitate", "Limited editions", "Edizioni limitate", "Ediciones limitadas", "Éditions limitées", "Sınırlı baskılar", "Лимитированные издания", "إصدارات محدودة"),
    title: L("Special & Events", "Special & Events", "Special & Eventi", "Especial y Eventos", "Spécial & Événements", "Özel & Etkinlikler", "Особые события", "خاص والفعاليات"),
    sectionDesc: L(
      "Meniuri tematice cu aceeași carte interactivă ca la meniul principal.",
      "Themed menus with the same interactive book as the main menu.",
      "Menu tematici con lo stesso libro interattivo del menu principale.",
      "Menús temáticos con el mismo libro interactivo que el menú principal.",
      "Menus thématiques avec le même livre interactif que le menu principal.",
      "Ana menüyle aynı interaktif kitap ile temalı menüler.",
      "Тематические меню с той же интерактивной книгой, что и основное.",
      "قوائم موسمية بنفس الكتاب التفاعلي للقائمة الرئيسية."
    ),
    emptyTitle: L("Evenimente în curând", "Events coming soon", "Eventi in arrivo", "Eventos próximamente", "Événements bientôt", "Etkinlikler yakında", "Скоро события", "فعاليات قريباً"),
    emptyDesc: L(
      "Adaugă evenimente în config.ts → specialEvents.",
      "Add events in config.ts → specialEvents.",
      "Aggiungi eventi in config.ts → specialEvents.",
      "Añade eventos en config.ts → specialEvents.",
      "Ajoutez des événements dans config.ts → specialEvents.",
      "config.ts → specialEvents içine etkinlik ekleyin.",
      "Добавьте события в config.ts → specialEvents.",
      "أضف فعاليات في config.ts → specialEvents."
    ),
    andreeaBldTitle: L(
      "Meniu Special Andreea BLD",
      "Andreea BLD Special Menu",
      "Menu Speciale Andreea BLD",
      "Menú Especial Andreea BLD",
      "Menu Spécial Andreea BLD",
      "Andreea BLD Özel Menüsü",
      "Специальное меню Andreea BLD",
      "قائمة Andreea BLD الخاصة"
    ),
    andreeaBldSubtitle: L(
      "NO NAME by Casa Ede",
      "NO NAME by Casa Ede",
      "NO NAME by Casa Ede",
      "NO NAME by Casa Ede",
      "NO NAME by Casa Ede",
      "NO NAME by Casa Ede",
      "NO NAME by Casa Ede",
      "NO NAME by Casa Ede"
    ),
    andreeaBldDesc: L(
      "Meniul special este afișat direct în pagină, în format PDF.",
      "The special menu is displayed directly on the page in PDF format.",
      "Il menu speciale è mostrato direttamente nella pagina in formato PDF.",
      "El menú especial se muestra directamente en la página en formato PDF.",
      "Le menu spécial est affiché directement sur la page au format PDF.",
      "Özel menü sayfada doğrudan PDF formatında gösterilir.",
      "Специальное меню отображается прямо на странице в формате PDF.",
      "يتم عرض القائمة الخاصة مباشرة على الصفحة بصيغة PDF."
    ),
    fullscreen: L("Ecran complet", "Fullscreen", "Schermo intero", "Pantalla completa", "Plein écran", "Tam ekran", "Полный экран", "ملء الشاشة"),
    closeFullscreen: L("Închide ecran complet", "Close fullscreen", "Chiudi schermo intero", "Cerrar pantalla completa", "Fermer le plein écran", "Tam ekranı kapat", "Закрыть полноэкранный режим", "إغلاق ملء الشاشة"),
    downloadPdf: L("Descarcă PDF", "Download PDF", "Scarica PDF", "Descargar PDF", "Télécharger PDF", "PDF indir", "Скачать PDF", "تحميل PDF"),
  },
  contact: {
    sectionLabel: L("Vizitează-ne", "Visit us", "Visitaci", "Visítanos", "Venez nous voir", "Bizi ziyaret edin", "Приходите к нам", "زورونا"),
    title: L("Contact & Locație", "Contact & Location", "Contatti & Posizione", "Contacto y Ubicación", "Contact & Adresse", "İletişim & Konum", "Контакты и адрес", "اتصل بنا والموقع"),
    address: L("Adresă", "Address", "Indirizzo", "Dirección", "Adresse", "Adres", "Адрес", "العنوان"),
    reservations: L("Rezervări", "Reservations", "Prenotazioni", "Reservas", "Réservations", "Rezervasyon", "Бронирование", "الحجوزات"),
    hours: L("Program", "Opening hours", "Orari", "Horario", "Horaires", "Çalışma saatleri", "Часы работы", "ساعات العمل"),
    reserveCta: L("Rezervă o masă", "Reserve a table", "Prenota un tavolo", "Reservar mesa", "Réserver une table", "Masa rezerve et", "Забронировать стол", "احجز طاولة"),
    mapHint: L(
      "Adaugă Google Maps în config.ts",
      "Add Google Maps in config.ts",
      "Aggiungi Google Maps in config.ts",
      "Añade Google Maps en config.ts",
      "Ajoutez Google Maps dans config.ts",
      "config.ts içine Google Maps ekleyin",
      "Добавьте Google Maps в config.ts",
      "أضف Google Maps في config.ts"
    ),
    mapAlt: L("Hartă — placeholder", "Map — placeholder", "Mappa — placeholder", "Mapa — placeholder", "Carte — placeholder", "Harita — placeholder", "Карта — placeholder", "خريطة — placeholder"),
  },
  footer: {
    rights: L(
      "Toate drepturile rezervate",
      "All rights reserved",
      "Tutti i diritti riservati",
      "Todos los derechos reservados",
      "Tous droits réservés",
      "Tüm hakları saklıdır",
      "Все права защищены",
      "جميع الحقوق محفوظة"
    ),
    followUs: L("Urmărește-ne", "Follow us", "Seguici", "Síguenos", "Suivez-nous", "Bizi takip edin", "Мы в соцсетях", "تابعنا"),
  },
  lang: {
    label: L("Limbă", "Language", "Lingua", "Idioma", "Langue", "Dil", "Язык", "اللغة"),
    select: L("Selectează limba", "Select language", "Seleziona lingua", "Seleccionar idioma", "Choisir la langue", "Dil seçin", "Выберите язык", "اختر اللغة"),
  },
  a11y: {
    menu: L("Meniu navigare", "Navigation menu", "Menu navigazione", "Menú de navegación", "Menu navigation", "Gezinme menüsü", "Меню навигации", "قائمة التنقل"),
    close: L("Închide", "Close", "Chiudi", "Cerrar", "Fermer", "Kapat", "Закрыть", "إغلاق"),
    socialFacebook: L("Facebook", "Facebook", "Facebook", "Facebook", "Facebook", "Facebook", "Facebook", "فيسبوك"),
    socialInstagram: L("Instagram", "Instagram", "Instagram", "Instagram", "Instagram", "Instagram", "Instagram", "إنستغرام"),
    socialTiktok: L("TikTok", "TikTok", "TikTok", "TikTok", "TikTok", "TikTok", "TikTok", "تيك توك"),
  },
};
