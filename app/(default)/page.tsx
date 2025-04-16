export const metadata = {
  title: "ZazuBot - Build faster, Chat smarter",
  description:
    "Help, convert, and sell with a data-driven AI chatbot Flexible ways to build your all-in-one AI chatbot.",
};

import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import FAQAccordion from "@/components/faq";
import UseCases from "@/components/use-cases";
import HeroIntro from "@/components/hero-intro";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroIntro />
      <UseCases />
      <FeaturesPlanet />
      <LargeTestimonial />

      <FAQAccordion />
    </>
  );
}
