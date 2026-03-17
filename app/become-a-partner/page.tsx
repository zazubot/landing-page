import type { Metadata } from "next";

import { PartnerProgramHighlights, PageHero } from "@/components/site-sections";
import { TypebotEmbed } from "@/components/typebot-embed";

export const metadata: Metadata = {
  title: "Become a Partner",
  description:
    "Join the ZazuBot solutions provider program and grow revenue with AI automation, data governance, and customer experience delivery.",
};

export default function BecomePartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner program"
        title="Become a solution provider."
        description="Join our solutions provider program and grow revenue with ZazuBot content services, process automation, and data governance solutions."
      />

      <section className="bg-[#f5f8f7] py-20">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <PartnerProgramHighlights />
          <TypebotEmbed typebot="become-a-partner" height="860px" />
        </div>
      </section>
    </>
  );
}
