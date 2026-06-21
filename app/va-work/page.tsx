"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  Bug,
  Code2,
  FileText,
  ShoppingBag,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react"
import YouTubeVideo from "../components/youtubeVideo"
import { PORTFOLIO_VIDEOS } from "../config/portfolioVideos"

// ─── animation presets ───────────────────────────────────────────────────────
const vp = { once: true, amount: 0.15, margin: "0px 0px -60px 0px" } as const

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
}
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
}
const item = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 340, damping: 26 } },
}

// ─── data ─────────────────────────────────────────────────────────────────────
const stats = [
  { number: "5+",   label: "Years Experience" },
  { number: "50+",  label: "Projects Delivered" },
  { number: "100%", label: "Client Satisfaction" },
]

const highlights = [
  "Manual & Automation QA Testing",
  "Shopify Builds & Customisation",
  "Web Development & CMS Updates",
  "Technical Writing & SEO Content",
  "CRM & Workflow Automation",
]

const experience = [
  { company: "SpeechLab.ai",          url: "https://www.speechlab.ai/",        role: "Virtual Assistant & QA Engineer",          period: "2023 – Present", icon: "🎤", accent: "border-fuchsia-500/30 hover:border-fuchsia-400/60 hover:shadow-fuchsia-500/10" },
  { company: "Tax & Accounting Hub",   url: "https://taxaccountinghub.com/",    role: "Technical Support & Web Development",      period: "2022 – 2023",    icon: "📊", accent: "border-sky-500/30     hover:border-sky-400/60     hover:shadow-sky-500/10" },
  { company: "USA Toyz",               url: "https://usatoyz.com/",             role: "Shopify Developer & E-commerce Manager",   period: "2022 – 2023",    icon: "🛍️", accent: "border-amber-400/30   hover:border-amber-300/60   hover:shadow-amber-500/10" },
  { company: "GetDandy",               url: "https://getdandy.com/",            role: "QA Engineer & Technical Writer",           period: "2021 – 2022",    icon: "⭐", accent: "border-emerald-400/30 hover:border-emerald-300/60 hover:shadow-emerald-500/10" },
  { company: "CodeAutomation.ai",      url: "https://codeautomation.ai",        role: "QA Automation Engineer",                   period: "2021 – 2022",    icon: "⚙️", accent: "border-rose-500/30    hover:border-rose-400/60    hover:shadow-rose-500/10" },
]

type Project = {
  title: string; description: string; image: string; url?: string; tag: string
}
const projects: Project[] = [
  { title: "USA Toyz",        tag: "Shopify",      image: "/colorful-ecommerce-store-kids-toys.jpg",              url: "https://usatoyz.com/",            description: "Revamped layout, improved mobile UX, and integrated apps to boost conversions." },
  { title: "Power Your Fun",  tag: "Shopify",      image: "/modern-ecommerce-platform-toys-gaming.jpg",           url: "https://poweryourfun.com/",       description: "Optimised mobile performance, connected third-party apps, streamlined daily ops." },
  { title: "Genius Scribe",   tag: "Web Dev",      image: "/professional-writing-services-website-blog.jpg",      url: "https://geniusscribe.com/",       description: "Structured content and redesigned service pages for clarity and conversions." },
  { title: "Mr. Locks",       tag: "Web Dev",      image: "/locksmith-security-services-professional-website.jpg",url: "https://mrlocks.com/",            description: "Rebuilt layout and copy for a professional locksmith brand — clean and trustworthy." },
  { title: "Web App QA",      tag: "QA Testing",   image: "/web-application-testing-quality-assurance-dashboar.jpg",                                      description: "End-to-end manual testing covering usability, integrations, and cross-browser flows." },
  { title: "Mobile App QA",   tag: "QA Testing",   image: "/mobile-app-testing-quality-assurance-ux.jpg",                                                  description: "Device & OS testing, UX flows, and third-party checks for a polished mobile release." },
  { title: "Qalified Blog",   tag: "Tech Writing", image: "/software-testing-qa-blog-technical-writing.jpg",      url: "https://qalified.com/blog/",      description: "Translated complex QA topics into clear, actionable content for dev audiences." },
  { title: "Force1 RC",       tag: "Tech Writing", image: "/drone-technology-rc-news-blog-website.jpg",           url: "https://force1rc.com/blogs/news", description: "Drone guides, product breakdowns, and how-tos that drive engagement and sales." },
]

const tagStyle: Record<string, string> = {
  "Shopify":      "text-amber-400   bg-amber-400/10   border-amber-400/30",
  "Web Dev":      "text-sky-400     bg-sky-400/10     border-sky-400/30",
  "QA Testing":   "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  "Tech Writing": "text-violet-400  bg-violet-400/10  border-violet-400/30",
}
const tagIcon: Record<string, React.ElementType> = {
  "Shopify": ShoppingBag, "Web Dev": Code2, "QA Testing": Bug, "Tech Writing": FileText,
}

const skills = [
  { label: "QA Engineering",      Icon: Bug,         desc: "Manual & automation testing — web, mobile, APIs.", ring: "from-emerald-500 to-teal-600", card: "border-emerald-400/30 shadow-emerald-500/10" },
  { label: "Shopify Development", Icon: ShoppingBag, desc: "Theme builds, custom sections, app integrations.",  ring: "from-amber-400 to-orange-600", card: "border-amber-400/30   shadow-amber-400/10" },
  { label: "Web Development",     Icon: Code2,       desc: "Front-end fixes, CMS updates, landing pages.",      ring: "from-sky-400 to-blue-600",     card: "border-sky-400/30     shadow-sky-400/10" },
  { label: "Technical Writing",   Icon: FileText,    desc: "SEO blogs, documentation, product copy.",           ring: "from-violet-500 to-fuchsia-600",card: "border-violet-400/30  shadow-violet-500/10" },
  { label: "CRM & Automation",    Icon: Zap,         desc: "GHL, Zapier, and workflow automation setup.",       ring: "from-fuchsia-500 to-indigo-600",card: "border-fuchsia-400/30 shadow-fuchsia-500/10" },
  { label: "Admin Support",       Icon: Wrench,      desc: "Research, coordination, project management.",       ring: "from-rose-500 to-pink-600",    card: "border-rose-400/30    shadow-rose-500/10" },
]

// ─── reusable components ──────────────────────────────────────────────────────
function SectionHeader({ eyebrow, title, highlight, description }: {
  eyebrow?: string; title: string; highlight?: string; description: string
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} className="mb-12 text-center md:mb-16">
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-300">
          <Sparkles className="h-3.5 w-3.5" aria-hidden />{eyebrow}
        </span>
      )}
      <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        {title}{" "}
        {highlight && <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">{highlight}</span>}
      </h2>
      <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base md:text-lg">{description}</p>
    </motion.div>
  )
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const TagIcon = tagIcon[p.tag]
  return (
    <motion.div custom={i} variants={item}
      whileHover={{ y: -7, transition: { type: "spring", stiffness: 380, damping: 22 } }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] shadow-xl shadow-black/25 transition hover:border-fuchsia-400/35 hover:shadow-fuchsia-900/20"
    >
      <div className="relative h-48 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07081e]/85 via-[#07081e]/10 to-transparent" />
        <span className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm ${tagStyle[p.tag]}`}>
          <TagIcon className="h-3 w-3" aria-hidden />{p.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-base font-bold text-white group-hover:text-fuchsia-300 transition-colors sm:text-lg">{p.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-white/55">{p.description}</p>
        {p.url && (
          <Link href={p.url} target="_blank" rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-fuchsia-400 transition hover:text-fuchsia-300">
            Visit site <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        )}
      </div>
      <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-fuchsia-500/8 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  )
}

// ─── page ─────────────────────────────────────────────────────────────────────
export default function VAWorkPage() {
  return (
    <div className="mt-20 min-h-screen overflow-x-hidden text-white">

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-28 md:px-8 lg:px-16">

        {/* deep background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-fuchsia-600/15 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-indigo-600/15 blur-[100px]" />
          {/* horizontal shimmer line */}
          <div className="absolute left-1/2 top-1/2 h-px w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">

          {/* eyebrow chip */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/35 bg-fuchsia-500/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-fuchsia-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400" />
              Available for Hire
            </span>
          </motion.div>

          {/* main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-[3.2rem] font-black leading-[1.03] tracking-tight sm:text-7xl md:text-8xl lg:text-[6rem]"
          >
            <span className="text-white">Tech-Savvy</span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Virtual Assistant
            </span>
          </motion.h1>

          {/* sub-line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg md:text-xl"
          >
            QA testing, Shopify builds, web updates, automation &amp; content —
            <br className="hidden sm:block" />
            one person, every technical gap covered.
          </motion.p>

          {/* skill pills */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {highlights.map((h) => (
              <span key={h} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/60 backdrop-blur-sm">
                {h}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.44 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a href="/cv/va.pdf" download
              className="rounded-[50px] bg-gradient-primary px-8 py-3.5 text-sm font-semibold text-white transition-all bg-gradient-primary-hover sm:text-base">
              Download CV
            </a>
            <Link href="/#contact"
              className="flex items-center gap-2 rounded-[50px] border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-sm transition hover:border-fuchsia-400/40 hover:bg-white/10 sm:text-base">
              Hire Me <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>

          {/* stats row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.54 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-8 border-t border-white/8 pt-10"
          >
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-black text-white sm:text-4xl">{s.number}</p>
                  <p className="mt-1 text-xs text-white/40">{s.label}</p>
                </div>
                {i < stats.length - 1 && <div className="hidden h-10 w-px bg-white/10 sm:block" />}
              </div>
            ))}
          </motion.div>

          {/* intro video */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="mx-auto mt-14 max-w-2xl overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_60px_-12px_rgba(201,97,222,0.35)]"
          >
            <YouTubeVideo videoId={PORTFOLIO_VIDEOS.vaWork} title="Virtual Assistant Introduction" />
          </motion.div>
          <p className="mt-3 text-center text-xs text-white/30">▶ Watch the intro</p>

        </div>
      </section>

      {/* ═══════════════════════════════ SKILLS ══════════════════════════════ */}
      <section className="relative border-t border-white/5 px-4 py-16 md:px-8 md:py-24 lg:px-16">
        <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-fuchsia-600/5 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeader eyebrow="What I Do" title="Core" highlight="Skills"
            description="One point of contact for QA, development, content, and automation — so nothing falls through the cracks." />
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {skills.map(({ label, Icon, desc, ring, card }, i) => (
              <motion.div key={label} custom={i} initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 22 } }}
                className={`group relative overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-[#13143a]/95 to-[#09091f]/95 p-5 shadow-xl sm:p-6 ${card}`}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-white/8 to-transparent blur-2xl" />
                <div className="relative flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg ring-2 ring-white/10 sm:h-14 sm:w-14 sm:rounded-2xl ${ring}`}>
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.65} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white sm:text-lg">{label}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/60 sm:text-sm">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════ EXPERIENCE ═════════════════════════════ */}
      <section className="relative border-t border-white/5 px-4 py-16 md:px-8 md:py-24 lg:px-16">
        <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-indigo-600/5 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeader eyebrow="Career" title="Work" highlight="Experience"
            description="Companies I've supported across QA, development, and digital operations." />
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger} className="mx-auto max-w-3xl space-y-3">
            {experience.map((job) => (
              <motion.div key={job.company} variants={item}>
                <Link href={job.url} target="_blank" rel="noopener noreferrer"
                  className={`group flex items-center gap-4 rounded-xl border bg-white/[0.03] p-5 backdrop-blur-sm transition hover:bg-white/[0.06] hover:shadow-lg ${job.accent}`}
                >
                  <span className="text-2xl">{job.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-white group-hover:text-fuchsia-300 transition-colors truncate">{job.company}</p>
                    <p className="text-sm text-white/55">{job.role}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className="text-xs font-mono text-white/35">{job.period}</span>
                    <ArrowUpRight className="h-4 w-4 text-white/25 group-hover:text-fuchsia-400 transition-colors" aria-hidden />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════ PROJECTS ═══════════════════════════════ */}
      <section className="relative border-t border-white/5 px-4 py-16 md:px-8 md:py-24 lg:px-16">
        <div className="pointer-events-none absolute left-0 bottom-1/4 h-72 w-72 rounded-full bg-fuchsia-600/5 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionHeader eyebrow="Portfolio" title="Selected" highlight="Projects"
            description="Shopify stores, web builds, QA testing, and content — real work, real results." />
          <motion.div initial="hidden" whileInView="show" viewport={vp} variants={stagger}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════ CTA ════════════════════════════════ */}
      <section className="relative border-t border-white/5 px-4 py-16 md:px-8 md:py-24 lg:px-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[80px]" />
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto max-w-3xl overflow-hidden rounded-3xl border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-950/60 via-[#0d0e30]/80 to-indigo-950/60 p-8 text-center shadow-[0_0_80px_-20px_rgba(201,97,222,0.4)] backdrop-blur-sm sm:p-12"
        >
          {/* top shimmer line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent" />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/zoya-contact.png" alt="Zoya Kousar"
            className="mx-auto mb-6 h-24 w-24 rounded-full border-2 border-fuchsia-500/40 object-cover shadow-2xl shadow-fuchsia-500/20 ring-4 ring-fuchsia-500/10 sm:h-28 sm:w-28" />

          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-fuchsia-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />Let&apos;s Work Together
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Ready to{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              streamline your ops?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
            Book a strategy call and let&apos;s figure out exactly how I can save your team time, catch problems early, and keep everything running.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/#contact"
              className="rounded-[50px] bg-gradient-primary px-8 py-3.5 text-sm font-semibold text-white transition-all bg-gradient-primary-hover sm:text-base">
              Book a Strategy Call
            </Link>
            <a href="mailto:zoyakou2@gmail.com"
              className="flex items-center gap-2 rounded-[50px] border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white/80 transition hover:border-fuchsia-400/40 hover:bg-white/10 sm:text-base">
              zoyakou2@gmail.com
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
