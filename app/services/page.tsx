
import * as React from "react";
import ContactSection from "../components/contactForm";
import { client } from "../../sanity/lib/client";
import SubServices from "../components/accordian";
import ServicesHero from "../components/servicesHero";


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
    <div className="flex mt-24 md:mt-32 flex-col justify-center">
      <div className="flex flex-col w-full max-md:max-w-full">
        <ServicesHero />
        <SubServices/>
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
