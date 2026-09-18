import type { Metadata } from "next";
import MenuSection from "@/components/sections/MenuSection";

export const metadata: Metadata = {
  title: "Meniu",
  description:
    "Meniul de mâncare și băuturi NO NAME by Casa Ede — carte interactivă cu ingrediente și valori nutriționale.",
};

export default function MenuPage() {
  return <MenuSection />;
}
