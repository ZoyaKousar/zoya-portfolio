"use client"
import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import YouTubeVideo from "../components/youtubeVideo"

// Project Categories
const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "ghl", name: "Go High Level" },
  { id: "systemio", name: "System.io" },
  { id: "sanity", name: "Sanity.io" },
  { id: "wordpress", name: "WordPress" },
  { id: "shopify", name: "Shopify" },
  { id: "wix", name: "Wix" },
  { id: "crm", name: "CRM" },
]

// All Projects Data
const projects = [
  {
    id: "progreda-ghl",
    category: "ghl",
    title: "Progreda",
    subtitle: "Go High Level Website & CRM Development",
    image: "/images/progreda.jpg",
    objective:
      "Build an IT services website in Go High Level that actually gets people to pick up the phone or fill a form instead of bouncing.",
    challenges: [
      "Couldn't be another boring \"we do IT\" page - had to push for action",
      "Design needed to feel like a proper company, not a freelancer template",
      "Forms, click-to-call, maybe chat had to catch leads everywhere",
    ],
    solutions: [
      "Made a clean site inside Go High Level that doesn't confuse anyone",
      "Set up a basic funnel: see problem → see solution → book call",
      "Tested it a lot on phone because most people browse on mobile anyway",
    ],
    results: [
      "40% more leads converting in three months, that was satisfying",
      "People actually finished the journey instead of dropping off",
      "Looked expensive enough for IT clients to take them seriously",
    ],
    tech: ["Go High Level", "Funnels", "Website Builder", "Conversion Optimization"],
  },
  {
    id: "shorichek",
    category: "systemio",
    title: "ShoriChek.com",
    subtitle: "System.io Website Development",
    image: "/images/shorichek.jpg",
    website: "https://shorichek.com",
    objective: "Get a coaching site running on System.io, sell courses, protect content, make the checkout not scare people away.",
    challenges: [
      "Courses had to stay locked until payment",
      "Wanted upsells/downsells that didn't feel scammy",
      "Overall look couldn't scream \"cheap page builder\"",
    ],
    solutions: [
      "Built the whole thing in System.io, pages, membership, checkout",
      "Set membership levels so only paid people see the good stuff",
      "Added a couple natural upsell steps after purchase",
    ],
    results: [
      "Paid signups up 20% in about 60 days",
      "Fewer people quitting because the site didn't frustrate them",
      "Emails and payments just happen now, I barely touch it",
    ],
    tech: ["System.io", "Funnels", "Membership Sites", "Website Builder"],
  },
  {
    id: "justvanilla-systemio",
    category: "systemio",
    title: "JustVanilla.com",
    subtitle: "System.io Development",
    image: "/justvanilla.jpg",
    website: "https://justvanilla.com",
    objective: "Design a coaching website based on system.io and market autopilot course using decent funnels and emails.",
    challenges: [
      "Lock before payment of courses",
      "Checkout not breaking, Upsell bottom funnel",
      "Non irritating, yet reminiscent e-mails",
    ],
    solutions: [
      "System.io Developed basic clean site",
      "Set membership levels right",
      "Addressed simple email scripts in a human sounding manner",
      "Placed upsell/downsell: it was done where it was suitable",
    ],
    results: [
      "Paid members +20% in 60 days",
      "There was no confusion, people lingered",
      "The automatic follow up was boring",
    ],
    tech: ["System.io", "Funnels", "Membership Sites", "Email Automation"],
  },
  {
    id: "codeautomation",
    category: "sanity",
    title: "CodeAutomation.ai",
    subtitle: "Sanity.io Headless CMS Development",
    image: "/images/codeautomation.jpg",
    website: "https://codeautomation.ai",
    objective: "Make a fast website with Sanity.io so the team can change blog posts or docs without waiting for me.",
    challenges: [
      "Had to be really quick, like stupid fast",
      "Content comes from API, no old-school database lag",
      "Blog needed to rank, not just exist",
    ],
    solutions: [
      "Next.js frontend + Sanity backend, classic combo these days",
      "Made content types simple so anyone can add stuff",
      "Went obsessive on speed scores and SEO tags",
    ],
    results: [
      "Pages twice as fast as before (50% improvement)",
      "Google started sending more visitors",
      "They add articles now and I don't even hear about it",
    ],
    tech: ["Sanity.io", "Next.js", "Headless CMS", "SEO & Performance"],
  },
  {
    id: "wilkinguttenplan",
    category: "wordpress",
    title: "WilkinGuttenplan",
    subtitle: "WordPress Website Development",
    image: "/wilkinguttenplan.jpg",
    website: "https://wgcpas.com",
    objective: "Build an accounting firm site that doesn't scare clients away and maybe ranks when someone searches \"accountant near me\".",
    challenges: [
      "Had to look trustworthy from the first glance",
      "Security matters a lot in accounting",
      "Local search was important",
    ],
    solutions: [
      "Clean WordPress site, bit of custom code here and there",
      "Did all the security basics right (updates, SSL, forms)",
      "Local SEO stuff: fast loading, schema, linked Google Business",
    ],
    results: [
      "People felt safe right away, important for numbers people",
      "Site looks as professional as the firm actually is",
      "Better local rankings, more calls from the area",
    ],
    tech: ["WordPress", "Security", "Local SEO", "Custom Development"],
  },
  {
    id: "victorywoodworks",
    category: "wordpress",
    title: "Victory Woodworks",
    subtitle: "WordPress Website Development",
    image: "/victorywoodworks.jpg",
    website: "https://victorywoodworks.com",
    objective: "Showcase this woodworker's furniture so beautifully that people message them saying \"make me one\".",
    challenges: [
      "Big photos but site still had to load fast",
      "Didn't want it looking like every other carpenter's site",
      "Phone view had to be just as nice as desktop",
    ],
    solutions: [
      "Used WPBakery and built custom portfolio sections",
      "Added galleries that pop open nicely, some hover effects",
      "Compressed images like crazy + caching + lazy load",
    ],
    results: [
      "Their pieces finally look as good online as in person",
      "Brand feels handmade and expensive (which it is)",
      "More \"how much for a table like that?\" messages",
    ],
    tech: ["WordPress", "WPBakery", "Custom Design", "Speed & SEO Optimization"],
  },
  {
    id: "trellahealth",
    category: "wordpress",
    title: "Trella Health",
    subtitle: "WordPress Website Development",
    image: "/trellahealth.jpg",
    website: "https://trellahealth.com",
    objective: "Get a healthcare analytics site up that's secure and explains complicated stuff without making eyes glaze over.",
    challenges: [
      "Healthcare = security can't be average",
      "Data and charts had to be readable",
      "Not overwhelm visitors with jargon walls",
    ],
    solutions: [
      "Solid WordPress base with extra protection layers",
      "Cleaned up navigation and page layouts",
      "Made sure forms and logins are locked down properly",
    ],
    results: [
      "Site feels safe (which matters in healthcare)",
      "People actually read the pages now",
      "Went from messy to professional pretty quick",
    ],
    tech: ["WordPress", "Security", "Healthcare", "UX Design"],
  },
  {
    id: "shopify-ecommerce",
    category: "shopify",
    title: "E-Commerce Portfolio",
    subtitle: "USAToys, Force1RC, PowerYourFun",
    image: "/colorful-ecommerce-store-kids-toys.jpg",
    websites: ["usatoyz.com", "force1rc.com", "poweryourfun.com"],
    objective: "Make Shopify stores for these toy/RC brands that look custom and sell on Shopify + Amazon + eBay without chaos.",
    challenges: [
      "Each store needed its own personality",
      "Inventory syncing across platforms",
      "Checkout couldn't lose sales",
    ],
    solutions: [
      "Custom-coded themes for each one",
      "Got the multi-channel sync working properly",
      "Fixed product pages, trust stuff, speed, checkout steps",
    ],
    results: [
      "25% more sales first quarter after launch",
      "Less people abandoning carts",
      "Selling everywhere stopped being a nightmare",
    ],
    tech: ["Shopify", "E-commerce", "Multi-channel", "Custom Themes"],
  },
  {
    id: "h3-technologies",
    category: "wix",
    title: "H3-Technologies",
    subtitle: "Wix Website Development",
    image: "/images/h3technologies.jpg",
    objective: "Quick, nice-looking IT services site on Wix that brings in more messages.",
    challenges: [
      "Had to look like real tech company",
      "Client wanted to change text themselves later",
      "Lead forms actually needed to catch people",
    ],
    solutions: [
      "Put together a modern Wix site focused on getting contact",
      "Made editing easy for them",
      "Placed forms and buttons where normal people click",
    ],
    results: [
      "About 30% more inquiries soon after going live",
      "Finally looked like a serious IT business",
      "Leads started coming instead of crickets",
    ],
    tech: ["Wix", "Lead Generation", "Modern Design", "Easy CMS"],
  },
  {
    id: "hubspot-crm",
    category: "crm",
    title: "HubSpot CRM Expertise",
    subtitle: "CRM Lead Management and Automation",
    image: "/images/hubspot.jpg",
    objective: "Fix Get HubSpot to ensure the leads do not die and the sales team knows what to go after.",
    challenges: [
      "Leads forgotten fast",
      "Pipeline mess",
      "Reports nobody understood",
    ],
    solutions: [
      "Ready auto mails to new prospective leads",
      "Separated pipeline into different stages",
      "Chatbot integrated and rapid dashboard",
    ],
    results: [
      "More leads became customers",
      "Sales saved hours",
      "Data actually used now",
    ],
    tech: ["HubSpot CRM", "Workflow automation", "Sales pipelines", "Analytics"],
  },
  {
    id: "ghl-crm",
    category: "crm",
    title: "Go High Level CRM",
    subtitle: "CRM Lead Management and Automation",
    image: "/images/ghl-crm.jpg",
    objective: "Getting GHL leads to processing in a short amount of time and nothing wasted.",
    challenges: [
      "Leads everywhere, no order",
      "Follow-up can only be followed up when one remembers",
      "No easy way to see progress",
    ],
    solutions: [
      "Built simple pipeline",
      "Auto email + SMS at right times",
      "Made one-page dashboard",
    ],
    results: [
      "Follow-ups quick now",
      "Better replies",
      "Sales see what's working",
    ],
    tech: ["Go High Level", "CRM", "SMS Automation", "Dashboards"],
  },
]

// Expertise Areas
const expertise = [
  { name: "WordPress Theme & Plugin", icon: "🎨", description: "Custom development & customization" },
  { name: "E-commerce Solutions", icon: "🛒", description: "WooCommerce, Shopify, BigCommerce" },
  { name: "Headless Development", icon: "⚡", description: "Sanity.io, Next.js" },
  { name: "Website Integrations", icon: "🔗", description: "APIs & Automation" },
  { name: "CRM Strategy", icon: "📊", description: "HubSpot & Go High Level" },
  { name: "Sales Funnels", icon: "🎯", description: "High-converting designs" },
]

const ProjectModal = ({
  project,
  isOpen,
  onClose,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  project: any
  isOpen: boolean
  onClose: () => void
}) => {
  if (!isOpen || !project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-[#0F103F] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative border border-fuchsia-500/20"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-indigo-900 hover:bg-indigo-800 flex items-center justify-center transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {project.image && (
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}

          <div className="flex items-center gap-3 mb-2">
            <span className="bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
              {projectCategories.find((c) => c.id === project.category)?.name}
            </span>
          </div>

          <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-fuchsia-400 mb-6">{project.subtitle}</p>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-fuchsia-500/20 rounded-lg flex items-center justify-center">🎯</span>
              Objective
            </h4>
            <p className="text-white/80 leading-relaxed pl-10">{project.objective}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">⚠️</span>
              Challenges
            </h4>
            <ul className="space-y-2 pl-10">
              {project.challenges.map((challenge: string, i: number) => (
                <li key={i} className="text-white/70 flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">✅</span>
              Solutions
            </h4>
            <ul className="space-y-2 pl-10">
              {project.solutions.map((solution: string, i: number) => (
                <li key={i} className="text-white/70 flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  {solution}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">📈</span>
              Results
            </h4>
            <ul className="space-y-2 pl-10">
              {project.results.map((result: string, i: number) => (
                <li key={i} className="text-white/70 flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  {result}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string, i: number) => (
                <span
                  key={i}
                  className="bg-indigo-900/50 border border-blue-800 px-4 py-2 rounded-full text-sm text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.website && (
            <Link
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-fuchsia-500/50 transition-all"
            >
              Visit Website
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
          )}

          {project.websites && (
            <div className="flex flex-wrap gap-3">
              {project.websites.map((site: string, i: number) => (
                <Link
                  key={i}
                  href={`https://${site}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-fuchsia-500/50 transition-all text-sm"
                >
                  {site}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function WebDevPortfolioPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Hero Section with Video */}
      <section className="relative py-8 md:py-12 px-4 md:px-8 lg:px-16 mt-20 min-h-[85vh] flex items-center">
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
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Web Development <span className="text-fuchsia-500">Expertise</span>
              </h1>
              <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto lg:mx-0 mb-3">
                Go High Level, System.io, Sanity.io, WordPress, Shopify & Wix
              </p>
              <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto lg:mx-0 mb-2">
                Hi, I&apos;m <span className="text-fuchsia-400 font-semibold">Zoya Kousar</span>.
              </p>
              <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto lg:mx-0">
                I make websites that help businesses make money or get clients plain and simple. Some need to look expensive, some need to load in 1 second, some need to sell courses while people are half-asleep scrolling at night. I use whatever tool gets the job done fastest and looks best for that client. Been doing this long enough that I can usually tell in the first call which platform will save everyone headaches later.
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
                title="Web Development Portfolio"
              />
              <p className="text-center text-white/50 text-sm mt-3">
                Watch my web development & CRM showcase
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section with Icons */}
      <section className="relative py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          >
            Areas of <span className="text-fuchsia-500">Expertise</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-fuchsia-500/20 rounded-xl p-6 hover:border-fuchsia-500/50 transition-all hover:bg-white/10 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                <p className="text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="relative py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          >
            Featured <span className="text-fuchsia-500">Projects</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white shadow-lg shadow-fuchsia-500/50"
                    : "bg-white/10 text-white/70 hover:text-white hover:bg-white/20"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-xl overflow-hidden border border-fuchsia-500/20 hover:border-fuchsia-500/50 transition-all h-96 flex flex-col hover:shadow-2xl hover:shadow-fuchsia-500/20">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="flex-1 p-6 bg-gradient-to-t from-[#0F103F] to-transparent flex flex-col justify-end">
                      <span className="bg-gradient-to-r from-fuchsia-500/20 to-indigo-600/20 text-fuchsia-400 text-xs font-bold px-3 py-1 rounded-full w-fit mb-3">
                        {projectCategories.find((c) => c.id === project.category)?.name}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-white/60 text-sm">{project.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section - Coffee Style */}
      <section className="relative py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center w-full lg:w-1/2 mx-auto bg-cover bg-center p-3 lg:p-12"
          >
            <img 
              src="/zoya-contact.png" 
              alt="Contact" 
              className="h-[350px] rounded-full object-cover mb-6 border-4 border-fuchsia-500/30 shadow-2xl shadow-fuchsia-500/20"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Let&apos;s chat over the coffee
            </h2>
            <p className="text-sm text-gray-300 text-center mb-6 md:px-4 max-w-md">
              Let&apos;s automate your growth. Book a strategy call now and let&apos;s build something bold.
            </p>
            <div className="flex items-center space-x-2 bg-[#2F2F8A]/30 px-6 py-3 rounded-full border border-blue-800/50">
              <img src="/zoya-email.png" alt="Email Icon" className="h-7" />
              <span className="text-sm text-white">zoyakou2@gmail.com</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}
