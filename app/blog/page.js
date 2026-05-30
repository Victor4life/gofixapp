import Link from "next/link";
import { fetchGraphQL } from "@/lib/contentful";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Helper to format a date (add if you have a date field)
// import { formatDate } from "@/lib/utils";

export default async function BlogFeed() {
  const query = `
    query {
      productCollection {
        items {
          title
          slug
          shortDescription
          tag
          featuredImage { url }
          # Add date field if available
          # date
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);
  const posts = data?.productCollection?.items || [];

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-400 px-6">
        <svg className="w-12 h-12 mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
        <p className="text-xl font-light tracking-tight">No stories yet.</p>
        <p className="text-sm text-slate-400 mt-1">Check back soon.</p>
      </div>
    );
  }

  const [heroPost, ...gridPosts] = posts;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-blue-100 antialiased">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          {/* --- HERO SECTION --- */}
          {heroPost && (
            <section className="relative mb-28 lg:mb-36">
              <Link
                href={`/blog/${heroPost.slug}`}
                className="group block lg:grid lg:grid-cols-12 gap-12 items-center"
              >
                <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-2xl bg-slate-200 shadow-lg shadow-slate-200/40">
                  {heroPost.featuredImage?.url && (
                    <img
                      src={heroPost.featuredImage.url}
                      alt={heroPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="eager"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="lg:col-span-5 mt-8 lg:mt-0">
                  {/* Meta row */}
                  <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-wider text-slate-500 mb-4">
                    {heroPost.tag && (
                      <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-[10px] font-semibold">
                        {heroPost.tag}
                      </span>
                    )}
                    {/* Optional date */}
                    {/* <time dateTime={heroPost.date}>{formatDate(heroPost.date)}</time> */}
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-400">Featured</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {heroPost.title}
                  </h2>
                  <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-6">
                    {heroPost.shortDescription ||
                      "A deep dive into design thinking and modern digital experiences."}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:underline underline-offset-4 decoration-2">
                    Continue reading
                    <svg className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </section>
          )}

          {/* --- GRID SECTION --- */}
          <div className="border-t border-slate-200 pt-12 mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Latest articles</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
            {gridPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col"
              >
                <div className="aspect-[4/5] h-[320px] rounded-xl overflow-hidden bg-slate-100 mb-6 relative">
                  {post.featuredImage?.url && (
                    <img
                      src={post.featuredImage.url}
                      alt={post.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-95"
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                  )}
                  <div className="absolute top-3 left-3 backdrop-blur-md bg-white/80 px-2.5 py-1 rounded-full border border-white/50 shadow-sm">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">
                      {post.tag || "Article"}
                    </span>
                  </div>
                </div>

                <h4 className="text-xl font-bold leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">
                  {post.shortDescription}
                </p>
                {/* Optional: small author/date line */}
                {/* <div className="mt-4 flex items-center text-xs text-slate-400">
                  <span>5 min read</span>
                  <span className="mx-2">·</span>
                  <time>{formatDate(post.date)}</time>
                </div> */}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}