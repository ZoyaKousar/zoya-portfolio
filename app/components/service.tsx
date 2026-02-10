"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";

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

  // Icon mapping for services
  const getServiceIcon = (title: string) => {
    if (title.toLowerCase().includes("paid advertising") || title.toLowerCase().includes("ads")) {
      return "📢";
    } else if (title.toLowerCase().includes("crm") || title.toLowerCase().includes("workflow")) {
      return "🔗";
    } else if (title.toLowerCase().includes("cms") || title.toLowerCase().includes("website")) {
      return "🌐";
    } else if (title.toLowerCase().includes("funnel") || title.toLowerCase().includes("automation")) {
      return "⚡";
    } else if (title.toLowerCase().includes("e-commerce") || title.toLowerCase().includes("ecommerce")) {
      return "🛒";
    }
    return "✨";
  };

  return (
    <div className="mx-auto mt-8 sm:mt-12 md:mt-16 overflow-hidden relative px-4 sm:px-6 md:px-8">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent pointer-events-none"></div>
      
      {/* Wrapper with overflow-hidden */}
      <div className="overflow-hidden relative">
        {/* Auto-scrolling row */}
        <Marquee gradient={false} speed={40} pauseOnHover={true}>
          {duplicatedServices.map((service, index) => (
            <motion.div
              key={`${service.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % services.length) * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex-shrink-0 min-w-[240px] xs:min-w-[260px] sm:min-w-[300px] md:min-w-[360px] lg:min-w-[400px] min-h-[220px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px] bg-gradient-to-br from-[#1C1C65]/80 via-[#2F2F8A]/60 to-[#1C1C65]/80 backdrop-blur-md rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-2xl flex flex-col items-center justify-center transform transition-all duration-300 hover:shadow-fuchsia-500/30 border border-fuchsia-500/20 hover:border-fuchsia-500/50 mx-2 sm:mx-3 md:mx-4 my-2 sm:my-3 relative overflow-hidden group"
            >
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-600/0 to-blue-600/0 group-hover:from-fuchsia-500/10 group-hover:via-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              {/* Icon/Image Section */}
              <div className="relative mb-2 sm:mb-3 md:mb-4 flex items-center justify-center">
                {service.image && service.image.asset ? (
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative flex items-center justify-center"
                  >
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                      <img
                        src={urlFor(service.image.asset).url()}
                        alt={service.image.alt || service.title}
                        className="w-full h-full object-cover rounded-full relative z-10"
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center justify-center w-full h-full relative z-10">
                      {getServiceIcon(service.title)}
                    </div>
                  </motion.div>
                )}
                {/* Pulse animation - outside the border, only on hover */}
                <div className="absolute -inset-2 sm:-inset-3 rounded-full bg-fuchsia-500/10 animate-ping opacity-0 group-hover:opacity-100 pointer-events-none"></div>
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold max-w-[220px] sm:max-w-[280px] md:max-w-[320px] text-center text-white mb-1.5 sm:mb-2 md:mb-3 px-2 group-hover:text-fuchsia-300 transition-colors duration-300 relative z-10 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-center text-[11px] sm:text-xs md:text-sm lg:text-base max-w-[220px] sm:max-w-[280px] md:max-w-[320px] leading-relaxed px-2 relative z-10 group-hover:text-gray-200 transition-colors duration-300">
                {service.description || service.line1}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-fuchsia-500 to-transparent rounded-bl-full"></div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ServicesSection;
