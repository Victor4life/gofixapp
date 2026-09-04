"use client";

import {
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function CategoriesCTA() {
  return (
    <section className="w-full px-5 pb-16 sm:px-8 lg:px-12">
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1400px]
          overflow-hidden
          rounded-[22px]
          bg-[#000b76]
          px-7
          py-8
          sm:px-10
          sm:py-9
          lg:px-12
          lg:py-10
          xl:px-14
        "
      >
        {/* ==========================================================
            DECORATIVE DOTS
        ========================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            right-5
            top-1/2
            hidden
            -translate-y-1/2
            lg:block
          "
        >
          <div className="grid grid-cols-3 gap-[14px] opacity-70">
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                key={index}
                className="
                  h-[7px]
                  w-[7px]
                  rounded-full
                  bg-[#2464ff]
                "
              />
            ))}
          </div>
        </div>


        {/* ==========================================================
            CONTENT
        ========================================================== */}

        <div
          className="
            relative
            z-10
            flex
            flex-col
            items-center
            gap-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >

          {/* ========================================================
              SHIELD ICON
          ======================================================== */}

          <div
            className="
              flex
              h-[86px]
              w-[86px]
              shrink-0
              items-center
              justify-center
              rounded-full
              sm:h-[94px]
              sm:w-[94px]
              lg:h-[100px]
              lg:w-[100px]
            "
          >
            <ShieldCheck
              className="
                h-[68px]
                w-[68px]
                stroke-[1.8]
                text-white
                sm:h-[76px]
                sm:w-[76px]
                lg:h-[82px]
                lg:w-[82px]
              "
            />
          </div>


          {/* ========================================================
              TEXT
          ======================================================== */}

          <div
            className="
              flex-1
              text-center
              lg:ml-3
              lg:text-left
            "
          >
            <h2
              className="
                text-[25px]
                font-bold
                leading-[1.2]
                tracking-[-0.5px]
                text-white
                sm:text-[28px]
                lg:text-[30px]
              "
            >
              Can't find what you need?
            </h2>

            <p
              className="
                mt-2
                max-w-[430px]
                text-[14px]
                leading-[1.7]
                text-white/90
                sm:text-[15px]
              "
            >
              Post your job and get matched with the perfect
              <br className="hidden sm:block" />
              artisan for your task.
            </p>
          </div>


          {/* ========================================================
              ACTION BUTTONS
          ======================================================== */}

          <div
            className="
              flex
              w-full
              flex-col
              gap-3
              sm:w-auto
              sm:flex-row
              lg:mr-10
            "
          >

            {/* POST A JOB */}

            <button
              type="button"
              className="
                group
                flex
                h-[54px]
                min-w-[150px]
                items-center
                justify-center
                gap-3
                rounded-[9px]
                bg-white
                px-6
                text-[14px]
                font-semibold
                text-[#000b76]
                transition-all
                duration-200
                hover:bg-[#f1f4ff]
                hover:shadow-lg
              "
            >
              <span>Post a Job</span>

              <ArrowRight
                className="
                  h-[18px]
                  w-[18px]
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </button>


            {/* HOW IT WORKS */}

            <button
              type="button"
              className="
                group
                flex
                h-[54px]
                min-w-[150px]
                items-center
                justify-center
                gap-3
                rounded-[9px]
                border
                border-white/70
                bg-transparent
                px-6
                text-[14px]
                font-semibold
                text-white
                transition-all
                duration-200
                hover:border-white
                hover:bg-white/10
              "
            >
              <span>How It Works</span>

              <ArrowRight
                className="
                  h-[18px]
                  w-[18px]
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}