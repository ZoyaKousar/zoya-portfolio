import React from 'react'

export default function Section4_HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Book a Free Strategy Call",
      description: "We hop on a 15–30 minute call where I learn about your detailing business, your current struggles, and where you want to be. No pressure. No hard sell. Just honest conversation.",
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    },
    {
      number: "02",
      title: "I Build Your Custom Roadmap",
      description: "Based on your goals and budget, I create a tailored marketing plan for your specific detailing business — the right services, in the right order, for where you are right now.",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      number: "03",
      title: "I Handle the Full Setup",
      description: "I set up everything — your CRM, ad campaigns, Google profile, content calendar, and automation workflows. You don't lift a finger. You're fully onboarded within 7 days.",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    },
    {
      number: "04",
      title: "You Get Bookings. I Keep Optimizing.",
      description: "Leads start flowing in. I monitor, tweak, and report on everything monthly. You focus on detailing cars — I focus on keeping your calendar full.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    }
  ]

  return (
    <section className="relative py-10 md:py-16 bg-transparent overflow-hidden">
      
      {/* Purple ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a855f7]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Redesigned */}
        <div className="text-center mb-16 md:mb-20">
          
          {/* Top Tag */}
          <div className="inline-block mb-5">
            <span className="inline-flex items-center gap-2 bg-[#c084fc]/20 backdrop-blur-sm text-[#e9d5ff] font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-[#c084fc]/40">
              <span className="w-1.5 h-1.5 bg-[#e9d5ff] rounded-full animate-pulse"></span>
              Simple. Transparent. Effective.
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#f3e8ff] mb-6 leading-tight">
            Getting Started is{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#d8b4fe]">Surprisingly Simple</span>
            </span>
            <span className="block text-[#e9d5ff]/60 text-lg md:text-xl font-normal mt-4 max-w-2xl mx-auto">
              From first call to first booking — here&apos;s exactly how I work with you.
            </span>
          </h2>
        </div>

        {/* NEW LAYOUT: Horizontal Card Grid with Connectors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              
              {/* Step card */}
              <div className="relative bg-[#a855f7]/10 backdrop-blur-sm rounded-2xl p-6 border border-[#c084fc]/30 hover:border-[#d8b4fe]/50 hover:bg-[#a855f7]/15 transition-all duration-500 h-full hover:shadow-xl hover:shadow-[#a855f7]/10">
                
                {/* Number badge - floating */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-[#d8b4fe] to-[#c084fc] flex items-center justify-center shadow-lg">
                  <span className="text-[#3b0764] font-bold text-sm">{step.number}</span>
                </div>
                
                {/* Icon */}
                <div className="mt-2 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#d8b4fe]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-[#d8b4fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                    </svg>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-[#f3e8ff] mb-3 leading-tight">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#e9d5ff]/70 text-sm leading-relaxed">
                  {step.description}
                </p>
                
                {/* Decorative line at bottom */}
                <div className="absolute bottom-4 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#c084fc]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Connector arrow between cards (desktop only) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                  <div className="w-6 h-6 rounded-full bg-[#c084fc]/30 backdrop-blur-sm flex items-center justify-center border border-[#d8b4fe]/40">
                    <svg className="w-3 h-3 text-[#d8b4fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section - Redesigned */}
        <div className="text-center mt-12">
          
          {/* Divider with text */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c084fc]/50"></div>
            <span className="text-[#e9d5ff]/50 text-xs uppercase tracking-wider">Ready to start?</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c084fc]/50"></div>
          </div>
          
          {/* CTA Button - Glowing effect */}
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#d8b4fe] to-[#c084fc] rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-300"></div>
            <a 
              href="https://calendly.com/zoyakou"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-3 bg-gradient-to-r from-[#d8b4fe] to-[#c084fc] text-[#3b0764] font-bold py-3.5 px-8 rounded-xl hover:shadow-xl transition-all duration-300 inline-block group-hover:scale-105"
            >
              <span>Book Your Free Strategy Call</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          
          {/* Small trust text */}
          <p className="text-[#e9d5ff]/40 text-sm mt-4">
            No obligation. Just a friendly conversation.
          </p>
        </div>
      </div>
    </section>
  )
}