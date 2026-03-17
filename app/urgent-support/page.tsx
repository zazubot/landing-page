import type { Metadata } from "next";

import { LocationsSection, PageHero } from "@/components/site-sections";
import { TypebotEmbed } from "@/components/typebot-embed";

export const metadata: Metadata = {
  title: "Urgent Support",
  description:
    "Submit an urgent ZazuBot support request and reach the team with the right operational context.",
};

export default function UrgentSupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Urgent support"
        title="Need immediate help?"
        description="Use the urgent support flow to send your issue directly to the team, then review our headquarters information below."
      />

      <section className="bg-[#f5f8f7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TypebotEmbed typebot="urgent-support" height="620px" />
        </div>
      </section>

      <LocationsSection />
    </>
  );
}
