import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Adresă, program și rezervări la NO NAME by Casa Ede, Bulevardul Nicolae Grigorescu 1A, București.",
};

export default function ContactPage() {
  return <ContactSection />;
}
