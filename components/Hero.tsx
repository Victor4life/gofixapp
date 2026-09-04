"use client";

import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* ============================================================
          HERO
      ============================================================ */}
      <div className="relative min-h-[680px] overflow-hidden bg-[#000b76]">

        {/* ==========================================================
            BACKGROUND DECORATION
        ========================================================== */}

        {/* Large subtle blue circle */}
        <div
          className="
            absolute
            -right-[70px]
            -top-[90px]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#081b9b]
            lg:h-[430px]
            lg:w-[430px]
          "
        />

        {/* Small blue circle */}
        <div
          className="
            absolute
            right-[38%]
            top-[110px]
            h-[70px]
            w-[70px]
            rounded-full
            bg-[#1230a8]
          "
        />

        {/* Small blue circle behind artisan */}
        <div
          className="
            absolute
            right-[9%]
            top-[175px]
            h-[120px]
            w-[120px]
            rounded-full
            bg-[#1029a5]
          "
        />


        {/* ==========================================================
            DECORATIVE SVG BLOBS
        ========================================================== */}

        <svg
          className="
            pointer-events-none
            absolute
            hidden
            right-[-20px]
            top-[70px]
            z-[2]
            h-[530px]
            w-[760px]
            lg:right-[-30px]
            lg:top-[55px]
            lg:h-[570px]
            lg:w-[820px]
          "
          viewBox="0 0 820 570"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          {/* Blue organic shape */}
          <path
            d="
              M180 390
              C110 350 85 285 145 235
              C210 182 270 210 320 155
              C370 100 445 75 520 115
              C600 158 655 112 710 165
              C770 222 725 292 758 342
              C795 400 755 470 690 492
              C610 520 570 475 505 510
              C430 550 350 520 315 470
              C280 420 235 425 180 390Z
            "
            fill="#1239B7"
          />

          {/* White organic blob */}
          <path
            d="
              M275 380
              C220 330 210 280 250 235
              C290 190 340 195 375 155
              C420 105 485 88 540 120
              C600 155 620 215 680 240
              C730 262 748 315 725 360
              C700 410 650 422 610 450
              C560 485 505 472 460 445
              C410 415 365 430 325 420
              C305 415 288 400 275 380Z
            "
            fill="white"
          />

          {/* Thin white outline */}
          <path
            d="
              M120 400
              C70 350 78 300 130 265
              C185 228 230 245 280 195
              C335 140 390 108 470 135
              C545 160 590 130 650 165
              C720 205 730 260 760 300
              C800 350 770 425 700 455
              C635 485 580 455 520 490
              C450 530 370 510 330 460
              C285 405 225 440 170 425
              C150 420 133 410 120 400Z
            "
            stroke="white"
            strokeWidth="2"
            opacity="0.85"
          />

        </svg>


        {/* ==========================================================
            DOT PATTERN
        ========================================================== */}
        <div
          className="
            absolute
            left-[43%]
            top-[218px]
            z-[4]
            hidden
            grid-cols-4
            gap-[18px]
            lg:grid
          "
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <span
              key={index}
              className="
                h-[5px]
                w-[5px]
                rounded-full
                bg-[#4169ed]
              "
            />
          ))}
        </div>


        {/* ==========================================================
            DECORATIVE RIGHT CIRCLE
        ========================================================== */}
        <div
          className="
            absolute
            right-[7%]
            top-[280px]
            z-[5]
            hidden
            h-[72px]
            w-[72px]
            rounded-full
            border
            border-[#4568dd]
            lg:block
          "
        />

        <div
          className="
            absolute
            right-[8.2%]
            top-[301px]
            z-[5]
            hidden
            h-[28px]
            w-[28px]
            rounded-full
            bg-[#1239b7]
            lg:block
          "
        />


        {/* ==========================================================
            HEADER
        ========================================================== */}
<Navbar />

        {/* ==========================================================
            MAIN HERO CONTENT
        ========================================================== */}
        <div
          className="
            relative
            z-20
            mx-auto
            grid
            max-w-[1400px]
            grid-cols-1
            px-6
            pt-[50px]
            lg:grid-cols-[43%_57%]
            lg:px-12
            lg:pt-[55px]
          "
        >

          {/* ========================================================
              LEFT
          ======================================================== */}
          <div className="relative z-20">

            {/* Badge */}
            <div
              className="
                mb-7
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#12339d]
                px-4
                py-2
                text-[13px]
                font-medium
                text-white
              "
            >

              <span
                className="
                  flex
                  h-[23px]
                  w-[23px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                "
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000b76"
                  strokeWidth="2"
                >
                  <path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
                  <path d="m8.5 12 2.2 2.2 4.8-5" />
                </svg>
              </span>

              Verified artisans. Quality you can trust.

            </div>


            {/* Heading */}
            <h1
              className="
                max-w-[590px]
                text-[48px]
                font-bold
                leading-[1.01]
                tracking-[-0.04em]
                text-white
                sm:text-[55px]
                lg:text-[61px]
              "
            >
              Reliable help,
              <br />
              right when you
              <br />

              <span className="text-[#6388ff]">
                need it.
              </span>

            </h1>


            {/* Description */}
            <p
              className="
                mt-7
                max-w-[470px]
                text-[16px]
                leading-7
                text-white/85
              "
            >
              GoFix connects you with skilled and verified
              artisans for any job, big or small.
            </p>


            {/* CTA */}
            <div className="mt-8 flex items-center gap-7">

              <button
                className="
                  flex
                  items-center
                  gap-4
                  rounded-[9px]
                  bg-white
                  px-7
                  py-4
                  text-[14px]
                  font-semibold
                  text-[#000b76]
                "
              >
                Find an Artisan

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>

              </button>


              <button
                className="
                  flex
                  items-center
                  gap-3
                  text-[15px]
                  font-medium
                  text-white
                "
              >

                <span
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white
                  "
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>

                How It Works

              </button>

            </div>

          </div>


          {/* ========================================================
              RIGHT / ARTISAN
          ======================================================== */}
          <div
            className="
              relative
              mt-[-30px]
              min-h-[530px]
              lg:mt-[-85px]
              lg:min-h-[590px]
            "
          >

            {/* Artisan */}
            <div
              className="
                absolute
                right-[-40px]
                top-[-5px]
                z-10

                h-[555px]
                w-[720px]

                lg:right-[-65px]
                lg:top-[-35px]
                lg:h-[620px]
                lg:w-[800px]
              "
            >
              <Image
                src="/images/hero-nanner.png"
                alt="GoFix artisan working"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain object-center"
              />
            </div>

          </div>

        </div>


        {/* ==========================================================
            MAIN WHITE WAVE
        ========================================================== */}

        <svg
          className="
            pointer-events-none
            absolute
            bottom-[-2px]
            left-0
            z-20
            h-[120px]
            w-full          "
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M0 95
              C130 145 230 155 370 132
              C540 105 600 70 770 72
              C930 74 1030 108 1170 96
              C1300 85 1370 45 1440 20
              L1440 160
              L0 160
              Z
            "
            fill="white"
          />
        </svg>

      </div>


      {/* ============================================================
          SEARCH BAR
      ============================================================ */}
      <div
        className="
          relative
          z-40
          mx-auto
          -mt-[58px]
          max-w-[1120px]
          px-5
          lg:-mt-[65px]
        "
      >

        <div
          className="
            grid
            rounded-[18px]
            border
            border-[#e5eaf5]
            bg-white
            p-2
            shadow-[0_15px_45px_rgba(0,11,118,0.13)]
            lg:grid-cols-[1.35fr_1fr_1.05fr_180px]
          "
        >

          {/* Service */}
          <div
            className="
              flex
              items-center
              gap-4
              border-b
              border-[#edf0f6]
              px-5
              py-4
              lg:border-b-0
              lg:border-r
            "
          >

            <div
              className="
                flex
                h-[43px]
                w-[43px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#f1f5ff]
                text-[#153bd0]
              "
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
            </div>

            <div>

              <div className="text-[12px] font-semibold text-[#10234b]">
                What service do you need?
              </div>

              <div className="mt-1 text-[13px] text-[#8993aa]">
                e.g. Plumbing, Electrical, Painting
              </div>

            </div>

          </div>


          {/* Location */}
          <div
            className="
              flex
              items-center
              gap-4
              border-b
              border-[#edf0f6]
              px-5
              py-4
              lg:border-b-0
              lg:border-r
            "
          >

            <div
              className="
                flex
                h-[43px]
                w-[43px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#f1f5ff]
                text-[#153bd0]
              "
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>

            <div>

              <div className="text-[12px] font-semibold text-[#10234b]">
                Location
              </div>

              <div className="mt-1 text-[13px] text-[#8993aa]">
                Enter your location
              </div>

            </div>

          </div>


          {/* Category */}
          <div
            className="
              flex
              items-center
              gap-4
              border-b
              border-[#edf0f6]
              px-5
              py-4
              lg:border-b-0
              lg:border-r
            "
          >

            <div
              className="
                flex
                h-[43px]
                w-[43px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#f1f5ff]
                text-[#153bd0]
              "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="5" cy="5" r="1.5" />
                <circle cx="12" cy="5" r="1.5" />
                <circle cx="19" cy="5" r="1.5" />
                <circle cx="5" cy="12" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="19" cy="12" r="1.5" />
                <circle cx="5" cy="19" r="1.5" />
                <circle cx="12" cy="19" r="1.5" />
                <circle cx="19" cy="19" r="1.5" />
              </svg>
            </div>

            <div className="flex-1">

              <div className="text-[12px] font-semibold text-[#10234b]">
                Category
              </div>

              <div className="mt-1 flex items-center justify-between text-[13px] text-[#8993aa]">

                <span>All Categories</span>

                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>

              </div>

            </div>

          </div>


          {/* Search */}
          <div className="p-1">

            <button
              className="
                flex
                h-full
                min-h-[62px]
                w-full
                items-center
                justify-center
                rounded-[12px]
                bg-[#000b76]
                text-[14px]
                font-semibold
                text-white
                transition
                hover:bg-[#07188f]
              "
            >
              Search Artisans
            </button>

          </div>

        </div>

      </div>


    </section>
  );
}