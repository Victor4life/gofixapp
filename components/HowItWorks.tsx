"use client";

import { ArrowRight, Check, FileText, MessageCircle, Users } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Post a Job",
    description: "Tell us what you need done.",
  },
  {
    number: "02",
    icon: Users,
    title: "Get Matched",
    description: "We connect you with available artisans.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Review & Hire",
    description: "Check reviews, compare and hire with confidence.",
  },
  {
    number: "04",
    icon: Check,
    title: "Get It Done",
    description: "Sit back while the job gets done right.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 md:px-10 md:py-24 lg:px-16">
      <div className="relative mx-auto max-w-[1440px]">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-[620px] text-center">
          {/* Small label */}
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#1554d1]">
            <span className="h-2 w-2 rounded-full bg-[#1554d1]" />
            How It Works
          </div>

          <h2
            className="
              mt-4
              text-[32px]
              font-semibold
              leading-[1.1]
              tracking-[-0.035em]
              text-[#071b49]
              md:text-[40px]
            "
          >
            Getting your job done
            <br className="hidden sm:block" />
            is simple.
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[500px]
              text-sm
              leading-6
              text-[#64718a]
              md:text-[15px]
            "
          >
            From finding the right artisan to getting the job completed,
            GoFix keeps everything simple.
          </p>
        </div>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <div className="relative mt-16 md:mt-20">
          {/* Desktop connecting line */}

          <div
            className="
              pointer-events-none
              absolute
              left-[12.5%]
              right-[12.5%]
              top-[31px]
              hidden
              h-px
              bg-[#c9d9f8]
              lg:block
            "
          />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isFirst = index === 0;

              return (
                <div
                  key={step.number}
                  className="
                    group
                    relative
                    flex
                    flex-col
                    items-center
                    text-center
                    lg:px-8
                  "
                >
                  {/* =================================================
                      NUMBER
                  ================================================= */}

                  <div
                    className={`
                      relative
                      z-10
                      flex
                      h-[62px]
                      w-[62px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-300

                      ${
                        isFirst
                          ? "border-[#000b76] bg-[#000b76] text-white shadow-[0_10px_25px_rgba(0,11,118,0.18)]"
                          : "border-[#dbe7fb] bg-white text-[#1554d1] group-hover:border-[#1554d1] group-hover:bg-[#f1f6ff]"
                      }
                    `}
                  >
                    <span className="text-[14px] font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* =================================================
                      ICON
                  ================================================= */}

                  <div
                    className="
                      mt-6
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#f1f6ff]
                      text-[#1554d1]
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                    "
                  >
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  {/* =================================================
                      TEXT
                  ================================================= */}

                  <div className="mt-4 max-w-[190px]">
                    <h3
                      className="
                        text-[17px]
                        font-semibold
                        tracking-[-0.015em]
                        text-[#071b49]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[13px]
                        leading-[1.6]
                        text-[#64718a]
                      "
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* =================================================
                      MOBILE CONNECTOR
                  ================================================= */}

                  {index < steps.length - 1 && (
                    <div
                      className="
                        absolute
                        bottom-[-48px]
                        left-1/2
                        h-10
                        w-px
                        -translate-x-1/2
                        bg-[#c9d9f8]
                        md:hidden
                      "
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div className="mt-16 flex justify-center md:mt-20">
          <button
            type="button"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#000b76]
              px-6
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-[0_10px_25px_rgba(0,11,118,0.14)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#07149a]
              hover:shadow-[0_14px_30px_rgba(0,11,118,0.2)]
            "
          >
            Get started with GoFix

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* =====================================================
            SUBTLE DECORATION
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-24
            -right-24
            hidden
            h-48
            w-48
            rounded-full
            bg-[#f1f6ff]
            lg:block
          "
        />
      </div>
    </section>
  );
}