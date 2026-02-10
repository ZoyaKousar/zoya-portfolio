"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface CaseStudy {
  title: string;
  challenge: string;
  solution: string;
  results: string[];
}

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        container.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, [caseStudies]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Calculate scroll amount based on visible cards (2 on mobile, 3 on desktop)
      const isDesktop = window.innerWidth >= 768;
      const cardsToShow = isDesktop ? 3 : 2;
      const cardWidth = scrollContainerRef.current.clientWidth / cardsToShow;
      const gap = 24; // gap-6 = 24px
      const scrollAmount = cardWidth + gap;
      const scrollTo = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-8 md:py-16 px-4 sm:px-6 lg:px-16 relative overflow-hidden" id="case-studies">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Case Studies
        </motion.h2>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-fuchsia-500/90 to-purple-600/90 hover:from-fuchsia-600 hover:to-purple-700 text-white p-2 md:p-3 rounded-full shadow-lg hover:shadow-fuchsia-500/50 transition-all duration-300 hidden md:flex items-center justify-center"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-fuchsia-500/90 to-purple-600/90 hover:from-fuchsia-600 hover:to-purple-700 text-white p-2 md:p-3 rounded-full shadow-lg hover:shadow-fuchsia-500/50 transition-all duration-300 hidden md:flex items-center justify-center"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Scrollable Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth px-1 md:px-0"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            onScroll={checkScrollButtons}
          >
            {caseStudies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-[#2F2F8A] border border-gray-200 border-opacity-10 bg-opacity-10 shadow-sm hover:shadow-2xl hover:shadow-fuchsia-500/20 transition-all duration-500 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col overflow-hidden cursor-pointer flex-shrink-0 snap-center w-[calc(85%-6px)] sm:w-[calc(50%-8px)] md:w-[calc(33.333%-16px)] min-w-[280px] sm:min-w-[300px] md:min-w-0"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-purple-600/0 to-blue-600/0 group-hover:from-fuchsia-500/10 group-hover:via-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                
                {/* Border glow on hover */}
                <div className="absolute inset-0 border border-gray-200/10 group-hover:border-fuchsia-500/50 rounded-2xl transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-fuchsia-300 transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>
                  
                  <div className="mb-2 sm:mb-3 p-2 sm:p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                    <p className="text-xs sm:text-sm text-white leading-relaxed">
                      <strong className="text-red-400">Challenge:</strong> {item.challenge}
                    </p>
                  </div>
                  
                  <div className="mb-2 sm:mb-3 p-2 sm:p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <p className="text-xs sm:text-sm text-white leading-relaxed">
                      <strong className="text-blue-400">Solution:</strong> {item.solution}
                    </p>
                  </div>
                  
                  <div className="p-2 sm:p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <strong className="text-green-400 text-xs sm:text-sm">Results:</strong>
                    <ul className="list-disc list-inside mt-1 sm:mt-2 space-y-0.5 sm:space-y-1">
                      {item.results.map((result, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.1) }}
                          className="text-xs sm:text-sm text-white leading-relaxed"
                        >
                          {result}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-fuchsia-500 to-transparent rounded-bl-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}


