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

  return (
    // bg-blue-50 is a very light, modern blue
    <main className="min-h-screen bg-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Go-Fix <span className="text-blue-600">Insights</span>
          </h1>
          <p className="text-lg text-slate-600">
            Expert repair tips and artisan stories from our community.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-blue-100 flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.featuredImage?.url}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <div className="mt-auto pt-6 flex items-center text-blue-600 font-semibold">
                    Read Guide
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
