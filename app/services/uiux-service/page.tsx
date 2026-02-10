import ContactSection from '@/app/components/contactForm'
import PricingPlans from '@/app/components/uiux-pricingplan'
import React from 'react'

const uiuxService = () => {
    return (
        <div className='mx-6'>
            <section className="flex flex-col md:flex-row items-center justify-between w-full mt-24 max-w-6xl mx-auto py-10 md:px-16 md:py-16">
                {/* Left Side - Text */}
                <div className="md:w-6/12 w-full text-left">
                    <h1 className="text-3xl md:text-3xl font-bold text-white">How Zoya Kou Transforms Brands Through Stunning UI/UX & Graphic Design</h1>
                    <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                        In today’s crowded digital landscape, powerful design isn’t just eye candy — it’s a business driver. I’m Zoya Kou, a UI/UX and graphic design pro who crafts visuals that don’t just look good but deliver real results. From sleek websites and intuitive apps to captivating social media campaigns and dynamic videos, my portfolio shows a commitment to creativity, adaptability, and client success.                    </p>
                </div>
                {/* Right Side - Image */}
                <div className="md:w-6/12 w-full flex justify-center md:justify-end mt-6 md:mt-0">
                    <img
                        src="/shopify-1.png" // Change this to the actual image path
                        alt="Shopify Product Manager"
                        className="rounded-lg   object-contain h-[300px] md:h-[450px]"
                    />
                </div>
            </section>
            <section className="py-6  md:py-16 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio Highlights</h2>
                    <h3 className="text-xl md:text-2xl text-[#BA72BA] font-semibold mb-4">
                        1. UI/UX Design — Seamless Experiences that Engage
                    </h3>

                    <p className="text-base md:text-lg max-w-4xl mx-auto mb-6 text-gray-300">
                        I specialize in designing user interfaces that marry form and function. For clients like
                        Elegance on Tap, Grout Cleaning, HALDI SCAN AI, and Tape Truck, I created intuitive
                        website and app designs in Figma that boost user satisfaction and drive conversions.
                        Key features:
                    </p>

                    <ul className="text-center max-w-2xl mx-auto text-gray-300 list-disc list-inside space-y-2 mb-10">
                        <li>
                            <strong>User-centric layouts</strong> focused on ease of navigation
                        </li>
                        <li>
                            <strong>Visually compelling design</strong> aligned with brand identity
                        </li>
                        <li>
                            <strong>Mobile responsiveness</strong> and accessibility
                        </li>
                    </ul>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="p-2 rounded-xl  ">
                            <img
                                src="/uiux1.png"
                                alt="Elegance on Tap design preview"
                                className="rounded-lg w-full h-auto object-contain"
                            />
                        </div>
                        <div className="p-2 rounded-xl  ">
                            <img
                                src="/uiux2.png"
                                alt="HALDI SCAN AI design preview"
                                className="rounded-lg w-full h-auto object-contain"
                            />
                        </div>
                        <div className="p-2 rounded-xl  ">
                            <img
                                src="/uiux3.png"
                                alt="Tape Truck design preview"
                                className="rounded-lg w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-6  md:py-16 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h3 className="text-xl md:text-2xl text-[#BA72BA] font-semibold mb-4">
                        2. Graphic Design & Branding — Crafting Unique Visual Identities
                    </h3>

                    <p className="text-base md:text-lg max-w-4xl mx-auto mb-6 text-gray-300">
                        Whether creating compelling ad creatives for Code Automation, EZClocker, or H3 Technologies, or developing cohesive branding assets, I blend creativity with strategic thinking. Highlights include:
                    </p>

                    <ul className="text-center max-w-2xl mx-auto text-gray-300 list-disc list-inside space-y-2 mb-10">
                        <li>
                            Bold, on-brand ad campaigns that catch attention                        </li>
                        <li>
                            Consistent visual language across digital and print media                        </li>
                        <li>
                            Adaptive design that fits diverse platforms and audiences                        </li>
                    </ul>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="p-2 rounded-xl  ">
                            <img
                                src="/uiux4.png"
                                alt="Elegance on Tap design preview"
                                className="rounded-lg w-full h-auto object-contain"
                            />
                        </div>
                        <div className="p-2 rounded-xl  ">
                            <img
                                src="/uiux5.png"
                                alt="HALDI SCAN AI design preview"
                                className="rounded-lg w-full h-auto object-contain"
                            />
                        </div>
                        <div className="p-2 rounded-xl  ">
                            <img
                                src="/uiux6.png"
                                alt="Tape Truck design preview"
                                className="rounded-lg w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-6  md:py-16 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h3 className="text-xl md:text-2xl text-[#BA72BA] font-semibold mb-4">
                        3. Social Media Content — Driving Engagement with Visual Storytelling
                    </h3>

                    <p className="text-base md:text-lg max-w-4xl mx-auto mb-6 text-gray-300">
                        My social media posts for various clients combine sharp graphics and messaging that spark conversations and shares. I focus on:                    </p>

                    <ul className="text-center max-w-2xl mx-auto text-gray-300 list-disc list-inside space-y-2 mb-10">
                        <li>
                            Trend-aware, platform-optimized creatives                        </li>
                        <li>
                            Clear CTAs that encourage user interaction                        </li>
                        <li>
                            Scheduling strategies via custom content calendars to maximize reach                      </li>
                    </ul>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="p-2 rounded-xl  ">
                            <img
                                src="/uiux7.png"
                                alt="Elegance on Tap design preview"
                                className="rounded-lg w-full h-auto object-contain"
                            />
                        </div>
                        <div className="p-2 rounded-xl  ">
                            <img
                                src="/uiux8.png"
                                alt="HALDI SCAN AI design preview"
                                className="rounded-lg w-full h-auto object-contain"
                            />
                        </div>
                        <div className="p-2 rounded-xl  ">
                            <img
                                src="/uiux9.png"
                                alt="Tape Truck design preview"
                                className="rounded-lg w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-6  md:py-16 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h3 className="text-xl md:text-2xl text-[#BA72BA] font-semibold mb-4">
                        4. Video Production — Bringing Brands to Life                    </h3>

                    <p className="text-base md:text-lg max-w-4xl mx-auto mb-6 text-gray-300">
                        From promotional reels for clients like Chat Rex and Hadema B.V. to impactful web videos, I harness motion graphics to communicate brand stories dynamically. Benefits include:
                    </p>

                    <ul className="text-center max-w-2xl mx-auto text-gray-300 list-disc list-inside space-y-2 mb-10">
                        <li>
                            Increased audience engagement through visual storytelling                       </li>
                        <li>
                            Versatility in video formats for social, web, and presentations                     </li>
                        <li>
                            Attention-grabbing edits designed to boost brand recall                    </li>
                    </ul>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="p-2 rounded-xl  ">
                            <img
                                src="/uiux10.png"
                                alt="Elegance on Tap design preview"
                                className="rounded-lg w-full h-auto object-contain"
                            />
                        </div>
                        <div className="p-2 rounded-xl  ">
                            <img
                                src="/uiux11.png"
                                alt="HALDI SCAN AI design preview"
                                className="rounded-lg w-full h-auto object-contain"
                            />
                        </div>
                        <div className="p-2 rounded-xl  ">
                            <img
                                src="/uiux12.png"
                                alt="Tape Truck design preview"
                                className="rounded-lg w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-6  md:py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-10">
                        Results That Speak Volumes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#4E4EFF] bg-opacity-10 p-6 rounded-2xl shadow-md">
                            <p className="text-white">
                                Elevated brand visibility and user engagement across digital channels
                            </p>
                        </div>
                        <div className="bg-[#4E4EFF] bg-opacity-10 p-6 rounded-2xl shadow-md">
                            <p className="text-white">
                                Improved conversion rates through intuitive UI and compelling creatives
                            </p>
                        </div>
                        <div className="bg-[#4E4EFF] bg-opacity-10 p-6 rounded-2xl shadow-md">
                            <p className="text-white">
                                Strong client satisfaction reflected in repeat projects and referrals
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" bg-[#1C1C65] bg-opacity-50 py-8 md:py-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#BA72BA] mb-6">
                        Why Choose Me?
                    </h2>
                    <ul className="space-y-4 text-lg text-white list-disc list-inside">
                        <li>Creative Versatility</li>
                        <li>EMastery across UI/UX, graphic design, social media, and video content</li>
                        <li>Client-Centered Approach</li>
                        <li>Solutions tailored to your unique business goals</li>
                        <li>Reliable Delivery</li>
                        <li>Projects executed on time without compromising quality</li>
                    </ul>
                </div>
            </section>
            <PricingPlans />
            <div className='max-w-6xl mx-auto'>
                <ContactSection />
            </div>
        </div>
    )
}

export default uiuxService