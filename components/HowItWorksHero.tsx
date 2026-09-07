"use client";

import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function HowItWorksHero() {
  return (
    <section className="relative overflow-hidden bg-[#000b76] text-white">
      {/* ==========================================================
          NAVBAR
          Your existing Navbar component
      ========================================================== */}
      <div className="relative z-50 bg-[#000b76]">
        <Navbar />
      </div>

      {/* ==========================================================
          HERO
      ========================================================== */}
      <div className="relative min-h-[520px] overflow-hidden bg-[#000b76]">
        {/* ========================================================
            DECORATIVE BLUE CIRCLE
        ======================================================== */}
        <div
          className="
            absolute
            left-[56%]
            top-[42px]
            z-10
            h-[58px]
            w-[58px]
            rounded-full
            bg-[#1645c7]
          "
        />

        {/* ========================================================
            LARGE CIRCLE BEHIND ARTISAN
        ======================================================== */}
        <div
          className="
            absolute
            left-[53%]
            top-[95px]
            z-10
            h-[265px]
            w-[265px]
            rounded-full
            border
            border-white/70
          "
        />

        {/* ========================================================
            WHITE CIRCLE BACKDROP
        ======================================================== */}
        <div
          className="
            absolute
            left-[57%]
            top-[82px]
            z-0
            h-[300px]
            w-[300px]
            rounded-full
            bg-white
          "
        />

        {/* ========================================================
            LEFT HERO CONTENT
        ======================================================== */}
        <div
          className="
            relative
            z-30
            mx-auto
            max-w-[1400px]
            px-6
            pb-[150px]
            pt-[45px]
            lg:px-12
            lg:pt-[48px]
          "
        >
          <div className="max-w-[600px]">
            {/* SMALL LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <span
                className="
                  h-[2px]
                  w-[6px]
                  bg-[#6d9cff]
                "
              />

              <span
                className="
                  text-[12px]
                  font-medium
                  uppercase
                  tracking-[0.04em]
                  text-[#73a1ff]
                  sm:text-[13px]
                "
              >
                How It Works
              </span>

              <span
                className="
                  h-[1px]
                  w-[27px]
                  bg-[#73a1ff]
                "
              />
            </div>

            {/* MAIN HEADING */}
            <h1
              className="
                max-w-[600px]
                text-[40px]
                font-bold
                leading-[1.08]
                tracking-[-0.025em]
                sm:text-[48px]
                lg:text-[56px]
              "
            >
              How GoFix Makes
              <br />
              Getting Help Simple
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                max-w-[510px]
                text-[15px]
                font-normal
                leading-[1.65]
                text-white/90
                sm:text-[17px]
              "
            >
              From posting your job to getting it done, GoFix
              <br className="hidden sm:block" />
              connects you with trusted artisans in just a few steps.
            </p>

            {/* BUTTONS */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {/* PRIMARY */}
              <button
                type="button"
                className="
                  flex
                  h-[52px]
                  items-center
                  gap-4
                  rounded-[9px]
                  bg-white
                  px-6
                  text-[14px]
                  font-semibold
                  text-[#000b76]
                  transition
                  hover:bg-white/90
                "
              >
                <span>Find an Artisan</span>

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                />
              </button>

              {/* SECONDARY */}
              <button
                type="button"
                className="
                  flex
                  h-[52px]
                  items-center
                  gap-4
                  rounded-[9px]
                  border
                  border-white
                  px-6
                  text-[14px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-white/10
                "
              >
                <span>Post a Job</span>

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================
            ARTISAN + WORKSHOP
        ======================================================== */}

        {/* Workshop background */}
        <div
          className="
            absolute
            bottom-[65px]
            right-[-5px]
            z-10
            hidden
            h-[235px]
            w-[330px]
            overflow-hidden
            lg:block
            xl:h-[255px]
            xl:w-[390px]
          "
        >
          <img
            src="/images/workshop.jpg"
            alt=""
            className="
              h-full
              w-full
              object-cover
            "
          />
        </div>

        {/* Artisan */}
        <div
          className="
            absolute
            bottom-[55px]
            right-[17%]
            z-30
            hidden
            h-[350px]
            w-[350px]
            lg:block
            xl:right-[18%]
            xl:h-[390px]
            xl:w-[390px]
          "
        >
          <img
            src="/images/hero.png"
            alt="GoFix artisan"
            className="
              h-full
              w-full
              object-contain
              object-bottom
            "
          />
        </div>

        {/* ========================================================
            HAND-DRAWN STYLE ARROW
        ======================================================== */}
        <svg
          className="
            absolute
            left-[51%]
            top-[150px]
            z-20
            hidden
            h-[70px]
            w-[70px]
            lg:block
          "
          viewBox="0 0 80 80"
          fill="none"
        >
          <path
            d="M67 8C43 14 25 29 22 53"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          <path
            d="M22 53L14 43"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          <path
            d="M22 53L32 48"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        {/* ========================================================
            BOTTOM WAVE
            SVG gives us the actual curved shape instead of
            a generic border-radius.
        ======================================================== */}
        <div
          className="
            absolute
            bottom-[-1px]
            left-0
            z-40
            w-full
          "
        >
          <svg
            className="
              block
              h-[95px]
              w-full
            "
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="
                M0 58
                C170 105 320 76 485 78
                C690 80 855 100 1050 94
                C1240 89 1360 83 1440 0
                L1440 120
                L0 120
                Z
              "
              fill="#f7f9ff"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}