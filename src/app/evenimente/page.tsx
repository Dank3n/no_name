import type { Metadata } from "next";
import EventsSection from "@/components/sections/EventsSection";

export const metadata: Metadata = {
  title: "Evenimente",
  description:
    "Evenimente speciale și meniuri tematice la NO NAME by Casa Ede din București.",
};

export default function EventsPage() {
  return <EventsSection />;
}
