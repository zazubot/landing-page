import { getTranslations } from "@/app/[locale]/i18n";

type HeroTerminalProps = {
  locale: "en" | "ar";
};

export default function HeroTerminal({ locale }: HeroTerminalProps) {
  const t = getTranslations(locale);

  return (
    <div
      className="mx-auto max-w-3xl"
      data-aos="zoom-y-out"
      data-aos-delay={900}
    >
      <div className="relative aspect-video rounded-2xl bg-neutral-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
        <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-neutral-600)_4.5px,transparent_0)] after:w-[41px]">
          <span className="text-[13px] font-medium text-white">
            hi.zazubot.com/[BOT_ID]
          </span>
        </div>
        <div className="font-mono text-neutral-500 [&_span]:opacity-0">
          <span className="animate-[code-1_10s_infinite] text-neutral-200">
            {t.landing.heroTerminal.customer}
          </span>
          <span className="animate-[code-2_10s_infinite]">
            {t.landing.heroTerminal.customerMessage1}
          </span>
          <br />
          <span className="animate-[code-3_10s_infinite] text-neutral-200">
            {t.landing.heroTerminal.agent}
          </span>{" "}
          <span className="animate-[code-4_10s_infinite]">
            {t.landing.heroTerminal.agentMessage1}
          </span>
          <br />
          <br />
          <span className="animate-[code-5_10s_infinite] text-neutral-200">
            {t.landing.heroTerminal.customer}
          </span>
          <br />
          <span className="animate-[code-6_10s_infinite]">
            {t.landing.heroTerminal.customerMessage2}
          </span>
          <br />
          <br />
          <span className="animate-[code-7_10s_infinite] text-neutral-200">
            {t.landing.heroTerminal.agent2}
          </span>
          <br />
          <span className="animate-[code-8_10s_infinite]">
            {t.landing.heroTerminal.agentMessage2}
          </span>
          <br />
          <span className="animate-[code-9_10s_infinite]">
            {t.landing.heroTerminal.agentMessage3}
          </span>
        </div>
      </div>
    </div>
  );
}
