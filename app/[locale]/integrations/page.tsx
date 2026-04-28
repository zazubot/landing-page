import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  CTASection,
  IntegrationsShowcase,
  PageHero,
} from "@/components/site-sections";
import { integrationTiles, orbitLogos } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "See how ZazuBot connects AI providers, messaging apps, booking tools, and automation layers into one workflow.",
};

export default async function IntegrationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("integrations");

  return (
    <>
      <PageHero
        eyebrow={t("pageEyebrow")}
        title={t("pageTitle")}
        description={t("pageDescription")}
      />

      <IntegrationsShowcase />

      <section className="bg-[#f5f8f7] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              {t("ecosystemEyebrow")}
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {t("ecosystemTitle")}
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              {t("ecosystemDescription")}
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-4">
              {orbitLogos.map((logo) => (
                <div
                  key={logo}
                  className="flex items-center justify-center rounded-[1.5rem] border border-white bg-white p-4 shadow-sm"
                >
                  <Image
                    src={logo}
                    alt="Integration partner"
                    width={56}
                    height={56}
                    className="h-12 w-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.06)]">
            <div className="grid gap-4 sm:grid-cols-2">
              {integrationTiles.slice(0, 8).map((item) => (
                <div
                  key={item.name}
                  className="rounded-[1.5rem] border border-slate-200 bg-[#f8fbfa] p-4"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-xl object-cover"
                    />
                    <div className="text-sm font-semibold text-slate-950">
                      {item.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
