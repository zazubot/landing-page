"use client";
import React, { useState } from "react";
import { Play, Info, Heart, ExternalLink, Rss } from "lucide-react";
import { getTranslations } from "@/app/[locale]/i18n";

type HeroIntroProps = {
  locale: "en" | "ar";
};

const tabIcons = [Info, Rss, Heart, ExternalLink];
const tabMedia = [
  { mediaType: "image", mediaUrl: "/images/intro/flow-1.png" },
  { mediaType: "video", mediaUrl: "/images/intro/multiple-channels.png" },
  { mediaType: "image", mediaUrl: "/images/intro/template.png" },
  { mediaType: "image", mediaUrl: "/images/intro/branding.png" },
];

const HeroIntro: React.FC<HeroIntroProps> = ({ locale }) => {
  const t = getTranslations(locale);
  const tabs = t.landing.heroIntro.tabs.map((tab: any, idx: number) => ({
    ...tab,
    icon: tabIcons[idx],
    mediaType: tabMedia[idx].mediaType,
    mediaUrl: tabMedia[idx].mediaUrl,
  }));

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          return (
            <button
              key={index}
              className={`
                flex-1 flex items-center justify-center gap-2 py-4 px-2 transition-all
                ${
                  activeTab === index
                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }
              `}
              onClick={() => setActiveTab(index)}
            >
              <Icon className="h-4 w-4" />
              <span className="font-medium text-sm">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`
              transition-all duration-300 
              ${activeTab === index ? "block" : "hidden"}
            `}
          >
            <div className="flex flex-col md:flex-row">
              {/* Media Section */}
              <div className="md:w-3/5 bg-gray-100">
                {tab.mediaType === "image" ? (
                  <img
                    src={tab.mediaUrl}
                    alt={tab.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-64 md:h-full bg-gray-900 flex items-center justify-center">
                    <img
                      src={tab.mediaUrl}
                      alt={tab.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="md:w-2/5 p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {tab.title}
                </h3>
                <p className="text-gray-600 mb-6">{tab.description}</p>
                {tab.features && Array.isArray(tab.features) && (
                  <div className="space-y-3">
                    {tab.features.map((feature: string, i: number) => (
                      <div key={i} className="flex items-center">
                        <div className="h-2 w-2 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroIntro;
