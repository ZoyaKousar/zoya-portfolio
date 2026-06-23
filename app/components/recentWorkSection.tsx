"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface RecentWorkItem {
  title: string;
  category: string;
  tag: string;
  image: string;
  link?: string;
  description?: string;
}

const recentWorkItems: RecentWorkItem[] = [
  {
    title: "Progreda",
    category: "Go High Level & CRM",
    tag: "Web · CRM",
    image: "/images/progreda.jpg",
    link: "/web-dev",
    description:
      "A GHL-powered website and CRM build — automated lead capture, pipelines, and follow-up flows that turn traffic into booked clients.",
  },
  {
    title: "ShoriChek",
    category: "Systeme.io Development",
    tag: "Funnels · Coaching",
    image: "/images/shorichek.jpg",
    link: "/web-dev",
    description:
      "An automated coaching platform built on Systeme.io — funnels, memberships, and email sequences working together on autopilot.",
  },
  {
    title: "Technical Writing",
    category: "Content Creation",
    tag: "QA · Docs",
    image: "/software-testing-qa-blog-technical-writing.jpg",
    link: "/portfolio",
    description:
      "Clear, structured QA and technical documentation — test plans, product guides, and developer docs that teams actually read.",
  },
];

const panelVariants: Variants = {
  enter: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? 60 : -60,
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
  exit: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? -60 : 60,
    transition: { duration: 0.4, ease: EASE },
  }),
};

export default function RecentWorkSection() {
  const total = recentWorkItems.length;
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(total - 1, Math.floor(latest * total));
    if (next !== activeIndex) {
      setDirection(next > activeIndex ? 1 : -1);
      setActiveIndex(next);
    }
  });

  const item = recentWorkItems[activeIndex];
  const num = String(activeIndex + 1).padStart(2, "0");
  const href = item.link || "#";

  return (
    <section
      ref={targetRef}
      style={{ height: `${total * 100}vh` }}
      className="relative w-full"
    >
<div className="sticky top-0 h-screen w-full overflow-hidden bg-slate-900">
        {/* Full-bleed background — swaps instantly with the panel */}
        <AnimatePresence initial={false}>
          <motion.div
            key={`bg-${activeIndex}`}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
            exit={{ opacity: 0, transition: { duration: 0.35 } }}
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlays */}
<div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-slate-900/70 via-blue-900/35 to-transparent" />

<div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-900/55 via-transparent to-blue-950/15" />

        {/* Copy — animates on index change */}
        <div className="absolute inset-0 z-20 flex items-center px-6 sm:px-10 lg:px-20">
          <div className="w-full max-w-6xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`copy-${activeIndex}`}
                custom={direction}
                variants={panelVariants}
                initial="enter"
                animate="visible"
                exit="exit"
                className="max-w-2xl"
              >
                <span className="block select-none font-serif text-[clamp(56px,12vw,150px)] font-normal leading-[0.8] tracking-tighter text-white/[0.07]">
                  {num}
                </span>

                <div className="mb-5 mt-1 flex flex-wrap items-center gap-3">
                  <span className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-white">
                    {item.title}
                  </span>
                  <span className="h-px w-4 bg-white/25" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mb-3 font-serif text-[clamp(40px,7vw,92px)] font-bold leading-[0.98] tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mb-4 text-[clamp(14px,1.3vw,19px)] font-medium text-fuchsia-300/85">
                  {item.category}
                </p>

                {item.description ? (
                  <p className="mb-9 max-w-[460px] text-sm leading-[1.85] text-white/55 sm:text-[15px]">
                    {item.description}
                  </p>
                ) : null}

                <Link
                  href={href}
                  className="group inline-flex items-center gap-2.5 border border-white/20 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition duration-300 hover:border-fuchsia-400/70 hover:bg-fuchsia-500/15"
                >
                  Explore
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Watermark heading */}
        <div className="pointer-events-none absolute left-1/2 top-8 z-30 -translate-x-1/2 text-center md:top-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/40 md:text-xs">
            Selected
          </p>
          <h2 className="mt-1 font-serif text-2xl italic text-white/85 md:text-4xl">
            My Recent <span className="text-fuchsia-400">Work</span>
          </h2>
        </div>

        {/* Progress dots */}
        <div className="absolute left-3 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 sm:flex md:left-7">
          {recentWorkItems.map((_, i) => (
            <span
              key={i}
              className="block w-[2px] rounded-full bg-gradient-to-b from-fuchsia-400 to-purple-500 transition-all duration-500"
              style={{
                height: i === activeIndex ? 30 : 10,
                opacity: i === activeIndex ? 1 : 0.3,
              }}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="pointer-events-none absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">
            Scroll
          </span>
          <span className="relative h-10 w-px overflow-hidden bg-white/15">
            <motion.span
              animate={{ y: [-40, 40] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-0 h-5 w-px bg-gradient-to-b from-transparent via-fuchsia-400 to-transparent"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
