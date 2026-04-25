"use client"

import type { LucideIcon } from "lucide-react"
import {
  FlaskConical,
  LayoutDashboard,
  LineChart,
  Mail,
  Megaphone,
  Share2,
  Workflow,
} from "lucide-react"
import { motion } from "framer-motion"
import * as simpleIcons from "simple-icons"

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
  /** swap image order / emphasis */
  variant: "a" | "b"
}

const projects: ProjectItem[] = [
  {
    id: "facebook",
    channelName: "Social Media Marketing ",
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
    description: "Designed and managed high-converting lead generation systems for car detailing businesses using Facebook & Instagram Meta campaigns, landing pages, and optimized conversion funnels. Integrated workflow automation for instant lead capture, call scheduling, and follow-ups to maximize conversions and customer bookings.",
    layout: "filmstrip",
    images: ["/202.png", "/203.png", "/204.png"],
    variant: "b",
  },
  {
    id: "Writing",
    channelName: "Content Writing",
    title: "SEO-Optimized Content & Brand Copywriting",
    category: "Blog Writing | Website Copy | SEO Content | Social Media Copy",
    description: "Created engaging and SEO-friendly content for websites, blogs, and social media to improve brand visibility, audience engagement, and organic traffic growth.",
    layout: "showcase",
    images: ["/208.png", "/206.png", "/209.PNG"],
    variant: "a",
  },
  {
    id: "CRM",
    channelName: "CRM Management",
    title: "GoHighLevel (GHL) Setup & Automation Management",
    category: "CRM | Workflow Automation | Lead Management | Client Follow-ups",
    description: "Managed and optimized GoHighLevel (GHL) for lead tracking, automated follow-ups, pipeline management, and appointment scheduling to streamline client communication and increase conversions.",
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
        className="flex gap-2 md:gap-3"
      >
        {imgs.map((src, i) => (
          <motion.div
            key={`${src}-f-${i}`}
            variants={staggerItem}
            className="relative aspect-[4/3] min-h-0 flex-1 overflow-hidden rounded-xl border border-fuchsia-500/25 shadow-lg"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={i === 0 ? alt : ""} className="h-full w-full object-cover" loading="lazy" />
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
        className={`flex flex-col gap-2 md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}
      >
        <motion.div variants={staggerItem} className="relative min-h-[200px] flex-[1.2] overflow-hidden rounded-2xl border border-white/15">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgs[0]} alt={alt} className="h-full w-full object-cover" loading="lazy" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F103F]/85 via-transparent to-transparent" />
        </motion.div>
        <div className="flex flex-1 flex-col gap-2">
          <motion.div variants={staggerItem} className="relative min-h-[96px] flex-1 overflow-hidden rounded-xl border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgs[1]} alt="" className="h-full w-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div variants={staggerItem} className="relative min-h-[96px] flex-1 overflow-hidden rounded-xl border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgs[2]} alt="" className="h-full w-full object-cover" loading="lazy" />
          </motion.div>
        </div>
      </motion.div>
    )
  }

  // bento
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      className="grid min-h-[220px] grid-cols-2 grid-rows-2 gap-2 md:min-h-[260px] md:gap-3"
    >
      <motion.div
        variants={staggerItem}
        className="relative col-span-2 row-span-1 overflow-hidden rounded-2xl border border-fuchsia-500/30 md:col-span-1 md:row-span-2"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imgs[0]} alt={alt} className="h-full min-h-[140px] w-full object-cover" loading="lazy" />
      </motion.div>
      <motion.div variants={staggerItem} className="relative overflow-hidden rounded-xl border border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imgs[1]} alt="" className="h-full min-h-[100px] w-full object-cover" loading="lazy" />
      </motion.div>
      <motion.div variants={staggerItem} className="relative overflow-hidden rounded-xl border border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imgs[2]} alt="" className="h-full min-h-[100px] w-full object-cover" loading="lazy" />
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const imgs = project.images
  const reverseLayout = project.variant === "b"
  const copyOnRight = project.layout === "bento" ? reverseLayout : index % 2 === 1

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={scrollViewport}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden rounded-3xl border p-6 shadow-2xl backdrop-blur-sm md:p-10 ${
        project.layout === "filmstrip"
          ? "border-blue-800/40 bg-[#0c0d2e]/80 shadow-fuchsia-950/25"
          : project.layout === "showcase"
            ? "border-indigo-500/30 bg-gradient-to-br from-[#14153f]/95 to-[#08091f]/95"
            : "border-fuchsia-500/25 bg-[#10112f]/90 shadow-fuchsia-900/15"
      }`}
    >
      {project.layout === "filmstrip" ? (
        <>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={scrollViewport}
            transition={{ duration: 0.45 }}
            className="mb-8 max-w-2xl"
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-300">{project.channelName}</p>
            <span className="mb-3 inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70">
              {project.category}
            </span>
            <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">{project.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-white/70">{project.description}</p>
          </motion.div>
          <ProjectVisuals layout="filmstrip" imgs={imgs} alt={project.title} reverse={false} />
        </>
      ) : (
        <div className={`flex flex-col gap-10 lg:gap-12 ${copyOnRight ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
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
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-300">{project.channelName}</p>
            <span className="mb-3 w-fit rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold text-white md:text-3xl">{project.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-white/70">{project.description}</p>
          </motion.div>
        </div>
      )}
    </motion.article>
  )
}

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen overflow-hidden text-white mt-20">
      <section className="relative flex min-h-[85vh] items-center px-4 py-8 md:px-8 md:py-12 lg:px-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <p className="mb-2 text-lg font-medium tracking-wide text-fuchsia-400">Hello! I&apos;m Kou,</p>
              <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                a <span className="text-fuchsia-500">Marketing Specialist</span>
              </h1>
              <p className="mb-4 text-lg font-semibold text-white/90 md:text-xl">Welcome to my portfolio!</p>
              <p className="mx-auto mb-4 max-w-xl text-base text-white/70 md:text-lg lg:mx-0">
                I work as a lead on campaigns and growth—paid and organic touchpoints, experiments, and messaging so
                each channel supports the next.
              </p>
              <p className="mx-auto mt-6 max-w-xl text-base text-white/70 md:text-lg lg:mx-0">
                Watch the intro video to see how I plan, execute, and report on digital marketing work.
              </p>
              <div className="mt-6 flex justify-center lg:justify-start">
                <a href="/cv/full stack.pdf" download>
                  <div className="w-[200px] rounded-[50px] bg-gradient-primary px-6 py-3 text-center text-white transition-all bg-gradient-primary-hover">
                    Download CV
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full"
            >
              <YouTubeVideo videoId={PORTFOLIO_VIDEOS.digitalMarketing} title="Digital Marketing Introduction" />
              <p className="mt-3 text-center text-sm text-white/50">Click play to watch</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Skills */}
      <section className="relative px-4 py-16 md:px-8 md:py-24 lg:px-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-fuchsia-600/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            className="mb-14 text-center"
          >
            <h2 className="mb-3 text-3xl font-bold text-white md:text-5xl">
              <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-white/60 md:text-lg">
              Core strengths for acquisition, retention, and growth—presented clearly, not as buzzwords.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
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
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 420, damping: 22 } }}
                  className={`group relative overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-[#15163d]/95 to-[#0b0c24]/95 p-6 shadow-xl transition ${accent}`}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl"
                  />
                  <div className="relative flex items-start gap-4">
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ring-2 ring-white/10 ${ring}`}
                    >
                      <Icon className="h-8 w-8" strokeWidth={1.65} />
                    </div>
                    <div className="min-w-0 text-left">
                      <h3 className="text-lg font-semibold tracking-tight text-white">{label}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="relative border-t border-white/5 px-4 py-16 md:px-8 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            className="mb-12 text-center md:text-left"
          >
            <h2 className="mb-3 text-3xl font-bold text-white md:text-5xl">
              <span className="text-fuchsia-500">Tools</span>{" "}
              <span className="text-2xl font-semibold text-white/90 md:text-3xl">I use</span>
            </h2>
            <p className="mx-auto max-w-2xl text-white/55 md:mx-0">
              Consistent brand-aligned tools used across all projects for design, development, marketing campaigns, and automation workflows.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={scrollViewport}
            variants={staggerParent}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4"
          >
            {tools.map((tool) => {
              const brandIcon = getSimpleIconBySlug(tool.slug)
              return (
              <motion.div
                key={tool.name}
                variants={staggerItem}
                whileHover={{ scale: 1.04, y: -6, transition: { type: "spring", stiffness: 400, damping: 18 } }}
                className="flex min-h-[128px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.02] px-3 py-5 text-center shadow-lg shadow-black/20 backdrop-blur-sm transition hover:border-fuchsia-400/35 hover:shadow-fuchsia-900/25"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-slate-900 shadow-md ring-1 ring-black/5">
                  {brandIcon ? (
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="h-8 w-8"
                      fill={`#${brandIcon.hex}`}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={brandIcon.path} />
                    </svg>
                  ) : (
                    <tool.fallbackIcon className="h-8 w-8" aria-hidden />
                  )}
                </div>
                <span className="text-sm font-bold leading-tight text-white/95">{tool.name}</span>
              </motion.div>
            )})}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="relative px-4 py-16 pb-28 md:px-8 md:py-28 md:pb-32 lg:px-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            className="mb-14 text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-400/90"></p>
         <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
  My{" "}
  <span className="text-fuchsia-500">Projects</span>
</h2>
            <p className="mx-auto max-w-2xl text-white/60">
             I Help Brands Grow with Powerful Social Media & Marketing Campaigns
              <span className="text-white/80"></span>
            </p>
          </motion.div>

          <div className="flex flex-col gap-16 md:gap-20">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
