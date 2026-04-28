import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FloatWidget } from "@/components/float-widget";
import { routing } from "@/i18n/routing";
import { siteName, siteUrl } from "@/lib/site-content";

import "@/app/globals.css";

const bodyFont = Noto_Kufi_Arabic({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const displayFont = Noto_Kufi_Arabic({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | AI Chatbot Software for Support, Sales, and Automation`,
    template: `%s | ${siteName}`,
  },
  description:
    "Design, deploy, and integrate advanced AI chatbots into websites and messaging platforms with ZazuBot.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteName} | AI Chatbot Software for Support, Sales, and Automation`,
    description:
      "Design, deploy, and integrate advanced AI chatbots into websites and messaging platforms with ZazuBot.",
    siteName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZazuBot landing page preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | AI Chatbot Software for Support, Sales, and Automation`,
    description:
      "Design, deploy, and integrate advanced AI chatbots into websites and messaging platforms with ZazuBot.",
    images: ["/og-image.png"],
  },
  manifest: "/site.webmanifest",
  robots: { index: true, follow: true },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} bg-background font-[family-name:var(--font-body)] text-foreground antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="relative min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f7faf9_100%)]">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
            <FloatWidget />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
