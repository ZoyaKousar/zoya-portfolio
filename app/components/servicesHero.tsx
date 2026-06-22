"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, TestTube, Code2, TrendingUp, HeadphonesIcon } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const SERVICES_LIST = [
  { label: "QA Testing", Icon: TestTube, accent: "#10b981" },
  { label: "Development", Icon: Code2, accent: "#c961de" },
  { label: "Marketing", Icon: TrendingUp, accent: "#f97316" },
  { label: "VA Services", Icon: HeadphonesIcon, accent: "#38bdf8" },
];

export default function ServicesHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ── HERO BODY ────────────────────────────────────────── */}
      <div className="relative px-6 pb-0 pt-16 sm:px-12 lg:px-20 lg:pt-20">
        {/* Background blob */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-fuchsia-500/[0.07] blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* BIG DISPLAY HEADLINE */}
          <div className="border-b border-white/10 pb-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
              className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-fuchsia-400"
            >
              Offering tailored services
            </motion.p>

            <div className="flex flex-col gap-0 overflow-hidden">
              {["SERVICES", "DESIGNED TO", "INSPIRE &", "ELEVATE."].map((line, i) => (
                <div key={line} className="overflow-hidden">
       <motion.h1
  initial={{ y: "110%" }}
  animate={{ y: 0 }}
  transition={{ duration: 0.75, ease: EASE, delay: 0.2 + i * 0.1 }}
  className="text-[clamp(52px,10vw,130px)] font-black leading-[0.88] tracking-[-0.03em]"
  style={{
    color: i === 3 ? "#c961de" : "white",
  }}
>
  {line}
</motion.h1>
                </div>
              ))}
            </div>
          </div>

          {/* ── BOTTOM ROW — description + service tags + CTA ── */}
          <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/10">
            {/* Col 1 — description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
              className="pr-0 md:pr-10"
            >
              <p className="text-sm leading-[1.9] text-white/50 sm:text-base">
                Custom work that really helps — building websites, growing e-commerce stores,
                clean design, and making sure Google actually shows you to people.
              </p>
            </motion.div>

            {/* Col 2 — service chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.82 }}
              className="flex flex-col gap-3 px-0 md:px-10"
            >
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                What I do
              </p>
              {SERVICES_LIST.map(({ label, Icon, accent }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, ease: EASE, delay: 0.9 + i * 0.08 }}
                  className="group flex items-center gap-3"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}
                  >
                    <Icon className="h-4 w-4" style={{ color: accent }} />
                  </span>
                  <span className="text-sm font-semibold text-white/70 transition-colors duration-300 group-hover:text-white">
                    {label}
                  </span>
                  <span className="ml-auto h-px flex-1 bg-white/10 transition-all duration-300 group-hover:bg-white/20" />
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-white/20 transition-all duration-300 group-hover:text-fuchsia-400"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Col 3 — CTA + stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.94 }}
              className="flex flex-col justify-between gap-8 pl-0 md:pl-10"
            >
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                  Ready to start?
                </p>
                <p className="mb-6 text-sm leading-relaxed text-white/50">
                  Let&apos;s build something that actually moves the needle for your business.
                </p>
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition duration-300 hover:border-fuchsia-400/60 hover:bg-fuchsia-500/10"
                >
                  Work with me
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* Mini stats */}
              <div className="flex items-center gap-6 border-t border-white/10 pt-6">
                {[["9+", "Years"], ["50+", "Projects"], ["10+", "Clients"]].map(([n, l]) => (
                  <div key={l} className="flex flex-col">
                    <span className="text-xl font-black text-white">{n}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
                      {l}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── MARQUEE TICKER ───────────────────────────────────── */}
      <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-3.5">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-0"
        >
          {Array.from({ length: 2 }).map((_, ri) => (
            <div key={ri} className="flex items-center">
              {["QA Testing", "Web Development", "Digital Marketing", "CRM Automation", "Shopify Growth", "SEO", "UI/UX Design", "Virtual Assistant", "Funnel Building", "Technical Writing"].map((t, i) => (
                <span key={i} className="flex items-center">
                  <span className="whitespace-nowrap px-6 text-[11px] font-bold uppercase tracking-[0.22em] text-white/30">
                    {t}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-fuchsia-500/60" />
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
