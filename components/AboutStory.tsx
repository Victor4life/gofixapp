import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT — TEXT */}
          <div className="relative z-10 max-w-[560px]">
            {/* Section label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-wide text-[#1458e8]">
                Our Story
              </span>

              <span className="h-px w-12 bg-[#1458e8]" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-[#000b76] md:text-5xl">
              Why GoFix
              <br />
              was created
            </h2>

            {/* Paragraphs */}
            <div className="mt-6 space-y-5 text-base leading-7 text-slate-500 md:text-lg">
              <p>
                Finding a reliable artisan can be stressful. We've all been
                there — searching, comparing, and still not sure who to trust.
              </p>

              <p>
                GoFix was built to change that. We created a platform where
                homeowners can easily find, book and hire verified
                professionals for any home project, big or small.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/how-it-works"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#1458e8] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-200/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#000b76]"
            >
              Learn More
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="relative">
            {/* Decorative blue blob */}
            <div className="absolute -right-12 top-[-25px] h-[280px] w-[280px] rounded-[48%_52%_55%_45%] bg-[#dce8ff] md:h-[360px] md:w-[360px]" />

            <div className="absolute -left-8 bottom-[-30px] h-[170px] w-[170px] rounded-full bg-[#edf4ff]" />

            {/* Image container */}
            <div className="relative z-10 overflow-hidden rounded-[28px] bg-slate-100 shadow-xl shadow-slate-200/50">
              <div className="aspect-[1.35/1]">
                <img
                  src="/images/about-story.jpg"
                  alt="GoFix artisan working on a home project"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Verified artisans card */}
            <div className="absolute -bottom-7 right-[-10px] z-20 flex w-[220px] items-center gap-4 rounded-2xl bg-white p-4 shadow-xl shadow-slate-300/30 md:right-[-25px] md:w-[245px]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e5efff]">
                <ShieldCheck
                  size={25}
                  strokeWidth={2}
                  className="text-[#1458e8]"
                />
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#000b76]">
                  Verified Artisans
                </h3>

                <p className="mt-1 text-xs leading-4 text-slate-400">
                  Skilled. Trusted.
                  <br />
                  Ready to help.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}