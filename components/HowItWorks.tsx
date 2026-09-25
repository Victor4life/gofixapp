"use client";

import Link from "next/link";
import {
  FileText,
  Users,
  ShieldCheck,
  CircleCheck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Post a Job",
    description: "Tell us what you need done and where.",
    icon: FileText,
  },
  {
    number: "2",
    title: "Get Matched",
    description: "We connect you with verified artisans.",
    icon: Users,
  },
  {
    number: "3",
    title: "Review & Hire",
    description: "Check profiles, reviews, and hire with confidence.",
    icon: ShieldCheck,
  },
  {
    number: "4",
    title: "Get It Done",
    description: "Your job gets done right, on time.",
    icon: CircleCheck,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f9ff]">

      {/* =========================================================
          BLUE BACKGROUND
      ========================================================== */}

      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        viewBox="0 0 1440 650"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="
            M 0 55

            C 180 15 350 18 520 28
            C 720 40 900 46 1080 38
            C 1220 30 1340 16 1440 8

            V 510

            C 1400 555 1350 600 1270 620
            C 1170 645 1050 640 930 638

            C 750 635 600 625 470 620
            C 330 615 210 610 110 625
            C 65 632 25 638 0 642

            Z
          "
          fill="#000b76"
        />
      </svg>

      {/* =========================================================
          DECORATIVE CIRCLES
      ========================================================== */}

      {/* Left circle */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-18px]
          top-[42px]
          h-12
          w-12
          rounded-full
          bg-[#1539c4]

          sm:left-[20px]
          sm:top-[48px]
          sm:h-14
          sm:w-14

          lg:left-[32px]
          lg:top-[55px]
          lg:h-[58px]
          lg:w-[58px]
        "
      />

      {/* Right circle */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-10px]
          top-[55px]
          h-8
          w-8
          rounded-full
          bg-[#1539c4]

          sm:right-[24px]
          sm:top-[50px]
          sm:h-10
          sm:w-10

          lg:right-[32px]
          lg:top-[58px]
        "
      />

      {/* =========================================================
          RIGHT DOT PATTERN
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[28px]
          top-[135px]
          z-[1]
          hidden
          grid-cols-5
          gap-[10px]
          xl:grid
        "
      >
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-[7px] w-[7px] rounded-full bg-[#2864e8]"
          />
        ))}
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1280px]
          px-5
          pb-16
          pt-16

          sm:px-8
          sm:pb-20
          sm:pt-20

          lg:px-10
          lg:pb-[95px]
          lg:pt-[90px]
        "
      >

        {/* =======================================================
            HEADER
        ======================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5

            sm:flex-row
            sm:items-start
            sm:justify-between
          "
        >
          {/* LEFT */}
          <div className="max-w-[600px]">
            <p
              className="
                mb-2
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.08em]
                text-[#bcd1ff]

                sm:text-[10px]
              "
            >
              How It Works
            </p>

            <h2
              className="
                text-[28px]
                font-semibold
                leading-[1.08]
                tracking-[-0.035em]
                text-white

                sm:text-[32px]

                lg:text-[34px]
              "
            >
              Get the job done
              <br />
              in 4 simple steps
            </h2>
          </div>

          {/* DESKTOP LEARN MORE */}
          <Link
            href="/how-it-works"
            className="
              hidden
              shrink-0
              items-center
              gap-2
              rounded-[5px]
              border
              border-[#7387e8]
              px-4
              py-2.5
              text-[10px]
              font-semibold
              text-white
              transition-all
              duration-200

              hover:bg-white
              hover:text-[#06147f]

              sm:flex
            "
          >
            Learn More

            <ArrowRight
              size={14}
              strokeWidth={2}
            />
          </Link>
        </div>

        {/* =======================================================
            STEPS
        ======================================================== */}

        <div className="relative mt-10 sm:mt-12 lg:mt-14">

          {/* =====================================================
              CONNECTING LINE
          ====================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-[8%]
              right-[8%]
              top-[34px]
              hidden

              xl:block
            "
          >
            <div className="border-t-[2px] border-dotted border-[#3970e9]" />
          </div>

          {/* =====================================================
              GRID
          ====================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-10

              sm:grid-cols-2
              sm:gap-x-8
              sm:gap-y-12

              xl:grid-cols-4
              xl:gap-0
            "
          >
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="
                    relative
                    z-10
                    min-w-0
                  "
                >

                  {/* =================================================
                      ICON
                  ================================================== */}

                  <div
                    className="
                      relative
                      flex
                      h-[64px]
                      w-[64px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#8ca0ed]
                      bg-[#06147f]

                      sm:h-[68px]
                      sm:w-[68px]
                    "
                  >
                    <Icon
                      size={27}
                      strokeWidth={1.7}
                      className="text-[#dce6ff]"
                    />

                    {/* NUMBER */}
                    <span
                      className="
                        absolute
                        -bottom-[10px]
                        left-0
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-full
                        bg-[#2868eb]
                        text-[9px]
                        font-semibold
                        text-white

                        sm:-bottom-[12px]
                        sm:h-[21px]
                        sm:w-[21px]
                        sm:text-[10px]
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* =================================================
                      TEXT
                  ================================================== */}

                  <div className="mt-6 max-w-[230px] sm:mt-7">
                    <h3
                      className="
                        text-[14px]
                        font-semibold
                        leading-[1.2]
                        tracking-[-0.015em]
                        text-white

                        sm:text-[15px]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[10px]
                        leading-[1.6]
                        text-[#c9d4fa]

                        sm:text-[11px]
                      "
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =======================================================
            MOBILE LEARN MORE
        ======================================================== */}

        <Link
          href="/how-it-works"
          className="
            mt-10
            flex
            h-[36px]
            w-fit
            items-center
            gap-2
            rounded-[5px]
            border
            border-[#7387e8]
            px-4
            text-[10px]
            font-semibold
            text-white
            transition-all

            hover:bg-white
            hover:text-[#06147f]

            sm:hidden
          "
        >
          Learn More

          <ArrowRight
            size={14}
            strokeWidth={2}
          />
        </Link>
      </div>
    </section>
  );
}