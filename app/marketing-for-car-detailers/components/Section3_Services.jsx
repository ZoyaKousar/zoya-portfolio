import React from 'react'

export default function Section3_Services() {
  const services = [
    {
      number: "01",
      title: "Local SEO & Google Maps Domination",
      description: "When someone searches for a detailer in your city, I make sure you're the first name they see. No more invisible listings — just consistent local visibility.",
      bullets: [
        "Complete Google Business Profile optimization",
        "Local directory citations & NAP consistency",
        "Weekly photo uploads & service posts",
        "Map Pack ranking strategy that works"
      ]
    },
    {
      number: "02",
      title: "High-Converting Booking Websites",
      description: "Your website should work while you sleep. I build fast, mobile-optimized sites with one goal: turning visitors into paying customers.",
      bullets: [
        "Lightning-fast mobile-first design",
        "Dedicated pages for each service you offer",
        "One-click booking & click-to-call buttons",
        "SEO-optimized from day one"
      ]
    },
    {
      number: "03",
      title: "Meta Ads That Actually Book",
      description: "No fluff. Just targeted before/after video campaigns that put your work in front of local car owners ready to book right now.",
      bullets: [
        "Full campaign strategy & setup",
        "Scroll-stopping video ad creation",
        "AI voiceovers & professional editing",
        "Precise zip-code level targeting",
        "Daily monitoring & optimization"
      ]
    },
    {
      number: "04",
      title: "Google Ads & Guaranteed Visibility",
      description: "Get the 'Google Guaranteed' badge and appear at the very top of search results. I target high-intent keywords so you only pay for real leads.",
      bullets: [
        "Google Search & Local Service Ads",
        "Google Guaranteed badge setup",
        "High-intent keyword targeting",
        "Monthly spend optimization & reporting"
      ]
    },
    {
      number: "05",
      title: "Automated Follow-Up Machine (GHL)",
      description: "Every lead gets a response within minutes — automatically. I set up your entire GoHighLevel CRM so no opportunity ever slips away.",
      bullets: [
        "Complete GHL sub-account setup",
        "SMS + email auto-responder sequences",
        "Lead tracking & pipeline management",
        "Online booking calendar integration",
        "Ongoing automation improvements"
      ]
    },
    {
      number: "06",
      title: "Social Content That Stands Out",
      description: "Scroll-stopping before/after Reels, TikToks, and posts that build your brand and keep you top-of-mind every single day.",
      bullets: [
        "Monthly content calendar planning",
        "Professional before/after video editing",
        "Ad creatives & social graphics",
        "AI voiceover narration for videos"
      ]
    },
    {
      number: "07",
      title: "5-Star Review Generation System",
      description: "Reviews are the #1 reason customers choose one detailer over another. I automate your entire review collection process from start to finish.",
      bullets: [
        "Automated review request sequences",
        "Google & Facebook review management",
        "Professional response templates",
        "Monthly reputation insights report"
      ]
    },
    {
      number: "08",
      title: "Past Client Reactivation Campaigns",
      description: "Your existing customers are gold. I run automated SMS/email campaigns that bring them back for maintenance, seasonal packages, and more.",
      bullets: [
        "Past customer outreach sequences",
        "Seasonal promotion campaigns",
        "Automated maintenance reminders",
        "Ceramic coating top-up offers"
      ]
    }
  ]

  return (
    <section className="relative py-20 md:py-28 bg-transparent overflow-hidden">
      
      {/* Subtle purple ambient glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#a855f7]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c084fc]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header - Redesigned with purple theme */}
        <div className="text-center mb-16 md:mb-20">
          
          {/* Top Tag */}
          <div className="inline-block mb-5">
            <span className="inline-flex items-center gap-2 bg-[#c084fc]/20 backdrop-blur-sm text-[#e9d5ff] font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-[#c084fc]/40">
              <span className="w-1.5 h-1.5 bg-[#e9d5ff] rounded-full animate-pulse"></span>
              What I Do For You
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#f3e8ff] mb-6 leading-tight">
            Everything Your Detailing Business{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#d8b4fe]">Needs to Get Booked Solid</span>
            </span>
          </h2>
          
          <p className="text-lg text-[#e9d5ff]/80 max-w-2xl mx-auto">
            I handle every piece of your marketing so you can focus on delivering exceptional detailing work.
          </p>
        </div>

        {/* Services - Magazine style layout (alternating rows) - STRUCTURE PRESERVED */}
        <div className="space-y-16 md:space-y-20">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-start border-b border-[#c084fc]/20 pb-12 last:border-0 last:pb-0`}
            >
              {/* Left: Number and Visual Element */}
              <div className="lg:w-1/3">
                <div className="sticky top-24">
                  <div className="relative">
                    {/* Large Number */}
                    <div className="text-8xl md:text-9xl font-black text-[#d8b4fe]/20 leading-none">
                      {service.number}
                    </div>
                    {/* Accent line */}
                    <div className={`w-16 h-1 bg-gradient-to-r from-[#d8b4fe] to-[#c084fc] mt-4 rounded-full ${idx % 2 === 0 ? '' : 'lg:ml-auto'}`}></div>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="lg:w-2/3">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-[#f3e8ff] mb-4 leading-tight group-hover:text-[#d8b4fe] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#e9d5ff]/70 text-base md:text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullets - Grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-3 group/bullet">
                      <div className="relative flex-shrink-0">
                        <div className="w-5 h-5 rounded-full border-2 border-[#d8b4fe] flex items-center justify-center group-hover/bullet:bg-[#d8b4fe] transition-colors duration-300">
                          <svg className="w-3 h-3 text-[#3b0764] opacity-0 group-hover/bullet:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-[#e9d5ff]/80 text-sm md:text-base">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar - Redesigned with purple theme */}
        <div className="mt-20 pt-8 border-t border-[#c084fc]/30">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center group">
              <div className="text-4xl font-black text-[#d8b4fe] group-hover:scale-110 transition-transform duration-300">8</div>
              <div className="text-xs text-[#e9d5ff]/60 uppercase tracking-wide">Specialized Services</div>
            </div>
            <div className="w-px h-12 bg-[#c084fc]/30 hidden md:block"></div>
            <div className="text-center group">
              <div className="text-4xl font-black text-[#d8b4fe] group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-xs text-[#e9d5ff]/60 uppercase tracking-wide">Fully Managed For You</div>
            </div>
            <div className="w-px h-12 bg-[#c084fc]/30 hidden md:block"></div>
            <div className="text-center group">
              <div className="text-4xl font-black text-[#d8b4fe] group-hover:scale-110 transition-transform duration-300">30</div>
              <div className="text-xs text-[#e9d5ff]/60 uppercase tracking-wide">Days to Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}