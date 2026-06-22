"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronUp, Instagram,  Sparkles } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/zoyaadnan/";

const QUICK_TAGS = [
  "Digital Marketing",
  "Shopify",
  "SEO",
  "Web Development",
  "QA Automation",
  "Virtual Assistance",
];

const FACT_STRIP = [
  { num: "0+", label: "Years experience" },
  { num: "50+", label: "Projects delivered" },
  { num: "10+", label: "Happy clients" },
  { num: "< 24h", label: "Avg. response" },
];

export default function Footer() {
const [showScrollTop] = useState(false);
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative mt-auto w-full min-w-0 overflow-hidden rounded-tl-3xl rounded-tr-3xl border border-zinc-800 bg-black px-4 py-10 sm:px-8 md:px-10 lg:px-12 lg:py-12 xl:px-16 max-md:max-w-full">
      {/* Decorative gradient blobs */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl"
      />

      <div className="relative mx-auto w-full min-w-0 max-w-6xl">
        <div className="grid min-w-0 grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-10">
          {/* Brand */}
          <div className="min-w-0 text-left lg:col-span-4">
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

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 md:text-[15px]">
              Helping ambitious USA businesses scale through smart marketing, CRM automation, and
              AI-driven systems — measurable wins, not vanity metrics.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="https://www.linkedin.com/in/zoyaadnan"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-white/15 hover:ring-fuchsia-400/40"
                aria-label="LinkedIn profile"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/footer-linkedin.png"
                  alt=""
                  className="h-6 w-6 object-contain transition group-hover:scale-110"
                />
              </Link>
              <Link
                href="https://github.com/ZoyaKousar"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-white/15 hover:ring-fuchsia-400/40"
                aria-label="GitHub profile"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/github-icon.png"
                  alt=""
                  className="h-6 w-6 object-contain transition group-hover:scale-110"
                />
              </Link>
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-white/15 hover:ring-fuchsia-400/40"
                aria-label="Instagram profile"
              >
                <Instagram
                  className="h-6 w-6 text-white transition group-hover:scale-110"
                  strokeWidth={1.75}
                />
              </Link>
            </div>
          </div>

          {/* Unique CTA / availability panel */}
          <div className="min-w-0 lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-white/[0.03] to-indigo-500/10 p-6 backdrop-blur-sm">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-fuchsia-400/20 blur-3xl"
              />

              {/* Availability pill */}
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for new projects
              </span>

              <h3 className="mt-4 text-xl font-bold leading-snug text-white md:text-2xl">
                Have an idea? Let&apos;s turn it into{" "}
                <span className="bg-gradient-to-r from-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
                  measurable growth
                </span>
                .
              </h3>

              {/* Quick service tags */}
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Areas of work">
                {QUICK_TAGS.map((t) => (
                  <li key={t}>
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] font-medium text-white/80 transition hover:border-fuchsia-300/40 hover:bg-white/[0.08] hover:text-white">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#c961de] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#c961de]/25 transition hover:bg-[#b050c8] hover:shadow-[#c961de]/40"
                >
                  <Sparkles className="h-4 w-4" strokeWidth={2} />
                  Book a free intro call
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white/85 transition hover:border-fuchsia-300/40 hover:text-white"
                >
                  View portfolio →
                </Link>
              </div>
            </div>
          </div>

          {/* Contact */}
          {/* <div className="min-w-0 lg:col-span-3">
            <h2 className="text-base font-semibold tracking-wide text-white md:text-[17px]">
              Contact
            </h2>
            <ul className="mt-4 max-w-full space-y-4 text-sm text-white/90 md:text-[15px]">
              <li className="flex min-w-0 max-w-full items-start gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-fuchsia-300/90" aria-hidden />
                <a
                  href="mailto:zoyakou2@gmail.com"
                  className="min-w-0 flex-1 text-white/90 [overflow-wrap:anywhere] underline-offset-2 transition-colors hover:text-fuchsia-200"
                >
                  zoyakou2@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-fuchsia-300/90" aria-hidden />
                <span>Remote — serving US & global clients</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <Clock className="mt-1 h-4 w-4 shrink-0 text-fuchsia-300/90" aria-hidden />
                <span>
                  Local time:{" "}
                  <span className="font-medium text-white/95 tabular-nums">
                    {time || "—"}
                  </span>{" "}
                  <span className="text-white/55">(PKT)</span>
                </span>
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
          </div> */}
        </div>

        {/* Fact strip — quick credibility row */}
        <div className="mt-12 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:grid-cols-4 sm:gap-4 sm:p-5">
          {FACT_STRIP.map((f) => (
            <div
              key={f.label}
              className="group flex flex-col items-center justify-center rounded-xl px-3 py-3 text-center transition hover:bg-white/[0.04]"
            >
              <span className="bg-gradient-to-r from-fuchsia-300 to-indigo-300 bg-clip-text text-2xl font-black text-transparent md:text-3xl">
                {f.num}
              </span>
              <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/60 md:text-xs">
                {f.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/15 pb-6 pt-8 text-xs leading-relaxed text-white/75 max-sm:px-1 md:flex-row md:text-sm md:text-white/85">
          <p>© 2026 Zoya Kou. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 text-white/55">
            Crafted with
            <span className="text-fuchsia-300">♥</span>
            in Pakistan · for the worldd
          </p>
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
