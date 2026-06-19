import React from 'react'

export default function Section2_Problem() {
  const painPoints = [
    {
      title: "Your calendar looks like a roller coaster",
      description: "One week you're slammed. Next week? Crickets. That unpredictability isn't just stressful — it's killing your cash flow.",
      icon: "M12 8v4l3 3M12 2a10 10 0 1010 10 10 10 0 00-10-10z"
    },
    {
      title: "You're invisible when it matters most",
      description: "When someone in your city searches for a detailer, your competitors pop up. You don't. That's lost business you never even knew about.",
      icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
    },
    {
      title: "Referrals feel like gambling",
      description: "Sure, word-of-mouth is nice. But you can't pay bills with 'hopefully next month.' You need a system that delivers, not just wishful thinking.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
    },
    {
      title: "Leaks in your lead bucket",
      description: "People reach out, you respond, and then... nothing. No follow-up. No reminder. Just ghosted opportunities that could've booked tomorrow.",
      icon: "M18.364 5.636L16.95 7.05m0 0a7 7 0 11-9.9 9.9 7 7 0 019.9-9.9zM12 8v4l3 3"
    },
    {
      title: "Marketing feels like a second job",
      description: "You're already working 10-hour days in the sun. Learning ads, SEO, and CRMs on top of that? Let's be real — that's never going to happen.",
      icon: "M12 6v6m0 0v6m0-6h6m-6 0H6M4 4h16v16H4z"
    },
    {
      title: "Clients love you — then forget you",
      description: "They had a great experience. But without a reminder system, they go elsewhere next time. Your best customers shouldn't be slipping away.",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    }
  ]

  return (
    <section className="relative py-10 md:py-12 bg-transparent overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a855f7]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Redesigned */}
        <div className="text-center mb-14 md:mb-20">
          
          {/* Top Tag */}
          <div className="inline-block mb-5">
            <span className="inline-flex items-center gap-2 bg-[#c084fc]/20 backdrop-blur-sm text-[#e9d5ff] font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-[#c084fc]/40">
              <span className="w-1.5 h-1.5 bg-[#e9d5ff] rounded-full animate-pulse"></span>
              Does This Sound Like You?
            </span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#f3e8ff] mb-6 leading-tight">
            You&apos;re a Great Detailer.
            <span className="block text-[#d8b4fe] mt-2">
              But Consistent Clients?
            </span>
            <span className="block relative inline-block mt-2">
              <span className="relative z-10">That&apos;s a Different Game.</span>
            </span>
          </h2>
          
          {/* Subheadline with accent */}
          <div className="max-w-2xl mx-auto mt-6">
            <div className="relative inline-block">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#d8b4fe] to-[#c084fc] rounded-full"></div>
              <p className="text-base md:text-lg text-[#e9d5ff]/80 pl-5 text-left md:text-center md:pl-0 md:border-l-0">
                I&apos;ve talked to dozens of car detailing owners. Almost every single one is dealing with the same frustrations — even the ones doing incredible work.
              </p>
            </div>
          </div>
        </div>

        {/* Pain Points Grid - Redesigned Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-20">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="group relative bg-[#a855f7]/20 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 border border-[#c084fc]/30 hover:border-[#d8b4fe]/60 hover:bg-[#a855f7]/20 hover:shadow-xl hover:shadow-[#a855f7]/10 overflow-hidden"
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-[#d8b4fe]/20 to-transparent"></div>
              </div>
              
              {/* Icon section - redesigned */}
              <div className="relative mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d8b4fe]/20 to-[#c084fc]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  <svg className="w-7 h-7 text-[#d8b4fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={point.icon} />
                  </svg>
                </div>
                {/* Number indicator */}
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-[#d8b4fe] to-[#c084fc] rounded-full flex items-center justify-center text-xs font-bold text-[#3b0764] shadow-lg">
                  {index + 1}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-[#f3e8ff] mb-3 leading-tight">
                {point.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#e9d5ff]/100 text-sm leading-relaxed">
                {point.description}
              </p>
            
            </div>
          ))}
        </div>

        {/* Transition Bridge - Redesigned */}
        <div className="relative">
          
          {/* Floating glow behind */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-64 h-64 bg-[#d8b4fe]/5 rounded-full blur-3xl"></div>
          </div>
          
          {/* Main bridge component */}
          <div className="relative">
            
            {/* Animated connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c084fc]/50 to-transparent -translate-y-1/2"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 bg-[#a855f7]/15 backdrop-blur-md rounded-2xl md:rounded-full px-6 py-5 md:px-8 md:py-4 border border-[#c084fc]/40 shadow-xl max-w-3xl mx-auto">
              
              {/* Left text */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#d8b4fe]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#d8b4fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <p className="text-[#f3e8ff] font-semibold text-sm md:text-base">
                  These aren&apos;t detailing problems —
                </p>
              </div>
              
              {/* Arrow - rotates on mobile */}
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[#d8b4fe]/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#d8b4fe] transform md:rotate-0 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
              
              {/* Right text */}
              <div className="flex items-center gap-3">
                <p className="text-[#f3e8ff] font-semibold text-sm md:text-base">
                  they&apos;re <span className="text-[#d8b4fe] underline decoration-[#c084fc] underline-offset-4">marketing problems</span>.
                </p>
                <div className="w-8 h-8 rounded-full bg-[#d8b4fe]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#d8b4fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bridge bottom text */}
            <div className="text-center mt-6">
              <p className="text-[#e9d5ff]/60 text-sm">
                And marketing problems? <span className="text-[#d8b4fe] font-semibold">I solve them.</span> Here&apos;s how 👇
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}