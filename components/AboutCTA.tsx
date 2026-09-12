import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-[#000b76] py-20 md:py-24 lg:py-28">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[360px] w-[360px] rounded-full bg-[#1458e8]/40 blur-2xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-20 h-[430px] w-[430px] rounded-full bg-[#1458e8]/30" />

      <div className="pointer-events-none absolute right-[12%] top-16 h-16 w-16 rounded-full border border-white/20" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] px-7 py-14 text-center backdrop-blur-sm md:px-12 md:py-16 lg:px-20">
          {/* Small icon */}
          <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
            <Wrench
              size={25}
              strokeWidth={2}
              className="text-[#000b76]"
            />
          </div>

          {/* Label */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-blue-200">
            Ready to get started?
          </p>

          {/* Heading */}
          <h2 className="mx-auto max-w-[760px] text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
            Find the right artisan
            <br />
            for your home project.
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-[590px] text-base leading-7 text-white/70 md:text-lg">
            Whether you need a quick repair or you're planning a bigger
            project, GoFix makes it easier to find the help you need.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/categories"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#000b76] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Find an Artisan
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              Contact GoFix
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}