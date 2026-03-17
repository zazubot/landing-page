import type { Metadata } from "next";

import {
  CTASection,
  CareersSections,
  PageHero,
} from "@/components/site-sections";
import { careersContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the ZazuBot team and help build the future of AI-powered business communication.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={careersContent.heroTitle}
        description={careersContent.heroText}
      />
      <CareersSections />
      <CTASection />
    </>
  );
}
