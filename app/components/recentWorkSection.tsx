"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Meteors } from '@/components/ui/meteors';

interface RecentWorkItem {
  title: string;
  category: string;
  image: string;
  link?: string;
  description?: string;
}

const recentWorkItems: RecentWorkItem[] = [
  {
    title: "Progreda",
    category: "Go High Level & CRM",
    image: "/images/progreda.jpg",
    link: "/web-dev",
    description: "GHL Website & CRM Development"
  },
  {
    title: "ShoriChek",
    category: "System.io Development",
    image: "/images/shorichek.jpg",
    link: "/web-dev",
    description: "Automated Coaching Platform"
  },
  {
    title: "Technical Writing",
    category: "Content Creation",
    image: "/software-testing-qa-blog-technical-writing.jpg",
    link: "/portfolio",
    description: "QA & Technical Documentation"
  }
];

export default function RecentWorkSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
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

  return (
    <section ref={sectionRef} className="flex flex-col py-10 md:py-16 md:-mt-20 xl:-mt-6">
      <div className="flex flex-col justify-center items-center max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[1149px]">
          {/* Title */}
          <div
            className={`mb-12 flex flex-col text-center text-3xl font-bold text-white transition-all duration-1000 ease-out will-change-transform md:mb-16 md:text-5xl ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <div className="max-md:max-w-full">
              <span className="">My Recent</span>
              <span className="text-fuchsia-500"> Work</span>
            </div>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
            {recentWorkItems.map((item, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ease-out will-change-transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-24 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 180}ms` }}
              >
                <Link href={item.link || '#'} className="block">
                  <div
                    className="relative overflow-hidden rounded-2xl border border-gray-200/90 bg-white p-6 shadow-lg shadow-gray-300/40 ring-1 ring-black/[0.04] transition-all duration-500 ease-out will-change-transform hover:-translate-y-3 hover:scale-[1.02] hover:border-fuchsia-400/70 hover:shadow-2xl hover:shadow-fuchsia-500/25"
                  >
                    {/* Meteors — larger, brighter, more trails on white */}
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                      <Meteors
                        number={20}
                        className="!h-1 !w-1 bg-fuchsia-600 shadow-[0_0_8px_2px_rgba(192,38,211,0.45)] before:!h-[2px] before:!w-[90px] before:from-fuchsia-500 before:to-transparent"
                      />
                    </div>
                    
                    {/* Laptop Mockup */}
                    <div className="relative mb-4 z-20">
                      {/* Laptop Base */}
                      <div className="relative bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg p-2 shadow-2xl">
                        {/* Screen */}
                        <div className="relative bg-black rounded overflow-hidden aspect-video">
                          {/* Screen Content */}
                          <div className="relative w-full h-full">
                            {item.image ? (
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  // Fallback if image doesn't exist
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  if (target.parentElement) {
                                    target.parentElement.innerHTML = `
                                      <div class="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                                        <div class="text-white text-center p-4">
                                          <div class="text-2xl font-bold mb-2">${item.title}</div>
                                          <div class="text-sm opacity-80">${item.description || item.category}</div>
                                        </div>
                                      </div>
                                    `;
                                  }
                                }}
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                                <div className="text-white text-center p-4">
                                  <div className="text-2xl font-bold mb-2">{item.title}</div>
                                  <div className="text-sm opacity-80">{item.description || item.category}</div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        {/* Laptop Hinge */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                      
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-[#f6a21c]/0 to-fuchsia-500/0 blur-2xl transition-all duration-500 group-hover:from-[#f6a21c]/35 group-hover:to-fuchsia-500/30"></div>
                    </div>

                    {/* Project Info */}
                    <div className="relative z-20 text-center">
                      <h3 className="mb-1 text-xl font-semibold tracking-tight text-zinc-900 transition-colors duration-500 group-hover:text-fuchsia-600 group-hover:drop-shadow-sm">
                        {item.title}
                      </h3>
                      <p className="text-sm text-zinc-600 transition-colors duration-500 group-hover:text-fuchsia-900/80">
                        {item.category}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute top-4 right-4 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-fuchsia-600 shadow-[0_0_12px_rgba(192,38,211,0.9)] ring-2 ring-fuchsia-300/80" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div
            className={`mt-12 flex justify-center transition-all duration-1000 ease-out will-change-transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
            style={{ transitionDelay: "520ms" }}
          >
            <Link
              href="/portfolio"
              className="rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-purple-600 px-10 py-3.5 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/35 ring-2 ring-white/25 transition-all duration-300 hover:scale-110 hover:from-indigo-500 hover:via-fuchsia-500 hover:to-purple-500 hover:shadow-xl hover:shadow-fuchsia-500/50"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

