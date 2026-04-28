import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  CTASection,
  CareersSections,
  PageHero,
} from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the ZazuBot team and help build the future of AI-powered business communication.",
};

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("careers");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("heroTitle")}
        description={t("heroDescription")}
      />
      <CareersSections />
      <CTASection />
    </>
  );
}
