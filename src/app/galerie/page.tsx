import type { Metadata } from "next";
import AtmosphereSection from "@/components/sections/AtmosphereSection";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Galerie foto NO NAME by Casa Ede — locul, masa și atmosfera din București.",
};

export default function GalleryPage() {
  return <AtmosphereSection headingLevel="h1" />;
}
