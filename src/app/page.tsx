import HeroSection from "@/components/sections/HeroSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import AtmosphereSection from "@/components/sections/AtmosphereSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import LocationPreview from "@/components/sections/LocationPreview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <AtmosphereSection />
      <ReviewsSection />
      <LocationPreview />
    </>
  );
}
