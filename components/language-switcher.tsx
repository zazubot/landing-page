"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  en: "English",
  ar: "العربية",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("footer");

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next });
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
        {t("language")}
      </span>
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchLocale(loc)}
          className={[
            "rounded-full border px-3 py-1 text-sm transition",
            locale === loc
              ? "border-white/30 bg-white/10 font-semibold text-white"
              : "border-white/10 text-slate-400 hover:border-white/20 hover:text-white",
          ].join(" ")}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </div>
  );
}
