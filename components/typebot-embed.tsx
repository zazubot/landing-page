"use client";

import dynamic from "next/dynamic";

const Standard = dynamic(
  async () => {
    const mod = await import("@typebot.io/nextjs");
    return mod.Standard;
  },
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[640px] items-center justify-center rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500">
        Loading embed...
      </div>
    ),
  },
);

type TypebotEmbedProps = {
  readonly typebot: string;
  readonly height?: string;
};

export function TypebotEmbed({ typebot, height = "720px" }: TypebotEmbedProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
      <Standard
        typebot={typebot}
        apiHost="https://hi.zazubot.com"
        style={{ width: "100%", height }}
      />
    </div>
  );
}
