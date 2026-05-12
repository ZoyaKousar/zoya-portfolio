"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronUp, Instagram, Mail } from "lucide-react";

/** Update to your real Instagram profile URL */
const INSTAGRAM_URL = "https://www.instagram.com/zoyaadnan/";

/** Same pages as the original single-row footer — split across columns for layout only. */
const FOOTER_LINKS: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/Blog", label: "Blog" },
  { href: "/shopify-case-studies", label: "Shopify Case Studies" },
  { href: "/seo-portfolio", label: "SEO Portfolio" },
  { href: "/digital-marketing", label: "Digital Marketing" },
  { href: "/qa-portfolio", label: "QA Portfolio" },
  { href: "/blissWithZoya", label: "Bliss with Zoya" },
];

const EXPERTISE_LINKS = [
  FOOTER_LINKS[1],
  FOOTER_LINKS[4],
  FOOTER_LINKS[5],
  FOOTER_LINKS[6],
  FOOTER_LINKS[7],
];

const EXPLORE_LINKS = [
  FOOTER_LINKS[0],
  FOOTER_LINKS[2],
  FOOTER_LINKS[3],
  FOOTER_LINKS[8],
];

function FooterNavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={[
        "block min-w-0 max-w-full py-1.5 text-sm leading-snug transition-colors duration-200 md:text-[15px]",
        active
          ? "font-semibold text-fuchsia-200"
          : "text-white/90 hover:text-fuchsia-200",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 360);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative mt-auto w-full min-w-0 max-md:max-w-full rounded-tl-3xl rounded-tr-3xl border border-zinc-800 bg-black px-4 py-10 sm:px-8 md:px-10 lg:px-12 lg:py-12 xl:px-16"
    >
      <div className="mx-auto w-full min-w-0 max-w-6xl">
        <div className="grid min-w-0 grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-8 xl:gap-x-8">
          {/* Brand */}
          <div className="min-w-0 text-left lg:col-span-3">
            <Link
              href="/"
              className="inline-block outline-none ring-offset-2 ring-offset-black focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
            >
              <Image
                src="/zoya-logo-new.png"
                alt="Zoya Kou"
                width={280}
                height={80}
                className="h-14 w-auto max-w-[min(100%,280px)] object-contain sm:h-16 md:h-[4.5rem]"
              />
            </Link>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="https://www.linkedin.com/in/zoyaadnan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:bg-white/15 hover:ring-fuchsia-400/30"
                aria-label="LinkedIn profile"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/footer-linkedin.png"
                  alt=""
                  className="h-6 w-6 object-contain"
                />
              </Link>
              <Link
                href="https://github.com/ZoyaKousar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:bg-white/15 hover:ring-fuchsia-400/30"
                aria-label="GitHub profile"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/github-icon.png" alt="" className="h-6 w-6 object-contain" />
              </Link>
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:bg-white/15 hover:ring-fuchsia-400/30"
                aria-label="Instagram profile"
              >
                <Instagram className="h-6 w-6 text-white" strokeWidth={1.75} />
              </Link>
            </div>
          </div>

          {/* Expertise — single column list */}
          <div className="min-w-0 text-left lg:col-span-4">
            <h2 className="text-base font-semibold tracking-wide text-white md:text-[17px]">
              Expertise
            </h2>
            <ul className="mt-4 min-w-0 space-y-0" aria-label="Expertise links">
              {EXPERTISE_LINKS.map((item) => (
                <li key={item.href} className="min-w-0">
                  <FooterNavLink {...item} />
                </li>
              ))}
            </ul>
          </div>

          {/* Explore — same links as the old “Explore” set */}
          <div className="min-w-0 text-left lg:col-span-2">
            <h2 className="text-base font-semibold tracking-wide text-white md:text-[17px]">
              Explore
            </h2>
            <ul className="mt-4 space-y-0" aria-label="Explore links">
              {EXPLORE_LINKS.map((item) => (
                <li key={item.href}>
                  <FooterNavLink {...item} />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — wider column so email wraps cleanly */}
          <div className="min-w-0 text-left lg:col-span-3">
            <h2 className="text-base font-semibold tracking-wide text-white md:text-[17px]">
              Contact
            </h2>
            <ul className="mt-4 max-w-full space-y-4 text-sm text-white/90 md:text-[15px]">
              <li className="flex min-w-0 max-w-full items-start gap-3">
                <Mail
                  className="mt-1 h-4 w-4 shrink-0 text-fuchsia-300/90"
                  aria-hidden
                />
                <a
                  href="mailto:zoyakou2@gmail.com"
                  className="min-w-0 flex-1 text-white/90 [overflow-wrap:anywhere] underline-offset-2 transition-colors hover:text-fuchsia-200"
                >
                  zoyakou2@gmail.com
                </a>
              </li>
              <li className="min-w-0">
                <Link
                  href="/#contact"
                  className="inline-flex max-w-full font-medium text-fuchsia-200/95 transition-colors hover:text-fuchsia-100"
                >
                  Contact form →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/25 pb-6 pt-8 text-center text-xs leading-relaxed text-white/75 max-sm:px-1 md:text-sm md:text-white/85">
          © 2026 Zoya. All Rights Reserved.
        </div>
      </div>

      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 z-[100] flex h-11 w-11 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900 text-white shadow-lg shadow-black/50 backdrop-blur-sm transition hover:border-fuchsia-400/50 hover:bg-zinc-800 hover:text-fuchsia-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-400/70 sm:right-5 md:bottom-8 md:right-8 md:h-12 md:w-12"
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.5} />
        </button>
      )}
    </footer>
  );
}
