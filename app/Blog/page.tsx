import BlogCards, { BlogCardPost } from "./card";
import { client } from "@/sanity/lib/client";
import HeroMedia from "./HeroMedia";
import { localBlogPosts } from "./_data/localPosts";

async function getPosts(): Promise<BlogCardPost[]> {
  const query = `*[
    _type == "post"
    && defined(slug.current)
    && defined(title)
    && !(_id in path("drafts.**"))
  ] | order(publishedAt desc){
    _id,
    title,
    description,
    "slug": slug.current,
    mainImage,
    publishedAt,
    authorName
  }`;

  try {
    return await client.fetch(query);
  } catch {
    return [];
  }
}

/** Merge Sanity + locally-authored posts, newest first */
function mergePosts(remote: BlogCardPost[]): BlogCardPost[] {
  const remoteSlugs = new Set(remote.map((p) => p.slug));
  const locals = localBlogPosts.filter((p) => !remoteSlugs.has(p.slug));
  return [...remote, ...locals].sort((a, b) => {
    const da = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const db = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return db - da;
  });
}

export default async function BlogPage() {
  const remote = await getPosts();
  const posts = mergePosts(remote);

  return (
    <section className="mt-24 w-full pb-24">
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[260px] w-full overflow-hidden sm:h-[46vh] lg:h-[60vh]">
        <HeroMedia videoSrc="/videos/video_6a03c4aa458b.mp4" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,12,46,0.55),rgba(10,12,46,0.85))]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-300">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            Insights
          </span>
          <h1 className="animate-[fadeUp_0.8s_ease-out] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            My <span className="text-gradient-primary">Blogs</span>
          </h1>
          <p className="animate-[fadeUp_1s_ease-out] mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base md:text-lg">
            Sharing knowledge through powerful &amp; insightful blog content — automation, growth, CRM, web &amp; more.
          </p>
        </div>

        {/* subtle fade into page */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#0a0c2e]" />
      </div>

      {/* Section heading */}
      <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center gap-2 text-center md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-300/90">
            Latest articles
          </p>
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Recent <span className="text-fuchsia-500">Stories</span>
          </h2>
          <div className="mt-2 h-px w-20 bg-gradient-to-r from-transparent via-fuchsia-400/70 to-transparent" />
        </div>

        {posts.length > 0 ? (
          <BlogCards posts={posts} />
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-10 text-center text-base font-medium text-white/80 backdrop-blur-sm">
            No blogs yet. Publish a post in Sanity and it will show here.
          </div>
        )}
      </div>
    </section>
  );
}
