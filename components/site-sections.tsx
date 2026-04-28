import Image from "next/image";
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
import { getTranslations } from "next-intl/server";

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
import { Link } from "@/i18n/navigation";
import {
  aiAvatars,
  integrationTiles,
  introTabs,
  orbitLogos,
  pricingPlans,
  testimonials,
} from "@/lib/site-content";
import type { IntroTab } from "@/lib/site-content";

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
const partnerIcons = [BriefcaseBusiness, Workflow, ShieldCheck];

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

export async function HomeHero() {
  const t = await getTranslations("hero");

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

          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#7fe5a6] motion-safe:animate-hero-fade-up">
            {t("eyebrow")}
          </div>

          <h1 className="max-w-4xl text-pretty font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.96] tracking-tight motion-safe:animate-hero-fade-up sm:text-6xl lg:text-7xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 motion-safe:opacity-0 motion-safe:animate-hero-fade-up [animation-delay:140ms]">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-col gap-3 motion-safe:opacity-0 motion-safe:animate-hero-fade-up sm:flex-row sm:flex-wrap [animation-delay:260ms]">
            <Button
              asChild
              size="lg"
              className="bg-[#7fe5a6] text-slate-950 hover:bg-[#6cd491]"
            >
              <a href="https://app.zazubot.com" target="_blank" rel="noreferrer">
                {t("startNow")}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <a
                href="https://www.youtube.com/watch?v=gv8KYqrUSgA"
                target="_blank"
                rel="noreferrer"
              >
                {t("watchDemo")}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/15 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/pricing">{t("pricingTable")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-slate-200 hover:bg-white/10 hover:text-white"
            >
              <a
                href="https://docs.zazubot.com/"
                target="_blank"
                rel="noreferrer"
              >
                {t("documentation")}
              </a>
            </Button>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <div className="relative w-full max-w-xl motion-safe:opacity-0 motion-safe:animate-hero-fade-up [animation-delay:220ms]">
            <div className="absolute inset-6 rounded-[2rem] bg-[#7fe5a6]/10 blur-3xl motion-safe:animate-hero-glow [animation-delay:900ms]" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_40px_100px_rgba(0,0,0,0.45)] backdrop-blur motion-safe:animate-hero-float">
              <div className="absolute -left-6 top-8 rounded-[1.5rem] border border-white/10 bg-[#101522] px-4 py-3 text-xs uppercase tracking-[0.22em] text-[#7fe5a6] shadow-lg motion-safe:animate-hero-fade-up [animation-delay:360ms]">
                {t("buildDesignDeploy")}
              </div>
              <div className="absolute -right-4 bottom-8 rounded-[1.5rem] border border-white/10 bg-[#141925] px-4 py-3 text-sm text-slate-300 shadow-lg motion-safe:animate-hero-fade-up [animation-delay:520ms]">
                {t("dragDropEasy")}
              </div>
              <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0e1118]">
                <video
                  src="/videos/drag-drop-MpiYrqEo.mp4"
                  controls={false}
                  autoPlay
                  loop
                  muted
                  className="h-auto w-full rounded-[1.6rem] border border-white/10 bg-[#0e1118]"
                  style={{ objectFit: "cover" }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function IntroSection() {
  const t = await getTranslations("intro");

  const tabKeys = [
    "visualBuilder",
    "multipleChannels",
    "templates",
    "publish",
  ] as const;

  const tabs: IntroTab[] = introTabs.map((tab, i) => {
    const key = tabKeys[i];
    return {
      image: tab.image,
      label: t(`tabs.${key}.label`),
      title: t(`tabs.${key}.title`),
      description: t(`tabs.${key}.description`),
      features:
        key === "templates"
          ? [
              t("tabs.templates.feature0"),
              t("tabs.templates.feature1"),
              t("tabs.templates.feature2"),
            ]
          : undefined,
    };
  });

  return (
    <section className="bg-[#090b12] px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7fe5a6]">
            {t("eyebrow")}
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {t("title")}
          </h2>
        </div>
        <IntroTabs tabs={tabs} />
      </div>
    </section>
  );
}

export async function UseCasesSection() {
  const t = await getTranslations("useCases");

  const items = Array.from({ length: 3 }, (_, i) => ({
    title: t(`${i}.title`),
    description: t(`${i}.description`),
  }));

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            {t("eyebrow")}
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
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

export async function BenefitsSection() {
  const t = await getTranslations("benefits");

  const articles = Array.from({ length: 6 }, (_, i) => ({
    title: t(`${i}.title`),
    description: t(`${i}.description`),
  }));

  return (
    <section className="bg-[#f5f8f7] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              {t("eyebrow")}
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {t("title")}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => {
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

export async function IntegrationsShowcase() {
  const t = await getTranslations("integrations");

  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            {t("eyebrow")}
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            {t("description")}
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
                {t("explore")}
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

export async function TestimonialsSection() {
  const t = await getTranslations("testimonials");

  return (
    <section className="bg-[#0d1320] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7fe5a6]">
            {t("eyebrow")}
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            {t("description")}
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

export async function PricingSection() {
  const t = await getTranslations("pricing");

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            {t("eyebrow")}
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {t("description")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const planName = t(`plans.${plan.id}.name`);
            const planDesc = t(`plans.${plan.id}.description`);
            const planDuration = t(`plans.${plan.id}.duration`);

            const featureKeys: Record<string, string[]> = {
              free: [
                "unlimitedBots",
                "chats200",
                "platforms10",
                "brandingRemoved",
                "collectFiles",
                "createFolders",
              ],
              Monthly: [
                "unlimitedBots",
                "chats2000",
                "extraChats",
                "webhooks",
                "platforms10",
                "brandingRemoved",
                "collectFiles",
                "createFolders",
                "directPrioritySupport",
                "whatsapp",
                "customDomain",
                "prioritySupport",
              ],
              Yearly: [
                "unlimitedBots",
                "chats10000",
                "webhooks",
                "platforms10",
                "brandingRemoved",
                "collectFiles",
                "createFolders",
                "directPrioritySupport",
                "whatsapp",
                "customDomain",
                "prioritySupport",
              ],
            };

            const planFeatures = (featureKeys[plan.id] ?? []).map((key) =>
              t(`features.${key}`)
            );

            return (
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
                      {t("mostPopular")}
                    </Badge>
                  ) : null}
                  <CardTitle
                    className={plan.featured ? "text-white" : "text-slate-950"}
                  >
                    {planName}
                  </CardTitle>
                  <div
                    className={
                      plan.featured ? "text-slate-300" : "text-slate-600"
                    }
                  >
                    {planDesc}
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
                      {t("per", { duration: planDuration })}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="space-y-3">
                    {planFeatures.map((feature) => (
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
                      <a
                        href={plan.paymentUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t("checkout")}
                      </a>
                    ) : (
                      <a
                        href="https://app.zazubot.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t("startFree")}
                      </a>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export async function FAQSection() {
  const t = await getTranslations("faq");

  const items = Array.from({ length: 5 }, (_, i) => ({
    question: t(`${i}.question`),
    answer: t(`${i}.answer`),
  }));

  return (
    <section className="bg-[#f5f8f7] py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            {t("eyebrow")}
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {t("description")}
          </p>
        </div>

        <Card className="mt-12 rounded-[2rem] border-white bg-white shadow-[0_20px_45px_rgba(15,23,42,0.06)]">
          <CardContent className="p-6 sm:p-8">
            <Accordion type="single" collapsible>
              {items.map((item, i) => (
                <AccordionItem key={item.question} value={`faq-${i}`}>
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

export async function CTASection() {
  const t = await getTranslations("cta");

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7fe5a6]">
                {t("eyebrow")}
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
                {t("title")}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                {t("description")}
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
                  {t("startNow")}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/join">{t("bookDemo")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function FeatureCardsGrid() {
  const t = await getTranslations("features");

  const cards = Array.from({ length: 6 }, (_, i) => ({
    title: t(`cards.${i}.title`),
    description: t(`cards.${i}.description`),
    bullets: Array.from({ length: 3 }, (_, j) => t(`cards.${i}.b${j}`)),
  }));

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {cards.map((card, index) => {
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

export async function ComparisonTable() {
  const t = await getTranslations("features");

  const rows = Array.from({ length: 4 }, (_, i) => ({
    feature: t(`comparison.${i}.feature`),
    ours: t(`comparison.${i}.ours`),
    competitors: t(`comparison.${i}.competitors`),
  }));

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
      <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-slate-200 bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-700">
        <div>{t("tableFeature")}</div>
        <div>{t("tablePlatform")}</div>
        <div>{t("tableCompetitors")}</div>
      </div>
      {rows.map((row) => (
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

export async function AboutSections() {
  const t = await getTranslations("about");

  const values = Array.from({ length: 3 }, (_, i) => ({
    title: t(`values.${i}.title`),
    description: t(`values.${i}.description`),
  }));

  return (
    <div className="space-y-20 py-20">
      <section>
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Card className="rounded-[2rem] border-slate-200 bg-white shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-950">
                {t("missionTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base leading-8 text-slate-600">
              {t("missionText")}
            </CardContent>
          </Card>
          <Card className="rounded-[2rem] border-slate-200 bg-white shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-950">
                {t("visionTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base leading-8 text-slate-600">
              {t("visionText")}
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
                  {t("backingTitle")}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {t("partnershipText")}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {t("partnershipSupport")}
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
              {t("valuesEyebrow")}
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {t("valuesTitle")}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {t("valuesDescription")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {values.map((value, index) => {
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

export async function CareersSections() {
  const t = await getTranslations("careers");

  const reasons = Array.from({ length: 3 }, (_, i) => ({
    title: t(`reasons.${i}.title`),
    description: t(`reasons.${i}.description`),
  }));

  return (
    <div className="space-y-16 py-20">
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              {t("whyEyebrow")}
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {t("whyTitle")}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reasons.map((reason, index) => {
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
              {t("applyEyebrow")}
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              {t("applyText")}
            </p>
            <a
              href="mailto:hr@sfgco.sa"
              className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 font-medium text-white transition hover:bg-slate-800"
            >
              hr@sfgco.sa
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function LocationsSection() {
  const t = await getTranslations("locations");

  const items = Array.from({ length: 1 }, (_, i) => ({
    country: t(`${i}.country`),
    address: t(`${i}.address`),
    note: t(`${i}.note`),
  }));

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            {t("eyebrow")}
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {t("title")}
          </h2>
        </div>
        <div className="mt-10 grid gap-6">
          {items.map((location) => (
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

export async function PartnerProgramHighlights() {
  const t = await getTranslations("partner");

  const highlights = Array.from({ length: 3 }, (_, i) => ({
    title: t(`highlights.${i}.title`),
    description: t(`highlights.${i}.description`),
  }));

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {highlights.map((item, index) => {
        const Icon = partnerIcons[index];
        return (
          <Card
            key={item.title}
            className="rounded-[1.75rem] border-slate-200 bg-white shadow-none"
          >
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Icon className="h-5 w-5" />
              </div>
              <CardTitle className="text-xl text-slate-950">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-slate-600">
              {item.description}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
