'use client';

import React from 'react';

const pricingData = [
  {
    service: 'Website Platforms',
    monthly: '1 platform (WordPress or Wix)',
    yearly: 'Up to 2 platforms (e.g., Webflow + Shopify)',
    price: 'Any platform with custom integrations',
  },
  {
    service: 'CRM Setup',
    monthly: 'Basic setup (1 tool)',
    yearly: 'CRM integration (2 tools)',
    price: 'Full CRM automation suite (multi-tool setup)',
  },
  {
    service: 'Pages Included',
    monthly: 'Up to 3 pages',
    yearly: 'Up to 7 pages',
    price: 'Up to 12 pages',
  },
  {
    service: 'Contact Forms / Lead Capture',
    monthly: 'Basic form',
    yearly: 'Custom forms + automation',
    price: 'Advanced forms + workflow automation',
  },
  {
    service: 'UI/UX Design',
    monthly: 'Template-based',
    yearly: 'Custom design',
    price: 'Premium UI/UX with animations',
  },
  {
    service: 'Hosting/Domain Setup',
    monthly: '✗',
    yearly: '✓',
    price: '✓ with SSL, CDN',
  },
  {
    service: 'API Integrations',
    monthly: '✗',
    yearly: '1 integration',
    price: 'Multiple integrations',
  },
  {
    service: 'Delivery Time',
    monthly: '7–10 days',
    yearly: '10–15 days',
    price: '15–25 days',
  },
  {
    service: 'Revisions',
    monthly: '1 revision',
    yearly: '3 revisions',
    price: '5 revisions',
  },
  {
    service: 'Monthly Maintenance (Optional)',
    monthly: '$99/month',
    yearly: '$149/month',
    price: '$199/month',
  },
  {
    service: 'One-Time Cost',
    monthly: '$499',
    yearly: '$999',
    price: '$1,799',
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
                                <th className="px-2 md:px-6 py-4 text-sm md:text-xl border-b border-white/10">Feature</th>
                                <th className="px-2 md:px-6 py-4 text-sm md:text-xl border-b border-white/10">Silver (Basic)</th>
                                <th className="px-2 md:px-6 py-4 text-sm md:text-xl border-b border-white/10">Gold (Standard)</th>
                                <th className="px-2 md:px-6 py-4 border-b border-white/10">Platinum (Pro)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pricingData.map((item, index) => (
                                <tr key={index} className="hover:bg-white/5 bg-[#1C1C65] transition">
                                    <td className="px-2 md:px-6 py-4 text-xs md:text-lg border-b border-white/5">{item.service}</td>
                                    <td className="px-2 md:px-6 py-4 text-xs md:text-lg border-b border-white/5 ">{item.monthly}</td>
                                    <td className="px-2 md:px-6 py-4 text-xs md:text-lg border-b border-white/5">{item.yearly}</td>
                                    <td className="px-2 md:px-6 py-4 text-xs md:text-lg border-b border-white/5 font-medium">
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
