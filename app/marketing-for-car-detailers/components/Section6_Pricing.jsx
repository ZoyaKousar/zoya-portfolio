"use client"
import React from 'react'

export default function Section6_Pricing() {

    const plans = [
        {
            name: "Starter",
            price: "$990",
            period: "/month",
            contract: "1–3 months",
            setup: "$299 one-time",
            adSpend: "$500/month recommended",
            featured: false,
            buttonText: "Get Started",
            features: [
                "Google Business Profile optimization",
                "Meta Ads management (ceramic + detail campaigns)",
                "Ad creative design (Canva + CapCut)",
                "CRM setup (sub-account + pipeline)",
                "Basic lead follow-up automation",
                "4 social media posts/month",
                "Monthly performance report"
            ]
        },
        {
            name: "Growth",
            price: "$1,990",
            period: "/month",
            contract: "6 months",
            setup: "Waived",
            adSpend: "$1,000/month recommended",
            featured: true,
            badge: "MOST POPULAR",
            buttonText: "Get Started",
            features: [
                "Everything in Starter, plus:",
                "Google Ads + Local Service Ads management",
                "AI voiceovers for video ads",
                "Mobile-optimized website with booking",
                "8 social posts + 2 Reels/month",
                "Automated review collection",
                "Lead tracking & follow-up system",
                "Bi-weekly performance reports",
                "Monthly strategy call with me",
                "Seasonal campaign planning"
            ]
        },
        {
            name: "Elite",
            price: "$2,990",
            period: "/month",
            contract: "12 months",
            setup: "Waived",
            adSpend: "$2,000/month recommended",
            featured: false,
            buttonText: "Get Started",
            features: [
                "Everything in Growth, plus:",
                "Local SEO & on-page optimization",
                "Full CRM automation (nurture + reminders)",
                "12 social posts + 4 Reels + 2 TikToks/month",
                "Past client reactivation campaigns",
                "Weekly performance reports",
                "Bi-weekly strategy calls with me",
                "Priority support (24hr response)",
                "Free web maintenance (first 6 months)"
            ]
        }
    ]

    const addOns = [
        { name: "Google Ads / LSA Management", price: "+$299", period: "/month" },
        { name: "Additional Meta Campaign", price: "+$230", period: "/month" },
        { name: "Extra Reels / TikToks", price: "+$99", period: "/month" },
        { name: "YouTube Ads Management", price: "+$250", period: "/month" }
    ]

    const oneTimeFees = [
        { name: "Full CRM Setup", price: "$299" },
        { name: "Custom Website Design", price: "$799 – $1,499" },
        { name: "Mobile App Development", price: "$799 – $1,499" },
        { name: "Google Profile Setup", price: "$199" },
        { name: "Ads Account Setup", price: "$199" }
    ]

    const customServices = [
        { name: "Google Profile Management", price: "$190" },
        { name: "Local Directory Listings", price: "$90" },
        { name: "Meta Ads (1 campaign)", price: "$190" },
        { name: "Meta Ads (2 campaigns)", price: "$350" },
        { name: "Ad Creative Design", price: "$90" },
        { name: "AI Voiceover Production", price: "$150" },
        { name: "CRM Setup & Automation", price: "$290" },
        { name: "Lead Management System", price: "$190" },
        { name: "Review Collection Setup", price: "$90" },
        { name: "Social Posts (4/month)", price: "$240" },
        { name: "Social Posts (8/month)", price: "$480" },
        { name: "Reels / TikToks (2/month)", price: "$140" },
        { name: "Reels / TikToks (4/month)", price: "$280" },
        { name: "Google/LSA Ads Management", price: "$390" },
        { name: "Local SEO Optimization", price: "$290" },
        { name: "Client Reactivation Campaigns", price: "$190" },
        { name: "Monthly Performance Report", price: "$90" },
        { name: "Monthly Strategy Call", price: "$90" }
    ]

    return (
        <section id='pricing' className="relative py-20 md:py-28 bg-transparent overflow-hidden">
            
            {/* Purple ambient glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d8b4fe]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#a855f7]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    
                    {/* Top Tag */}
                    <div className="inline-block mb-5">
                        <span className="inline-flex items-center gap-2 bg-[#c084fc]/20 backdrop-blur-sm text-[#e9d5ff] font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-[#c084fc]/40">
                            <span className="w-1.5 h-1.5 bg-[#e9d5ff] rounded-full animate-pulse"></span>
                            Clear. Fair. Transparent.
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-[#f3e8ff] mb-6 leading-tight">
                        Plans Built for{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-[#d8b4fe]">Detailing Businesses</span>
                        </span>
                        <span className="block text-[#e9d5ff]/60 text-lg md:text-xl font-normal mt-4">
                            No hidden fees. No surprises. Just results.
                        </span>
                    </h2>
                </div>

                {/* 3 Main Plans Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`relative group bg-[#a855f7]/10 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#a855f7]/20 hover:-translate-y-1 border ${plan.featured ? 'border-[#d8b4fe]/60 shadow-lg shadow-[#a855f7]/20 scale-105' : 'border-[#c084fc]/30 hover:border-[#d8b4fe]/40'
                                }`}
                        >
                            {/* Most Popular Badge */}
                            {plan.badge && (
                                <div className="absolute top-4 right-4 z-20">
                                    <div className="bg-gradient-to-r from-[#d8b4fe] to-[#c084fc] text-[#3b0764] text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        {plan.badge}
                                    </div>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className={`p-6 text-center border-b ${plan.featured ? 'border-[#d8b4fe]/30' : 'border-[#c084fc]/20'}`}>
                                <h3 className={`text-2xl font-bold mb-3 ${plan.featured ? 'text-[#d8b4fe]' : 'text-[#f3e8ff]'}`}>
                                    {plan.name}
                                </h3>
                                <div className="mb-2">
                                    <span className="text-5xl font-black text-[#f3e8ff]">{plan.price}</span>
                                    <span className="text-[#e9d5ff]/50 text-base ml-1">{plan.period}</span>
                                </div>
                                <div className="text-sm text-[#e9d5ff]/50">
                                    Contract: {plan.contract}
                                </div>
                            </div>

                            {/* Plan Features */}
                            <div className="p-6">
                                <div className="space-y-2.5 mb-6 max-h-[320px] overflow-y-auto custom-scroll">
                                    {plan.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-2 text-sm">
                                            <svg className="w-4 h-4 text-[#d8b4fe] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className={`text-sm ${feature.includes('Everything') ? 'text-[#d8b4fe] font-semibold' : 'text-[#e9d5ff]/80'}`}>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Setup & Ad Spend */}
                                <div className="border-t border-[#c084fc]/30 pt-4 mb-6 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#e9d5ff]/60">Setup fee:</span>
                                        <span className="font-semibold text-[#f3e8ff]">{plan.setup}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#e9d5ff]/60">Ad spend (recommended):</span>
                                        <span className="font-semibold text-[#f3e8ff]">{plan.adSpend}</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <a
                                    href="https://calendly.com/zoyakou"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 text-center block ${plan.featured
                                            ? 'bg-gradient-to-r from-[#d8b4fe] to-[#c084fc] text-[#3b0764] hover:shadow-xl hover:scale-105'
                                            : 'border-2 border-[#c084fc]/50 text-[#f3e8ff] hover:bg-[#c084fc]/20 hover:border-[#d8b4fe]'
                                        }`}
                                >
                                    {plan.buttonText} →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Customized Plan Section */}
                <div className="relative mb-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/5 via-[#c084fc]/10 to-[#a855f7]/5 rounded-3xl blur-xl"></div>
                    
                    <div className="relative bg-[#a855f7]/10 backdrop-blur-md rounded-3xl border border-[#c084fc]/40 overflow-hidden">
                        <div className="bg-gradient-to-r from-[#d8b4fe]/20 to-[#c084fc]/20 px-6 py-5 text-center border-b border-[#c084fc]/30">
                            <h3 className="text-2xl font-bold text-[#f3e8ff]">Build Your Own Plan — Pick & Choose</h3>
                            <p className="text-[#e9d5ff]/60 text-sm mt-1">Only pay for what you actually need</p>
                        </div>

                        <div className="p-6 md:p-8">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center gap-4 text-sm text-[#e9d5ff]/70">
                                    <span className="flex items-center gap-1">Contract: <span className="font-semibold text-[#d8b4fe]">Up to 12 months</span></span>
                                    <span className="w-1 h-1 rounded-full bg-[#c084fc]/50"></span>
                                    <span className="flex items-center gap-1">Price: <span className="font-semibold text-[#d8b4fe]">From $99/month</span></span>
                                </div>
                                <p className="text-[#e9d5ff]/50 text-sm mt-3 max-w-2xl mx-auto">
                                    Pick the services that fit your business right now — add or remove anytime with 7 days notice.
                                </p>
                            </div>

                            {/* Custom Services Grid */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                                {customServices.map((service, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-2.5 px-3 bg-[#a855f7]/5 rounded-xl hover:bg-[#c084fc]/10 transition-all duration-300 border border-[#c084fc]/20 hover:border-[#d8b4fe]/40">
                                        <span className="text-sm text-[#e9d5ff]/80">{service.name}</span>
                                        <span className="font-semibold text-[#d8b4fe] text-sm">{service.price}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Important Note */}
                            <div className="bg-[#d8b4fe]/10 border-l-4 border-[#d8b4fe] p-4 rounded-r-xl">
                                <p className="text-sm text-[#e9d5ff]/80">
                                    <span className="font-bold text-[#d8b4fe]">Smart bundling:</span> Bundling services into Starter, Growth, or Elite saves you significantly more than picking individually.
                                    Need 4+ services? A package always gives you better value.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add-ons & One-Time Fees */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Add-ons */}
                    <div className="bg-[#a855f7]/10 backdrop-blur-sm rounded-2xl border border-[#c084fc]/30 overflow-hidden hover:border-[#d8b4fe]/40 transition-all duration-300">
                        <div className="bg-[#c084fc]/20 px-6 py-4 border-b border-[#c084fc]/30">
                            <h3 className="font-bold text-[#f3e8ff] text-lg">
                                Add-ons — Bolt onto Any Plan
                            </h3>
                        </div>
                        <div className="p-6">
                            <div className="space-y-3">
                                {addOns.map((addon, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-2 border-b border-[#c084fc]/20 last:border-0">
                                        <span className="text-[#e9d5ff]/80">{addon.name}</span>
                                        <span className="font-semibold text-[#d8b4fe]">{addon.price}{addon.period}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* One-Time Setup Fees */}
                    <div className="bg-[#a855f7]/10 backdrop-blur-sm rounded-2xl border border-[#c084fc]/30 overflow-hidden hover:border-[#d8b4fe]/40 transition-all duration-300">
                        <div className="bg-[#c084fc]/20 px-6 py-4 border-b border-[#c084fc]/30">
                            <h3 className="font-bold text-[#f3e8ff] text-lg">
                                One-Time Setup Fees
                            </h3>
                        </div>
                        <div className="p-6">
                            <div className="space-y-3">
                                {oneTimeFees.map((fee, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-2 border-b border-[#c084fc]/20 last:border-0">
                                        <span className="text-[#e9d5ff]/80">{fee.name}</span>
                                        <span className="font-semibold text-[#d8b4fe]">{fee.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="text-center mb-12">
                    <div className="inline-block bg-[#a855f7]/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-[#c084fc]/30">
                        <p className="text-sm text-[#e9d5ff]/70">
                            <span className="font-bold text-[#d8b4fe]">Important note:</span> Ad spend (Meta, Google, YouTube) is paid directly by you to the platform
                            and is NOT included in any plan price. My fees cover strategy, setup, and management only.
                        </p>
                    </div>
                </div>

                {/* Final CTA Section */}
                <div className="text-center">
                    <div className="max-w-2xl mx-auto">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#d8b4fe]/50 to-transparent mx-auto mb-6"></div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-[#f3e8ff] mb-4">
                            Not Sure Which Plan Fits?
                        </h3>
                        
                        <p className="text-[#e9d5ff]/70 mb-6">
                            Book a free 15-minute strategy call and I&apos;ll recommend the exact plan that matches
                            your business stage and budget — no obligation, no pressure.
                        </p>

                        <div className="relative inline-block group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#d8b4fe] to-[#c084fc] rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                            <a
                                href="https://calendly.com/zoyakou"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-flex items-center gap-3 bg-gradient-to-r from-[#d8b4fe] to-[#c084fc] text-[#3b0764] font-bold py-3.5 px-8 rounded-full hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                            >
                                <span>Book Your Free Strategy Call</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>

                        <div className="flex flex-wrap justify-center gap-5 mt-8 text-sm text-[#e9d5ff]/50">
                            <span>Free call</span>
                            <span className="w-1 h-1 rounded-full bg-[#c084fc]/50"></span>
                            <span>No obligation</span>
                            <span className="w-1 h-1 rounded-full bg-[#c084fc]/50"></span>
                            <span>Affordable plans</span>
                            <span className="w-1 h-1 rounded-full bg-[#c084fc]/50"></span>
                            <span>Results in 30 days</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom scrollbar styles */}
            <style jsx>{`
                .custom-scroll::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scroll::-webkit-scrollbar-track {
                    background: rgba(192, 132, 252, 0.1);
                    border-radius: 10px;
                }
                .custom-scroll::-webkit-scrollbar-thumb {
                    background: rgba(216, 180, 254, 0.4);
                    border-radius: 10px;
                }
                .custom-scroll::-webkit-scrollbar-thumb:hover {
                    background: rgba(216, 180, 254, 0.6);
                }
            `}</style>
        </section>
    )
}