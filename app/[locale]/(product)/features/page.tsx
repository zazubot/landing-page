"use client";

import React from "react";
import {
  ArrowRight,
  Code,
  Zap,
  Shield,
  Layers,
  Database,
  Settings,
} from "lucide-react";
import BusinessCategories from "@/components/business-categories";
import { getTranslations } from "@/app/[locale]/i18n";

export default async function FeaturesPage({
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
      <div className="bg-gradient-to-br from-neutral-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              {t.features.hero.title}
            </h1>
            <p className="mb-8 mt-4 text-lg "> {t.features.hero.subtitle}</p>
          </div>
          <BusinessCategories />
        </div>
      </div>

      {/* Main Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                      {t.features.cards[0].title}
                    </h3>
                  </div>
                  <div className="mt-4 text-gray-500">
                    <p>{t.features.cards[0].desc}</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{t.features.cards[0].bullet1}</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{t.features.cards[0].bullet2}</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{t.features.cards[0].bullet3}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                      <Layers className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                      {t.features.cards[1].title}
                    </h3>
                  </div>
                  <div className="mt-4 text-gray-500">
                    <p>{t.features.cards[1].desc}</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{t.features.cards[1].bullet1}</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{t.features.cards[1].bullet2}</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{t.features.cards[1].bullet3}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                      {t.features.cards[2].title}
                    </h3>
                  </div>
                  <div className="mt-4 text-gray-500">
                    <p>{t.features.cards[2].desc}</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{t.features.cards[2].bullet1}</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{t.features.cards[2].bullet2}</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{t.features.cards[2].bullet3}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                      {t.features.cards[3].title}
                    </h3>
                  </div>
                  <div className="mt-4 text-gray-500">
                    <p>{t.features.cards[3].desc}</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{t.features.cards[3].bullet1}</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{t.features.cards[3].bullet2}</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{t.features.cards[3].bullet3}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                      <Database className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                      {t.features.cards[4].title}
                    </h3>
                  </div>
                  <div className="mt-4 text-gray-500">
                    <p>{t.features.cards[4].desc}</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{t.features.cards[4].bullet1}</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{t.features.cards[4].bullet2}</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{t.features.cards[4].bullet3}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                      <Settings className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                      {t.features.cards[5].title}
                    </h3>
                  </div>
                  <div className="mt-4 text-gray-500">
                    <p>{t.features.cards[5].desc}</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{t.features.cards[5].bullet1}</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{t.features.cards[5].bullet2}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-green-600">
              {t.features.comparison.title}
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t.features.comparison.subtitle}
            </p>
          </div>
          <div className="mt-12 overflow-hidden shadow rounded-lg">
            <div className="bg-white">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {t.features.comparison.colFeatures}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {t.features.comparison.colOurs}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {t.features.comparison.colCompetitors}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {t.features.comparison.row1.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-green-600 font-medium">
                        {t.features.comparison.row1.ours}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-red-600">
                        {t.features.comparison.row1.competitors}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {t.features.comparison.row2.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-green-600 font-medium">
                        {t.features.comparison.row2.ours}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-red-600">
                        {t.features.comparison.row2.competitors}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {t.features.comparison.row3.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-green-600 font-medium">
                        {t.features.comparison.row3.ours}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-red-600">
                        {t.features.comparison.row3.competitors}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {t.features.comparison.row4.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-green-600 font-medium">
                        {t.features.comparison.row4.ours}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-yellow-600">
                        {t.features.comparison.row4.competitors}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-neutral-900">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">{t.features.cta.line1}</span>
            <span className="block"> {t.features.cta.line2} </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
