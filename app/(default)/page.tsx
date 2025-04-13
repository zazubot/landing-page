export const metadata = {
  title: "ZazuBot - Build faster, Chat smarter",
  description:
    "ZazuBot is a platform that enables you to effortlessly create and integrate advanced chatbots into websites and chat platforms like WhatsApp..",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import FAQAccordion from "@/components/faq";
import UseCases from "@/components/use-cases";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <UseCases />
      <FeaturesPlanet />
      <LargeTestimonial />

      <FAQAccordion />
    </>
  );
}
