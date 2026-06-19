import ContactSection from '@/app/components/contactForm'
import React from 'react'

const ShopifyProducts = () => {
    return (
        <div className='px-6'>
            {/* Shopify Manager */}
            <section className="flex flex-col md:flex-row items-center justify-between w-full mt-24 max-w-6xl mx-auto py-10 md:px-16 md:py-16">
                {/* Left Side - Text */}
                <div className="md:w-6/12 w-full text-left">
                    <h1 className="text-4xl md:text-8xl font-bold text-white">Kou</h1>
                    <h2 className="text-2xl md:text-2xl font-semibold text-[#C961DE] mt-2">
                        We Don’t Just Rank - We Generate Results.                    </h2>
                    <h3 className="text-2xl md:text-2xl font-semibold text-white mt-2">
                        Case Study: Real SEO Transformations with Data to Prove It                   </h3>
                    <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                        Hi, I’m Kou — and I don’t do fluff SEO. I deliver needle-moving, Google-core-update-surviving, client-retaining SEO strategies backed by real numbers and human understanding.
                        Here’s a behind-the-scenes look at how I’ve helped businesses—from SaaS and eCommerce to local hotels and service providers—go from invisible to unmissable.
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="md:w-6/12 w-full flex justify-center md:justify-end mt-6 md:mt-0">
                    <img
                        src="/seo-hero.png" // Change this to the actual image path
                        alt="SEO Expert"
                        className="object-contain h-[300px] md:h-[500px]"
                    />
                </div>
            </section>
            {/* F1 USAToyz Section */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto py-12">
                {/* Right Side - Image */}
                <div className="md:w-5/12 w-full flex justify-center mt-6 md:mt-0">
                    <img
                        src="/seo-1.png" // Replace with actual image path
                        alt="SEO named Image"
                        className="rounded-lg object-cover shadow-lg h-[333px]"
                    />
                </div>

                {/* Left Side - Text Content */}
                <div className="md:w-6/12 w-full">
                    <h2 className="text-xl md:text-2xl font-bold text-[#C961DE] mt-2">
                        The Challenge: </h2>
                    <p className="text-xl text-gray-100 mt-4">
                        Across different industries, my clients were facing some familiar pain points:</p>
                    <div className="mt-4">
                        <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                            <li>Relying heavily on paid ads with poor organic ROI</li>
                            <li>Zero to minimal keyword rankings</li>
                            <li>Flat or declining impressions and CTRs</li>
                            <li>Websites with poor UX, slow load speeds, and outdated content</li>
                            <li>Not appearing in local map packs despite being physically present in the area</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* F1 Force Section */}
            <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto py-12">
                {/* Left Side - Text Content */}
                <div className="md:w-6/12 w-full">
                    <h2 className="text-xl md:text-4xl font-bold text-[#C961DE] my-2">
                        My Process:
                    </h2>
                    <h3 className="text-3xl md:text-3xl font-semibold text-white">What Makes My SEO Different</h3>
                    <p className="text-lg font-bold my-3 text-gray-100">
                        This isn’t just SEO by the book. It’s SEO with a pulse. I combine technical skill, behavioral insights, and real business goals to build strategies that evolve with Google — not get crushed by it.                        </p>
                    <h3 className="text-xl font-semibold text-[#C961DE]">Step 1: Technical SEO & Speed Optimization</h3>
                    <div className="mt-4">
                        <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                            <li>Reduced page load times by up to 4s for some Shopify stores after migrating to WordPress</li>
                            <li>Fixed broken links, crawl issues, duplicate metadata, and index bloat</li>
                            <li>Leveraged hard silo structure for deeper topical authority (not possible in Shopify)</li>
                        </ul>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="md:w-5/12 w-full flex justify-center md:justify-end mt-6 md:mt-0">
                    <img
                        src="/seo-2.png" // Replace with actual image path
                        alt="Force1RC Website Screenshot"
                        className="rounded-lg shadow-lg h-[333]"
                    />
                </div>
            </section>
            {/* F1 USAToyz Section */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto py-12">
                {/* Right Side - Image */}
                <div className="md:w-5/12 w-full flex justify-center mt-6 md:mt-0">
                    <img
                        src="/seo-3.png" // Replace with actual image path
                        alt="SEO named Image"
                        className="rounded-lg object-cover shadow-lg h-[300px]"
                    />
                </div>

                {/* Left Side - Text Content */}
                <div className="md:w-6/12 w-full">
                    <h2 className="text-xl md:text-2xl font-bold text-[#C961DE] mt-4">
                        Step 2: Content That Talks to Humans and Algorithms</h2>
                    <div className="mt-4">
                        <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                            <li>Rewrote product/service pages with keyword-rich, intent-driven, emotionally resonant content</li>
                            <li>Structured long-form blogs with SEO outlines and strategic internal linking</li>
                            <li>Optimized for featured snippets, FAQs, and voice search</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* F1 USAToyz Section */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto py-12">
                {/* Left Side - Text Content */}
                <div className="md:w-6/12 w-full">
                    <h2 className="text-xl md:text-2xl font-bold text-[#C961DE] mt-4">
                        Step 3: GMB & Local SEO Domination</h2>
                    <div className="mt-4">
                        <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                            <li>Optimized Google Business Profiles with geo-tagged images, keyword-rich Q&A, and service descriptions</li>
                            <li>Created location-specific landing pages and blogs</li>
                            <li>Result: Clients ranking #1 across entire metro areas </li>
                        </ul>
                    </div>
                </div>

                {/* left Side - Image */}
                <div className="md:w-5/12 w-full flex justify-center mt-6 md:mt-0">
                    <img
                        src="/seo-4.png" // Replace with actual image path
                        alt="SEO named Image"
                        className="object-contain h-[300px]"
                    />
                </div>
            </section>
            {/* F1 USAToyz Section */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto py-12">
                {/* Right Side - Image */}
                <div className="md:w-5/12 w-full flex justify-center mt-6 md:mt-0">
                    <img
                        src="/seo-5.png" // Replace with actual image path
                        alt="SEO Girl Image"
                        className="rounded-lg object-cover shadow-lg h-[300px]"
                    />
                </div>
                {/* Left Side - Text Content */}
                <div className="md:w-6/12 w-full">
                    <h2 className="text-xl md:text-2xl font-bold text-[#C961DE] mt-4">
                        Step 4: Conversion-Led SEO</h2>
                    <div className="mt-4">
                        <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                            <li>Synced SEO traffic with Klaviyo flows and remarketing strategies</li>
                            <li>A/B tested CTAs and heatmapped user behavior with Hotjar</li>
                            <li>Set up email automations for abandoned carts, newsletter funnels, and drip campaigns</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* Lets take real number */}
            <section className="relative w-full mt-10 pt-6 md:pt-8 mx-auto flex flex-col items-center justify-center text-center max-w-5xl bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-2xl overflow-hidden">
                {/* Content */}
                <div className="relative z-10 max-w-4xl">
                    <h2 className="text-xl md:text-3xl font-bold text-[#C961DE]">Results: Let’s Talk Real Numbers</h2>
                    <p className="text-lg md:text-xl text-gray-200 mt-2">SaaS Project (Tallyfy Style Growth)</p>
                    <ul className="list-disc list-inside text-lg text-gray-100 mt-4 space-y-2 text-center mx-auto max-w-xl">
                        <li>0 to 200,000+ organic users/month</li>
                        <li>Purely content-driven growth (no paid links or shady tricks)</li>
                    </ul>
                </div>
                {/* Image */}
                <div className="relative z-10 w-full mt-6 max-w-6xl">
                    <img
                        src="/seo-6.png" // Replace with actual image path
                        alt="SEO Strategy Graphic"
                        className="w-full object-contain h-[300px] md:h-[315px]"
                    />
                </div>
            </section>
            <section className="relative w-full mt-6 md:mt-16 pt-6 md:pt-8 mx-auto flex flex-col items-center justify-center text-center max-w-5xl bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-2xl overflow-hidden">
                {/* Content */}
                <div className="relative z-10 max-w-4xl">
                    <h2 className="text-xl md:text-3xl font-bold text-[#C961DE]">Local Hotel SEO</h2>
                    <ul className="list-disc list-inside text-lg text-gray-100 mt-4 space-y-2 text-center mx-auto max-w-xl">
                        <li>14,233+ calls in 6 months</li>
                        <li>105K+ Google profile views</li>
                        <li>Dominated Map Pack with keywords like “hotel near [location]</li>
                    </ul>
                </div>
                {/* Image */}
                <div className="relative z-10 w-full mt-6 max-w-6xl">
                    <img
                        src="/seo-7.png" // Replace with actual image path
                        alt="SEO Strategy Graphic"
                        className="w-full object-contain h-[300px] md:h-[315px]"
                    />
                </div>
            </section>
            <section className="relative w-full mt-6 md:mt-16 pt-6 md:pt-8 mx-auto flex flex-col items-center justify-center text-center max-w-5xl bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-2xl overflow-hidden">
                {/* Content */}
                <div className="relative z-10 max-w-4xl">
                    <h2 className="text-xl md:text-3xl font-bold text-[#C961DE]">GMB Optimization</h2>
                    <ul className="list-disc list-inside text-lg text-gray-100 mt-4 space-y-2 text-center mx-auto max-w-xl">
                        <li>Rank #1 across 100+ tracking points</li>
                        <li>Bounce rate dropped by 28%</li>
                        <li>Visibility increased across high-intent local queries</li>
                    </ul>
                </div>
                {/* Image */}
                <div className="relative z-10 w-full mt-6 max-w-6xl">
                    <img
                        src="/seo-8.png" // Replace with actual image path
                        alt="SEO Strategy Graphic"
                        className="w-full object-contain h-[300px] md:h-[435px]"
                    />
                </div>
            </section>
            <section className="relative w-full mt-6 md:mt-16 pt-6 md:pt-8 mx-auto flex flex-col items-center justify-center text-center max-w-5xl bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-2xl overflow-hidden">
                {/* Content */}
                <div className="relative z-10 max-w-4xl">
                    <h2 className="text-xl md:text-3xl font-bold text-[#C961DE]">Organic Traffic Growth</h2>
                    <ul className="list-disc list-inside text-lg text-gray-100 mt-4 space-y-2 text-center mx-auto max-w-xl">
                        <li>From 7 visitors/month to 3,888+</li>
                        <li>Jumped from 174 keywords to 8,750+ indexed - with real buying intent</li>
                        <li>First page rankings across multiple niches in under 6 months</li>
                    </ul>
                </div>
                {/* Image */}
                <div className="relative z-10 w-full mt-6 max-w-6xl">
                    <img
                        src="/seo-9.png" // Replace with actual image path
                        alt="SEO Strategy Graphic"
                        className="w-full object-contain h-[300px] md:h-[435px]"
                    />
                </div>
            </section>
            <section className="relative w-full mt-6 md:mt-16 pt-6 md:pt-8 mx-auto flex flex-col items-center justify-center text-center max-w-5xl bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-2xl overflow-hidden">
                {/* Content */}
                <div className="relative z-10 max-w-4xl">
                    <h2 className="text-xl md:text-3xl font-bold text-[#C961DE]">Shopify → WordPress SEO Migration</h2>
                    <ul className="list-disc list-inside text-lg text-gray-100 mt-4 space-y-2 text-center mx-auto max-w-xl">
                        <li>Ranking recovery post-migration within 2 weeks</li>
                        <li>Traffic doubled in under 60 days</li>
                    </ul>
                </div>
                {/* Image */}
                <div className="relative z-10 w-full mt-6 max-w-6xl">
                    <img
                        src="/seo-10.png" // Replace with actual image path
                        alt="SEO Strategy Graphic"
                        className="w-full object-contain h-[300px] md:h-[435px]"
                    />
                </div>
            </section>
            <section className="relative w-full mt-6 md:mt-16 pt-6 md:pt-8 mx-auto flex flex-col items-center justify-center text-center max-w-5xl bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-2xl overflow-hidden">
                {/* Content */}
                <div className="relative z-10 max-w-4xl">
                    <h2 className="text-xl md:text-3xl font-bold text-[#C961DE]">Niche Site Case Study</h2>
                    <ul className="list-disc list-inside text-lg text-gray-100 mt-4 space-y-2 text-center mx-auto max-w-xl">
                        <li>$0 → $4,000 in affiliate revenue in 7 months</li>
                        <li>Built, ranked, monetized, and flipped successfully</li>
                    </ul>
                </div>
                {/* Image */}
                <div className="relative z-10 w-full mt-6 max-w-6xl">
                    <img
                        src="/seo-11.png" // Replace with actual image path
                        alt="SEO Strategy Graphic"
                        className="w-full object-contain h-[300px] md:h-[390px]"
                    />
                </div>
            </section>
            <section className="relative w-full mt-6 md:mt-16 pt-6 md:pt-8 mx-auto flex flex-col items-center justify-center text-center max-w-5xl bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-2xl overflow-hidden">
                {/* Content */}
                <div className="relative z-10 max-w-4xl">
                    <h2 className="text-xl md:text-3xl font-bold text-[#C961DE]">3-Month SEO Jumpstart</h2>
                    <ul className="list-disc list-inside text-lg text-gray-100 mt-4 space-y-2 text-center mx-auto max-w-xl">
                        <li>CTR from 0% to 0.9%</li>
                        <li>Impressions up to 30.3K</li>
                        <li>Keyword positioning improved from avg. position 22+ to 9.2</li>
                        <li>All organic — no paid ads</li>
                    </ul>
                </div>
                {/* Image */}
                <div className="relative z-10 w-full mt-6 max-w-6xl">
                    <img
                        src="/seo-12.png" // Replace with actual image path
                        alt="SEO Strategy Graphic"
                        className="w-full object-contain h-[300px] md:h-[433px]"
                    />
                </div>
            </section>
            <section className="w-full py-10 my-6 md:my-16 max-w-5xl mx-auto flex flex-col items-center text-center bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-2xl overflow-hidden">
                <h2 className="text-4xl md:text-5xl font-bold text-[#BA72BA] mb-10">
                    What Makes This Work?
                </h2>

                {/* First Box */}
                <div className="bg-[#3D3D7E] rounded-lg p-6 md:p-8 w-full max-w-3xl text-left text-white space-y-3 shadow-lg">
                    <p><strong className="text-white">• Long-tail keyword strategy</strong> = better targeting</p>
                    <p><strong className="text-white">• User-first content</strong> = better engagement and longer time on site</p>
                    <p><strong className="text-white">• Technical cleanup</strong> = instant ranking improvements</p>
                    <p><strong className="text-white">• Map optimization</strong> + localized content = real calls, not just vanity metrics</p>
                    <p><strong className="text-white">• Email & conversion alignment</strong> = actual revenue, not just traffic</p>
                </div>

                {/* Second Box */}
                <div className="bg-[#3D3D7E] rounded-lg p-6 md:p-8 w-full max-w-3xl mt-10 text-white shadow-lg space-y-4">
                    <p className="font-semibold text-center">
                        Clients Stick Around — Because SEO Doesn’t Stop
                    </p>
                    <p className="text-md text-center text-gray-300">
                        One myth I’ve shattered over and over again: “Clients fire SEO experts after they get ranked.”
                    </p>
                    <p className="text-md text-center text-gray-300">
                        Wrong. My longest SEO clients have stayed with me well past the rankings because they’ve seen that SEO is ongoing:
                    </p>

                    <ul className="list-disc list-inside text-center space-y-2 mt-4">
                        <li>Google updates happen (Core, Spam, Helpful Content…)</li>
                        <li>Rankings need maintenance</li>
                        <li>Competitors don’t sleep</li>
                        <li>Search behavior evolves</li>
                    </ul>
                </div>
            </section>
            {/* F1 Force Section */}
            <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto py-12">
                {/* Left Side - Text Content */}
                <div className="md:w-6/12 w-full">
                    <h2 className="text-xl md:text-4xl font-bold text-white my-2">
                        Final Thoughts:
                    </h2>
                    <h3 className="text-3xl md:text-3xl font-semibold text-[#C961DE]">This Is Not <br />
                        “One-Size-Fits-All” SEO</h3>
                    <p className="text-lg font-bold my-3 text-gray-100">
                        Whether you’re a startup, SaaS company, local service provider, or Shopify store — I tailor each SEO strategy like it’s a custom suit. Because in SEO, one-size-fits-all doesn’t fit anyone.
                    </p>
                    <p className="text-lg font-bold mt-6 text-gray-100">
                        So, if you’re tired of “SEO experts” who deliver spreadsheets and zero sales — Let’s talk strategy, not just rankings.              </p>
                </div>

                {/* Right Side - Image */}
                <div className="md:w-5/12 w-full flex justify-center md:justify-end mt-6 md:mt-0">
                    <img
                        src="/seo-13.png" // Replace with actual image path
                        alt="Force1RC Website Screenshot"
                        className="rounded-lg shadow-lg h-[333]"
                    />
                </div>
            </section>
            <div className='mx-auto max-w-6xl'>
                <ContactSection />
            </div>

        </div>
    )
}

export default ShopifyProducts