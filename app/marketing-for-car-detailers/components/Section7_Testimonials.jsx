import React from 'react'

export default function Section7_Testimonials() {
    const testimonials = [
        {
            name: "Michael Chen",
            role: "Owner, Precision Auto Spa",
            location: "Seattle, WA",
            rating: 5,
            quote: "I was skeptical at first, but Zoya delivered beyond my expectations. My calendar went from empty to fully booked in just over a month. The automated system she built handles everything — I just show up and detail cars now.",
            image: "https://ui-avatars.com/api/?background=8b5cf6&color=fff&name=Michael+Chen"
        },
        {
            name: "Sarah Martinez",
            role: "Founder, Elite Finish Detailing",
            location: "Austin, TX",
            rating: 5,
            quote: "The quality of leads Zoya brings in is incredible. Before working with her, I was getting low-ball inquiries. Now I'm booking high-end ceramic coatings at premium prices. She completely changed who sees my business online.",
            image: "https://ui-avatars.com/api/?background=8b5cf6&color=fff&name=Sarah+Martinez"
        },
        {
            name: "David Okonkwo",
            role: "Lead Detailer, Royal Shine Auto",
            location: "Atlanta, GA",
            rating: 5,
            quote: "What impressed me most is how organized everything became. Zoya set up a system where leads are automatically followed up with. I don't chase customers anymore — they come to me, and they book immediately.",
            image: "https://ui-avatars.com/api/?background=8b5cf6&color=fff&name=David+Okonkwo"
        }
    ]

    const resultStats = [
        {
            value: "$5k → $24k",
            label: "Average Revenue Increase",
            sublabel: "within first 90 days for new clients"
        },
        {
            value: "156",
            label: "Qualified Leads",
            sublabel: "generated across detailing clients in Q4 2024",
            suffix: "+"
        },
        {
            value: "95%",
            label: "Client Retention",
            sublabel: "of clients continue past their first contract"
        }
    ]

    const featuredResult = {
        metric: "187%",
        label: "Average Booking Increase",
        description: "across all active clients within the first 60 days"
    }

    return (
        <section id='testimonials' className="relative py-14 md:py-23 bg-transparent overflow-hidden">
            
            {/* Purple ambient glows */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#d8b4fe]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#a855f7]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#c084fc]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header - New Structure */}
                <div className="text-center mb-20 md:mb-24">
                    
                        {/* Top Tag */}
                    <div className="inline-block mb-5">
                        <span className="inline-flex items-center gap-2 bg-[#c084fc]/20 backdrop-blur-sm text-[#e9d5ff] font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-[#c084fc]/40">
                            <span className="w-1.5 h-1.5 bg-[#e9d5ff] rounded-full animate-pulse"></span>
                              Success Stories
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-[#f3e8ff] mb-6 leading-[1.1]">
                        Real Detailers.
                        <span className="relative inline-block mt-3 block">
                            <span className="relative z-10 bg-gradient-to-r from-[#d8b4fe] to-[#f3e8ff] bg-clip-text text-transparent">
                                Real Results.
                            </span>
                        </span>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-[#e9d5ff]/70 max-w-2xl mx-auto leading-relaxed">
                        Don&apos;t just take my word for it. Here&apos;s what happens when detailers finally get marketing that works.
                    </p>
                </div>

                {/* Featured Result Banner - New Element */}
                <div className="relative mb-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#d8b4fe]/20 via-[#c084fc]/10 to-[#d8b4fe]/20 rounded-3xl blur-xl"></div>
                    <div className="relative bg-gradient-to-r from-[#a855f7]/20 to-[#c084fc]/10 backdrop-blur-md rounded-3xl py-8 px-6 border border-[#d8b4fe]/30 text-center">
                        <div className="inline-block px-3 py-1 rounded-full bg-[#d8b4fe]/20 border border-[#d8b4fe]/40 mb-4">
                            <span className="text-[#e9d5ff]/80 text-xs font-semibold uppercase tracking-wider">Average across all clients</span>
                        </div>
                        <div className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-[#d8b4fe] to-[#f3e8ff] bg-clip-text text-transparent mb-3">
                            {featuredResult.metric}
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-[#f3e8ff] mb-2">
                            {featuredResult.label}
                        </div>
                        <p className="text-[#e9d5ff]/50 text-sm">
                            {featuredResult.description}
                        </p>
                    </div>
                </div>

                {/* Testimonials - New 2+1 Layout Structure */}
                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {/* Testimonial 1 - Left */}
                    <div className="lg:col-span-1">
                        <div className="group bg-[#a855f7]/10 backdrop-blur-sm rounded-2xl p-7 transition-all duration-500 hover:shadow-2xl hover:shadow-[#a855f7]/20 hover:-translate-y-1 border border-[#c084fc]/30 hover:border-[#d8b4fe]/50 h-full flex flex-col">
                            <div className="mb-4">
                                <div className="flex gap-1">
                                    {[...Array(testimonials[0].rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#d8b4fe]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <svg className="w-8 h-8 text-[#d8b4fe]/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-[#e9d5ff]/80 leading-relaxed mb-6 flex-grow">
                                &quot;{testimonials[0].quote}&quot;
                            </p>
                            <div className="flex items-center gap-3 pt-4 border-t border-[#c084fc]/20">
                                <img src={testimonials[0].image} alt={testimonials[0].name} className="w-10 h-10 rounded-full border border-[#d8b4fe]/30" />
                                <div>
                                    <div className="font-bold text-[#f3e8ff] text-sm">{testimonials[0].name}</div>
                                    <div className="text-xs text-[#e9d5ff]/50">{testimonials[0].role}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 - Center (featured style) */}
                    <div className="lg:col-span-1">
                        <div className="group bg-gradient-to-br from-[#a855f7]/20 to-[#c084fc]/15 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-[#a855f7]/30 hover:-translate-y-2 border border-[#d8b4fe]/50 shadow-lg shadow-[#a855f7]/10 h-full flex flex-col relative">
                            <div className="absolute -top-3 left-6 bg-gradient-to-r from-[#d8b4fe] to-[#c084fc] text-[#3b0764] text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                FEATURED
                            </div>
                            <div className="mb-4 mt-2">
                                <div className="flex gap-1">
                                    {[...Array(testimonials[1].rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#d8b4fe]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <svg className="w-8 h-8 text-[#d8b4fe]/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-[#f3e8ff] leading-relaxed mb-6 flex-grow text-base md:text-lg">
                                &quot;{testimonials[1].quote}&quot;
                            </p>
                            <div className="flex items-center gap-3 pt-4 border-t border-[#d8b4fe]/30">
                                <img src={testimonials[1].image} alt={testimonials[1].name} className="w-10 h-10 rounded-full border-2 border-[#d8b4fe]" />
                                <div>
                                    <div className="font-bold text-[#f3e8ff] text-sm">{testimonials[1].name}</div>
                                    <div className="text-xs text-[#e9d5ff]/50">{testimonials[1].role}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 - Right */}
                    <div className="lg:col-span-1">
                        <div className="group bg-[#a855f7]/10 backdrop-blur-sm rounded-2xl p-7 transition-all duration-500 hover:shadow-2xl hover:shadow-[#a855f7]/20 hover:-translate-y-1 border border-[#c084fc]/30 hover:border-[#d8b4fe]/50 h-full flex flex-col">
                            <div className="mb-4">
                                <div className="flex gap-1">
                                    {[...Array(testimonials[2].rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#d8b4fe]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <svg className="w-8 h-8 text-[#d8b4fe]/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-[#e9d5ff]/80 leading-relaxed mb-6 flex-grow">
                                &quot;{testimonials[2].quote}&quot;
                            </p>
                            <div className="flex items-center gap-3 pt-4 border-t border-[#c084fc]/20">
                                <img src={testimonials[2].image} alt={testimonials[2].name} className="w-10 h-10 rounded-full border border-[#d8b4fe]/30" />
                                <div>
                                    <div className="font-bold text-[#f3e8ff] text-sm">{testimonials[2].name}</div>
                                    <div className="text-xs text-[#e9d5ff]/50">{testimonials[2].role}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Stats - New 3-column design */}
                <div className="relative mb-16">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/5 via-[#c084fc]/10 to-[#a855f7]/5 rounded-3xl"></div>
                    
                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                        {resultStats.map((stat, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#d8b4fe] to-[#c084fc] bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                                    {stat.value}
                                    {stat.suffix && <span className="text-xl text-[#e9d5ff]/40">{stat.suffix}</span>}
                                </div>
                                <div className="text-[#f3e8ff] font-semibold text-base mb-1">
                                    {stat.label}
                                </div>
                                <div className="text-[#e9d5ff]/40 text-sm">
                                    {stat.sublabel}
                                </div>
                                {idx < resultStats.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 w-px h-12 bg-gradient-to-b from-transparent via-[#c084fc]/50 to-transparent"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final Trust Indicator - New Structure */}
                <div className="text-center">
                    <div className="inline-flex flex-col items-center gap-4">
                        <div className="flex gap-2">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="w-1 h-1 rounded-full bg-[#d8b4fe] animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
                            ))}
                        </div>
                        <p className="text-[#e9d5ff]/40 text-sm uppercase tracking-wider">
                            Join detailing business owners who never worry about bookings again
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}