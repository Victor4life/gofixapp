import Link from "next/link";
import { fetchGraphQL } from "@/lib/contentful";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  Mail,
  Search,
  Wrench,
} from "lucide-react";

export default async function BlogFeed() {
  /*
   * ============================================================
   * CONTENTFUL / CMS DATA
   * ============================================================
   */

  const query = `
    query {
      productCollection {
        items {
          title
          slug
          shortDescription
          tag
          featuredImage {
            url
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query);
  const posts = data?.productCollection?.items || [];

  /*
   * ============================================================
   * EMPTY STATE
   * ============================================================
   */

  if (posts.length === 0) {
    return (
      <>

        <main className="flex min-h-[70vh] items-center justify-center bg-white px-6">
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eef3ff]">
              <Wrench className="text-[#0645d8]" size={28} />
            </div>

            <h1 className="text-2xl font-semibold text-[#000b76]">
              No stories yet.
            </h1>

            <p className="mt-2 text-sm text-[#7182ad]">
              Check back soon for helpful home improvement tips.
            </p>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  /*
   * ============================================================
   * POSTS
   * ============================================================
   */

  const [heroPost, ...gridPosts] = posts;

  /*
   * Build category counts from CMS tags
   */

  const categoryMap = {};

  posts.forEach((post) => {
    const category = post.tag || "Home Improvement";

    categoryMap[category] = (categoryMap[category] || 0) + 1;
  });

  const categories = Object.entries(categoryMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  /*
   * ============================================================
   * PAGE
   * ============================================================
   */

  return (
    <>

      <main className="min-h-screen bg-white text-[#000b76]">
        {/* ======================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#000b76] text-white">
          <Navbar />
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid min-h-[520px] items-center gap-10 pb-24 pt-16 lg:grid-cols-2 lg:pt-12">
              {/* LEFT */}
              <div className="relative z-10 max-w-[620px]">
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xs font-medium uppercase tracking-[0.08em]">
                    Our Blog
                  </span>

                  <span className="h-px w-10 bg-white/70" />
                </div>

                <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-6xl lg:text-[64px]">
                  Tips, Guides &
                  <br />
                  Home Improvement
                  <br />
                  Inspiration
                </h1>

                <p className="mt-6 max-w-[540px] text-base leading-7 text-white/85 md:text-lg">
                  Discover helpful tips, expert advice, and the latest trends
                  in home repairs and improvements. Stay informed and make
                  better decisions for your home.
                </p>
              </div>

              {/* RIGHT */}
              <div className="relative flex min-h-[370px] items-end justify-center lg:min-h-[450px]">
                {/* Decorative circle */}
                <div className="absolute left-[10%] top-[12%] h-14 w-14 rounded-full bg-[#1557d6]" />

                {/* Large blue shape */}
                <div className="absolute bottom-0 right-[2%] h-[300px] w-[440px] rotate-[-7deg] rounded-[48%_52%_45%_55%] bg-[#4d83ed] lg:h-[350px] lg:w-[500px]" />

                {/* Light shape */}
                <div className="absolute bottom-[10%] right-[12%] h-[300px] w-[300px] rounded-full bg-[#72a0fa]/60" />

                {/* Decorative curve */}
                <div className="absolute left-[3%] top-[25%] h-[190px] w-[190px] rotate-[-25deg] rounded-full border border-white/80 border-b-transparent border-r-transparent" />

                {/* Artisan image */}
                <div className="relative z-10 h-[390px] w-[390px] lg:h-[470px] lg:w-[460px]">
                  <img
                    src="/images/blog-mann.png"
                    alt="GoFix artisan holding a power drill"
                    className="h-full w-full object-contain object-bottom"
                  />
                </div>

                {/* Decorative lines */}
                <div className="absolute right-[8%] top-[8%] flex gap-2">
                  <span className="h-7 w-1 rotate-[30deg] rounded-full bg-white" />
                  <span className="h-4 w-1 rotate-[30deg] rounded-full bg-white" />
                </div>
              </div>
            </div>
          </div>

          {/* HERO WAVE */}
          <div className="absolute bottom-[-1px] left-0 w-full">
            <svg
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
              className="block h-[65px] w-full"
            >
              <path
                d="M0 15C180 75 350 90 550 68C770 44 930 25 1120 52C1260 72 1360 65 1440 40V100H0V15Z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* ======================================================
            BLOG CONTENT
        ====================================================== */}

        <section className="px-6 py-14 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
              {/* ==================================================
                  MAIN BLOG COLUMN
              ================================================== */}

              <div>
                {/* Heading */}
                <div className="mb-8">
                  <h2 className="text-3xl font-semibold tracking-[-0.025em] md:text-4xl">
                    Latest Articles
                  </h2>

                  <p className="mt-2 text-sm text-[#7182ad] md:text-base">
                    Browse our latest blog posts and get inspired.
                  </p>
                </div>

                {/* ==================================================
                    ARTICLE GRID
                ================================================== */}

                <div className="grid gap-x-7 gap-y-12 md:grid-cols-2">
                  {gridPosts.map((post, index) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group"
                    >
                      {/* Image */}
                      <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-xl bg-[#eef3ff]">
                        {post.featuredImage?.url ? (
                          <img
                            src={post.featuredImage.url}
                            alt={post.title}
                            loading={index < 2 ? "eager" : "lazy"}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <Wrench
                              size={30}
                              className="text-[#0645d8]/40"
                            />
                          </div>
                        )}

                        {/* Category */}
                        <div className="absolute left-3 top-3">
                          <span className="rounded-full bg-[#0645d8] px-3 py-1.5 text-[10px] font-semibold text-white shadow-sm">
                            {post.tag || "Home Improvement"}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold leading-snug tracking-[-0.015em] transition-colors group-hover:text-[#0645d8]">
                        {post.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#7182ad]">
                        {post.shortDescription ||
                          "Discover helpful information and practical advice for your home."}
                      </p>

                      {/* Meta */}
                      <div className="mt-4 flex items-center gap-4 text-xs text-[#7182ad]">
                        <span className="flex items-center gap-1.5">
                          <CalendarDays size={14} />
                          Aug 2025
                        </span>

                        <span className="flex items-center gap-1.5">
                          <Clock3 size={14} />
                          5 min read
                        </span>
                      </div>

                      {/* Read more */}
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0645d8]">
                        Read More
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </Link>
                  ))}
                </div>

                {/* ==================================================
                    PAGINATION
                ================================================== */}

                <div className="mt-14 flex items-center justify-center gap-2">
                  <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1f5ff] text-[#0645d8]"
                  >
                    <ChevronRight
                      size={16}
                      className="rotate-180"
                    />
                  </button>

                  <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0645d8] text-sm font-semibold text-white"
                  >
                    1
                  </button>

                  <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-sm text-[#000b76] hover:bg-[#f1f5ff]"
                  >
                    2
                  </button>

                  <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-sm text-[#000b76] hover:bg-[#f1f5ff]"
                  >
                    3
                  </button>

                  <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-sm text-[#000b76] hover:bg-[#f1f5ff]"
                  >
                    4
                  </button>

                  <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1f5ff] text-[#0645d8]"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* ==================================================
                  SIDEBAR
              ================================================== */}

              <aside className="space-y-5">
                {/* Search */}
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search articles..."
                    className="h-12 w-full rounded-lg border border-[#dbe5fa] bg-white pl-4 pr-11 text-sm text-[#000b76] outline-none placeholder:text-[#9aa8c7] focus:border-[#0645d8] focus:ring-2 focus:ring-[#0645d8]/10"
                  />

                  <Search
                    size={18}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0645d8]"
                  />
                </div>

                {/* Popular categories */}
                <div className="rounded-xl bg-[#f1f6ff] p-5">
                  <h3 className="text-xl font-semibold">
                    Popular Categories
                  </h3>

                  <div className="mt-4 space-y-2">
                    {categories.map(([category, count]) => (
                      <div
                        key={category}
                        className="flex items-center justify-between rounded-lg bg-white px-3 py-3"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e6efff]">
                            <Wrench
                              size={15}
                              className="text-[#0645d8]"
                            />
                          </div>

                          <span className="truncate text-xs font-medium">
                            {category}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs text-[#7182ad]">
                            {count}
                          </span>

                          <ChevronRight
                            size={14}
                            className="text-[#7182ad]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Artisan CTA */}
                <div className="relative overflow-hidden rounded-xl bg-[#000b76] p-6 text-white">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#0645d8]/60" />

                  <div className="relative z-10">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80">
                      Need a professional?
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold leading-tight">
                      Find Trusted
                      <br />
                      Artisans Near You
                    </h3>

                    <p className="mt-3 text-xs leading-5 text-white/75">
                      Get quality home repair and improvement services from
                      verified skilled professionals.
                    </p>

                    <Link
                      href="/post-a-job"
                      className="group mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-xs font-semibold text-[#000b76]"
                    >
                      Post a Job

                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="rounded-xl bg-[#f1f6ff] p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <Mail
                      size={18}
                      className="text-[#0645d8]"
                    />
                  </div>

                  <h3 className="text-xl font-semibold">
                    Subscribe to Our Newsletter
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#7182ad]">
                    Get the latest tips, guides and offers delivered to your
                    inbox.
                  </p>

                  <form className="mt-5 flex overflow-hidden rounded-lg border border-[#cbdafa] bg-white">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="min-w-0 flex-1 bg-transparent px-3 py-3 text-xs text-[#000b76] outline-none placeholder:text-[#9aa8c7]"
                    />

                    <button
                      type="submit"
                      aria-label="Subscribe"
                      className="flex w-11 shrink-0 items-center justify-center bg-[#0645d8] text-white"
                    >
                      <ArrowRight size={17} />
                    </button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ======================================================
            BLOG CTA
        ====================================================== */}

        <section className="px-6 pb-5 lg:px-12">
          <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[22px] bg-[#000b76] px-7 py-7 text-white md:px-10">
            {/* Decorative shape */}
            <div className="absolute -right-10 -top-20 h-56 w-56 rounded-full bg-[#0645d8]/40" />

            <div className="relative z-10 flex flex-col items-center gap-5 md:flex-row">
              {/* Logo mark */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 border-white text-2xl font-bold">
                G
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2 className="text-xl font-semibold md:text-2xl">
                  Ready to get your home projects done?
                </h2>

                <p className="mt-1 text-xs text-white/75 md:text-sm">
                  Post a job today and connect with trusted artisans in your
                  area.
                </p>
              </div>

              <Link
                href="/post-a-job"
                className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-xs font-semibold text-[#000b76]"
              >
                Post a Job

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}