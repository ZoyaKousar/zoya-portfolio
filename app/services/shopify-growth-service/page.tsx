import ServicesSection from '@/app/components/shopify-service';
import Image from 'next/image';
import React from 'react'
import { Star } from "lucide-react"; // Or use any star icon library
import ContactSection from '@/app/components/contactForm';
import PricingPlans from '@/app/components/marketing-priceplan';


const page = () => {
    const services = [
        {
            id: "1",
            title: "Site Optimization and Speed Fixes",
            description: "Slow stores kill conversions. I refactor your Shopify theme for speed, mobile UX, and performance aligned with Core Web Vitals.",
        },
        {
            id: "2",
            title: "Cart Recovery and Checkout Upgrades",
            description: "Let’s stop bleeding sales. I audit and optimize your abandonment flows, checkout steps, and upsell triggers to keep customers moving, not bouncing.",
        },
        {
            id: "3",
            title: "Inventory and Fulfillment Automation",
            description: "No more overselling. I integrate real-time inventory tools and backend flows so your operations scale as fast as your sales do.",
        },
        {
            id: "4",
            title: "SEO and Organic Growth",
            description: "Keyword-rich product pages, optimized site structure, and technical SEO that actually moves rankings. More visibility means more revenue.",
        },
        {
            id: "5",
            title: "Email and Retention Systems",
            description: "One-time customers are expensive. I build behavioral email flows using Klaviyo that increase lifetime value and post-purchase engagement.",
        },
        {
            id: "6",
            title: "B2B Shopify Funnels",
            description: "For hybrid brands or wholesale ops, I build Shopify-based lead funnels, LinkedIn automations, and HubSpot-integrated contact flows that generate qualified leads.",
        }
    ];

    const testimonials = [
        {
            id: 1,
            rating: 5,
            feedback: "You Didn’t Just Fix Things — You Made Us Scalable.",
            author: "E-Commerce Director, USA Toyz",
            platforms: ["test-fiverr", "test-upwork"],
        },
        {
            id: 2,
            rating: 5,
            feedback: "Zoya Built Our Shopify System Like It Was A Team Member.",
            author: "Founder, CodeAutomationAI",
            platforms: ["test-fiverr", "test-upwork"],
        },
    ];

    return (
        <div className='px-6'>
            <section className="flex flex-col md:flex-row items-center justify-between w-full mt-24 max-w-6xl mx-auto py-10 md:px-16 md:py-16">
                {/* Left Side - Text */}
                <div className="md:w-6/12 w-full text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">E-commerce Growth Services for Shopify Brands</h1>
                    <h2 className="text-2xl font-semibold text-white mt-2">
                        Smarter Builds. Better Conversions. Real Scale.
                    </h2>
                    <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                        You&apos;re not here to just have a store, you&apos;re here to sell and scale.
                        I help Shopify brands stop babysitting the backend and start growing with smarter systems, better conversions, and strategies that actually move the needle.
                        Ready to unlock the next stage?                    </p>
                </div>
                {/* Right Side - Image */}
                <div className="md:w-6/12 w-full flex justify-center md:justify-end mt-6 md:mt-0">
                    <img
                        src="/shopify-1.png" // Change this to the actual image path
                        alt="Shopify Product Manager"
                        className="rounded-lg shadow-lg object-contain h-[300px] md:h-[450px]"
                    />
                </div>
            </section>
            <section className="py-8 md:py-10">
                <div className="max-w-5xl mx-auto text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">What I Do</h2>
                    <p className="text-lg md:text-2xl text-[#C961DE] mt-2">
                        (How I Actually Help You Make More Money)
                    </p>
                </div>
                <ServicesSection services={services} />
            </section>
            <section className="py-8 md:py-16">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    {/* Text Section */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Who I Work With
                        </h2>
                        <ul className="list-disc list-inside space-y-4 text-purple-100 text-base md:text-lg leading-relaxed">
                            <li>Shopify brands doing 5–7 figures annually</li>
                            <li>Founders tired of duct-taping tools together</li>
                            <li>Teams that need growth systems, not guesswork</li>
                            <li>
                                Anyone losing money on cart abandonment, poor retention, or
                                chaotic ops
                            </li>
                        </ul>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1">
                        <Image
                            src="/shopify-s1.png" // Update with your actual path
                            alt="Meeting with clients"
                            width={600}
                            height={400}
                            className="rounded-xl w-full object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="text-white py-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Clients Say</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-start">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-[#1B1B5E] bg-opacity-90 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 text-yellow-400 mb-4">
                                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                                        <Star key={index} size={20} fill="currentColor" strokeWidth={0} />
                                    ))}
                                </div>

                                {/* Feedback */}
                                <p className="text-lg text-purple-100 mb-4">{testimonial.feedback}</p>

                                {/* Author */}
                                <p className="font-semibold text-sm text-white mb-6">{testimonial.author}</p>

                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex gap-4 opacity-80">
                                        {testimonial.platforms.map((platform) => (
                                            <img
                                                key={platform}
                                                src={`/${platform}.png`}
                                                alt={platform}
                                                className="h-5 transition duration-200"
                                            />
                                        ))}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="my-8 max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#BA72BA] mb-6">Results that Speak</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border border-white border-opacity-30 text-white text-sm">
                        <thead className="bg-white text-[#BA72BA] text-lg bg-opacity-10">
                            <tr>
                                <th className="px-4 py-2 text-left">Metric</th>
                                <th className="px-4 py-2 text-left">Before</th>
                                <th className="px-4 py-2 text-left">After</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-white border-opacity-10">
                                <td className="px-4 py-2">Conversion Rate</td>
                                <td className="px-4 py-2">1.9%</td>
                                <td className="px-4 py-2">3.3%</td>
                            </tr>
                            <tr className="border-t border-white border-opacity-10">
                                <td className="px-4 py-2">Cart Abandonment</td>
                                <td className="px-4 py-2">68%</td>
                                <td className="px-4 py-2">51%</td>
                            </tr>
                            <tr className="border-t border-white border-opacity-10">
                                <td className="px-4 py-2">Avg. Order Value</td>
                                <td className="px-4 py-2">$38</td>
                                <td className="px-4 py-2">$52</td>
                            </tr>
                            <tr className="border-t border-white border-opacity-10">
                                <td className="px-4 py-2">Organic Traffic</td>
                                <td className="px-4 py-2">Low</td>
                                <td className="px-4 py-2">+30%</td>
                            </tr>
                            <tr className="border-t border-white border-opacity-10">
                                <td className="px-4 py-2">Lead Response Time</td>
                                <td className="px-4 py-2">3-5 DAYS</td>
                                <td className="px-4 py-2">Under24 hrs</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <PricingPlans />
            <div className='max-w-6xl mx-auto'>
                <ContactSection />
            </div>
        </div>
    )
}

export default page