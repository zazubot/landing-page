import { setRequestLocale } from "next-intl/server";

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

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

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
