import ContactSection from '@/app/components/contactForm'
import Testimonials from '@/app/components/testimonials'
import { client } from '@/sanity/lib/client';
import React from 'react'
async function getData() {
    const query = `*[_type == 'heroSection'][0]`;
    try {
        const fetchData = await client.fetch(query);
        return fetchData || [];
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export default async function Ecommerce() {
    const data = await getData();
    return (
        <div>
            {/* Shopify Manager */}
            <section className="flex flex-col md:flex-row items-center justify-between w-full mt-24 max-w-6xl mx-auto px-6 py-10 md:px-16 md:py-16">
                {/* Left Side - Text */}
                <div className="md:w-6/12 w-full text-left">
                    <h1 className="text-5xl md:text-8xl font-bold text-white">Kou</h1>
                    <h2 className="text-2xl md:text-4xl font-semibold text-[#C961DE] mt-2">
                        E-commerce Product Manager
                    </h2>
                    <p className="text-base md:text-xl text-gray-300 mt-4 leading-relaxed">
                        E-commerce Growth Case Study: How 5 Shopify Brands Boosted Sales, Retention, and Efficiency Without Wasting Ad Spend
                    </p>
                    <h3 className="text-[#C961DE] font-semibold text-2xl mt-6">Clients:</h3>
                    <ul className="list-disc list-inside text-xl text-gray-300 mt-2 space-y-1">
                        <li>Force1RC</li>
                        <li>USA Toyz</li>
                        <li>Power Your Fun</li>
                        <li>CodeAutomationAI LLC</li>
                        <li>CChairnBeauty.co.uk</li>
                    </ul>
                </div>

                {/* Right Side - Image */}
                <div className="md:w-6/12 w-full flex justify-center md:justify-end mt-6 md:mt-0">
                    <img
                        src="/seo-hero.png" // Make sure this is accessible in your /public folder
                        alt="Kou - E-commerce Product Manager"
                        className="rounded-lg shadow-lg object-contain h-[300px] md:h-[450px]"
                    />
                </div>
            </section>

            {/* Force1RC Section */}
            <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 py-16 mt-20">
                {/* Left Side - Text Content */}
                <div className="md:w-6/12 w-full text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Force1RC</h1>
                    <h2 className="text-xl md:text-3xl font-semibold text-[#C961DE] mt-2">
                        SEO and Inventory Automation
                    </h2>

                    <div className="mt-6">
                        <h3 className="text-white font-semibold text-xl">Tools Used:</h3>
                        <p className="text-gray-300 text-lg text-base mt-1">
                            Ahrefs, Klaviyo, Shopify Flow, Facebook Ads
                        </p>
                    </div>

                    <ul className="list-disc text-lg list-inside text-gray-300 text-base mt-4 space-y-2">
                        <li>Automated inventory updates to prevent overselling and reduce stockouts</li>
                        <li>Improved site structure and metadata with targeted SEO tactics</li>
                        <li>Launched cart recovery flows to capture lost sales</li>
                    </ul>

                    {/* Results Box */}
                    <div className="bg-[#22226C] text-white p-4 text-center rounded-lg mt-6 w-full max-w-md">
                        <h3 className="text-[#C961DE] font-bold text-xl">Results:</h3>
                        <p className="text-base mt-2">
                            Increased operational efficiency and measurable sales growth
                        </p>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="md:w-5/12 w-full flex justify-center md:justify-end mt-8 md:mt-0">
                    <img
                        src="/shopify-2.png" // Save uploaded image as this in /public
                        alt="Force1RC Shopify Site"
                        className="rounded-lg shadow-lg w-[365px] h-[733px] object-cover"
                    />
                </div>
            </section>

            {/* F1 USAToyz Section */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 py-12">
                {/* Right Side - Image */}
                <div className="md:w-5/12 w-full flex justify-center mt-6 md:mt-0">
                    <img
                        src="/shopify-3.png" // Replace with actual image path
                        alt="USAToyz Website Screenshot"
                        className="rounded-lg shadow-lg w-[365px] h-[733px]"
                    />
                </div>

                {/* Left Side - Text Content */}
                <div className="md:w-6/12 w-full text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">USA Toyz</h1>
                    <h2 className="text-xl md:text-3xl font-semibold text-[#C961DE] mt-2">
                        Abandonment Recovery and Retention
                    </h2>

                    <div className="mt-6">
                        <h3 className="text-white font-semibold text-xl">Tools Used:</h3>
                        <p className="text-gray-300 text-lg text-base mt-1">
                            SEMrush, Smile.io, Optimizely, Google Ads
                        </p>
                    </div>

                    <ul className="list-disc text-lg list-inside text-gray-300 text-base mt-4 space-y-2">
                        <li>Introduced a customer loyalty program to encourage repeat sales</li>
                        <li>A/B tested the checkout experience for friction points</li>
                        <li>Launched cart recovery flows to capture lost sales</li>
                    </ul>

                    {/* Results Box */}
                    <div className="bg-[#22226C] text-white p-4 text-center rounded-lg mt-6 w-full max-w-md">
                        <h3 className="text-[#C961DE] font-bold text-xl">Results:</h3>
                        <p className="text-base mt-2">
                            Significant drop in cart abandonment rate and a notable improvement in customer retention                        </p>
                    </div>
                </div>
            </section>
            {/* Power Your Fun Section */}
            <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 py-12">
                {/* Left Side - Text Content */}
                <div className="md:w-6/12 w-full text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Power Your Fun</h1>
                    <h2 className="text-xl md:text-3xl font-semibold text-[#C961DE] mt-2">
                        Multi-Channel Expansion and Site Optimization
                    </h2>

                    <div className="mt-6">
                        <h3 className="text-white font-semibold text-xl">Tools Used:</h3>
                        <p className="text-gray-300 text-lg text-base mt-1">
                            CedCommerce, Bold Bundles, Compress.io
                        </p>
                    </div>

                    <ul className="list-disc text-lg list-inside text-gray-300 text-base mt-4 space-y-2">
                        <li>Integrated product listings with Amazon, Walmart, and eBay</li>
                        <li>Refactored the Shopify theme for better speed and responsiveness</li>
                        <li>Implemented product bundling and upsell flows to increase order values</li>
                    </ul>

                    {/* Results Box */}
                    <div className="bg-[#22226C] text-white p-4 text-center rounded-lg mt-6 w-full max-w-md">
                        <h3 className="text-[#C961DE] font-bold text-xl">Results:</h3>
                        <p className="text-base mt-2">
                            25% increase in sales within one quarter; 30% lift in average order value
                        </p>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="md:w-5/12 w-full flex justify-center md:justify-end mt-6 md:mt-0">
                    <img
                        src="/shopify-4.png" // Replace with actual image path
                        alt="Power Your Fun Website Screenshot"
                        className="rounded-lg shadow-lg w-[365px] h-[733px]"
                    />
                </div>
            </section>
            {/* CodeAutomationAiLLC Section */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 py-12">
                {/* Right Side - Image */}
                <div className="md:w-5/12 w-full flex justify-center mt-6 md:mt-0">
                    <img
                        src="/shopify-5.png" // Replace with actual image path
                        alt="CodeAutomationAiLLC Website Screenshot"
                        className="rounded-lg shadow-lg w-[365px] h-[733px]"
                    />
                </div>

                {/* Left Side - Text Content */}
                <div className="md:w-6/12 w-full text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">CodeAutomationAiLLC</h1>
                    <h2 className="text-xl md:text-3xl font-semibold text-[#C961DE] mt-2">
                        B2B Shopify Lead Generation
                    </h2>

                    <div className="mt-6">
                        <h3 className="text-white font-semibold text-xl">Tools Used:</h3>
                        <p className="text-gray-300 text-lg text-base mt-1">
                            HubSpot CRM, Gorgias, LinkedIn Sales Navigator
                        </p>
                    </div>

                    <ul className="list-disc text-lg list-inside text-gray-300 text-base mt-4 space-y-2">
                        <li>Built high-converting lead capture pages directly in Shopify</li>
                        <li>Automated B2B outreach on LinkedIn with customized messaging</li>
                        <li>Deployed a chatbot using Gorgias to handle inbound inquiries and support</li>
                    </ul>

                    {/* Results Box */}
                    <div className="bg-[#22226C] text-white p-4 text-center rounded-lg mt-6 w-full max-w-md">
                        <h3 className="text-[#C961DE] font-bold text-xl">Results:</h3>
                        <p className="text-base mt-2">
                            Increased qualified B2B leads, faster lead response times, and better engagement on LinkedIn                        </p>
                    </div>
                </div>
            </section>
            {/* CChairnBeautySection */}
            <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 py-12">
                {/* Left Side - Text Content */}
                <div className="md:w-6/12 w-full text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">CChairnBeauty.co.uk</h1>
                    <h2 className="text-xl md:text-3xl font-semibold text-[#C961DE] mt-2">
                        Personalization and Behavioral Automation
                    </h2>

                    <div className="mt-6">
                        <h3 className="text-white font-semibold text-xl">Tools Used:</h3>
                        <p className="text-gray-300 text-lg text-base mt-1">
                            Make.com, Hotjar, Klaviyo
                        </p>
                    </div>

                    <ul className="list-disc text-lg list-inside text-gray-300 text-base mt-4 space-y-2">
                        <li>Automated backend product updates and processes with Make.com</li>
                        <li>Used Hotjar insights to redesign key pages based on user behavior</li>
                        <li>Personalized post-purchase email flows to drive engagement and upsells</li>
                    </ul>

                    {/* Results Box */}
                    <div className="bg-[#22226C] text-white p-4 text-center rounded-lg mt-6 w-full max-w-md">
                        <h3 className="text-[#C961DE] font-bold text-xl">Results:</h3>
                        <p className="text-base mt-2">
                            Higher conversion rates, stronger customer engagement, and improved retention                      </p>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="md:w-5/12 w-full flex justify-center md:justify-end mt-6 md:mt-0">
                    <img
                        src="/shopify-6.png" // Replace with actual image path
                        alt="CChairnBeauty Website Screenshot"
                        className="rounded-lg shadow-lg w-[365px] h-[733px]"
                    />
                </div>
            </section>
            {/* The Combined Impact Section */}
            <section className="text-white px-6 py-10 max-w-4xl bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-2xl mx-auto mt-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold">The Combined Impact</h2>
                </div>

                <div className="bg-[#3D3D7E] rounded-2xl p-6 md:p-10 overflow-x-auto">
                    <table className="w-full text-left table-auto text-sm md:text-base">
                        <thead className="text-white font-semibold">
                            <tr>
                                <th className="py-3 pr-6">Metric</th>
                                <th className="py-3 pr-6">Before Average</th>
                                <th className="py-3">After Average</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            <tr className="border-t border-[#333366]">
                                <td className="py-3 pr-6">Conversion Rate</td>
                                <td className="py-3 pr-6">1.9%</td>
                                <td className="py-3">3.3%</td>
                            </tr>
                            <tr className="border-t border-[#333366]">
                                <td className="py-3 pr-6">Cart Abandonment</td>
                                <td className="py-3 pr-6">68%</td>
                                <td className="py-3">51%</td>
                            </tr>
                            <tr className="border-t border-[#333366]">
                                <td className="py-3 pr-6">Average Order Value</td>
                                <td className="py-3 pr-6">$38</td>
                                <td className="py-3">$52</td>
                            </tr>
                            <tr className="border-t border-[#333366]">
                                <td className="py-3 pr-6">Organic Traffic</td>
                                <td className="py-3 pr-6">Low</td>
                                <td className="py-3">Up by 30%</td>
                            </tr>
                            <tr className="border-t border-[#333366]">
                                <td className="py-3 pr-6">Lead Response Time</td>
                                <td className="py-3 pr-6">3–5 days</td>
                                <td className="py-3">Under 24 hours</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="text-white text-sm md:text-base text-center mt-8 max-w-2xl mx-auto">
                    These numbers weren’t just vanity metrics—they directly translated into more revenue, better systems, and happier customers.
                </p>
            </section>
            <div className='px-6'>

                <Testimonials experiences={data.testimonialSection} />
            </div>
            {/* Built-In SEO Wins Section */}
            <section className="text-white px-6 py-10 max-w-3xl bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-2xl mx-auto mt-20">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold">Built-In SEO Wins</h2>
                    <h3 className="text-xl max-w-lg mx-auto mt-3 md:text-2xl font-bold">Every brand’s site was restructured for
                        performance and visibility:</h3>
                </div>

                <div className="bg-[#3D3D7E] text-center rounded-2xl p-6 md:p-10 overflow-x-auto">
                    <ul className="list-disc text-lg list-inside text-gray-300 text-base mt-4 space-y-2">
                        <li>Keyword-optimized product pages and blog content</li>
                        <li>Schema markup for enhanced Google snippets</li>
                        <li>Mobile-first, fast-loading design aligned with Core Web Vitals</li>
                        <li>Internal linking strategies for authority building</li>
                    </ul>

                    {/* Results Box */}
                    <div className="bg-[#22226C] text-white p-4 text-center rounded-lg mt-6 w-full mx-auto max-w-md">
                        <h3 className="text-[#C961DE] font-bold text-xl">Results:</h3>
                        <p className="text-base mt-2">
                            Organic traffic consistently increased across all brands within 60–90 days.   </p>                  </div>
                </div>
            </section>

            <div className='mx-auto max-w-6xl px-6'>
                <ContactSection />
            </div>
        </div>
    )
}
