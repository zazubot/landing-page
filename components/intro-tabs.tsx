"use client";

import Image from "next/image";
import { useState } from "react";

import type { IntroTab } from "@/lib/site-content";

type IntroTabsProps = {
  readonly tabs: IntroTab[];
};

export function IntroTabs({ tabs }: IntroTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f1017] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
      <div className="grid gap-px bg-white/10 md:grid-cols-4">
        {tabs.map((tab, index) => {
          const isActive = index === activeTab;

          return (
            <button
              key={tab.label}
              className={[
                "px-5 py-4 text-left text-sm transition md:min-h-24",
                isActive
                  ? "bg-[#171922] text-white"
                  : "bg-[#10121a] text-slate-400 hover:bg-[#141722] hover:text-white",
              ].join(" ")}
              onClick={() => setActiveTab(index)}
              type="button"
            >
              <div className="mb-2 font-semibold">{tab.label}</div>
              <div className="text-xs leading-5 text-slate-400">
                {tab.description}
              </div>
            </button>
          );
        })}
      </div>

      <div className="grid gap-8 p-6 md:grid-cols-[1.25fr_0.9fr] md:p-8">
        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30">
          <Image
            src={tabs[activeTab].image}
            alt={tabs[activeTab].title}
            width={1280}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7fe5a6]">
            {tabs[activeTab].label}
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            {tabs[activeTab].title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
            {tabs[activeTab].description}
          </p>

          {tabs[activeTab].features ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {tabs[activeTab].features?.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-[#7fe5a6]/30 bg-[#7fe5a6]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[#b6f7cb]"
                >
                  {feature}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
