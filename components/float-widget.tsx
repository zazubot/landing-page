"use client";

import { useState } from "react";
import { MessageSquareText, Sparkles } from "lucide-react";

import { TypebotEmbed } from "@/components/typebot-embed";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function FloatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          size="lg"
          className="fixed bottom-5 right-5 z-40 h-auto min-h-14 rounded-[1.5rem] border border-slate-900/10 bg-slate-950 px-5 py-3 text-left text-white shadow-[0_24px_50px_rgba(15,23,42,0.28)] transition hover:bg-slate-900 sm:bottom-6 sm:right-6"
        >
          <MessageSquareText className="h-5 w-5 shrink-0" />
          <span className="flex flex-col items-start leading-none">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7fe5a6]">
              Live demo
            </span>
            <span className="mt-1 text-sm font-medium text-white">
              Chat with Zazu
            </span>
          </span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[min(100vw,28rem)] overflow-y-auto border-l border-slate-200 bg-[linear-gradient(180deg,#f9fbfc_0%,#eef4f2_100%)] p-0 sm:max-w-none"
      >
        <div className="flex min-h-full flex-col">
          <SheetHeader className="border-b border-slate-200 px-6 pb-5 pt-12 text-left sm:px-7">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700">
              <Sparkles className="h-4 w-4" />
              ZazuBot – Booking Flow Simulation
            </div>
            <SheetTitle className="max-w-xs font-[family-name:var(--font-display)] text-2xl tracking-tight text-slate-950">
              We are here to help you find the best solution for your use case.
            </SheetTitle>
            <SheetDescription className="max-w-sm text-sm leading-6 text-slate-600">
              Book a meeting to explore how ZazuBot can transform your customer
              interactions and drive business growth.
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 px-4 py-5 sm:px-5 sm:py-6">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
              <TypebotEmbed typebot="zazubot-book-meeting" height="440px" />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
