import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export const metadata: Metadata = {
  title: "Payment Successful",
  description: "Payment confirmation for ZazuBot checkout.",
};

export default async function PaymentSuccessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("paymentSuccess");

  return (
    <section className="bg-[#f5f8f7] py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-10 text-center shadow-[0_30px_60px_rgba(15,23,42,0.08)] sm:p-14">
          <CheckCircle2 className="mx-auto h-20 w-20 text-emerald-600" />
          <h1 className="mt-8 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-slate-950">
            {t("title")}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600">
            {t("description")}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="bg-slate-950 text-white hover:bg-slate-800"
            >
              <a
                href="https://app.zazubot.com"
                target="_blank"
                rel="noreferrer"
              >
                {t("goToDashboard")}
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/pricing">{t("backToPricing")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
