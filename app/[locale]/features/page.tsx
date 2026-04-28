import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  ComparisonTable,
  CTASection,
  FeatureCardsGrid,
  IntegrationsShowcase,
  PageHero,
} from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the ZazuBot feature set for AI providers, visual building, analytics, workflows, and customer service automation.",
};

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("features");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("pageTitle")}
        description={t("pageDescription")}
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
              {t("comparisonEyebrow")}
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {t("comparisonTitle")}
            </h2>
          </div>
          <ComparisonTable />
        </div>
      </section>

      <CTASection />
    </>
  );
}
