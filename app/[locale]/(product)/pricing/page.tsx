"use client";

import FAQAccordion from "@/components/faq";
import React, { useState } from "react";
import { getTranslations } from "@/app/[locale]/i18n";

// for Pay Links test
// const payMonth = "https://secure.clickpay.com.sa/payment/link/46699/242445";
// const payYear = "https://secure.clickpay.com.sa/payment/link/46699/242452";

// for production Live
const payMonth = "https://secure.clickpay.com.sa/payment/link/46742/242921";
const payYear = "https://secure.clickpay.com.sa/payment/link/46742/242905";

export default async function PricingTable({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const [selectedPlan, setSelectedPlan] = useState("free");
  const resolvedParams = await params;
  const locale = resolvedParams?.locale === "ar" ? "ar" : "en";
  const t = getTranslations(locale);

  // Map payment links to plans
  const paymentLinks = {
    Monthly: payMonth,
    Yearly: payYear,
    free: null,
  };

  // Use translated plans and inject payment links
  const plans = t.landing.pricing.plans.map((plan: any) => ({
    ...plan,
    payment: paymentLinks[plan.id as keyof typeof paymentLinks] || null,
  }));

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t.landing.pricing.heading}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t.landing.pricing.subheading}
          </p>
          <p>{t.landing.pricing.description}</p>
        </div>

        {/* Plan Selection */}
        <div className="mt-12 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:max-w-4xl lg:mx-auto xl:max-w-none">
          {plans.map((plan: any) => (
            <div
              key={plan.id}
              className={`border rounded-lg shadow-sm divide-y divide-gray-200 ${
                selectedPlan === plan.id
                  ? "border-green-500 ring-2 ring-green-500"
                  : "border-gray-200 hover:border-green-300"
              }`}
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    / {plan.duration}
                  </span>
                </p>
                <button
                  className={`mt-6 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${
                    selectedPlan === plan.id
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-green-50 text-green-700 hover:bg-green-100"
                  }`}
                  onClick={() => {
                    setSelectedPlan(plan.id);
                    if (plan.payment) {
                      window.location.replace(plan.payment);
                    }
                  }}
                >
                  {selectedPlan === plan.id
                    ? t.landing.pricing.button.checkout
                    : t.landing.pricing.button.select}
                </button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide">
                  {t.landing.pricing.included}
                </h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature: string, index: number) => (
                    <li key={index} className="flex">
                      <span
                        className={`flex-shrink-0 ${
                          // Included if this feature index is included in this plan (for free plan, first 4 are true, etc.)
                          plan.id === "free"
                            ? index < 4
                              ? "text-green-500"
                              : "text-gray-400"
                            : plan.id === "Monthly"
                            ? index < 7
                              ? "text-green-500"
                              : "text-gray-400"
                            : "text-green-500"
                        }`}
                      >
                        {plan.id === "free" ? (
                          index < 4 ? (
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )
                        ) : plan.id === "Monthly" ? (
                          index < 7 ? (
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )
                        ) : (
                          <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </span>
                      <span
                        className={`ml-3 text-sm ${
                          plan.id === "free"
                            ? index < 4
                              ? "text-gray-700"
                              : "text-gray-400"
                            : plan.id === "Monthly"
                            ? index < 7
                              ? "text-gray-700"
                              : "text-gray-400"
                            : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table (Mobile hidden, visible on larger screens) */}
        <div className="hidden lg:block mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
            {t.landing.pricing.compare}
          </h3>
          <div className="border rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t.landing.pricing.feature}
                  </th>
                  {plans.map((plan: any) => (
                    <th
                      key={plan.id}
                      scope="col"
                      className={`px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ${
                        selectedPlan === plan.id
                          ? "text-green-600"
                          : "text-gray-500"
                      }`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {plans[0].features.map(
                  (feature: string, featureIdx: number) => (
                    <tr
                      key={featureIdx}
                      className={
                        featureIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {feature}
                      </td>
                      {plans.map((plan: any) => (
                        <td key={plan.id} className="px-6 py-4 text-center">
                          <span
                            className={
                              plan.id === "free"
                                ? featureIdx < 4
                                  ? "text-green-500"
                                  : "text-gray-400"
                                : plan.id === "Monthly"
                                ? featureIdx < 7
                                  ? "text-green-500"
                                  : "text-gray-400"
                                : "text-green-500"
                            }
                          >
                            {plan.id === "free" ? (
                              featureIdx < 4 ? (
                                <svg
                                  className="h-5 w-5 mx-auto"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  className="h-5 w-5 mx-auto"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )
                            ) : plan.id === "Monthly" ? (
                              featureIdx < 7 ? (
                                <svg
                                  className="h-5 w-5 mx-auto"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  className="h-5 w-5 mx-auto"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )
                            ) : (
                              <svg
                                className="h-5 w-5 mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                          </span>
                        </td>
                      ))}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
            {t.landing.pricing.button.cta.replace(
              "{planName}",
              plans.find((p: any) => p.id === selectedPlan)?.name
            )}
          </button>
        </div>
        <FAQAccordion locale={locale} />
      </div>
    </div>
  );
}
