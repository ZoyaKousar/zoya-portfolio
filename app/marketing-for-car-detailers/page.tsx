import React from 'react'
import Section1_Hero from './components/Section1_Hero'
import Section2_Problem from './components/Section2_Problem'
import Section3_Services from './components/Section3_Services'
import Section4_HowItWorks from './components/Section4_HowItWorks'
import Section5_WhyUs from './components/Section5_WhyUs'
import Section6_Pricing from './components/Section6_Pricing'
import Section7_Testimonials from './components/Section7_Testimonials'
import Section8_FAQ from './components/Section8_FAQ'

// Metadata for SEO
export const metadata = {
  title: 'Zoya | Done-For-You Marketing for Car Detailing Businesses',
  description: 'I help car detailing businesses across the USA get more bookings, automate follow-ups, and build a fully booked calendar — without lifting a finger. Meta Ads, Google Maps, CRM, and content creation.',
  keywords: 'car detailing marketing, detailing business marketing, auto detailer SEO, car detailing leads, detailing CRM, Google Maps for detailers, detailing marketing expert',
  authors: [{ name: 'Zoya' }],
  openGraph: {
    title: 'Zoya | Get Your Detailing Business Booked Solid',
    description: 'Done-for-you marketing for car detailing businesses. Meta Ads, Google Maps, CRM Automation & Content Creation. Results in 30 days.',
    url: 'https://www.zoyakk.com/marketing-for-car-detailers',
    siteName: 'Zoya',
    images: [
      {
        url: 'https://www.zoyakk.com/ceramic-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Zoya - Detailing Marketing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoya | Done-For-You Detailing Marketing',
    description: 'Get more bookings, automate follow-ups, and build a fully booked calendar.',
    images: ['https://www.zoyakk.com/ceramic-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.zoyakk.com/marketing-for-car-detailers',
  },
}

const Page = () => {
  return (
    <div className="bg-transparent">
      <Section1_Hero />
      <Section2_Problem />
      <Section3_Services />
      <Section4_HowItWorks />
      <Section5_WhyUs />
      <Section6_Pricing />
      <Section7_Testimonials />
      <Section8_FAQ />
    </div>
  )
}

export default Page