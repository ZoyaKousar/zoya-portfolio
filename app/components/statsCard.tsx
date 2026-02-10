"use client";

import { useState, useEffect, useRef } from 'react';

interface StatsCardProps {
  number: string;
  label: string;
  delay?: number;
  className?: string;
}

export default function StatsCard({ number, label, delay = 0, className = "" }: StatsCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Extract number from string (e.g., "9+" -> 9, "50+" -> 50)
  const targetNumber = parseInt(number.replace(/\D/g, '')) || 0;
  const suffix = number.replace(/\d/g, ''); // Get the "+" or other suffix

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetNumber / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.min(Math.floor(increment * currentStep), targetNumber));
      } else {
        setCount(targetNumber);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, targetNumber]);

  const isMiddleCard = className.includes('bg-indigo-900');

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex flex-col justify-center items-start self-stretch px-12 py-8 my-auto border border-blue-800 border-solid min-h-[176px] min-w-[240px] w-[380px] max-md:px-5 overflow-hidden group transition-all duration-500 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Animated gradient background on hover */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isMiddleCard 
            ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900' 
            : 'bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-fuchsia-900/50'
        }`}
      />
      
      {/* Glowing border effect on hover */}
      <div 
        className={`absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isMiddleCard 
            ? 'shadow-[0_0_30px_rgba(192,97,222,0.4)]' 
            : 'shadow-[0_0_20px_rgba(192,97,222,0.3)]'
        }`}
        style={{
          boxShadow: isHovered 
            ? `0 0 ${isMiddleCard ? '30px' : '20px'} rgba(192, 97, 222, ${isMiddleCard ? 0.4 : 0.3})`
            : 'none'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col max-w-full transition-transform duration-300 group-hover:translate-x-1">
        <div className={`text-4xl font-extrabold leading-tight transition-all duration-300 ${
          isMiddleCard 
            ? 'text-white group-hover:text-fuchsia-300' 
            : 'text-fuchsia-500 group-hover:text-fuchsia-300'
        }`}>
          {count}{suffix}
        </div>
        <div className={`mt-3.5 text-2xl font-medium leading-none transition-colors duration-300 ${
          isMiddleCard 
            ? 'text-white/90 group-hover:text-white' 
            : 'text-fuchsia-400/80 group-hover:text-fuchsia-300'
        }`}>
          {label}
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-fuchsia-500 to-transparent rounded-bl-full" />
      </div>
    </div>
  );
}


