import HeroSection from "@/components/sections/HeroSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import GalleryTeaserSection from "@/components/sections/GalleryTeaserSection";
import ReviewsCarousel from "@/components/sections/ReviewsCarousel";
import LocationPreview from "@/components/sections/LocationPreview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <GalleryTeaserSection />
      <ReviewsCarousel />
      <LocationPreview />
    </>
  );
}
