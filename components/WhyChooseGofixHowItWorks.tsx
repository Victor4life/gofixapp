"use client";

import Image from "next/image";
import {
  ShieldCheck,
  BadgeCheck,
  CreditCard,
  Headphones,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Artisans",
    description: "Background-checked and reviewed professionals.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Work",
    description: "Skilled artisans who get the job done right.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Pay safely with multiple payment options.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "We're here whenever you need us.",
  },
];

export default function WhyChooseGofix() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* =========================================================
            MAIN CONTENT
        ========================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-10 xl:grid-cols-[1fr_0.95fr]">

          {/* =======================================================
              LEFT CONTENT
          ======================================================== */}

          <div className="relative z-10">

            {/* SECTION LABEL */}
            <div className="mb-5 flex items-center gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#2161ff]">
                Why Choose GoFix
              </span>

              <span className="h-[1px] w-10 bg-[#2161ff]" />
            </div>


            {/* HEADING */}
            <h2
              className="
                max-w-[560px]
                text-[34px]
                font-bold
                leading-[1.12]
                tracking-[-0.035em]
                text-[#000b76]
                sm:text-[40px]
                lg:text-[42px]
                xl:text-[46px]
              "
            >
              Built for your peace of mind
            </h2>


            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                max-w-[500px]
                text-[15px]
                leading-[1.7]
                text-[#61739d]
                sm:text-[16px]
              "
            >
              We're committed to providing a safe, reliable and
              hassle-free experience for every job.
            </p>


            {/* =====================================================
                FEATURES
            ====================================================== */}

            <div
              className="
                mt-10
                grid
                grid-cols-2
                gap-x-8
                gap-y-10
                lg:max-w-[690px]
                xl:mt-12
              "
            >
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="
                      flex
                      flex-col
                      items-start
                    "
                  >

                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-[58px]
                        w-[58px]
                        items-center
                        justify-center
                        rounded-full
                        bg-[#e8f0ff]
                        text-[#164bd8]
                        sm:h-[64px]
                        sm:w-[64px]
                      "
                    >
                      <Icon
                        size={28}
                        strokeWidth={1.7}
                      />
                    </div>


                    {/* TITLE */}
                    <h3
                      className="
                        mt-5
                        text-[15px]
                        font-bold
                        leading-tight
                        text-[#000b76]
                        sm:text-[16px]
                      "
                    >
                      {feature.title}
                    </h3>


                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-2
                        max-w-[190px]
                        text-[12px]
                        leading-[1.65]
                        text-[#61739d]
                        sm:text-[13px]
                      "
                    >
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>


          {/* =======================================================
              RIGHT ARTISAN VISUAL
          ======================================================== */}

          <div
            className="
              relative
              flex
              min-h-[430px]
              items-end
              justify-center
              lg:min-h-[500px]
              xl:min-h-[540px]
            "
          >

            {/* =====================================================
                LARGE ABSTRACT BLUE SHAPE
            ====================================================== */}

            <div
              className="
                absolute
                bottom-[30px]
                right-[4%]
                h-[280px]
                w-[390px]
                rotate-[-7deg]
                rounded-[48%_52%_44%_56%/54%_42%_58%_46%]
                bg-[#79a4ff]
                sm:h-[330px]
                sm:w-[470px]
                lg:bottom-[30px]
                lg:h-[350px]
                lg:w-[510px]
                xl:h-[390px]
                xl:w-[570px]
              "
            />


            {/* SECOND LIGHT BLUE SHAPE */}

            <div
              className="
                absolute
                bottom-[10px]
                right-[10%]
                h-[300px]
                w-[410px]
                rotate-[8deg]
                rounded-[48%_52%_55%_45%/45%_55%_45%_55%]
                border-[10px]
                border-[#dce8ff]
                bg-transparent
                opacity-70
                sm:h-[350px]
                sm:w-[480px]
                lg:h-[380px]
                lg:w-[530px]
              "
            />


            {/* =====================================================
                DECORATIVE CURVED LINE
            ====================================================== */}

            <div
              className="
                absolute
                bottom-[55px]
                left-[7%]
                h-[130px]
                w-[210px]
                rotate-[-20deg]
                rounded-full
                border-t-[2px]
                border-[#d8e5ff]
                sm:left-[4%]
                lg:left-[2%]
              "
            />


            {/* =====================================================
                ARTISAN IMAGE
            ====================================================== */}

            <div
              className="
                relative
                z-10
                h-[390px]
                w-[360px]
                sm:h-[450px]
                sm:w-[420px]
                lg:h-[490px]
                lg:w-[460px]
                xl:h-[540px]
                xl:w-[520px]
              "
            >
              <Image
                src="/images/how-it-works/trusted-artisan.png"
                alt="Trusted GoFix professional artisan"
                fill
                priority
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 420px, 520px"
              />
            </div>


            {/* =====================================================
                TRUSTED PROFESSIONALS BADGE
            ====================================================== */}

            <div
              className="
                absolute
                right-[0]
                top-[8%]
                z-20
                flex
                rotate-[-5deg]
                items-center
                gap-3
                rounded-[10px]
                bg-white
                px-4
                py-3
                shadow-[0_8px_30px_rgba(0,11,118,0.10)]
                sm:right-[2%]
                lg:right-[-2%]
                xl:right-[1%]
              "
            >

              {/* CHECK */}
              <div
                className="
                  flex
                  h-[25px]
                  w-[25px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#dce8ff]
                  text-[#1652db]
                "
              >
                <CheckCircle2
                  size={18}
                  strokeWidth={2}
                />
              </div>


              {/* TEXT */}
              <div className="leading-[1.15]">
                <p className="text-[12px] font-bold text-[#000b76]">
                  Trusted
                </p>

                <p className="text-[12px] font-bold text-[#000b76]">
                  Professionals
                </p>
              </div>

            </div>


            {/* =====================================================
                SMALL CURVED ARROW
            ====================================================== */}

            <div
              className="
                absolute
                right-[7%]
                top-[22%]
                z-20
                hidden
                h-[80px]
                w-[100px]
                rotate-[20deg]
                border-b-[2px]
                border-r-[2px]
                border-[#2161ff]
                lg:block
              "
              style={{
                borderRadius: "0 0 70px 0",
              }}
            />

          </div>

        </div>
      </div>
    </section>
  );
}