import Link from "next/link";
import { fetchGraphQL } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SidebarActions from "@/components/SidebarActions";

export default async function BlogPost({ params }) {
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
          featuredImage { url }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);
  const post = data?.productCollection?.items[0];
  const suggestions = data?.suggestions?.items || [];

  if (!post) return <div className="min-h-screen flex items-center justify-center font-light">Story not found.</div>;

  const publishDate = new Date(post.sys.firstPublishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] selection:bg-blue-50">
      {/* Subtle Progress Bar (Visual only, would need client-side logic for actual progress) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-100 z-50">
        <div className="bg-blue-600 h-full w-1/3 transition-all duration-300"></div>
      </div>

      <nav className="sticky top-0 bg-white/70 backdrop-blur-xl border-b border-slate-50 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/blog" className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">
            <span className="mr-2">←</span> Back to Journal
          </Link>
          <div className="hidden md:block text-[11px] font-medium text-slate-400 uppercase tracking-tighter italic">
            Currently Reading: <span className="text-slate-900 not-italic ml-1">{post.title}</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 lg:grid lg:grid-cols-12 lg:gap-24">
        {/* MAIN CONTENT */}
        <article className="lg:col-span-8">
          <header className="mb-12">
            <div className="flex items-center space-x-3 mb-8">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                {post.tag || "Insight"}
              </span>
              <span className="text-slate-300 text-sm">•</span>
              <span className="text-slate-500 text-sm font-medium">{publishDate}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-[1.05] text-slate-950">
              {post.title}
            </h1>

            <div className="flex items-center justify-between py-6 border-y border-slate-50">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-blue-200">
                  {post.author?.[0] || "G"}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-none mb-1">{post.author || "Go-Fix Team"}</p>
                  <p className="text-xs text-slate-400 font-medium tracking-tight">Technical Contributor • 6 min read</p>
                </div>
              </div>
            </div>
          </header>

          {post.featuredImage && (
            <div className="mb-16 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/60">
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className="w-full aspect-[16/9] object-cover hover:scale-[1.02] transition-transform duration-1000"
              />
            </div>
          )}

          {/* Typography-optimized Body */}
          <div className="prose prose-lg prose-slate max-w-none 
            prose-p:text-slate-600 prose-p:leading-[1.8] prose-p:mb-8 
            prose-headings:text-slate-900 prose-headings:font-bold 
            prose-strong:text-slate-900 prose-blockquote:italic prose-blockquote:border-l-blue-600
            prose-img:rounded-3xl prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
            {documentToReactComponents(post.body.json)}
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4 mt-24 lg:mt-0">
          <div className="sticky top-32 space-y-16">
            
            <section>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8 pb-2 border-b border-slate-100">
                Share Perspective
              </h4>
              <SidebarActions postTitle={post.title} />
            </section>

            <section>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8 pb-2 border-b border-slate-100">
                Next Reads
              </h4>
              <div className="space-y-10">
                {suggestions.map((item) => (
                  <Link key={item.slug} href={`/blog/${item.slug}`} className="group block">
                    <p className="text-[10px] font-bold text-blue-600 uppercase mb-2 tracking-widest">{item.tag}</p>
                    <h5 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight tracking-tight">
                      {item.title}
                    </h5>
                  </Link>
                ))}
              </div>
            </section>

            {/* Newsletter Card */}
            <section className="relative p-8 rounded-[2rem] bg-slate-900 text-white overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 bg-blue-600/20 rounded-full blur-3xl"></div>
              <h3 className="text-xl font-bold mb-3 relative z-10">The Fix Weekly</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed relative z-10">
                Join 5,000+ creators receiving our best repair hacks and industry insights.
              </p>
              <div className="space-y-3 relative z-10">
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                />
                <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-all active:scale-[0.98]">
                  Subscribe
                </button>
              </div>
            </section>
          </div>
        </aside>
      </div>
    </main>
  );
}