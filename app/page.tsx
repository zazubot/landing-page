import {
  BenefitsSection,
  CTASection,
  FAQSection,
  HomeHero,
  IntegrationsShowcase,
  IntroSection,
  PricingSection,
  TestimonialsSection,
  UseCasesSection,
} from "@/components/site-sections";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <IntroSection />
      <UseCasesSection />
      <IntegrationsShowcase />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
