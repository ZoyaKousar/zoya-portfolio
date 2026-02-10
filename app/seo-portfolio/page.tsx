"use client"
import { useState } from "react"
import type React from "react"

import { motion } from "framer-motion"
import YouTubeVideo from "../components/youtubeVideo"

// SEO Expertise Data
const expertiseData = [
  {
    id: "data-driven-seo",
    title: "Data-Driven SEO",
    description:
      "I don't make stuff up or chase shiny trends. I check real data first, what people are actually searching for, where they drop off, which pages make money, that kind of thing. Then I put together a plan you can watch week by week, that lines up with what the business needs, and keeps bringing traffic long after the first push.",
    image: "/seo-data-analytics.jpg",
  },
  {
    id: "google-tools",
    title: "Google Analytics & Search Console",
    description:
      "These two haven't changed much for me, they're still gold. I open GA4 and Search Console almost every day. I look for traffic weirdness, keywords sitting on page 2 that could jump to page 1 with a small push, pages getting lots of views but zero sales, then I go fix them so more good visitors show up.",
    image: "/google-analytics-dashboard.jpg",
  },
  {
    id: "ai-powered-seo",
    title: "AI-Powered SEO",
    description:
      "These days I let AI do a bunch of the heavy lifting so I can keep up with Google's mood swings. It spits out keyword ideas quickly, helps me rewrite sections to fit what people really want, catches technical glitches fast, even guesses what might start trending. I still decide what matters though, AI is a helper, not the boss.",
    image: "/ai-seo-technology.jpg",
  },
]

// Performance Metrics Data
const metricsData = [
  {
    id: "organic-traffic",
    title: "Organic Traffic Growth",
    trend: "upward",
    description: "Traffic goes up steadily month after month from small smart changes and content that actually solves someone's problem.",
    image: "/traffic-growth-chart.jpg",
  },
  {
    id: "keyword-ranking",
    title: "Keyword Ranking Improvement",
    trend: "upward",
    description: "Keywords climb—especially the hard ones people type when they're ready to buy or contact someone.",
    image: "/keyword-ranking.jpg",
  },
  {
    id: "backlink-profile",
    title: "Backlink Profile Growth",
    trend: "upward",
    description: "I get decent sites to link naturally so the domain looks stronger to Google and ranks easier.",
    image: "/backlink-network.jpg",
  },
  {
    id: "local-seo",
    title: "Local SEO Performance",
    trend: "upward",
    description: "Local businesses start showing in the map pack and \"near me\" stuff after I sort citations, reviews, and local pages.",
    image: "/local-seo-map.jpg",
  },
  {
    id: "conversion-rate",
    title: "Conversion Rate Optimization",
    trend: "upward",
    description: "More of those free visitors actually do something: call, email, buy, because the page gives them exactly what they came for.",
    image: "/conversion-optimization.jpg",
  },
]

export default function SEOPortfolioPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [uploading, setUploading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" })
        alert("Message sent successfully!")
      }
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="min-h-screen text-white overflow-hidden mt-20">
      {/* Hero Section */}
      <section className="relative py-8 md:py-12 px-4 md:px-8 lg:px-16 min-h-[85vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-fuchsia-500 mb-4 leading-tight">
                SEO
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">SEO Executive</h2>
              <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto lg:mx-0">
                Look, I just help brands get more people finding them on Google without paying for every click. I use real SEO tricks that work right now, pull numbers from actual tools, and throw in whatever apps or AI make the job easier and faster. I&apos;ve fixed broken site tech, written or tweaked content that ranks, got local shops popping up in maps, and used AI so I don&apos;t have to redo the same boring tasks every week.
              </p>
            </motion.div>

            {/* YouTube Video Embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full"
            >
              <YouTubeVideo 
                videoId="YOUR_VIDEO_ID"
                title="SEO Portfolio"
              />
              <p className="text-center text-white/50 text-sm mt-3">
                Click play to watch my SEO showcase
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Sections */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-16">
          {expertiseData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Text Content */}
              <div className={index % 2 === 0 ? "" : "md:order-2"}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-2 h-16 bg-gradient-to-b from-fuchsia-500 via-purple-500 to-indigo-500 rounded-full`}></div>
                  <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400">
                    {item.title}
                  </h3>
                </div>
                <p className="text-white/70 text-lg leading-relaxed">{item.description}</p>
              </div>

              <div className={index % 2 === 0 ? "md:order-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-fuchsia-500/30 border-2 border-fuchsia-500/30 group">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-[450px] md:h-[500px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-fuchsia-500/30 to-purple-500/30 rounded-full blur-3xl pointer-events-none"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            Performance Metrics & Results
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metricsData.map((metric, index) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 via-purple-500/5 to-fuchsia-500/5 border border-fuchsia-500/20 rounded-xl overflow-hidden hover:border-fuchsia-500/50 hover:shadow-xl hover:shadow-fuchsia-500/30 transition-all group"
              >
                <div className="relative overflow-hidden h-[200px] w-full">
                  <img
                    src={metric.image || "/placeholder.svg"}
                    alt={metric.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-fuchsia-500/80 to-purple-500/80 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <span className="text-2xl">📈</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 mb-3">
                    {metric.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">{metric.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes This Work Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-br from-white/5 via-purple-500/10 to-fuchsia-500/10 border-2 border-fuchsia-500/30 rounded-2xl p-8 md:p-12 shadow-2xl shadow-fuchsia-500/20 overflow-hidden"
          >
            {/* Background gradient effect */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 mb-6">
                What Makes This Work?
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Nothing fancy. Just knowing the tech side and actually finishing the work. I spend time on:
              </p>
              <ul className="space-y-4 text-white/80 text-lg">
                <li className="flex items-start gap-3 group">
                  <span className="text-2xl text-fuchsia-400 mt-1 group-hover:scale-125 transition-transform">•</span>
                  <span>digging proper keywords and seeing what competitors do better</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-2xl text-fuchsia-400 mt-1 group-hover:scale-125 transition-transform">•</span>
                  <span>running full site audits and fixing speed/Core Web Vitals crap</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-2xl text-fuchsia-400 mt-1 group-hover:scale-125 transition-transform">•</span>
                  <span>writing or editing content around what people are really asking</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-2xl text-fuchsia-400 mt-1 group-hover:scale-125 transition-transform">•</span>
                  <span>getting real links from good places—no black-hat nonsense</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-2xl text-fuchsia-400 mt-1 group-hover:scale-125 transition-transform">•</span>
                  <span>checking stats every week, sending short updates, and making little improvements all the time</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Image */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <img
                  src="/zoya-contact.png"
                  alt="SEO Portfolio Contact"
                  className="relative h-[400px] w-[400px] rounded-full object-cover border-4 border-fuchsia-500/50 shadow-2xl shadow-fuchsia-500/30 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -top-4 -right-4 text-6xl animate-pulse">👑</div>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-fuchsia-500 mt-8">
                SEO
              </p>
            </div>

            {/* Right: Contact Form */}
            <div className="relative bg-gradient-to-br from-white/5 via-purple-500/10 to-fuchsia-500/10 border-2 border-fuchsia-500/30 rounded-2xl p-8 md:p-12 shadow-xl shadow-fuchsia-500/20">
              {/* Background glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 mb-6">
                  Your Thoughts
                </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-fuchsia-500/30 rounded-xl text-white placeholder-white/50 outline-none focus:border-fuchsia-500 focus:bg-white/15 focus:shadow-lg focus:shadow-fuchsia-500/30 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-fuchsia-500/30 rounded-xl text-white placeholder-white/50 outline-none focus:border-fuchsia-500 focus:bg-white/15 focus:shadow-lg focus:shadow-fuchsia-500/30 transition-all"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-fuchsia-500/30 rounded-xl text-white placeholder-white/50 outline-none focus:border-fuchsia-500 focus:bg-white/15 focus:shadow-lg focus:shadow-fuchsia-500/30 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={uploading}
                  className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-600 text-white rounded-[50px] font-semibold hover:from-fuchsia-600 hover:via-purple-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-fuchsia-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  {uploading ? "Sending..." : "Send Message"}
                </button>
              </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
