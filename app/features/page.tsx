import type { Metadata } from "next";

import {
  ComparisonTable,
  CTASection,
  FeatureCardsGrid,
  IntegrationsShowcase,
  PageHero,
} from "@/components/site-sections";
import { featurePageContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the ZazuBot feature set for AI providers, visual building, analytics, workflows, and customer service automation.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform features"
        title={featurePageContent.heroTitle}
        description={featurePageContent.heroSubtitle}
      />

      <div className="bg-[#f5f8f7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeatureCardsGrid />
        </div>
      </div>

      <IntegrationsShowcase />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Why choose us
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Compare with alternatives
            </h2>
          </div>
          <ComparisonTable />
        </div>
      </section>

      <CTASection />
    </>
  );
}
