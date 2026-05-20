import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'vi', 'th', 'id', 'bn', 'fa', 'ar', 'tr', 'pl'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  
  // We use rewrite here so that the URL stays as / or /about instead of forcing /en/about
  // But wait, if we rewrite, the user won't see /en/, which is good.
  // Actually, standard i18n usually redirects to /en/ for consistency, 
  // but since we want to keep it simple, let's just redirect.
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, images, etc.)
    '/((?!api|_next/static|_next/image|favicon.ico|scraped|img|fonts).*)',
  ],
};