'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  type Variants,
} from 'framer-motion';
import { Code, Store, Brush, Search, ArrowUpRight } from 'lucide-react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface CoreService {
  title: string;
  tag: string;
  description: string;
  link: string;
  Icon: React.ComponentType<{ className?: string }>;
  accent: string;
  bg: string;
}

const SERVICES: CoreService[] = [
  {
    title: 'Web & CRM Service',
    tag: 'Web · Automation',
    description:
      'Websites built exactly how you need them + CRM setup that automates lead chasing, gives clients their own portal, and keeps your internal stuff running smooth.',
    link: '/services/web-development-and-crm-automation',
    Icon: Code,
    accent: 'from-fuchsia-500 to-purple-600',
    bg: 'rgba(201,97,222,0.08)',
  },
  {
    title: 'Shopify Growth Service',
    tag: 'E-commerce · Ads',
    description:
      "Full Shopify stores from the ground up: funnels that nudge people to checkout, pages tweaked so more people buy, retargeting ads that bring back the ones who left, and integrations that don't cause chaos.",
    link: '/services/shopify-growth-service',
    Icon: Store,
    accent: 'from-emerald-400 to-teal-600',
    bg: 'rgba(52,211,153,0.08)',
  },
  {
    title: 'UI/UX Service',
    tag: 'Design · Prototyping',
    description:
      'Sharp design systems, rough wireframes first, then clickable prototypes, finally clean mobile + desktop layouts that look good and actually work for everyone, including people who need extra accessibility.',
    link: '/services/uiux-service',
    Icon: Brush,
    accent: 'from-sky-400 to-indigo-600',
    bg: 'rgba(56,189,248,0.08)',
  },
  {
    title: 'SEO Service',
    tag: 'SEO · Content',
    description:
      "Proper SEO: fixing the behind-the-scenes tech stuff, improving what's on the pages, writing content that ranks, so you get way more visitors and show up when people search the things you sell.",
    link: '/services/seo-service',
    Icon: Search,
    accent: 'from-orange-400 to-rose-600',
    bg: 'rgba(251,146,60,0.08)',
  },
];

const copyVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 60 : -60 }),
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

const bgVariants: Variants = {
  enter: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
  exit: { opacity: 0, transition: { duration: 0.35 } },
};

export default function SubServices() {
  const total = SERVICES.length;
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // clamp to [0,1), multiply by total, floor → 0..total-1
    const clamped = Math.max(0, Math.min(0.9999, latest));
    const next = Math.floor(clamped * total);
    if (next !== activeIndex) {
      setDirection(next > activeIndex ? 1 : -1);
      setActiveIndex(next);
    }
  });

  const svc = SERVICES[activeIndex];
  const num = String(activeIndex + 1).padStart(2, '0');

  return (
    <section
      ref={targetRef}
      style={{ height: `${total * 100}vh` }}
      className="relative w-full"
      id="services"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#07051a]">
        {/* Animated background blob per service */}
        <AnimatePresence initial={false}>
          <motion.div
            key={`blob-${activeIndex}`}
            variants={bgVariants}
            initial="enter"
            animate="visible"
            exit="exit"
            className="pointer-events-none absolute inset-0"
          >
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[70vmax] w-[70vmax] rounded-full blur-[120px]"
              style={{ background: svc.bg }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Top label */}
        <div className="pointer-events-none absolute left-1/2 top-8 z-30 -translate-x-1/2 text-center md:top-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/40 md:text-xs">
            What I offer
          </p>
          <h2 className="mt-1 text-2xl font-bold text-white/90 md:text-4xl">
            My Core <span className="text-fuchsia-400">Services</span>
          </h2>
        </div>

        {/* Side progress dots */}
        <div className="absolute left-3 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 sm:flex md:left-7">
          {SERVICES.map((_, i) => (
            <span
              key={i}
              className="block w-[2px] rounded-full transition-all duration-500"
              style={{
                height: i === activeIndex ? 30 : 10,
                opacity: i === activeIndex ? 1 : 0.3,
                background: 'linear-gradient(to bottom,#e879f9,#a855f7)',
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="absolute inset-0 z-20 flex items-center px-6 sm:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-6xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`svc-${activeIndex}`}
                custom={direction}
                variants={copyVariants}
                initial="enter"
                animate="visible"
                exit="exit"
                className="flex flex-col lg:flex-row lg:items-center lg:gap-20"
              >
                {/* Left copy */}
                <div className="flex-1 min-w-0">
                  {/* Faded number */}
                  <span className="block select-none text-[clamp(80px,18vw,200px)] font-black leading-[0.8] tracking-tighter text-white/[0.04]">
                    {num}
                  </span>

                  {/* Label row */}
                  <div className="mb-5 mt-1 flex flex-wrap items-center gap-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/80">
                      0{activeIndex + 1}
                    </span>
                    <span className="h-px w-4 bg-white/20" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
                      {svc.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-[clamp(36px,6vw,80px)] font-black leading-[0.97] tracking-tight text-white">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-10 max-w-[500px] text-sm leading-[1.9] text-white/50 sm:text-[15px]">
                    {svc.description}
                  </p>

                  <Link
                    href={svc.link}
                    className="group inline-flex items-center gap-2.5 border border-white/20 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition duration-300 hover:border-fuchsia-400/70 hover:bg-fuchsia-500/15"
                  >
                    Explore Service
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                {/* Right icon panel */}
                <div className="mt-12 hidden shrink-0 lg:mt-0 lg:flex lg:flex-col lg:items-center">
                  <div className="relative flex h-64 w-64 items-center justify-center">
                    {/* Concentric rings */}
                    <span className="absolute inset-0 rounded-full border border-white/[0.06]" />
                    <span className="absolute inset-8 rounded-full border border-white/[0.04]" />
                    <span className="absolute inset-16 rounded-full border border-white/[0.03]" />
                    {/* Icon with gradient glow */}
                    <div
                      className={`relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br ${svc.accent} shadow-2xl`}
                    >
                      <svc.Icon className="h-14 w-14 text-white" />
                    </div>
                    {/* Outer glow */}
                    <div
                      className={`pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br ${svc.accent} opacity-20 blur-2xl`}
                    />
                  </div>

                  {/* Counter strip */}
                  <div className="mt-8 flex items-center gap-6">
                    {SERVICES.map((s, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center transition-all duration-500"
                        style={{ opacity: i === activeIndex ? 1 : 0.25 }}
                      >
                        <s.Icon
                          className={`h-5 w-5 ${i === activeIndex ? 'text-fuchsia-400' : 'text-white/40'} transition-colors duration-500`}
                        />
                        <span
                          className="mt-1 block h-[2px] w-4 rounded-full transition-all duration-500"
                          style={{
                            background:
                              i === activeIndex
                                ? 'linear-gradient(90deg,#e879f9,#a855f7)'
                                : 'rgba(255,255,255,0.15)',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pointer-events-none absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
            Scroll
          </span>
          <span className="relative h-10 w-px overflow-hidden bg-white/10">
            <motion.span
              animate={{ y: [-40, 40] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-0 top-0 h-5 w-px bg-gradient-to-b from-transparent via-fuchsia-400 to-transparent"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
