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
    description: (
      <>
        Tell us what you need
        <br />
        done and where.
      </>
    ),
    icon: FileText,
  },
  {
    number: "2",
    title: "Get Matched",
    description: (
      <>
        We connect you with
        <br />
        verified artisans.
      </>
    ),
    icon: Users,
  },
  {
    number: "3",
    title: "Review & Hire",
    description: (
      <>
        Check profiles, reviews,
        <br />
        and hire with confidence.
      </>
    ),
    icon: ShieldCheck,
  },
  {
    number: "4",
    title: "Get It Done",
    description: (
      <>
        Your job gets done right,
        <br />
        on time.
      </>
    ),
    icon: CircleCheck,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9ff]">

      {/* =========================================================
          BLUE BACKGROUND
          SVG gives us control over BOTH the top and bottom waves
          and the large curved right-hand corners.
      ========================================================== */}

<svg
        className="absolute inset-0 z-0 h-full w-full"
        viewBox="0 0 1440 760"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="
            M 0 0
            H 1440
            V 555

            C 1418 620 1380 680 1315 718
            C 1250 756 1175 760 1085 760

            C 900 760 760 755 610 750
            C 470 746 330 732 215 725

            C 125 720 55 728 0 745

            Z
          "
          fill="#06147f"
        />
      </svg>
      {/* =========================================================
          DECORATIVE CIRCLES
      ========================================================== */}

      {/* Large left circle */}
      <div
        className="
          pointer-events-none
          absolute
          left-[18px]
          top-[38px]
          h-[48px]
          w-[48px]
          rounded-full
          bg-[#1539c4]
        "
      />

      {/* Small top-right circle */}
      <div
        className="
          pointer-events-none
          absolute
          right-[26px]
          top-[42px]
          h-[30px]
          w-[30px]
          rounded-full
          bg-[#1539c4]
        "
      />

      {/* =========================================================
          RIGHT DOT PATTERN
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[27px]
          top-[125px]
          z-[1]
          hidden
          grid-cols-5
          gap-[9px]
          lg:grid
        "
      >
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-[4px] w-[4px] rounded-full bg-[#2864e8]"
          />
        ))}
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1280px]
          px-6
          pb-[85px]
          pt-[58px]
          sm:px-8
          lg:px-10
        "
      >

        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="flex items-start justify-between">

          <div>
            <p
              className="
                mb-[8px]
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.02em]
                text-[#bcd1ff]
              "
            >
              How It Works
            </p>

            <h2
              className="
                text-[27px]
                font-semibold
                leading-[1.08]
                tracking-[-0.035em]
                text-white
                sm:text-[30px]
              "
            >
              Get the job done
              <br />
              in 4 simple steps
            </h2>
          </div>

          {/* Learn More */}
          <Link
            href="/how-it-works"
            className="
              hidden
              h-[34px]
              items-center
              gap-[12px]
              rounded-[5px]
              border
              border-[#7387e8]
              px-[14px]
              text-[9px]
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
              size={13}
              strokeWidth={2}
            />
          </Link>
        </div>

        {/* =======================================================
            STEPS
        ======================================================== */}

        <div className="relative mt-[35px]">

          {/* Dotted connecting line */}
          <div
            className="
              pointer-events-none
              absolute
              left-[8%]
              right-[8%]
              top-[34px]
              hidden
              lg:block
            "
          >
            <div className="border-t-[2px] border-dotted border-[#3970e9]" />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative z-10"
                >

                  {/* =================================================
                      ICON
                  ================================================== */}

                  <div
                    className="
                      relative
                      flex
                      h-[68px]
                      w-[68px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#8ca0ed]
                      bg-[#06147f]
                    "
                  >
                    <Icon
                      size={28}
                      strokeWidth={1.7}
                      className="text-[#dce6ff]"
                    />

                    {/* Number */}
                    <span
                      className="
                        absolute
                        -bottom-[12px]
                        left-0
                        flex
                        h-[21px]
                        w-[21px]
                        items-center
                        justify-center
                        rounded-full
                        bg-[#2868eb]
                        text-[10px]
                        font-semibold
                        text-white
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* =================================================
                      TEXT
                  ================================================== */}

                  <div className="mt-[25px]">
                    <h3
                      className="
                        text-[14px]
                        font-semibold
                        leading-[1.15]
                        tracking-[-0.015em]
                        text-white
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-[8px]
                        text-[10px]
                        leading-[1.5]
                        text-[#c9d4fa]
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
            mt-[35px]
            flex
            h-[34px]
            w-fit
            items-center
            gap-[12px]
            rounded-[5px]
            border
            border-[#7387e8]
            px-[14px]
            text-[9px]
            font-semibold
            text-white
            sm:hidden
          "
        >
          Learn More

          <ArrowRight
            size={13}
            strokeWidth={2}
          />
        </Link>
      </div>
    </section>
  );
}