'use client';

import React from 'react';

const pricingData = [
  {
    service: 'Price',
    monthly: '$1,500 / month',
    yearly: '$3,500 / month',
    price: '$6,500 / month',
  },
  {
    service: 'UI/UX Design',
    monthly:
      '- Intuitive web & app interfaces\n- Up to 3 pages/screens\n- 2 design revisions\n- Mobile responsive & accessibility basics',
    yearly:
      '- Full website & app design\n- Up to 10 pages/screens\n- 5 design revisions\n- Advanced prototyping & user testing\n- Comprehensive UX strategy',
    price:
      '- Unlimited pages/screens\n- Unlimited revisions\n- Custom animations & interactive elements\n- Comprehensive UX strategy',
  },
  {
    service: 'Graphic Design & Branding',
    monthly:
      '- Logo refresh & basic branding\n- Social media templates (3)\n- Brand color palette',
    yearly:
      '- Complete brand identity\n- Custom logo design\n- Print & digital assets\n- Brand style guide (PDF)',
    price:
      '- Premium brand strategy\n- Logo + NFT design\n- Full brand guidelines\n- Marketing collateral set',
  },
  {
    service: 'Social Media Content',
    monthly:
      '- 5 custom posts per month\n- Platform-optimized creatives\n- Basic CTA copy',
    yearly:
      '- 15 posts/month + stories\n- Campaign concept & execution\n- Advanced CTA & hashtag strategy',
    price:
      '- 30 posts/month + reels/videos\n- Influencer & engagement strategy\n- Content calendar & analytics reporting',
  },
  {
    service: 'Video Production',
    monthly:
      '- Short promo videos (1 per month)\n- Basic editing & subtitles',
    yearly:
      '- Up to 3 videos/month\n- Motion graphics & branding integration',
    price:
      '- Unlimited videos\n- Advanced editing, animations & voiceovers\n- Video ad campaign management',
  },
  {
    service: 'Delivery Time',
    monthly: '10 business days',
    yearly: '7 business days',
    price: '3-5 business days',
  },
  {
    service: 'Asset Handover',
    monthly: 'Source files (.PNG, .JPG, PDF)',
    yearly: 'Editable files (.AI, .PSD, .Figma)\nStyle guide PDF',
    price: 'Full source files + animations\nComprehensive brand & asset package',
  },
  {
    service: 'Support & Communication',
    monthly: 'Email support\nWeekly updates',
    yearly: 'Dedicated project manager\nBi-weekly calls',
    price: 'Priority support & dedicated strategist\nWeekly calls & reporting',
  },
  {
    service: 'Bonus Features',
    monthly: '—',
    yearly: '—',
    price: 'Priority delivery\nExtra 5 revisions\nAnimated logo versions\nCustom brand workshops',
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
