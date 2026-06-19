import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { studioAuthToken } from "./sanity/env";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Blog route casing: keep app folder as `Blog`, but allow `/blog` and `/Blog`.
  // (Windows is case-insensitive; most deploys are case-sensitive.)
  if (pathname === "/blog" || pathname.startsWith("/blog/")) {
    const url = request.nextUrl.clone();
    url.pathname = `/Blog${pathname.slice("/blog".length)}` || "/Blog";
    url.search = search;
    return NextResponse.redirect(url);
  }

  if (pathname === "/Blog" || pathname.startsWith("/Blog/")) {
    // Canonical path is `/Blog` (matches folder name)
    return NextResponse.next();
  }

  // Skip authentication check for login page and API routes
  if (pathname === "/studio/login" || pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // Studio auth gate
  if (pathname === "/studio" || pathname.startsWith("/studio/")) {
    const authCookie = request.cookies.get("studio-auth");
    const isAuthenticated = authCookie?.value === studioAuthToken;

    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/studio/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog/:path*", "/blog", "/Blog/:path*", "/Blog", "/studio/:path*", "/studio"],
};
