'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Star, CheckCircle } from 'lucide-react'

export default function ReviewPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    rating: 0,
    review: '',
  })
  const [hoveredRating, setHoveredRating] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    try {
      const response = await fetch('/api/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          company: '',
          rating: 0,
          review: '',
        })
      } else {
        setError(data.message || 'Failed to submit review. Please try again.')
      }
    } catch {
      setError('An error occurred. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F103F] via-[#1C1C65] to-[#22226C] px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#2F2F8A] bg-opacity-60 border border-white/20 backdrop-blur-md rounded-2xl p-8 md:p-12 w-full max-w-md text-center"
        >
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Thank You!
          </h2>
          <p className="text-gray-300 mb-6">
            Your review has been submitted successfully. We&apos;ll review it and publish it soon.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-fuchsia-400 hover:text-fuchsia-300 underline"
          >
            Submit Another Review
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F103F] via-[#1C1C65] to-[#22226C] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Share Your Experience
          </h1>
          <p className="text-gray-300 text-lg">
            We&apos;d love to hear about your experience working with us
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-[#2F2F8A] bg-opacity-60 border border-white/20 backdrop-blur-md rounded-2xl p-6 md:p-8 space-y-6"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Your Name <span className="text-red-400">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-[#1C1C65] border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-[#1C1C65] border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
              Company/Organization (Optional)
            </label>
            <input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 bg-[#1C1C65] border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all"
              placeholder="Your company name"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Rating <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-2 justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="focus:outline-none transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-10 h-10 ${
                      star <= (hoveredRating || formData.rating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-400'
                    } transition-colors`}
                  />
                </button>
              ))}
            </div>
            {formData.rating > 0 && (
              <p className="text-center text-gray-400 mt-2">
                {formData.rating} out of 5 stars
              </p>
            )}
          </div>

          {/* Review Text */}
          <div>
            <label htmlFor="review" className="block text-sm font-medium text-gray-300 mb-2">
              Your Review <span className="text-red-400">*</span>
            </label>
            <textarea
              id="review"
              required
              minLength={10}
              maxLength={1000}
              value={formData.review}
              onChange={(e) => setFormData({ ...formData, review: e.target.value })}
              rows={6}
              className="w-full px-4 py-3 bg-[#1C1C65] border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all resize-none"
              placeholder="Tell us about your experience..."
            />
            <p className="text-xs text-gray-400 mt-1">
              {formData.review.length}/1000 characters
            </p>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3">
              <p className="text-red-300 text-sm text-center">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={submitting || formData.rating === 0}
            className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {submitting ? 'Submitting...' : 'Submit Review'}
          </button>
        </motion.form>
      </div>
    </div>
  )
}
