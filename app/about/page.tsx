import Logo from "@/components/ui/logo";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-16">
        {/* Image Section */}

        {/* Text and CTA Section */}
        <div className="w-full lg:w-3/4 text-center lg:text-left">
          <Logo width={200} />

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            At <b>ZazuBot</b>, we believe that meaningful conversations are the
            foundation of successful relationships. Every day, people chat with
            friends, family, and colleagues on platforms like WhatsApp,
            Messenger, and more. It’s natural, engaging, and personal.
          </p>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            We believe businesses should harness this same dynamic, because
            where people love to chat, conversions and customer loyalty soar.
          </p>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            While most chatbots today are limited to basic customer support, we
            see them as powerful tools for creating dynamic, real-time
            interactions. Our vision is to go beyond scripted, transactional
            responses, and enable businesses to craft lively, personalized
            conversations that truly reflect their brand’s voice.
          </p>
        </div>
      </div>
    </div>
  );
}
