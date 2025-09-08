"use client";

import HeroLocations from "@/components/hero-locations";
import { Standard } from "@typebot.io/nextjs";

const UrgentSupport = () => {
  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Standard
          typebot="urgent-support"
          apiHost="https://hi.zazubot.com"
          style={{ width: "undefined", height: "60vh" }}
        />
      </div>
      <HeroLocations />
    </div>
  );
};

export default UrgentSupport;
