// components/ReadyToGetStarted.tsx

"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function ReadyToGetStarted() {
  return (
    <section className="w-full bg-[#f7f9ff]">
      <div
        className="
          mx-auto
          max-w-[1280px]
          px-6
          py-[22px]
          sm:px-8
          lg:px-[40px]
          lg:py-[24px]
        "
      >
        <div
          className="
            relative
            flex
            min-h-[112px]
            items-center
            overflow-hidden
            rounded-[16px]
            bg-[#000b76]
            px-[24px]
            py-[20px]
            sm:px-[30px]
            lg:px-[32px]
          "
        >

          {/* =====================================================
              SUBTLE BACKGROUND SHAPE
          ====================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              -right-[80px]
              -top-[100px]
              h-[230px]
              w-[230px]
              rounded-full
              bg-[#1735b8]
              opacity-30
            "
          />

          {/* =====================================================
              SHIELD ICON
          ====================================================== */}

          <div
            className="
              relative
              z-10
              flex
              h-[58px]
              w-[58px]
              shrink-0
              items-center
              justify-center
              sm:h-[64px]
              sm:w-[64px]
              lg:h-[68px]
              lg:w-[68px]
            "
          >
            <ShieldCheck
              className="
                h-[52px]
                w-[52px]
                text-white
                sm:h-[58px]
                sm:w-[58px]
                lg:h-[62px]
                lg:w-[62px]
              "
              strokeWidth={1.8}
            />
          </div>

          {/* =====================================================
              TEXT
          ====================================================== */}

          <div
            className="
              relative
              z-10
              ml-[20px]
              min-w-0
              flex-1
            "
          >
            <h2
              className="
                text-[20px]
                font-semibold
                leading-[1.15]
                tracking-[-0.025em]
                text-white
                sm:text-[22px]
                lg:text-[23px]
              "
            >
              Ready to get started?
            </h2>

            <p
              className="
                mt-[6px]
                max-w-[390px]
                text-[10px]
                leading-[1.45]
                text-white/85
                sm:text-[11px]
                lg:text-[11px]
              "
            >
              Join thousands of satisfied customers who trust GoFix
              <br className="hidden sm:block" />
              for their home and business needs.
            </p>
          </div>

          {/* =====================================================
              BUTTONS
          ====================================================== */}

          <div
            className="
              relative
              z-10
              ml-[20px]
              hidden
              shrink-0
              items-center
              gap-[16px]
              sm:flex
            "
          >
            {/* FIND AN ARTISAN */}

            <Link
              href="/artisans"
              className="
                flex
                h-[40px]
                min-w-[128px]
                items-center
                justify-center
                rounded-[6px]
                bg-white
                px-[18px]
                text-[10px]
                font-semibold
                text-[#07145f]
                transition-all
                duration-200
                hover:bg-[#f0f3ff]
                sm:h-[42px]
                sm:text-[11px]
              "
            >
              Find an Artisan
            </Link>

            {/* POST A JOB */}

            <Link
              href="/post-a-job"
              className="
                flex
                h-[40px]
                min-w-[112px]
                items-center
                justify-center
                rounded-[6px]
                border
                border-white/80
                bg-transparent
                px-[18px]
                text-[10px]
                font-semibold
                text-white
                transition-all
                duration-200
                hover:bg-white/10
                sm:h-[42px]
                sm:text-[11px]
              "
            >
              Post a Job
            </Link>
          </div>

          {/* =====================================================
              MOBILE ACTION
          ====================================================== */}

          <Link
            href="/post-a-job"
            className="
              relative
              z-10
              ml-auto
              flex
              h-[38px]
              w-[38px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#07145f]
              sm:hidden
            "
            aria-label="Post a Job"
          >
            <ArrowRight
              size={17}
              strokeWidth={2}
            />
          </Link>

        </div>
      </div>
    </section>
  );
}