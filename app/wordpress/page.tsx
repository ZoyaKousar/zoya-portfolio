"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import YouTubeVideo from "../components/youtubeVideo"

// Projects Data
const projects = [
  {
    id: "wilkinguttenplan",
    title: "WilkinGuttenplan",
    image: "/wordpress/wilkinguttenplan.png",
    website: "https://www.wgcpas.com/",
    intro: "WilkinGuttenplan is a well-established accounting and advisory firm offering tax, assurance, and advisory services to businesses and individuals. Their approach focuses on delivering personalized financial solutions that help clients reach their long-term goals.",
    work: "I got involved with their site, helped shape the design and build it out so it's secure, looks good on phones or laptops, and doesn't frustrate anyone trying to use it. Made navigation feel normal, wired up some backend stuff to automate parts of their workflow, sorted the SEO reasonably well, and I still pop in for fixes and updates. Threw in modern frameworks where it helped plus some custom code, and it really gave their online face a boost, clients find things easier and stick around more.",
    tech: {
      cms: "WordPress",
      database: "MySQL",
      language: "PHP",
      pageBuilder: null,
    },
    qa: "Bug hunting and reporting",
  },
  {
    id: "victorywoodworks",
    title: "Victory Woodworks",
    image: "/wordpress/victorywoodworks.png",
    website: "https://www.victorywoodworks.com/",
    intro: "Victory Woodworks specializes in high-quality custom woodwork solutions for both commercial and residential projects. Their services range from cabinetry to detailed millwork, with a strong focus on craftsmanship and precision.",
    work: "Started their site from zero, handled the look and feel, all the behind-the-scenes stuff. We went custom on a bunch of design parts, made sure it works properly on any screen, and did the usual SEO things so people can actually discover them. Still helping out with updates whenever needed. In the end the site matches the kind of care and quality they put into their actual work.",
    tech: {
      cms: "WordPress",
      database: "MySQL",
      language: null,
      pageBuilder: "WPBakery",
    },
    qa: "Bug hunting and reporting",
  },
  {
    id: "justvanilla",
    title: "Just Vanilla",
    image: "/wordpress/justvanilla.png",
    website: "https://www.justvanilla.com/",
    intro: "Just Vanilla is a premium brand known for producing gourmet, handcrafted vanilla products, including high-quality vanilla extracts and beans.",
    work: "Gave Just Vanilla a proper digital push, took care of the whole website build. Set up an e-commerce part that's actually pleasant to shop in, got secure payments working, built the product management stuff they asked for. Keep it responsive and put some proper SEO effort in so the shopping feels smooth and it's helping them reach buyers further out.",
    tech: {
      cms: "WordPress",
      database: "MySQL",
      language: "PHP",
      pageBuilder: null,
    },
    qa: "Bug hunting and reporting",
  },
  {
    id: "trellahealth",
    title: "Trella Health",
    image: "/wordpress/trellahealth.png",
    website: "https://www.trellahealth.com/",
    intro: "Trella Health delivers data-driven insights that help post-acute healthcare providers improve decision-making, patient care, and operational performance.",
    work: "Built their site end-to-end, made sure it could scale, stay secure, work well on anything, and cope with all the data they deal with. Added whatever custom pieces they needed, linked up the analytics tools properly, made the experience better overall, and locked security down tight so their data side stays safe.",
    tech: {
      cms: "WordPress",
      database: "MySQL",
      language: "PHP & Python",
      pageBuilder: "WPBakery",
    },
    qa: "Bug hunting and reporting",
  },
]

// Skills/Expertise
const expertise = [
  { name: "WordPress Theme Development", icon: "🎨" },
  { name: "Plugin Customization", icon: "🔌" },
  { name: "WooCommerce Integration", icon: "🛒" },
  { name: "Website Optimization & SEO", icon: "📈" },
  { name: "MySQL Database", icon: "🗄️" },
  { name: "PHP Development", icon: "⚙️" },
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
  if (!isOpen) return null

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
          className="bg-[#0F103F] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative border border-fuchsia-500/20"
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

          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 mb-4">
            {project.title}
          </h3>
          
          <div className="mb-6">
            <h4 className="text-fuchsia-400 font-semibold mb-2">Introduction</h4>
            <p className="text-white/80 leading-relaxed">{project.intro}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-fuchsia-400 font-semibold mb-2">My Contribution</h4>
            <p className="text-white/80 leading-relaxed">{project.work}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-fuchsia-400 font-semibold mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.cms && (
                <span className="bg-indigo-900/50 border border-blue-800 px-3 py-1 rounded-full text-sm text-white">
                  CMS: {project.tech.cms}
                </span>
              )}
              {project.tech.database && (
                <span className="bg-indigo-900/50 border border-blue-800 px-3 py-1 rounded-full text-sm text-white">
                  DB: {project.tech.database}
                </span>
              )}
              {project.tech.language && (
                <span className="bg-indigo-900/50 border border-blue-800 px-3 py-1 rounded-full text-sm text-white">
                  Lang: {project.tech.language}
                </span>
              )}
              {project.tech.pageBuilder && (
                <span className="bg-indigo-900/50 border border-blue-800 px-3 py-1 rounded-full text-sm text-white">
                  Builder: {project.tech.pageBuilder}
                </span>
              )}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-fuchsia-400 font-semibold mb-2">QA Testing</h4>
            <p className="text-white/80">{project.qa}</p>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function WordPressPortfolioPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedProject, setSelectedProject] = useState<any>(null)

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
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                WordPress <span className="text-fuchsia-500">Development</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0">
                6+ Years of Experience in WordPress Theme & Plugin Development, Customization, and Optimization
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
                title="WordPress Development Portfolio"
              />
              <p className="text-center text-white/50 text-sm mt-3">
                Click play to watch my WordPress development showcase
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-20 bg-gradient-to-b from-fuchsia-500 via-purple-500 to-indigo-500 rounded-full"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400">
                  About My Expertise
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-white/90 text-lg leading-relaxed">
                  I&apos;ve been messing around with web stuff for over <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 font-bold">6 years</span> now, and honestly, WordPress Development is where I feel most at home, tweaking themes, writing or fixing plugins, building whole sites, and squeezing every bit of speed out of them. I&apos;ve jumped around to Joomla, Wix, Squarespace when clients needed it, but I always aim for something that&apos;s sturdy, can handle growth, and actually solves the real problem the business has.
                </p>
                <p className="text-white/90 text-lg leading-relaxed">
                  E-commerce comes up a lot too, I&apos;ve done my share of WooCommerce shops, some Shopify, BigCommerce here and there. Lately I&apos;ve been having fun with headless setups, Sanity feeding into Next.js mostly. APIs, hooking up other tools, automating boring repetitive bits, that&apos;s the kind of thing I do pretty regularly to make life easier for clients.
                </p>
                <p className="text-white/90 text-lg leading-relaxed">
                  What keeps me going is putting together websites that load quickly, don&apos;t get hacked easily, feel nice when people use them, look decent, and actually help the business get more customers, keep them around longer, and stay solid for years.
                </p>
              </div>
              {/* Background decorative element */}
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-4"
            >
              {expertise.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-gradient-to-br from-white/5 via-purple-500/10 to-fuchsia-500/10 border-2 border-fuchsia-500/30 rounded-xl p-6 hover:border-fuchsia-500/50 hover:shadow-xl hover:shadow-fuchsia-500/30 transition-all group"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">{item.icon}</span>
                  <span className="text-sm text-white/90 font-medium leading-tight relative z-10">{item.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400">
              My Projects
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 rounded-full mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative bg-gradient-to-br from-white/5 via-purple-500/10 to-fuchsia-500/10 border-2 border-fuchsia-500/30 hover:border-fuchsia-500/50 rounded-2xl p-8 transition-all hover:shadow-2xl hover:shadow-fuchsia-500/30 overflow-hidden group">
                  {/* Background glow effect */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  
                  {/* Project Info */}
                  <div className="flex-1 relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-600 text-white text-lg font-bold px-4 py-2 rounded-full shadow-lg shadow-fuchsia-500/30">
                            0{index + 1}
                          </span>
                          <div className="h-1 w-16 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full"></div>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 mb-2 group-hover:from-fuchsia-300 group-hover:via-purple-300 group-hover:to-indigo-300 transition-all">
                          {project.title}
                        </h3>
                      </div>
                      <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-full p-3 group-hover:scale-110 transition-transform">
                        <svg
                          className="w-6 h-6 text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    <p className="text-white/80 mb-6 text-lg leading-relaxed">{project.intro}</p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tech.cms && (
                        <span className="bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 border-2 border-fuchsia-500/30 px-4 py-2 rounded-full text-sm text-white font-medium hover:border-fuchsia-500/50 transition-all">
                          {project.tech.cms}
                        </span>
                      )}
                      {project.tech.database && (
                        <span className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border-2 border-purple-500/30 px-4 py-2 rounded-full text-sm text-white font-medium hover:border-purple-500/50 transition-all">
                          {project.tech.database}
                        </span>
                      )}
                      {project.tech.language && (
                        <span className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border-2 border-indigo-500/30 px-4 py-2 rounded-full text-sm text-white font-medium hover:border-indigo-500/50 transition-all">
                          {project.tech.language}
                        </span>
                      )}
                      {project.tech.pageBuilder && (
                        <span className="bg-gradient-to-r from-blue-500/20 to-fuchsia-500/20 border-2 border-blue-500/30 px-4 py-2 rounded-full text-sm text-white font-medium hover:border-blue-500/50 transition-all">
                          {project.tech.pageBuilder}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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

      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}
