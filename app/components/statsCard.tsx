"use client";

import { useState, useEffect, useRef } from "react";

interface StatsCardProps {
  number: string;
  label: string;
  delay?: number;
  className?: string;
  /** Center card — bolder gradient frame */
  featured?: boolean;
}

export default function StatsCard({
  number,
  label,
  delay = 0,
  className = "",
  featured = false,
}: StatsCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const targetNumber = parseInt(number.replace(/\D/g, ""), 10) || 0;
  const suffix = number.replace(/\d/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    const currentRef = cardRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
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

  const frame = featured
    ? "border-fuchsia-400/40 bg-gradient-to-br from-fuchsia-950/95 via-indigo-950 to-violet-950 shadow-[0_0_0_1px_rgba(232,121,249,0.15),0_24px_56px_-16px_rgba(0,0,0,0.55)] hover:border-fuchsia-300/55 hover:shadow-[0_0_0_1px_rgba(244,114,182,0.35),0_28px_64px_-12px_rgba(168,85,247,0.35)]"
    : "border-white/10 bg-gradient-to-br from-zinc-900/85 via-zinc-950/95 to-black/90 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_48px_-18px_rgba(0,0,0,0.5)] hover:border-fuchsia-500/30 hover:shadow-[0_0_0_1px_rgba(217,70,239,0.18),0_24px_56px_-12px_rgba(147,51,234,0.18)]";

  const numberClass = featured
    ? "bg-gradient-to-br from-white via-fuchsia-50 to-fuchsia-300 bg-clip-text text-5xl font-black tracking-tight text-transparent drop-shadow-sm md:text-6xl"
    : "bg-gradient-to-r from-fuchsia-400 via-fuchsia-300 to-purple-400 bg-clip-text text-5xl font-black tracking-tight text-transparent md:text-6xl";

  const labelClass = featured
    ? "text-base font-semibold text-fuchsia-100/90 md:text-lg group-hover:text-white"
    : "text-base font-semibold text-zinc-400 md:text-lg group-hover:text-fuchsia-100";

  return (
    <div
      ref={cardRef}
      className={[
        "group relative flex min-h-[192px] w-full max-w-[380px] flex-col items-start justify-center overflow-hidden rounded-2xl border px-8 py-9 backdrop-blur-xl transition-all duration-500 ease-out sm:min-w-[260px] md:min-w-[300px] md:w-[360px] lg:w-[380px]",
        "hover:-translate-y-1.5",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/0 before:via-transparent before:to-fuchsia-500/0 before:opacity-0 before:transition-opacity before:duration-500 before:content-[''] group-hover:before:opacity-100 group-hover:before:via-white/[0.06] group-hover:before:to-fuchsia-500/12",
        frame,
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        className,
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent opacity-70" />

      <div className="relative z-10 flex max-w-full flex-col transition-transform duration-300 group-hover:translate-x-1">
        <div
          className={`tabular-nums leading-none transition-transform duration-300 group-hover:scale-[1.03] ${numberClass}`}
        >
          {count}
          {suffix}
        </div>
        <div className={`mt-4 max-w-[18ch] leading-snug tracking-tight transition-colors duration-300 ${labelClass}`}>
          {label}
        </div>
      </div>

      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl transition-all duration-500 group-hover:bg-fuchsia-400/30" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-indigo-600/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}
