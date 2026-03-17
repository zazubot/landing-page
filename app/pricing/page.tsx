import type { Metadata } from "next";

import {
  CTASection,
  FAQSection,
  PageHero,
  PricingSection,
} from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Compare ZazuBot pricing plans for testing, monthly deployment, and annual growth commitments.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing and plans"
        title="Flexible plans that scale with your business."
        description="Whether you are a solo operator, a growing startup, or an enterprise team, ZazuBot gives you a clear path from testing to production deployment."
      />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
