import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Globe,
  GraduationCap,
  HeartHandshake,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

import { IntroTabs } from "@/components/intro-tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  aboutContent,
  aiAvatars,
  benefitArticles,
  careersContent,
  faqItems,
  featurePageContent,
  heroContent,
  integrationTiles,
  introTabs,
  locations,
  orbitLogos,
  pricingPlans,
  testimonials,
  useCases,
} from "@/lib/site-content";

const featureIcons = [
  Workflow,
  Sparkles,
  Zap,
  ShieldCheck,
  Globe,
  MessageSquareText,
];
const aboutIcons = [Sparkles, Globe, Workflow];
const careerIcons = [Zap, GraduationCap, HeartHandshake];

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(127,229,166,0.24),_transparent_28%),linear-gradient(180deg,#f9fbfc_0%,#eef4f2_100%)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Badge
          variant="secondary"
          className="rounded-full bg-slate-950 px-4 py-1 text-white"
        >
          {eyebrow}
        </Badge>
        <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      </div>
    </section>
  );
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#090b12] text-white">
      <div className="absolute inset-0 motion-safe:animate-hero-glow bg-[radial-gradient(circle_at_top_left,_rgba(127,229,166,0.16),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(252,211,77,0.15),_transparent_24%)]" />
      <div className="absolute left-[-8rem] top-16 h-64 w-64 rounded-full bg-[#7fe5a6]/12 blur-3xl motion-safe:animate-hero-glow" />
      <div className="absolute bottom-[-6rem] right-[-2rem] h-72 w-72 rounded-full bg-amber-300/10 blur-3xl motion-safe:animate-hero-glow [animation-delay:1.8s]" />
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div className="relative z-10">
          <div className="mb-8 flex flex-wrap gap-3 motion-safe:animate-hero-fade-in">
            {aiAvatars.map((image, index) => (
              <Image
                key={image}
                src={image}
                alt={`AI provider ${index + 1}`}
                width={64}
                height={64}
                className="h-14 w-14 rounded-full border-2 border-white/15 object-cover shadow-[0_18px_28px_rgba(0,0,0,0.35)] motion-safe:opacity-0 motion-safe:animate-hero-fade-up"
                style={{ animationDelay: `${index * 120}ms` }}
              />
            ))}
          </div>

          <h1 className="max-w-4xl text-pretty font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.96] tracking-tight motion-safe:animate-hero-fade-up sm:text-6xl lg:text-7xl">
            {heroContent.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 motion-safe:opacity-0 motion-safe:animate-hero-fade-up [animation-delay:140ms]">
            {heroContent.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 motion-safe:opacity-0 motion-safe:animate-hero-fade-up sm:flex-row sm:flex-wrap [animation-delay:260ms]">
            <Button
              asChild
              size="lg"
              className="bg-[#7fe5a6] text-slate-950 hover:bg-[#6cd491]"
            >
              <a href={heroContent.appUrl} target="_blank" rel="noreferrer">
                {heroContent.startNowLabel}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <a href={heroContent.demoUrl} target="_blank" rel="noreferrer">
                {heroContent.watchDemoLabel}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/15 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/pricing">{heroContent.pricingLabel}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-slate-200 hover:bg-white/10 hover:text-white"
            >
              <a href={heroContent.docsUrl} target="_blank" rel="noreferrer">
                {heroContent.docsLabel}
              </a>
            </Button>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <div className="relative w-full max-w-xl motion-safe:opacity-0 motion-safe:animate-hero-fade-up [animation-delay:220ms]">
            <div className="absolute inset-6 rounded-[2rem] bg-[#7fe5a6]/10 blur-3xl motion-safe:animate-hero-glow [animation-delay:900ms]" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_40px_100px_rgba(0,0,0,0.45)] backdrop-blur motion-safe:animate-hero-float">
              <div className="absolute -left-6 top-8 rounded-[1.5rem] border border-white/10 bg-[#101522] px-4 py-3 text-xs uppercase tracking-[0.22em] text-[#7fe5a6] shadow-lg motion-safe:animate-hero-fade-up [animation-delay:360ms]">
                Your magic link
              </div>
              <div className="absolute -right-4 bottom-8 rounded-[1.5rem] border border-white/10 bg-[#141925] px-4 py-3 text-sm text-slate-300 shadow-lg motion-safe:animate-hero-fade-up [animation-delay:520ms]">
                AI support online 24/7
              </div>
              <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0e1118]">
                <Image
                  src="/images/intro/flow-1.png"
                  alt="ZazuBot workflow builder"
                  width={1280}
                  height={900}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IntroSection() {
  return (
    <section className="bg-[#090b12] px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7fe5a6]">
            Product walkthrough
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Design, publish, and automate every customer touchpoint from one
            workspace.
          </h2>
        </div>
        <IntroTabs tabs={introTabs} />
      </div>
    </section>
  );
}

export function UseCasesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Core outcomes
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Use the power of AI chatbots and get ahead of 99% of your
            competitors.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {useCases.map((item, index) => (
            <Card
              key={item.title}
              className="overflow-hidden rounded-[2rem] border-slate-200 shadow-none"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  {index + 1}
                </div>
                <CardTitle className="text-2xl text-slate-950">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section className="bg-[#f5f8f7] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Why teams switch
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Make automation feel native to your business, not bolted on.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600">
            ZazuBot combines AI providers, channel orchestration, workflow
            logic, and branded delivery into one operating layer.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefitArticles.map((article, index) => {
            const Icon = featureIcons[index];

            return (
              <Card
                key={article.title}
                className="rounded-[1.75rem] border-white bg-white shadow-[0_20px_45px_rgba(15,23,42,0.06)]"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl text-slate-950">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-slate-600">
                    {article.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function IntegrationsShowcase() {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Integrations and channels
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Connect AI providers, messaging apps, scheduling, and automation
            tools in one place.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            Reuse the same ZazuBot logic across lead capture, support, order
            tracking, and appointment booking. Connect your workflows without
            rebuilding the conversation layer each time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {orbitLogos.slice(0, 5).map((image) => (
              <div
                key={image}
                className="rounded-full border border-slate-200 bg-white p-3 shadow-sm"
              >
                <Image
                  src={image}
                  alt="Integration"
                  width={48}
                  height={48}
                  className="h-10 w-10 object-contain"
                />
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button
              asChild
              className="bg-slate-950 text-white hover:bg-slate-800"
            >
              <Link href="/integrations">
                Explore integrations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-[#f8fbfa] p-5 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
          <div className="grid gap-4 sm:grid-cols-2">
            {integrationTiles.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-4 rounded-[1.5rem] border border-white bg-white px-4 py-4 shadow-sm"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={52}
                  height={52}
                  className="h-12 w-12 rounded-xl object-cover"
                />
                <div className="text-sm font-semibold text-slate-900">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-[#0d1320] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7fe5a6]">
            Customer proof
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
            What our clients are saying
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Do not just take our word for it. Teams across support, sales, and
            education are already shipping conversations on ZazuBot.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="rounded-[1.75rem] border-white/10 bg-white/5 text-white shadow-none"
            >
              <CardContent className="p-6">
                <div className="mb-6 text-sm leading-7 text-slate-200">
                  &ldquo;{testimonial.quote}&rdquo;
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">
                      {testimonial.role}
                      {testimonial.company ? `, ${testimonial.company}` : ""}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Pricing and plans
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Choose your plan
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Flexible plans that scale with your team, traffic, and automation
            needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={[
                "rounded-[2rem] border-slate-200 shadow-none",
                plan.featured
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "bg-[#f8fbfa]",
              ].join(" ")}
            >
              <CardHeader>
                {plan.featured ? (
                  <Badge className="w-fit rounded-full bg-white text-slate-950">
                    Most popular
                  </Badge>
                ) : null}
                <CardTitle
                  className={plan.featured ? "text-white" : "text-slate-950"}
                >
                  {plan.name}
                </CardTitle>
                <div
                  className={
                    plan.featured ? "text-slate-300" : "text-slate-600"
                  }
                >
                  {plan.description}
                </div>
                <div className="pt-3">
                  <span className="font-[family-name:var(--font-display)] text-5xl font-semibold">
                    ${plan.price}
                  </span>
                  <span
                    className={
                      plan.featured ? "text-slate-300" : "text-slate-600"
                    }
                  >
                    {" "}
                    / {plan.duration}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6"
                    >
                      <Check
                        className={
                          plan.featured
                            ? "mt-0.5 h-4 w-4 text-[#7fe5a6]"
                            : "mt-0.5 h-4 w-4 text-emerald-700"
                        }
                      />
                      <span
                        className={
                          plan.featured ? "text-slate-200" : "text-slate-700"
                        }
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className={
                    plan.featured
                      ? "w-full bg-white text-slate-950 hover:bg-slate-100"
                      : "w-full bg-slate-950 text-white hover:bg-slate-800"
                  }
                >
                  {plan.paymentUrl ? (
                    <a href={plan.paymentUrl} target="_blank" rel="noreferrer">
                      Checkout
                    </a>
                  ) : (
                    <a
                      href="https://app.zazubot.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Start free
                    </a>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section className="bg-[#f5f8f7] py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            FAQ
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Find answers to common questions about pricing, subscriptions, and
            rollout.
          </p>
        </div>

        <Card className="mt-12 rounded-[2rem] border-white bg-white shadow-[0_20px_45px_rgba(15,23,42,0.06)]">
          <CardContent className="p-6 sm:p-8">
            <Accordion type="single" collapsible>
              {faqItems.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger className="text-base text-slate-950 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-slate-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7fe5a6]">
                Ready to get started?
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
                Launch the first ZazuBot flow that your team will actually keep
                using.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Start with a free test build, connect your channels, and move
                from scripted support to AI-assisted conversations fast.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button
                asChild
                size="lg"
                className="bg-[#7fe5a6] text-slate-950 hover:bg-[#6cd491]"
              >
                <a
                  href="https://app.zazubot.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Start now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/join">Book a demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeatureCardsGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {featurePageContent.cards.map((card, index) => {
        const Icon = featureIcons[index];

        return (
          <Card
            key={card.title}
            className="rounded-[1.75rem] border-slate-200 bg-white shadow-none"
          >
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Icon className="h-5 w-5" />
              </div>
              <CardTitle className="text-xl text-slate-950">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-slate-600">
                {card.description}
              </p>
              <div className="mt-5 space-y-3">
                {card.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <Check className="mt-0.5 h-4 w-4 text-emerald-700" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
      <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-slate-200 bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-700">
        <div>Feature</div>
        <div>Our platform</div>
        <div>Typical competitors</div>
      </div>
      {featurePageContent.comparisonRows.map((row) => (
        <div
          key={row.feature}
          className="grid grid-cols-[1.1fr_1fr_1fr] gap-4 border-b border-slate-100 px-6 py-5 text-sm leading-7 text-slate-600 last:border-b-0"
        >
          <div className="font-medium text-slate-950">{row.feature}</div>
          <div className="text-emerald-700">{row.ours}</div>
          <div>{row.competitors}</div>
        </div>
      ))}
    </div>
  );
}

export function AboutSections() {
  return (
    <div className="space-y-20 py-20">
      <section>
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Card className="rounded-[2rem] border-slate-200 bg-white shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-950">
                {aboutContent.missionTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base leading-8 text-slate-600">
              {aboutContent.missionText}
            </CardContent>
          </Card>
          <Card className="rounded-[2rem] border-slate-200 bg-white shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-950">
                {aboutContent.visionTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base leading-8 text-slate-600">
              {aboutContent.visionText}
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-[#f5f8f7] p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <Image
                  src="/images/logo-sfgco.png"
                  alt="SFGCO"
                  width={400}
                  height={90}
                  className="mt-4 h-auto w-auto"
                />
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950">
                  Long-term backing for product-led growth.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {aboutContent.partnershipText}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {aboutContent.partnershipSupport}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              {aboutContent.valuesTitle}
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {aboutContent.valuesSubtitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {aboutContent.valuesDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {aboutContent.values.map((value, index) => {
              const Icon = aboutIcons[index];

              return (
                <Card
                  key={value.title}
                  className="rounded-[1.75rem] border-slate-200 bg-white shadow-none"
                >
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl text-slate-950">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-7 text-slate-600">
                    {value.description}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export function CareersSections() {
  return (
    <div className="space-y-16 py-20">
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              {careersContent.whyTitle}
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Build meaningful software with a team that values speed and
              substance.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {careersContent.reasons.map((reason, index) => {
              const Icon = careerIcons[index];

              return (
                <Card
                  key={reason.title}
                  className="rounded-[1.75rem] border-slate-200 bg-white shadow-none"
                >
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl text-slate-950">
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-7 text-slate-600">
                    {reason.description}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-slate-200 bg-[#f5f8f7] p-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              {careersContent.applyTitle}
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              {careersContent.applyText}
            </p>
            <a
              href={`mailto:${careersContent.email}`}
              className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 font-medium text-white transition hover:bg-slate-800"
            >
              {careersContent.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export function LocationsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Our presence
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Global locations
          </h2>
        </div>
        <div className="mt-10 grid gap-6">
          {locations.map((location) => (
            <Card
              key={location.country}
              className="rounded-[2rem] border-slate-200 bg-[#f8fbfa] shadow-none"
            >
              <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-3 text-slate-950">
                    <MapPin className="h-5 w-5 text-emerald-700" />
                    <div className="text-xl font-semibold">
                      {location.country}
                    </div>
                  </div>
                  <div className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">
                    {location.address}
                  </div>
                </div>
                <Badge className="w-fit rounded-full bg-emerald-100 px-4 py-1 text-emerald-800">
                  {location.note}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PartnerProgramHighlights() {
  const highlights = [
    {
      title: "Content services",
      description:
        "Package ZazuBot as part of your digital transformation delivery and monetize implementation expertise.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Process automation",
      description:
        "Help customers connect chat, forms, and backend systems into one conversion-ready workflow.",
      icon: Workflow,
    },
    {
      title: "Data governance",
      description:
        "Bring automation under a compliant, well-managed operating model for enterprise customers.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {highlights.map((item) => (
        <Card
          key={item.title}
          className="rounded-[1.75rem] border-slate-200 bg-white shadow-none"
        >
          <CardHeader>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <item.icon className="h-5 w-5" />
            </div>
            <CardTitle className="text-xl text-slate-950">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-slate-600">
            {item.description}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
