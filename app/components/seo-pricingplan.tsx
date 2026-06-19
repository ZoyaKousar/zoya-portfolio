'use client';

import React from 'react';

const pricingData = [
    {
        service: 'Price',
        monthly: '$500 / month',
        yearly: '$1,000 / month',
        price: '$2,000 / month',
    },
    {
        service: 'Ideal For',
        monthly: 'Small businesses, startups',
        yearly: 'Growing businesses & e-commerce',
        price: 'Established brands & enterprise',
    },
    {
        service: 'SEO Services',
        monthly:
            '- Basic keyword research (10 keywords)\n- On-page SEO for up to 5 pages\n- Google Analytics & Search Console setup\n- Monthly ranking report',
        yearly:
            '- Advanced keyword research (30 keywords)\n- On-page SEO for up to 15 pages\n- Competitor analysis\n- Local SEO optimization\n- Monthly detailed analytics report',
        price:
            '- Full-site SEO audit & implementation\n- Keyword research (100+ keywords)\n- Technical SEO fixes\n- Link building (10 backlinks/mo)\n- CRO\n- Weekly performance reports',
    },
    {
        service: 'Content Writing',
        monthly:
            '- 4 blog posts/mo (500 words)\n- 5 SEO-optimized web pages\n- Basic meta titles & descriptions',
        yearly:
            '- 8 blog posts/mo (700 words)\n- 15 SEO-optimized pages\n- In-depth meta tags + alt tags\n- Content calendar planning',
        price:
            '- 16 blog posts/mo (1,000+ words)\n- Full site content refresh\n- Sales copywriting\n- Editorial calendar\n- 8 social media posts/mo',
    },
    {
        service: 'Extras',
        monthly:
            '- Basic competitor keyword tracking\n- Email support',
        yearly:
            '- Competitor backlink tracking\n- Quarterly strategy call\n- Priority email + chat support',
        price:
            '- Dedicated account manager\n- Weekly strategy calls\n- Custom SEO & content strategy\n- 24/7 priority support & emergency fixes',
    },
    {
        service: 'Delivery Time',
        monthly: 'Monthly',
        yearly: 'Monthly',
        price: 'Monthly',
    },
    {
        service: 'Contract',
        monthly: '3 months minimum',
        yearly: '3 months minimum',
        price: '6 months minimum',
    },
];

const PricingPlans = () => {
    return (
        <section className="text-white py-10 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl text-[#BA72BA] font-semibold text-center mb-6">
                    Pricing Plan
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full border border-white/10 rounded-xl overflow-hidden">
                        <thead className="bg-[#D9D9D9] bg-opacity-10 text-left md:font-bold text-sm md:text-xl text-[#BA72BA]">
                            <tr>
                                <th className="px-2 md:px-6 py-4 text-sm md:text-xl border-b border-white/10">Tier</th>
                                <th className="px-2 md:px-6 py-4 text-sm md:text-xl border-b border-white/10">Silver</th>
                                <th className="px-2 md:px-6 py-4 text-sm md:text-xl border-b border-white/10">Gold</th>
                                <th className="px-2 md:px-6 py-4 border-b border-white/10">Platinum</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pricingData.map((item, index) => (
                                <tr key={index} className="hover:bg-white/5 bg-[#1C1C65] transition">
                                    <td className="px-2 md:px-6 py-4 text-xs md:text-lg border-b border-white/5">{item.service}</td>
                                    <td className="px-2 md:px-6 py-4 text-xs md:text-lg border-b border-white/5 whitespace-pre-line ">{item.monthly}</td>
                                    <td className="px-2 md:px-6 py-4 text-xs md:text-lg border-b border-white/5 whitespace-pre-line">{item.yearly}</td>
                                    <td className="px-2 md:px-6 py-4 text-xs md:text-lg border-b border-white/5 font-medium whitespace-pre-line">
                                        {item.price}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;
