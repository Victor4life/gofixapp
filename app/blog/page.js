import Link from "next/link";
import { fetchGraphQL } from "@/lib/contentful";

export default async function BlogFeed() {
  const data = await fetchGraphQL(`
    query {
      productCollection {
        items {
          title
          slug
          featuredImage { url }
        }
      }
    }
  `);

  const posts = data?.productCollection?.items || [];
  const heroPost = posts[0];
  const gridPosts = posts.slice(1);

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-6xl font-medium tracking-tight mb-8">
            Blog & articles
          </h1>

          {/* Category Filter Bar (Visual Only) */}
          <div className="flex flex-wrap gap-3 mb-16">
            {[
              "All",
              "Repair Tips",
              "Maintenance",
              "Artisan Stories",
              "Success",
            ].map((tag, i) => (
              <span
                key={tag}
                className={`px-5 py-2 rounded-full border text-sm font-medium transition-colors ${i === 0 ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Hero Post Section */}
        {heroPost && (
          <section className="mb-32">
            <Link
              href={`/blog/${heroPost.slug}`}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 group"
            >
              <div className="lg:col-span-7 overflow-hidden rounded-2xl">
                <img
                  src={heroPost.featuredImage?.url}
                  alt=""
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 inline-block bg-slate-100 px-2 py-1 w-fit">
                  News
                </span>
                <h2 className="text-4xl font-semibold mb-6 group-hover:text-blue-600 transition-colors leading-tight">
                  {heroPost.title}
                </h2>
                <p className="text-slate-500 text-lg mb-8 line-clamp-3">
                  Discover professional insights and strategies designed to help
                  you maintain your equipment and optimize your home repair
                  workflows.
                </p>
                <button className="bg-slate-900 text-white px-8 py-3 rounded-md w-fit font-medium hover:bg-slate-800 transition-all">
                  Read more
                </button>
              </div>
            </Link>
          </section>
        )}

        {/* Latest Insights Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2 text-slate-500 font-medium text-sm">
            <div className="w-2 h-2 rounded-full bg-slate-900"></div>
            Blog and articles
          </div>
          <h3 className="text-4xl font-semibold">Latest insights and trends</h3>
        </div>

        {/* Secondary Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {gridPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="overflow-hidden rounded-xl mb-6 bg-slate-100 aspect-[4/3]">
                <img
                  src={post.featuredImage?.url}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 inline-block bg-slate-100 px-2 py-0.5">
                News
              </span>
              <h4 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                {post.title}
              </h4>
              <p className="text-slate-500 text-sm line-clamp-2">
                Expert strategies to streamline your repair processes and
                enhance productivity.
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
