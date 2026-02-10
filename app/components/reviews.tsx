'use client'

import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Review {
  _id: string
  name: string
  company?: string
  rating: number
  review: string
  submittedAt?: string
  reviewerImage?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchReviews() {
      try {
        const query = `*[_type == "review" && status == "published"] | order(submittedAt desc) {
          _id,
          name,
          company,
          rating,
          review,
          submittedAt,
          reviewerImage
        }`
        
        // Use client without CDN for fresh data
        const data = await client.withConfig({ useCdn: false }).fetch(query)
        console.log('Fetched reviews:', data) // Debug log
        setReviews(data || [])
      } catch (error) {
        console.error('Error fetching reviews:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  if (loading) {
    return (
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-white text-center">Loading reviews...</p>
        </div>
      </section>
    )
  }

  if (reviews.length === 0) {
    return null
  }

  return (
    <section className="py-12 md:py-16 px-4" id="reviews">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-300 text-lg">
            Real feedback from people I&apos;ve worked with
          </p>
        </motion.div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review._id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex flex-col p-8 rounded-2xl bg-gradient-to-br from-gray-800/40 via-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 shadow-xl relative overflow-hidden group cursor-pointer min-h-[320px]"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-600/0 to-blue-600/0 group-hover:from-fuchsia-500/10 group-hover:via-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
              
              {/* Border glow on hover */}
              <div className="absolute inset-0 border border-gray-700/50 group-hover:border-fuchsia-500/50 rounded-2xl transition-all duration-500 shadow-lg group-hover:shadow-fuchsia-500/20"></div>
              
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-fuchsia-500/20 text-6xl font-serif">&quot;</div>
              
              {/* Stars */}
              <div className="relative z-10 mb-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= review.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Review text */}
              <div className="flex-1 relative z-10 mb-6">
                <p className="text-white/90 text-base md:text-lg leading-relaxed font-light italic">
                  {review.review}
                </p>
              </div>
              
              {/* Client info */}
              <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-gray-700/50">
                {review.reviewerImage ? (
                  <div className="relative">
                    <Image
                      src={urlFor(review.reviewerImage).width(56).height(56).url()}
                      alt={review.reviewerImage.alt || review.name || "Client photo"}
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-full border-2 border-fuchsia-500/50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20"></div>
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                    {review.name?.charAt(0) || "C"}
                  </div>
                )}
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-lg">
                    {review.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {review.company || new Date(review.submittedAt || Date.now()).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}
                  </p>
                </div>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-fuchsia-500 to-transparent rounded-tl-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile layout */}
        <div className="grid md:hidden gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col p-6 rounded-2xl bg-gradient-to-br from-gray-800/40 via-gray-900/40 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 shadow-xl relative overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-3 right-3 text-fuchsia-500/20 text-5xl font-serif">&quot;</div>
              
              {/* Stars */}
              <div className="relative z-10 mb-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= review.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Review text */}
              <div className="flex-1 relative z-10 mb-6">
                <p className="text-white/90 text-base leading-relaxed font-light italic">
                  {review.review}
                </p>
              </div>
              
              {/* Client info */}
              <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-gray-700/50">
                {review.reviewerImage ? (
                  <div className="relative">
                    <Image
                      src={urlFor(review.reviewerImage).width(56).height(56).url()}
                      alt={review.reviewerImage.alt || review.name || "Client photo"}
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-full border-2 border-fuchsia-500/50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20"></div>
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                    {review.name?.charAt(0) || "C"}
                  </div>
                )}
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-lg">
                    {review.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {review.company || new Date(review.submittedAt || Date.now()).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
