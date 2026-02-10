
import * as React from "react";
import ContactSection from "../components/contactForm";
import { client } from "../../sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import SubServices from "../components/accordian";


async function getData() {
  const query = `*[_type == 'servicesSection'][0]`;
  try {
    const fetchData = await client.fetch(query);
    return fetchData || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// Define types for the data structure
interface Service {
  image?: {
    asset: {
      url: string;
    };
    alt: string;
  }; id: string; // Adjust based on your actual data structure
  title: string;
  description: string;
}

interface Step {
  stepTitle: string;
  stepNumber: string;
  id: string; // Adjust based on your actual data structure
  name: string;
  details: string;
}


export default async function Services() {
  const data = await getData();
  
  // Default content
  const defaultContent = {
    mainTitle: "MY SERVICES",
    mainDescription: "Custom stuff made to get your brand more creative, hit harder with people, and grow in ways that actually stick.",
    subtitle: "Services Designed to Inspire and Elevate Your Brand",
    coreServicesTitle: "My Core Services",
    coreServicesDescription: "I do custom work that really helps, building websites, growing e-commerce stores, clean design, and making sure Google actually shows you to people.",
    streamlinedTitle: "My Streamlined Approach",
    streamlinedDescription: "I keep it dead simple so we actually get results. Quick first call to understand you → solid plan → do the work → tweak till it's perfect. Everything's done carefully and fits what you're trying to do.",
    steps: [
      { stepNumber: "01", stepTitle: "Quick first call to understand you" },
      { stepNumber: "02", stepTitle: "Solid plan" },
      { stepNumber: "03", stepTitle: "Do the work" },
      { stepNumber: "04", stepTitle: "Tweak till it's perfect" }
    ]
  };

  return (
    <div className="flex mt-24 md:mt-32 px-4 overflow-hidden flex-col justify-center">
      <div className="flex flex-col w-full max-md:max-w-full">
        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 py-8 md:py-12 w-full">
          <div className="flex flex-wrap gap-10 items-start max-w-full w-[888px]">
            <div className="flex flex-col xl:flex-row gap-10 xl:gap-36 mt-0 md:px-16 max-w-7xl mx-auto">
              <div className="max-w-2xl mx-auto text-white mb-12">
                <h2 className="text-4xl md:text-6xl text-center font-semibold mb-4">
                  {data?.mainTitle || defaultContent.mainTitle}
                </h2>
                <p className="text-2xl text-center font-light xl:max-w-[610px]">
                  {data?.mainDescription || defaultContent.mainDescription}
                </p>
              </div>
            </div>

            {data?.headSectiom && (
              <>
                {data.headSectiom.title && (
                  <div className="flex flex-col grow shrink min-w-[240px] w-[404px] max-md:max-w-full text-white">
                    <div className="text-2xl leading-none text-[#C961DE] uppercase tracking-[3px] max-md:max-w-full">
                      {data.headSectiom.title}
                    </div>
                    <div className="flex flex-col mt-8 w-full max-md:max-w-full">
                      {(data.headSectiom.descriptionBeforeHighlight || data.headSectiom.descriptionHighlight || data.headSectiom.descriptionAfterHighlight) && (
                        <div className="text-3xl md:text-4xl font-extrabold text-white leading-10 text-[#C961DE] max-md:max-w-full">
                          {data.headSectiom.descriptionBeforeHighlight}
                          {data.headSectiom.descriptionHighlight && (
                            <span className="text-[#C961DE]"> {data.headSectiom.descriptionHighlight}</span>
                          )}
                          {data.headSectiom.descriptionAfterHighlight}
                        </div>
                      )}
                      {data.headSectiom.subDesciption && (
                        <div className="mt-6 text-2xl leading-8 text-white max-w-[300px]">
                          {data.headSectiom.subDesciption}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {data.headSectiom?.services && data.headSectiom.services.length > 0 && (
                  <div className="flex flex-col grow shrink text-2xl font-bold leading-none text-center text-white min-w-[240px] tracking-[2px] w-[262px]">
                    {data.headSectiom.services.map((item: Service, index: number) => (
                      index % 2 === 0 ? (
                        <div key={item.id || index} className="flex gap-8 items-center w-full">
                          <div className="gap-2.5 self-stretch px-2.5 py-4 my-auto bg-[#C961DE] rounded-[1000px] w-[238px]">
                            {item.title}
                          </div>
                          {item?.image?.asset ? (
                            <img
                              loading="lazy"
                              src={urlFor(item.image.asset).url()}
                              alt={item.image.alt || "Service Image"}
                              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[60px]"
                            />
                          ) : (
                            <span className="text-sm text-white">No Image Available</span>
                          )}
                        </div>
                      ) : (
                        <div key={item.id || index} className="flex gap-8 items-center my-8 w-full whitespace-nowrap">
                          {item?.image?.asset ? (
                            <img
                              loading="lazy"
                              src={urlFor(item.image.asset).url()}
                              alt={item.image.alt || "Service Image"}
                              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[60px]"
                            />
                          ) : (
                            <span className="text-sm text-white">No Image Available</span>
                          )}
                          <div className="gap-2.5 self-stretch px-2.5 py-4 my-auto bg-[#C961DE] rounded-[1000px] w-[238px]">
                            {item.title}
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="py-6">
          <SubServices/>
        </div>
        {/* Streamlined Approach Section */}
        <div className="flex flex-col items-center md:px-20 w-full max-md:max-w-full py-8 md:py-16">
          <div className="flex relative z-10 flex-col justify-center px-4 md:px-8 w-full max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-center items-start">
              <div className="flex flex-col flex-1 min-w-[240px]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4 md:mb-6">
                  <span className="text-fuchsia-500">{defaultContent.streamlinedTitle}</span>
                </h2>
                <p className="text-base md:text-lg lg:text-xl leading-8 text-gray-300">
                  {data?.streamlinedApproach?.descrition || defaultContent.streamlinedDescription}
                </p>
              </div>
              <div className="flex flex-col flex-1 min-w-[240px]">
                {(data?.streamlinedApproach?.steps || defaultContent.steps).map((item: Step, index: number) => (
                  <div key={index} className="flex gap-4 md:gap-8 lg:gap-10 items-center mb-4 md:mb-6">
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none text-fuchsia-500">
                      {item.stepNumber}
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-gray-300">
                      {item.stepTitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
    </div>
  );
}
