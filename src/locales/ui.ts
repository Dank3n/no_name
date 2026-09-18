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
    scroll: L("Descoperă locul", "Discover the place", "Scopri il luogo", "Descubre el lugar", "Découvrir le lieu", "Mekanı keşfet", "Открыть место", "اكتشف المكان"),
    rating: L("Google", "Google", "Google", "Google", "Google", "Google", "Google", "Google"),
    reviews: L("recenzii", "reviews", "recensioni", "reseñas", "avis", "yorum", "отзывов", "تقييمات"),
  },
  highlights: {
    sectionLabel: L("Din Google Maps", "From Google Maps", "Da Google Maps", "De Google Maps", "Depuis Google Maps", "Google Maps'ten", "Из Google Maps", "من خرائط Google"),
    title: L("De ce venim aici", "Why people come", "Perché venire", "Por qué venir", "Pourquoi venir", "Neden gelinir", "Почему приходят", "لماذا يأتون"),
    romanian: L("Bucate românești", "Romanian dishes", "Piatti rumeni", "Platos rumanos", "Plats roumains", "Romen yemekleri", "Румынские блюда", "أطباق رومانية"),
    portions: L("Porții generoase", "Generous portions", "Porzioni generose", "Raciones generosas", "Portions généreuses", "Bol porsiyonlar", "Щедрые порции", "حصص وفيرة"),
    music: L("Muzică live", "Live music", "Musica dal vivo", "Música en vivo", "Musique live", "Canlı müzik", "Живая музыка", "موسيقى حية"),
    terrace: L("Terasă", "Terrace", "Terrazza", "Terraza", "Terrasse", "Teras", "Терраса", "تراس"),
    dineIn: L("Servire la masă", "Dine-in", "Consumazione sul posto", "Comer en el local", "Sur place", "Masada servis", "Обслуживание в зале", "تناول في المكان"),
    delivery: L("Livrare", "Delivery", "Consegna", "Entrega", "Livraison", "Teslimat", "Доставка", "توصيل"),
    pickup: L("Ridicare la bordură", "Kerbside pickup", "Ritiro a bordo strada", "Recogida en acera", "Retrait en bordure", "Kenardan teslim", "Самовывоз у входа", "استلام من الرصيف"),
    hours: L("Deschis până la 4:00", "Open until 4:00", "Aperti fino alle 4:00", "Abierto hasta las 4:00", "Ouvert jusqu'à 4h00", "04:00'e kadar açık", "Открыто до 4:00", "مفتوح حتى 4:00"),
  },
  gallery: {
    sectionLabel: L("Galerie", "Gallery", "Galleria", "Galería", "Galerie", "Galeri", "Галерея", "معرض"),
    title: L("Locul, masa, atmosfera", "The place, the table, the mood", "Il luogo, il tavolo, l'atmosfera", "El lugar, la mesa, el ambiente", "Le lieu, la table, l'ambiance", "Mekan, masa, atmosfer", "Место, стол, атмосфера", "المكان والمائدة والأجواء"),
    seeMaps: L("Vezi mai multe pe Google Maps", "See more on Google Maps", "Altro su Google Maps", "Más en Google Maps", "Plus sur Google Maps", "Google Maps'te daha fazla", "Ещё в Google Maps", "المزيد على خرائط Google"),
    facade: L("Fațadă", "Facade", "Facciata", "Fachada", "Façade", "Cephe", "Фасад", "واجهة"),
    interior: L("Interior", "Interior", "Interno", "Interior", "Intérieur", "İç mekan", "Интерьер", "الداخل"),
    polenta: L("Mămăligă", "Polenta", "Polenta", "Polenta", "Polenta", "Mamaliga", "Мамалыга", "ماماليغا"),
    papanasi: L("Papanași cu afine", "Papanași with blueberries", "Papanași ai mirtilli", "Papanași con arándanos", "Papanași aux myrtilles", "Yaban mersinli papanași", "Папанашь с черникой", "باباناش بالتوت"),
    grill: L("Grill", "Grill", "Griglia", "Parrilla", "Grill", "Izgara", "Гриль", "مشوي"),
    ribs: L("Coaste", "Ribs", "Costine", "Costillas", "Travers", "Kaburga", "Рёбра", "أضلاع"),
    soup: L("Ciorbă", "Soup", "Zuppa", "Sopa", "Soupe", "Çorba", "Суп", "شوربة"),
    street: L("Pe bulevard", "On the boulevard", "Sul viale", "En el bulevar", "Sur le boulevard", "Bulvarda", "На бульваре", "على الشارع"),
  },
  reviews: {
    sectionLabel: L("Oaspeți", "Guests", "Ospiti", "Huéspedes", "Invités", "Misafirler", "Гости", "الضيوف"),
    title: L("Ce spun pe Google", "What Google reviews say", "Cosa dicono su Google", "Qué dicen en Google", "Ce que disent les avis Google", "Google yorumları", "Что пишут в Google", "ماذا يقولون على Google"),
    openReviews: L("Citește recenziile", "Read the reviews", "Leggi le recensioni", "Leer reseñas", "Lire les avis", "Yorumları oku", "Читать отзывы", "اقرأ التقييمات"),
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
      "Seri speciale, meniuri tematice și momente de sezon la NO NAME by Casa Ede.",
      "Special evenings, themed menus and seasonal moments at NO NAME by Casa Ede.",
      "Serate speciali, menu a tema e momenti di stagione da NO NAME by Casa Ede.",
      "Noches especiales, menús temáticos y momentos de temporada en NO NAME by Casa Ede.",
      "Soirées spéciales, menus thématiques et moments de saison chez NO NAME by Casa Ede.",
      "NO NAME by Casa Ede'de özel geceler, temalı menüler ve mevsimlik anlar.",
      "Особые вечера, тематические меню и сезонные события в NO NAME by Casa Ede.",
      "أمسيات خاصة وقوائم موسمية ولحظات موسمية في NO NAME by Casa Ede."
    ),
    emptyTitle: L("Evenimente în curând", "Events coming soon", "Eventi in arrivo", "Eventos próximamente", "Événements bientôt", "Etkinlikler yakında", "Скоро события", "فعاليات قريباً"),
    emptyDesc: L(
      "Revino curând pentru meniuri tematice și seri speciale. Urmărește-ne pe social media pentru noutăți.",
      "Come back soon for themed menus and special evenings. Follow us on social media for updates.",
      "Torna presto per menu a tema e serate speciali. Seguici sui social per le novità.",
      "Vuelve pronto para menús temáticos y noches especiales. Síguenos en redes para novedades.",
      "Revenez bientôt pour des menus thématiques et des soirées spéciales. Suivez-nous sur les réseaux.",
      "Temalı menüler ve özel geceler için yakında tekrar gelin. Güncellemeler için bizi sosyal medyada takip edin.",
      "Скоро здесь появятся тематические меню и особые вечера. Следите за новостями в соцсетях.",
      "عد قريباً للقوائم الموسمية والأمسيات الخاصة. تابعنا على وسائل التواصل لمعرفة الجديد."
    ),
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
    openInMaps: L(
      "Deschide în Google Maps",
      "Open in Google Maps",
      "Apri in Google Maps",
      "Abrir en Google Maps",
      "Ouvrir dans Google Maps",
      "Google Maps'te aç",
      "Открыть в Google Maps",
      "افتح في خرائط Google"
    ),
    streetView: L("Street View", "Street View", "Street View", "Street View", "Street View", "Street View", "Street View", "عرض الشارع"),
    plusCode: L("Plus code", "Plus code", "Plus code", "Plus code", "Plus code", "Plus code", "Plus code", "رمز Plus"),
    price: L("Preț mediu", "Average price", "Prezzo medio", "Precio medio", "Prix moyen", "Ortalama fiyat", "Средний чек", "متوسط السعر"),
    rating: L("Evaluare Google", "Google rating", "Valutazione Google", "Valoración de Google", "Note Google", "Google puanı", "Оценка Google", "تقييم Google"),
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
