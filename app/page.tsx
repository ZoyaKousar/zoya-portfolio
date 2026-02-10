import React from 'react'
import ServicesSection from './components/service'
import Testimonials from './components/testimonials'
import ContactSection from './components/contactForm'
import Link from 'next/link'
import { client } from "../sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import TypingAnimation from './components/typingAnimation';
import StatsCard from './components/statsCard';
import RecentWorkSection from './components/recentWorkSection';
import CaseStudiesSection from './components/caseStudiesSection';

async function getData() {
  const query = `*[_type == 'heroSection'][0]`;
  try {
    const fetchData = await client.fetch(query);
    return fetchData || {};
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      title: "Full Stack Digital Manager",
      description: "Expert in QA Automation, Technical Writing, Web Development, Digital Marketing",
      button1: { link: "#", text: "Contact Me" },
      button2: { text: "Download CV" },
      image: { asset: { _ref: "" }, alt: "" },
      aboutMeSection: {
        descriptionDsk: "I'm a tech-savvy Virtual Assistant with expertise in multiple domains.",
        descriptionMob: "Tech-savvy VA with diverse expertise.",
        name: "Zoya Kousar",
        profession: "Virtual Assistant",
        image: { asset: { _ref: "" }, alt: "" }
      },
      timelineSection: {
        experience: "6+",
        expDescription: "Years Experience",
        projectCmp: "50+",
        proDescription: "Projects Completed",
        clients: "30+",
        clientsDesc: "Happy Clients"
      },
      recentSection: {
        titlebfHighlight: "My Recent",
        titleHigh: "Work",
        titleAfHighlight: "",
        image: { asset: { _ref: "" }, alt: "" }
      },
      toolsSection: {
        title: "Tools & Technologies",
        description: "Technologies I work with",
        imageDsk: { asset: { _ref: "" }, alt: "" },
        imageMob: { asset: { _ref: "" }, alt: "" }
      },
      servicesSection: {
        titleHighlight: "My",
        title: "Services",
        items: []
      },
      testimonialSection: []
    };
  }
}

// Default Services Data
const defaultServices = [
  {
    id: "paid-advertising",
    title: "Paid Advertising (Meta & Google Ads)",
    description: "I do full-funnel PPC the right way: ads that actually grab attention, audiences dialed in tight, retargeting that works without being annoying, and I'm always messing with them to squeeze out better results week after week.",
  },
  {
    id: "crm-workflow",
    title: "CRM & Workflow Integration",
    description: "I plug in Salesforce, GHL or HubSpot so it actually fits your business, set up automations that catch leads, follow up like a normal person would (not robot spam), and help turn those leads into paying customers instead of disappearing.",
  },
  {
    id: "cms-development",
    title: "CMS-Based Website Development",
    description: "I build sites that look good on phones (WordPress, Webflow, Wix), throw in proper SEO from the jump, and make sure all the tracking stuff (pixels, GA4, events) is wired up correctly day one.",
  },
  {
    id: "funnel-automation",
    title: "Funnel Building & Marketing Automation",
    description: "I create real funnels in GoHighLevel or HubSpot, start with a lead magnet that pulls people in, then email/SMS sequences that feel natural and actually push toward a sale.",
  },
  {
    id: "ecommerce-strategy",
    title: "E-commerce Strategy",
    description: "Shopify, Systeme.io or Woo stores built clean: funnels connected properly, product pages people stick around for, and paid ads driving traffic that converts instead of just window shopping.",
  },
];

const caseStudies = [
  {
    title: "E-commerce Growth via Funnel + Ads [Shopify Case]",
    challenge: "Traffic was coming but carts abandoned like crazy and sales were almost nothing.",
    solution:
      "Threw together a solid GHL funnel tied right into Shopify + hit them with Meta retargeting.",
    results: [
      "Conversions doubled",
      "Abandonment down 40%",
      "Revenue up 67% in 60 days",
    ],
  },
  {
    title: "CRM-Driven Lead Nurturing for IT Services [Web Dev & CRM Case]",
    challenge: "Leads everywhere but follow-up was a total mess, spreadsheets, missed calls, forgotten emails.",
    solution:
      "Got HubSpot running + real automated email and SMS flows that don't sound like a machine wrote them.",
    results: [
      "Response time cut 80%",
      "Monthly conversions ×3",
    ],
  },
  {
    title: "Multi-Channel Strategy for Brand Awareness [Digital Marketing Case]",
    challenge: "Nobody could find them on Google or social, basically invisible.",
    solution:
      "Wrote content that actually ranks, ran ads on Meta + Google, tweaked everything based on what numbers were saying.",
    results: [
      "Traffic jumped 150%",
      "Engagement 3× what it was",
    ],
  },
  {
    title: "App + Web Launch with HubSpot Integration [Web & Mobile Case]",
    challenge: "Site was trash on mobile and we had no idea what people were doing once they landed.",
    solution:
      "Built a decent responsive site + simple app, hooked it all to HubSpot for real-time tracking and emails that make sense.",
    results: [
      "Active users ×5",
      "Retention doubled",
    ],
  },
  {
    title: "B2B Website & Sales Funnel Overhaul [Company Case]",
    challenge: "Old-looking site, leads costing way too much, and barely any coming in.",
    solution:
      "Gave them a fresh WordPress build, strong GHL funnel behind the scenes, smarter ad budget.",
    results: [
      "Cost per lead down 35%",
      "4× more leads coming through",
    ],
  },
];

export default async function Homepage() {
  const data = await getData();
  return (
    <div className="flex flex-col px-4">
      <div className="flex flex-col w-full max-md:max-w-full">
        {/* HERO SECTION */}
        <section className="mt-32 md:mt-20 py-6 md:py-16  flex flex-col md:flex-row items-center justify-center gap-6 md:min-h-[609px] lg:min-h-[670px] xl:min-h-[730px] max-w-7xl mx-auto">
          <div className="md:w-1/2 justify-center items-top">
            <h1 className="text-3xl md:text-5xl text-white font-bold mb-10 leading-tight">
              <TypingAnimation 
                text={[
                  "Smart Growth: <span class='bg-[#2954A3]/60 text-white px-2 py-1 rounded'>Full-Stack + CRM</span>",
                  "Results with <span class='bg-[#2954A3]/60 text-white px-2 py-1 rounded'>WordPress, Shopify & Ads</span>",
                  "Leads & Sales through <span class='bg-[#2954A3]/60 text-white px-2 py-1 rounded'>SEO Automation</span>"
                ]} 
                speed={50} 
                deleteSpeed={30}
                pauseTime={1500}
              />
            </h1>
            <p className="text-base md:text-lg mb-10 text-white" style={{ opacity: 0.8 }}>
              {data?.description || "Expert in QA Automation, Technical Writing, Web Development"}
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              {data?.button1?.link && (
                <Link
                  href={data.button1.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-center w-[200px] text-white px-6 py-3 rounded-[50px] hover:bg-fuchsia-500">
                  {data.button1?.text || "Contact Me"}
                </Link>
              )}
              <a href="Zoya Kou  Full Stack Digital Manager & Tech-Savvy Virtual Assistant.pdf" download>
                <div className="text-white text-center w-[200px] px-6 py-3 rounded-[50px] bg-gradient-primary bg-gradient-primary-hover transition-all">
                  {data?.button2?.text || "Download CV"}
                </div>
              </a>

            </div>
          </div>
          {data?.image && (
            <div className="md:w-1/2 flex justify-end items-center self-center">
              <img
                src={urlFor(data.image).url()}
                alt={data.image?.alt || "Hero image"}
                className="h-[350px] md:h-[450px] rounded-lg"
              />
            </div>
          )}
        </section>

        {/* Experience */}
        <div className="flex flex-col justify-center items-center py-6 md:py-20 xl:py-40 text-fuchsia-500 relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />
          <div className="flex flex-wrap justify-center items-center px-2.5 w-full max-md:max-w-full gap-4">
            <StatsCard
              number={data?.timelineSection?.experience || "6+"}
              label={data?.timelineSection?.expDescription || "Years Experience"}
              delay={0}
              className="rounded-tl-md rounded-bl-md"
            />
            <StatsCard
              number={data?.timelineSection?.projectCmp || "50+"}
              label={data?.timelineSection?.proDescription || "Projects Completed"}
              delay={200}
              className="text-white bg-indigo-900"
            />
            <StatsCard
              number={data?.timelineSection?.clients || "30+"}
              label={data?.timelineSection?.clientsDesc || "Happy Clients"}
              delay={400}
              className="rounded-none rounded-tr-md rounded-br-md"
            />
          </div>
        </div>
        {/* Recent Work */}
        <RecentWorkSection />

        <div className="flex flex-col justify-center items-center py-10 md:py-16 text-2xl leading-7 text-center text-white">
          <div className="flex flex-col max-w-full w-[1320px]">
            <h2 className='text-3xl md:text-5xl font-bold'>{data?.toolsSection?.title || "Tools & Technologies"}</h2>
            <p className="text-xl md:text-3xl font-light mt-5">{data?.toolsSection?.description || "Technologies I work with"}</p>
            {data?.toolsSection?.imageDsk && (
              <img
                loading="lazy"
                src={urlFor(data.toolsSection.imageDsk).url()}
                alt={data.toolsSection.imageDsk?.alt || "Tools desktop"}
                className="hidden md:block mt-6 md:mt-16 max-w-full"
              />
            )}
            {data?.toolsSection?.imageMob && (
              <img
                loading="lazy"
                src={urlFor(data.toolsSection.imageMob).url()}
                alt={data.toolsSection.imageMob?.alt || "Tools mobile"}
                className="block md:hidden mt-16 max-w-full"
              />
            )}
          </div>
        </div>

        <section className='py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-0'>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4 sm:mb-6 md:mb-8 px-4">
            <span className="text-fuchsia-500">{data?.servicesSection?.titleHighlight || "My"}</span> {data?.servicesSection?.title || "Services"}
          </h2>
          <ServicesSection services={data?.servicesSection?.items?.length > 0 ? data.servicesSection.items : defaultServices} />
        </section>

        <CaseStudiesSection caseStudies={caseStudies} />

        <Testimonials experiences={data?.testimonialSection || []} />
        <ContactSection />

      </div>
    </div >
  )
}




















