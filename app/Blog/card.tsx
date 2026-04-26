"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

export type BlogCardPost = {
  _id: string;
  title: string;
  description?: string;
  slug: string;
  mainImage?: unknown;
  publishedAt?: string;
  authorName?: string;
};

type BlogCardsProps = {
  posts: BlogCardPost[];
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fallbackBlogImages = [
  "/software-testing-qa-blog-technical-writing.jpg",
  "/web-application-testing-quality-assurance-dashboar.jpg",
  "/drone-technology-rc-news-blog-website.jpg",
  "/ai-seo-technology.jpg",
];

export default function BlogCards({ posts }: BlogCardsProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="grid gap-7 sm:grid-cols-2 xl:grid-cols-2"
    >
      {posts.map((post, index) => (
        <motion.div
          key={post._id}
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ y: -6 }}
          className="h-full"
        >
          <Link href={`/Blog/${post.slug}`} className="group block h-full">
            <article className="blog-card-animate relative h-full overflow-hidden rounded-[26px] bg-[#e5e5e8] p-4 shadow-[0_12px_24px_rgba(15,23,42,0.14)] transition-all duration-300 group-hover:shadow-[0_18px_34px_rgba(15,23,42,0.2)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/25 via-transparent to-slate-100/20 opacity-95" />
              {post.mainImage ? (
                <img
                  src={urlFor(post.mainImage).width(900).height(520).fit("crop").url()}
                  alt={post.title}
                  className="relative z-10 h-52 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-[1.03] sm:h-56"
                />
              ) : (
                <img
                  src={fallbackBlogImages[index % fallbackBlogImages.length]}
                  alt="Blog cover"
                  className="relative z-10 h-52 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-[1.03] sm:h-56"
                />
              )}

              <div className="relative z-10 flex flex-1 flex-col pb-2 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
                  {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-GB") : "Draft"}
                </p>

                <h2 className="mt-2 line-clamp-2 text-2xl font-extrabold leading-tight text-slate-900">
                  {post.title}
                </h2>

                <div className="my-4 h-px w-full bg-slate-400/50" />

                <p className="line-clamp-3 text-base leading-7 text-slate-700">
                  {post.description || "Open this blog to read the full article."}
                </p>
              </div>
            </article>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

