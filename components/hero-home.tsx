"use client";

import Image from "next/image";
import Avatar01 from "@/public/images/ai/ElevenLabs.jpeg";
import Avatar02 from "@/public/images/ai/mistral.jpg";
import Avatar03 from "@/public/images/ai/sheet.png";
import Avatar04 from "@/public/images/ai/openai.jpg";
import Avatar05 from "@/public/images/ai/whatsapp.png";
import Avatar06 from "@/public/images/ai/cal.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function HeroHome() {
  const [showModal, setShowModal] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Function to handle form submission
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | MouseEvent | HTMLButtonElement>
  ) => {
    e.preventDefault();
    setIsLoading(true);
    if (form.current) {
      // Use emailjs to send the form data
      emailjs
        .sendForm(
          "service_762lcihd",
          "template_q6n4qwu",
          form.current,
          "CqLOSwRxQRCVbGlNk"
        )
        .then(() => {
          alert("thanks for your interest, we will contact you soon");
          window.location.reload();
        })
        .catch((error) => {
          console.error("Email sending error:", error);
          alert("Failed to send email. Please try again later.");
        })
        .finally(() => setIsLoading(false));
    }
  };

  // Function to handle modal close

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
              <span data-aos-delay={150}> Help, support, and sell </span>
              <br className="max-lg:hidden " />
              <span className="text-green-800">
                with a data-driven AI Agent
              </span>
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
                  <button
                    className="btn w-full  bg-green-800 text-neutral-200 shadow-sm hover:bg-green-900 sm:ml-4 sm:w-auto"
                    onClick={() => setShowModal(true)}
                  >
                    Watch Demo Video
                  </button>

                  <a
                    className="btn w-full bg-white text-neutral-800 shadow-sm hover:bg-neutral-50 sm:ml-4 sm:w-auto"
                    href="https://docs.zazubot.com/"
                  >
                    <span className="relative inline-flex items-center">
                      Documentaions
                      <span className="ml-1 tracking-normal text-neutral-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* {add inter your bussiness email and signup button } */}{" "}
            <div className="mt-8">
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center sm:flex-row"
              >
                {/* {make the input much bigger} */}
                <input
                  type="text"
                  required
                  name="name"
                  defaultValue="ZazuBot"
                  id="name"
                  hidden
                />
                <input
                  type="email"
                  required
                  name="email"
                  id="email"
                  placeholder="Enter your business email"
                  className="w-full max-w-xl appearance-none rounded border-2 border-neutral-300 bg-white   text-2xl text-neutral-800 placeholder-neutral-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-200"
                  // style={{ minHeight: "4rem" }}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  onClick={(e) => handleSubmit(e)}
                  className="btn mt-4 w-full bg-green-800 text-neutral-200 shadow-sm hover:bg-green-900 sm:ml-4 sm:mt-0 sm:w-auto"
                >
                  Sign Up Free
                </button>
              </form>
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
