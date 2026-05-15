"use client"
import React, { useState } from 'react'

export default function Section8_FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "Do I need any marketing experience?",
            answer: "Not at all. That's the whole point of working with me. I handle 100% of the setup and management. You focus on detailing cars — I handle everything else."
        },
        {
            question: "How quickly will I see results?",
            answer: "Most clients see their first leads within 7-14 days of launch. Within 30 days, you should have consistent bookings coming in. The system is designed for speed."
        },
        {
            question: "Is ad spend included in your pricing?",
            answer: "Ad spend is separate from my management fee. You pay Meta or Google directly. I help you determine the right budget and manage every dollar for maximum ROI."
        },
        {
            question: "Can I start with just one service?",
            answer: "Absolutely. My Customized Plan lets you pick exactly what you need — nothing more. Start small, prove the results, then scale up as your business grows."
        },
        {
            question: "Do you work with new detailing businesses?",
            answer: "Yes, and I love helping new businesses get traction fast. The Starter plan is perfect for detailers who are just getting started and want to build momentum."
        },
        {
            question: "What makes you different from an agency?",
            answer: "I'm not an agency — I'm a specialist who focuses exclusively on car detailing businesses. You get direct access to me, not an account manager. Every strategy is custom-built for your specific market."
        },
        {
            question: "What kind of commitment do you require?",
            answer: "Starter: 1-3 months. Growth: 6 months. Elite: 12 months. Longer commitments get better pricing and allow me to drive stronger, compounding results."
        },
        {
            question: "Do you guarantee results?",
            answer: "I guarantee 100% effort, transparency, and full management of your marketing. While I can't control ad platforms or algorithms, I've never had a client who didn't see significant improvement in their bookings."
        }
    ]

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    // Split FAQs into two columns for better layout
    const leftColumnFaqs = faqs.slice(0, 4)
    const rightColumnFaqs = faqs.slice(4, 8)

    return (
        <section className="relative py-24 md:py-32 bg-transparent overflow-hidden">
            
            {/* Ambient purple glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d8b4fe]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#a855f7]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#c084fc]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header - Minimal & Bold */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-6">
                        <div className="flex items-center gap-2 bg-[#c084fc]/20 backdrop-blur-sm px-4 py-2 rounded-full border border-[#d8b4fe]/30">
                            <span className="text-[#e9d5ff] text-xs font-semibold uppercase tracking-wider">Answers</span>
                            <span className="w-1 h-1 rounded-full bg-[#d8b4fe]"></span>
                            <span className="text-[#e9d5ff] text-xs font-semibold uppercase tracking-wider">Clarity</span>
                            <span className="w-1 h-1 rounded-full bg-[#d8b4fe]"></span>
                            <span className="text-[#e9d5ff] text-xs font-semibold uppercase tracking-wider">Action</span>
                        </div>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#f3e8ff] mb-6">
                        <span className="text-[#d8b4fe]">Questions?</span>
                        <br />
                        <span>I&apos;ve Got Answers.</span>
                    </h2>

                    <p className="text-lg text-[#e9d5ff]/60 max-w-xl mx-auto">
                        Everything you need to know before we start working together.
                    </p>
                </div>

                {/* FAQ Grid - Split Column Layout */}
                <div className="grid lg:grid-cols-2 gap-6 mb-24">
                    
                    {/* Left Column */}
                    <div className="space-y-4">
                        {leftColumnFaqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`group transition-all duration-300 cursor-pointer ${openIndex === idx ? 'active' : ''}`}
                                onClick={() => toggleFAQ(idx)}
                            >
                                <div className={`bg-[#a855f7]/10 backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden ${
                                    openIndex === idx 
                                        ? 'border-[#d8b4fe] shadow-lg shadow-[#a855f7]/20' 
                                        : 'border-[#c084fc]/30 hover:border-[#d8b4fe]/50 hover:bg-[#a855f7]/15'
                                }`}>
                                    {/* Question */}
                                    <div className="flex justify-between items-center p-5 gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className={`text-xs font-mono font-bold transition-colors duration-200 ${
                                                    openIndex === idx ? 'text-[#d8b4fe]' : 'text-[#e9d5ff]/40'
                                                }`}>
                                                    {(idx + 1).toString().padStart(2, '0')}
                                                </span>
                                                <div className={`w-8 h-px transition-all duration-300 ${
                                                    openIndex === idx ? 'w-12 bg-[#d8b4fe]' : 'w-8 bg-[#c084fc]/30'
                                                }`}></div>
                                            </div>
                                            <h3 className={`font-semibold text-base md:text-lg leading-tight transition-colors duration-200 ${
                                                openIndex === idx ? 'text-[#d8b4fe]' : 'text-[#f3e8ff] group-hover:text-[#d8b4fe]/90'
                                            }`}>
                                                {faq.question}
                                            </h3>
                                        </div>
                                        
                                        {/* Plus/Minus Icon */}
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                            openIndex === idx 
                                                ? 'bg-[#d8b4fe] rotate-45' 
                                                : 'bg-[#c084fc]/20 group-hover:bg-[#d8b4fe]/30'
                                        }`}>
                                            <svg className={`w-5 h-5 transition-all duration-300 ${
                                                openIndex === idx ? 'text-[#3b0764]' : 'text-[#d8b4fe]'
                                            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Answer */}
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                        <div className="px-5 pb-5 pt-2">
                                            <div className="w-12 h-px bg-gradient-to-r from-[#d8b4fe] to-transparent mb-4"></div>
                                            <p className="text-[#e9d5ff]/70 text-sm leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        {rightColumnFaqs.map((faq, idx) => {
                            const actualIndex = idx + 4
                            return (
                                <div
                                    key={actualIndex}
                                    className={`group transition-all duration-300 cursor-pointer ${openIndex === actualIndex ? 'active' : ''}`}
                                    onClick={() => toggleFAQ(actualIndex)}
                                >
                                    <div className={`bg-[#a855f7]/10 backdrop-blur-sm rounded-xl border transition-all duration-300 overflow-hidden ${
                                        openIndex === actualIndex 
                                            ? 'border-[#d8b4fe] shadow-lg shadow-[#a855f7]/20' 
                                            : 'border-[#c084fc]/30 hover:border-[#d8b4fe]/50 hover:bg-[#a855f7]/15'
                                    }`}>
                                        {/* Question */}
                                        <div className="flex justify-between items-center p-5 gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className={`text-xs font-mono font-bold transition-colors duration-200 ${
                                                        openIndex === actualIndex ? 'text-[#d8b4fe]' : 'text-[#e9d5ff]/40'
                                                    }`}>
                                                        {(actualIndex + 1).toString().padStart(2, '0')}
                                                    </span>
                                                    <div className={`w-8 h-px transition-all duration-300 ${
                                                        openIndex === actualIndex ? 'w-12 bg-[#d8b4fe]' : 'w-8 bg-[#c084fc]/30'
                                                    }`}></div>
                                                </div>
                                                <h3 className={`font-semibold text-base md:text-lg leading-tight transition-colors duration-200 ${
                                                    openIndex === actualIndex ? 'text-[#d8b4fe]' : 'text-[#f3e8ff] group-hover:text-[#d8b4fe]/90'
                                                }`}>
                                                    {faq.question}
                                                </h3>
                                            </div>
                                            
                                            {/* Plus/Minus Icon */}
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                                openIndex === actualIndex 
                                                    ? 'bg-[#d8b4fe] rotate-45' 
                                                    : 'bg-[#c084fc]/20 group-hover:bg-[#d8b4fe]/30'
                                            }`}>
                                                <svg className={`w-5 h-5 transition-all duration-300 ${
                                                    openIndex === actualIndex ? 'text-[#3b0764]' : 'text-[#d8b4fe]'
                                                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Answer */}
                                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                            openIndex === actualIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                            <div className="px-5 pb-5 pt-2">
                                                <div className="w-12 h-px bg-gradient-to-r from-[#d8b4fe] to-transparent mb-4"></div>
                                                <p className="text-[#e9d5ff]/70 text-sm leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Still Have Questions? Banner - New Section */}
                <div className="relative mb-16">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/20 to-[#c084fc]/20 rounded-2xl blur-xl"></div>
                    
                    <div className="relative bg-gradient-to-r from-[#a855f7]/30 to-[#c084fc]/30 backdrop-blur-md rounded-2xl p-8 md:p-10 text-center border border-[#d8b4fe]/30">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8b4fe]/20 border border-[#d8b4fe]/40 mb-5">
                            <span className="text-[#e9d5ff] text-xs font-semibold">Still Curious?</span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-[#f3e8ff] mb-3">
                            Didn&apos;t Find Your Answer?
                        </h3>
                        
                        <p className="text-[#e9d5ff]/70 mb-6 max-w-md mx-auto">
                            I&apos;m happy to answer any specific questions about your business during our call.
                        </p>
                        
                        <a
                            href="https://calendly.com/zoyakou"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#d8b4fe] text-[#3b0764] font-bold py-3 px-6 rounded-xl hover:shadow-xl transition-all duration-300 group"
                        >
                            <span>Ask Me Anything</span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="text-center">
                    <div className="flex items-center justify-center gap-3 text-[#e9d5ff]/30 text-xs">
                        <span>Transparent</span>
                        <span className="w-1 h-1 rounded-full bg-[#c084fc]/50"></span>
                        <span>No Pressure</span>
                        <span className="w-1 h-1 rounded-full bg-[#c084fc]/50"></span>
                        <span>Results-Driven</span>
                    </div>
                </div>
            </div>
        </section>
    )
}