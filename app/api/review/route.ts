import { NextResponse } from 'next/server'
import { serverClient } from '@/sanity/lib/serverClient'

export async function POST(request: Request) {
  try {
    const { name, email, company, rating, review, submittedAt } = await request.json()

    // Validation
    if (!name || !email || !rating || !review) {
      return NextResponse.json(
        { message: 'All required fields must be filled' },
        { status: 400 }
      )
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { message: 'Rating must be between 1 and 5' },
        { status: 400 }
      )
    }

    if (review.length < 10 || review.length > 1000) {
      return NextResponse.json(
        { message: 'Review must be between 10 and 1000 characters' },
        { status: 400 }
      )
    }

    // Save to Sanity
    const reviewDoc = {
      _type: 'review',
      name,
      email,
      company: company || undefined,
      rating: Number(rating),
      review,
      status: 'pending',
      submittedAt: submittedAt || new Date().toISOString(),
    }

    // Check if write token is configured
    if (!process.env.SANITY_API_WRITE_TOKEN) {
      console.error('SANITY_API_WRITE_TOKEN is not configured')
      return NextResponse.json(
        { message: 'Server configuration error. Please contact administrator.' },
        { status: 500 }
      )
    }

    const result = await serverClient.create(reviewDoc)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Review submitted successfully',
        id: result._id 
      },
      { status: 200 }
    )
  } catch (error: unknown) {
    console.error('Review submission error:', error)
    return NextResponse.json(
      { message: 'Failed to submit review. Please try again.' },
      { status: 500 }
    )
  }
}
