import BlogCards, { BlogCardPost } from "./card";
import { client } from "@/sanity/lib/client";
import HeroMedia from "./HeroMedia";

async function getPosts(): Promise<BlogCardPost[]> {
  const query = `*[
    _type == "post"
    && defined(slug.current)
    && defined(title)
    && defined(mainImage)
    && defined(publishedAt)
    && !(_id in path("drafts.**"))
  ] | order(publishedAt desc){
    _id,
    title,
    description,
    "slug": slug.current,
    mainImage,
    publishedAt,
    "authorName": "Laiba Sheikh"
  }`;

  return client.fetch(query);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="mt-24 w-full pb-20">
      <div className="relative h-[38vh] min-h-[240px] w-full overflow-hidden sm:h-[44vh] lg:h-screen">
        <HeroMedia videoSrc="/videos/video_6a03c4aa458b.mp4" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,8,24,0.45),rgba(0,8,24,0.62))]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <p className="animate-[fadeUp_0.6s_ease-out] text-sm font-semibold uppercase tracking-[0.28em] text-[#7dd3fc]">
            Insights
          </p>
          <h1 className="animate-[fadeUp_0.8s_ease-out] text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            My Blogs
          </h1>
          <p className="animate-[fadeUp_1s_ease-out] mt-3 max-w-3xl text-sm text-white/90 sm:text-base md:text-lg">
            Sharing Knowledge Through Powerful & Insightful Blog Content.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        {posts.length > 0 ? (
          <BlogCards posts={posts} />
        ) : (
          <div className="rounded-3xl bg-[#f4f5f8] p-8 text-center text-xl font-semibold text-slate-700">
            No blogs yet. Publish a post in Sanity and it will show here.
          </div>
        )}
      </div>
    </section>
  );
}
