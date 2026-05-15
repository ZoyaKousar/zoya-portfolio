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
  { name: "Digital Marketing", href: "/digital-marketing" },
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
    setActiveLink(pathname ?? "");
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

  const navPillBase =
    "nav-link-hover inline-flex cursor-pointer items-center justify-center rounded-full border border-transparent px-4 py-1.5 text-sm font-semibold tracking-tight transition-all duration-300 ease-out will-change-transform xl:px-6 xl:text-sm";

  const navInactiveHover =
    "text-white/90 hover:-translate-y-0.5 hover:border-[#c961de]/80 hover:bg-[#c961de] hover:text-white hover:shadow-md hover:shadow-[#c961de]/35";

  const navActiveStyles =
    "bg-[#c961de] border-[#c961de] text-white [-webkit-text-fill-color:white] shadow-md shadow-[#c961de]/35 hover:bg-[#b050c8] hover:border-[#b050c8]";

  const getNavLinkClass = (link: string) => {
    const isActive =
      activeLink === link ||
      (link !== "/" && activeLink.startsWith(link));
    return `${navPillBase} ${isActive ? navActiveStyles : navInactiveHover}`;
  };

  const isPortfolioActive = portfolioItems.some(item => activeLink === item.href);

  const isHome = pathname === "/";
  const contactNavClass = getNavLinkClass("#contact");
  const onContactNavigate = () => {
    setActiveLink("#contact");
    setIsPortfolioOpen(false);
    closeSidebar();
  };

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#0a0c2e]/82 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl backdrop-saturate-150">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/35 to-transparent" aria-hidden />
        <div className="relative mx-auto flex max-w-[90rem] items-center justify-between px-4 py-2 sm:px-6 sm:py-2.5 lg:justify-center">
        {/* Mobile Logo */}
        <div className="lg:hidden flex items-center">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative rounded-2xl border border-transparent px-1 py-0.5 transition-colors duration-300"
            >
              <motion.img
                src="/zoya-logo-new.png"
                alt="Logo"
                className="h-20 sm:h-20 md:h-20"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
               
              />
            </motion.div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-2 lg:flex xl:gap-3">
          <Link href="/" onClick={() => setActiveLink("/")}>
            <div className={getNavLinkClass("/")}>Home</div>
          </Link>
          <Link href="/services" onClick={() => setActiveLink("/services")}>
            <div className={getNavLinkClass("/services")}>Services</div>
          </Link>
          <Link href="/Blog" onClick={() => setActiveLink("/Blog")}>
            <div className={getNavLinkClass("/Blog")}>Blog</div>
          </Link>

          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative rounded-2xl border border-transparent px-2 py-1 transition-colors duration-300"
            >
              <motion.img
                loading="lazy"
                src="/zoya-logo-new.png"
                className="h-20 cursor-pointer object-contain sm:h-20 md:h-20"
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
              type="button"
              onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
              className={`${navPillBase} flex items-center gap-2 ${
                isPortfolioActive ? navActiveStyles : navInactiveHover
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
              <div className="absolute left-1/2 top-full z-50 mt-3 w-[min(100vw-2rem,16rem)] -translate-x-1/2 overflow-hidden rounded-2xl border border-fuchsia-500/25 bg-[#0c0e38]/95 py-1.5 shadow-2xl shadow-fuchsia-500/25 backdrop-blur-xl">
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
                      className={`mx-1.5 rounded-xl border border-transparent px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                        activeLink === item.href
                          ? "border-fuchsia-400/45 bg-gradient-to-r from-fuchsia-600/25 to-indigo-600/25 text-fuchsia-200 shadow-inner hover:border-[#c961de]/80 hover:bg-[#c961de] hover:text-white"
                          : "text-white/85 hover:border-[#c961de]/80 hover:bg-[#c961de] hover:text-white"
                      }`}
                    >
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
      
          {isHome ? (
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              hashSpy={true}
              onClick={() => {
                setActiveLink("#contact");
                setIsPortfolioOpen(false);
              }}
              className={contactNavClass}
            >
              Contact
            </ScrollLink>
          ) : (
            <Link href="/#contact" onClick={onContactNavigate} className={contactNavClass}>
              Contact
            </Link>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          type="button"
          onClick={toggleSidebar}
          className="rounded-full border border-white/20 bg-white/10 p-2.5 transition-all duration-300 hover:border-[#c961de]/80 hover:bg-[#c961de] hover:shadow-md hover:shadow-[#c961de]/35 lg:hidden"
          aria-expanded={isSidebarOpen}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        >
          <img
            src={isSidebarOpen ? "/cross-icon.svg" : "/main-menu.png"}
            alt=""
            className="h-6 w-6"
          />
        </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm" onClick={closeSidebar}>
          <div
            className="fixed right-0 top-0 z-50 h-full w-[min(100%,18rem)] border-l border-fuchsia-500/20 bg-[#0a0c2e]/96 p-6 pt-24 text-white shadow-[-16px_0_48px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:w-72 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="mt-2 space-y-1">
              <li onClick={closeSidebar} className="rounded-xl px-1">
                <Link
                  href="/"
                  className={`${getNavLinkClass("/")} flex w-full justify-start`}
                >
                  Home
                </Link>
              </li>
              <li onClick={closeSidebar} className="rounded-xl px-1">
                <Link
                  href="/services"
                  className={`${getNavLinkClass("/services")} flex w-full justify-start`}
                >
                  Services
                </Link>
              </li>
              <li onClick={closeSidebar} className="rounded-xl px-1">
                <Link
                  href="/Blog"
                  className={`${getNavLinkClass("/Blog")} flex w-full justify-start`}
                >
                  Blog
                </Link>
              </li>

              {/* Mobile Portfolio Dropdown */}
              <li>
                <button
                  type="button"
                  onClick={() => setIsMobilePortfolioOpen(!isMobilePortfolioOpen)}
                  className={`flex w-full items-center justify-between rounded-xl border border-transparent px-3 py-3 transition-all duration-300 ${
                    isPortfolioActive
                      ? "border-fuchsia-400/45 bg-fuchsia-600/20 text-fuchsia-200 hover:border-[#c961de]/80 hover:bg-[#c961de] hover:text-white"
                      : "text-white/90 hover:border-[#c961de]/80 hover:bg-[#c961de] hover:text-white"
                  }`}
                >
                  <span className="font-semibold">Portfolio</span>
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
                  <ul className="ml-1 mt-2 space-y-1 border-l-2 border-fuchsia-500/40 py-1 pl-3">
                    {portfolioItems.map((item) => (
                      <li key={item.href} onClick={closeSidebar}>
                        <Link
                          href={item.href}
                          className={`block rounded-lg border border-transparent py-2.5 pl-2 text-sm font-medium transition-all duration-200 ${
                            activeLink === item.href
                              ? "border-fuchsia-400/45 bg-fuchsia-600/20 text-fuchsia-100 hover:border-[#c961de]/80 hover:bg-[#c961de] hover:text-white"
                              : "text-white/75 hover:border-[#c961de]/80 hover:bg-[#c961de] hover:text-white"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
             
              <li onClick={closeSidebar} className="rounded-xl px-1">
                {isHome ? (
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    hashSpy={true}
                    onClick={() => setActiveLink("#contact")}
                    className={`${contactNavClass} flex w-full cursor-pointer justify-start`}
                  >
                    Contact
                  </ScrollLink>
                ) : (
                  <Link
                    href="/#contact"
                    onClick={onContactNavigate}
                    className={`${contactNavClass} flex w-full cursor-pointer justify-start`}
                  >
                    Contact
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;

