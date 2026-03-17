"use client";

import Avatar01 from "@/public/images/ai/ElevenLabs.jpeg";
import Avatar02 from "@/public/images/ai/mistral.jpg";
import Avatar03 from "@/public/images/ai/sheet.png";
import Avatar04 from "@/public/images/ai/openai.jpg";
import Avatar05 from "@/public/images/ai/whatsapp.png";
import Avatar06 from "@/public/images/ai/cal.png";
import { getTranslations } from "@/app/[locale]/i18n";
import Image from "next/image";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale === "ar" ? "ar" : "en";
  const t = getTranslations(locale);

  return (
    <div className="bg-white">
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-32 md:pt-40">
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
                className="mb-8 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
                data-aos="zoom-y-out"
              >
                <span data-aos-delay={250}> {t.landing.hero.title1} </span>
                <br className="max-lg:hidden" />
                <span className="text-green-800">{t.landing.hero.title2}</span>
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-lg text-neutral-700"
                  data-aos="zoom-y-out"
                  data-aos-delay={500}
                >
                  {t.landing.hero.description}
                </p>
              </div>
            </div>

            {/* Hero image */}
          </div>
        </div>
      </section>
    </div>
  );
}
