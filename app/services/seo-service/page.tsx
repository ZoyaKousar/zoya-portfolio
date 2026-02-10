import ContactSection from '@/app/components/contactForm';
import PricingPlans from '@/app/components/seo-pricingplan';
import ServicesSection from '@/app/components/shopify-service'
import Image from 'next/image';
import React from 'react'

const seoServicepage = () => {
    const services = [
        {
            id: "1",
            title: "SaaS SEO:",
            description: "Grew from zero to 200,000+ monthly organic users Content-led strategy, no paid link schemes",
        },
        {
            id: "2",
            title: "Hotel SEO:",
            description: "14,000+ phone calls in 6 months 105,000+ profile views Ranked #1 for high-intent hotel keywords",
        },
        {
            id: "3",
            title: "Local GMB Optimization:",
            description: "Ranking #1 in over 100 local pointsBounce rate dropped by 28 percentCall volume and form submissions surged",
        },
        {
            id: "4",
            title: "Organic Traffic Growth:",
            description: "From 7 visits a month to over 3,800 From 174 keywords to 8,750+ indexed terms First-page rankings in competitive industries within 6 months",
        },
        {
            id: "5",
            title: "Shopify to WordPress SEO Migration:",
            description: "Doubled traffic in 60 days Recovered rankings in under 2 weeks Massive improvements in speed and UX",
        },
        {
            id: "6",
            title: "Affiliate/Niche SEO:",
            description: "From zero to $4,000 in revenue in 7 months Built, ranked, monetized, and flipped",
        },
        {
            id: "7",
            title: "3-Month SEO Sprint:",
            description: "CTR improved from 0% to 0.9% Impressions grew to 30,300+Keywords ranked jumped from position 22+ to top 10",
        }
    ];
    return (
        <div className='mx-6'>
            <section className="flex flex-col md:flex-row items-center justify-between w-full mt-24 max-w-6xl mx-auto py-10 md:px-16 md:py-16">
                {/* Left Side - Text */}
                <div className="md:w-6/12 w-full text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">SEO That Ranks and Converts</h1>
                    <h2 className="text-2xl font-semibold text-white mt-2">
                        I Don’t Just Rank, I Generate Results
                    </h2>
                    <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                        Hi, I’m Zoya. I don’t do fluff SEO. I deliver SEO that survives Google core updates, brings in real leads, and scales with your business. From SaaS platforms and eCommerce brands to local hotels and niche service providers. I help businesses go from invisible to unmissable.                 </p>
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
            <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto py-8 md:px-16 md:py-10">
                {/* Left Side - Text */}
                <div className="md:w-6/12 w-full text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">What Problems</h2>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#BA72BA]">Do I Solve?</h2>
                    <h3 className="text-2xl font-semibold text-white my-3">
                        Whether you&apos;re B2B, B2C, or local most clients come to me with the same issues:
                    </h3>
                    <ul className="list-disc list-inside space-y-4 text-purple-100 text-base md:text-lg leading-relaxed  ">
                        <li>Relying too heavily on paid ads</li>
                        <li>Few (or zero) keyword rankings</li>
                        <li>Declining impressions and low CTRs</li>
                        <li>Slow, outdated websites that underperform</li>
                        <li>Invisible on Google Maps despite having a physical presence</li>

                    </ul>
                </div>
                {/* Right Side - Image */}
                <div className="md:w-6/12 w-full flex justify-center md:justify-end mt-6 md:mt-0">
                    <img
                        src="/shopify-s2.png" // Change this to the actual image path
                        alt="SEO Manager"
                        className="rounded-lg shadow-lg object-contain h-[300px] md:h-[450px]"
                    />
                </div>
            </section>
            <section className="py-8 md:py-12 text-white">
                {/* Main Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Makes My SEO Different?</h2>

                {/* Description */}
                <p className="text-center text-lg text-gray-300 max-w-4xl mx-auto mb-6">
                    This isn’t checkbox SEO. It’s strategy, execution, and data working together. I blend technical optimization, content that connects, and business-focused KPIs to grow your brand in search.                </p>

                {/* Subheading */}
                <h3 className="text-2xl md:text-4xl font-semibold text-center mb-10"><span className='text-[#BA72BA]'>My Process:</span> SEO That Actually Works</h3>

                {/* Row of 4 Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {/* Box 1 */}
                    <div className="bg-[#22226C] bg-opacity-90 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h4 className="text-xl font-semibold text-[#C961DE] mb-4">1. Technical SEO & Speed Optimization</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Reduced page load times by up to 4 seconds after platform migrations</li>
                            <li>Fixed index bloat, broken links, and crawl issues</li>
                            <li>Implemented clean site architecture for better crawlability and topical depth</li>
                        </ul>
                    </div>

                    {/* Box 2 */}
                    <div className="bg-[#22226C] bg-opacity-90 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h4 className="text-xl font-semibold text-[#C961DE] mb-4">2. Content That Speaks to Humans and Google</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Rewrote and optimized service pages for search intent and emotional connection</li>
                            <li>Created strategic long-form content with internal links and structured data</li>
                            <li>Targeted featured snippets and voice search queries</li>
                        </ul>
                    </div>

                    {/* Box 3 */}
                    <div className="bg-[#22226C] bg-opacity-90 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h4 className="text-xl font-semibold text-[#C961DE] mb-4">3. Local SEO & Google Business Profile Domination</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Optimized Google Business Profiles with keyword-rich content and media</li>
                            <li>Built local landing pages tailored to each service area</li>
                            <li>Achieved top 3 rankings in Map Packs across entire metro areas</li>
                        </ul>
                    </div>

                    {/* Box 4 */}
                    <div className="bg-[#22226C] bg-opacity-90 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h4 className="text-xl font-semibold text-[#C961DE] mb-4">4. Conversion-Focused SEO</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Synced SEO traffic with email flows, remarketing, and lead nurturing</li>
                            <li>A/B tested CTAs and built user funnels using Hotjar insights</li>
                            <li>Implemented Klaviyo automations for abandoned carts and subscriber funnels</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="py-8 md:py-10">
                <h2 className="text-3xl md:text-5xl text-center mb-10 font-bold text-white">What Kind of Results?</h2>
                <ServicesSection services={services} />
            </section>
            <section className="py-8 md:py-16">
                <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
                    {/* Text Section */}
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Why It Works
                        </h2>
                        <ul className="list-disc list-inside space-y-4 text-purple-100 text-base md:text-lg leading-relaxed">
                            <li>Long-tail keywords mean more targeted traffic</li>
                            <li>Human-first content keeps visitors engaged</li>
                            <li>Technical cleanups unlock fast wins</li>
                            <li>Local and map-focused SEO drives real foot traffic and calls </li>
                            <li>Alignment with conversion tools turns visits into revenue</li>

                        </ul>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1">
                        <Image
                            src="/shopify-s3.png" // Update with your actual path
                            alt="Seo Services"
                            width={100}
                            height={300}
                            className="rounded-xl w-full h-[500px] object-contain"
                        />
                    </div>
                </div>
            </section>
            <section className="py-8 md:py-16">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    {/* Image Section */}
                    <div className="flex-1">
                        <Image
                            src="/shopify-s4.png" // Update with your actual path
                            alt="Seo Services"
                            width={600}
                            height={300}
                            className="rounded-xl w-full h-[400px] object-contain"
                        />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            SEO That Grows With You
                        </h2>
                        <p className="text-lg text-white mt-4 leading-relaxed">
                            One of the biggest myths in SEO:                        </p>
                        <p className="text-lg text-white mt-1 leading-relaxed">
                            once you rank, you’re done. <br />   Reality check rankings need maintenance, competitors adapt, and Google never stops evolving. <br /> That’s why my clients don’t just rank. They stay ranked. And they keep growing.</p>
                    </div>
                </div>
            </section>
            <section className=" bg-[#1C1C65] bg-opacity-50 py-8 md:py-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#BA72BA] mb-6">
                        Who I Work With
                    </h2>
                    <ul className="space-y-4 text-lg text-white list-disc list-inside">
                        <li>SaaS platforms that need consistent organic user growth</li>
                        <li>E-commerce stores migrating or struggling to scale</li>
                        <li>Local businesses who need to own their city</li>
                        <li>Founders who want SEO that brings sales, not spreadsheets</li>
                    </ul>
                </div>
            </section>
            <section>
                <PricingPlans/>
            </section>
            <section className='max-w-5xl mx-auto'>
                <ContactSection />
            </section>
        </div>
    )
}

export default seoServicepage