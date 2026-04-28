import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  AboutSections,
  CTASection,
  PageHero,
} from "@/components/site-sections";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why ZazuBot exists and how it helps businesses create more meaningful, data-driven conversations.",
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("about");

  return (
    <>
      <PageHero
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        description={t("heroDescription")}
      />
      <AboutSections />
      <CTASection />
    </>
  );
}
