import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

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

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("pricing");

  return (
    <>
      <PageHero
        eyebrow={t("pageEyebrow")}
        title={t("pageTitle")}
        description={t("pageDescription")}
      />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
