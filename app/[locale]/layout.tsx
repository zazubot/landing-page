"use client";

import { ReactNode, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { getCalApi } from "@calcom/embed-react";
import { notFound } from "next/navigation";

// Supported locales
const SUPPORTED_LOCALES = ["en", "ar"] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as Locale;

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "zazubot" });
      cal("floatingButton", {
        calLink: "ahmedkhaled4d/zazubot",
        config: { layout: "month_view" },
        buttonText: "Book a Free Consultation",
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  if (!SUPPORTED_LOCALES.includes(locale)) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="grow">{children}</main>

      <Footer border={true} />
    </>
  );
}
