"use client"
import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import YouTubeVideo from "../components/youtubeVideo"

// Work Experience Data
const workExperience = [
  {
    company: "SpeechLab.ai",
    website: "https://www.speechlab.ai/",
    description:
      "AI-powered speech technology platform providing advanced voice synthesis and speech recognition solutions.",
    role: "Virtual Assistant & QA Engineer",
    period: "2023 - Present",
    icon: "🎤",
  },
  {
    company: "Tax & Accounting Hub LLC",
    website: "https://taxaccountinghub.com/",
    description: "Professional tax and accounting services firm offering comprehensive financial solutions.",
    role: "Technical Support & Web Development",
    period: "2022 - 2023",
    icon: "📊",
  },
  {
    company: "USA Toyz",
    website: "https://usatoyz.com/",
    description: "E-commerce store specializing in innovative toys and educational products for kids.",
    role: "Shopify Developer & E-commerce Manager",
    period: "2022 - 2023",
    icon: "🛍️",
  },
  {
    company: "GetDandy",
    website: "https://getdandy.com/",
    description: "AI-powered reputation management platform helping businesses manage online reviews.",
    role: "QA Engineer & Technical Writer",
    period: "2021 - 2022",
    icon: "⭐",
  },
  {
    company: "CodeAutomation.ai",
    website: "https://codeautomation.ai",
    description: "Automation solutions platform helping businesses streamline their development workflows.",
    role: "QA Automation Engineer",
    period: "2021 - 2022",
    icon: "⚙️",
  },
]

// Shopify Projects
const shopifyProjects = [
  {
    id: "usatoyz",
    title: "USA TOYZ",
    image: "/colorful-ecommerce-store-kids-toys.jpg",
    website: "https://usatoyz.com/",
    description:
      "Did work on USAToyz Shopify store, changed some layouts, made it actually good on phones, connected a few apps so the store doesn't feel clunky and customers like using it more.",
  },
  {
    id: "poweryourfun",
    title: "POWER YOUR FUN",
    image: "/modern-ecommerce-platform-toys-gaming.jpg",
    website: "https://poweryourfun.com/",
    description:
      "Fixed up PowerYourFun Shopify store, made mobile faster and easier, hooked up apps, helped make daily management and growing it less painful.",
  },
]

// Skills Data
const skills = [
  { name: "QA ENGINEER", percentage: 95 },
  { name: "SHOPIFY DEVELOPER", percentage: 95 },
  { name: "TECHNICAL WRITING", percentage: 90 },
  { name: "WEB DEVELOPMENT", percentage: 95 },
]

// Development Projects
const developmentProjects = [
  {
    id: "geniusscribe",
    title: "GENIUS SCRIBE LTD",
    image: "/professional-writing-services-website-blog.jpg",
    website: "https://geniusscribe.com/",
    description:
      "Helped with the Genius Scribe website, got the content organized, made their writing and editing services look proper and easy to read.",
  },
  {
    id: "mrlocks",
    title: "MR. LOCKS",
    image: "/locksmith-security-services-professional-website.jpg",
    website: "https://mrlocks.com/",
    description:
      "Worked on Mr. Locks site, sorted layout and content so it looks like a real professional locksmith/security business.",
  },
]

// QA Projects
const qaProjects = [
  {
    id: "webapptesting",
    title: "WEB APP TESTING",
    image: "/web-application-testing-quality-assurance-dashboar.jpg",
    description:
      "Tested a web app manually, found annoying usability things, checked mobile, tested outside integrations so it doesn't suck for users.",
  },
  {
    id: "mobileapptesting",
    title: "MOBILE APP TESTING",
    image: "/mobile-app-testing-quality-assurance-ux.jpg",
    description:
      "Did manual testing on a mobile app, looked at how it feels, different phones, integrations, made sure people won't hate it.",
  },
]

// Tech-Writer Projects
const techWriterProjects = [
  {
    id: "qalified",
    title: "QALIFIED BUILDING QUALITY",
    image: "/software-testing-qa-blog-technical-writing.jpg",
    website: "https://qalified.com/blog/",
    description:
      "Wrote some QA and testing content, took complicated testing stuff and made it simple and actually useful.",
  },
  {
    id: "force1rc",
    title: "FORCE1 RC",
    image: "/drone-technology-rc-news-blog-website.jpg",
    website: "https://force1rc.com/blogs/news",
    description:
      "Wrote drone articles, tips, what's new, product breakdowns so people get their drones and actually enjoy them.",
  },
]

// Project type definition
type Project = {
  id: string
  title: string
  image?: string
  website?: string
  description: string
}

const ProjectModal = ({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null
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
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-[#0F103F] rounded-2xl max-w-2xl w-full p-8 relative border border-fuchsia-500/20"
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

          <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
          <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>

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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const SkillBar = ({ skill, index }: { skill: (typeof skills)[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    className="flex items-center gap-4 mb-6"
  >
    <div className="relative flex-shrink-0">
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="35" fill="none" stroke="rgba(192, 38, 211, 0.2)" strokeWidth="6" />
        <motion.circle
          cx="40"
          cy="40"
          r="35"
          fill="none"
          stroke="url(#skillGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${skill.percentage * 2.2} 220`}
          transform="rotate(-90 40 40)"
          initial={{ strokeDasharray: "0 220" }}
          whileInView={{ strokeDasharray: `${skill.percentage * 2.2} 220` }}
          transition={{ duration: 1, delay: index * 0.2 }}
        />
        <defs>
          <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C961DE" />
            <stop offset="100%" stopColor="#2954A3" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-fuchsia-400">
        {skill.percentage}%
      </span>
    </div>
    <div className="flex-1 bg-indigo-900/50 border border-blue-800 text-white py-4 px-6 rounded-lg">
      <span className="font-semibold tracking-wide text-sm">{skill.name}</span>
    </div>
  </motion.div>
)

export default function VAWorkPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Video Hero Section */}
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Hello, I&apos;m a Virtual Assistant who actually understands tech.
              </h1>
              <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto lg:mx-0 mb-3">
                I keep websites, apps, and stores from breaking, fixing Shopify stuff, doing real QA testing, helping on web projects, writing content, whatever needs doing.
              </p>
              <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto lg:mx-0 mb-4">
                Need someone who actually pays attention and catches problems early? That&apos;s me
              </p>
              <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto lg:mx-0">
                Watch my introduction video to learn more about my expertise and how I can help your business grow.
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
                title="Virtual Assistant Introduction"
              />
              <p className="text-center text-white/50 text-sm mt-3">
                Click play to watch my introduction
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="relative py-24 px-4 md:px-8 lg:px-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My Work{" "}
              <span className="text-fuchsia-500">
                Experience
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Showcasing expertise in QA Engineering, Web Development, and Digital Solutions
            </p>
          </motion.div>

          {/* Work Experience List */}
          <div className="grid gap-4 max-w-3xl mx-auto">
            {workExperience.map((work, index) => (
              <motion.div
                key={work.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group bg-[#2F2F8A]/20 border border-blue-800/50 hover:border-fuchsia-500/50 rounded-lg p-6 cursor-pointer transition-all hover:shadow-lg hover:shadow-fuchsia-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{work.icon}</div>
                  <div className="flex-1">
                    <Link href={work.website} target="_blank" rel="noopener noreferrer" className="group/link">
                      <h3 className="text-lg font-bold text-fuchsia-400 group-hover/link:text-fuchsia-300 transition-colors">
                        {work.company}
                      </h3>
                      <p className="text-sm text-white/60 mb-2">{work.role}</p>
                      <p className="text-xs text-white/40">{work.period}</p>
                    </Link>
                  </div>
                  <svg
                    className="w-5 h-5 text-white/40 group-hover:text-fuchsia-400 transition-colors flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shopify Projects Section */}
      <section className="relative py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-16"
          >
            <span className="text-fuchsia-500">Shopify</span>{" "}
            Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {shopifyProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-xl bg-[#2F2F8A]/20 border border-blue-800/50 hover:border-fuchsia-500/50 transition-all hover:shadow-xl hover:shadow-fuchsia-500/10">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F103F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-br from-fuchsia-500 to-indigo-600 text-white text-xl font-bold w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        0{index + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-fuchsia-400 transition-colors mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/70 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-bold mb-8"
              >
                <span className="text-fuchsia-500">My</span>{" "}
                Skills
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white/70 text-lg leading-relaxed mb-6"
              >
                I&apos;m <span className="text-fuchsia-400 font-semibold">Zoya Kousar</span>, a professional Virtual Assistant who&apos;s pretty hands-on with tech. Mostly QA, Shopify help, web updates, content. I stay in the background so things just work.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-white/80 font-semibold mb-3">What I usually do:</p>
                <ul className="space-y-2 text-white/70 text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-fuchsia-400 mt-1">•</span>
                    <span>manual testing (websites + apps on phone)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fuchsia-400 mt-1">•</span>
                    <span>Shopify tweaks, custom stuff, support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fuchsia-400 mt-1">•</span>
                    <span>small website updates and fixes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fuchsia-400 mt-1">•</span>
                    <span>helping fix layouts or design bits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fuchsia-400 mt-1">•</span>
                    <span>writing tech stuff or normal articles</span>
                  </li>
                </ul>
                <p className="text-white/70 text-base mt-4 italic">
                  I just try to keep things clear, consistent, no bullshit, small fixes save big headaches later.
                </p>
              </motion.div>
            </div>

            <div>
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Projects Section */}
      <section className="relative py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-16"
          >
            <span className="text-fuchsia-500">
              Development
            </span>{" "}
            Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {developmentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-xl bg-[#2F2F8A]/20 border border-blue-800/50 hover:border-fuchsia-500/50 transition-all hover:shadow-xl hover:shadow-fuchsia-500/10">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-br from-fuchsia-500 to-indigo-600 text-white text-xl font-bold w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        0{index + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-fuchsia-400 transition-colors mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/70 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QA Projects Section */}
      <section className="relative py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-16"
          >
            <span className="text-fuchsia-500">QA</span>{" "}
            Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {qaProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-xl bg-[#2F2F8A]/20 border border-blue-800/50 hover:border-fuchsia-500/50 transition-all hover:shadow-xl hover:shadow-fuchsia-500/10">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-br from-fuchsia-500 to-indigo-600 text-white text-xl font-bold w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        0{index + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-fuchsia-400 transition-colors mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/70 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Writing Projects Section */}
      <section className="relative py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-16"
          >
            <span className="text-fuchsia-500">Technical</span>{" "}
            Writing
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {techWriterProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-xl bg-[#2F2F8A]/20 border border-blue-800/50 hover:border-fuchsia-500/50 transition-all hover:shadow-xl hover:shadow-fuchsia-500/10">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="bg-gradient-to-br from-fuchsia-500 to-indigo-600 text-white text-xl font-bold w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        0{index + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-fuchsia-400 transition-colors mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/70 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section - Before Footer */}
      <section className="relative py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center w-full lg:w-1/2 mx-auto bg-cover bg-center p-3 lg:p-12"
          >
            <img 
              src="/zoya-contact.png" 
              alt="Zoya Contact" 
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

      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}
