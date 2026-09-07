"use client";

import { ArrowRight } from "lucide-react";

export default function HowItWorksCTA() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div
        className="
          relative
          mx-auto
          min-h-[330px]
          max-w-[1400px]
          overflow-hidden
          rounded-[24px]
          bg-[#000b76]
          px-7
          py-12
          sm:px-10
          lg:min-h-[360px]
          lg:px-16
          lg:py-14
          xl:px-20
        "
      >
        {/* =========================================================
            DECORATIVE CIRCLES
        ========================================================== */}

        <div
          className="
            absolute
            -right-[100px]
            -top-[130px]
            h-[330px]
            w-[330px]
            rounded-full
            border
            border-white/15
          "
        />

        <div
          className="
            absolute
            -right-[55px]
            -bottom-[170px]
            h-[370px]
            w-[370px]
            rounded-full
            border
            border-white/10
          "
        />

        <div
          className="
            absolute
            right-[23%]
            top-[-35px]
            h-[75px]
            w-[75px]
            rounded-full
            bg-[#1745c7]
            opacity-70
          "
        />

        {/* =========================================================
            CONTENT
        ========================================================== */}

        <div className="relative z-10 max-w-[650px]">

          {/* LABEL */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-7 bg-[#78a4ff]" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.08em]
                text-[#78a4ff]
              "
            >
              Ready to get started?
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              max-w-[650px]
              text-[32px]
              font-bold
              leading-[1.1]
              tracking-[-0.03em]
              text-white
              sm:text-[40px]
              lg:text-[46px]
              xl:text-[50px]
            "
          >
            Get the help you need.
            <br />
            Get it done with GoFix.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-5
              max-w-[530px]
              text-[14px]
              leading-[1.7]
              text-white/80
              sm:text-[16px]
            "
          >
            Find trusted artisans for your home, office or
            business and get your job done without the stress.
          </p>

          {/* BUTTON */}
          <button
            type="button"
            className="
              mt-7
              inline-flex
              h-[52px]
              items-center
              gap-4
              rounded-[9px]
              bg-white
              px-7
              text-[14px]
              font-semibold
              text-[#000b76]
              transition
              hover:bg-[#f2f5ff]
            "
          >
            Find an Artisan

            <ArrowRight
              size={18}
              strokeWidth={2}
            />
          </button>
        </div>

        {/* =========================================================
            RIGHT DECORATIVE SHAPE
        ========================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-120px]
            right-[-80px]
            hidden
            h-[370px]
            w-[520px]
            rotate-[-12deg]
            rounded-[48%_52%_45%_55%]
            bg-[#1645c7]
            lg:block
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-160px]
            right-[40px]
            hidden
            h-[350px]
            w-[430px]
            rotate-[10deg]
            rounded-[50%]
            border-[12px]
            border-[#78a4ff]/30
            lg:block
          "
        />

        {/* =========================================================
            DECORATIVE ARROW
        ========================================================== */}

        <svg
          className="
            pointer-events-none
            absolute
            right-[28%]
            top-[34%]
            hidden
            h-[75px]
            w-[100px]
            lg:block
          "
          viewBox="0 0 100 75"
          fill="none"
        >
          <path
            d="M10 60C30 40 48 25 78 22"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />

          <path
            d="M69 15L80 22L69 29"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
}