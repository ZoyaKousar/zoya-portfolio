import type { BlogCardPost } from "../card";

/**
 * Locally-authored blog posts that live outside Sanity.
 * They share the same card shape so they appear seamlessly in the listing,
 * but each one has its own static `/Blog/<slug>` route under `app/Blog/`.
 */
export const localBlogPosts: BlogCardPost[] = [
  {
    _id: "local-top-digital-marketing-experts",
    slug: "top-digital-marketing-experts",
    title: "Top Digital Marketing Experts in the USA: Proven Strategies for 2026 Success",
    description:
      "Unlock growth with top digital marketing experts in the USA for 2026 — SEO, AI marketing, and full-service strategies that deliver real ROI.",
    publishedAt: "2026-05-22T00:00:00.000Z",
    authorName: "Zoya Kou",
    coverImage: "/blog11.png",
  },
  {
    _id: "local-best-virtual-assistant-services",
    slug: "best-virtual-assistant-services",
    title: "Best Virtual Assistant Services Transforming US Businesses in 2026",
    description:
      "Discover how the best virtual assistant services in the USA help businesses cut costs by up to 60%, save hours, and scale faster in 2026.",
    publishedAt: "2026-05-23T00:00:00.000Z",
    authorName: "Zoya Kou",
    coverImage: "/blog13.png",
  },
];
