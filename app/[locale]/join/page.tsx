import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/site-sections";
import { TypebotEmbed } from "@/components/typebot-embed";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a ZazuBot demo and see how the platform can automate support, sales, and operational workflows.",
};

export default async function JoinPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("join");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("heroTitle")}
        description={t("heroDescription")}
      />

      <section className="bg-[#f5f8f7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TypebotEmbed typebot="enterprise-lead-form" height="840px" />
        </div>
      </section>
    </>
  );
}
