import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { studioAuthToken } from "./sanity/env";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Redirect `/Blog` (capital) to `/blog` so it works on Linux deploys.
  if (pathname.startsWith("/Blog")) {
    const url = request.nextUrl.clone();
    const rest = pathname.slice("/Blog".length);
    url.pathname = rest ? `/blog${rest}` : "/blog";
    url.search = search;
    return NextResponse.redirect(url);
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
  matcher: ["/Blog/:path*", "/studio/:path*", "/studio"],
};
