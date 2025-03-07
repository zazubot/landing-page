import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-neutral-50"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-neutral-50"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-neutral-50"
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-neutral-50"
                  src={Avatar04}
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-neutral-50"
                  src={Avatar05}
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-neutral-50"
                  src={Avatar06}
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Hack the bot game
              <br className="max-lg:hidden" />
              Build faster, Chat smarter
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-neutral-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                ZazuBot is a platform that enables you to effortlessly create
                and integrate advanced chatbots into websites and chat platforms
                like WhatsApp..
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-orange-600 to-orange-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="https://app.zazubot.com/"
                  >
                    <span className="relative inline-flex items-center">
                      Go to dashboard
                      <span className="ml-1 tracking-normal text-orange-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-neutral-800 shadow-sm hover:bg-neutral-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
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
                  Hello! I'm sorry to hear that. I'd be happy to assist you with
                  your order. Could you please provide your order number?
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
                  It looks like you were charged an extra $5 for shipping, but
                  our website had a promotion for free shipping. I apologize for
                  the mistake. I'll issue a refund for that amount right away.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
