import React from "react";
import Marquee from "react-fast-marquee";
import { v4 as uuidv4 } from "uuid";

interface Service {
  id: string;
  title: string;
  description: string;
  image?: {
    asset: {
      url: string;
    };
    alt: string;
  };
  line1?: string;
  line2?: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  const duplicatedServices = [...services, ...services];

  return (
    <section >
      {/* Title and subtitle */}
        {/* Marquee auto-scroll */}
      <div className="overflow-hidden">
        <Marquee gradient={false} speed={40} pauseOnHover={true} >
          {duplicatedServices.map((service) => (
            <div
              key={uuidv4()}
              className="flex-shrink-0 h-[300px] bg-[#22226C] bg-opacity-90 rounded-xl p-6 m-4 shadow-lg transition-transform hover:scale-105 text-white"
            >
              <h3 className="text-lg md:text-xl max-w-[190px] font-semibold mb-3 text-[#C961DE]">
                {service.title}
              </h3>
              <p className="text-sm md:text-base max-w-[210px] text-purple-100 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ServicesSection;
