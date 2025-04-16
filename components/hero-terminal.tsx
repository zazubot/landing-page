export default function HeroTerminal() {
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
            Customer:
          </span>
          <span className="animate-[code-2_10s_infinite]">
            Hi, I need help with my recent order. I think I was charged
            incorrectly.
          </span>
          <br />
          <span className="animate-[code-3_10s_infinite] text-neutral-200">
            Zazubot Support Agent:
          </span>{" "}
          <span className="animate-[code-4_10s_infinite]">
            Hello! I'm sorry to hear that. I'd be happy to assist you with your
            order. Could you please provide your order number?
          </span>
          <br />
          <br />
          <span className="animate-[code-5_10s_infinite] text-neutral-200">
            Customer:
          </span>
          <br />
          <span className="animate-[code-6_10s_infinite]">
            Sure! My order number is 123456.
          </span>
          <br />
          <br />
          <span className="animate-[code-7_10s_infinite] text-neutral-200">
            Support Agent:
          </span>
          <br />
          <span className="animate-[code-8_10s_infinite]">
            Thank you! Let me check that for you. One moment, please.
          </span>
          <br />
          <span className="animate-[code-9_10s_infinite]">
            It looks like you were charged an extra $5 for shipping, but our
            website had a promotion for free shipping. I apologize for the
            mistake. I'll issue a refund for that amount right away.
          </span>
        </div>
      </div>
    </div>
  );
}
