import type { Metadata } from "next";

import { PageHero } from "@/components/site-sections";
import { TypebotEmbed } from "@/components/typebot-embed";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a ZazuBot demo and see how the platform can automate support, sales, and operational workflows.",
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a demo"
        title="See ZazuBot working inside a real workflow."
        description="Tell us about your use case and the team will walk you through the right automation, channel, and rollout plan."
      />

      <section className="bg-[#f5f8f7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TypebotEmbed typebot="enterprise-lead-form" height="840px" />
        </div>
      </section>
    </>
  );
}
