"use client"
import React from 'react'

export default function Section1_Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-transparent overflow-hidden">

      {/* Hero Content - New Asymmetrical Layout */}
      <div className="relative z-10 w-full max-w-7xl mt-16 mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT COLUMN - Main Content */}
          <div className="order-2 lg:order-1">
            
            {/* Top Badge - repositioned */}
            <div className="mb-6 md:mb-8 animate-fadeInUp inline-block">
              <span className="inline-flex items-center gap-2 bg-[#c084fc]/20 backdrop-blur-sm text-[#e9d5ff] font-semibold text-xs md:text-sm uppercase tracking-wider px-4 py-2 rounded-full border border-[#c084fc]/40">
                <span className="w-1.5 h-1.5 bg-[#e9d5ff] rounded-full animate-pulse"></span>
                Limited Spots Available
              </span>
            </div>

            {/* Main Headline - More impactful structure */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f3e8ff] mb-6 md:mb-8 leading-[1.1] tracking-tight animate-fadeInUp animation-delay-100">
              Turn Your
              <span className="block text-[#d8b4fe] mt-2">
                Detailing Business
              </span>
              <span className="block bg-gradient-to-r from-[#d8b4fe] to-[#f3e8ff] bg-clip-text text-transparent mt-2">
                Into a Booking Machine.
              </span>
            </h1>

            {/* Sub-headline - More conversational */}
            <p className="text-base sm:text-lg md:text-xl text-[#e9d5ff]/90 mb-8 md:mb-10 leading-relaxed max-w-xl animate-fadeInUp animation-delay-200 border-l-4 border-[#d8b4fe] pl-5">
              I&apos;ve helped car detailing pros across the USA go from chasing clients to having a waiting list — with smart, hands-off marketing that runs 24/7.
            </p>

            {/* CTA Buttons - New stacked or side-by-side with better spacing */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-12 animate-fadeInUp animation-delay-300">
              <button
                onClick={() => window.open('https://calendly.com/adnanghaffar/30min', '_blank')}
                className="group flex items-center justify-center gap-3 text-sm md:text-base py-3.5 px-8 rounded-xl bg-gradient-to-r from-[#d8b4fe] to-[#c084fc] hover:from-[#c084fc] hover:to-[#a855f7] text-[#3b0764] font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
              >
                <span>Book My Free Strategy Call</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <button
                onClick={() => {
                  const priceSection = document.getElementById('pricing');
                  if (priceSection) {
                    priceSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-[#c084fc]/60 text-[#f3e8ff] font-semibold py-3.5 px-7 rounded-xl hover:bg-[#a855f7]/20 hover:border-[#d8b4fe] transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 text-sm md:text-base"
              >
                View My Packages
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>

            {/* Trust Indicators - New design with icons inline */}
            <div className="flex flex-wrap gap-5 mb-6 animate-fadeInUp animation-delay-400">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#d8b4fe]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#d8b4fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-[#e9d5ff]">No long-term contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#d8b4fe]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#d8b4fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm text-[#e9d5ff]">Results in 30 days or less</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#d8b4fe]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#d8b4fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-sm text-[#e9d5ff]">Trusted by 50+ detailers</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Service Grid (NEW) */}
          <div className="order-2 lg:order-2 mb-10 lg:mb-0 animate-fadeInUp animation-delay-150">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Card 1 */}
              <div className="bg-[#a855f7]/15 backdrop-blur-sm rounded-2xl p-5 border border-[#c084fc]/40 hover:bg-[#a855f7]/25 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#d8b4fe]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[#d8b4fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-[#f3e8ff] font-bold text-sm mb-1">Paid Ads</h3>
                <p className="text-[#e9d5ff]/70 text-xs">Facebook & Instagram campaigns</p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#a855f7]/15 backdrop-blur-sm rounded-2xl p-5 border border-[#c084fc]/40 hover:bg-[#a855f7]/25 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#d8b4fe]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[#d8b4fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-[#f3e8ff] font-bold text-sm mb-1">Local SEO</h3>
                <p className="text-[#e9d5ff]/70 text-xs">Google Maps domination</p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#a855f7]/15 backdrop-blur-sm rounded-2xl p-5 border border-[#c084fc]/40 hover:bg-[#a855f7]/25 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#d8b4fe]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[#d8b4fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-[#f3e8ff] font-bold text-sm mb-1">Auto-Pilot CRM</h3>
                <p className="text-[#e9d5ff]/70 text-xs">Follow-ups & reminders</p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#a855f7]/15 backdrop-blur-sm rounded-2xl p-5 border border-[#c084fc]/40 hover:bg-[#a855f7]/25 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#d8b4fe]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[#d8b4fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-[#f3e8ff] font-bold text-sm mb-1">Content Studio</h3>
                <p className="text-[#e9d5ff]/70 text-xs">Videos & social posts</p>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="mt-6 bg-[#d8b4fe]/10 backdrop-blur-md rounded-xl p-4 border border-[#d8b4fe]/30 text-center">
              <p className="text-[#f3e8ff] text-xs font-medium">⭐ ⭐ ⭐ ⭐ ⭐</p>
              <p className="text-[#e9d5ff] text-sm mt-1">&quot;I&apos;m fully booked 3 weeks out. Best investment I&apos;ve made.&quot;</p>
              <p className="text-[#d8b4fe] text-xs mt-2 font-semibold">— Mike R., Detailing Pro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}