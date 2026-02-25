import Hero from "@/components/Hero";
import CategoryList from "@/components/CategoryList";
import SustainabilitySection from "@/components/SustainabilitySection";
import PopularProductsSection from "@/components/PopularProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PresenceSection from "@/components/PresenceSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CategoryList />
      <PresenceSection />
      <SustainabilitySection />
      <PopularProductsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}
