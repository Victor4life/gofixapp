import Link from "next/link";
import { fetchGraphQL } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
          sys {
            firstPublishedAt
          }
          body {
            json
          }
          featuredImage {
            url
          }
        }
      }

      suggestions: productCollection(
        where: { slug_not: "${slug}" }
        limit: 3
      ) {
        items {
          title
          slug
          tag
          featuredImage {
            url
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);

  const post = data?.productCollection?.items?.[0];
  const suggestions = data?.suggestions?.items || [];

  if (!post) {
    return (
      <>
        <Navbar />

        <main className="min-h-[70vh] flex items-center justify-center bg-white px-6">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-[#000b76]">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-[#000b76]">
              Story not found
            </h1>

            <p className="mt-3 text-sm text-slate-500">
              The article you're looking for doesn't exist or may have been
              removed.
            </p>

            <Link
              href="/blog"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#000b76] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Back to Blog
              <span>→</span>
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  const publishDate = post.sys?.firstPublishedAt
    ? new Date(post.sys.firstPublishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#000b76] text-white">
        {/* Navbar */}
        <Navbar />

        {/* Decorative background shapes */}
        <div className="pointer-events-none absolute right-[8%] top-[125px] h-20 w-20 rounded-full bg-blue-600/70 blur-[1px]" />

        <div className="pointer-events-none absolute -right-32 top-32 h-[420px] w-[420px] rounded-full border border-white/10" />

        <div className="pointer-events-none absolute right-[5%] top-[210px] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid min-h-[570px] items-center gap-12 pb-36 pt-14 lg:grid-cols-12 lg:gap-16">
            {/* LEFT */}
            <div className="lg:col-span-7">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white">
                  {post.tag || "GoFix Blog"}
                </span>

                <span className="h-px w-10 bg-white/70" />
              </div>

              <h1 className="max-w-[800px] text-4xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-5xl md:text-6xl lg:text-[64px]">
                {post.title}
              </h1>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/75">
                <span className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-xs font-bold text-white">
                    {post.author?.[0] || "G"}
                  </span>

                  <span>{post.author || "GoFix Team"}</span>
                </span>

                {publishDate && (
                  <>
                    <span className="h-1 w-1 rounded-full bg-white/40" />
                    <span>{publishDate}</span>
                  </>
                )}

                <span className="h-1 w-1 rounded-full bg-white/40" />

                <span>6 min read</span>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#000b76] transition-all hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  <span>←</span>
                  Back to Blog
                </Link>

                <a
                  href="#article"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  Read Article
                  <span>↓</span>
                </a>
              </div>
            </div>

            {/* RIGHT DECORATIVE AREA */}
            <div className="relative hidden min-h-[350px] lg:col-span-5 lg:block">
              <div className="absolute right-0 top-1/2 h-[330px] w-[330px] -translate-y-1/2 rounded-full bg-blue-500/20" />

              <div className="absolute right-16 top-1/2 h-[270px] w-[270px] -translate-y-1/2 rounded-full border border-white/20" />

              <div className="absolute right-[105px] top-[80px] h-4 w-4 rounded-full bg-blue-400" />

              <div className="absolute bottom-[65px] right-[35px] h-3 w-3 rounded-full bg-white/50" />

              <div className="absolute right-10 top-[105px] flex items-center gap-3">
                <span className="h-px w-16 bg-white/40" />
                <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                  GoFix Insights
                </span>
              </div>

              <div className="absolute bottom-[100px] right-[90px] text-8xl font-black tracking-tighter text-white/5">
                FIX
              </div>
            </div>
          </div>
        </div>

        {/* Featured image */}
        {post.featuredImage?.url && (
          <div className="absolute bottom-[-150px] left-1/2 z-20 hidden w-[min(1120px,85%)] -translate-x-1/2 lg:block">
            <div className="overflow-hidden rounded-[30px] border-[8px] border-white/10 bg-slate-200 shadow-2xl shadow-black/25">
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className="h-[470px] w-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Mobile image */}
        {post.featuredImage?.url && (
          <div className="relative z-20 mx-6 mb-[-70px] lg:hidden">
            <div className="overflow-hidden rounded-[24px] border-4 border-white/10 bg-slate-200 shadow-2xl">
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>
        )}

        {/* White wave */}
        <div className="absolute bottom-[-1px] left-0 z-10 w-full">
          <svg
            viewBox="0 0 1440 130"
            preserveAspectRatio="none"
            className="block h-[90px] w-full md:h-[110px]"
          >
            <path
              d="M0,45 C190,110 370,120 570,90 C770,60 890,35 1080,55 C1230,72 1350,70 1440,38 L1440,130 L0,130 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* =========================================================
          ARTICLE AREA
      ========================================================= */}
      <main
        id="article"
        className="bg-white text-[#000b76]"
      >
        <div className="mx-auto max-w-[1250px] px-6 pb-20 pt-28 lg:px-10 lg:pt-48">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            {/* =====================================================
                ARTICLE
            ===================================================== */}
            <article className="lg:col-span-8">
              {/* Article intro */}
              <div className="mb-12 border-b border-slate-100 pb-10">
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-600">
                    {post.tag || "Home Improvement"}
                  </span>

                  <span className="h-px w-8 bg-blue-200" />
                </div>

                <p className="max-w-3xl text-lg leading-8 text-slate-500">
                  Practical advice, helpful insights, and expert guidance from
                  GoFix to help you make better decisions for your home.
                </p>
              </div>

              {/* Rich text */}
              <div
                className="
                  prose prose-lg max-w-none

                  prose-headings:font-bold
                  prose-headings:tracking-[-0.02em]
                  prose-headings:text-[#000b76]

                  prose-h2:mb-5
                  prose-h2:mt-14
                  prose-h2:text-3xl

                  prose-h3:mb-4
                  prose-h3:mt-10
                  prose-h3:text-2xl

                  prose-p:mb-7
                  prose-p:text-[17px]
                  prose-p:leading-[1.9]
                  prose-p:text-slate-600

                  prose-li:text-slate-600
                  prose-li:leading-8

                  prose-strong:text-[#000b76]

                  prose-a:font-semibold
                  prose-a:text-blue-600
                  prose-a:no-underline
                  hover:prose-a:underline

                  prose-blockquote:rounded-r-2xl
                  prose-blockquote:border-l-4
                  prose-blockquote:border-blue-600
                  prose-blockquote:bg-blue-50
                  prose-blockquote:px-6
                  prose-blockquote:py-5
                  prose-blockquote:text-[#000b76]

                  prose-img:my-10
                  prose-img:w-full
                  prose-img:rounded-2xl
                "
              >
                {documentToReactComponents(post.body.json)}
              </div>

              {/* End article */}
              <div className="mt-16 border-t border-slate-100 pt-8">
                <div className="flex flex-wrap items-center justify-between gap-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      Written by
                    </p>

                    <p className="mt-1 font-bold text-[#000b76]">
                      {post.author || "GoFix Team"}
                    </p>
                  </div>

                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 rounded-xl border border-blue-100 px-5 py-3 text-sm font-semibold text-[#000b76] transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    More from GoFix
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* =====================================================
                SIDEBAR
            ===================================================== */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-10">
                {/* Share */}
                <section className="rounded-2xl border border-blue-100 bg-[#f7faff] p-7">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#000b76]">
                      Share this article
                    </span>

                    <span className="h-px flex-1 bg-blue-100" />
                  </div>

                  <SidebarActions postTitle={post.title} />
                </section>

                {/* Next reads */}
                <section>
                  <div className="mb-7 flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#000b76]">
                      You may also like
                    </span>

                    <span className="h-px flex-1 bg-blue-100" />
                  </div>

                  <div className="space-y-7">
                    {suggestions.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/blog/${item.slug}`}
                        className="group grid grid-cols-[105px_1fr] gap-4"
                      >
                        <div className="h-[90px] overflow-hidden rounded-xl bg-slate-100">
                          {item.featuredImage?.url ? (
                            <img
                              src={item.featuredImage.url}
                              alt={item.title}
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center bg-blue-50 text-[#000b76]">
                              <span className="text-xl">G</span>
                            </div>
                          )}
                        </div>

                        <div>
                          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
                            {item.tag || "Article"}
                          </p>

                          <h3 className="line-clamp-3 text-sm font-bold leading-5 text-[#000b76] transition-colors group-hover:text-blue-600">
                            {item.title}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* Newsletter */}
                <section className="relative overflow-hidden rounded-[24px] bg-[#000b76] p-8 text-white">
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-500/30" />

                  <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full border border-white/10" />

                  <div className="relative z-10">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.7}
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.917l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.917V6.75"
                        />
                      </svg>
                    </div>

                    <h3 className="text-2xl font-bold">
                      Get the latest from GoFix
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/70">
                      Get helpful home improvement tips, expert advice, and
                      useful GoFix updates delivered to your inbox.
                    </p>

                    <div className="mt-6 space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/45 focus:border-white/50"
                      />

                      <button
                        type="button"
                        className="w-full rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#000b76] transition hover:bg-blue-50"
                      >
                        Subscribe
                        <span className="ml-2">→</span>
                      </button>
                    </div>
                  </div>
                </section>

                {/* CTA */}
                <section className="rounded-[24px] border border-blue-100 bg-white p-7 shadow-[0_15px_45px_rgba(0,11,118,0.06)]">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                    Need a professional?
                  </p>

                  <h3 className="mt-3 text-2xl font-bold leading-tight text-[#000b76]">
                    Get the right artisan for your job.
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Find trusted professionals for repairs, maintenance, and
                    home improvement.
                  </p>

                  <Link
                    href="/artisans"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#000b76] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800"
                  >
                    Find an Artisan
                    <span>→</span>
                  </Link>
                </section>
              </div>
            </aside>
          </div>
        </div>

        {/* =========================================================
            RELATED ARTICLES
        ========================================================= */}
        {suggestions.length > 0 && (
          <section className="border-t border-slate-100 bg-[#f7faff] px-6 py-20 lg:px-12">
            <div className="mx-auto max-w-[1250px]">
              <div className="mb-10 flex items-end justify-between gap-6">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                      Keep Reading
                    </span>

                    <span className="h-px w-10 bg-blue-300" />
                  </div>

                  <h2 className="text-3xl font-bold tracking-tight text-[#000b76] md:text-4xl">
                    More from the GoFix Blog
                  </h2>
                </div>

                <Link
                  href="/blog"
                  className="hidden text-sm font-semibold text-[#000b76] transition hover:text-blue-600 sm:block"
                >
                  View all articles →
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
                {suggestions.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="group overflow-hidden rounded-[22px] bg-white shadow-[0_10px_35px_rgba(0,11,118,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,11,118,0.10)]"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                      {item.featuredImage?.url ? (
                        <img
                          src={item.featuredImage.url}
                          alt={item.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-blue-50 text-4xl font-bold text-[#000b76]">
                          G
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                        {item.tag || "Article"}
                      </p>

                      <h3 className="line-clamp-2 text-xl font-bold leading-snug text-[#000b76] transition-colors group-hover:text-blue-600">
                        {item.title}
                      </h3>

                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#000b76]">
                        Read article
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =========================================================
            CTA
        ========================================================= */}
        <section className="px-6 py-16 lg:px-12">
          <div className="relative mx-auto max-w-[1250px] overflow-hidden rounded-[26px] bg-[#000b76] px-7 py-10 text-white md:px-12 md:py-12">
            <div className="absolute right-[-50px] top-[-80px] h-60 w-60 rounded-full bg-blue-600/30" />

            <div className="absolute bottom-[-100px] left-[40%] h-60 w-60 rounded-full border border-white/10" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-blue-200">
                  Ready to get started?
                </p>

                <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                  Need help getting the job done?
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
                  Connect with trusted artisans and get your home project
                  moving today.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/artisans"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#000b76] transition hover:bg-blue-50"
                >
                  Find an Artisan
                  <span>→</span>
                </Link>

                <Link
                  href="/post-a-job"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Post a Job
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}