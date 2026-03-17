import type { Metadata } from "next";

import { PageHero } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Review how ZazuBot collects, uses, and protects information across the app and authentication flows.",
};

const sections = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "We collect personal information to provide and improve our services. When you sign in using your Google account, we may access basic profile information such as your name, email address, and profile picture, along with authentication data used to verify your identity.",
      "We do not collect or store sensitive personal data unless it is explicitly required in the course of using the app.",
    ],
    bullets: [
      "Basic profile information such as name, email address, and profile picture",
      "Authentication data used to verify your identity and secure account access",
    ],
  },
  {
    title: "2. Use of Information",
    paragraphs: [
      "We use the information we collect to provide and personalize the app, authenticate and manage login sessions, improve product performance, and communicate relevant updates or support messages.",
    ],
    bullets: [
      "Provide and personalize the features and functionality of the app",
      "Authenticate and manage your login session through Google Sign-In",
      "Improve services and app functionality",
      "Communicate regarding updates, support, or relevant information",
    ],
  },
  {
    title: "3. Data Storage and Retention",
    paragraphs: [
      "We store the information necessary to provide our services, including your Google account information where applicable. We retain your data as long as your account is active or as needed to provide services, fulfill legal obligations, resolve disputes, and enforce agreements.",
    ],
  },
  {
    title: "4. Third-Party Services",
    paragraphs: [
      "We use third-party services that may collect information used to identify you. When you use Google Sign-In, Google may collect personal data as described in its own privacy policy.",
      "We also rely on third-party infrastructure and tooling providers to operate the platform.",
    ],
    bullets: [
      "PlanetScale for database hosting in AWS eu-west-2 (London)",
      "AWS S3 in eu-west-3 (Paris) for file storage",
      "Cloudflare for DDoS protection and content delivery",
      "Sentry for error tracking and performance monitoring",
    ],
  },
  {
    title: "5. Cookies and Tracking Technologies",
    paragraphs: [
      "We use first-party cookies to remember your login session and improve your experience with the app. You can manage cookie settings in your browser, but disabling cookies may affect functionality.",
    ],
  },
  {
    title: "6. User Rights and Control",
    paragraphs: [
      "You have the right to access your data, update account information, and request account deletion by contacting us.",
    ],
    bullets: [
      "Access and update the information stored about you",
      "Request account deletion and permanent data removal",
    ],
  },
  {
    title: "7. Security",
    paragraphs: [
      "We implement appropriate security measures, including encryption and secure authentication methods, to protect your data.",
    ],
  },
  {
    title: "8. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this policy from time to time. When we do, we will post the updated version in the app and update the effective date.",
    ],
  },
  {
    title: "9. Contact Us",
    paragraphs: [
      "If you have questions about this privacy policy or our data practices, contact tech@sfgco.sa or visit zazubot.com.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        description="Last updated: 10 Mar 2025. This policy explains what data ZazuBot collects, why it is collected, and how it is protected."
      />

      <section className="bg-[#f5f8f7] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.06)] sm:p-10">
            <div className="space-y-10">
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
                  {section.bullets ? (
                    <ul className="list-disc space-y-2 pl-6 text-base leading-8 text-slate-600">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
