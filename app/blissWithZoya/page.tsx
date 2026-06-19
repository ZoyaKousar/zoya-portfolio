import * as React from "react";
import ContactSection from "../components/contactForm";
import LifestyleComponent from "../components/zoyaLife";
import { client } from "../../sanity/lib/client";

async function getData() {
    const query = `*[_type == 'blissWithZoya'][0]`;
    try {
        const fetchData = await client.fetch(query);
        return fetchData || [];
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export default async function BlissWithZoya() {
    const data = await getData();
    // Check if data exists and is not empty

    return (
        <div className="flex overflow-hidden flex-col justify-center">
            <div className="flex overflow-hidden relative flex-col pb-12 w-full font-light text-white min-h-[900px] max-md:max-w-full">
                <video
                    className="absolute inset-0 top-0 left-0 object-cover w-full h-full"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    poster="/hero.jpeg"
                >
                    <source src="/hero-bliss.mp4" type="video/mp4" />
                    <source src="/hero-bliss.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="flex flex-col px-4 w-full max-md:max-w-full">
                <div className="flex flex-col justify-center items-center py-12 w-full max-md:max-w-full">
                    <div className="flex flex-wrap gap-10 items-start max-w-full max-w-7xl">
                        <div className="flex flex-col xl:flex-row gap-10 xl:gap-36  mt-0   max-w-7xl mx-auto">
                            <div className="max-w-2xl mx-auto text-white">
                                <h2 className="text-4xl md:text-6xl text-center font-semibold mb-2">
                                    {data.title}
                                </h2>
                            </div>
                        </div>

                        <LifestyleComponent lifeStyle={data.lifeStyle}
                            caseStudies={data.caseStudiesSection}
                            subTitle={data.subTitle} />
                    </div>
                </div>
                <ContactSection />
            </div>
        </div>
    );
}
