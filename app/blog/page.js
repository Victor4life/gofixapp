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

  // LOG THIS: Look at your terminal (where you ran npm run dev)
  // It will show you exactly what Contentful is sending back.
  console.log("Contentful Data:", data);

  const posts = data?.productCollection?.items || [];

  if (posts.length === 0) {
    return (
      <div className="p-20 text-center">
        No posts found. Check your API IDs and Publish status.
      </div>
    );
  }

  const heroPost = posts[0];
  const gridPosts = posts.slice(1);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Hero Section */}
          {heroPost && (
            <section className="mb-32">
              <Link
                href={`/blog/${heroPost.slug}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 group"
              >
                <div className="lg:col-span-7 overflow-hidden rounded-2xl bg-slate-100">
                  {heroPost.featuredImage?.url && (
                    <img
                      src={heroPost.featuredImage.url}
                      alt=""
                      className="w-full h-[450px] object-cover"
                    />
                  )}
                </div>
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 bg-slate-100 px-2 py-1 w-fit">
                    {heroPost.tag || "News"}
                  </span>
                  <h2 className="text-4xl font-semibold mb-6 group-hover:text-blue-600 transition-colors">
                    {heroPost.title}
                  </h2>
                  <p className="text-slate-500 text-lg mb-8">
                    {heroPost.shortDescription || "No description provided."}
                  </p>
                  <button className="bg-slate-900 text-white px-8 py-3 rounded-md w-fit">
                    Read more
                  </button>
                </div>
              </Link>
            </section>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {gridPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-6">
                  {post.featuredImage?.url && (
                    <img
                      src={post.featuredImage.url}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                  {post.tag || "News"}
                </span>
                <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
                <p className="text-slate-500 text-sm line-clamp-2">
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
