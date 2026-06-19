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
              className="group relative mx-2 my-2 flex min-h-[220px] min-w-[240px] flex-shrink-0 transform flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-200/90 bg-white p-3 shadow-lg shadow-gray-300/50 transition-all duration-300 hover:border-fuchsia-400/55 hover:shadow-xl hover:shadow-fuchsia-500/20 xs:min-w-[260px] sm:mx-3 sm:my-3 sm:min-h-[260px] sm:min-w-[300px] sm:p-4 md:mx-4 md:min-h-[280px] md:min-w-[360px] md:rounded-2xl md:p-5 lg:min-h-[300px] lg:min-w-[400px] lg:p-6"
            >
              {/* Light wash on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-fuchsia-500/0 via-purple-500/0 to-indigo-500/0 transition-all duration-500 group-hover:from-fuchsia-500/[0.07] group-hover:via-purple-500/[0.06] group-hover:to-indigo-500/[0.05] md:rounded-2xl" />

              {/* Soft glow on hover */}
              <div className="pointer-events-none absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-fuchsia-400/25 via-purple-400/20 to-indigo-400/25 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon/Image Section */}
              <div className="relative mb-2 flex items-center justify-center sm:mb-3 md:mb-4">
                {service.image && service.image.asset ? (
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative flex items-center justify-center"
                  >
                    <div className="relative flex h-12 w-12 items-center justify-center sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24">
                      <img
                        src={urlFor(service.image.asset).url()}
                        alt={service.image.alt || service.title}
                        className="relative z-10 h-full w-full rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-fuchsia-200/90"
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    className="relative flex h-12 w-12 items-center justify-center rounded-full border border-fuchsia-200/80 bg-gradient-to-br from-fuchsia-50 to-purple-50 text-xl shadow-inner transition-all duration-300 sm:h-16 sm:w-16 sm:text-2xl md:h-20 md:w-20 md:text-3xl lg:h-24 lg:w-24 lg:text-4xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative z-10 flex h-full w-full items-center justify-center">
                      {getServiceIcon(service.title)}
                    </div>
                  </motion.div>
                )}
                <div className="pointer-events-none absolute -inset-2 rounded-full bg-fuchsia-400/15 opacity-0 animate-ping group-hover:opacity-100 sm:-inset-3" />
              </div>

              {/* Title */}
              <h3 className="relative z-10 mb-1.5 max-w-[220px] px-2 text-center text-sm font-bold leading-tight tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-fuchsia-700 sm:mb-2 sm:max-w-[280px] sm:text-base md:mb-3 md:max-w-[320px] md:text-lg lg:text-xl">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 max-w-[220px] px-2 text-center text-[11px] leading-relaxed text-zinc-600 transition-colors duration-300 group-hover:text-zinc-800 sm:max-w-[280px] sm:text-xs md:max-w-[320px] md:text-sm lg:text-base">
                {service.description || service.line1}
              </p>

              {/* Decorative corner accent */}
              <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute right-0 top-0 h-full w-full rounded-bl-full bg-gradient-to-br from-fuchsia-400/25 to-transparent" />
              </div>

              {/* Bottom accent line */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-fuchsia-500/45 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ServicesSection;
