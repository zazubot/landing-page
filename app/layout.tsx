import "./css/style.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "ZAZUBOT",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/logo.png",
    // "og:image": "/yourMagicLinkBanner.png",
    // "twitter:image": "/yourMagicLinkBanner.png",
  },
  openGraph: {
    images: [
      {
        url: "/yourMagicLinkBanner.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  description:
    "A user-friendly platform that allows you to seamlessly design, deploy, and integrate advanced chatbots into websites and messaging platforms like WhatsApp, enhancing user engagement and automating communication.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-neutral-50 font-inter tracking-tight text-neutral-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
