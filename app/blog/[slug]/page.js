import Link from "next/link";
import { fetchGraphQL } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SidebarActions from "@/components/SidebarActions";

export default async function BlogPost({ params }) {
  // Await params for Next.js 15+ compatibility
  const { slug } = await params;

  const query = `
    query {
      productCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          title
          tag
          author
          sys { firstPublishedAt }
          body { json }
          featuredImage { url }
        }
      }
      suggestions: productCollection(where: { slug_not: "${slug}" }, limit: 3) {
        items {
          title
          slug
          tag
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);
  const post = data?.productCollection?.items[0];
  const suggestions = data?.suggestions?.items || [];

  if (!post)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        Post not found
      </div>
    );

  // Format the date (e.g., January 25, 2026)
  const publishDate = new Date(post.sys.firstPublishedAt).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Top Nav Bar */}
      <nav className="border-b border-slate-100 py-6 px-6 sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/blog"
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            ← Back to all articles
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:grid lg:grid-cols-12 lg:gap-20">
        {/* MAIN CONTENT (Left) */}
        <article className="lg:col-span-8">
          <header className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6 block">
              {post.tag || "Insights"}
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight tracking-tight">
              {post.title}
            </h1>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 border-b border-slate-100">
              <span className="font-medium text-slate-900">
                {post.author || "Go-Fix Team"}
              </span>
              <div className="w-1 h-1 rounded-full bg-slate-300"></div>
              <div>{publishDate}</div>
              <div className="w-1 h-1 rounded-full bg-slate-300"></div>
              <div>5 min read</div>
            </div>
          </header>

          {/* Shorter Featured Image */}
          {post.featuredImage && (
            <div className="mb-12 rounded-2xl overflow-hidden bg-slate-50 h-[400px]">
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="prose prose-lg prose-slate max-w-none prose-p:leading-relaxed">
            {documentToReactComponents(post.body.json)}
          </div>
        </article>

        {/* SIDEBAR (Right) */}
        <aside className="lg:col-span-4 mt-20 lg:mt-0">
          <div className="sticky top-32 space-y-12">
            {/* Share Section */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                Share this article
              </h4>
              <SidebarActions postTitle={post.title} />
            </div>

            {/* Suggestions Section */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                Recommended for you
              </h4>
              <div className="space-y-6">
                {suggestions.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="block group"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-1 block">
                      {item.tag || "News"}
                    </span>
                    <h5 className="text-md font-semibold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug">
                      {item.title}
                    </h5>
                  </Link>
                ))}
              </div>
            </div>

            {/* Subscribe Box */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-semibold mb-2">Stay updated</h3>
              <p className="text-sm text-slate-500 mb-6">
                Weekly repair hacks from pros.
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 mb-3 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-black transition-all">
                Join Now
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
