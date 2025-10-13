import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const SUPPORTED_LOCALES = ["en", "ar"];
const DEFAULT_LOCALE = "en";

function getLocale(request: NextRequest): string {
  // Try to get locale from pathname
  const { pathname } = request.nextUrl;
  const pathnameLocale = pathname.split("/")[1];
  if (SUPPORTED_LOCALES.includes(pathnameLocale)) {
    return pathnameLocale;
  }

  // Try to get locale from Accept-Language header
  const acceptLang = request.headers.get("accept-language");
  if (acceptLang) {
    const preferred = acceptLang.split(",")[0].split("-")[0];
    if (SUPPORTED_LOCALES.includes(preferred)) {
      return preferred;
    }
  }

  // Fallback to default
  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore public files and API routes
  if (pathname.startsWith("/api") || PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  // If path already includes a supported locale, continue
  const pathnameLocale = pathname.split("/")[1];
  if (SUPPORTED_LOCALES.includes(pathnameLocale)) {
    return NextResponse.next();
  }

  // Otherwise, redirect to locale-prefixed path
  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
