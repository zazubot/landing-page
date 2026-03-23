import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FloatWidget } from "@/components/float-widget";
import { siteName, siteUrl } from "@/lib/site-content";

import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
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
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} bg-background font-[family-name:var(--font-body)] text-foreground antialiased`}
      >
        <div className="relative min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f7faf9_100%)]">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <FloatWidget />
        </div>
      </body>
    </html>
  );
}
