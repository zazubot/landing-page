import Image from "next/image";
import { useTranslations } from "next-intl";

import { LanguageSwitcher } from "@/components/language-switcher";
import { Link } from "@/i18n/navigation";

const paymentProviders = [
  { name: "Visa", image: "/images/providers/Visa.png" },
  { name: "Mastercard", image: "/images/providers/Master.png" },
  { name: "Mada", image: "/images/providers/Mada.svg" },
  { name: "Apple Pay", image: "/images/providers/apple-pay.png" },
  { name: "Bank transfer", image: "/images/providers/bank_transfer.webp" },
];

export function SiteFooter() {
  const t = useTranslations("footer");

  const productLinks = [
    { href: "/features" as const, label: t("links.features") },
    { href: "/join" as const, label: t("links.bookDemo") },
    { href: "/pricing" as const, label: t("links.pricingPlans") },
  ];

  const companyLinks = [
    { href: "/about" as const, label: t("links.about") },
    { href: "/become-a-partner" as const, label: t("links.becomePartner") },
    { href: "/careers" as const, label: t("links.careers") },
  ];

  const resourceLinks = [
    { href: "/urgent-support" as const, label: t("links.urgentSupport") },
    { href: "/terms-of-service" as const, label: t("links.termsOfService") },
    { href: "/privacy-policy" as const, label: t("links.privacyPolicy") },
  ];

  return (
    <footer className="border-t border-slate-200 bg-[#0d1320] text-slate-200">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 py-6 sm:px-6 lg:justify-between lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            {t("paymentProviders")}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {paymentProviders.map((provider) => (
              <div
                key={provider.name}
                className="flex h-12 items-center rounded-2xl bg-white px-4"
              >
                <Image
                  src={provider.image}
                  alt={provider.name}
                  width={90}
                  height={32}
                  className="h-auto max-h-7 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_repeat(3,0.8fr)_0.9fr] lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="ZazuBot"
              width={46}
              height={46}
            />
            <div>
              <div className="font-[family-name:var(--font-display)] text-xl font-semibold">
                ZazuBot
              </div>
              <div className="text-sm text-slate-400">{t("tagline")}</div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 text-sm font-semibold text-white">
            {t("product")}
          </div>
          <div className="space-y-3">
            {productLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 text-sm font-semibold text-white">
            {t("company")}
          </div>
          <div className="space-y-3">
            {companyLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 text-sm font-semibold text-white">
            {t("resources")}
          </div>
          <div className="space-y-3">
            {resourceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-slate-400 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 text-sm font-semibold text-white">
            {t("certified")}
          </div>
          <div className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
            <Image
              src="/images/cert/maroof.svg"
              alt="Maroof"
              width={74}
              height={74}
              className="h-auto w-auto"
            />
            <Image
              src="/images/cert/saudibusiness.svg"
              alt="Saudi Business"
              width={74}
              height={74}
              className="h-auto w-auto"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-col gap-1 text-sm text-slate-400">
            <div>{t("copyright")}</div>
            <div>{t("builtFor")}</div>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
