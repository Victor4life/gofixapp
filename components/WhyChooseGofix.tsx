"use client";

import {
  UsersRound,
  BadgeCheck,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    icon: UsersRound,
    title: "Verified Artisans",
    description: (
      <>
        All artisans are vetted
        <br />
        and background
        <br />
        checked.
      </>
    ),
  },
  {
    icon: BadgeCheck,
    title: "Quality Work",
    description: (
      <>
        We ensure the job is
        <br />
        done right the first
        <br />
        time.
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: (
      <>
        Pay safely and only
        <br />
        when you're
        <br />
        satisfied.
      </>
    ),
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: (
      <>
        We're here to help
        <br />
        you anytime.
      </>
    ),
  },
];

export default function WhyChooseGofix() {
  return (
    <section className="w-full bg-[#f7f9ff]">
      <div
        className="
          mx-auto
          max-w-[1280px]
          px-6
          py-[42px]
          sm:px-8
          lg:px-[40px]
          lg:py-[48px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-[35px]
            lg:grid-cols-[270px_1fr]
            lg:items-center
            lg:gap-[55px]
          "
        >
          {/* ================================================
              LEFT CONTENT
          ================================================= */}

          <div>
            <p
              className="
                mb-[10px]
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.02em]
                text-[#164de8]
              "
            >
              Why Choose GoFix
            </p>

            <h2
              className="
                text-[28px]
                font-semibold
                leading-[1.08]
                tracking-[-0.035em]
                text-[#07145f]
                sm:text-[30px]
                lg:text-[30px]
              "
            >
              Quality service,
              <br />
              <span className="text-[#164de8]">
                you can trust.
              </span>
            </h2>
          </div>

          {/* ================================================
              BENEFITS
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-[28px]
              sm:grid-cols-2
              lg:grid-cols-4
              lg:gap-[25px]
            "
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="
                    flex
                    items-start
                    gap-[13px]
                  "
                >
                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-[46px]
                      w-[46px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#edf2ff]
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                      className="text-[#1550ed]"
                    />
                  </div>

                  {/* TEXT */}

                  <div className="pt-[1px]">
                    <h3
                      className="
                        text-[12px]
                        font-semibold
                        leading-[1.25]
                        text-[#07145f]
                      "
                    >
                      {benefit.title}
                    </h3>

                    <p
                      className="
                        mt-[7px]
                        text-[11px]
                        font-normal
                        leading-[1.5]
                        text-[#65719a]
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
      </div>
    </section>
  );
}