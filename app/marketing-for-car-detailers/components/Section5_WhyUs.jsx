import React from 'react'

export default function Section5_WhyUs() {
    const differentiators = [
        {
            title: "Completely Hands-Off For You",
            description: "You don't need to learn ads, CRMs, or SEO. I handle every single thing from setup to ongoing management. Your only job? Detail cars and collect payments.",
            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        },
        {
            title: "Car Detailing Is All I Do",
            description: "I work exclusively with car detailing businesses. I know your market, your customers, your seasonal patterns, and exactly what messaging gets detailers booked solid.",
            icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9"
        },
        {
            title: "Everything Under One Roof",
            description: "Ads, local SEO, CRM automation, content creation, reputation management — all from one person. No juggling multiple freelancers or agencies.",
            icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        },
        {
            title: "Results Within 30 Days",
            description: "I don't make you wait half a year to see results. My systems are built to generate leads and bookings within the first 30 days of going live.",
            icon: "M13 10V3L4 14h7v7l9-11h-7z"
        },
        {
            title: "Full Transparency, Always",
            description: "You always know exactly what's working. Monthly performance reports, live dashboard access, and regular check-ins keep you in the loop at every stage.",
            icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        },
        {
            title: "Flexible Plans, Fair Pricing",
            description: "Plans starting at $990/month — built for detailers at every stage. No massive upfront costs. No long-term lock-in on starter plans.",
            icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        }
    ]

    const stats = [
        {
            value: "3x",
            label: "Average Booking Lift",
            sublabel: "for my detailing clients within 60 days"
        },
        {
            value: "30",
            label: "First Booking",
            sublabel: "average time after launching",
            suffix: "Days"
        },
        {
            value: "100",
            label: "Fully Managed",
            sublabel: "I handle everything — you just detail",
            suffix: "%"
        }
    ]

    return (
        <section className="relative py-20 md:py-28 bg-transparent overflow-hidden">
            
            {/* Purple ambient glows */}
            <div className="absolute top-20 right-20 w-80 h-80 bg-[#a855f7]/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#c084fc]/15 rounded-full blur-3xl pointer-events-none"></div>
            
            {/* Subtle dot pattern overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #d8b4fe 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header - Redesigned with purple theme */}
                <div className="text-center mb-16 md:mb-20">
                    
                    {/* Top Tag */}
                    <div className="inline-block mb-5">
                        <span className="inline-flex items-center gap-2 bg-[#c084fc]/20 backdrop-blur-sm text-[#e9d5ff] font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-[#c084fc]/40">
                            <span className="w-1.5 h-1.5 bg-[#e9d5ff] rounded-full animate-pulse"></span>
                            Why Work With Me
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-[#f3e8ff] mb-6 leading-tight">
                        I Don&apos;t Just Run Ads.
                        <span className="relative inline-block mt-2 block">
                            <span className="relative z-10 text-[#d8b4fe]">I Build the Whole System</span>
                        </span>
                        <span className="block text-[#e9d5ff]/60 text-lg md:text-xl font-normal mt-4 max-w-2xl mx-auto">
                            That Keeps Your Calendar Full — Month After Month.
                        </span>
                    </h2>
                </div>

                {/* Differentiators Grid - NEW LAYOUT: 3-column grid instead of 2-column split */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {differentiators.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="group bg-[#a855f7]/10 backdrop-blur-sm rounded-2xl p-6 border border-[#c084fc]/30 hover:border-[#d8b4fe]/50 hover:bg-[#a855f7]/15 transition-all duration-500 hover:shadow-xl hover:shadow-[#a855f7]/10"
                        >
                            <div className="flex flex-col items-start gap-4">
                                {/* Icon with gradient */}
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#d8b4fe] to-[#c084fc] rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                                    <div className="relative w-14 h-14 bg-gradient-to-br from-[#d8b4fe]/20 to-[#c084fc]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-7 h-7 text-[#d8b4fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                        </svg>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-[#f3e8ff] mb-2 group-hover:text-[#d8b4fe] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#e9d5ff]/70 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                
                                {/* Decorative corner line */}
                                <div className="absolute bottom-3 right-3 w-8 h-px bg-gradient-to-r from-[#d8b4fe] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Bar - Redesigned with purple theme */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="relative text-center px-6 py-5 group">
                                {/* Divider (except last) */}
                                {idx < stats.length - 1 && (
                                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-[#c084fc]/50 to-transparent"></div>
                                )}
                                
                                {/* Value */}
                                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#d8b4fe] to-[#c084fc] bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                                    {stat.value}{stat.suffix && <span className="text-xl md:text-2xl text-[#e9d5ff]/40"> {stat.suffix}</span>}
                                </div>

                                {/* Label */}
                                <div className="text-[#e9d5ff]/60 font-semibold text-sm mb-1 uppercase tracking-wide">
                                    {stat.label}
                                </div>

                                {/* Sublabel */}
                                <div className="text-[#e9d5ff]/40 text-xs">
                                    {stat.sublabel}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Trust Badge - Redesigned */}
                <div className="text-center">
                    <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-3 bg-[#a855f7]/15 backdrop-blur-sm rounded-full border border-[#c084fc]/40 hover:border-[#d8b4fe]/60 transition-all duration-300">
                        {/* Animated dots */}
                        <div className="flex gap-1.5">
                            <span className="w-1.5 h-1.5 bg-[#d8b4fe] rounded-full animate-pulse"></span>
                            <span className="w-1.5 h-1.5 bg-[#c084fc] rounded-full animate-pulse delay-150"></span>
                            <span className="w-1.5 h-1.5 bg-[#d8b4fe] rounded-full animate-pulse delay-300"></span>
                        </div>
                        
                        <span className="text-[#e9d5ff]/80 text-sm font-medium">
                            Trusted by detailing businesses across the USA
                        </span>
                        
                        {/* Star icons */}
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-3.5 h-3.5 text-[#d8b4fe]/60" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Small note about flexibility */}
                <div className="text-center mt-6">
                    <p className="text-[#e9d5ff]/30 text-sm">
                        No lock-in contracts on starter plans • Cancel anytime
                    </p>
                </div>
            </div>
        </section>
    )
}