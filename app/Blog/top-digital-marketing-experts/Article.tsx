"use client";

import Link from "next/link";
import { motion, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

/* ─── shared variants ────────────────────────────────────────── */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: EASE } },
};

/* ─── animated primitives ────────────────────────────────────── */

function Para({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="mb-6 text-[1.04rem] leading-8 text-slate-800 sm:text-[1.12rem]"
    >
      {children}
    </motion.p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
      }}
      className="group/h2 mt-14 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl"
    >
      <motion.span className="relative inline-block pb-2">
        <span className="relative z-10">
          {String(children)
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={i}
                variants={fadeUp}
                className="mr-[0.25em] inline-block"
              >
                {word}
              </motion.span>
            ))}
        </span>
        {/* Animated underline */}
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-[3px] origin-left rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500"
        />
      </motion.span>
    </motion.h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <motion.h3
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: EASE }}
      className="mt-10 flex items-center gap-3 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
    >
      <motion.span
        initial={{ scale: 0, rotate: -90 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "backOut", delay: 0.15 }}
        className="h-3 w-3 shrink-0 rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500 shadow-md shadow-fuchsia-300/50"
      />
      {children}
    </motion.h3>
  );
}

function SectionImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30, clipPath: "inset(15% 0% 15% 0% round 16px)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 16px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: EASE }}
      whileHover={{ y: -4 }}
      className="group/img relative my-10 overflow-hidden rounded-2xl bg-slate-100 shadow-lg ring-1 ring-black/5"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-56 w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover/img:scale-[1.06] sm:h-72 lg:h-80"
      />
      {/* Sheen sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-1000 ease-out group-hover/img:translate-x-full group-hover/img:opacity-100"
      />
      {caption ? (
        <figcaption className="px-4 py-2.5 text-center text-xs italic text-slate-500">
          {caption}
        </figcaption>
      ) : null}
    </motion.figure>
  );
}

/* Stat card with count-up number */
function StatCard({
  num,
  prefix = "",
  suffix = "",
  label,
  delay = 0,
}: {
  num: number;
  prefix?: string;
  suffix?: string;
  label: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            setStarted(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setCount(Math.round(num * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, num]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      transition={{ delay }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-xl"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-fuchsia-200/40 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <p className="relative bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-3xl font-black tabular-nums text-transparent sm:text-4xl">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="relative mt-2 text-xs font-medium leading-snug text-slate-600">{label}</p>
    </motion.div>
  );
}

/* ─── article body ────────────────────────────────────────────── */

export default function Article() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Soft parallax background blobs
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const blobY1 = useTransform(heroProgress, [0, 1], [0, -60]);
  const blobY2 = useTransform(heroProgress, [0, 1], [0, 60]);

  return (
    <>
      {/* Reading progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500"
      />

      <section className="relative min-h-screen w-full pb-20 pt-24 sm:pt-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-12">
            <article
              ref={heroRef}
              className="relative w-full min-w-0 max-w-3xl overflow-hidden rounded-3xl bg-white px-5 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:px-8 sm:py-10 lg:mx-0"
            >
              {/* Decorative blobs */}
              <motion.span
                aria-hidden
                style={{ y: blobY1 }}
                className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-200/40 blur-3xl"
              />
              <motion.span
                aria-hidden
                style={{ y: blobY2 }}
                className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"
              />

              {/* Header */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.12 } },
                }}
                className="relative"
              >
                <motion.span
                  variants={scaleIn}
                  className="inline-flex items-center gap-2 rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-700 ring-1 ring-fuchsia-200"
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-500" />
                  Digital Marketing
                </motion.span>

                <motion.h1
                  variants={fadeUp}
                  className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
                >
                  Top Digital Marketing Experts in the USA:{" "}
                  <span className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
                    Proven Strategies for 2026 Success
                  </span>
                </motion.h1>

                <motion.div
                  variants={fadeUp}
                  className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.05 }}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-sm font-bold text-white shadow-md shadow-fuchsia-300/40"
                    >
                      Z
                    </motion.div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-900">Zoya Kou</span>
                      <span className="text-xs text-slate-500">
                        Published 22 May 2026 · 8 min read
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-[20px] text-slate-500">
                    {[FaWhatsapp, FaFacebookF, FaLinkedinIn, FaXTwitter].map((Icon, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ y: -3, scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="cursor-pointer"
                      >
                        <Icon className="transition hover:text-fuchsia-600" />
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  className="mt-8 text-lg leading-relaxed text-slate-700 sm:text-xl"
                >
                  Unlock growth with top digital marketing experts in the USA for 2026 — proven
                  consultant services, SEO, AI digital marketing, and full-service strategies that
                  deliver real ROI.
                </motion.p>
              </motion.div>

              {/* Hero banner — blog11.png with clip-path reveal */}
              <motion.figure
                initial={{ opacity: 0, clipPath: "inset(0% 20% 0% 20% round 24px)" }}
                animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 24px)" }}
                transition={{ duration: 1, ease: EASE, delay: 0.3 }}
                whileHover={{ y: -3 }}
                className="group/hero relative mt-10 overflow-hidden rounded-3xl bg-slate-50 shadow-xl ring-1 ring-slate-200"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/blog11.png"
                  alt="Zoya Kousar — Full-Stack Digital Marketing Manager"
                  className="h-auto w-full object-contain transition-transform duration-[1400ms] ease-out group-hover/hero:scale-[1.02]"
                />
              </motion.figure>

              {/* Body */}
              <div className="relative pb-14 pt-2 text-[#111216]">
                <Para>
                  After spending over ten years working directly with clients, running tests,
                  fixing funnels that were losing money, and scaling campaigns that actually
                  brought in sales, I learned one very important lesson. Your marketing success
                  depends a lot on who you learn from.
                </Para>
                <Para>
                  Digital marketing changes all the time. One week an algorithm update turns
                  everything upside down. Next week, a new platform rule comes out. Customer
                  habits keep shifting faster than most teams can handle. What worked really well
                  just a few months back can suddenly stop giving results.
                </Para>
                <Para>
                  That is why so many smart business owners in the USA are now looking for{" "}
                  <strong className="font-semibold text-slate-900">
                    top digital marketing experts
                  </strong>
                  . These professionals do not just follow trends. They test things themselves,
                  learn from real outcomes, and create strategies that actually work in the real
                  world.
                </Para>

                <H2>The Explosive Growth of Digital Marketing in the USA Right Now</H2>
                <SectionImage
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
                  alt="Digital marketing analytics dashboard with charts and growth metrics"
                  caption="U.S. digital ad spending is projected to reach $413B in 2026."
                />
                <Para>
                  Digital marketing has totally changed how businesses grow in America. In simple
                  terms, any kind of advertising that reaches people through the internet or
                  digital devices is digital marketing.
                </Para>
                <Para>
                  The numbers are huge. Industry reports say U.S. digital ad spending is expected
                  to hit around{" "}
                  <strong className="font-semibold text-slate-900">
                    413 billion dollars in 2026
                  </strong>
                  . Companies are putting more money into online marketing because they can track
                  results clearly, reach the right people, and get better returns than old-school
                  traditional methods.
                </Para>

                {/* Stat cards with count-up */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                  className="my-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
                >
                  <StatCard num={413} prefix="$" suffix="B" label="Projected US digital ad spend in 2026" />
                  <StatCard num={10} suffix="×" label="Higher ROI vs. traditional channels" />
                  <StatCard num={78} suffix="%" label="Of buyers research online before purchase" />
                </motion.div>

                <H2>Challenges Most Businesses Face in Today&apos;s Digital World</H2>
                <SectionImage
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
                  alt="Business owners reviewing marketing strategies in a meeting"
                  caption="Most teams struggle to keep up with multi-channel demands."
                />
                <Para>
                  This kind of fast growth sounds great, but it also creates a lot of headaches.
                  New tools and apps come out every month. Tactics that gave good results last
                  year can suddenly fail. Many business owners feel lost and overwhelmed trying to
                  keep up with everything.
                </Para>
                <Para>
                  The most common challenges for small businesses, B2B companies, etc. are limited
                  resources and the ability to manage multiple channels; therefore digital
                  marketing professionals who specialize in this area will really help streamline
                  processes and develop strategic plans tailored to meet your goals.
                </Para>

                <H2>In 2026 Who Will Be the Best Digital Marketing Professionals?</H2>
                <Para>
                  A good digital marketer isn&apos;t just adept at creating advertising campaigns,
                  posts on social media sites, etc.; rather, they also have excellent critical
                  thinking skills. There are many ways you can learn how to create marketing
                  materials, run advertisements and optimize social media accounts. However, what
                  sets excellent digital marketers apart from the average marketer is the way
                  they think through the whole customer experience — from when a potential
                  customer first interacts with your brand to purchase. The best digital marketers
                  take this entire journey into account and make sure each piece of the customer
                  journey connects with one another and creates a seamless experience.
                </Para>

                {/* Pull quote */}
                <motion.blockquote
                  variants={slideLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  whileHover={{ scale: 1.01 }}
                  className="relative my-12 overflow-hidden rounded-2xl border-l-4 border-fuchsia-500 bg-gradient-to-r from-fuchsia-50 via-fuchsia-50/30 to-transparent px-7 py-7 text-lg italic leading-8 text-slate-800 shadow-sm sm:text-xl"
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "backOut" }}
                    className="absolute -left-2 top-0 select-none font-serif text-7xl leading-none text-fuchsia-200"
                  >
                    &ldquo;
                  </motion.span>
                  The best digital marketers don&apos;t just run ads — they design every step of
                  the customer&apos;s journey so it feels effortless from first click to checkout.
                </motion.blockquote>

                <H3>Key Qualities That Separate the Best Digital Marketing Experts</H3>
                <SectionImage
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
                  alt="Marketing team planning a campaign with sticky notes and laptops"
                  caption="Strong experts plan strategy, not just tactics."
                />
                <Para>
                  The top experts see the big picture. They link SEO digital marketing with
                  content that converts, paid search campaigns, email marketing, and analytics
                  that show real money coming in.
                </Para>
                <Para>
                  They concentrate on genuine plans rather than temporary gimmicks. They
                  comprehend the reasoning behind what does / does not function for various types
                  of companies. Once circumstances alter, the individual or team evaluates and
                  tries new ideas as quickly as possible, determines if those ideas produce
                  results, and modifies accordingly.
                </Para>
                <Para>
                  The most crucial aspect is that they are invested in obtaining real results for
                  you as an owner of your company. They disregard superficial evidence such as
                  the number of people liking your products / services or seeing them. They focus
                  on getting qualified leads, closing sales, increasing customer lifetime value,
                  and creating steady growth that improves your profits.
                </Para>

                <H2>
                  How Expert Digital Marketing Consultants Turn Strategy into Measurable Results
                </H2>
                <SectionImage
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
                  alt="Analytics dashboard showing campaign performance and ROI"
                  caption="Real consultants measure outcomes, not vanity metrics."
                />
                <Para>
                  The best digital marketing consultants do more than just give you a plan and
                  leave. This helps create campaigns that feel natural and personal but still
                  perform strongly. Whether you need small business digital marketing, B2B
                  digital marketing services, ecommerce digital marketing, or local support, the
                  right experts know exactly what will work for your situation.
                </Para>

                <H2>Meet Zoya Kou – Your Trusted Digital Marketing Expert</H2>
                <motion.figure
                  initial={{ opacity: 0, y: 30, clipPath: "inset(10% 0% 10% 0% round 16px)" }}
                  whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 16px)" }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: EASE }}
                  whileHover={{ y: -3 }}
                  className="group/zoya my-8 overflow-hidden rounded-2xl bg-slate-100 shadow-lg ring-1 ring-black/5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/blog12.png"
                    alt="Zoya Kou – Trusted digital marketing expert"
                    className="h-64 w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover/zoya:scale-[1.04] sm:h-80 lg:h-[360px]"
                  />
                  <figcaption className="px-4 py-2.5 text-center text-xs italic text-slate-500">
                    Zoya Kou — Full-Stack Digital Marketing Manager
                  </figcaption>
                </motion.figure>
                <Para>
                  Zoya Kou is respected for her practical and straightforward style. With many
                  years of hands-on work with clients across the USA, she has helped all kinds of
                  businesses move from messy marketing to clear and effective systems that bring
                  steady growth.
                </Para>
                <Para>
                  Zoya Kou mixes creative ideas with careful data checking. She builds full
                  digital marketing solutions that are simple to follow and actually deliver good
                  results for her clients.
                </Para>

                <H2>
                  Why Businesses Across the USA Choose Zoyakk for Professional Digital Marketing
                  Services
                </H2>
                <Para>
                  Zoyakk has the same principles as the leading digital marketers. Our focus is
                  to create a clear marketing plan to adapt quickly to changes while providing
                  maximum ROI on investment. Working with our digital marketing consultants is
                  like having your own team of experts for a fraction of the cost. All businesses
                  — from small local businesses needing assistance from a local digital marketing
                  agency, to larger businesses / big companies needing full-service digital
                  marketing and SEO programs for their own business — receive equal importance
                  and effort from us to meet their goals.
                </Para>
                <Para>Zoya Kou will apply her practical approach in her work with all projects.</Para>

                <H2>Digital Marketing Trends Shaping 2026 and Beyond</H2>
                <SectionImage
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80"
                  alt="AI-powered marketing technology and machine learning concept"
                  caption="AI is reshaping personalization, voice search, and privacy."
                />
                <Para>
                  The speed of the market is continually increasing. With AI digital marketing
                  tools, company marketers have better personalization options, voice search
                  capabilities, and increased respect for customers&apos; privacy preferences.
                </Para>
                <Para>
                  By automating boring repetitive tasks, marketing professionals can spend their
                  time on creative ideas and building real relationships with potential
                  customers. This gives businesses that hire innovative, professional consultants
                  a competitive advantage because they are able to stay ahead of the competition
                  rather than constantly playing catch-up.
                </Para>

                <H2>What You Need to Know When Hiring a Digital Marketing Consultant or Expert</H2>
                <SectionImage
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80"
                  alt="Business professionals shaking hands after a consultancy agreement"
                  caption="A great consultant feels like a long-term partner, not a vendor."
                />
                <Para>
                  If you&apos;re searching for a digital marketing expert near you and / or
                  planning to hire one, read on. Take your time and find someone who has
                  experience working with companies that are similar to yours. Also, request to
                  see examples of real-life successes where they helped improve SEO digital
                  marketing or helped other clients grow their revenues through digital marketing.
                </Para>
                <Para>
                  There are many types of digital marketing professionals available today, so
                  determine which type will best suit your needs. Great experts offer various
                  working arrangements (digital marketing consulting services, freelance support,
                  or employed dedicated experts) depending on your budget. Once you form a
                  working relationship with the right digital marketing expert / consultant, it
                  will feel like a solid partnership that you can trust.
                </Para>

                <H2>Taking the Next Step with Proven Digital Marketing Expertise</H2>
                <Para>
                  Marketing never stops changing. Connecting with skilled experts is one of the
                  smartest things you can do for your business right now. The right help can
                  improve your strategies, bring in more customers, and keep you ahead of
                  competitors.
                </Para>

                {/* Key takeaways with staggered bullets */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: EASE }}
                  whileHover={{ y: -2 }}
                  className="relative mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm transition-shadow hover:shadow-lg sm:p-8"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-200/40 blur-3xl"
                  />
                  <p className="relative mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-700">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-500" />
                    Key Takeaways
                  </p>
                  <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                    }}
                    className="relative space-y-3 text-[1rem] leading-7 text-slate-800"
                  >
                    {[
                      <>
                        Digital ad spending in the US is climbing toward{" "}
                        <strong className="font-semibold text-slate-900">$413B in 2026</strong>.
                      </>,
                      "Top experts focus on the full customer journey, not isolated tactics.",
                      "AI-powered marketing offers better personalization & faster iteration.",
                      "The right consultant feels like a real partner — measurable, accountable, results-driven.",
                    ].map((t, i) => (
                      <motion.li
                        key={i}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.45, ease: EASE }}
                        className="flex gap-3"
                      >
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            ease: "backOut",
                            delay: 0.25 + i * 0.1,
                          }}
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-500"
                        />
                        <span>{t}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: EASE }}
                whileHover={{ y: -4 }}
                className="group/cta relative mt-12 flex flex-col items-start gap-4 overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-50 via-white to-indigo-50 p-6 shadow-md ring-1 ring-fuchsia-200 transition-shadow hover:shadow-xl sm:flex-row sm:items-center sm:justify-between sm:p-8"
              >
                <motion.span
                  aria-hidden
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-fuchsia-200/0 via-fuchsia-200/30 to-indigo-200/0 opacity-0 transition-opacity duration-500 group-hover/cta:opacity-100"
                  style={{ backgroundSize: "200% 100%" }}
                />
                <div className="relative">
                  <p className="text-lg font-bold text-slate-900 sm:text-xl">
                    Ready to scale with proven digital marketing expertise?
                  </p>
                  <p className="mt-1 text-sm text-slate-600 sm:text-base">
                    Hire dedicated digital marketing experts at Zoyakk today.
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative"
                >
                  <Link
                    href="/#contact"
                    className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#c961de] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#c961de]/25 transition hover:bg-[#b050c8] hover:shadow-[#c961de]/40"
                  >
                    Hire me
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Back link */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10"
              >
                <Link
                  href="/Blog"
                  className="group inline-flex items-center gap-1 rounded-full bg-[#111216] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
                >
                  <span className="transition-transform group-hover:-translate-x-0.5">←</span>
                  Back to all blogs
                </Link>
              </motion.div>
            </article>

            {/* Sticky sidebar */}
            <aside className="mt-12 hidden w-72 shrink-0 lg:mt-2 lg:block">
              <div className="sticky top-28 space-y-6">
                {/* Author card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-base font-bold text-white shadow-md shadow-fuchsia-300/40"
                    >
                      Z
                    </motion.div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900">Zoya Kou</span>
                      <span className="text-xs text-slate-500">Full-Stack Digital Manager</span>
                    </div>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600">
                    Helping USA businesses scale through smart marketing, CRM, and AI-driven
                    funnels.
                  </p>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href="/#contact"
                      className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#c961de] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-[#c961de]/25 transition hover:bg-[#b050c8]"
                    >
                      Hire me →
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Share */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-xl"
                >
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Share this article
                  </p>
                  <div className="flex items-center gap-3 text-[18px] text-slate-500">
                    {[
                      { Icon: FaWhatsapp, hover: "hover:text-[#25D366]" },
                      { Icon: FaFacebookF, hover: "hover:text-[#1877F2]" },
                      { Icon: FaLinkedinIn, hover: "hover:text-[#0A66C2]" },
                      { Icon: FaXTwitter, hover: "hover:text-black" },
                    ].map(({ Icon, hover }, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ y: -4, scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="cursor-pointer"
                      >
                        <Icon className={`transition ${hover}`} />
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Key stats mini */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.55 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-gradient-to-br from-fuchsia-50 via-white to-indigo-50 p-5 shadow-sm ring-1 ring-fuchsia-200 transition-shadow hover:shadow-xl"
                >
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-fuchsia-700">
                    By the numbers
                  </p>
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.7 } } }}
                    className="space-y-3 text-xs leading-snug text-slate-700"
                  >
                    {[
                      ["$413B", "US digital ad spend 2026"],
                      ["10×", "ROI vs traditional"],
                      ["78%", "Buyers research online first"],
                    ].map(([n, l], i) => (
                      <motion.li
                        key={i}
                        variants={fadeUp}
                        className="flex items-baseline gap-2"
                      >
                        <span className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-lg font-black text-transparent">
                          {n}
                        </span>
                        <span>{l}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
