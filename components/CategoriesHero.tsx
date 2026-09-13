import Link from "next/link";
import { MapPin, Search, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function CategoriesHero() {
  return (
    <section className="relative overflow-hidden bg-[#000b76] text-white">
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="relative min-h-[520px] lg:min-h-[535px]">
          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-30 flex max-w-[550px] flex-col pt-12 sm:pt-16 lg:pt-[62px]">
            <h1 className="text-[42px] font-bold leading-[1.05] tracking-[-0.025em] sm:text-[50px] lg:text-[56px]">
              All Categories
            </h1>

            <p className="mt-5 max-w-[390px] text-[15px] leading-[1.55] text-white/90 sm:text-[16px]">
              Find skilled and verified artisans for every
              <br className="hidden sm:block" />
              job around your home or business.
            </p>

            {/* ================= SEARCH BAR ================= */}
            <div className="relative z-40 mt-8 flex min-h-[72px] w-full max-w-[650px] items-center rounded-[13px] bg-white p-2 text-[#000b76] shadow-[0_12px_35px_rgba(0,0,0,0.18)] sm:mt-9">
              {/* SERVICE */}
              <div className="flex flex-1 items-center gap-3 px-3 sm:px-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf3ff]">
                  <Search
                    size={18}
                    strokeWidth={2}
                    className="text-[#1458e8]"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-[#10266f]">
                    What service do you need?
                  </p>

                  <p className="mt-1 truncate text-[11px] text-slate-400 sm:text-[12px]">
                    e.g. Plumbing, Electrical, Painting
                  </p>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="h-10 w-px bg-slate-200" />

              {/* LOCATION */}
              <div className="flex flex-1 items-center gap-3 px-3 sm:px-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf3ff]">
                  <MapPin
                    size={18}
                    strokeWidth={2}
                    className="text-[#1458e8]"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-[#10266f]">
                    Location
                  </p>

                  <p className="mt-1 truncate text-[11px] text-slate-400 sm:text-[12px]">
                    Enter your location
                  </p>
                </div>
              </div>

              {/* FIND ARTISAN BUTTON */}
              <Link
                href="/artisans"
                className="group flex h-[54px] shrink-0 items-center justify-center gap-2 rounded-[9px] bg-[#000b76] px-5 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#1458e8] sm:px-6"
              >
                Find Artisans

                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="pointer-events-none absolute inset-y-0 right-[-20px] hidden w-[58%] lg:block">
            {/* LARGE WHITE CIRCLE */}
            <div className="absolute right-[135px] top-[55px] h-[350px] w-[350px] rounded-full bg-white" />

            {/* BLUE ABSTRACT SHAPE */}
            <div className="absolute right-[-20px] top-[115px] h-[250px] w-[400px] rounded-[48%_52%_45%_55%] bg-[#1458e8]" />

            {/* SECONDARY BLUE SHAPE */}
            <div className="absolute right-[175px] top-[95px] h-[280px] w-[280px] rounded-[50%] bg-[#2d6ff0] opacity-70" />

            {/* WORKSHOP IMAGE */}
            <div className="absolute right-[-55px] top-[115px] z-10 h-[265px] w-[310px] overflow-hidden">
              <img
                src="/images/workshop.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* ARTISAN */}
            <div className="absolute bottom-[-5px] left-[38%] z-20 h-[390px] w-[350px]">
              <img
                src="/images/hero.png"
                alt="GoFix trusted artisan"
                className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain"
              />
            </div>

            {/* FLOATING BLUE CIRCLE */}
            <div className="absolute left-[7%] top-[58px] z-30 h-[42px] w-[42px] rounded-full bg-[#1458e8]" />

            {/* CURVED WHITE LINE */}
            <svg
              className="absolute left-[5%] top-[125px] z-30"
              width="75"
              height="105"
              viewBox="0 0 75 105"
              fill="none"
            >
              <path
                d="M70 4C45 13 20 32 12 59C8 72 8 85 15 97"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M9 87L14 98L24 92"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* ================= MOBILE VISUAL ================= */}
          <div className="relative mt-10 flex min-h-[300px] items-end justify-center lg:hidden">
            {/* White circle */}
            <div className="absolute bottom-0 h-[260px] w-[260px] rounded-full bg-white" />

            {/* Blue shape */}
            <div className="absolute bottom-0 h-[210px] w-[300px] rounded-[50%] bg-[#1458e8]" />

            {/* Workshop */}
            <div className="absolute bottom-[25px] right-[-20px] h-[170px] w-[210px] overflow-hidden">
              <img
                src="/images/workshop.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* Artisan */}
            <div className="relative z-20 h-[300px] w-[270px]">
              <img
                src="/images/hero.png"
                alt="GoFix trusted artisan"
                className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain"
              />
            </div>

            {/* Floating circle */}
            <div className="absolute left-[8%] top-[10px] h-9 w-9 rounded-full bg-[#1458e8]" />
          </div>
        </div>
      </div>

      {/* ================= CURVED BOTTOM ================= */}
      <div className="absolute bottom-[-1px] left-[-5%] z-40 h-[75px] w-[110%] rounded-[50%_50%_0_0/100%_100%_0_0] bg-white sm:h-[85px] lg:h-[95px]" />
    </section>
  );
}