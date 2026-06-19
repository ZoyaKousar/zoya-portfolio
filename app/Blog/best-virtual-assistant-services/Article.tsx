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
}: {
  num: number;
  prefix?: string;
  suffix?: string;
  label: string;
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
      const eased = 1 - Math.pow(1 - t, 3);
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

  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const blobY1 = useTransform(heroProgress, [0, 1], [0, -60]);
  const blobY2 = useTransform(heroProgress, [0, 1], [0, 60]);

  return (
    <>
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
                  Virtual Assistant Services
                </motion.span>

                <motion.h1
                  variants={fadeUp}
                  className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
                >
                  Best Virtual Assistant Services{" "}
                  <span className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
                    Transforming US Businesses in 2026
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
                        Published 23 May 2026 · 7 min read
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
                  Looking for the best virtual assistant services in the USA? Discover how top
                  virtual assistant companies and US-based virtual assistants can cut costs, boost
                  productivity, and free up your time — with reliable outsourcing solutions at
                  Zoyakk.
                </motion.p>
              </motion.div>

              {/* Hero banner */}
              <motion.figure
                initial={{ opacity: 0, clipPath: "inset(0% 20% 0% 20% round 24px)" }}
                animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 24px)" }}
                transition={{ duration: 1, ease: EASE, delay: 0.3 }}
                whileHover={{ y: -3 }}
                className="group/hero relative mt-10 overflow-hidden rounded-3xl bg-slate-50 shadow-xl ring-1 ring-slate-200"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/blog13.png"
                  alt="Zoya Kou — best virtual assistant services in the USA for 2026"
                  className="h-auto w-full object-contain transition-transform duration-[1400ms] ease-out group-hover/hero:scale-[1.02]"
                />
              </motion.figure>

              {/* Body */}
              <div className="relative pb-14 pt-2 text-[#111216]">
                <Para>
                  Companies all across America, from small outfits to big corporations, are
                  leaning on{" "}
                  <strong className="font-semibold text-slate-900">
                    virtual assistant companies
                  </strong>{" "}
                  more than ever. They need to keep things running smoothly without the massive
                  payroll hit that comes with full-time hires. These services give you flexible
                  help that actually matches what your business needs right now — whether that&apos;s
                  knocking out daily admin stuff or jumping into bigger projects.
                </Para>
                <Para>
                  Remote work is just how things are done these days, so best virtual assistant
                  services and companies based in the USA slide right into your team. They work
                  in the same time zones and get how business happens here. You can see the demand
                  growing because leaders are realizing this is a smart, practical way to stay
                  ahead without bloating their expenses.
                </Para>

                <H2>Why the Best Virtual Assistant Services Are Essential for Modern Business Automation</H2>
                <SectionImage
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=80"
                  alt="Business owner working with a virtual assistant on a laptop"
                  caption="Top VA services can cut operating costs by ~60%."
                />
                <Para>
                  Here&apos;s what really makes the best virtual assistant services different:
                  they don&apos;t just tick boxes. They deliver support that actually improves how
                  your business runs day to day. Think clearing out packed inboxes, keeping
                  schedules organized, and handling data entry without mistakes.
                </Para>
                <Para>
                  When you team up with the top virtual assistant companies, you can often slash
                  operating costs by around{" "}
                  <strong className="font-semibold text-slate-900">60 percent</strong>. Even
                  better, you get pros who really know the US market. That kind of backup lets
                  owners and executives finally step back from the endless repetitive tasks and
                  spend their energy on the decisions that push real growth.
                </Para>

                {/* Stat cards with count-up */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                  className="my-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
                >
                  <StatCard num={60} suffix="%" label="Average cost reduction vs. full-time hires" />
                  <StatCard num={15} suffix="+ hrs" label="Saved per week by busy founders" />
                  <StatCard num={100} suffix="%" label="US time-zone aligned support" />
                </motion.div>

                <H2>Exploring Leading Virtual Assistant Businesses</H2>
                <Para>
                  The better virtual assistant businesses put together packages that actually work
                  for startups, scaling small and medium companies, and even large enterprises. No
                  matter if you go with a staffing agency style or a complete virtual assistant
                  firm, the good ones always focus on solid quality, straightforward
                  communication, and keeping everything confidential.
                </Para>
                <Para>
                  A lot of the platforms now include tools that make collaborating feel easy and
                  natural, even if your team is scattered. The real win with US-based virtual
                  assistants? Zero language issues or cultural mix-ups. You get faster answers and
                  results that just feel right.
                </Para>

                <H2>How to Hire Virtual Assistant USA for Maximum Efficiency</H2>
                <SectionImage
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80"
                  alt="Hiring a US-based virtual assistant for a small business"
                  caption="Same time zone = real-time decisions and faster delivery."
                />
                <Para>
                  If you&apos;re thinking about hiring a virtual assistant in the USA, start
                  simple: look at their real experience, the skills they bring, and what actual
                  clients have said. Pick profiles that line up with your day-to-day needs — basic
                  admin one day, executive-level help the next.
                </Para>
                <Para>
                  The reliable companies make onboarding smooth so you don&apos;t waste time
                  getting started. One of the smartest parts about going with a US virtual
                  assistant is sharing the same time zone. Conversations happen in real time,
                  decisions move quicker, and everything just flows better in the busy American
                  business scene.
                </Para>

                <H2>The Advantages of Partnering with a Trusted Virtual Assistant Outsourcing Company</H2>
                <Para>
                  A dependable virtual assistant outsourcing company lets you adjust support
                  whenever your business shifts — ramp it up during busy periods or scale back
                  when things slow down. No long contracts tying your hands.
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
                  The right VA outsourcing partner doesn&apos;t feel like a vendor — it feels like
                  a flexible extension of your own team, ready to scale up or down as your
                  business breathes.
                </motion.blockquote>

                <Para>
                  They basically serve as staffing experts, lining you up with the right people at
                  the right moment. You can even bring in seasoned executive virtual assistants
                  for tougher jobs like planning ahead or looking after important client
                  relationships. Plenty of companies that work with established agencies end up
                  with noticeably higher productivity and teams that aren&apos;t constantly
                  overloaded.
                </Para>

                <H2>Comparing Top Virtual Assistant Companies to Find Your Perfect Fit</H2>
                <SectionImage
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
                  alt="Team comparing virtual assistant companies and reviewing options"
                  caption="Compare services, pricing, and tool fluency before you commit."
                />
                <Para>
                  Picking the right virtual assistant company takes a little homework. You want to
                  check what services they actually offer, how they bill, and what real clients
                  are saying. The strongest ones make sure their people are trained on the tools
                  most businesses use — CRM systems, project platforms, marketing software, that
                  sort of thing.
                </Para>
                <Para>
                  Many solid firms even let you start small so you can test the waters before
                  going all in. Spending time on this comparison usually leads you to a provider
                  who gets your industry and where you want to take your business.
                </Para>

                <H2>Benefits of Choosing US Based Virtual Assistant for Local Enterprises</H2>
                <SectionImage
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80"
                  alt="Local US enterprise team partnering with a virtual assistant"
                  caption="US-based VAs understand local regulations, tax, and culture."
                />
                <Para>
                  Going with a US-based virtual assistant has some pretty clear upsides. These
                  folks already understand American rules, taxes, and what local customers
                  expect. They help keep everything compliant and on point for the market here.
                </Para>
                <Para>
                  Businesses that choose virtual assistants in the USA tend to run into fewer
                  mix-ups and get things done much faster than when dealing with big time
                  differences overseas. It just creates a tighter connection with your team and
                  sets up relationships that can last.
                </Para>

                <H2>What Sets the Best Virtual Assistant Agencies Apart from the Competition</H2>
                <Para>
                  What separates the top virtual assistant agencies is how seriously they take
                  screening and how they keep training their people year after year. They keep a
                  solid pool of vetted talent ready when you need it.
                </Para>
                <Para>
                  Little things like giving you a dedicated account manager or sending clear
                  performance updates really stand out. Companies hunting for virtual assistant
                  services in the USA love that kind of transparency — it simply leads to
                  smoother projects and better results all around.
                </Para>

                <H2>Real-World Success Stories from Virtual Assistant Services USA Implementations</H2>
                <SectionImage
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80"
                  alt="Small business owners celebrating growth from outsourcing"
                  caption="Owners report hours saved every week and steady revenue lifts."
                />
                <Para>
                  You hear it from business owners all the time: bringing in virtual assistant
                  services in the USA made a noticeable difference. A lot of them save hours every
                  week and watch their revenue pick up.
                </Para>
                <Para>
                  Smaller companies especially find they can grow quicker because they&apos;re not
                  stuck carrying extra fixed costs. Real cases show how a good virtual assistant
                  in the USA gave owners room to think bigger, try new ideas, and bring in fresh
                  clients. It&apos;s solid proof that the right platforms and staffing solutions
                  actually deliver.
                </Para>

                <H2>The Future of Virtual Assistant Platforms</H2>
                <SectionImage
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80"
                  alt="AI-driven virtual assistant platforms and automation"
                  caption="AI tooling + human judgment is the new hybrid standard."
                />
                <Para>
                  Down the road, virtual assistant platforms will keep getting smarter with tools,
                  but they won&apos;t lose the human judgment that matters when things get tricky.
                  Newer virtual assistant businesses are mixing automation with real executive
                  support in hybrid setups.
                </Para>
                <Para>
                  As more folks look for virtual assistants in the USA, providers are putting
                  extra effort into training so they stay ahead of what clients actually need.
                  That practical mindset is exactly what will keep these companies useful as
                  technology and markets keep shifting.
                </Para>

                <H2>Why Zoyakk Stands Out Among Virtual Assistant Companies in the USA</H2>
                <Para>
                  People who&apos;ve been in the industry a while, including Zoya Kou, keep
                  saying the same thing: pick providers that care about real quality and fresh
                  thinking. The team focuses on virtual assistant services that bring actual
                  measurable wins for clients.
                </Para>
                <Para>
                  That commitment to doing it properly has helped them earn a respected spot among
                  the better-rated virtual assistant companies working with the US market.
                </Para>

                <H2>Taking the Next Step with Expert Virtual Assistant Support</H2>
                <Para>
                  If your business feels ready to run smoother, it might be time to look at
                  practical virtual assistant solutions built for the challenges you actually
                  face. The right company can open up better productivity and some growth
                  possibilities you hadn&apos;t even considered yet.
                </Para>
                <Para>
                  Virtual assistant services keep evolving, and businesses that use them
                  thoughtfully have a real shot at moving forward stronger.
                </Para>

                {/* Key takeaways */}
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
                        Top VA companies can cut operating costs by{" "}
                        <strong className="font-semibold text-slate-900">~60%</strong>.
                      </>,
                      "US-based VAs share your time zone — real-time decisions, faster delivery.",
                      "Flexible packages let you scale up or down without long contracts.",
                      "The right agency feels like a true extension of your team — vetted, accountable, results-driven.",
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
                    Ready to scale with a trusted US virtual assistant team?
                  </p>
                  <p className="mt-1 text-sm text-slate-600 sm:text-base">
                    Explore reliable virtual assistant outsourcing solutions at Zoyakk today.
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
                      ["60%", "Lower operating cost"],
                      ["15+ hrs", "Saved per week"],
                      ["100%", "US time-zone aligned"],
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
