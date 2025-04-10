import { Standard } from "@typebot.io/nextjs";

export const metadata = {
  title: "become-a-partner - ZazuBot",
};

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-neutral-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Become a solution provider
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-gray-600 sm:text-2xl md:max-w-3xl">
              Join our Solutions Provider Program now and boost your business
              revenue with zazubot Content Services, Process Automation, and
              Data Governance solutions.
            </p>
          </div>
        </div>
      </div>
      <Standard
        typebot="become-a-partner"
        apiHost="https://hi.zazubot.com"
        style={{ width: "undefined", height: "100vh" }}
      />
      {/* CTA Section */}
      <div className="bg-neutral-900">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block">Try our platform today.</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
