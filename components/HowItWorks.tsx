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
    <section className="relative overflow-hidden bg-[#f7f9ff]">

      {/* =========================================================
          BLUE BACKGROUND
          Desktop / LG stays the same
      ========================================================== */}

      <svg
        className="absolute inset-0 z-0 h-full w-full"
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="
            M 0 45

            C 180 5 350 10 520 20
            C 720 32 900 38 1080 30
            C 1220 22 1340 8 1440 0

            V 390

            C 1410 435 1360 475 1290 490
            C 1220 505 1120 500 1020 500

            C 820 500 650 492 500 486
            C 350 480 220 475 120 488
            C 70 492 30 498 0 505

            Z
          "
          fill="#000b76"
        />
      </svg>

      {/* =========================================================
          DECORATIVE CIRCLES
      ========================================================== */}

      {/* Desktop left circle */}
      <div
        className="
          pointer-events-none
          absolute
          left-[18px]
          top-[40px]
          hidden
          h-[58px]
          w-[58px]
          rounded-full
          bg-[#1539c4]

          sm:block
        "
      />

      {/* Desktop right circle */}
      <div
        className="
          pointer-events-none
          absolute
          right-[26px]
          top-[42px]
          hidden
          h-[40px]
          w-[40px]
          rounded-full
          bg-[#1539c4]

          sm:block
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
          gap-[12px]

          lg:grid
        "
      >
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className="h-[8px] w-[8px] rounded-full bg-[#2864e8]"
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

          /* PHONE */
          px-5
          pb-[55px]
          pt-[58px]

          /* TABLET */
          sm:px-8
          sm:pb-[70px]
          sm:pt-[70px]

          /* DESKTOP - KEEP */
          lg:px-10
          lg:pb-[90px]
          lg:pt-[90px]
        "
      >

        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="flex items-start justify-between">

          <div>
            <p
              className="
                mb-[7px]
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.08em]
                text-[#bcd1ff]

                sm:text-[9px]

                lg:text-[9px]
              "
            >
              How It Works
            </p>

            <h2
              className="
                max-w-[280px]
                text-[25px]
                font-semibold
                leading-[1.08]
                tracking-[-0.035em]
                text-white

                sm:max-w-[400px]
                sm:text-[29px]

                lg:text-[27px]
              "
            >
              Get the job done
              <br />
              in 4 simple steps
            </h2>
          </div>

          {/* Desktop Learn More */}
          <Link
            href="/how-it-works"
            className="
              hidden
              h-[34px]
              shrink-0
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

        <div className="relative mt-[30px] sm:mt-[35px]">

          {/* Connecting line
              Only needed when steps are in one row.
          */}
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

          <div
            className="
              grid

              /* PHONE */
              grid-cols-1
              gap-[30px]

              /* TABLET */
              sm:grid-cols-2
              sm:gap-x-8
              sm:gap-y-[38px]

              /* DESKTOP - KEEP */
              lg:grid-cols-4
              lg:gap-0
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

                    /* PHONE */
                    flex
                    items-start
                    gap-4

                    /* TABLET */
                    sm:block

                    /* DESKTOP */
                    lg:block
                  "
                >

                  {/* =================================================
                      ICON
                  ================================================== */}

                  <div
                    className="
                      relative
                      flex
                      h-[58px]
                      w-[58px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#8ca0ed]
                      bg-[#06147f]

                      sm:h-[64px]
                      sm:w-[64px]

                      lg:h-[68px]
                      lg:w-[68px]
                    "
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.7}
                      className="text-[#dce6ff] sm:h-[26px] sm:w-[26px] lg:h-[28px] lg:w-[28px]"
                    />

                    {/* Number */}
                    <span
                      className="
                        absolute
                        -bottom-[8px]
                        left-0
                        flex
                        h-[19px]
                        w-[19px]
                        items-center
                        justify-center
                        rounded-full
                        bg-[#2868eb]
                        text-[9px]
                        font-semibold
                        text-white

                        sm:-bottom-[10px]
                        sm:h-[21px]
                        sm:w-[21px]

                        lg:-bottom-[12px]
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* =================================================
                      TEXT
                  ================================================== */}

                  <div
                    className="
                      min-w-0
                      pt-[2px]

                      sm:mt-[22px]
                      sm:max-w-[210px]
                      sm:pt-0

                      lg:mt-[25px]
                    "
                  >
                    <h3
                      className="
                        text-[13px]
                        font-semibold
                        leading-[1.2]
                        tracking-[-0.015em]
                        text-white

                        sm:text-[14px]

                        lg:text-[14px]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-[6px]
                        max-w-[240px]
                        text-[10px]
                        leading-[1.5]
                        text-[#c9d4fa]

                        sm:mt-[8px]
                        sm:text-[10px]

                        lg:text-[10px]
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
            mt-[32px]
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
            transition-all
            duration-200

            hover:bg-white
            hover:text-[#06147f]

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