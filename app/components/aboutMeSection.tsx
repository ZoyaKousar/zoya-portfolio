"use client";

import { useRef } from 'react';
import { AnimatedBeam } from '@/components/ui/animated-beam';

const technologies = [
  { name: "React", icon: "⚛️", color: "bg-blue-500" },
  { name: "JavaScript", icon: "JS", color: "bg-yellow-500" },
  { name: "GitHub", icon: "🐙", color: "bg-gray-800" },
  { name: "Selenium", icon: "Se", color: "bg-green-500" },
  { name: "Analytics", icon: "📊", color: "bg-blue-600" },
  { name: "Automation", icon: "⚙️", color: "bg-blue-500" },
  { name: "Cloud", icon: "☁️", color: "bg-blue-400" },
  { name: "Data", icon: "📈", color: "bg-blue-500" },
];

export default function AboutMeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const techRef0 = useRef<HTMLDivElement>(null);
  const techRef1 = useRef<HTMLDivElement>(null);
  const techRef2 = useRef<HTMLDivElement>(null);
  const techRef3 = useRef<HTMLDivElement>(null);
  const techRef4 = useRef<HTMLDivElement>(null);
  const techRef5 = useRef<HTMLDivElement>(null);
  const techRef6 = useRef<HTMLDivElement>(null);
  const techRef7 = useRef<HTMLDivElement>(null);
  const techRefs = [techRef0, techRef1, techRef2, techRef3, techRef4, techRef5, techRef6, techRef7];

  return (
    <section className="flex items-center justify-center py-16 md:py-24 relative overflow-hidden">
      <div className="relative w-full max-w-6xl mx-auto px-4">
        {/* Top Text */}
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
            I&apos;m currently looking to join a cross-functional team that values improving people&apos;s lives through accessible design.
          </p>
        </div>

        {/* Animated Beam Container */}
        <div
          ref={containerRef}
          className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center"
        >
          {/* Technology Icons */}
          <div className="absolute inset-0">
            {/* Top Row */}
            <div className="absolute top-0 left-0 right-0 flex justify-center gap-8 md:gap-12 flex-wrap px-4">
              {technologies.slice(0, 4).map((tech, index) => (
                <div
                  key={index}
                  ref={techRefs[index]}
                  className={`${tech.color} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer relative z-10`}
                >
                  {tech.icon}
                </div>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="absolute bottom-32 left-0 right-0 flex justify-center gap-8 md:gap-12 flex-wrap px-4">
              {technologies.slice(4, 8).map((tech, index) => (
                <div
                  key={index + 4}
                  ref={techRefs[index + 4]}
                  className={`${tech.color} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer relative z-10`}
                >
                  {tech.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Center Logo */}
          <div
            ref={centerRef}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-fuchsia-500 via-purple-600 to-blue-600 flex flex-col items-center justify-center shadow-2xl shadow-fuchsia-500/50">
              <div className="text-white text-4xl md:text-5xl font-bold mb-1">ZK</div>
              <div className="text-white text-xs md:text-sm font-medium">Zoya Kou</div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 blur-xl -z-10"></div>
            </div>
          </div>

          {/* Animated Beams from each tech icon to center */}
          {techRefs.map((techRef, index) => (
            <AnimatedBeam
              key={index}
              containerRef={containerRef}
              fromRef={techRef}
              toRef={centerRef}
              curvature={-75}
              duration={3}
              delay={index * 0.2}
              pathColor="#C961DE"
              gradientStartColor="#C961DE"
              gradientStopColor="#2954A3"
              pathWidth={2}
              pathOpacity={0.4}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">About me</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            I&apos;m a tech-savvy Virtual Assistant with expertise in multiple domains including QA Automation, 
            Technical Writing, Web Development, and Digital Marketing.
          </p>
        </div>
      </div>
    </section>
  );
}

