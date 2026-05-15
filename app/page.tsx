import React from 'react'
import ServicesSection from './components/service'
import Testimonials from './components/testimonials'
import ContactSection from './components/contactForm'
import Link from 'next/link'
import Image from "next/image";
import { client } from "../sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import TypingAnimation from './components/typingAnimation';
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
      button2: { link: "/cv/general.pdf" , text: "Download CV" },
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
    href: "/shopify-case-studies",
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
    href: "/web-dev",
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
    href: "/digital-marketing",
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
    href: "/portfolio",
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
    href: "/wordpress",
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
  const heroName ="ZOYA KOUSAR";
  return (
    <div className="flex flex-col px-4">
      <div className="flex flex-col w-full max-md:max-w-full">
        {/* HERO SECTION */}
        <section className="relative mt-24 md:mt-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 min-h-[calc(100vh-96px)] max-w-7xl mx-auto w-full px-2 md:px-6">

          {/* LEFT — copy */}
          <div className="hero-copy-fade flex flex-col w-full md:w-1/2 justify-center z-10">

            {/* Badge */}
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-fuchsia-300">
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
              Available for work
            </span>

            {/* Greeting */}
            <p className="text-white/60 tracking-widest text-sm font-medium mb-2 uppercase">
              Hello, I&apos;m
            </p>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.0] tracking-tight mb-4">
              <span className="text-gradient-primary">{heroName}</span>
            </h1>

            {/* Typing tagline */}
            <div className="text-xl sm:text-2xl md:text-3xl text-white font-semibold leading-snug mb-5 min-h-[2.5rem]">
              <TypingAnimation
                text={[
                  "Smart Growth: <span class='hero-chip'>Full-Stack + CRM</span>",
                  "Results with <span class='hero-chip'>WordPress, Shopify & Ads</span>",
                  "Leads & Sales through <span class='hero-chip'>SEO Automation</span>"
                ]}
                speed={50}
                deleteSpeed={30}
                pauseTime={1500}
              />
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-white/65 leading-relaxed mb-8 max-w-md">
              {data?.description || "Helping businesses scale with smart tools like GoHighLevel, HubSpot, Meta Ads & more."}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              {data?.button1?.link ? (
                <Link
                  href={data.button1.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-lg">
                  {data.button1?.text || "Hire me"}
                </Link>
              ) : (
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-lg">
                  Hire me
                </Link>
              )}
              <a href="/cv/general.pdf" download
                className="inline-flex items-center gap-2 rounded-full bg-[#c961de] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#c961de]/30 transition-all duration-300 hover:bg-[#b050c8] hover:shadow-[#c961de]/50">
                {data?.button2?.text || "Download CV"}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-stretch gap-0 divide-x divide-white/10">
              <div className="flex flex-col pr-7">
                <span className="text-3xl font-black leading-none text-white md:text-4xl">
                  {data?.timelineSection?.experience || "6+"}
                </span>
                <span className="mt-1.5 text-xs font-medium text-white/50 md:text-sm">
                  {data?.timelineSection?.expDescription || "Years Experience"}
                </span>
              </div>
              <div className="flex flex-col px-7">
                <span className="text-3xl font-black leading-none text-[#c961de] md:text-4xl">
                  {data?.timelineSection?.projectCmp || "50+"}
                </span>
                <span className="mt-1.5 text-xs font-medium text-white/50 md:text-sm">
                  {data?.timelineSection?.proDescription || "Projects Completed"}
                </span>
              </div>
              <div className="flex flex-col pl-7">
                <span className="text-3xl font-black leading-none text-white md:text-4xl">
                  {data?.timelineSection?.clients || "30+"}
                </span>
                <span className="mt-1.5 text-xs font-medium text-white/50 md:text-sm">
                  {data?.timelineSection?.clientsDesc || "Happy Clients"}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — portrait */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
            <div className="hero-portrait">
              <div className="hero-portrait-glow" aria-hidden="true" />
              <Image
                src="/zoyakk.jpeg"
                alt="Zoya Kousar"
                width={320}
                height={520}
                priority
                className="hero-portrait-img"
              />
            </div>
          </div>

        </section>

        {/* Recent Work */}
        <RecentWorkSection />

        <div className="flex flex-col justify-center items-center py-10 md:py-16 text-2xl leading-7 text-center text-white">
          <div className="flex flex-col max-w-full w-[1320px]">
            <h2 className='text-3xl md:text-5xl font-bold'>{data?.toolsSection?.title || "Tools & Technologies"}</h2>
            <p className="text-xl md:text-3xl font-light mt-5">{data?.toolsSection?.description || "Technologies I work with"}</p>
            {data?.toolsSection?.imageDsk?.asset?._ref && (
              <img
                loading="lazy"
                src={urlFor(data.toolsSection.imageDsk).url()}
                alt={data.toolsSection.imageDsk?.alt || "Tools desktop"}
                className="hidden md:block mt-6 md:mt-16 max-w-full"
              />
            )}
            {data?.toolsSection?.imageMob?.asset?._ref && (
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




















