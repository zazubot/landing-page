import type { Metadata } from "next";

import {
  AboutSections,
  CTASection,
  PageHero,
} from "@/components/site-sections";
import { aboutContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why ZazuBot exists and how it helps businesses create more meaningful, data-driven conversations.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutContent.purposeTitle}
        title={aboutContent.heroTitle}
        description={aboutContent.heroText}
      />
      <AboutSections />
      <CTASection />
    </>
  );
}
