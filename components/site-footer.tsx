import Image from "next/image";
import Link from "next/link";

import { footerColumns } from "@/lib/site-content";

const paymentProviders = [
  { name: "Visa", image: "/images/providers/Visa.png" },
  { name: "Mastercard", image: "/images/providers/Master.png" },
  { name: "Mada", image: "/images/providers/Mada.svg" },
  { name: "Apple Pay", image: "/images/providers/apple-pay.png" },
  { name: "Bank transfer", image: "/images/providers/bank_transfer.webp" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-[#0d1320] text-slate-200">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:justify-between">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Payment providers
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
              <div className="text-sm text-slate-400">
                Data-driven AI agents for support, sales, and automation.
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 text-sm font-semibold text-white">Product</div>
          <div className="space-y-3">
            {footerColumns.product.map((item) => (
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
          <div className="mb-4 text-sm font-semibold text-white">Company</div>
          <div className="space-y-3">
            {footerColumns.company.map((item) => (
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
          <div className="mb-4 text-sm font-semibold text-white">Resources</div>
          <div className="space-y-3">
            {footerColumns.resources.map((item) => (
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
          <div className="mb-4 text-sm font-semibold text-white">Certified</div>
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
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>© 2026 ZazuBot. All rights reserved.</div>
          <div>
            Built for high-conviction support, sales, and automation teams.
          </div>
        </div>
      </div>
    </footer>
  );
}
