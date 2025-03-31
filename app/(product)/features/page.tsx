"use client";

import FAQAccordion from "@/components/faq";
import React, { useState } from "react";

const Features = () => {
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
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Features
        </h2>
      </div>
    </div>
  );
};

export default Features;
