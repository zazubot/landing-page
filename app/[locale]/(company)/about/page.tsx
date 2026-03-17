"use client";

import LogoBySFGCO from "@/components/ui/logoBySFGCO";
import { Users, Target, Award, Heart, Briefcase } from "lucide-react";
import { getTranslations } from "@/app/[locale]/i18n";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale === "ar" ? "ar" : "en";
  const t = getTranslations(locale);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-natural-to-r from-blue-600 to-green-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-green-900"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.about.heroTitle}
          </h1>
          <p className="mt-6 text-xl text-green-100 max-w-3xl">
            {t.about.heroText}
          </p>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
              {t.about.purposeTitle}
            </h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t.about.missionVisionTitle}
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-md p-2">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="ml-3 text-xl font-medium text-gray-900">
                  {t.about.missionTitle}
                </h3>
              </div>
              <p className="text-gray-600">{t.about.missionText}</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-md p-2">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="ml-3 text-xl font-medium text-gray-900">
                  {t.about.visionTitle}
                </h3>
              </div>
              <p className="text-gray-600">{t.about.visionText}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="  mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <LogoBySFGCO />
        <p className="mt-4 max-w-3xl text-xl text-gray-500 mx-auto">
          {t.about.sfgcoInvestment}
        </p>
        <p className="mt-4 max-w-4xl text-xl text-gray-500 mx-auto">
          {t.about.sfgcoSupport}
        </p>
      </div>
      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
              {t.about.valuesTitle}
            </h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t.about.valuesSubtitle}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t.about.valuesDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-green-100 rounded-md p-3 inline-flex">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {t.about.value1Title}
              </h3>
              <p className="mt-2 text-gray-600">{t.about.value1Text}</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-green-100 rounded-md p-3 inline-flex">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {t.about.value2Title}
              </h3>
              <p className="mt-2 text-gray-600">{t.about.value2Text}</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-green-100 rounded-md p-3 inline-flex">
                <Briefcase className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {t.about.value3Title}
              </h3>
              <p className="mt-2 text-gray-600">{t.about.value3Text}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
    </div>
  );
}
