"use client";

import React, { useState } from "react";
import { getTranslations } from "@/app/[locale]/i18n";

type FAQAccordionProps = {
  locale: "en" | "ar";
};

const FAQAccordion: React.FC<FAQAccordionProps> = ({ locale }) => {
  const t = getTranslations(locale);

  const faqs = t.landing.faq.questions;

  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-3xl mb-4 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {t.landing.faq.title}
        </h1>
        <p className="mt-4 text-xl text-gray-600">{t.landing.faq.subtitle}</p>
      </div>

      <div className="space-y-4">
        {faqs.map(
          (faq: { question: string; answer: string }, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-6 pb-4 text-base text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FAQAccordion;
