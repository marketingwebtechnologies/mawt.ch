import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n, type Locale } from "./i18n-config";
import { toFilesystemPathname } from "@/lib/routing/url-helpers";
import { verifyAdminSession, SESSION_COOKIE } from "@/lib/session";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = i18n.locales as unknown as string[];

  // Use negotiator + intl-localematcher to pick the best locale from Accept-Language.
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  return matchLocale(languages, locales, i18n.defaultLocale);
}

// Forward the active locale to Server Components via a request header so the
// root layout (which has no `lang` route param) can set `<html lang>` correctly.
const LOCALE_HEADER = "x-mawt-locale";

function localeFromPathname(pathname: string): string | undefined {
  return i18n.locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
}

function withLocaleHeader(request: NextRequest, locale: string) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, locale);
  return requestHeaders;
}

const LANDING_LANG_COOKIE = "landing-lang";

function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (i18n.locales as readonly string[]).includes(value);
}

// Locale the visitor's browser asks for, or undefined when it says nothing
// (then the URL's own language stays). Unlike getLocale(), no default is
// applied: a French ad must keep serving French to a browser without preference.
function landingLocaleFromBrowser(request: NextRequest): Locale | undefined {
  const header = request.headers.get("accept-language");
  if (!header) return undefined;
  const languages = new Negotiator({ headers: { "accept-language": header } }).languages();
  if (languages.length === 0) return undefined;
  for (const lang of languages) {
    const base = lang.toLowerCase().split("-")[0];
    if (isLocale(base)) return base;
  }
  return undefined;
}

// Next.js 16 renamed `middleware` to `proxy`. Same functionality.
// BUG-001/002/003 fix: Uses JWT-based session verification, no hardcoded fallback.
export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 1. Studio/Admin normalization & protection.
  // If someone visits /en/studio or /fr/studio, redirect them to root /studio.
  const isLocalizedStudio = i18n.locales.some((locale) =>
    pathname.startsWith(`/${locale}/studio`),
  );
  if (isLocalizedStudio) {
    const cleanPath = pathname.replace(/^\/(en|fr)/, "");
    return NextResponse.redirect(new URL(cleanPath, request.url));
  }

  const isStudio =
    pathname.startsWith("/studio") || pathname.startsWith("/admin");

  if (isStudio) {
    // BUG-001: No hardcoded fallback secret.
    // BUG-002: Verify signed JWT — never compare raw secrets.
    const sessionToken = request.cookies.get(SESSION_COOKIE)?.value;
    const sessionPayload = await verifyAdminSession(sessionToken);

    if (sessionPayload) {
      return NextResponse.next();
    }

    // No exception: the login page lives at /<locale>/login, never under
    // /studio or /admin. The old `pathname.includes("/login")` check let any
    // path like /studio/login fall through and serve the Studio bundle
    // unauthenticated.
    const locale = getLocale(request) || i18n.defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
  }

  // 2. Ignore public assets from locale redirection.
  const isPublicAsset = [
    "/App Icons/",
    "/Approach/",
    "/Client Logos.png",
    "/cover-image.png",
    "/og-image.jpg",
    "/HeroImage.gif",
    "/HeroImage.png",
    "/MAWTBackground.gif",
    "/MAWT Hero.mp4",
    "/MAWT%20Hero.mp4",
    "/MotionMAWT.mp4",
    "/MotionMAWTMobile.mp4",
    "/hero-ascii-map.jpg",
    "/MAWT Logo.svg",
    "/MAWT Branding/",
    "/PlanetBackground.png",
    "/Service Background.png",
    "/Service%20Background.png",
    "/file.svg",
    "/globe.svg",
    "/next.svg",
    "/vercel.svg",
    "/window.svg",
    "/logo-black.svg",
    "/logo-white.svg",
    "/favicon.svg",
    "/favicon.ico",
  ].some((path) => pathname.startsWith(path));

  // Any direct file request (image, video, font…) is a public asset: without
  // this, un-listed files like /about-us-leaf.png were locale-redirected to
  // /fr/... and the Next image optimizer received HTML instead of the image.
  const isFileRequest =
    /\.(png|jpe?g|gif|svg|webp|avif|mp4|webm|ico|txt|xml|json|pdf|woff2?)$/i.test(
      pathname,
    );

  if (isPublicAsset || isFileRequest) {
    return NextResponse.next();
  }

  // 3. Locale redirection (exclude studio).
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale && !isStudio) {
    const locale = getLocale(request);
    // For the root "/", redirect straight to "/<locale>" (no trailing slash).
    // Building "/<locale>/" caused a second 308 hop ("/"->"/<locale>/"->"/en"),
    // a ~980ms redirect-chain penalty in Lighthouse. `pathname` always starts
    // with "/", so other paths just get the locale prefix.
    const target = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
    return NextResponse.redirect(new URL(target, request.url));
  }

  // 3b. Landing 500 CHF: the language follows the visitor's browser or phone, not
  // the URL the ad linked to. A French ad can reach an English-speaking phone and
  // vice versa; both copies exist, so we redirect to the one the visitor reads.
  // `?hl=fr|en` forces a language and is remembered in a cookie (lets a visitor
  // or a test override the detection). The query string (fbclid, utm) is kept.
  const landing = pathname.match(/^\/(en|fr)\/500-chf\/?$/);
  if (landing) {
    const current = landing[1];
    const forced = request.nextUrl.searchParams.get("hl");
    const remembered = request.cookies.get(LANDING_LANG_COOKIE)?.value;
    const wanted = isLocale(forced)
      ? forced
      : isLocale(remembered)
        ? remembered
        : landingLocaleFromBrowser(request) ?? current;
    if (wanted !== current) {
      const url = request.nextUrl.clone();
      url.pathname = `/${wanted}/500-chf`;
      url.searchParams.delete("hl");
      const response = NextResponse.redirect(url, 307);
      if (isLocale(forced)) response.cookies.set(LANDING_LANG_COOKIE, forced, { path: "/", maxAge: 60 * 60 * 24 * 30 });
      return response;
    }
    if (isLocale(forced) && forced !== remembered) {
      const response = NextResponse.next({ request: { headers: withLocaleHeader(request, current) } });
      response.cookies.set(LANDING_LANG_COOKIE, forced, { path: "/", maxAge: 60 * 60 * 24 * 30 });
      return response;
    }
  }

  // 4. Localized URL → filesystem rewrite.
  // Public URLs are fully localized (e.g. /fr/a-propos, /en/privacy); rewrite them
  // onto the shared on-disk folder (/fr/about, /en/legal) without changing the URL.
  const activeLocale =
    localeFromPathname(pathname) || getLocale(request) || i18n.defaultLocale;
  const headers = withLocaleHeader(request, activeLocale);

  if (!isStudio) {
    const fsPathname = toFilesystemPathname(pathname);
    if (fsPathname !== pathname) {
      const url = request.nextUrl.clone();
      url.pathname = fsPathname;
      return NextResponse.rewrite(url, { request: { headers } });
    }
  }

  return NextResponse.next({ request: { headers } });
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, and root metadata / well-known files
  // (sitemap, robots, llms.txt, /.well-known/*, favicon) so they are served
  // as-is and never caught by the locale redirect/rewrite.
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|llms.txt|500-chf-assets|\\.well-known).*)",
  ],
};
