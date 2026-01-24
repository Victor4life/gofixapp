import Link from "next/link";
import { fetchGraphQL } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function BlogPost({ params }) {
  // 1. Await params to avoid the Next.js 15 destructuring error
  const { slug } = await params;

  // 2. Fetch the specific "Product" (Blog) post using the slug
  const query = `
    query {
      productCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          title
          body { json }
          featuredImage { url }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);
  const post = data?.productCollection?.items[0];

  // 3. Handle cases where the slug doesn't match an entry
  if (!post) {
    return (
      <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold text-slate-800">Article not found</h1>
        <Link href="/blog" className="mt-4 text-blue-600 hover:underline">
          Return to Blog Feed
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-blue-50 pb-20">
      {/* Header Section */}
      <header className="bg-white border-b border-blue-100 pt-20 pb-12 mb-12 shadow-sm">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="group flex items-center text-blue-600 font-medium mb-8 transition-colors hover:text-blue-800"
          >
            <span className="mr-2 transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back to repair guides
          </Link>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6">
        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative mb-12 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className="relative w-full rounded-3xl shadow-2xl object-cover max-h-[500px]"
            />
          </div>
        )}

        {/* Content Body */}
        <article
          className="prose prose-lg prose-blue max-w-none text-slate-700 leading-relaxed
          prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-slate-900
          prose-img:rounded-2xl prose-img:shadow-md
          prose-code:text-blue-600 prose-code:bg-blue-100 prose-code:px-1 prose-code:rounded"
        >
          {/* Converts Contentful JSON to beautiful HTML */}
          {documentToReactComponents(post.body.json)}
        </article>

        {/* Footer/CTA */}
        <footer className="mt-20 pt-10 border-t border-blue-100 text-center">
          <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Need a pro's help?
            </h3>
            <p className="text-slate-600 mb-6">
              Our artisans are ready to fix your project today.
            </p>
            <Link
              href="/book-artisan"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
            >
              Book an Artisan
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
