---
name: i18n setup
description: next-intl v4 internationalization with EN/AR, RTL support, locale routing, and LanguageSwitcher in footer
type: project
---

Full i18n implemented with next-intl v4.10.1.

**Why:** User requested production-ready EN/AR i18n with RTL, locale routing, and language switcher.

**How to apply:** All text content lives in messages/en.json and messages/ar.json. Server components use `getTranslations` from `next-intl/server`. Client components use `useTranslations` from `next-intl`. Locale-aware `Link`, `useRouter`, `usePathname` are re-exported from `i18n/navigation.ts`.

Key files:
- `i18n/routing.ts` — defineRouting with locales ['en', 'ar'], defaultLocale 'en'
- `i18n/request.ts` — getRequestConfig loading messages/{locale}.json
- `i18n/navigation.ts` — createNavigation exports (Link, useRouter, usePathname)
- `middleware.ts` — createMiddleware(routing), matcher excludes _next/api/static files
- `next.config.js` — wrapped with createNextIntlPlugin('./i18n/request.ts')
- `messages/en.json` + `messages/ar.json` — all UI text, structured by namespace
- `app/layout.tsx` — minimal root layout (returns children only)
- `app/[locale]/layout.tsx` — full layout with html lang/dir, NextIntlClientProvider, generateStaticParams
- `components/language-switcher.tsx` — client component in footer, uses useRouter.replace with locale
- Interpolation example: `t('pricing.per', { duration: '...' })` → "/ month"
- Pluralization example: `t('common.items', { count: n })` → ICU plural
