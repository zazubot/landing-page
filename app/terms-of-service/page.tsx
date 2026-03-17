import type { Metadata } from "next";

import { PageHero } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the ZazuBot terms governing account use, content ownership, privacy, security, and acceptable use.",
};

const sections = [
  {
    title: "Account terms",
    paragraphs: [
      "You are responsible for maintaining the security of your account and password. ZazuBot cannot and will not be liable for loss or damage resulting from failure to comply with this obligation.",
      "You are responsible for activity that occurs under your account, even when others have their own logins under that account.",
      "You may not use the service for illegal purposes or to violate laws in your jurisdiction. Accounts registered by bots or other automated methods are not permitted.",
    ],
  },
  {
    title: "Your content",
    paragraphs: [
      "You are solely responsible for any content and material submitted, published, transmitted, emailed, or displayed through the service. We claim no intellectual property rights over the material you provide. Your collected answers and associated data remain yours.",
      "You retain ownership of your chatbots and collected data. By using our service, you grant us the license to host and display your chatbots. You are responsible for ensuring compliance with privacy laws and for obtaining authorization to collect user data through your chatbots.",
      "ZazuBot prohibits fraudulent activity, phishing, sexual exploitation, intellectual property infringement, and unauthorized sharing of personal or confidential information. We reserve the right to suspend or terminate any account that violates these terms.",
    ],
  },
  {
    title: "Privacy and security of your data",
    paragraphs: [
      "We take measures to protect and secure your data through backups, redundancies, and encryption. We collect and store data as described in our privacy policy. You are responsible for your chatbots' privacy policies.",
      "Each party agrees to handle the other party's data in accordance with applicable laws and privacy and security measures reasonably adequate to preserve confidentiality and security.",
      "You own all right, title, and interest in your chatbot data. We do not sell your data to third parties and do not use behavioral insights to sell advertisements. When using ZazuBot, you control your workspace data.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of service"
        description="By using ZazuBot, you agree to the following terms and conditions. Please read them carefully."
      />

      <section className="bg-[#f5f8f7] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.06)] sm:p-10">
            <div className="space-y-10">
              <section className="space-y-4">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-slate-950">
                  Terms of Service for ZazuBot
                </h2>
                <p className="text-base leading-8 text-slate-600">
                  Welcome to ZazuBot. Violation of the terms below may result in
                  termination of your account. We do our best to deserve your
                  trust by staying transparent and keeping an open door to
                  feedback.
                </p>
              </section>

              {sections.map((section) => (
                <section key={section.title} className="space-y-4">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-slate-950">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-slate-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
