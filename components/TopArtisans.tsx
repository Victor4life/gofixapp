"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Star,
} from "lucide-react";

const artisans = [
  {
    name: "John Adewale",
    profession: "Plumbing Specialist",
    rating: "4.9",
    reviews: "120",
    location: "Lagos, Nigeria",
    image: "/images/artisans/john-adewale.png",
  },
  {
    name: "Michael Okoro",
    profession: "Electrician",
    rating: "4.8",
    reviews: "98",
    location: "Abuja, Nigeria",
    image: "/images/artisans/michael-okoro.png",
  },
  {
    name: "David Musa",
    profession: "Carpenter",
    rating: "4.9",
    reviews: "76",
    location: "Lagos, Nigeria",
    image: "/images/artisans/david-musa.png",
  },
  {
    name: "Samuel Paints",
    profession: "Painter",
    rating: "4.7",
    reviews: "64",
    location: "Port Harcourt",
    image: "/images/artisans/samuel-paints.png",
  },
];

export default function TopArtisans() {
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
          lg:py-[46px]
        "
      >

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            mb-[28px]
            flex
            items-end
            justify-between
          "
        >
          {/* LEFT */}

          <div>
            <p
              className="
                mb-[9px]
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.02em]
                text-[#164de8]
              "
            >
              Top Artisans
            </p>

            <h2
              className="
                text-[30px]
                font-semibold
                leading-[1.08]
                tracking-[-0.035em]
                text-[#07145f]
                sm:text-[32px]
              "
            >
              Top rated
              <br />
              artisans near you
            </h2>
          </div>

          {/* VIEW ALL */}

          <Link
            href="/artisans"
            className="
              mb-[5px]
              hidden
              items-center
              gap-[10px]
              text-[12px]
              font-semibold
              text-[#003dcc]
              transition-all
              hover:gap-[14px]
              sm:flex
            "
          >
            View all artisans

            <ArrowRight
              size={16}
              strokeWidth={2}
            />
          </Link>
        </div>

        {/* =====================================================
            ARTISAN CARDS
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-[14px]
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {artisans.map((artisan) => (
            <Link
              key={artisan.name}
              href="/artisans"
              className="
                group
                flex
                h-[170px]
                items-center
                gap-[14px]
                overflow-hidden
                rounded-[9px]
                border
                border-[#dce2ee]
                bg-white
                p-[9px]
                transition-all
                duration-200
                hover:-translate-y-[2px]
                hover:border-[#b8c7ed]
                hover:shadow-[0_8px_24px_rgba(7,20,95,0.06)]
              "
            >

              {/* =================================================
                  ARTISAN IMAGE
              ================================================== */}

              <div
                className="
                  relative
                  h-full
                  w-[112px]
                  shrink-0
                  overflow-hidden
                  rounded-[6px]
                  bg-[#edf0f5]
                "
              >
                <Image
                  src={artisan.image}
                  alt={artisan.name}
                  fill
                  sizes="112px"
                  className="
                    object-cover
                    object-center
                    transition-transform
                    duration-300
                    group-hover:scale-[1.03]
                  "
                />
              </div>

              {/* =================================================
                  INFORMATION
              ================================================== */}

              <div
                className="
                  flex
                  min-w-0
                  flex-1
                  flex-col
                  justify-center
                "
              >

                {/* NAME */}

                <h3
                  className="
                    truncate
                    text-[14px]
                    font-semibold
                    leading-[1.25]
                    tracking-[-0.015em]
                    text-[#07145f]
                  "
                >
                  {artisan.name}
                </h3>

                {/* PROFESSION */}

                <p
                  className="
                    mt-[5px]
                    truncate
                    text-[11px]
                    leading-[1.3]
                    text-[#687394]
                  "
                >
                  {artisan.profession}
                </p>

                {/* RATING */}

                <div
                  className="
                    mt-[15px]
                    flex
                    items-center
                    gap-[5px]
                  "
                >
                  <Star
                    size={13}
                    fill="currentColor"
                    strokeWidth={0}
                    className="text-[#f4b400]"
                  />

                  <span
                    className="
                      text-[11px]
                      font-medium
                      text-[#596582]
                    "
                  >
                    {artisan.rating}
                  </span>

                  <span
                    className="
                      text-[10px]
                      text-[#8b94aa]
                    "
                  >
                    ({artisan.reviews})
                  </span>
                </div>

                {/* LOCATION */}

                <div
                  className="
                    mt-[10px]
                    flex
                    min-w-0
                    items-center
                    gap-[5px]
                  "
                >
                  <MapPin
                    size={12}
                    strokeWidth={1.8}
                    className="
                      shrink-0
                      text-[#68779e]
                    "
                  />

                  <span
                    className="
                      truncate
                      text-[10px]
                      leading-[1.3]
                      text-[#68779e]
                    "
                  >
                    {artisan.location}
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* =====================================================
            MOBILE VIEW ALL
        ====================================================== */}

        <Link
          href="/artisans"
          className="
            mt-[22px]
            flex
            w-fit
            items-center
            gap-[9px]
            text-[12px]
            font-semibold
            text-[#003dcc]
            sm:hidden
          "
        >
          View all artisans

          <ArrowRight
            size={15}
            strokeWidth={2}
          />
        </Link>

      </div>
    </section>
  );
}