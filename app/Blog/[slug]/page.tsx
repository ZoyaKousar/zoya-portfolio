import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ReadingProgress from "./ReadingProgress";

type BlogPost = {
  _id: string;
  title: string;
  description?: string;
  mainImage?: unknown;
  publishedAt?: string;
  body?: TypedObject[];
  authorName?: string;
};

function normalizeAuthorName(name?: string) {
  const trimmed = (name || "").trim();
  if (!trimmed) return "Zoya Kou";
  if (trimmed.toLowerCase() === "admin") return "Zoya Kou";
  return trimmed;
}

function estimateReadingTime(body?: TypedObject[]) {
  if (!body?.length) return 5;
  let words = 0;
  for (const block of body) {
    const children = (block as { children?: { text?: string }[] }).children;
    if (Array.isArray(children)) {
      for (const child of children) {
        if (child?.text) words += child.text.split(/\s+/).filter(Boolean).length;
      }
    }
  }
  return Math.max(3, Math.round(words / 200));
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: { asset?: unknown; alt?: string; caption?: string } }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-10 overflow-hidden rounded-2xl bg-slate-100 shadow-lg ring-1 ring-black/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={urlFor(value as never).width(1600).fit("max").auto("format").url()}
            alt={value.alt || "Blog image"}
            className="h-auto w-full object-cover"
            loading="lazy"
          />
          {value.caption ? (
            <figcaption className="px-4 py-2.5 text-center text-xs italic text-slate-500">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-14 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
        <span className="inline-block border-b-2 border-fuchsia-300 pb-2">{children}</span>
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="mb-6 text-[1.04rem] leading-8 text-slate-800 sm:text-[1.12rem]">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="relative my-10 overflow-hidden rounded-2xl border-l-4 border-fuchsia-500 bg-gradient-to-r from-fuchsia-50 via-fuchsia-50/30 to-transparent px-6 py-6 text-lg italic leading-8 text-slate-800 shadow-sm sm:text-xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-8 mt-2 space-y-2.5 pl-1 text-[1.02rem] leading-7 text-slate-800 sm:text-[1.08rem]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-8 mt-2 list-decimal space-y-2.5 pl-6 text-[1.02rem] leading-7 text-slate-800 sm:text-[1.08rem]">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-3 leading-7">
        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-500" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => <li className="pl-1 leading-7">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-fuchsia-600 underline decoration-fuchsia-300 underline-offset-2 transition-colors hover:text-fuchsia-700"
      >
        {children}
      </a>
    ),
  },
};

async function getPost(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    description,
    mainImage,
    publishedAt,
    body,
    authorName
  }`;

  return client.fetch(query, { slug });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const author = normalizeAuthorName(post.authorName);
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Draft";
  const readingTime = estimateReadingTime(post.body);

  return (
    <>
      <ReadingProgress />

      <section className="relative min-h-screen w-full pb-20 pt-24 sm:pt-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-12">
            {/* White reading surface */}
            <article className="relative w-full min-w-0 max-w-3xl animate-[fadeUp_0.7s_ease-out] overflow-hidden rounded-3xl bg-white px-5 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:px-8 sm:py-10 lg:mx-0">
              {/* Eyebrow */}
              <span className="inline-flex items-center gap-2 rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-700 ring-1 ring-fuchsia-200">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-500" />
                Insights
              </span>

              {/* Title */}
              <h1 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
                {post.title}
              </h1>

              {/* Author + share */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-sm font-bold text-white shadow-md shadow-fuchsia-300/40">
                    {author.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-900">{author}</span>
                    <span className="text-xs text-slate-500">
                      Published {date} · {readingTime} min read
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[20px] text-slate-500">
                  <FaWhatsapp className="cursor-pointer transition hover:scale-110 hover:text-[#25D366]" />
                  <FaFacebookF className="cursor-pointer transition hover:scale-110 hover:text-[#1877F2]" />
                  <FaLinkedinIn className="cursor-pointer transition hover:scale-110 hover:text-[#0A66C2]" />
                  <FaXTwitter className="cursor-pointer transition hover:scale-110 hover:text-black" />
                </div>
              </div>

              {/* Lead / description */}
              {post.description ? (
                <p className="mt-8 text-lg leading-relaxed text-slate-700 sm:text-xl">
                  {post.description}
                </p>
              ) : null}

              {/* Hero image */}
              {post.mainImage ? (
                <figure className="mt-8 overflow-hidden rounded-3xl bg-slate-50 shadow-xl ring-1 ring-slate-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={urlFor(post.mainImage).width(1600).height(900).fit("crop").auto("format").url()}
                    alt={post.title}
                    className="h-auto w-full object-cover"
                  />
                </figure>
              ) : null}

              {/* Body */}
              <div className="pb-4 pt-2 text-[#111216]">
                <PortableText value={post.body || []} components={portableTextComponents} />
              </div>

              {/* CTA */}
              <div className="mt-12 flex flex-col items-start gap-4 overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-50 via-white to-indigo-50 p-6 shadow-md ring-1 ring-fuchsia-200 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <p className="text-lg font-bold text-slate-900 sm:text-xl">
                    Want results like these for your business?
                  </p>
                  <p className="mt-1 text-sm text-slate-600 sm:text-base">
                    Let&apos;s build something that actually moves the needle.
                  </p>
                </div>
                <Link
                  href="/#contact"
                  className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#c961de] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#c961de]/25 transition hover:bg-[#b050c8] hover:shadow-[#c961de]/40"
                >
                  Hire me
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
              </div>

              {/* Back link */}
              <div className="mt-10">
                <Link
                  href="/Blog"
                  className="group inline-flex items-center gap-1 rounded-full bg-[#111216] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
                >
                  <span className="transition-transform group-hover:-translate-x-0.5">←</span>
                  Back to all blogs
                </Link>
              </div>
            </article>

            {/* Sticky sidebar */}
            <aside className="mt-12 hidden w-72 shrink-0 lg:mt-2 lg:block">
              <div className="sticky top-28 space-y-6">
                {/* Author card */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-base font-bold text-white shadow-md shadow-fuchsia-300/40">
                      {author.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900">{author}</span>
                      <span className="text-xs text-slate-500">Full-Stack Digital Manager</span>
                    </div>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600">
                    Helping USA businesses scale through smart marketing, CRM, and AI-driven funnels.
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#c961de] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-[#c961de]/25 transition hover:bg-[#b050c8]"
                  >
                    Hire me →
                  </Link>
                </div>

                {/* Share */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Share this article
                  </p>
                  <div className="flex items-center gap-3 text-[18px] text-slate-500">
                    <FaWhatsapp className="cursor-pointer transition hover:scale-110 hover:text-[#25D366]" />
                    <FaFacebookF className="cursor-pointer transition hover:scale-110 hover:text-[#1877F2]" />
                    <FaLinkedinIn className="cursor-pointer transition hover:scale-110 hover:text-[#0A66C2]" />
                    <FaXTwitter className="cursor-pointer transition hover:scale-110 hover:text-black" />
                  </div>
                </div>

                {/* More */}
                <div className="rounded-2xl bg-gradient-to-br from-fuchsia-50 via-white to-indigo-50 p-5 shadow-sm ring-1 ring-fuchsia-200">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-fuchsia-700">
                    Keep reading
                  </p>
                  <p className="text-sm leading-relaxed text-slate-700">
                    Explore more guides on marketing, automation, and growth.
                  </p>
                  <Link
                    href="/Blog"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-fuchsia-600 transition hover:text-fuchsia-700"
                  >
                    View all articles →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
