"use client"
import { motion } from "framer-motion"
import YouTubeVideo from "../components/youtubeVideo"

// Shopify Case Studies Data
const caseStudies = [
  {
    id: "codeautomation",
    client: "CODEAUTOMATIONAILLC.COM",
    title: "B2B Growth & Leads",
    color: "olive",
    challenges: ["B2B sales were dead low", "Leads sat forever without answers", "LinkedIn was basically silent"],
    tools: ["HubSpot CRM", "LinkedIn Sales Navigator", "Gorgias"],
    actions: [
      "Threw together lead pages that fed right into HubSpot + auto-chased them",
      "Set up LinkedIn messages that didn't scream robots",
      "Added live chat and a couple smart bots with Gorgias so no one left hanging",
    ],
    results: ["Leads started coming in properly", "Replies went from days → minutes", "LinkedIn actually got conversations going"],
    image: "/professional-b2b-shopify-dashboard-with-hubspot-cr.jpg",
  },
  {
    id: "force1rc",
    client: "FORCE1RC",
    title: "Sales Up + Inventory Fixed",
    color: "red",
    challenges: ["Nobody could find the products", "Stock was all manual → mess every week", "Orders took ages to sort"],
    tools: ["Ahrefs", "Shopify Flow", "Klaviyo", "Facebook Ads"],
    actions: [
      "Used Ahrefs to spot easy SEO wins and pushed them live",
      "Made Flow handle stock updates automatically",
      "Set Klaviyo to send cart reminders + nice follow-ups",
      "Retargeted people who almost bought on FB",
    ],
    results: ["Sales climbed", "No more stockouts or oversells", "Repeat buyers actually showed up"],
    image: "/shopify-inventory-management-dashboard-with-automa.jpg",
  },
  {
    id: "cchairnbeauty",
    client: "CCHAIRNBEAUTY.CO.UK",
    title: "Optimization & Automation",
    color: "blue",
    challenges: ["Products hidden", "People bounced fast", "Emails were useless"],
    tools: ["Make.com", "Hotjar", "Klaviyo"],
    actions: [
      "Automated product updates and boring tasks with Make",
      "Watched Hotjar videos to see where people got stuck → fixed it",
      "Built emails in Klaviyo that actually felt personal (welcome, restocks, carts)",
    ],
    results: ["Way more people stuck around", "Conversions went up", "More came back again"],
    image: "/beautiful-cosmetics-beauty-shopify-store-with-prod.jpg",
  },
  {
    id: "usatoyz",
    client: "USATOYZ",
    title: "Fixing Carts & Keeping Customers",
    color: "teal",
    challenges: ["Carts abandoned left and right", "Almost no repeats", "Ads burned cash for nothing"],
    tools: ["SEMrush", "Smile.io", "Optimizely", "Google Ads"],
    actions: [
      "Cleaned SEO crap with SEMrush",
      "Started a basic loyalty thing on Smile",
      "Tested checkout changes with Optimizely till it felt better",
      "Fixed Google Ads so they actually made money",
    ],
    results: ["More people stayed loyal", "Checkout stopped bleeding", "Ads finally worth it"],
    image: "/colorful-toys-shopify-store-with-optimized-checkou.jpg",
  },
  {
    id: "poweryourfun",
    client: "POWER YOUR FUN",
    title: "Multi-Channel Scaling",
    color: "yellow",
    challenges: ["No Amazon/eBay/Walmart sales", "Orders too small", "Site was slow as hell"],
    tools: ["CedCommerce", "Bold Bundles", "Compress.io"],
    actions: [
      "Hooked up marketplaces with CedCommerce",
      "Added bundles and upsells with Bold to bump order size",
      "Crushed images and junk with Compress.io for speed",
    ],
    results: ["Sales came from other platforms", "Average order got bigger", "Site actually loads now"],
    image: "/shopify-multi-channel-selling-dashboard-with-amazo.jpg",
  },
]

// Updated color map with purple/fuchsia theme variations
const colorMap: Record<string, { bg: string; border: string; text: string; gradient: string }> = {
  olive: {
    bg: "bg-gradient-to-r from-purple-600 to-fuchsia-600",
    border: "border-purple-500/50",
    text: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400",
    gradient: "from-purple-500/20 to-fuchsia-500/20",
  },
  red: {
    bg: "bg-gradient-to-r from-fuchsia-600 to-pink-600",
    border: "border-fuchsia-500/50",
    text: "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400",
    gradient: "from-fuchsia-500/20 to-pink-500/20",
  },
  blue: {
    bg: "bg-gradient-to-r from-indigo-600 to-purple-600",
    border: "border-indigo-500/50",
    text: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  teal: {
    bg: "bg-gradient-to-r from-purple-500 to-blue-600",
    border: "border-purple-500/50",
    text: "text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-400",
    gradient: "from-purple-500/20 to-blue-500/20",
  },
  yellow: {
    bg: "bg-gradient-to-r from-amber-500 via-fuchsia-500 to-purple-600",
    border: "border-amber-500/50",
    text: "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-fuchsia-400 to-purple-400",
    gradient: "from-amber-500/20 via-fuchsia-500/20 to-purple-500/20",
  },
}

export default function ShopifyCaseStudiesPage() {
  return (
    <div className="min-h-screen text-white overflow-hidden mt-20">
      {/* Hero Section */}
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
                Shopify <span className="text-fuchsia-500">Case Studies</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0">
                5+ yrs on Shopify store development. I do custom HTML/CSS/Liquid themes, API stuff, full store setups. I love automating things, keeping products flowing right, and pushing conversions up.
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
                title="Shopify Case Studies"
              />
              <p className="text-center text-white/50 text-sm mt-3">
                Click play to watch my Shopify case studies showcase
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
            >
              {/* Left: Case Study Info */}
              <div className="space-y-6">
                <div className={`w-2 h-24 ${colorMap[study.color]?.bg || "bg-gradient-to-b from-fuchsia-500 to-purple-600"} rounded-full`}></div>
                <div>
                  <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${colorMap[study.color]?.text || "text-gradient-primary"}`}>
                    {study.client}
                  </h2>
                  <p className="text-white/70 text-lg mb-6">{study.title}</p>
                </div>

                {/* Challenges */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Challenges</h3>
                  <ul className="space-y-2">
                    {study.challenges.map((challenge, i) => (
                      <li key={i} className="text-white/70 flex items-start gap-2">
                        <span className="text-fuchsia-400 mt-1.5">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Used */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Tools</h3>
                  <ul className="space-y-2">
                    {study.tools.map((tool, i) => (
                      <li key={i} className="text-white/70 flex items-start gap-2">
                        <span className="text-fuchsia-400 mt-1.5">•</span>
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Actions */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">What I did</h3>
                  <ul className="space-y-2">
                    {study.actions.map((action, i) => (
                      <li key={i} className="text-white/70 flex items-start gap-2">
                        <span className="text-fuchsia-400 mt-1.5">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className={`${colorMap[study.color]?.bg || "bg-gradient-primary"} rounded-xl p-6 mt-6 border ${colorMap[study.color]?.border || "border-fuchsia-500/30"} shadow-lg shadow-fuchsia-500/20`}>
                  <h3 className="text-xl font-bold text-white mb-3">Results</h3>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="text-white flex items-start gap-2">
                        <span className="text-white mt-1.5">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Website Screenshot - Improved image display with better styling and layout */}
              <div className="relative">
                {/* Browser frame mockup */}
                <div className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-2xl p-3 shadow-2xl border border-fuchsia-500/20">
                  {/* Browser tabs */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-fuchsia-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  {/* Image container */}
                  <div className="bg-gray-950 rounded-lg overflow-hidden border border-fuchsia-500/30 shadow-inner">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={`${study.client} - ${study.title}`}
                      className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                {/* Glow effect accent with gradient */}
                <div
                  className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r ${colorMap[study.color]?.gradient || "from-fuchsia-500/30 to-purple-500/30"} rounded-full blur-3xl pointer-events-none`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Coffee Chat Section */}
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
    </div>
  )
}
