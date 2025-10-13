import { getTranslations } from "./i18n";

import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import FAQAccordion from "@/components/faq";
import UseCases from "@/components/use-cases";
import HeroIntro from "@/components/hero-intro";

export default async function LocaleHome({
  params = { locale: "en" },
}: {
  params?: { locale: "en" | "ar" };
}) {
  return (
    <>
      <Hero locale={params?.locale} />
      <HeroIntro />
      <UseCases />
      <FeaturesPlanet />
      <LargeTestimonial />
      <FAQAccordion />
    </>
  );
}
