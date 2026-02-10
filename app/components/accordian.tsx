// components/SubServices.tsx
'use client';

import Link from 'next/link';
import { Code, Store, Brush, Search } from 'lucide-react';

export default function SubServices() {
  const services = [
    {
      title: 'Web & CRM Service',
      description:
        'Websites built exactly how you need them + CRM setup that automates lead chasing, gives clients their own portal, and keeps your internal stuff running smooth.',
      icon: <Code className="w-8 h-8 text-fuchsia-400" />,
      link: '/services/web-development-and-crm-automation',
    },
    {
      title: 'Shopify Growth Service',
      description:
        "Full Shopify stores from the ground up: funnels that nudge people to checkout, pages tweaked so more people buy, retargeting ads that bring back the ones who left, and integrations that don't cause chaos.",
      icon: <Store className="w-8 h-8 text-fuchsia-400" />,
      link: '/services/shopify-growth-service',
    },
    {
      title: 'UI/UX Service',
      description:
        'Sharp design systems, rough wireframes first, then clickable prototypes, finally clean mobile + desktop layouts that look good and actually work for everyone, including people who need extra accessibility.',
      icon: <Brush className="w-8 h-8 text-fuchsia-400" />,
      link: '/services/uiux-service',
    },
    {
      title: 'SEO Service',
      description:
        "Proper SEO: fixing the behind-the-scenes tech stuff, improving what's on the pages, writing content that ranks, so you get way more visitors and show up when people search the things you sell.",
      icon: <Search className="w-8 h-8 text-fuchsia-400" />,
      link: '/services/seo-service',
    },
  ];

  return (
    <section className="py-10 lg:px-16" id="services">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">My Core Services</h2>
        <p className="text-gray-200 mb-12 max-w-2xl mx-auto text-base md:text-lg">
          I do custom work that really helps, building websites, growing e-commerce stores, clean design, and making sure Google actually shows you to people.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Link
              href={service.link}
              key={index}
              className="group"
            >
              <div className="bg-[#2F2F8A] bg-opacity-60 border border-solid border-white border-opacity-10 backdrop-blur-md rounded-2xl p-6 text-left shadow-sm hover:shadow-md hover:scale-[1.02] transition duration-300 h-full">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:underline">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-200">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
