"use client";
import Image from "next/image";
import Avatar01 from "@/public/images/ai/ElevenLabs.jpeg";
import Avatar02 from "@/public/images/ai/mistral.jpg";
import Avatar03 from "@/public/images/ai/sheet.png";
import Avatar04 from "@/public/images/ai/openai.jpg";
import Avatar05 from "@/public/images/ai/whatsapp.png";
import Avatar06 from "@/public/images/ai/cal.png";
import { useState } from "react";
import { getTranslations } from "@/app/[locale]/i18n";

export default function HeroHome({ locale }: { locale: "en" | "ar" }) {
  const t = getTranslations(locale);
  const [showModal, setShowModal] = useState(false);

  return (
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
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
            >
              <span data-aos-delay={150}>
                {" "}
                {t.landing.hero.title1}
                {/* Help, support, and sell{" "} */}
              </span>
              <br className="max-lg:hidden " />
              <span className="text-green-800">{t.landing.hero.title2}</span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-neutral-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                {t.landing.hero.description}
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center "
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn w-full m-2 bg-green-800 text-neutral-200 shadow-sm hover:bg-green-900 sm:ml-4 sm:w-auto"
                    href="https://app.zazubot.com"
                  >
                    <span className="relative inline-flex items-center">
                      {t.header.startNow}
                    </span>
                  </a>
                  <button
                    className="btn w-full m-2 bg-white text-neutral-800 shadow-sm hover:bg-neutral-50 sm:ml-4 sm:w-auto"
                    onClick={() => setShowModal(true)}
                  >
                    {t.header.watchDemo}
                  </button>

                  <a
                    className="btn w-full m-2 bg-black text-neutral-50 shadow-sm hover:bg-neutral-800 sm:ml-4 sm:w-auto"
                    href="/pricing"
                  >
                    <span className="relative inline-flex items-center">
                      {t.header.pricing}
                    </span>
                  </a>
                  <a
                    className="btn w-full m-2 bg-white text-neutral-800 shadow-sm hover:bg-neutral-50 sm:ml-4 sm:w-auto"
                    href="https://docs.zazubot.com/"
                  >
                    <span className="relative inline-flex items-center">
                      {t.header.documentations}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
              <div className="bg-white rounded-lg shadow-lg p-4 max-w-xl w-full relative">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <iframe
                    width="100%"
                    height="415"
                    src="https://www.youtube.com/embed/gv8KYqrUSgA?si=RWtB4rsshXcBSGds"
                    title="Zazubot Build faster, Chat smarter"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}
          {/* Hero image */}
        </div>
      </div>
    </section>
  );
}
