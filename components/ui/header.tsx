import Link from "next/link";
import Logo from "./logo";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  // Extract current locale from path (assumes /en/... or /ar/...)
  const pathParts = pathname.split("/");
  const currentLocale = pathParts[1] === "ar" ? "ar" : "en";
  const [locale, setLocale] = useState(currentLocale);

  useEffect(() => {
    // On mount, sync locale from localStorage if available
    const savedLocale =
      typeof window !== "undefined" ? localStorage.getItem("locale") : null;
    if (
      savedLocale &&
      (savedLocale === "en" || savedLocale === "ar") &&
      savedLocale !== locale
    ) {
      setLocale(savedLocale);
      // Replace locale in path and navigate
      const newPath = "/" + savedLocale + pathname.substring(3);
      router.replace(newPath);
    }
    // eslint-disable-next-line
  }, []);

  const handleSwitch = (newLocale: "en" | "ar") => {
    if (newLocale === locale) return;
    setLocale(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale);
    }
    // Replace locale in path and navigate
    const newPath = "/" + newLocale + pathname.substring(3);
    router.push(newPath);
  };

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-neutral-100),var(--color-neutral-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 mr-4">
            <button
              className={`px-2 py-1 rounded ${
                locale === "en"
                  ? "bg-green-800 text-white"
                  : "bg-white text-green-800 border border-green-800"
              }`}
              onClick={() => handleSwitch("en")}
              aria-label="Switch to English"
            >
              English
            </button>
            <button
              className={`px-2 py-1 rounded ${
                locale === "ar"
                  ? "bg-green-800 text-white"
                  : "bg-white text-green-800 border border-green-800"
              }`}
              onClick={() => handleSwitch("ar")}
              aria-label="Switch to Arabic"
            >
              العربية
            </button>
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="https://app.zazubot.com"
                className="btn-sm bg-green-800 text-neutral-200 shadow-sm hover:bg-green-900"
              >
                Start Now
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="btn-sm bg-white text-neutral-800 shadow-sm hover:bg-neutral-50"
              >
                Pricing table
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
