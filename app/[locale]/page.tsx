import { setRequestLocale } from "next-intl/server";

import {
  BenefitsSection,
  CTASection,
  FAQSection,
  HomeHero,
  IntegrationsShowcase,
  IntroSection,
  ListenToZazuBotSection,
  PricingSection,
  TestimonialsSection,
  UseCasesSection,
} from "@/components/site-sections";

export default async function HomePage({
  params,
}: {
  readonly params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HomeHero />
      <ListenToZazuBotSection />
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
