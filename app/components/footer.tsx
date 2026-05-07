"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function Footer() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col items-center justify-between px-16 py-6 w-full min-h-[289px] rounded-tl-3xl rounded-tr-3xl bg-[#2F2F8A] bg-opacity-10 border border-solid border-white border-opacity-10 backdrop-blur-md max-md:px-6 max-md:py-8 max-md:max-w-full">

            <div className="flex flex-col items-start mt-4 w-full max-w-6xl mx-auto max-md:mx-0 md:mt-6 md:items-center">
                <p className="mb-3 px-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50 md:hidden">
                    Explore
                </p>
                <nav
                    className="flex flex-col gap-0.5 mb-8 w-full px-2 text-left md:mb-6 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-6 md:gap-y-2 md:text-center"
                    aria-label="Footer"
                >
                    {FOOTER_LINKS.map(({ href, label }) => {
                        const active = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={[
                                    "inline-flex min-h-[44px] w-full items-center justify-start rounded-lg px-2 py-2 -mx-2 text-base font-medium leading-snug tracking-normal transition-colors duration-200 md:min-h-0 md:w-auto md:justify-center md:px-1 md:py-1.5 md:text-lg md:mx-0",
                                    active
                                        ? "border-l-[3px] border-fuchsia-400 bg-white/5 pl-3 text-fuchsia-200 md:border-l-0 md:border-b-2 md:border-fuchsia-400 md:bg-transparent md:pb-1 md:pl-2"
                                        : "border-l-[3px] border-transparent pl-3 text-white/90 hover:text-fuchsia-200 md:border-l-0 md:border-b-2 md:border-transparent md:pl-2 md:hover:border-fuchsia-400/40",
                                ].join(" ")}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex w-full items-center justify-start gap-5 border-t border-white/15 pt-6 px-2 md:justify-center md:border-t-0 md:pt-0 md:px-0">
                    <Link
                        href="https://www.linkedin.com/in/zoyaadnan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:bg-white/15 hover:ring-fuchsia-400/30"
                        aria-label="LinkedIn profile"
                    >
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
                        <img
                            src="/github-icon.png"
                            alt=""
                            className="h-6 w-6 object-contain"
                        />
                    </Link>
                </div>
            </div>

            <div className="mt-8 w-full border-t border-white/25 md:mt-6" />

            <div className="w-full px-2 pt-4 text-center text-xs leading-relaxed text-white/75 md:text-sm md:text-white/85">
                © 2026 Zoya. All Rights Reserved.
            </div>
        </div>
    );
}
