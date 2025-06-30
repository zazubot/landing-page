import { Users, Target, Award, Heart, Briefcase } from "lucide-react";

export const metadata = {
  title: "About - ZazuBot",
  description:
    "we believe that meaningful conversations are the foundation of successful relationships",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-natural-to-r from-blue-600 to-green-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-green-900"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mt-6 text-xl text-green-100 max-w-3xl">
            we believe that meaningful conversations are the foundation of
            successful relationships. Every day, people chat with friends,
            family, and colleagues on platforms like WhatsApp, Messenger, and
            more. It’s natural, engaging, and personal.
          </p>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
              Our Purpose
            </h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Mission & Vision
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-md p-2">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="ml-3 text-xl font-medium text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600">
                We believe businesses should harness this same dynamic, because
                where people love to chat, conversions and customer loyalty
                soar.
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-md p-2">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="ml-3 text-xl font-medium text-gray-900">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600">
                Go beyond scripted, transactional responses, and enable
                businesses to craft lively, personalized conversations that
                truly reflect their brand’s voice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
              What We Believe
            </h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Supercharge your business with ZazuBot Intelligence.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              These principles guide everything we do
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-green-100 rounded-md p-3 inline-flex">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Messaging API
              </h3>
              <p className="mt-2 text-gray-600">
                Implement event-based messaging for sync and async communication
                Use cases live chat apps, chatbots, in-app messaging.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-green-100 rounded-md p-3 inline-flex">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Omnichannel APIs
              </h3>
              <p className="mt-2 text-gray-600">
                Funnel all channels into a single messaging experience Use cases
                all-in-one communication, messaging super-apps.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-green-100 rounded-md p-3 inline-flex">
                <Briefcase className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Website widget
              </h3>
              <p className="mt-2 text-gray-600">
                Monitor and interact with visitors via rich messages and apps
                Use cases custom chat, website analytics, lead capturing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-900">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Powered by </span>
          </h2>
          <div className="powered-by">
            <img
              src="/images/sfgco.png"
              alt="SFGCO Tech Logo"
              className="powered-by-logo"
            />
          </div>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://sfgco.sa/tech/chatbot"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50"
              >
                SFGCO.sa
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
