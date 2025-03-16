export const metadata = {
  title: "ZazuBot - Build faster, Chat smarter",
  description:
    "ZazuBot is a platform that enables you to effortlessly create and integrate advanced chatbots into websites and chat platforms like WhatsApp..",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Cta
          title="Marketing"
          content="Let your bot drive the conversation and turn leads into customers."
        />
        <Cta
          title="Support & Product"
          content="Deliver 24/7 multichannel support and make your customers happy."
        />
        <Cta
          title="Sales"
          content="Boost meetings and show rates with highly interested leads"
        />
      </div>
    </>
  );
}
