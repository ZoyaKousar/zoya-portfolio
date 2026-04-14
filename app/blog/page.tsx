import { PortableText } from "@portabletext/react";
import { client } from "../../sanity/lib/client";
import { Http2ServerRequest } from "http2";
const components = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold my-4 text-fuchsia-400">
        {children}
      </h1>
    ),

    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold my-3 text-white">
        {children}
      </h2>
    ),

    normal: ({ children }: any) => (
      <p className="text-white/80 leading-relaxed mb-4">
        {children}
      </p>
    ),
  },

  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-white">
        {children}
      </strong>
    ),

    em: ({ children }: any) => (
      <em className="italic text-fuchsia-300">
        {children}
      </em>
    ),
  },
};

async function getPosts() {
  const query = `*[_type == "post"]{
    _id,
    title,
    description,
    tags,
    content,
    "slug": slug.current
  }`;

  return await client.fetch(query);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-b from-[#0F103F] to-[#0a0a2a] text-white">

      <h1 className="text-5xl font-bold text-center mb-12 text-fuchsia-400">
        Blog
      </h1>

      <div className="max-w-4xl mx-auto space-y-10">
        {posts.map((post: any) => (
          <div
            key={post._id}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
          >

            {/* TITLE */}
            <h2 className="text-5xl font-bold  text-fuchsia-300 mb-6">
              {post.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-white/70 mb-4">
              {post.description}
            </p>

            {/* TAGS */}
            <div className="text-1xl text-fuchsia-300 mb-6">
              {post.tags?.join(" • ")}
            </div>

            {/* CONTENT (IMPORTANT FIX) */}
          <div className="prose prose-invert max-w-none">
            <PortableText value={post.content || []} components={components} /> 
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}