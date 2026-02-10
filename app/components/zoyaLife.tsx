"use client";
import React, { useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ShoppingCart, Search, Store, Laptop } from "lucide-react";
import Link from "next/link";


interface CaseStudy {
  image: SanityImageSource;
  id: string; // Add appropriate fields based on the structure of each case study
  title: string;
  description: string;
}
interface ImageWithText {
  image: {
    asset: {
      url: string;
    };
  };
  hoverText?: string;
}

interface LifeStyle {
  imagesWithText: ImageWithText[];
}


interface LifestyleComponentProps {
  lifeStyle: LifeStyle; 
  
  caseStudies: {
    caseStudies: CaseStudy[];
  };
  subTitle: string;
}

const caseStudies = [
  {
    title: "E-commerce Funnel Optimization",
    description:
      "Built a complete Meta Ads funnel for a Shopify store, doubling conversions and increasing revenue by 67%.",
    icon: ShoppingCart,
    slug: "/case-studies/ecommerce",
  },
  {
    title: "SEO Traffic Explosion",
    description:
      "Implemented technical and content SEO strategies that increased organic traffic by 150% and tripled engagement.",
    icon: Search,
    slug: "/case-studies/seo",
  },
  {
    title: "Shopify Growth System",
    description:
      "Crafted a full-scale Shopify growth strategy with funnels, Meta retargeting, and GHL automation.",
    icon: Store,
    slug: "/case-studies/shopify-products",
  },
  {
    title: "Web & Mobile App with CRM",
    description:
      "Launched a cross-platform app with HubSpot CRM integration for real-time user tracking and automation.",
    icon: Laptop,
    slug: "/case-studies/web-and-mobile-app-development",
  },
];
const LifestyleComponent: React.FC<LifestyleComponentProps> = ({ lifeStyle, subTitle }) => {
  const [activeButton, setActiveButton] = useState<"Travelling" | "Case Studies">("Travelling");

  return (
    <div className="flex overflow-hidden flex-col justify-center">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center w-full max-md:max-w-full px-16 max-md:px-5">
        <div className="flex flex-col justify-center mx-auto max-w-full text-center w-[1400px]">
          <p className="self-center text-2xl font-semibold text-stone-300">{subTitle}</p>

          {/* Dynamic Header */}
          <h2 className="mt-5 text-5xl font-bold">
            <span className="text-[#C961DE]">
              {activeButton === "Travelling" ? "My " : "My "}
            </span>
            <span className="text-white">
              {activeButton === "Travelling" ? "Lifestyle" : "Work"}
            </span>
          </h2>

          {/* Buttons */}
          <div className="mt-14 flex mx-auto gap-4">
            <button
              onClick={() => setActiveButton("Travelling")}
              className={`${activeButton === "Travelling"
                ? "text-white bg-gradient-primary gap-2.5 self-stretch px-5 py-3.5 my-auto rounded-[50px] transition-all cursor-pointer"
                : "bg-transparent text-gradient-primary "
                } px-5 py-3.5 my-auto rounded-[50px] font-md text-xl`}
            >
              Travelling
            </button>
            <button
              onClick={() => setActiveButton("Case Studies")}
              className={`${activeButton === "Case Studies"
                ? "text-white bg-gradient-primary gap-2.5 self-stretch px-5 py-3.5 my-auto rounded-[50px] transition-all cursor-pointer"
                : "bg-transparent text-gradient-primary "
                } px-5 py-3.5 my-auto rounded-[50px] font-md text-xl`}
            >
              Case Studies
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Images Section */}
      <div className="mt-20 w-full flex mx-auto max-md:mt-10">
        {activeButton === "Travelling" ? (
          // Travelling images section
          <div className="flex gap-5 max-md:flex-col mx-auto max-w-[888px]">
            <div className="flex flex-col w-1/2 gap-5 max-md:w-full">
              {/* First Image */}
              <div className="max-w-[616px] h-auto overflow-hidden relative group rounded-lg">
                {lifeStyle.imagesWithText[0] && (
                  <img
                    loading="lazy"
                    src={urlFor(lifeStyle.imagesWithText[0].image).url()}
                    className="object-cover w-full rounded-lg max-md:h-auto transform scale-110 transition-transform duration-300 group-hover:scale-100 group-hover:brightness-50"
                    alt={lifeStyle.imagesWithText[0]?.hoverText || "Travel Image 1"}
                  />
                )}
                <div className="absolute bottom-0 h-10 lg:h-[70px] xl:h-[116px] w-full flex items-center pl-4 bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                  <span className="text-white text-sm lg:text-xl xl:text-[32px] font-semibold pointer-events-auto">
                    {lifeStyle.imagesWithText[0]?.hoverText || "Trip to - Chicago"}
                  </span>
                </div>
              </div>
              {/* Second Image */}
              <div className="max-w-[616px] h-auto overflow-hidden relative group rounded-lg">
                {lifeStyle.imagesWithText[1] && (
                  <img
                    loading="lazy"
                    src={urlFor(lifeStyle.imagesWithText[1].image).url()}
                    className="object-cover w-full rounded-lg max-md:h-auto transform scale-110 transition-transform duration-300 group-hover:scale-100 group-hover:brightness-50"
                    alt={lifeStyle.imagesWithText[1]?.hoverText || "Travel Image 2"}
                  />
                )}
                <div className="absolute bottom-0 h-10 lg:h-[70px] xl:h-[116px] w-full flex items-center pl-4 bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                  <span className="text-white text-sm lg:text-xl xl:text-[32px] font-semibold pointer-events-auto">
                    {lifeStyle.imagesWithText[1]?.hoverText || "Trip to - Dubai"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/2 gap-5 max-md:w-full">
              {/* Third Image */}
              <div className="max-w-[616px] h-auto overflow-hidden relative group rounded-lg">
                {lifeStyle.imagesWithText[2] && (
                  <img
                    loading="lazy"
                    src={urlFor(lifeStyle.imagesWithText[2].image).url()}
                    className="object-cover w-full rounded-lg max-md:h-auto transform scale-110 transition-transform duration-300 group-hover:scale-100 group-hover:brightness-50"
                    alt={lifeStyle.imagesWithText[2]?.hoverText || "Travel Image 3"}
                  />
                )}
                <div className="absolute bottom-0 h-10 lg:h-[70px] xl:h-[116px] w-full flex items-center pl-4 bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                  <span className="text-white text-sm lg:text-xl xl:text-[32px] font-semibold pointer-events-auto">
                    {lifeStyle.imagesWithText[2]?.hoverText || "Trip to - New Zealand"}
                  </span>
                </div>
              </div>
              {/* Fourth Image */}
              <div className="max-w-[616px] h-auto overflow-hidden relative group rounded-lg">
                {lifeStyle.imagesWithText[3] && (
                  <img
                    loading="lazy"
                    src={urlFor(lifeStyle.imagesWithText[3].image).url()}
                    className="object-cover w-full rounded-lg max-md:h-auto transform scale-110 transition-transform duration-300 group-hover:scale-100 group-hover:brightness-50"
                    alt={lifeStyle.imagesWithText[3]?.hoverText || "Travel Image 4"}
                  />
                )}
                <div className="absolute bottom-0 h-10 lg:h-[70px] xl:h-[116px] w-full flex items-center pl-4 bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                  <span className="text-white text-sm lg:text-xl xl:text-[32px] font-semibold pointer-events-auto">
                    {lifeStyle.imagesWithText[3]?.hoverText || "Trip to - UK"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Case Studies grid section
          <div className="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-[#1C1C65] rounded-xl p-6 text-white shadow-md hover:shadow-lg transition-all"
            >
              <div className="mb-4 text-blue-400">
                <study.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{study.description}</p>
              <Link
                href={study.slug}
                className="inline-block text-sm text-blue-300 hover:underline"
              >
                View Case Study →
              </Link>
            </div>
          ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LifestyleComponent;
