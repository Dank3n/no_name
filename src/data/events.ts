import type { LocalizedText } from "@/lib/i18n/types";

export type VenueEvent = {
  id: string;
  weekday: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  time: string;
  image: string;
};

export const upcomingEvents: VenueEvent[] = [
  {
    id: "live-friday",
    weekday: {
      ro: "Vineri",
      en: "Friday",
      it: "Venerdì",
      es: "Viernes",
      fr: "Vendredi",
      tr: "Cuma",
      ru: "Пятница",
      ar: "الجمعة",
    },
    title: {
      ro: "Concert Live",
      en: "Live concert",
      it: "Concerto live",
      es: "Concierto en vivo",
      fr: "Concert live",
      tr: "Canlı konser",
      ru: "Живой концерт",
      ar: "حفل مباشر",
    },
    description: {
      ro: "Muzică live pe terasă, lumini calde și masă rezervată lângă scenă.",
      en: "Live music on the terrace, warm lights and a reserved table near the stage.",
      it: "Musica dal vivo in terrazza, luci calde e tavolo riservato vicino al palco.",
      es: "Música en vivo en la terraza, luces cálidas y mesa reservada junto al escenario.",
      fr: "Musique live en terrasse, lumières chaudes et table réservée près de la scène.",
      tr: "Terasta canlı müzik, sıcak ışıklar ve sahneye yakın rezerve masa.",
      ru: "Живая музыка на террасе, тёплый свет и столик у сцены.",
      ar: "موسيقى حية على التراس وأضواء دافئة وطاولة محجوزة قرب المسرح.",
    },
    time: "21:00",
    image: "/images/venue/food-5.webp",
  },
  {
    id: "karaoke-saturday",
    weekday: {
      ro: "Sâmbătă",
      en: "Saturday",
      it: "Sabato",
      es: "Sábado",
      fr: "Samedi",
      tr: "Cumartesi",
      ru: "Суббота",
      ar: "السبت",
    },
    title: {
      ro: "Seară Karaoke",
      en: "Karaoke night",
      it: "Serata karaoke",
      es: "Noche karaoke",
      fr: "Soirée karaoké",
      tr: "Karaoke gecesi",
      ru: "Вечер караоке",
      ar: "ليلة كاريوكي",
    },
    description: {
      ro: "Playlist-uri, microfon deschis și terasă până târziu — rezervă locul din vreme.",
      en: "Playlists, open mic and a late terrace — book your table early.",
      it: "Playlist, microfono aperto e terrazza fino a tardi — prenota in anticipo.",
      es: "Playlists, micrófono abierto y terraza hasta tarde — reserva con tiempo.",
      fr: "Playlists, micro ouvert et terrasse tardive — réservez tôt.",
      tr: "Çalma listeleri, açık mikrofon ve geç teras — masanı erken ayırt.",
      ru: "Плейлисты, открытый микрофон и терраса допоздна — бронируйте заранее.",
      ar: "قوائم تشغيل وميكروفون مفتوح وتراس حتى وقت متأخر — احجز مبكراً.",
    },
    time: "22:00",
    image: "/images/venue/hero.webp",
  },
  {
    id: "sunday-grill",
    weekday: {
      ro: "Duminică",
      en: "Sunday",
      it: "Domenica",
      es: "Domingo",
      fr: "Dimanche",
      tr: "Pazar",
      ru: "Воскресенье",
      ar: "الأحد",
    },
    title: {
      ro: "Grill pe terasă",
      en: "Terrace grill",
      it: "Grill in terrazza",
      es: "Parrilla en terraza",
      fr: "Grill en terrasse",
      tr: "Terasta ızgara",
      ru: "Гриль на террасе",
      ar: "مشاوي على التراس",
    },
    description: {
      ro: "Coaste, specialități Casa Ede și porții generoase la prânzul de duminică.",
      en: "Ribs, Casa Ede specials and generous Sunday portions.",
      it: "Costine, specialità Casa Ede e porzioni generose la domenica.",
      es: "Costillas, especiales Casa Ede y raciones generosas el domingo.",
      fr: "Travers, spécialités Casa Ede et portions généreuses le dimanche.",
      tr: "Kaburga, Casa Ede spesiyalleri ve bol pazar porsiyonları.",
      ru: "Рёбра, фирменные блюда Casa Ede и щедрые воскресные порции.",
      ar: "أضلاع وتخصصات Casa Ede وحصص وفيرة يوم الأحد.",
    },
    time: "13:00",
    image: "/images/venue/vibe-1.webp",
  },
];
