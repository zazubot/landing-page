"use client";

import { getTranslations } from "@/app/[locale]/i18n";

export default async function CareersPage({
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
      <section className="bg-gradient-to-br from-gray-900 via-green-700 to-green-900 py-20">
        <div className="max-w-3xl mx-auto p-12 text-center">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            {t.careers.heroTitle}
          </h1>
          <p className="text-xl text-green-100 mb-8">{t.careers.heroText}</p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            {t.careers.whyTitle}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-600 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">
                {t.careers.why1Title}
              </h3>
              <p className="text-gray-600">{t.careers.why1Text}</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-600 text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2">
                {t.careers.why2Title}
              </h3>
              <p className="text-gray-600">{t.careers.why2Text}</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-600 text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">
                {t.careers.why3Title}
              </h3>
              <p className="text-gray-600">{t.careers.why3Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Email */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.careers.applyTitle}
          </h2>
          <p className="text-lg text-gray-700 mb-6">{t.careers.applyText}</p>
          <div className="inline-block bg-green-100 rounded-lg px-6 py-4">
            <span className="text-green-700 font-mono text-lg select-all">
              {t.careers.email}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
