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
      { threshold: 0.2 }
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
          <div className={`flex flex-col text-3xl md:text-5xl font-bold text-center text-white mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
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
                className={`group relative transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Link href={item.link || '#'} className="block">
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30 hover:border-fuchsia-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/20 hover:-translate-y-2 overflow-hidden">
                    {/* Meteors effect inside card */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                      <Meteors number={12} />
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
                      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/0 to-purple-500/0 group-hover:from-fuchsia-500/20 group-hover:to-purple-500/20 rounded-lg transition-all duration-300 blur-xl -z-10"></div>
                    </div>

                    {/* Project Info */}
                    <div className="text-center relative z-20">
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-fuchsia-300 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {item.category}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="w-2 h-2 bg-fuchsia-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className={`flex justify-center mt-12 transition-all duration-700 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '450ms' }}>
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white rounded-full font-semibold hover:from-fuchsia-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-fuchsia-500/50"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

