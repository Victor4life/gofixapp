"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const journeySteps = [
  {
    number: "1",
    title: "Tell us what you need",
    description:
      "Share the service, location and details of your job.",
    image: "/images/customer-journey/tell-us.jpg",
  },
  {
    number: "2",
    title: "Discover artisans",
    description:
      "Browse verified professionals with real reviews.",
    image: "/images/customer-journey/discover-artisans.jpg",
  },
  {
    number: "3",
    title: "Compare",
    description:
      "Check ratings, skills, experience and pricing.",
    image: "/images/customer-journey/compare.jpg",
  },
  {
    number: "4",
    title: "Hire",
    description:
      "Choose the best fit and book your artisan.",
    image: "/images/customer-journey/hire.jpg",
  },
  {
    number: "5",
    title: "Get the job done",
    description:
      "Your artisan shows up, completes the work, and you're all set!",
    image: "/images/customer-journey/get-job-done.jpg",
  },
];

export default function CustomerJourney() {
  return (
    <section className="relative overflow-hidden bg-[#eef4ff] py-20 md:py-24 lg:py-28">
      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 xl:px-16">

        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-10">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="w-full shrink-0 lg:w-[270px] xl:w-[285px]">

            {/* SMALL LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#2161ff]">
                For Customers
              </span>

              <span className="h-[1px] w-10 bg-[#2161ff]" />
            </div>

            {/* HEADING */}
            <h2
              className="
                max-w-[290px]
                text-[30px]
                font-bold
                leading-[1.12]
                tracking-[-0.03em]
                text-[#000b76]
                sm:text-[34px]
                lg:text-[31px]
                xl:text-[34px]
              "
            >
              Your journey,
              <br />
              simplified
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                max-w-[270px]
                text-[15px]
                leading-[1.7]
                text-[#53658f]
              "
            >
              Get the help you need in just a few clicks.
              Here's how it works for you.
            </p>

            {/* BUTTON */}
            <button
              type="button"
              className="
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-[9px]
                bg-[#000b76]
                px-7
                py-3.5
                text-[13px]
                font-semibold
                text-white
                shadow-sm
                transition
                duration-200
                hover:bg-[#00129a]
              "
            >
              Find an Artisan

              <ArrowRight
                size={17}
                strokeWidth={1.8}
              />
            </button>
          </div>


          {/* =====================================================
              JOURNEY STEPS
          ====================================================== */}
          <div
            className="
              min-w-0
              flex-1
              overflow-x-auto
              pb-4
              scrollbar-thin
              scrollbar-thumb-[#b8c9ef]
              scrollbar-track-transparent
              lg:overflow-visible
              lg:pb-0
            "
          >

            <div
              className="
                flex
                min-w-max
                items-start
                gap-0
                lg:min-w-0
              "
            >

              {journeySteps.map((step, index) => (
                <div
                  key={step.number}
                  className="flex items-center"
                >

                  {/* =================================================
                      STEP CARD
                  ================================================== */}
                  <div
                    className="
                      w-[150px]
                      overflow-hidden
                      rounded-[14px]
                      bg-white
                      shadow-[0_8px_30px_rgba(0,11,118,0.05)]
                      sm:w-[165px]
                      lg:w-[150px]
                      xl:w-[158px]
                    "
                  >

                    {/* IMAGE */}
                    <div className="relative h-[105px] w-full overflow-hidden bg-[#e7efff] sm:h-[115px]">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    </div>


                    {/* CARD CONTENT */}
                    <div className="px-4 pb-5 pt-3">

                      {/* NUMBER */}
                      <div
                        className="
                          mb-3
                          flex
                          h-[24px]
                          w-[24px]
                          items-center
                          justify-center
                          rounded-full
                          bg-[#164bd8]
                          text-[11px]
                          font-bold
                          text-white
                        "
                      >
                        {step.number}
                      </div>


                      {/* TITLE */}
                      <h3
                        className="
                          min-h-[38px]
                          text-[13px]
                          font-bold
                          leading-[1.2]
                          text-[#000b76]
                        "
                      >
                        {step.title}
                      </h3>


                      {/* DESCRIPTION */}
                      <p
                        className="
                          mt-2
                          text-[10px]
                          leading-[1.55]
                          text-[#6678a3]
                        "
                      >
                        {step.description}
                      </p>

                    </div>
                  </div>


                  {/* =================================================
                      CONNECTING ARROW
                  ================================================== */}
                  {index < journeySteps.length - 1 && (
                    <div
                      className="
                        flex
                        w-[25px]
                        shrink-0
                        items-center
                        justify-center
                        lg:w-[24px]
                        xl:w-[28px]
                      "
                    >
                      <ArrowRight
                        size={17}
                        strokeWidth={1.6}
                        className="text-[#2161ff]"
                      />
                    </div>
                  )}

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>


      {/* =========================================================
          SUBTLE BACKGROUND DECORATION
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-24
          h-48
          w-48
          rounded-full
          bg-[#dce8ff]
          opacity-40
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-[#dce8ff]
          opacity-30
        "
      />

    </section>
  );
}