import { localBusinessJsonLd } from "@/lib/json-ld";

export default function JsonLd() {
  const jsonLd = localBusinessJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
