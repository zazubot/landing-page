"use client";

import { Standard } from "@typebot.io/nextjs";

const PricingTable = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Standard
          typebot="zazubot-customer-support"
          apiHost="https://hi.zazubot.com"
          style={{ width: "undefined", height: "100vh" }}
        />
      </div>
    </div>
  );
};

export default PricingTable;
