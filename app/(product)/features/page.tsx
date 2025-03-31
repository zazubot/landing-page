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

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-neutral-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Features for Modern AI Agents
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-gray-600 sm:text-2xl md:max-w-3xl">
              Everything you need to build intelligent chatbot at scale
            </p>
          </div>
        </div>
      </div>

      {/* Main Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-orange-600">
              Features
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our platform provides all the tools and capabilities required to
              build powerful AI-driven applications
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-orange-500 rounded-md p-3">
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
                        <ArrowRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span>Comprehensive documentation</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span>SDK support for multiple languages</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
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
                    <div className="flex-shrink-0 bg-orange-500 rounded-md p-3">
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
                        <ArrowRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span>Seamless provider switching</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span>Model-agnostic implementations</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
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
                    <div className="flex-shrink-0 bg-orange-500 rounded-md p-3">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                      Fast & Scalable
                    </h3>
                  </div>
                  <div className="mt-4 text-gray-500">
                    <p>
                      Built for performance with lightning-fast response times
                      and infinite scalability.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span>Global edge network</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span>Auto-scaling infrastructure</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span>99.99% uptime guarantee</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-orange-500 rounded-md p-3">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                      Enterprise Security
                    </h3>
                  </div>
                  <div className="mt-4 text-gray-500">
                    <p>
                      Industry-leading security and compliance standards to
                      protect your data.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span>SOC2 and GDPR compliant</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span>End-to-end encryption</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span>Customizable data retention</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-orange-500 rounded-md p-3">
                      <Database className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                      Advanced Analytics
                    </h3>
                  </div>
                  <div className="mt-4 text-gray-500">
                    <p>
                      Gain insights into your AI usage with comprehensive
                      analytics and reporting tools.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span>Usage dashboards</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span>Performance monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span>Custom report generation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-orange-500 rounded-md p-3">
                      <Settings className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                      Customization Options
                    </h3>
                  </div>
                  <div className="mt-4 text-gray-500">
                    <p>
                      Tailor the platform to your specific needs with extensive
                      customization options.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span>Fine-tuning capabilities</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span>Custom prompt templates</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                        <span>Workflow automation tools</span>
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
            <h2 className="text-base font-semibold tracking-wide uppercase text-orange-600">
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
                      <span className="text-orange-600 font-medium">
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
                      <span className="text-orange-600 font-medium">
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
                      <span className="text-orange-600 font-medium">
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
                      <span className="text-orange-600 font-medium">
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
          <p className="mt-4 text-lg leading-6 text-orange-200">
            Join thousands of developers building the next generation of
            AI-powered applications.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://app.zazubot.com/"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600"
              >
                Pricing table
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
