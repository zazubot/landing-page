import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/ai/ElevenLabs.jpeg";
import Avatar02 from "@/public/images/ai/mistral.jpg";
import Avatar03 from "@/public/images/ai/sheet.png";
import Avatar04 from "@/public/images/ai/openai.jpg";
import Avatar05 from "@/public/images/ai/zendesk.png";
import Avatar06 from "@/public/images/ai/cal.png";
import HeroTerminal from "./hero-terminal";

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
              <div className="-mx-0.5 flex justify-center space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-neutral-50"
                  src={Avatar01}
                  width={64}
                  height={64}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-neutral-50"
                  src={Avatar02}
                  width={64}
                  height={64}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-neutral-50"
                  src={Avatar03}
                  width={64}
                  height={64}
                  alt="Avatar 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-neutral-50"
                  src={Avatar04}
                  width={64}
                  height={64}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full   border-2 border-neutral-50"
                  src={Avatar05}
                  width={64}
                  height={64}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-neutral-50"
                  src={Avatar06}
                  width={64}
                  height={64}
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
                ZazuBot instantly helps your customers using AI-generated
                responses. Get 24/7 support and ultra-high satisfaction rates.
                Help, convert, and sell with a data-driven AI chatbot
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-neutral-600 to-neutral-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="https://docs.zazubot.com/"
                  >
                    <span className="relative inline-flex items-center">
                      Documentaions
                      <span className="ml-1 tracking-normal text-neutral-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-neutral-800 shadow-sm hover:bg-neutral-50 sm:ml-4 sm:w-auto"
                    href="/pricing"
                  >
                    <span className="relative inline-flex items-center">
                      Pricing table
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <HeroTerminal />
          {/* Hero image */}
        </div>
      </div>
    </section>
  );
}
