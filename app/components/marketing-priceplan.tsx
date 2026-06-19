'use client';

import React from 'react';

const pricingData = [
  {
    service: "Price",
    monthly: "$600 / month",
    yearly: "$1,200 / month",
    price: "$2,500 / month",
  },
  {
    service: "Ideal For",
    monthly: "Small businesses & startups",
    yearly: "Growing businesses & SMEs",
    price: "Established brands & enterprises",
  },
  {
    service: "Social Media Management",
    monthly:
      "- Manage 2 platforms\n- 8 posts/month\n- Basic graphics support",
    yearly:
      "- Manage 4 platforms\n- 16 posts/month\n- Custom graphics & short videos",
    price:
      "- Manage all relevant platforms\n- 30+ posts/month\n- Video content creation & brand visuals",
  },
  {
    service: "Paid Advertising",
    monthly:
      "- Setup & monitor basic Google & Facebook Ads\n- Ad spend up to $500/month\n- Monthly performance report",
    yearly:
      "- Advanced ad targeting & retargeting\n- Ad spend up to $1500/month\n- A/B ad testing\n- Bi-weekly performance reports",
    price:
      "- Multi-channel paid ad campaigns (Google, Facebook, LinkedIn, TikTok)\n- Ad spend $5,000+\n- Weekly reporting & dashboard access\n- Conversion tracking & optimization",
  },
  {
    service: "Email Marketing",
    monthly:
      "- 1 campaign/month\n- Basic template design\n- List segmentation (up to 1k contacts)",
    yearly:
      "- 4 campaigns/month\n- Custom templates & automation setup\n- Advanced segmentation (up to 5k contacts)",
    price:
      "- 8+ campaigns/month\n- Fully automated workflows\n- List management & growth strategy (unlimited contacts)",
  },
  {
    service: "Content Marketing",
    monthly:
      "- Social media copywriting\n- Basic blog writing (2 posts/month, 500 words)",
    yearly:
      "- Blog posts (4 posts/month, 700 words)\n- Content calendar planning",
    price:
      "- Blog posts (8+/month, 1000+ words)\n- Full content strategy\n- Video scriptwriting & production support",
  },
  {
    service: "Support & Reporting",
    monthly: "- Monthly reports\n- Email support",
    yearly: "- Bi-weekly reports\n- Monthly strategy calls\n- Priority support",
    price:
      "- Weekly reports & calls\n- Dedicated account manager\n- 24/7 support & emergency fixes",
  },
  {
    service: "Contract Term",
    monthly: "3 months minimum",
    yearly: "3 months minimum",
    price: "6 months minimum",
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
