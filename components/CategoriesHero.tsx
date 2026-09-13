"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Search,
  MapPin,
  ArrowRight,
} from "lucide-react";

import Navbar from "@/components/Navbar";

export default function CategoriesHero() {
  return (
    <section className="relative overflow-hidden bg-[#000b76] text-white">
      {/* ==========================================================
          DECORATIVE BACKGROUND ELEMENTS
      ========================================================== */}

      {/* Large blue circle */}
      <div
        className="
          absolute
          left-[28%]
          top-[95px]
          z-0
          h-[70px]
          w-[70px]
          rounded-full
          bg-[#1239b9]
          opacity-80
        "
      />

      {/* Large subtle circle behind artisan */}
      <div
        className="
          absolute
          right-[18%]
          top-[130px]
          z-0
          h-[280px]
          w-[280px]
          rounded-full
          border
          border-white/20
        "
      />

      {/* ==========================================================
          NAVBAR
      ========================================================== */}

      <Navbar />

      {/* ==========================================================
          HERO CONTENT
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          min-h-[470px]
          max-w-[1400px]
          px-6
          pb-[130px]
          pt-[45px]
          lg:px-12
          lg:pt-[55px]
        "
      >
        <div
          className="
            grid
            items-center
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* ======================================================
              LEFT CONTENT
          ====================================================== */}

          <div
            className="
              relative
              z-20
              max-w-[570px]
            "
          >
            {/* PAGE TITLE */}

            <h1
              className="
                text-[44px]
                font-semibold
                leading-[1.08]
                tracking-[-0.03em]
                text-white
                sm:text-[52px]
                lg:text-[58px]
              "
            >
              All Categories
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                mt-5
                max-w-[480px]
                text-[17px]
                leading-[1.6]
                text-white/85
                lg:text-[18px]
              "
            >
              Find skilled and verified artisans for every
              job around your home or business.
            </p>
          </div>

          {/* ======================================================
              RIGHT IMAGE
          ====================================================== */}

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative min-h-[390px] lg:min-h-[390px]">
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

        {/* ==========================================================
            SEARCH BAR
        ========================================================== */}

        <div
          className="
            absolute
            bottom-[28px]
            left-1/2
            z-30
            flex
            w-[calc(100%-48px)]
            max-w-[1260px]
            -translate-x-1/2
            flex-col
            overflow-hidden
            rounded-[16px]
            bg-white
            p-2
            shadow-[0_15px_45px_rgba(0,0,0,0.18)]
            sm:flex-row
            lg:w-[calc(100%-96px)]
          "
        >
          {/* SERVICE SEARCH */}

          <div
            className="
              flex
              min-h-[68px]
              flex-1
              items-center
              gap-4
              px-5
              sm:border-r
              sm:border-[#e5e7eb]
            "
          >
            <div
              className="
                flex
                h-[40px]
                w-[40px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#f0f4ff]
              "
            >
              <Search
                size={19}
                strokeWidth={2}
                className="text-[#1645e8]"
              />
            </div>

            <div>
              <div
                className="
                  text-[13px]
                  font-semibold
                  text-[#07135f]
                "
              >
                What service do you need?
              </div>

              <div
                className="
                  mt-1
                  text-[13px]
                  text-[#8a91a8]
                "
              >
                e.g. Plumbing, Electrical, Painting
              </div>
            </div>
          </div>

          {/* LOCATION */}

          <div
            className="
              flex
              min-h-[68px]
              flex-1
              items-center
              gap-4
              px-5
              sm:border-r
              sm:border-[#e5e7eb]
            "
          >
            <div
              className="
                flex
                h-[40px]
                w-[40px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#f0f4ff]
              "
            >
              <MapPin
                size={19}
                strokeWidth={2}
                className="text-[#1645e8]"
              />
            </div>

            <div>
              <div
                className="
                  text-[13px]
                  font-semibold
                  text-[#07135f]
                "
              >
                Location
              </div>

              <div
                className="
                  mt-1
                  text-[13px]
                  text-[#8a91a8]
                "
              >
                Enter your location
              </div>
            </div>
          </div>

          {/* SEARCH BUTTON */}

          <Link
            href="/artisans"
            className="
              m-1
              flex
              min-h-[62px]
              items-center
              justify-center
              gap-3
              rounded-[10px]
              bg-[#07168c]
              px-8
              text-[14px]
              font-semibold
              text-white
              transition-all
              hover:bg-[#061276]
              hover:shadow-lg
              sm:min-w-[190px]
            "
          >
            Find Artisans

            <ArrowRight
              size={18}
              strokeWidth={2}
            />
          </Link>
        </div>
      </div>

      {/* ==========================================================
          LARGE CURVED BOTTOM
      ========================================================== */}

      <svg
        className="
          absolute
          bottom-[-1px]
          left-0
          z-20
          h-[105px]
          w-full
        "
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="
            M0 75
            C180 105 350 108 540 105
            C760 102 940 103 1120 105
            C1280 107 1380 91 1440 35
            L1440 120
            L0 120
            Z
          "
          fill="#f7f9ff"
        />
      </svg>
    </section>
  );
}