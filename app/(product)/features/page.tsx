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
import FAQAccordion from "@/components/faq";
import BusinessCategories from "@/components/business-categories";

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-neutral-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Enabling end-to-end customer service automation
            </h1>
            <p className="mb-8 mt-4 text-lg ">
              Learn about ZazuBot benefits that’ll make your business stand out.
              Automate your support, marketing, and sales with AI.
            </p>
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
                      Easy-to-use APIs
                    </h3>
                  </div>
                  <div className="mt-4 text-gray-500">
                    <p>
                      Simple, intuitive APIs that streamline development and
                      reduce implementation time from weeks to days.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Comprehensive documentation</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>SDK support for multiple platform</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Consistent request/response patterns</span>
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
                      Multiple AI Providers
                    </h3>
                  </div>
                  <div className="mt-4 text-gray-500">
                    <p>
                      Access the best AI models from various providers through a
                      single, unified interface.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Seamless provider switching</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Model-agnostic implementations</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Comparative analytics across providers</span>
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
                      Visual Builder
                    </h3>
                  </div>
                  <div className="mt-4 text-gray-500">
                    <p>
                      Preview and modify your chatbot in an intuitive visual
                      editor.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Testing tool</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Flows</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Easily test before you launch</span>
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
                      Templates
                    </h3>
                  </div>
                  <div className="mt-4 text-gray-500">
                    <p>
                      Choose a ready-to-use template from the library for an
                      easier start.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Customer Service</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Customer Satisfaction</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Ecommerce - sales</span>
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
                      Data collection and workflows
                    </h3>
                  </div>
                  <div className="mt-4 text-gray-500">
                    <p>
                      Collect user information ,Create questions, forms, and
                      surveys,Group users and direct them to different chatbot
                      flows or export contact information.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>A/B Testing</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Webhooks</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Zapier actions</span>
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
                      Reports
                    </h3>
                  </div>
                  <div className="mt-4 text-gray-500">
                    <p>
                      Follow insights on the number of chats and users, and
                      track the busiest periods.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Trends in chats and users</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>Most popular interactions</span>
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
              Why Choose Us
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Compare with Alternatives
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
                      Features
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Our Platform
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Competitors
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Multiple AI Providers
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-green-600 font-medium">
                        ✓ 10+ providers integrated
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-red-600">
                        ✗ Limited to 1-2 providers
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      API Simplicity
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-green-600 font-medium">
                        ✓ Simple, consistent APIs
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-red-600">
                        ✗ Complex implementation
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Global Infrastructure
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-green-600 font-medium">
                        ✓ 20+ global regions
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-red-600">
                        ✗ Limited regional availability
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Enterprise Security
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-green-600 font-medium">
                        ✓ Comprehensive compliance
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="text-yellow-600">
                        ~ Partial compliance
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
            <span className="block">Ready to get started?</span>
            <span className="block">Try our platform today.</span>
          </h2>
        </div>
      </div>
      <FAQAccordion />
    </div>
  );
}
