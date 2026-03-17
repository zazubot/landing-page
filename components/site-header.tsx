"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { primaryNav } from "@/lib/site-content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="ZazuBot">
          <Image src="/images/logo.png" alt="ZazuBot" width={44} height={44} />
          <div>
            <div className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-slate-950">
              ZazuBot
            </div>
            <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
              AI Conversations
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" asChild>
            <a
              href="https://docs.zazubot.com/"
              target="_blank"
              rel="noreferrer"
            >
              Docs
            </a>
          </Button>
          <Button
            asChild
            className="bg-slate-950 text-white hover:bg-slate-800"
          >
            <a href="https://app.zazubot.com" target="_blank" rel="noreferrer">
              Start now
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-900 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-3">
              <Button variant="outline" asChild>
                <a
                  href="https://docs.zazubot.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Docs
                </a>
              </Button>
              <Button
                asChild
                className="bg-slate-950 text-white hover:bg-slate-800"
              >
                <a
                  href="https://app.zazubot.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Start now
                </a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
