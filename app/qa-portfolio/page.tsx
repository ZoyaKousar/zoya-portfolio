"use client"
import { motion } from "framer-motion"

// Tools & CRM Data
const toolsCRM = [
  "Selenium WebDriver",
  "Appium",
  "Protractor",
  "Cypress",
  "Katalon Studio",
  "TestComplete",
  "Ranorex",
  "Telerik TestStudio",
  "LoadRunner",
  "JMeter",
  "CI/CD Integrations",
]

// Other Tools Data
const otherTools = [
  "Python",
  "Java",
  "JavaScript",
  "SQL",
  "Excel",
  "Tableau",
  "Power BI",
  "ClickUp",
  "Jira",
  "Asana",
  "Microsoft Teams",
]

// Skills Data
const skills = [
  "Manual Testing",
  "Automated Testing",
  "Software QA",
  "API Testing",
  "Database Testing",
  "Framework Design & Development",
  "Test Planning & Execution",
  "Bug Tracking & Defect Management",
  "QA Project Management",
  "Agile/Scrum Methodologies",
  "Test Automation Framework",
]

// Professional Experience Data
const experience = [
  {
    id: "website-testing",
    title: "Website Testing - E-Woman world",
    items: [
      "Collaborated with developers and product managers in Agile sprints to review requirements, provide feedback, and validate fixes.",
      "Reported and tracked defects using Jira, ensuring proper documentation, prioritization, and resolution.",
      "Executed functional, integration, and regression testing to ensure app stability before release.",
      "Performed API testing with Postman to validate backend functionality supporting mobile features.",
      "Supported automation test script development for mobile workflows using frameworks such as Robot Framework / Appium.",
      "Validated push notifications, in-app purchases, and app store builds during pre-release testing phases.",
    ],
  },
  {
    id: "qa-automation-engineer",
    title: "QA Automation Engineer - Freelance / Remote",
    items: [
      "Designed and implemented automation frameworks from scratch, improving test coverage and reducing manual effort.",
      "Conducted unit, integration, and functional testing, ensuring high-quality software releases.",
      "Collaborated with development and product teams to align testing with business requirements.",
      "Managed and mentored QA team members, fostering a high-performance, Agile-driven environment.",
      "Integrated automated tests into CI/CD pipelines, increasing efficiency and early defect detection.",
      "Delivered comprehensive test reports, highlighting progress, risks, and recommendations to stakeholders.",
      "Hands-on experience with mobile testing, bug fixing, reporting, and ticketing systems.",
    ],
  },
  {
    id: "speechlab",
    title: "QA Engineer - SpeechLab.ai",
    items: [
      "Built and executed detailed manual test cases and test reports to ensure product quality.",
      "Utilized TestRail and Jira for organizing, managing, and tracking test cases efficiently.",
      "Worked within an Agile team on weekly sprints, collaborating closely with developers and product managers.",
      "Conducted exploratory testing to uncover potential issues and expand test coverage.",
      "Managed and organized tickets effectively in JIRA and Notion, ensuring smooth task flow and timely resolutions.",
      "Performed cross-browser testing, setting up test environments and recommending online platforms.",
      "Contributed to the documentation process, creating and maintaining clear technical and test documentation.",
      "Began developing and executing automated test scripts using Python-based QA frameworks.",
      "Collaborated on regression testing and release validation, ensuring stability and performance before deployment.",
    ],
  },
  {
    id: "operr",
    title: "IT projects QA - Operr Technologies",
    items: [
      "Designed and executed functional and integration testing using Robot Framework to validate system workflows.",
      "Gained hands-on experience in API automation testing with Postman, creating and executing automated test collections.",
      "Translated business requirements and functional designs into detailed system and integration test scripts.",
      "Conducted extensive testing of online platforms and mobile applications, ensuring seamless performance.",
      "Created and executed bug reports and test cases, collaborating with development teams to track and resolve defects.",
    ],
  },
  {
    id: "version-zero",
    title: "QA Tester (iOS & Android Apps) – Version Zero Limited",
    items: [
      "Performed manual and exploratory testing on iOS and Android applications to ensure functionality, usability, and performance.",
      "Designed, executed, and maintained test cases, test scenarios, and test reports aligned with business requirements.",
      "Conducted cross-device and cross-browser testing to validate app performance across multiple screen sizes and OS versions.",
    ],
  },
]

// Education Data
const education = [
  {
    institution: "University of the Management and Sciences (UMT)",
    degree: "Master's in CS (Computer Science)",
    duration: "October 2017 - September 2019",
    areas: [
      "Object Oriented Programming",
      "Data Structures and Analysis",
      "Software Engineering",
      "Databases",
      "Web Programming",
    ],
  },
  {
    institution: "M.A.O College",
    degree: "Masters in English Lit (English Literature)",
    duration: "January 2014 - March 2016",
    areas: ["English Literature", "Short Stories", "American History"],
  },
]

// Certification Data
const certifications = [
  {
    name: "IELTS Proficiency Exam",
    details: "General (2020), Academic (2023)",
  },
  {
    name: "Duolingo Proficiency Exam",
    details: "English 6",
  },
]

export default function QAPortfolioPage() {
  return (
    <div className="min-h-screen text-white overflow-hidden mt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="text-fuchsia-400 text-lg mb-2 tracking-widest">KULSOOM KOUSAR</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4">
              SENIOR QUALITY ASSURANCE ENGINEER
            </h1>
            <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
          </motion.div>

          {/* Summary Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">SUMMARY</h2>
            <div className="w-full border-t border-white/20 mb-6"></div>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Bugs cost businesses time and trust, I stop that.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              With 9+ years in QA, I design and automate testing frameworks using Selenium, Appium, and Cypress to ensure flawless, cross-platform performance.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Skilled in CI/CD, eCommerce, and payment systems, I deliver reliable, QA-tested software on time, every time.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              My focus is turning quality into a competitive advantage. In every project, I make sure technology works the way your business needs it to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            PROFESSIONAL EXPERIENCE
          </motion.h2>
          <div className="w-full border-t border-white/20 mb-8"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-fuchsia-400 mb-6">
                  {exp.title}
                </h3>
                <ul className="space-y-3">
                  {exp.items.map((item, i) => (
                    <li key={i} className="text-white/70 text-lg flex items-start gap-3">
                      <span className="text-fuchsia-400 mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            SKILLS
          </motion.h2>
          <div className="w-full border-t border-white/20 mb-8"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
              >
                <p className="text-white/80 text-lg">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & CRM Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-12"
          >
            TOOLS &amp; CRM
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {toolsCRM.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="text-white/70 text-lg flex items-start gap-3"
              >
                <span className="text-fuchsia-400 mt-2">•</span>
                <span>{tool}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Tools Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-12"
          >
            OTHER TOOLS
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="text-white/70 text-lg flex items-start gap-3"
              >
                <span className="text-fuchsia-400 mt-2">•</span>
                <span>{tool}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            EDUCATION
          </motion.h2>
          <div className="w-full border-t border-white/20 mb-8"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-fuchsia-400 mb-2">
                  {edu.institution}
                </h3>
                <p className="text-white/80 text-lg mb-2">{edu.degree}</p>
                <p className="text-white/60 text-base mb-4">{edu.duration}</p>
                <p className="text-white/70 text-base mb-2 font-semibold">Key Study Areas:</p>
                <ul className="space-y-2">
                  {edu.areas.map((area, i) => (
                    <li key={i} className="text-white/70 text-base flex items-start gap-3">
                      <span className="text-fuchsia-400 mt-1.5">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          >
            CERTIFICATION
          </motion.h2>
          <div className="w-full border-t border-white/20 mb-8"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl md:text-2xl font-bold text-fuchsia-400 mb-2">
                  {cert.name}
                </h3>
                <p className="text-white/70 text-base">{cert.details}</p>
              </motion.div>
            ))}
          </div>
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

