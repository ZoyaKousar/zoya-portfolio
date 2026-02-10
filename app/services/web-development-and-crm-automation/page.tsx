"use client";
import ContactSection from '@/app/components/contactForm'
import PricingPlans from '@/app/components/web-pricingplan'
import React from 'react'
import { motion } from 'framer-motion'

const webCrm = () => {
    return (
        <div className='mx-6'>
            <section className="flex flex-col md:flex-row items-center justify-between w-full mt-24 max-w-6xl mx-auto py-10 md:px-16 md:py-16">
                {/* Left Side - Text */}
                <motion.div 
                    className="md:w-7/12 w-full text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1 
                        className="text-3xl md:text-4xl font-bold text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Web Development & <span className="text-fuchsia-500">CRM Automation</span> Services
                    </motion.h1>
                    <motion.h2 
                        className="text-2xl font-semibold text-white mt-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Custom-Built Systems That Convert, Scale, and Automate
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-300 mt-4 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Hey, I&apos;m Kou. For the last 6+ years I&apos;ve been the guy people call when their website feels slow, their leads vanish, or their CRM is a total mess. I fix that by building clean, fast systems that bring in customers and save time. I mostly use GoHighLevel, WordPress, Shopify, Systeme.io, HubSpot, Sanity.io with Next.js, and Wix when it&apos;s the right fit.
                    </motion.p>
                </motion.div>
                {/* Right Side - Image */}
                <motion.div 
                    className="md:w-4/12 w-full flex justify-center md:justify-end mt-6 md:mt-0"
                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative"
                    >
                        <img
                            src="/shopify-1.png"
                            alt="Web Development Services"
                            className="rounded-2xl shadow-2xl object-contain h-[300px] md:h-[450px] border-2 border-fuchsia-500/20"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/0 to-purple-600/0 hover:from-fuchsia-500/10 hover:to-purple-600/10 transition-all duration-300 pointer-events-none"></div>
                    </motion.div>
                </motion.div>
            </section>
            
            
            {/* What I Bring to the Table Section */}
            <section className="text-white py-12 md:px-16">
                <motion.div 
                    className="max-w-6xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        What I Bring to the <span className="text-fuchsia-500">Table</span>
                    </motion.h2>
                    
                    <motion.p 
                        className="text-xl font-bold text-[#BA72BA] mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Multi-Platform Web Development
                    </motion.p>
                    
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {[
                            { 
                                title: "WordPress", 
                                desc: "Custom themes, plugin integration, security hardening.",
                                svg: (
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-blue-500" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M256 8C119.3 8 8 119.2 8 256c0 136.7 111.3 248 248 248s248-111.3 248-248C504 119.2 392.7 8 256 8zM33 256c0-32.3 6.9-63 19.3-90.7l106.4 291.4C84.3 420.5 33 344.2 33 256zm223 223c-21.9 0-43-3.2-63-9.1l66.9-194.4 68.5 187.8c.5 1.1 1 2.1 1.6 3.1-23.1 8.1-48 12.6-74 12.6zm30.7-327.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-21.9 0-58.7-2.8-58.7-2.8-12-.7-13.4 17.7-1.4 18.4 0 0 11.4 1.4 23.4 2.1l34.7 95.2L200.6 393l-81.2-241.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-4.2 0-9.1-.1-14.4-.3C109.6 73 178.1 33 256 33c58 0 110.9 22.2 150.6 58.5-1-.1-1.9-.2-2.9-.2-21.9 0-37.4 19.1-37.4 39.6 0 18.4 10.6 33.9 21.9 52.3 8.5 14.8 18.4 33.9 18.4 61.5 0 19.1-7.3 41.2-17 72.1l-22.2 74.3-80.7-239.6zm81.4 297.2l68.1-196.9c12.7-31.8 17-57.2 17-79.9 0-8.2-.5-15.8-1.5-22.9 17.4 31.8 27.3 68.2 27.3 107 0 82.3-44.6 154.1-110.9 192.7z"></path>
                                    </svg>
                                )
                            },
                            { 
                                title: "Shopify", 
                                desc: "Custom theme dev, multichannel integration, CRO-focused builds.",
                                svg: (
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="text-green-500" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z"></path>
                                    </svg>
                                )
                            },
                            { 
                                title: "Sanity.io + Next.js", 
                                desc: "Headless CMS with dynamic content and blazing speed.",
                                svg: (
                                    <div className="flex gap-2 items-center justify-center">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="text-red-500" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.394 7.31a5.745 5.745 0 0 1-.833-.68c-.913-.91-1.38-2.067-1.38-3.568v-.575C6.699.929 9.039 0 11.828 0c5.394 0 8.515 2.8 9.285 6.74H16.22c-.54-1.554-1.89-2.764-4.352-2.764-2.422 0-4.136 1.276-4.473 3.334h-.002ZM4.683 3.062c0 3.236 2.034 5.162 6.106 6.177l4.316.983c3.854.87 6.2 3.03 6.2 6.55a6.61 6.61 0 0 1-1.436 4.239c0-3.511-1.85-5.409-6.31-6.55l-4.236-.946c-3.393-.76-6.011-2.536-6.011-6.36a6.578 6.578 0 0 1 1.37-4.093ZM17.18 16.484c-.292 2.235-2.092 3.495-4.698 3.495-2.314 0-4.048-.946-4.703-2.99H2.694C3.518 21.44 7.224 24 12.519 24c2.828 0 5.277-.87 6.85-2.439v-.55c0-1.66-.433-2.876-1.342-3.816a5.508 5.508 0 0 0-.847-.71v-.001Z"></path>
                                        </svg>
                                        <span className="text-white text-xl">+</span>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="text-white" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"></path>
                                        </svg>
                                    </div>
                                )
                            },
                            { 
                                title: "Wix", 
                                desc: "Design-centric, modern brochure sites with performance enhancements.",
                                svg: (
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="text-black dark:text-white" height="36" width="36" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m0 7.354 2.113 9.292h.801a1.54 1.54 0 0 0 1.506-1.218l1.351-6.34a.171.171 0 0 1 .167-.137c.08 0 .15.058.167.137l1.352 6.34a1.54 1.54 0 0 0 1.506 1.218h.805l2.113-9.292h-.565c-.62 0-1.159.43-1.296 1.035l-1.26 5.545-1.106-5.176a1.76 1.76 0 0 0-2.19-1.324c-.639.176-1.113.716-1.251 1.365l-1.094 5.127-1.26-5.537A1.33 1.33 0 0 0 .563 7.354H0zm13.992 0a.951.951 0 0 0-.951.95v8.342h.635a.952.952 0 0 0 .951-.95V7.353h-.635zm1.778 0 3.158 4.66-3.14 4.632h1.325c.368 0 .712-.181.918-.486l1.756-2.59a.12.12 0 0 1 .197 0l1.754 2.59c.206.305.55.486.918.486h1.326l-3.14-4.632L24 7.354h-1.326c-.368 0-.712.181-.918.486l-1.772 2.617a.12.12 0 0 1-.197 0L18.014 7.84a1.108 1.108 0 0 0-.918-.486H15.77z"></path>
                                    </svg>
                                )
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="group bg-[#22226C] bg-opacity-90 p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 relative overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                                whileHover={{ 
                                    scale: 1.05, 
                                    y: -8,
                                    borderColor: "rgba(236, 72, 153, 0.5)"
                                }}
                            >
                                {/* Animated background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <h3 className="text-xl text-[#BA72BA] font-semibold mb-4 relative z-10 group-hover:text-fuchsia-300 transition-colors text-center">
                                    {item.title}
                                </h3>
                                <div className="mb-4 relative z-10 flex items-center justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="flex items-center justify-center"
                                    >
                                        {item.svg}
                                    </motion.div>
                                </div>
                                <p className="text-sm text-gray-300 relative z-10 group-hover:text-gray-200 transition-colors text-center">
                                    {item.desc}
                                </p>
                                
                                {/* Bottom accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    <motion.p 
                        className="text-xl font-bold text-[#BA72BA] mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        CRM Implementation & Automation
                    </motion.p>
                    
                    <motion.div 
                        className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                    >
                        {[
                            { 
                                title: "HubSpot CRM", 
                                desc: "Lead capture, full-funnel workflows, custom dashboards.",
                                svg: (
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="text-orange-500" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z"></path>
                                    </svg>
                                )
                            },
                            { 
                                title: "Go High Level", 
                                desc: "Website + funnel builds, SMS/email automations, pipeline tracking.",
                                svg: <img alt="Go High Level" loading="lazy" width="32" height="32" className="object-contain" src="/gohighlevel.png" />
                            },
                            { 
                                title: "System.io", 
                                desc: "Membership platforms, upsells, email flows, gated content.",
                                svg: <img alt="System.io" loading="lazy" width="32" height="32" className="object-contain" src="/systeme-io.png" />
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="group bg-[#22226C] bg-opacity-90 p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 relative overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1.1 + (index * 0.1) }}
                                whileHover={{ 
                                    scale: 1.05, 
                                    y: -8,
                                    borderColor: "rgba(236, 72, 153, 0.5)"
                                }}
                            >
                                {/* Animated background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <h3 className="text-xl text-[#BA72BA] font-semibold mb-4 relative z-10 group-hover:text-fuchsia-300 transition-colors text-center">
                                    {item.title}
                                </h3>
                                <div className="mb-4 relative z-10 flex items-center justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="flex items-center justify-center"
                                    >
                                        {item.svg}
                                    </motion.div>
                                </div>
                                <p className="text-sm text-gray-300 relative z-10 group-hover:text-gray-200 transition-colors text-center">
                                    {item.desc}
                                </p>
                                
                                {/* Bottom accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            <section className="text-white py-12 md:px-16">
                <div className="max-w-5xl mx-auto space-y-10">
                    {/* Heading */}
                    <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold">
                            What Sets My Work <span className="text-fuchsia-500">Apart?</span>
                        </h2>
                        <p className="mt-4 text-lg md:text-xl text-gray-300">
                            I don&apos;t build pretty junk that sits there. Sites load quickly, handle more traffic without choking, and everything points toward making you money. Automations are done right, they target the right people at the right moment so you close deals faster.
                        </p>
                    </motion.div>

                    {/* Highlight Box */}
                    <motion.div 
                        className="bg-gradient-to-br from-[#22226C]/90 to-[#1C1C65]/90 border border-fuchsia-500/20 rounded-xl p-6 md:p-8 space-y-4 shadow-xl hover:shadow-fuchsia-500/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-white">
                            Go High Level Website & CRM Upgrade (IT Services)
                        </h3>

                        <div>
                            <p className="font-medium text-white">Challenge:</p>
                            <p className="text-gray-300">
                                Nobody finding them online, no follow-up system, leads gone in seconds.
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-white">Solution:</p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>Modern GHL site with step-by-step forms and real client stories</li>
                                <li>Auto SMS and email replies right away</li>
                                <li>Booking setup that qualifies people and logs their interest</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-white mb-2">Result:</p>
                            <p className="text-green-400">
                                40% more good leads in 60 days
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="bg-gradient-to-br from-[#22226C]/90 to-[#1C1C65]/90 border border-fuchsia-500/20 rounded-xl p-6 md:p-8 space-y-4 shadow-xl hover:shadow-fuchsia-500/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-white">
                            System.io for ShoriChek & JustVanilla
                        </h3>

                        <div>
                            <p className="font-medium text-white">Challenge:</p>
                            <p className="text-gray-300">
                                No emails going out, no locked content, no way to turn visitors into paying members.
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-white">Solution:</p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>Built tiered membership areas</li>
                                <li>Added upsells, secure checkout, automatic email follow-ups</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-white mb-2">Result:</p>
                            <p className="text-green-400">
                                Paid sign-ups up 20% in 60 days
                            </p>
                        </div>
                        <div>
                            <p className="font-medium text-white mb-2">Bonus:</p>
                            <p className="text-white">
                                Members stayed longer because it felt more personal
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="bg-gradient-to-br from-[#22226C]/90 to-[#1C1C65]/90 border border-fuchsia-500/20 rounded-xl p-6 md:p-8 space-y-4 shadow-xl hover:shadow-fuchsia-500/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-white">
                            CodeAutomation.AI – Headless CMS Build
                        </h3>
                        <h3 className="text-xl md:text-2xl font-semibold text-fuchsia-400">
                            Stack: Sanity.io + Next.js
                        </h3>
                        <div>
                            <p className="font-medium text-white">Challenge:</p>
                            <p className="text-gray-300">
                                Pages crawled, SEO sucked, editing anything was painful.
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-white">Solution:</p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>Fast API-driven headless CMS</li>
                                <li>Content types anyone can update without breaking stuff</li>
                                <li>Mobile-first layout stuffed with SEO best practices</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-white mb-2">Result:</p>
                            <p className="text-green-400">
                                Load speed cut in half, organic visitors up 30% in 8 weeks
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="bg-gradient-to-br from-[#22226C]/90 to-[#1C1C65]/90 border border-fuchsia-500/20 rounded-xl p-6 md:p-8 space-y-4 shadow-xl hover:shadow-fuchsia-500/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-white">
                            WordPress Projects
                        </h3>

                        <div>
                            <p className="font-medium text-white">WilkinGuttenplan (Accounting):</p>
                            <p className="text-gray-300">
                                Custom PHP/MySQL build, locked down tight, SEO done properly.
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-white">Trella Health (Healthcare):</p>
                            <p className="text-gray-300">
                                Heavy on data, connected to CRM, made sure it met compliance rules.
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-white">Victory Woodworks:</p>
                            <p className="text-gray-300">
                                WPBakery site with beautiful shots and pages that load quickly for SEO.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="bg-gradient-to-br from-[#22226C]/90 to-[#1C1C65]/90 border border-fuchsia-500/20 rounded-xl p-6 md:p-8 space-y-4 shadow-xl hover:shadow-fuchsia-500/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-white">
                            Shopify E-commerce Builds
                        </h3>
                        <div>
                            <p className="font-medium text-white">Clients:</p>
                            <p className="text-gray-300 mb-2">
                                Fully custom Shopify themes
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>Amazon/eBay linked up</li>
                                <li>Upsell offers + emails for abandoned carts</li>
                                <li>Mobile-first design with good SEO underneath</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-white mb-2">Impact:</p>
                            <p className="text-green-400">
                                Sales climbed 25% quarter over quarter, way less people bailing at checkout, mobile sales looking much stronger
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="bg-gradient-to-br from-[#22226C]/90 to-[#1C1C65]/90 border border-fuchsia-500/20 rounded-xl p-6 md:p-8 space-y-4 shadow-xl hover:shadow-fuchsia-500/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-white">
                            Wix for H3-Technologies
                        </h3>

                        <div>
                            <p className="font-medium text-white">Challenge:</p>
                            <p className="text-gray-300">
                                Site looked like 2015, visitors bouncing fast.
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-white">Solution:</p>
                            <p className="text-gray-300">
                                Clean, up-to-date IT services page built to grab contact info.
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-white">Result:</p>
                            <p className="text-green-400">
                                Customer messages up 30% not long after it went live
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="bg-gradient-to-br from-[#22226C]/90 to-[#1C1C65]/90 border border-fuchsia-500/20 rounded-xl p-6 md:p-8 space-y-4 shadow-xl hover:shadow-fuchsia-500/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-white">
                            CRM Automation: Where Growth Really Happens
                        </h3>
                        <h3 className="text-xl md:text-2xl font-semibold text-fuchsia-400">
                            HubSpot CRM Expertise
                        </h3>
                        <div>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>Score leads automatically and keep them warm</li>
                                <li>Dashboards that show sales progress clearly</li>
                                <li>Emails sent at smart times with proper grouping</li>
                                <li>Chat widgets, calendars, call logs all connected</li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="bg-gradient-to-br from-[#22226C]/90 to-[#1C1C65]/90 border border-fuchsia-500/20 rounded-xl p-6 md:p-8 space-y-4 shadow-xl hover:shadow-fuchsia-500/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <h3 className="text-xl md:text-2xl font-semibold text-white">
                            Go High Level CRM Power
                        </h3>
                        <div>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>See the entire customer journey</li>
                                <li>Group people and move them forward on autopilot</li>
                                <li>SMS and email triggered by what they actually do</li>
                                <li>Real-time numbers on what&apos;s converting</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-white mb-2">Result:</p>
                            <p className="text-green-400">
                                You stop wasting hours chasing people, reply faster, and the whole system grows with you instead of breaking.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
            <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto py-10 md:px-16">
                {/* Left Side - Text */}
                <motion.div 
                    className="md:w-6/12 w-full text-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h3 
                        className="text-3xl md:text-4xl font-bold text-white mb-5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Why Work With <span className="text-fuchsia-500">Me?</span>
                    </motion.h3>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <ul className="list-disc list-inside text-lg text-gray-200 space-y-3">
                            {[
                                "I've helped e-commerce shops, SaaS tools, healthcare practices, coaches, and service businesses get real numbers.",
                                "I talk tech and I talk business, so the final product looks good and actually pays for itself.",
                                "I handle SEO, ads, email, tracking, automation, and the full picture.",
                                "I don't just hand over a website. I hand over something that keeps growing your business."
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                                    className="mb-2"
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
                {/* Right Side - Image */}
                <motion.div 
                    className="md:w-6/12 w-full flex justify-center md:justify-end mt-6 md:mt-0"
                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative"
                    >
                        <img
                            src="/web-1.png"
                            alt="Why Work With Me"
                            className="rounded-2xl shadow-2xl object-contain h-[300px] md:h-[450px] border-2 border-fuchsia-500/20"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/0 to-purple-600/0 hover:from-fuchsia-500/10 hover:to-purple-600/10 transition-all duration-300 pointer-events-none"></div>
                    </motion.div>
                </motion.div>
            </section>
            <section>
                <PricingPlans/>
            </section>
             <div className='max-w-6xl mx-auto'>
                <ContactSection />
            </div>
        </div>
    )
}

export default webCrm