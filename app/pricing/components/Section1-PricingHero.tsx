
'use client';
// components/sections/PricingHero.tsx
import React from 'react';
import { Calendar, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const PricingHero: React.FC = () => {
    return (
        <section className="relative mt-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 py-24 px-4 overflow-hidden border-b border-gray-800">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto text-center max-w-4xl relative z-10">
                {/* Trust badge */}
                <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-1.5 mb-6">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-300">Straightforward Rates</span>
                </div>

                {/* Main heading */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                        Fair & Transparent
                    </span>
                    <br />
                    <span className="text-white">Pricing For Every Need</span>
                </h1>

                {/* Subheading */}
                <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Tailored packages built to match your goals and budget.
                    What you see is exactly what you get — no surprises, no fine print.
                </p>

                {/* CTA Buttons with icons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <a
                        href="https://calendly.com/zoyakou"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 inline-flex items-center"
                    >
                        <span className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Book a Consultation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                </div>

                {/* "What's Included" divider */}
                <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-800"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-gradient-to-r from-gray-900 to-gray-900 px-6 py-2 text-sm font-medium text-gray-400 uppercase tracking-wider flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-purple-400" />
                            Everything You Get
                            <CheckCircle className="w-4 h-4 text-pink-400" />
                        </span>
                    </div>
                </div>

                {/* Feature chips */}
                <div className="flex flex-wrap justify-center gap-3">
                    {['Custom Solutions', 'Unlimited Revisions', 'Priority Support', 'Weekly Updates'].map((feature) => (
                        <span key={feature} className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-gray-700">
                            {feature}
                        </span>
                    ))}
                </div>
            </div>

            {/* Add this to your global CSS or tailwind.config.js for the gradient animation */}
            <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
        </section>
    );
};

export default PricingHero;