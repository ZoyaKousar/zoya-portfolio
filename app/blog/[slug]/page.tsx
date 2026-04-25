import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type BlogPost = {
  _id: string;
  title: string;
  description?: string;
  mainImage?: unknown;
  publishedAt?: string;
  body?: TypedObject[];
  authorName?: string;
};

const portableTextComponents = {
  types: {
    image: ({ value }: { value: { asset?: unknown; alt?: string } }) => {
      if (!value?.asset) return null;
      return (
        <div className="my-8 overflow-hidden rounded-2xl">
          <img
            src={urlFor(value as never).width(1600).fit("max").auto("format").url()}
            alt={value.alt || "Blog image"}
            className="h-auto w-full rounded-2xl object-cover"
          />
        </div>
      );
    },
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
    "authorName": author->name
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

  if (!post) {
    notFound();
  }

  return (
    <section className="mt-28 w-full px-0 pb-20">
      <article className="animate-[fadeUp_0.7s_ease-out] w-full overflow-hidden bg-[#f4f5f8] shadow-[0_12px_36px_rgba(10,10,30,0.18)] lg:rounded-[32px]">
        {post.mainImage ? (
          <img
            src={urlFor(post.mainImage).width(1600).height(850).fit("crop").url()}
            alt={post.title}
            className="h-[290px] w-full object-cover sm:h-[420px] lg:h-[520px]"
          />
        ) : null}

        <div className="px-0 pb-10 pt-8 text-[#111216] sm:px-2 lg:px-6">
          <div className="flex flex-wrap items-center justify-end gap-4 text-[26px]">
            <FaWhatsapp className="cursor-pointer transition hover:text-[#25D366]" />
            <FaFacebookF className="cursor-pointer transition hover:text-[#1877F2]" />
            <FaLinkedinIn className="cursor-pointer transition hover:text-[#0A66C2]" />
            <FaXTwitter className="cursor-pointer transition hover:text-black" />
          </div>

          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">{post.title}</h1>

          <p className="mt-4 text-base font-semibold uppercase tracking-[0.08em] text-slate-600 sm:text-lg">
            {post.authorName || "Admin"} Published{" "}
            {post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString("en-GB")
              : "Draft"}
          </p>

          <div className="my-8 h-[2px] w-full rounded bg-black/30" />

          {post.description ? (
            <p className="mb-8 text-xl leading-relaxed text-slate-800 sm:text-2xl">{post.description}</p>
          ) : null}

          <div className="max-w-none text-lg leading-relaxed text-slate-800 sm:text-[1.28rem] lg:text-[1.36rem] [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_p]:mb-6 [&_li]:mb-2">
            <PortableText value={post.body || []} components={portableTextComponents} />
          </div>

          <div className="mt-10">
            <Link
              href="/Blog"
              className="inline-flex items-center rounded-full bg-[#111216] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
            >
              Back to all blogs
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}

