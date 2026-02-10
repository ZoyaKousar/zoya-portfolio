"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

// Portfolio categories - add more here as needed
const portfolioItems = [
  { name: "Full Stack", href: "/portfolio" },
  { name: "VA Work", href: "/va-work" },
  { name: "Web Dev", href: "/web-dev" },
  { name: "WordPress", href: "/wordpress" },
  { name: "Shopify Case Studies", href: "/shopify-case-studies" },
  { name: "SEO Portfolio", href: "/seo-portfolio" },
  { name: "QA Portfolio", href: "/qa-portfolio" },
  // Add more portfolio categories here:
  // { name: "E-commerce", href: "/ecommerce" },
];

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isMobilePortfolioOpen, setIsMobilePortfolioOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPortfolioOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsMobilePortfolioOpen(false);
  };

  const getNavLinkClass = (link: string) => {
    const isActive = activeLink === link || (link !== "/" && activeLink.startsWith(link));
    return `nav-link-hover cursor-pointer px-4 xl:px-10 rounded-full ${
      isActive
      ? "text-gradient-primary"
      : "text-white"
    }`;
  };

  const isPortfolioActive = portfolioItems.some(item => activeLink === item.href);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between lg:justify-center items-center px-6 py-5 bg-[#0F103F] max-w-8xl mx-auto">
        {/* Mobile Logo */}
        <div className="lg:hidden flex items-center">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative"
            >
              <motion.img
                src="/logozoya.png"
                alt="Logo"
                className="h-20 sm:h-24 md:h-28"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
               
              />
            </motion.div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center text-xl">
          <Link href="/" onClick={() => setActiveLink("/")}>
            <div className={getNavLinkClass("/")}>Home</div>
          </Link>
          <Link href="/services" onClick={() => setActiveLink("/services")}>
            <div className={getNavLinkClass("/services")}>Services</div>
          </Link>
         
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative"
            >
              <motion.img
                loading="lazy"
                src="/logozoya.png"
                className="object-contain h-20 sm:h-24 md:h-28 cursor-pointer"
                alt="Logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ 
                  filter: "drop-shadow(0 0 15px rgba(236, 72, 153, 0.6))",
                  rotate: [0, -5, 5, -5, 0],
                }}
              />
            </motion.div>
          </Link>
      
          {/* Portfolio Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
              className={`nav-link-hover cursor-pointer px-4 xl:px-10 rounded-full flex items-center gap-2 ${
                isPortfolioActive
                  ? "text-gradient-primary"
                  : "text-white"
              }`}
            >
              Portfolio
              <svg
                className={`w-4 h-4 transition-transform ${isPortfolioOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {isPortfolioOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#0F103F] border border-blue-800/50 rounded-xl shadow-2xl shadow-fuchsia-500/10 overflow-hidden z-50">
                {portfolioItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setActiveLink(item.href);
                      setIsPortfolioOpen(false);
                    }}
                  >
                    <div
                      className={`px-6 py-3 transition-colors duration-300 ease-in-out ${
                        activeLink === item.href
                          ? "bg-fuchsia-500/20 text-fuchsia-400"
                          : "text-white/80 hover:bg-fuchsia-500/20 hover:text-fuchsia-400"
                      }`}
                    >
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
      
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            hashSpy={true}
            onClick={() => setActiveLink("#contact")}
            className={getNavLinkClass("#contact")}
          >
            Contact
          </ScrollLink>
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={toggleSidebar} className="lg:hidden p-2">
          <img
            src={isSidebarOpen ? "/cross-icon.svg" : "/main-menu.png"}
            alt={isSidebarOpen ? "Close Menu" : "Open Menu"}
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={closeSidebar}>
          <div
            className="fixed right-0 top-0 h-full bg-[#0F103F] text-white w-64 p-8 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="space-y-6 mt-[90px]">
              <li onClick={closeSidebar}>
                <Link href="/" className={getNavLinkClass("/")}>Home</Link>
              </li>
              <li onClick={closeSidebar}>
                <Link href="/services" className={getNavLinkClass("/services")}>Services</Link>
              </li>
        
              {/* Mobile Portfolio Dropdown */}
              <li>
                <button
                  onClick={() => setIsMobilePortfolioOpen(!isMobilePortfolioOpen)}
                  className={`w-full flex items-center justify-between ${
                    isPortfolioActive ? "text-fuchsia-400" : "text-white"
                  }`}
                >
                  <span className="px-4 py-3">Portfolio</span>
                  <svg
                    className={`w-4 h-4 mr-4 transition-transform ${isMobilePortfolioOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isMobilePortfolioOpen && (
                  <ul className="ml-4 mt-2 space-y-2 border-l-2 border-fuchsia-500/30 pl-4">
                    {portfolioItems.map((item) => (
                      <li key={item.href} onClick={closeSidebar}>
                        <Link
                          href={item.href}
                          className={`block py-2 text-sm ${
                            activeLink === item.href
                              ? "text-fuchsia-400"
                              : "text-white/70 hover:text-fuchsia-400"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
             
              <li onClick={closeSidebar}>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  hashSpy={true}
                  className={getNavLinkClass("#contact")}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
