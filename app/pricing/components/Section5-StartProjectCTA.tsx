// components/sections/StartProjectCTA.tsx
import React from 'react';
import {
    Calendar,
    Clock,
    MessageCircle,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    Shield,
    Zap,
    Users
} from 'lucide-react';

export const StartProjectCTA: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950 py-24 px-4 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/80 rounded-3xl p-8 md:p-12 backdrop-blur-xl border border-gray-800 shadow-2xl">

                    {/* Decorative badge */}
                    <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6 mx-auto w-fit">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-300 font-medium">Limited Availability</span>
                    </div>

                    {/* Main heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Ready to Launch Your
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Digital Product?
                        </span>
                    </h2>

                    {/* Subheading */}
                    <p className="text-gray-400 text-center text-lg mb-8 max-w-2xl mx-auto">
                        Let&apos;s collaborate and transform your vision into a powerful, scalable application that users will love.
                    </p>

                    {/* Value propositions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {[
                            { icon: Clock, text: "48hr Discovery Call", color: "from-blue-500 to-blue-600" },
                            { icon: Shield, text: "NDA Protection", color: "from-purple-500 to-purple-600" },
                            { icon: Zap, text: "Fast Turnaround", color: "from-pink-500 to-pink-600" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-center gap-2 bg-gray-800/30 rounded-xl px-4 py-2 border border-gray-700/50">
                                <div className={`p-1 rounded-lg bg-gradient-to-r ${item.color}`}>
                                    <item.icon className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-gray-300 text-sm">{item.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Main CTA section */}
                    <div className="bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-purple-600/10 rounded-2xl p-6 md:p-8 mb-6 border border-purple-500/20">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                                    <Users className="w-5 h-5 text-purple-400" />
                                    <span className="text-purple-300 font-semibold">No pressure, just conversation</span>
                                </div>
                                <p className="text-gray-300">
                                    Share your project requirements, and I&apos;ll provide honest feedback and a tailored roadmap — completely free.
                                </p>
                            </div>

                            <a
                                href="https://calendly.com/zoyakou"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 flex-shrink-0 inline-flex items-center"
                            >
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    Schedule Free Consultation
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Alternative contact options */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 text-sm">
                        <div className="flex items-center gap-2 text-gray-500">
                            <MessageCircle className="w-4 h-4" />
                            <span>Prefer email?</span>
                            <a
                                href="mailto:zoyakou2@gmail.com"
                                className="text-purple-400 hover:text-purple-300 transition-colors hover:underline"
                            >
                                zoyakou2@gmail.com
                            </a>
                        </div>
                        <div className="hidden sm:block text-gray-700">•</div>
                        <div className="flex items-center gap-2 text-gray-500">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Response within 24 hours</span>
                        </div>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap justify-center gap-4 pt-4 border-t border-gray-800">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Shield className="w-3 h-3" />
                            <span>100% Confidential</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>No obligation</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>Flexible scheduling</span>
                        </div>
                    </div>

                    {/* Quote with author */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-500 text-sm italic">
                            &quot;Every great product starts with a conversation. Let&apos;s make yours happen.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};