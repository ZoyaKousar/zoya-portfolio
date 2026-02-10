import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { studioPassword, studioAuthToken } from '@/sanity/env'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    // Get the password from environment variable
    const correctPassword = studioPassword

    if (!correctPassword) {
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Check if password matches
    if (password === correctPassword) {
      // Set authentication cookie (expires in 7 days)
      const cookieStore = await cookies()
      cookieStore.set('studio-auth', studioAuthToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      })

      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { message: 'Invalid password' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Auth error:', error)
    return NextResponse.json(
      { message: 'Authentication failed' },
      { status: 500 }
    )
  }
}
