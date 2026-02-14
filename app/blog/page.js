import Link from "next/link";
import { fetchGraphQL } from "@/lib/contentful";
import Navbar from "@/components/Navbar";

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
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);
  const posts = data?.productCollection?.items || [];

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-400">
        <p className="text-xl font-light tracking-tight">No stories found.</p>
      </div>
    );
  }

  const [heroPost, ...gridPosts] = posts;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
          {/* --- HERO SECTION --- */}
          {heroPost && (
            <section className="relative mb-24 lg:mb-32">
              <Link
                href={`/blog/${heroPost.slug}`}
                className="group block lg:grid lg:grid-cols-12 gap-16 items-center"
              >
                <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-[16/9] overflow-hidden rounded-3xl bg-slate-200 shadow-2xl shadow-slate-200/50">
                  {heroPost.featuredImage?.url && (
                    <img
                      src={heroPost.featuredImage.url}
                      alt={heroPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="lg:col-span-5 mt-8 lg:mt-0">
                  <div className="inline-flex items-center rounded-full bg-white border border-slate-200 px-3 py-1 mb-6 shadow-sm">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
                      Featured {heroPost.tag && `• ${heroPost.tag}`}
                    </span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1] group-hover:text-blue-600 transition-colors duration-300">
                    {heroPost.title}
                  </h2>
                  <p className="text-slate-500 text-lg lg:text-xl mb-8 leading-relaxed font-light">
                    {heroPost.shortDescription ||
                      "Elevating the standard of digital exploration through thoughtful design."}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-slate-900 group-hover:translate-x-2 transition-transform duration-300">
                    Read Story <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            </section>
          )}

          {/* --- GRID SECTION --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {gridPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col"
              >
                <div className="aspect-[4/5] h-[300px] rounded-2xl overflow-hidden bg-slate-100 mb-8 relative">
                  {post.featuredImage?.url && (
                    <img
                      src={post.featuredImage.url}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      alt={post.title}
                    />
                  )}
                  {/* Glass Tag Overlay */}
                  <div className="absolute top-4 left-4 backdrop-blur-md bg-white/70 px-3 py-1 rounded-full border border-white/40">
                    <span className="text-[9px] font-black uppercase tracking-tighter text-slate-800">
                      {post.tag || "Insight"}
                    </span>
                  </div>
                </div>

                <h4 className="text-2xl font-bold mb-3 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h4>
                <p className="text-slate-500 text-base leading-relaxed line-clamp-2 font-light">
                  {post.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
