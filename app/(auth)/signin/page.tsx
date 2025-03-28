export const metadata = {
  title: "Sign In - ZazuBot",
  description: "Page description",
};

import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <>
        <div className="w-full  text-center lg:text-left">
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
        {/* Bottom link */}
      </>
    </>
  );
}
