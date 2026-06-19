// app/components/SkillsSection.tsx
"use client";

import Image from "next/image";
import { FC } from "react";
import { FaWordpressSimple } from "react-icons/fa";
import { SiShopify, SiNextdotjs, SiSanity, SiWix, SiHubspot } from "react-icons/si";

const skills = [
  {
    title: "WordPress",
    icon: <FaWordpressSimple size={32} className="text-blue-500" />,
    description: "Custom themes, plugin integration, security hardening.",
  },
  {
    title: "Shopify",
    icon: <SiShopify size={32} className="text-green-500" />,
    description: "Custom theme dev, multichannel integration, CRO-focused builds.",
  },
  {
    title: "Sanity.io + Next.js",
    icon: (
      <div className="flex gap-6 items-center">
        <SiSanity size={28} className="text-red-500" />
        +
        <SiNextdotjs size={28} />
      </div>
    ),
    description: "Headless CMS with dynamic content and blazing speed.",
  },
  {
    title: "Wix",
    icon: <SiWix size={36} className="text-black" />,
    description: "Design-centric, modern brochure sites with performance enhancements.",
  },
];

const crms = [
  {
    title: "HubSpot CRM",
    icon: <SiHubspot size={32} className="text-orange-500" />,
    description: "Lead capture, full-funnel workflows, custom dashboards.",
  },
   {
    title: "Go High Level",
    icon: <Image src="/gohighlevel.png" alt="Go High Level" width={92} height={92} />,
    description: "Website + funnel builds, SMS/email automations, pipeline tracking.",
  },
  {
    title: "System.io",
    icon: <Image src="/systeme-io.png" alt="System.io" width={92} height={92} />,
    description: "Membership platforms, upsells, email flows, gated content.",
  },
];

const SkillsSection: FC = () => {
  return (
    <section className="py-10 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">What I Bring to the Table</h2>
        <p className="text-xl font-bold text-[#BA72BA] mb-12">Multi-Platform Web Development</p>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {skills.map((item) => (
            <div
              key={item.title}
              className="bg-[#22226C] bg-opacity-90 p-6 rounded-2xl border border-white shadow-lg hover:shadow-purple-500/20 transition"
            >
                 <h3 className="text-xl text-[#BA72BA] font-semibold mb-4">{item.title}</h3>
              <div className="mb-4">{item.icon}</div>
             
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="text-xl font-bold text-[#BA72BA] mb-8">CRM Implementation & Automation</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {crms.map((item) => (
            <div
              key={item.title}
              className="bg-[#22226C] bg-opacity-90 p-6 rounded-2xl border border-white shadow-lg hover:shadow-purple-500/20 transition"
            >
              <h3 className="text-xl text-[#BA72BA] font-semibold mb-4">{item.title}</h3>
              <div className="mb-4">{item.icon}</div>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
