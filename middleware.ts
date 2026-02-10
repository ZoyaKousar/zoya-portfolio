import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { studioAuthToken } from './sanity/env'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip authentication check for login page and API routes
  if (pathname === '/studio/login' || pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  // Check if the request is for the studio route
  if (pathname.startsWith('/studio')) {
    // Check for authentication cookie
    const authCookie = request.cookies.get('studio-auth')
    const isAuthenticated = authCookie?.value === studioAuthToken

    // Debug log (remove in production)
    if (process.env.NODE_ENV === 'development') {
      console.log('Studio access attempt:', {
        pathname,
        hasCookie: !!authCookie,
        isAuthenticated,
        token: studioAuthToken,
      })
    }

    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      const loginUrl = new URL('/studio/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/studio/:path*',
    '/studio',
  ],
}
