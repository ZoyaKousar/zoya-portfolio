"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PinContainer } from "@/components/ui/3d-pin";

export interface CaseStudy {
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  /** Optional cover; defaults follow homepage case study order (see CASE_STUDY_COVER_IMAGES) */
  imageUrl?: string;
  /** Link when the pin is clicked */
  href?: string;
}

/** Local covers — order matches `caseStudies` array on homepage (ecom → CRM → marketing → web/app → B2B) */
const CASE_STUDY_COVER_IMAGES = [
  "/zoyaone.jpeg",
  "/zoyatwo.jpeg",
  "/zoyathree.jpeg",
  "/zoyafour.jpeg",
  "/zoyafive.jpeg",
];

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
      container.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);
      return () => {
        container.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, [caseStudies]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const isDesktop = window.innerWidth >= 768;
      const cardsToShow = isDesktop ? 3 : 2;
      const cardWidth = scrollContainerRef.current.clientWidth / cardsToShow;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      const scrollTo =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-8 sm:px-6 md:py-16 lg:px-16"
      id="case-studies"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.h2
          className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl md:mb-10 md:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Case Studies
        </motion.h2>

        <div className="relative">
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 z-[100] hidden -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500/90 to-purple-600/90 p-2 text-white shadow-lg transition-all duration-300 hover:from-fuchsia-600 hover:to-purple-700 hover:shadow-fuchsia-500/50 md:left-2 md:flex md:p-3"
              aria-label="Scroll left"
            >
              <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {canScrollRight && (
            <button
              type="button"
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 z-[100] hidden -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500/90 to-purple-600/90 p-2 text-white shadow-lg transition-all duration-300 hover:from-fuchsia-600 hover:to-purple-700 hover:shadow-fuchsia-500/50 md:right-2 md:flex md:p-3"
              aria-label="Scroll right"
            >
              <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-6 md:gap-8 md:px-0"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onScroll={checkScrollButtons}
          >
            {caseStudies.map((item, index) => {
              const cover =
                item.imageUrl ?? CASE_STUDY_COVER_IMAGES[index % CASE_STUDY_COVER_IMAGES.length];
              const href = item.href ?? "/portfolio";
              const pinTitle =
                item.title.length > 36 ? `${item.title.slice(0, 36)}…` : item.title;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex w-[calc(85%-8px)] min-h-[28rem] min-w-[min(100%,320px)] flex-shrink-0 snap-center items-center justify-center sm:min-w-[340px] md:min-h-[30rem] md:w-[calc(33.333%-22px)] md:min-w-0"
                >
                  <PinContainer
                    title={pinTitle}
                    href={href}
                    containerClassName="flex h-[min(28rem,78vh)] w-full max-w-[20rem] items-center justify-center sm:max-w-[21rem]"
                    className="w-[17rem] max-w-full sm:w-[18.5rem]"
                  >
                    <div className="flex max-h-[70vh] flex-col gap-3 overflow-y-auto text-left [scrollbar-width:thin]">
                      <div className="relative w-full shrink-0 overflow-hidden rounded-lg bg-[#1a1d4a]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={cover}
                          alt={item.title}
                          className="h-auto w-full object-contain"
                          loading="lazy"
                        />
                      </div>

                      <h3 className="text-base font-semibold leading-snug text-white">{item.title}</h3>
                    </div>
                  </PinContainer>
                </motion.div>
              );
            })}
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
