import ContactSection from '@/app/components/contactForm'
import React from 'react'

const ShopifyProducts = () => {
    return (
        <div>
            {/* Shopify Manager */}
            <section className="flex flex-col md:flex-row items-center justify-between w-full mt-24 max-w-6xl mx-auto px-6 py-10 md:px-16 md:py-16">
                {/* Left Side - Text */}
                <div className="md:w-6/12 w-full text-left">
                    <h1 className="text-4xl md:text-8xl font-bold text-white">Case Study</h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#C961DE] mt-2">
                        as a Shopify Product Manager
                    </h2>
                    <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                        I have 5+ years of experience in Shopify store development, specializing in HTML, CSS, and Liquid for advanced theme customization, API integrations, and eCommerce store setup. With deep expertise in Shopify automation, product lifecycle management, and conversion optimization, I help brands scale through SEO, email automation, and multi-channel marketing while leveraging data-driven strategies.
                    </p>
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
            {/* F1 Force Section */}
            <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 py-12">
                {/* Left Side - Text Content */}
                <div className="md:w-6/12 w-full">
                    <h1 className="text-3xl md:text-4xl font-semibold text-white">Force1RC</h1>
                    <h2 className="text-xl md:text-2xl font-bold text-[#C961DE] mt-2">
                        Boosting Sales & Automating Inventory
                    </h2>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white">Challenges:</h3>
                        <p className="text-lg  text-gray-300">
                            Low product visibility, manual inventory updates, inefficient order fulfillment.
                        </p>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white">Tools Used:</h3>
                        <p className=" text-lg  text-gray-300">
                            Ahrefs (SEO), Shopify Flow (Automation), Klaviyo (Email Marketing), Facebook Ads (Paid Marketing).
                        </p>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white">Key Actions:</h3>
                        <p className='text-gray-300 text-lg'>SEO optimization via Ahrefs to improve rankings.</p>
                        <p className='text-gray-300 text-lg'>Automated inventory updates using Shopify Flow to prevent stock issues.</p>
                        <p className='text-gray-300 text-lg'>Abandoned cart & post-purchase email automation with Klaviyo.</p>
                        <p className='text-gray-300 text-lg'>Facebook ad retargeting for higher conversions.</p>
                    </div>

                    {/* Results Box */}
                    <div className="bg-[#22226C] text-white p-4 text-center rounded-lg mt-6 w-full max-w-md">
                        <h3 className="font-bold text-[#C961DE] text-xl">Results:</h3>
                        <p className="text-lg">
                            Improved sales, better stock accuracy, increased customer retention.
                        </p>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="md:w-5/12 w-full flex justify-center md:justify-end mt-6 md:mt-0">
                    <img
                        src="/shopify-2.png" // Replace with actual image path
                        alt="Force1RC Website Screenshot"
                        className="rounded-lg shadow-lg w-[365px] h-[733px]"
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
                <div className="md:w-6/12 w-full">
                    <h1 className="text-3xl md:text-4xl font-semibold text-white">USAToyz</h1>
                    <h2 className="text-xl md:text-2xl font-bold text-[#C961DE] mt-2">
                        Reducing Cart Abandonment & Improving Retention
                    </h2>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white">Challenges:</h3>
                        <p className="text-lg  text-gray-300">
                            High cart abandonment, low retention, weak ad performance.                        </p>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white">Tools Used:</h3>
                        <p className=" text-lg  text-gray-300">
                            SEMrush (SEO), Smile.io (Loyalty), Optimizely (A/B Testing), Google Ads (Paid Marketing).                        </p>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white">Key Actions:</h3>
                        <p className='text-gray-300 text-lg'>SEO optimization with SEMrush for better organic reach.</p>
                        <p className='text-gray-300 text-lg'>Loyalty program via Smile.io to improve customer retention.</p>
                        <p className='text-gray-300 text-lg'>A/B testing checkout flow with Optimized for higher conversions.</p>
                        <p className='text-gray-300 text-lg'>Google Ads optimization for better ROAS.</p>
                    </div>

                    {/* Results Box */}
                    <div className="bg-[#22226C] text-white p-4 text-center rounded-lg mt-6 w-full max-w-md">
                        <h3 className="font-bold text-[#C961DE] text-xl">Results:</h3>
                        <p className="text-lg">
                            Enhanced retention, smoother checkout, and better ad ROI.                        </p>
                    </div>
                </div>
            </section>
            {/* Power Your Fun Section */}
            <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 py-12">
                {/* Left Side - Text Content */}
                <div className="md:w-6/12 w-full">
                    <h1 className="text-3xl md:text-4xl font-semibold text-white">Power Your Fun</h1>
                    <h2 className="text-xl md:text-2xl font-bold text-[#C961DE] mt-2">
                        Scaling Revenue via Multi-Channel Selling
                    </h2>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white">Challenges:</h3>
                        <p className="text-lg  text-gray-300">
                            Lack of marketplace presence, low AOV, slow website speed.                        </p>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white">Tools Used:</h3>
                        <p className=" text-lg  text-gray-300">
                            CedCommerce (Multi-channel Integration), Bold Bundles (Upselling), Compress.io (Speed Optimization).                        </p>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white">Key Actions:</h3>
                        <p className='text-gray-300 text-lg'>Marketplace expansion using CedCommerce (Amazon, eBay, Walmart).</p>
                        <p className='text-gray-300 text-lg'>Bundling & upselling via Bold Bundles to increase AOV.</p>
                        <p className='text-gray-300 text-lg'>Website speed optimization using Compress.io.</p>
                    </div>

                    {/* Results Box */}
                    <div className="bg-[#22226C] text-white p-4 text-center rounded-lg mt-6 w-full max-w-md">
                        <h3 className="font-bold text-[#C961DE] text-xl">Results:</h3>
                        <p className="text-lg">
                            Higher Sales, Increased AOV, and Faster Site Performance.                        </p>
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
                <div className="md:w-6/12 w-full">
                    <h1 className="text-3xl md:text-4xl font-semibold text-white">CodeAutomationAiLLC.com</h1>
                    <h2 className="text-xl md:text-2xl font-bold text-[#C961DE] mt-2">
                        B2B Shopify Growth & Lead Generation
                    </h2>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white">Challenges:</h3>
                        <p className="text-lg  text-gray-300">
                            Low B2B conversions, slow lead response, weak LinkedIn engagement.                      </p>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white">Tools Used:</h3>
                        <p className=" text-lg  text-gray-300">
                            HubSpot CRM (Lead Automation), LinkedIn Sales Navigator (B2B Outreach), Gorgias (Chat Automation).                     </p>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white">Key Actions:</h3>
                        <p className='text-gray-300 text-lg'>Lead capture pages & automation via HubSpot CRM.</p>
                        <p className='text-gray-300 text-lg'>Automated LinkedIn outreach via LinkedIn Sales Navigator.</p>
                        <p className='text-gray-300 text-lg'>Live chat & chatbot setup using Gorgias.</p>
                    </div>

                    {/* Results Box */}
                    <div className="bg-[#22226C] text-white p-4 text-center rounded-lg mt-6 w-full max-w-md">
                        <h3 className="font-bold text-[#C961DE] text-xl">Results:</h3>
                        <p className="text-lg">
                            Enhanced retention, smoother checkout, and better ad ROI.                        </p>
                    </div>
                </div>
            </section>
            {/* CChairnBeautySection */}
            <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 py-12">
                {/* Left Side - Text Content */}
                <div className="md:w-6/12 w-full">
                    <h1 className="text-3xl md:text-4xl font-semibold text-white">CChairnBeauty.co.uk</h1>
                    <h2 className="text-xl md:text-2xl font-bold text-[#C961DE] mt-2">
                        Shopify Optimization & Automation                    </h2>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white">Challenges:</h3>
                        <p className="text-lg  text-gray-300">
                            Poor product visibility, low engagement, ineffective email marketing.                        </p>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white">Tools Used:</h3>
                        <p className=" text-lg  text-gray-300">
                            Make.com (Automation), Hotjar (User Behavior Tracking), Klaviyo (Email Automation).                        </p>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-white">Key Actions:</h3>
                        <p className='text-gray-300 text-lg'>Automated product updates & workflows via Make.com.</p>
                        <p className='text-gray-300 text-lg'>Customer behaviour tracking with Hotjar for UX improvements.</p>
                        <p className='text-gray-300 text-lg'>Email automation using Klaviyo for personalized sequences.</p>
                    </div>

                    {/* Results Box */}
                    <div className="bg-[#22226C] text-white p-4 text-center rounded-lg mt-6 w-full max-w-md">
                        <h3 className="font-bold text-[#C961DE] text-xl">Results:</h3>
                        <p className="text-lg">
                            Increased engagement, higher conversions, better retention.                        </p>
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
            <div className='mx-auto max-w-6xl px-6'>
                <ContactSection />
            </div>
        </div>
    )
}

export default ShopifyProducts