import { getTranslations } from "./i18n";

import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import FAQAccordion from "@/components/faq";
import UseCases from "@/components/use-cases";
import HeroIntro from "@/components/hero-intro";

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  return (
    <>
      <Hero locale={resolvedParams?.locale === "ar" ? "ar" : "en"} />
      <HeroIntro />
      <UseCases />
      <FeaturesPlanet />
      <LargeTestimonial />
      <FAQAccordion />
    </>
  );
}
