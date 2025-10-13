import Link from "next/link";
import Payments from "./Payments";
import LogoBySFGCO from "./logoBySFGCO";
import Maroof from "./maroof";
import Saudibusiness from "./saudibusiness";
import { usePathname } from "next/navigation";
import { getTranslations } from "@/app/[locale]/i18n";

export default function Footer({
  border = false,
}: {
  readonly border?: boolean;
}) {
  const pathname = usePathname();

  // Extract current locale from path (assumes /en/... or /ar/...)
  const pathParts = pathname.split("/");
  const currentLocale = pathParts[1] === "ar" ? "ar" : "en";
  const t = getTranslations(currentLocale);
  return (
    <footer>
      <Payments />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]"
              : ""
          }`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <LogoBySFGCO />
          </div>

          {/* 2nd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">{t.footer.product}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-neutral-600 transition hover:text-neutral-900"
                  href="/features"
                >
                  {t.footer.features}
                </Link>
              </li>
              <li>
                <Link
                  className="text-neutral-600 transition hover:text-neutral-900"
                  href="/join"
                >
                  {t.footer.bookDemo}
                </Link>
              </li>

              <li>
                <Link
                  className="text-neutral-600 transition hover:text-neutral-900"
                  href="/pricing"
                >
                  {t.footer.pricingPlans}
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">{t.footer.company}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-neutral-600 transition hover:text-neutral-900"
                  href="/about"
                >
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link
                  className="text-neutral-600 transition hover:text-neutral-900"
                  href="/become-a-partner"
                >
                  {t.footer.becomePartner}
                </Link>
              </li>
              <li>
                <Link
                  className="text-neutral-600 transition hover:text-neutral-900"
                  href="/careers"
                >
                  {t.footer.careers}
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">{t.footer.resources}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-neutral-600 transition hover:text-neutral-900"
                  href="/urgent-support"
                >
                  {t.footer.urgentSupport}
                </Link>
              </li>
              <li>
                <Link
                  className="text-neutral-600 transition hover:text-neutral-900"
                  href="/terms-of-service"
                >
                  {t.footer.termsOfService}
                </Link>
              </li>
              <li>
                <Link
                  className="text-neutral-600 transition hover:text-neutral-900"
                  href="/privacy-policy"
                >
                  {t.footer.privacyPolicy}
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">{t.footer.certified}</h3>
            <ul className="flex gap-5 items-center">
              <li>
                <Maroof />
              </li>
              <li>
                <Saudibusiness />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-linear-to-b before:from-neutral-200 before:to-neutral-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['ZazuBot'] after:absolute after:inset-0 after:bg-neutral-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['ZazuBot'] after:[text-shadow:0_1px_0_white]"></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-green-700 blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}
