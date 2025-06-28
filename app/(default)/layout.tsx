"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { getCalApi } from "@calcom/embed-react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

  return (
    <>
      <Header />

      <main className="grow">{children}</main>
      {/* Button to show modal */}

      <Footer border={true} />
    </>
  );
}
