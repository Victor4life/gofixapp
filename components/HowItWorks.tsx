"use client";

import {
  Award,
  Check,
  Clock3,
  FileText,
  House,
  MessageCircle,
  ShieldCheck,
  Star,
  Users,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Post a Job",
    description: (
      <>
        Tell us what you need
        <br />
        done and add the details.
        <br />
        It only takes a minute.
      </>
    ),
    icon: FileText,
  },
  {
    number: "02",
    title: "Get Matched",
    description: (
      <>
        We find the best available
        <br />
        artisans for your job and
        <br />
        send them your request.
      </>
    ),
    icon: Users,
  },
  {
    number: "03",
    title: "Review & Hire",
    description: (
      <>
        Compare profiles, reviews
        <br />
        and quotes. Choose the
        <br />
        artisan you trust.
      </>
    ),
    icon: MessageCircle,
  },
  {
    number: "04",
    title: "Get It Done",
    description: (
      <>
        Sit back and relax while
        <br />
        your job gets done right,
        <br />
        on time.
      </>
    ),
    icon: House,
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Trusted Professionals",
    description: (
      <>
        Every artisan is verified
        <br />
        and background checked.
      </>
    ),
  },
  {
    icon: Clock3,
    title: "Fast & Reliable",
    description: (
      <>
        Quick responses and
        <br />
        on-time service delivery.
      </>
    ),
  },
  {
    icon: Award,
    title: "Satisfaction Guaranteed",
    description: (
      <>
        Quality work or your money
        <br />
        back. We've got you.
      </>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-24 lg:py-16">

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* =====================================================
            BENEFITS STRIP
        ===================================================== */}

        <div
          className="
            relative
            mt-20
            overflow-hidden
            rounded-[14px]
            border
            border-[#dce8fb]
            bg-[#f8faff]

            md:mt-24
            lg:mt-28
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-3">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className={`
                    flex
                    items-center
                    gap-5
                    px-7
                    py-7

                    md:px-8
                    md:py-8
                    lg:px-10

                    ${
                      index !== benefits.length - 1
                        ? "border-b border-[#d8e5fa] md:border-b-0 md:border-r"
                        : ""
                    }
                  `}
                >

                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-[72px]
                      w-[72px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#e4edff]
                      text-[#0028a5]
                    "
                  >
                    <Icon
                      size={38}
                      strokeWidth={1.6}
                    />
                  </div>


                  {/* TEXT */}

                  <div>
                    <h3
                      className="
                        text-[17px]
                        font-bold
                        tracking-[-0.02em]
                        text-[#071b49]
                      "
                    >
                      {benefit.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[14px]
                        leading-[1.65]
                        text-[#344360]
                      "
                    >
                      {benefit.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>


        {/* =====================================================
            STEPS
        ===================================================== */}

        <div className="relative mt-20 md:mt-24 lg:mt-28">

          {/* -------------------------------------------------
              CONNECTING CURVED LINES
          ------------------------------------------------- */}

          <div
            className="
              pointer-events-none
              absolute
              left-[13%]
              right-[13%]
              top-[92px]
              hidden
              lg:block
            "
          >
            <svg
              width="100%"
              height="80"
              viewBox="0 0 1000 80"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="
                  M0 38
                  C75 5, 125 5, 200 38
                  C275 71, 325 71, 400 38
                  C475 5, 525 5, 600 38
                  C675 71, 725 71, 800 38
                  C875 5, 925 5, 1000 38
                "
                stroke="#b6cdf6"
                strokeWidth="1.5"
                strokeDasharray="2 5"
              />

              {/* Connector dots */}

              <circle
                cx="250"
                cy="38"
                r="6"
                fill="#155eef"
              />

              <circle
                cx="500"
                cy="38"
                r="6"
                fill="#155eef"
              />

              <circle
                cx="750"
                cy="38"
                r="6"
                fill="#155eef"
              />
            </svg>
          </div>


          {/* -------------------------------------------------
              STEP GRID
          ------------------------------------------------- */}

          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="
                    group
                    relative
                    text-center
                    lg:px-5
                  "
                >

                  {/* NUMBER */}

                  <div
                    className="
                      text-[46px]
                      font-semibold
                      leading-none
                      tracking-[-0.04em]
                      text-[#aec7f8]

                      md:text-[48px]
                    "
                  >
                    {step.number}
                  </div>


                  {/* ICON AREA */}

                  <div className="relative mx-auto mt-3 h-[128px] w-[128px]">

                    {/* Soft glow */}

                    <div
                      className="
                        absolute
                        inset-0
                        rounded-[24px]
                        bg-[#f5f8ff]
                        shadow-[0_15px_35px_rgba(27,70,150,0.07)]
                        transition-transform
                        duration-300
                        group-hover:-translate-y-1
                      "
                    />

                    {/* Icon */}

                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        text-[#0028a5]
                      "
                    >
                      <Icon
                        size={58}
                        strokeWidth={1.7}
                      />
                    </div>

                    {/* Small decorative circle */}

                    {step.number === "01" && (
                      <div
                        className="
                          absolute
                          bottom-[8px]
                          right-[8px]
                          flex
                          h-[34px]
                          w-[34px]
                          items-center
                          justify-center
                          rounded-full
                          bg-[#155eef]
                          text-white
                          shadow-md
                        "
                      >
                        <Check
                          size={19}
                          strokeWidth={2.5}
                        />
                      </div>
                    )}

                    {step.number === "02" && (
                      <div
                        className="
                          absolute
                          bottom-[7px]
                          right-[7px]
                          flex
                          h-[34px]
                          w-[34px]
                          items-center
                          justify-center
                          rounded-full
                          bg-[#155eef]
                          text-white
                          shadow-md
                        "
                      >
                        <Check
                          size={18}
                          strokeWidth={2.5}
                        />
                      </div>
                    )}

                    {step.number === "03" && (
                      <div
                        className="
                          absolute
                          bottom-[9px]
                          left-[15px]
                          flex
                          items-center
                          gap-[2px]
                          text-[#f7ad19]
                        "
                      >
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                      </div>
                    )}

                    {step.number === "04" && (
                      <div
                        className="
                          absolute
                          bottom-[8px]
                          right-[8px]
                          flex
                          h-[34px]
                          w-[34px]
                          items-center
                          justify-center
                          rounded-full
                          bg-[#28c76f]
                          text-white
                          shadow-md
                        "
                      >
                        <Check
                          size={18}
                          strokeWidth={2.5}
                        />
                      </div>
                    )}
                  </div>


                  {/* TITLE */}

                  <h3
                    className="
                      mt-6
                      text-[20px]
                      font-bold
                      tracking-[-0.025em]
                      text-[#071b49]

                      md:text-[21px]
                    "
                  >
                    {step.title}
                  </h3>


                  {/* DESCRIPTION */}

                  <p
                    className="
                      mx-auto
                      mt-4
                      max-w-[250px]
                      text-[15px]
                      leading-[1.75]
                      text-[#344360]
                    "
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>


      </div>


      {/* White cutout over wave */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-100px]
          left-[-100px]
          h-[190px]
          w-[440px]
          rotate-[8deg]
          rounded-[50%]
          bg-white
        "
      />
    </section>
  );
}