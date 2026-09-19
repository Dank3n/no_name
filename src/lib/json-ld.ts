import { siteConfig } from "@/data/config";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export function localBusinessJsonLd() {
  const { brand, contact, google, description } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Restaurant"],
    name: `${brand.primary} ${brand.secondary}`,
    url: google.placeUrl,
    telephone: contact.phoneHref.replace("tel:", ""),
    priceRange: google.priceRange,
    servesCuisine: ["Romanian", "Grill"],
    acceptsReservations: "True",
    description: description.ro,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bulevardul Nicolae Grigorescu 1A",
      addressLocality: "București",
      postalCode: "030431",
      addressCountry: "RO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: google.lat,
      longitude: google.lng,
    },
    hasMap: google.placeUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(google.rating),
      reviewCount: String(google.reviewCount),
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...DAYS],
      opens: "12:00",
      closes: "04:00",
    },
    hasMenu: {
      "@type": "Menu",
      name: "Meniu NO NAME by Casa Ede",
      url: google.placeUrl,
    },
  };
}
