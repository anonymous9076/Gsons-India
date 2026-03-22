import Hero from "@/components/Hero";
import CategoryList from "@/components/CategoryList";
import FeaturesSection from "@/components/FeaturesSection";

import SustainabilitySection from "@/components/SustainabilitySection";
import PopularProductsSection from "@/components/PopularProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PresenceSection from "@/components/PresenceSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CategoryList />
      <FeaturesSection />
      <PresenceSection />
      <SustainabilitySection />
      <PopularProductsSection />
      <TestimonialsSection />
    </main>
  );
}
