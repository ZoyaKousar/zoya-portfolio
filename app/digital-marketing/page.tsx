"use client"

import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  FlaskConical,
  LayoutDashboard,
  LineChart,
  Mail,
  Megaphone,
  Share2,
  Sparkles,
  TrendingUp,
  Workflow,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import * as simpleIcons from "simple-icons"

import StatsCard from "../components/statsCard"
import YouTubeVideo from "../components/youtubeVideo"
import { PORTFOLIO_VIDEOS } from "../config/portfolioVideos"

const scrollViewport = { once: true, amount: 0.25, margin: "0px 0px -60px 0px" } as const

type SkillItem = { label: string; description: string; Icon: LucideIcon }

const skills: SkillItem[] = [
  {
    label: "Google Ads",
    description: "Search, display, and performance campaigns tuned for clear ROI and learning loops.",
    Icon: Megaphone,
  },
  {
    label: "A/B Testing",
    description: "Structured experiments on creatives, audiences, and landing experiences.",
    Icon: FlaskConical,
  },
  {
    label: "SEO, ASO & SMM",
    description: "Organic growth for websites and apps, plus always-on social rhythm.",
    Icon: LineChart,
  },
  {
    label: "Email Marketing",
    description: "Lifecycle journeys that nurture leads and bring customers back.",
    Icon: Mail,
  },
  {
    label: "Social Media Advertising",
    description: "Paid social with tight targeting, creative tests, and honest reporting.",
    Icon: Share2,
  },
  {
    label: "Marketing Automation Tools",
    description: "Triggers, scoring, and CRM handoffs so scale does not mean chaos.",
    Icon: Workflow,
  },
  {
    label: "Content Management Systems",
    description: "Structured hubs your team can update without breaking layout or SEO.",
    Icon: LayoutDashboard,
  },
]

type ToolDef = {
  name: string
  slug: string
  fallbackIcon: LucideIcon
}

const tools: ToolDef[] = [
  { name: "HubSpot", slug: "hubspot", fallbackIcon: Workflow },
  { name: "SEMrush", slug: "semrush", fallbackIcon: LineChart },
  { name: "Mailchimp", slug: "mailchimp", fallbackIcon: Mail },
  { name: "Hootsuite", slug: "hootsuite", fallbackIcon: Share2 },
  { name: "SocialPilot", slug: "socialpilot", fallbackIcon: Megaphone },
  { name: "Salesforce", slug: "salesforce", fallbackIcon: LayoutDashboard },
  { name: "Canva", slug: "canva", fallbackIcon: FlaskConical },
  { name: "Trello", slug: "trello", fallbackIcon: Workflow },
  { name: "Asana", slug: "asana", fallbackIcon: Share2 },
  { name: "Jira", slug: "jira", fallbackIcon: LayoutDashboard },
  { name: "Meta Ads", slug: "meta", fallbackIcon: Megaphone },
  { name: "Google Ads", slug: "googleads", fallbackIcon: LineChart },
]

const stats = [
  { number: "50+", label: "Campaigns Managed", featured: false },
  { number: "40%", label: "Avg. Lead Growth", featured: true },
  { number: "12+", label: "Platforms & Tools", featured: false },
]

type SimpleIconShape = {
  slug: string
  path: string
  hex: string
}

function getSimpleIconBySlug(slug: string): SimpleIconShape | null {
  const found = Object.values(simpleIcons).find((icon) => {
    if (!icon || typeof icon !== "object" || !("slug" in icon)) return false
    return (icon as { slug?: string }).slug === slug
  })
  if (!found || typeof found !== "object" || !("path" in found) || !("hex" in found) || !("slug" in found)) {
    return null
  }
  return found as SimpleIconShape
}

const skillCardAccents = [
  "border-fuchsia-500/35 shadow-fuchsia-500/15 from-fuchsia-500/20 via-transparent to-indigo-600/10",
  "border-violet-400/35 shadow-violet-500/15 from-violet-500/20 via-transparent to-fuchsia-600/10",
  "border-sky-400/35 shadow-sky-500/15 from-sky-500/20 via-transparent to-indigo-600/10",
  "border-amber-400/35 shadow-amber-500/15 from-amber-500/15 via-transparent to-orange-600/10",
  "border-emerald-400/35 shadow-emerald-500/15 from-emerald-500/15 via-transparent to-teal-600/10",
  "border-rose-400/35 shadow-rose-500/15 from-rose-500/20 via-transparent to-pink-600/10",
  "border-cyan-400/35 shadow-cyan-500/15 from-cyan-500/15 via-transparent to-blue-600/10",
]

const skillIconRings = [
  "from-fuchsia-500 to-indigo-600 shadow-fuchsia-500/35",
  "from-violet-500 to-fuchsia-600 shadow-violet-500/35",
  "from-sky-400 to-blue-600 shadow-sky-500/35",
  "from-amber-400 to-orange-600 shadow-amber-500/30",
  "from-emerald-400 to-teal-600 shadow-emerald-500/30",
  "from-rose-500 to-pink-600 shadow-rose-500/30",
  "from-cyan-400 to-indigo-500 shadow-cyan-500/30",
]

type LayoutKind = "bento" | "filmstrip" | "showcase"

type ProjectItem = {
  id: string
  channelName: string
  title: string
  category: string
  description: string
  layout: LayoutKind
  images: [string, string, string]
  variant: "a" | "b"
}

const projects: ProjectItem[] = [
  {
    id: "facebook",
    channelName: "Social Media Marketing",
    title: "Digital Growth & Content Management",
    category: "Content Management | Google Ads | Organic Growth",
    description:
      "Managing and growing brand presence across multiple platforms including Facebook, Instagram, LinkedIn, Pinterest, and TikTok.",
    layout: "bento",
    images: ["/212.png", "/200.png", "/201.png"],
    variant: "a",
  },
  {
    id: "Meta Ads",
    channelName: "Meta Ads & Lead Generation",
    title: "High-Performance Lead Generation & Meta Advertising for Car Detailing Businesses",
    category: "Funnels | Web Development | Meta Ads | Workflow Automation",
    description:
      "Designed and managed high-converting lead generation systems for car detailing businesses using Facebook & Instagram Meta campaigns, landing pages, and optimized conversion funnels. Integrated workflow automation for instant lead capture, call scheduling, and follow-ups to maximize conversions and customer bookings.",
    layout: "filmstrip",
    images: ["/202.png", "/203.png", "/204.png"],
    variant: "b",
  },
  {
    id: "Writing",
    channelName: "Content Writing",
    title: "SEO-Optimized Content & Brand Copywriting",
    category: "Blog Writing | Website Copy | SEO Content | Social Media Copy",
    description:
      "Created engaging and SEO-friendly content for websites, blogs, and social media to improve brand visibility, audience engagement, and organic traffic growth.",
    layout: "showcase",
    images: ["/208.png", "/206.png", "/209.PNG"],
    variant: "a",
  },
  {
    id: "CRM",
    channelName: "CRM Management",
    title: "GoHighLevel (GHL) Setup & Automation Management",
    category: "CRM | Workflow Automation | Lead Management | Client Follow-ups",
    description:
      "Managed and optimized GoHighLevel (GHL) for lead tracking, automated follow-ups, pipeline management, and appointment scheduling to streamline client communication and increase conversions.",
    layout: "bento",
    images: ["/205.png", "/207.png", "/210.png"],
    variant: "b",
  },
  {
    id: "Email",
    channelName: "Email Marketing",
    title: "High-Converting Email Campaigns & Automation Sequences",
    category: "Email Campaigns | Automation | Lead Nurturing | Funnel Emails",
    description: "Designed and managed targeted email campaigns with automated sequences to nurture leads",
    layout: "filmstrip",
    images: ["/213.png", "/211.png", "/214.png"],
    variant: "a",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const staggerItem = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 380, damping: 26 },
  },
}

function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow?: string
  title: string
  highlight?: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={scrollViewport}
      className="mb-10 text-center md:mb-14"
    >
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-300">
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
        {title}{" "}
        {highlight && <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">{highlight}</span>}
      </h2>
      <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base md:text-lg">{description}</p>
    </motion.div>
  )
}

const imageGlows = [
  "from-fuchsia-500/40 via-violet-500/25 to-indigo-600/30",
  "from-violet-500/40 via-fuchsia-500/20 to-blue-600/30",
  "from-indigo-500/35 via-purple-500/25 to-fuchsia-500/30",
]

const imageTilts = ["-rotate-1", "rotate-1", "-rotate-[0.5deg]"]

type FrameVariant = "browser" | "card" | "stack"

function CoolImageFrame({
  src,
  alt,
  variant = "card",
  index = 0,
  featured = false,
  className = "",
}: {
  src: string
  alt: string
  variant?: FrameVariant
  index?: number
  featured?: boolean
  className?: string
}) {
  const glow = imageGlows[index % imageGlows.length]
  const tilt = imageTilts[index % imageTilts.length]

  if (variant === "browser") {
    return (
      <motion.div
        whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 22 } }}
        className={`group/frame relative ${className}`}
      >
        <div
          aria-hidden
          className={`absolute -inset-3 rounded-[1.35rem] bg-gradient-to-br ${glow} blur-2xl opacity-50 transition-opacity duration-500 group-hover/frame:opacity-90`}
        />
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-zinc-700/90 to-zinc-900 p-2 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.65),0_0_0_1px_rgba(201,97,222,0.12)] sm:rounded-[1.35rem] sm:p-2.5">
          <div className="mb-2 flex items-center gap-2 px-1">
            <div className="h-2.5 w-2.5 rounded-full bg-rose-500/90 shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400/90 shadow-[0_0_8px_rgba(251,191,36,0.4)]" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/90 shadow-[0_0_8px_rgba(52,211,153,0.4)]" />
            <div className="ml-2 h-5 flex-1 rounded-md border border-white/10 bg-black/30" />
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0b1f]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className={`w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover/frame:scale-[1.04] ${featured ? "min-h-[200px] sm:min-h-[260px]" : "aspect-[4/3]"}`}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F103F]/70 via-transparent to-white/[0.06]" />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-1000 ease-out group-hover/frame:translate-x-full group-hover/frame:opacity-100"
            />
          </div>
        </div>
      </motion.div>
    )
  }

  if (variant === "stack") {
    return (
      <motion.div
        whileHover={{ y: -5, rotate: 0, transition: { type: "spring", stiffness: 320, damping: 20 } }}
        className={`group/frame relative ${tilt} transition-transform duration-500 hover:rotate-0 ${className}`}
      >
        <div
          aria-hidden
          className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${glow} blur-xl opacity-40 transition-opacity duration-500 group-hover/frame:opacity-75`}
        />
        <div className="absolute -right-1 -top-1 h-full w-full rounded-2xl border border-fuchsia-500/20 bg-fuchsia-950/40" />
        <div className="absolute -right-0.5 -top-0.5 h-full w-full rounded-2xl border border-indigo-500/15 bg-indigo-950/30" />
        <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-[#0c0d28] p-1 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.55)] ring-1 ring-fuchsia-500/20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-xl object-cover transition-transform duration-700 group-hover/frame:scale-105"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-1 rounded-xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-1000 ease-out group-hover/frame:translate-x-full group-hover/frame:opacity-100"
          />
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 340, damping: 22 } }}
      className={`group/frame relative ${tilt} ${className}`}
    >
      <div
        aria-hidden
        className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${glow} blur-xl opacity-35 transition-opacity duration-500 group-hover/frame:opacity-70`}
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-[3px] shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-sm">
        <div className="relative overflow-hidden rounded-[0.85rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover/frame:scale-[1.06]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F103F]/60 via-transparent to-white/[0.04]" />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/22 to-transparent opacity-0 transition-all duration-1000 ease-out group-hover/frame:translate-x-full group-hover/frame:opacity-100"
          />
        </div>
      </div>
    </motion.div>
  )
}

function ProjectVisuals({
  layout,
  imgs,
  alt,
  reverse,
}: {
  layout: LayoutKind
  imgs: [string, string, string]
  alt: string
  reverse: boolean
}) {
  if (layout === "filmstrip") {
    return (
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={scrollViewport}
        className="-mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-3 scrollbar-hide sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0"
      >
        {imgs.map((src, i) => (
          <motion.div
            key={`${src}-f-${i}`}
            variants={staggerItem}
            className="w-[82vw] max-w-[340px] shrink-0 snap-center sm:w-auto sm:max-w-none sm:shrink"
          >
            <CoolImageFrame
              src={src}
              alt={i === 0 ? alt : ""}
              variant={i === 1 ? "stack" : "browser"}
              index={i}
              featured={i === 0}
            />
          </motion.div>
        ))}
      </motion.div>
    )
  }

  if (layout === "showcase") {
    return (
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={scrollViewport}
        className={`flex flex-col gap-4 sm:gap-5 md:flex-row md:gap-4 ${reverse ? "md:flex-row-reverse" : ""}`}
      >
        <motion.div variants={staggerItem} className="min-h-[220px] flex-[1.35] sm:min-h-[260px]">
          <CoolImageFrame src={imgs[0]} alt={alt} variant="browser" index={0} featured />
        </motion.div>
        <div className="flex flex-1 flex-col gap-4 sm:gap-3">
          <motion.div variants={staggerItem} className="flex-1">
            <CoolImageFrame src={imgs[1]} alt="" variant="stack" index={1} />
          </motion.div>
          <motion.div variants={staggerItem} className="flex-1">
            <CoolImageFrame src={imgs[2]} alt="" variant="card" index={2} />
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      className="grid min-h-[280px] grid-cols-2 grid-rows-2 gap-3 sm:min-h-[300px] sm:gap-4 md:min-h-[320px]"
    >
      <motion.div variants={staggerItem} className="col-span-2 row-span-1 sm:col-span-1 sm:row-span-2">
        <CoolImageFrame src={imgs[0]} alt={alt} variant="browser" index={0} featured className="h-full" />
      </motion.div>
      <motion.div variants={staggerItem}>
        <CoolImageFrame src={imgs[1]} alt="" variant="stack" index={1} />
      </motion.div>
      <motion.div variants={staggerItem}>
        <CoolImageFrame src={imgs[2]} alt="" variant="card" index={2} />
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const imgs = project.images
  const reverseLayout = project.variant === "b"
  const copyOnRight = project.layout === "bento" ? reverseLayout : index % 2 === 1

  const cardStyles =
    project.layout === "filmstrip"
      ? "border-blue-800/40 bg-[#0c0d2e]/80 shadow-fuchsia-950/25"
      : project.layout === "showcase"
        ? "border-indigo-500/30 bg-gradient-to-br from-[#14153f]/95 to-[#08091f]/95"
        : "border-fuchsia-500/25 bg-[#10112f]/90 shadow-fuchsia-900/15"

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={scrollViewport}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl border p-5 shadow-2xl backdrop-blur-sm sm:rounded-3xl sm:p-8 md:p-10 ${cardStyles}`}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-fuchsia-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {project.layout === "filmstrip" ? (
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={scrollViewport}
            transition={{ duration: 0.45 }}
            className="mb-6 max-w-2xl sm:mb-8"
          >
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-fuchsia-300 sm:text-xs">{project.channelName}</p>
            <span className="mb-3 inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/70 sm:text-[11px]">
              {project.category}
            </span>
            <h3 className="mt-3 text-xl font-bold leading-snug text-white sm:text-2xl md:text-3xl">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base">{project.description}</p>
          </motion.div>
          <ProjectVisuals layout="filmstrip" imgs={imgs} alt={project.title} reverse={false} />
        </div>
      ) : (
        <div className={`relative z-10 flex flex-col gap-8 sm:gap-10 lg:gap-12 ${copyOnRight ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
          <div className="lg:w-[50%]">
            <ProjectVisuals layout={project.layout} imgs={imgs} alt={project.title} reverse={reverseLayout} />
          </div>
          <motion.div
            initial={{ opacity: 0, x: copyOnRight ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={scrollViewport}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-1 flex-col justify-center"
          >
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-fuchsia-300 sm:text-xs">{project.channelName}</p>
            <span className="mb-3 w-fit rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/70 sm:text-[11px]">
              {project.category}
            </span>
            <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl md:text-3xl">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-base">{project.description}</p>
          </motion.div>
        </div>
      )}
    </motion.article>
  )
}

export default function DigitalMarketingPage() {
  return (
    <div className="mt-20 min-h-screen overflow-x-hidden text-white">
      {/* Hero */}
      <section className="relative flex min-h-[auto] items-center px-4 py-12 sm:min-h-[80vh] sm:py-16 md:px-8 md:py-20 lg:px-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute left-1/2 top-1/3 h-px w-full max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-300">
                <TrendingUp className="h-3.5 w-3.5" aria-hidden />
                Portfolio
              </span>

              <h1 className="mb-2 text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  Digital
                </span>
                <br />
                <span className="text-white">Marketing</span>
              </h1>

              <p className="mb-1 text-lg font-semibold text-fuchsia-400 sm:text-xl">Hello! I&apos;m Kou — Marketing Specialist</p>
              <p className="mx-auto mb-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base md:text-lg lg:mx-0">
                I lead campaigns and growth across paid and organic channels—experiments, messaging, and reporting so every
                touchpoint supports the next.
              </p>
              <p className="mx-auto mb-6 max-w-xl text-sm text-white/55 sm:text-base lg:mx-0">
                Watch the intro video to see how I plan, execute, and report on digital marketing work.
              </p>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a href="/cv/full stack.pdf" download className="w-full sm:w-auto">
                  <div className="rounded-[50px] bg-gradient-primary px-8 py-3.5 text-center text-sm font-semibold text-white transition-all bg-gradient-primary-hover sm:text-base">
                    Download CV
                  </div>
                </a>
                <Link
                  href="/pricing"
                  className="flex w-full items-center justify-center gap-2 rounded-[50px] border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white/90 transition hover:border-fuchsia-400/40 hover:bg-white/10 sm:w-auto sm:text-base"
                >
                  View Pricing
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_60px_-12px_rgba(201,97,222,0.35)] sm:rounded-3xl">
                <YouTubeVideo videoId={PORTFOLIO_VIDEOS.digitalMarketing} title="Digital Marketing Introduction" />
              </div>
              <p className="mt-3 text-center text-xs text-white/45 sm:text-sm">Click play to watch the intro</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative px-4 pb-8 md:px-8 md:pb-12 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-5 sm:flex-row sm:flex-wrap sm:gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <StatsCard
              key={stat.label}
              number={stat.number}
              label={stat.label}
              delay={i * 120}
              featured={stat.featured}
              className="mx-auto w-full max-w-none sm:max-w-[340px] md:min-w-[280px]"
            />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="relative px-4 py-14 md:px-8 md:py-24 lg:px-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-fuchsia-600/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Expertise"
            title="Core"
            highlight="Skills"
            description="Acquisition, retention, and growth—presented clearly, not as buzzwords."
          />

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {skills.map(({ label, description, Icon }, index) => {
              const accent = skillCardAccents[index % skillCardAccents.length]
              const ring = skillIconRings[index % skillIconRings.length]
              return (
                <motion.div
                  key={label}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={scrollViewport}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { type: "spring", stiffness: 420, damping: 22 } }}
                  className={`group relative overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-[#15163d]/95 to-[#0b0c24]/95 p-5 shadow-xl transition sm:p-6 ${accent}`}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl"
                  />
                  <div className="relative flex items-start gap-3 sm:gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg ring-2 ring-white/10 sm:h-16 sm:w-16 sm:rounded-2xl ${ring}`}
                    >
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1.65} />
                    </div>
                    <div className="min-w-0 text-left">
                      <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">{label}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-white/70 sm:mt-2 sm:text-sm">{description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="relative border-t border-white/5 px-4 py-14 md:px-8 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Tech Stack"
            title="Tools"
            highlight="I Use"
            description="Consistent brand-aligned tools for design, campaigns, and automation workflows."
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={scrollViewport}
            variants={staggerParent}
            className="grid grid-cols-2 gap-3 xs:gap-4 sm:grid-cols-3 sm:gap-4 md:gap-5 lg:grid-cols-4"
          >
            {tools.map((tool) => {
              const brandIcon = getSimpleIconBySlug(tool.slug)
              return (
                <motion.div
                  key={tool.name}
                  variants={staggerItem}
                  whileHover={{ scale: 1.03, y: -4, transition: { type: "spring", stiffness: 400, damping: 18 } }}
                  className="flex min-h-[110px] flex-col items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.02] px-2 py-4 text-center shadow-lg shadow-black/20 backdrop-blur-sm transition hover:border-fuchsia-400/35 hover:shadow-fuchsia-900/25 sm:min-h-[128px] sm:gap-3 sm:rounded-2xl sm:px-3 sm:py-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-slate-900 shadow-md ring-1 ring-black/5 sm:h-14 sm:w-14 sm:rounded-xl">
                    {brandIcon ? (
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className="h-6 w-6 sm:h-8 sm:w-8"
                        fill={`#${brandIcon.hex}`}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d={brandIcon.path} />
                      </svg>
                    ) : (
                      <tool.fallbackIcon className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden />
                    )}
                  </div>
                  <span className="text-xs font-bold leading-tight text-white/95 sm:text-sm">{tool.name}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="relative px-4 py-14 pb-24 md:px-8 md:py-28 md:pb-32 lg:px-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Case Studies"
            title="My"
            highlight="Projects"
            description="I help brands grow with powerful social media and marketing campaigns."
          />

          <div className="flex flex-col gap-10 sm:gap-14 md:gap-20">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 pb-24 md:px-8 md:pb-32 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-fuchsia-500/25 bg-gradient-to-br from-[#15163d] via-[#0f103f] to-[#08091f] px-6 py-10 text-center shadow-2xl sm:rounded-3xl sm:px-10 sm:py-14"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-indigo-600/20 blur-3xl" />

          <div className="relative z-10">
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Ready to grow your brand?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-sm text-white/65 sm:text-base">
              Let&apos;s build campaigns that convert—paid ads, organic content, and automation that actually work together.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/pricing" className="w-full sm:w-auto">
                <div className="rounded-[50px] bg-gradient-primary px-8 py-3.5 text-sm font-semibold text-white transition-all bg-gradient-primary-hover sm:text-base">
                  Get Started
                </div>
              </Link>
              <Link
                href="/"
                className="flex w-full items-center justify-center gap-2 rounded-[50px] border border-white/20 px-8 py-3.5 text-sm font-semibold text-white/90 transition hover:border-fuchsia-400/40 hover:bg-white/5 sm:w-auto sm:text-base"
              >
                Back to Home
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
