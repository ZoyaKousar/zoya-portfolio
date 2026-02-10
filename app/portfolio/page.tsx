"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import YouTubeVideo from "../components/youtubeVideo"

// Core Skills
const coreSkills = [
  "Turning messy business ideas into clear product shapes + solid system designs",
  "Frontend: React, Next.js (App Router + Server Components), TypeScript, good UX that doesn't feel like an afterthought",
  "Backend: Node.js APIs with NestJS / Fastify / Express",
  "Databases: PostgreSQL + Prisma usually, sometimes Redis, Timescale when time-series data gets serious",
  "Queues, background jobs, workers — I've run a lot of them without losing sleep",
  "Stripe (Billing + Connect) — subscriptions, marketplaces, payouts, the whole mess",
  "AWS + Docker + sensible CI/CD",
  "Writing tests that actually catch stuff, setting up monitoring so I'm not surprised by problems",
  "Real-time bits: WebSockets, event-driven flows, live updates that feel smooth",
]

// Tech Stack Categories
const techStack = [
  {
    category: "Frontend",
    items: ["React + Next.js", "TypeScript", "Zustand", "TanStack Query", "Tailwind CSS", "TipTap / MDX for editors & content"],
  },
  {
    category: "Backend",
    items: ["Node.js + NestJS", "Django REST Framework", "REST & GraphQL APIs", "Auth & permission flows"],
  },
  {
    category: "Data & DB",
    items: ["PostgreSQL + Prisma", "Redis", "TimescaleDB"],
  },
  {
    category: "Infra & Deploy",
    items: ["Docker", "AWS ECS", "Kubernetes", "NGINX", "Terraform"],
  },
  {
    category: "Observability",
    items: ["OpenTelemetry", "Prometheus + Grafana", "Loki (logs)"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Firebase", "GraphQL for clean data"],
  },
  {
    category: "Auth & Security",
    items: ["JWT", "OAuth2 + PKCE", "MFA", "NextAuth / Auth.js"],
  },
]

// WordPress Projects
const wordpressProjects = [
  {
    id: "peachtree-yoga",
    title: "Peachtree Yoga Center - WordPress Platform Upgrade",
    subtitle: "Peachtree Yoga Center - Yoga Cl...",
    image: "/professional-writing-services-website-blog.jpg",
    description: "Improved performance, reorganized navigation, removed plugin bloat, and refreshed their teacher-training pages. Editing is now stable and safe for the team.",
  },
  {
    id: "steelfish-london",
    title: "Steelfish London - Sunglasses Ecommerce Website",
    subtitle: "Steelfish London",
    image: "/locksmith-security-services-professional-website.jpg",
    description: "Cleaned up catalog layouts, improved imagery, optimized mobile browsing, and refined newsletter and footer sections for a premium shopping feel.",
  },
]

// Shopify Projects
const shopifyProjects = [
  {
    id: "energetic-nutrition",
    title: "Energetic Nutrition Shopify Performance Boost",
    subtitle: "Energetic Nutrition",
    image: "/modern-ecommerce-platform-toys-gaming.jpg",
    description: "Fixed heavy product images, layout shifts, and homepage overload. Navigation and cart flow now feel smooth and structured.",
  },
  {
    id: "feltloom-industrial",
    title: "FeltLOOM Industrial Shopify Store",
    subtitle: "FeltLOOM™ Needle Felting Machin...",
    image: "/professional-b2b-shopify-dashboard-with-hubspot-cr.jpg",
    description: "Organized machine models, created strong inquiry flows, and highlighted real industry use cases. Lead quality improved significantly.",
  },
  {
    id: "ccq-skincare",
    title: "CCQ Skincare Beauty & Wellness Shopify Build",
    subtitle: "CCQ SKINC...",
    website: "www.ccqskincare.com",
    image: "/beautiful-cosmetics-beauty-shopify-store-with-prod.jpg",
    description: "Designed clean layouts for skincare routines and bundles, improved ingredient storytelling, and optimized the mobile experience.",
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen text-white overflow-hidden mt-20">
      {/* Hero Section with Video */}
      <section className="relative py-8 md:py-12 px-4 md:px-8 lg:px-16 min-h-[85vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Full Stack <span className="text-fuchsia-500">Portfolio</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0">
                I&apos;m a Full Stack Developer who loves building digital products that just work fast, solid, and easy for the next person to take care of.
              </p>
            </motion.div>

            {/* YouTube Video Embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full"
            >
              <YouTubeVideo 
                videoId="YOUR_VIDEO_ID"
                title="Portfolio Showcase"
              />
              <p className="text-center text-white/50 text-sm mt-3">
                Click play to watch my portfolio showcase
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About me</h2>
            <div className="space-y-4 text-white/80 text-lg leading-relaxed">
              <p>
                I&apos;m a Full Stack Developer who loves building digital products that just work fast, solid, and easy for the next person to take care of.
              </p>
              <p>
                I usually go end-to-end: from figuring out what the product should actually do, to sketching the architecture, writing + testing the code, getting it live, and then sticking around to make sure it doesn&apos;t fall apart when real users and real growth hit.
              </p>
              <p>
                Most of the stuff I&apos;ve built falls into the &quot;serious business&quot; category: SaaS tools people actually pay for monthly, ecommerce shops that can&apos;t afford to go down, internal dashboards that teams live in every day, content platforms that need to stay snappy even with lots of traffic. In those kinds of projects performance, clean data, and not-painful-to-maintain code are non-negotiable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Skills Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Skills List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Core skills</h2>
              <ul className="space-y-3">
                {coreSkills.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-white/80 text-lg flex items-start gap-3"
                  >
                    <span className="text-fuchsia-400 mt-2">•</span>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Skills Graphic Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 flex items-center justify-center min-h-[400px]"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-white/50 text-sm">Skills Visualization</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-12"
          >
            Tech Stack
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                      <span className="text-fuchsia-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WordPress Projects Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-12"
          >
            WordPress Projects
          </motion.h2>

          <div className="space-y-12">
            {wordpressProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Laptop Mockup */}
                <div className="w-full lg:w-1/2">
                  <div className="relative bg-gray-800 rounded-t-2xl p-2 shadow-2xl">
                    <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video relative">
                      <Image
                        src={project.image || "/zoya-hero.png"}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-fuchsia-400 text-sm mb-4">{project.subtitle}</p>
                  <p className="text-white/70 text-lg leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shopify Projects Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-12"
          >
            Shopify Projects
          </motion.h2>

          <div className="space-y-12">
            {shopifyProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Laptop Mockup */}
                <div className="w-full lg:w-1/2">
                  <div className="relative bg-gray-800 rounded-t-2xl p-2 shadow-2xl">
                    <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video relative">
                      <Image
                        src={project.image || "/zoya-hero.png"}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-fuchsia-400 text-sm mb-4">{project.subtitle}</p>
                  {project.website && (
                    <p className="text-white/50 text-sm mb-4">{project.website}</p>
                  )}
                  <p className="text-white/70 text-lg leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

