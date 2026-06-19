"use client";

import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import { PinContainer } from "@/components/ui/3d-pin";

export type BlogCardPost = {
  _id: string;
  title: string;
  description?: string;
  slug: string;
  mainImage?: unknown;
  /** Static cover path (used by locally-authored posts that don't live in Sanity) */
  coverImage?: string;
  publishedAt?: string;
  authorName?: string;
};

type BlogCardsProps = {
  posts: BlogCardPost[];
};

const fallbackBlogImages = [
  "/software-testing-qa-blog-technical-writing.jpg",
  "/web-application-testing-quality-assurance-dashboar.jpg",
  "/drone-technology-rc-news-blog-website.jpg",
  "/ai-seo-technology.jpg",
];

export default function BlogCards({ posts }: BlogCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
      {posts.map((post, index) => {
        const cover = post.mainImage
          ? urlFor(post.mainImage).width(900).height(520).fit("crop").url()
          : post.coverImage ?? fallbackBlogImages[index % fallbackBlogImages.length];

        const date = post.publishedAt
          ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
          : "Draft";

        const pinTitle = post.title.length > 36 ? `${post.title.slice(0, 36)}…` : post.title;

        return (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex min-h-[28rem] items-center justify-center md:min-h-[30rem]"
          >
            <PinContainer
              title={pinTitle}
              href={`/Blog/${post.slug}`}
              containerClassName="flex h-[min(28rem,78vh)] w-full max-w-[20rem] items-center justify-center sm:max-w-[21rem]"
              className="w-[17rem] max-w-full sm:w-[18.5rem]"
              bgClassName="bg-white border border-slate-200 group-hover/pin:border-fuchsia-300"
            >
              <div className="flex max-h-[70vh] flex-col gap-3 overflow-y-auto text-left [scrollbar-width:thin]">
                <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-lg bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cover}
                    alt={post.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-fuchsia-600 sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
                  {date}
                </div>

                <h3 className="line-clamp-2 text-base font-bold leading-snug text-slate-900">
                  {post.title}
                </h3>

                {post.description && (
                  <p className="line-clamp-3 text-[12px] leading-relaxed text-slate-600 sm:text-xs">
                    {post.description}
                  </p>
                )}

                <div className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-fuchsia-600">
                  Read article
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover/pin:translate-x-0.5"
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
                </div>
              </div>
            </PinContainer>
          </motion.div>
        );
      })}
    </div>
  );
}
