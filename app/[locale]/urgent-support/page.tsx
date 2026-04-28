import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { LocationsSection, PageHero } from "@/components/site-sections";
import { TypebotEmbed } from "@/components/typebot-embed";

export const metadata: Metadata = {
  title: "Urgent Support",
  description:
    "Submit an urgent ZazuBot support request and reach the team with the right operational context.",
};

export default async function UrgentSupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("urgentSupport");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("heroTitle")}
        description={t("heroDescription")}
      />

      <section className="bg-[#f5f8f7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TypebotEmbed typebot="urgent-support" height="620px" />
        </div>
      </section>

      <LocationsSection />
    </>
  );
}
