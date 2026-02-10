"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    const isActiveLink = (path: string) => pathname === path ? "text-[#C961DE]" : "text-white";

    return (
        <div className="flex flex-col items-center justify-between px-16 py-6 w-full min-h-[289px] rounded-tl-3xl rounded-tr-3xl bg-[#2F2F8A] bg-opacity-10 border border-solid border-white border-opacity-10 backdrop-blur-md max-md:px-5 max-md:max-w-full">

            {/* Center Section - Menu */}
            <div className="flex flex-col items-center mt-6 w-full">
                <div className="flex text-sm justify-center gap-10 text-base tracking-tight text-gray-50 mb-6 leading-50px flex-wrap">
                    <Link href="/" className={`cursor-pointer text-sm md:text-lg transition-colors duration-300 ${isActiveLink("/")} hover:text-fuchsia-400`}>
                        Home
                    </Link>
                    <Link href="/services" className={`cursor-pointer text-sm md:text-lg transition-colors duration-300 ${isActiveLink("/services")} hover:text-fuchsia-400`}>
                        Services
                    </Link>
                    <Link href="/portfolio" className={`cursor-pointer text-sm md:text-lg transition-colors duration-300 ${isActiveLink("/portfolio")} hover:text-fuchsia-400`}>
                        Portfolio
                    </Link>
                    <Link href="/shopify-case-studies" className={`cursor-pointer text-sm md:text-lg transition-colors duration-300 ${isActiveLink("/shopify-case-studies")} hover:text-fuchsia-400`}>
                        Shopify Case Studies
                    </Link>
                    <Link href="/seo-portfolio" className={`cursor-pointer text-sm md:text-lg transition-colors duration-300 ${isActiveLink("/seo-portfolio")} hover:text-fuchsia-400`}>
                        SEO Portfolio
                    </Link>
                    <Link href="/qa-portfolio" className={`cursor-pointer text-sm md:text-lg transition-colors duration-300 ${isActiveLink("/qa-portfolio")} hover:text-fuchsia-400`}>
                        QA Portfolio
                    </Link>
                    <Link href="/blissWithZoya" className={`cursor-pointer text-sm md:text-lg transition-colors duration-300 ${isActiveLink("/blissWithZoya")} hover:text-fuchsia-400`}>
                        Bliss with Zoya
                    </Link>
                </div>
                {/* Logo Section */}
                <div className="flex justify-center gap-8 mt-4">
                    {/* <a href="https://www.upwork.com/freelancers/~01823bc1bb1258ae0a?mp_source=share" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/footer-upwork.png"
                            alt="Upwork"
                            className="h-10 object-contain"
                        />
                    </a> */}
                    {/* <a href="https://www.fiverr.com/zoyakousar?up_rollout=true" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/footer-fiverr.png"
                            alt="Fiverr"
                            className="h-10 object-contain"
                        />
                    </a> */}
                    <Link href="https://www.linkedin.com/in/zoyaadnan" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/footer-linkedin.png"
                            alt="LinkedIn"
                            className="h-10 object-contain"
                        />
                    </Link>
                    <Link href="https://github.com/ZoyaKousar" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/github-icon.png"
                            alt="Github"
                            className="h-10 object-contain"
                        />
                    </Link>
                </div>

            </div>

            {/* Divider */}
            <div className="w-full border-t border-white border-opacity-20"></div>

            {/* Bottom Section - Copyright */}
            <div className="w-full text-center text-sm text-white">
                © 2025 Zoya. All Rights Reserved.
            </div>
        </div>
    );
}
