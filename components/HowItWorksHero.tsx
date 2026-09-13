import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function HowItWorksHero() {
  return (
    <section className="relative overflow-hidden bg-[#000b76] text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-28 pt-10 sm:px-8 lg:px-12 lg:pb-32 lg:pt-8">
        <div className="grid min-h-[500px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-0">
          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-30 max-w-[620px] pt-4 lg:pt-0">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-4">
              <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-white">
                How It Works
              </span>

              <span className="h-[1px] w-12 bg-white/80" />
            </div>

            {/* Heading */}
            <h1 className="max-w-[600px] text-[44px] font-bold leading-[1.08] tracking-[-0.025em] sm:text-[52px] lg:text-[58px]">
              How GoFix Makes
              <br />
              Getting Help Simple
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[520px] text-[16px] font-normal leading-[1.55] text-white/90 sm:text-[17px]">
              From posting your job to getting it done, GoFix
              <br className="hidden sm:block" />
              connects you with trusted artisans in just a few steps.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/artisans"
                className="group inline-flex h-[48px] items-center justify-center gap-3 rounded-[9px] bg-white px-6 text-[13px] font-semibold text-[#000b76] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f5f7ff]"
              >
                Find an Artisan
                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/post-a-job"
                className="group inline-flex h-[48px] items-center justify-center gap-3 rounded-[9px] border border-white/80 bg-transparent px-6 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#000b76]"
              >
                Post a Job
                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative min-h-[390px] lg:min-h-[500px]">
            {/* Large light-blue abstract shape */}
            <div className="absolute right-[0px] top-[45px] h-[330px] w-[330px] rounded-[48%_52%_45%_55%] bg-[#6d9cff] opacity-90 sm:h-[390px] sm:w-[390px] lg:right-[15px] lg:top-[25px] lg:h-[440px] lg:w-[440px]" />

            {/* Darker blue secondary shape */}
            <div className="absolute right-[120px] top-[105px] h-[270px] w-[270px] rounded-[50%] bg-[#1554e8] opacity-75 lg:right-[145px] lg:top-[80px] lg:h-[330px] lg:w-[330px]" />

            {/* Workshop background */}
            <div className="absolute right-[-25px] top-[80px] z-[5] h-[245px] w-[340px] overflow-hidden rounded-l-[4px] sm:right-[-35px] sm:h-[280px] sm:w-[410px] lg:right-[-45px] lg:top-[85px] lg:h-[285px] lg:w-[455px]">
              <img
                src="/images/workshop.jpg"
                alt=""
                className="h-full w-full object-cover"
              />

              {/* subtle blue overlay */}
              <div className="absolute inset-0 bg-[#000b76]/10" />
            </div>

            {/* Artisan */}
            <div className="absolute bottom-[-5px] left-1/2 z-20 h-[405px] w-[390px] -translate-x-1/2 sm:h-[450px] sm:w-[440px] lg:bottom-[-12px] lg:left-[53%] lg:h-[500px] lg:w-[490px]">
              <img
                src="/images/hero.png"
                alt="GoFix trusted artisan"
                className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain"
              />
            </div>

            {/* Floating blue circle */}
            <div className="absolute left-[12%] top-[30px] z-10 h-11 w-11 rounded-full bg-[#1458e8] sm:left-[10%] lg:left-[8%] lg:top-[45px]" />

            {/* Curved decorative arrow */}
            <svg
              className="absolute left-[7%] top-[115px] z-20 hidden lg:block"
              width="70"
              height="75"
              viewBox="0 0 70 75"
              fill="none"
            >
              <path
                d="M63 5C42 12 20 28 10 54"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
              />

              <path
                d="M8 44L10 55L20 51"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Decorative white lines */}
            <div className="absolute right-[8%] top-[55px] z-30 hidden lg:block">
              <span className="absolute h-8 w-[2px] rotate-[28deg] bg-white" />
              <span className="absolute left-5 top-1 h-6 w-[2px] rotate-[58deg] bg-white" />
              <span className="absolute left-9 top-5 h-5 w-[2px] rotate-[82deg] bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= CURVED BOTTOM ================= */}
      <div className="absolute bottom-[-1px] left-[-5%] z-30 h-[70px] w-[110%] rounded-[50%_50%_0_0/100%_100%_0_0] bg-white sm:h-[82px] lg:h-[95px]" />
    </section>
  );
}