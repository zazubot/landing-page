"use client";

import FAQAccordion from "@/components/faq";
import React, { useState } from "react";

const PricingTable = () => {
  const [selectedPlan, setSelectedPlan] = useState("professional");
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      id: "Free",
      name: "Free",
      description: "Everything you need to get started",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        { name: "Unlimited ZazuBots", included: true },
        { name: "200 chats/months", included: true },
        { name: "Webhooks", included: true },
        { name: "Native integration", included: true },
        { name: "Branding removed", included: false },
        { name: "Collect files from users", included: false },
        { name: "Create folders", included: false },
        { name: "Direct priority support", included: false },
        { name: "WhatsApp integration", included: false },
        { name: "Custom domain", included: false },
        { name: "Priority support", included: false },
      ],
    },
    {
      id: "professional",
      name: "Professional",
      description: "Perfect for growing teams",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        { name: "Unlimited ZazuBots", included: true },
        {
          name: "2,000 chats/months / Extra chats: $10 per 500",
          included: true,
        },
        { name: "Webhooks", included: true },
        { name: "Native integration", included: true },
        { name: "Branding removed", included: true },
        { name: "Collect files from users", included: true },
        { name: "Create folders", included: true },
        { name: "Direct priority support", included: false },
        { name: "WhatsApp integration", included: false },
        { name: "Custom domain", included: false },
        { name: "Priority support", included: false },
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        { name: "Unlimited ZazuBots", included: true },
        { name: "10,000 chats/months", included: true },
        { name: "Webhooks", included: true },
        { name: "Native integration", included: true },
        { name: "Branding removed", included: true },
        { name: "Collect files from users", included: true },
        { name: "Create folders", included: true },
        { name: "Direct priority support", included: true },
        { name: "WhatsApp integration", included: true },
        { name: "Custom domain", included: true },
        { name: "Priority support", included: true },
      ],
    },
  ];

  const getDiscountPercentage = (monthly: number, yearly: number) => {
    const discount = ((monthly * 12 - yearly) / (monthly * 12)) * 100;
    return Math.round(discount);
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Flexible plans that scale with you
          </p>
          <p>
            Whether you're a solo business owner, a growing startup or a large
            company, Zazu Bot is here to help you build high-performing chat
            forms for the right price. <br /> Pay for as little or as much usage
            as you need.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mt-12 flex justify-center">
          <div className="relative bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                billingCycle === "monthly"
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                billingCycle === "yearly"
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
              <span className="ml-1 bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">
                {getDiscountPercentage(
                  plans[0].monthlyPrice,
                  plans[0].yearlyPrice
                )}
                % off
              </span>
            </button>
          </div>
        </div>

        {/* Plan Selection */}
        <div className="mt-12 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:max-w-4xl lg:mx-auto xl:max-w-none">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`border rounded-lg shadow-sm divide-y divide-gray-200 ${
                selectedPlan === plan.id
                  ? "border-orange-500 ring-2 ring-orange-500"
                  : "border-gray-200 hover:border-orange-300"
              }`}
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">
                    $
                    {billingCycle === "monthly"
                      ? plan.monthlyPrice
                      : plan.yearlyPrice}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /{billingCycle === "monthly" ? "mo" : "yr"}
                  </span>
                </p>
                <button
                  className={`mt-6 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${
                    selectedPlan === plan.id
                      ? "bg-orange-600 text-white hover:bg-orange-700"
                      : "bg-orange-50 text-orange-700 hover:bg-orange-100"
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {selectedPlan === plan.id ? "Current Plan" : "Select Plan"}
                </button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide">
                  What's included
                </h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex">
                      <span
                        className={`flex-shrink-0 ${
                          feature.included ? "text-green-500" : "text-gray-400"
                        }`}
                      >
                        {feature.included ? (
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
                        )}
                      </span>
                      <span
                        className={`ml-3 text-sm ${
                          feature.included ? "text-gray-700" : "text-gray-400"
                        }`}
                      >
                        {feature.name}
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
            Compare Features
          </h3>
          <div className="border rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Feature
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.id}
                      scope="col"
                      className={`px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ${
                        selectedPlan === plan.id
                          ? "text-orange-600"
                          : "text-gray-500"
                      }`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {plans[0].features.map((feature, featureIdx) => (
                  <tr
                    key={featureIdx}
                    className={featureIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {feature.name}
                    </td>
                    {plans.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center">
                        <span
                          className={
                            plan.features[featureIdx].included
                              ? "text-green-500"
                              : "text-gray-400"
                          }
                        >
                          {plan.features[featureIdx].included ? (
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
                          )}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700">
            Get started with {plans.find((p) => p.id === selectedPlan)?.name}
          </button>
        </div>
        <FAQAccordion />
      </div>
    </div>
  );
};

export default PricingTable;
