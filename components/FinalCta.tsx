"use client";

import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 md:px-6 md:py-20 lg:px-10">
      <div
        className="
          relative
          mx-auto
          max-w-[1440px]
          overflow-hidden
          rounded-[36px]
          bg-[#000b76]
          px-6
          py-16
          md:px-12
          md:py-20
          lg:px-20
          lg:py-24
        "
      >
        {/* =====================================================
            BACKGROUND BLOBS
        ===================================================== */}

        {/* Large blue highlight */}
        <div
          className="
            pointer-events-none
            absolute
            -right-[12%]
            -top-[45%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#1554d1]
            opacity-50
            blur-[2px]
          "
        />

        {/* =====================================================
            WHITE ORGANIC SHAPE
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[330px]
            -right-[8%]
            h-[500px]
            w-[850px]
            rotate-[-7deg]
            rounded-[50%]
            bg-white
          "
        />

        {/* =====================================================
            SECOND WHITE BLOB
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-[260px]
            -top-[250px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-white/5
          "
        />

        {/* =====================================================
            DOT PATTERN
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            right-10
            top-10
            hidden
            opacity-30
            lg:block
          "
        >
          <div className="grid grid-cols-6 gap-3">
            {Array.from({ length: 36 }).map((_, index) => (
              <span
                key={index}
                className="h-2 w-2 rounded-full bg-white"
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="relative z-10 mx-auto max-w-[850px] text-center">
          {/* Small badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/15
              bg-white/10
              px-4
              py-2
              text-sm
              font-semibold
              text-blue-100
              backdrop-blur-sm
            "
          >
            <span
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-white
              "
            >
              <Check
                size={11}
                strokeWidth={3}
                className="text-[#1554d1]"
              />
            </span>

            Get started with GoFix
          </div>

          {/* Heading */}

          <h2
            className="
              mt-7
              text-[42px]
              font-semibold
              leading-[1.05]
              tracking-[-0.045em]
              text-white
              md:text-[56px]
              lg:text-[64px]
            "
          >
            Got a job to fix?
            <br />

            <span className="text-blue-300">
              We've got you.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-[620px]
              text-[15px]
              leading-7
              text-blue-100
              md:text-[17px]
            "
          >
            Find a trusted professional, get your job done right,
            and enjoy the peace of mind that comes with using GoFix.
          </p>

          {/* ===================================================
              CTA BUTTONS
          =================================================== */}

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* Primary */}

            <button
              type="button"
              className="
                group
                inline-flex
                min-w-[190px]
                items-center
                justify-center
                gap-3
                rounded-full
                bg-white
                px-7
                py-4
                text-sm
                font-bold
                text-[#000b76]
                shadow-[0_15px_35px_rgba(0,0,0,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-50
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]
              "
            >
              Post a Job

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

            {/* Secondary */}

            <button
              type="button"
              className="
                inline-flex
                min-w-[190px]
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/25
                bg-white/5
                px-7
                py-4
                text-sm
                font-semibold
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-white/10
              "
            >
              Browse Services
            </button>
          </div>
        </div>

        {/* =====================================================
            TRUST INDICATORS
        ===================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            mt-14
            flex
            max-w-[650px]
            flex-wrap
            items-center
            justify-center
            gap-x-7
            gap-y-4
            border-t
            border-white/10
            pt-7
          "
        >
          <div className="flex items-center gap-2 text-xs text-blue-100">
            <ShieldCheck
              size={17}
              className="text-blue-300"
            />

            Verified Artisans
          </div>

          <span className="hidden h-4 w-px bg-white/20 sm:block" />

          <div className="flex items-center gap-2 text-xs text-blue-100">
            <Sparkles
              size={16}
              className="text-blue-300"
            />

            Quality Guaranteed
          </div>

          <span className="hidden h-4 w-px bg-white/20 sm:block" />

          <div className="flex items-center gap-2 text-xs text-blue-100">
            <Check
              size={17}
              className="text-blue-300"
            />

            Fast & Easy
          </div>
        </div>
      </div>
    </section>
  );
}