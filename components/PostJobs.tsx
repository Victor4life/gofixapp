"use client";

import { ArrowRight } from "lucide-react";

export default function PostJobCTA() {
  return (
    <section className="w-full px-6 py-1 md:px-10 lg:px-9">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[28px] bg-[#092c70]">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

        {/* Decorative dots */}
        <div className="pointer-events-none absolute left-[35%] top-1/2 hidden -translate-y-1/2 opacity-70 md:block">
          <div className="grid grid-cols-5 gap-2.5">
            {Array.from({ length: 30 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-blue-400/70"
              />
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[175px] items-center">
          {/* LEFT CONTENT */}
          <div className="relative z-20 w-full px-7 py-8 sm:px-9 md:w-[52%] md:px-10 md:py-10 lg:w-[48%] lg:px-11">
            <h2 className="max-w-[390px] text-[23px] font-semibold leading-[1.2] tracking-[-0.025em] text-white md:text-[25px] lg:text-[26px]">
              Quality work. Trusted artisans.
              <br />
              Satisfaction guaranteed.
            </h2>

            <p className="mt-3 max-w-[330px] text-[11px] leading-[1.6] text-blue-100 md:text-[12px]">
              Join thousands of happy customers
              <br className="hidden sm:block" />
              who get things done with GoFix.
            </p>

            {/* CTA */}
            <button
              type="button"
              className="group mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-[11px] font-semibold text-[#092c70] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
            >
              Post a Job Now

              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* CUSTOMER IMAGE */}
          <div className="absolute inset-y-0 right-0 hidden w-[58%] md:block">
            {/* Image fade into background */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#092c70] via-[#092c70]/50 to-transparent" />

            <img
              src="/images/image.png"
              alt="Happy GoFix customer"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Mobile image */}
          <div className="relative h-[190px] w-full md:hidden">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#092c70] via-[#092c70]/30 to-transparent" />

            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1000&q=85"
              alt="Happy GoFix customer"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
