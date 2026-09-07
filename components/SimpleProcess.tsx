"use client";

import {
  FileText,
  UsersRound,
  Star,
  CircleCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Post a Job",
    description: "Tell us what you need, add details and your location.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Get Matched",
    description: "We'll connect you with verified artisans near you.",
    icon: UsersRound,
  },
  {
    number: "03",
    title: "Review & Hire",
    description: "Compare profiles, read reviews and choose the best fit.",
    icon: Star,
  },
  {
    number: "04",
    title: "Get It Done",
    description: "Your artisan arrives, gets the job done, and you're all set!",
    icon: CircleCheck,
  },
];

export default function SimpleProcess() {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1400px]">

        {/* =========================================================
            SECTION HEADER
        ========================================================= */}
        <div className="mb-12 lg:mb-14">

          {/* SMALL LABEL */}
          <div className="mb-3 flex items-center gap-4">
            <span className="text-[12px] font-semibold uppercase tracking-[0.04em] text-[#2463ff]">
              - SIMPLE PROCESS
            </span>

            <span className="h-[1px] w-[42px] bg-[#2463ff]" />
          </div>

          {/* TITLE */}
          <h2
            className="
              text-[30px]
              font-bold
              leading-[1.15]
              tracking-[-0.02em]
              text-[#000b76]
              sm:text-[34px]
              lg:text-[40px]
            "
          >
            Get started in 4 easy steps
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-2
              max-w-[650px]
              text-[16px]
              leading-[1.6]
              text-[#5d74ad]
              sm:text-[17px]
            "
          >
            We've made it simple and stress-free to find the right artisan
            for your job.
          </p>
        </div>


        {/* =========================================================
            STEPS
        ========================================================= */}
        <div
          className="
            grid
            grid-cols-1
            gap-12
            md:grid-cols-2
            lg:grid-cols-4
            lg:gap-8
          "
        >

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div
                key={step.number}
                className="
                  relative
                  flex
                  flex-col
                  items-start
                "
              >

                {/* =================================================
                    ICON + NUMBER
                ================================================= */}
                <div className="relative">

                  {/* LARGE ICON CIRCLE */}
                  <div
                    className="
                      flex
                      h-[76px]
                      w-[76px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#edf3ff]
                      sm:h-[82px]
                      sm:w-[82px]
                    "
                  >
                    <Icon
                      size={38}
                      strokeWidth={1.8}
                      className="text-[#003cff]"
                    />
                  </div>


                  {/* NUMBER BADGE */}
                  <div
                    className="
                      absolute
                      -left-[3px]
                      top-[5px]
                      flex
                      h-[31px]
                      w-[31px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#124bdc]
                      text-[11px]
                      font-bold
                      text-white
                      shadow-sm
                    "
                  >
                    {step.number}
                  </div>

                </div>


                {/* =================================================
                    TITLE
                ================================================= */}
                <h3
                  className="
                    mt-5
                    text-[17px]
                    font-bold
                    leading-[1.3]
                    text-[#000b76]
                    sm:text-[18px]
                  "
                >
                  {step.title}
                </h3>


                {/* =================================================
                    DESCRIPTION
                ================================================= */}
                <p
                  className="
                    mt-2
                    max-w-[235px]
                    text-[14px]
                    leading-[1.65]
                    text-[#29457f]
                    sm:text-[15px]
                  "
                >
                  {step.description}
                </p>


                {/* =================================================
                    DOTTED CONNECTOR
                ================================================= */}
                {!isLast && (
                  <div
                    className="
                      absolute
                      left-[105px]
                      top-[37px]
                      hidden
                      h-[2px]
                      w-[calc(100%-125px)]
                      border-t-2
                      border-dashed
                      border-[#4c85ff]
                      lg:block
                    "
                  />
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}