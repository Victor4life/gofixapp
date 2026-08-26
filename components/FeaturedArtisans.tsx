"use client";

import Image from "next/image";
import {
  ArrowRight,
  Check,
  MapPin,
  Star,
} from "lucide-react";

const artisans = [
  {
    name: "John Adewale",
    profession: "Master Plumber",
    rating: "4.9",
    jobs: "127",
    location: "Lagos",
    description:
      "Specialist in plumbing repairs, installations and maintenance.",
    image: "/images/artisans/john.jpg",
    featured: true,
  },
  {
    name: "Michael Okoro",
    profession: "Electrician",
    rating: "4.8",
    jobs: "84",
    location: "Lagos",
    image: "/images/artisans/michael.jpg",
    featured: false,
  },
  {
    name: "David Adebayo",
    profession: "Carpenter",
    rating: "5.0",
    jobs: "96",
    location: "Abuja",
    image: "/images/artisans/david.jpg",
    featured: false,
  },
  {
    name: "Samuel James",
    profession: "Painter",
    rating: "4.9",
    jobs: "73",
    location: "Lagos",
    image: "/images/artisans/samuel.jpg",
    featured: false,
  },
];

function VerifiedBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[#1554d1] shadow-md">
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#1554d1]">
        <Check size={10} strokeWidth={3} className="text-white" />
      </span>

      Verified
    </div>
  );
}

export default function TrustedArtisans() {
  const featured = artisans.find((artisan) => artisan.featured);
  const others = artisans.filter((artisan) => !artisan.featured);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 md:px-6 md:py-20 lg:px-10">
      <div
        className="
          relative
          mx-auto
          max-w-[1440px]
          overflow-hidden
          rounded-[34px]
          bg-[#f8faff]
          px-6
          py-12
          md:px-10
          md:py-16
          lg:px-12
          lg:py-20
        "
      >
        {/* =====================================================
            SOFT BACKGROUND BLOB
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -right-[15%]
            -top-[25%]
            h-[600px]
            w-[65%]
            rounded-full
            bg-[#eaf1ff]
            blur-[2px]
            lg:h-[750px]
          "
        />

        {/* =====================================================
            DARK BLUE ORGANIC SHAPE
        ===================================================== */}

        {/* White cut-out creating the wave */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-[365px]
            -left-[5%]
            h-[220px]
            w-[60%]
            rotate-[-4deg]
            rounded-[50%]
            bg-[#f8faff]
          "
        />

        {/* =====================================================
            DECORATIVE DOTS
        ===================================================== */}

        <div className="pointer-events-none absolute right-10 top-12 hidden opacity-50 lg:block">
          <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: 25 }).map((_, index) => (
              <span
                key={index}
                className="h-2 w-2 rounded-full bg-[#b9cdf5]"
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="relative z-10 mb-12 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-100
                bg-white
                px-4
                py-2
                text-sm
                font-semibold
                text-[#1554d1]
                shadow-sm
              "
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1554d1]">
                <Check
                  size={11}
                  strokeWidth={3}
                  className="text-white"
                />
              </span>

              Trusted Artisans
            </div>

            <h2
              className="
                mt-6
                max-w-[600px]
                text-[38px]
                font-semibold
                leading-[1.08]
                tracking-[-0.04em]
                text-[#071b49]
                md:text-[48px]
              "
            >
              Meet the professionals
              <br />
              <span className="text-[#1554d1]">
                behind great work.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-[550px]
                text-[15px]
                leading-7
                text-[#596983]
                md:text-[16px]
              "
            >
              Verified professionals, highly rated by customers and ready
              to help with your next job.
            </p>
          </div>

          {/* View all */}

          <button
            type="button"
            className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-3
              rounded-full
              bg-white
              px-5
              py-3
              text-sm
              font-semibold
              text-[#1554d1]
              shadow-sm
              ring-1
              ring-blue-100
              transition-all
              duration-300
              hover:bg-[#1554d1]
              hover:text-white
              hover:shadow-lg
            "
          >
            View all artisans

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* =====================================================
            ARTISAN SHOWCASE
        ===================================================== */}

        <div className="relative z-10 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          {/* ===================================================
              FEATURED ARTISAN
          =================================================== */}

          {featured && (
            <article
              className="
                group
                relative
                min-h-[520px]
                overflow-hidden
                rounded-[30px]
                bg-[#000b76]
                shadow-[0_25px_60px_rgba(7,27,73,0.18)]
              "
            >
              {/* Image */}

              <Image
                src={featured.image}
                alt={featured.name}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Dark gradient */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#000b76]
                  via-[#000b76]/25
                  to-transparent
                "
              />

              {/* Verification */}

              <div className="absolute left-6 top-6">
                <VerifiedBadge />
              </div>

              {/* Featured label */}

              <div
                className="
                  absolute
                  right-6
                  top-6
                  rounded-full
                  bg-[#1554d1]
                  px-4
                  py-2
                  text-[11px]
                  font-semibold
                  text-white
                  shadow-lg
                "
              >
                Top Artisan
              </div>

              {/* Content */}

              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                <p className="text-sm font-medium text-blue-200">
                  {featured.profession}
                </p>

                <h3
                  className="
                    mt-1
                    text-[30px]
                    font-semibold
                    tracking-[-0.03em]
                    text-white
                    md:text-[36px]
                  "
                >
                  {featured.name}
                </h3>

                <p className="mt-3 max-w-[440px] text-sm leading-6 text-blue-100">
                  {featured.description}
                </p>

                {/* Stats */}

                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white">
                  <div className="flex items-center gap-1.5">
                    <Star
                      size={16}
                      fill="currentColor"
                      className="text-white"
                    />

                    <span className="font-semibold">
                      {featured.rating}
                    </span>
                  </div>

                  <span className="h-4 w-px bg-white/30" />

                  <span>
                    {featured.jobs} jobs completed
                  </span>

                  <span className="h-4 w-px bg-white/30" />

                  <div className="flex items-center gap-1.5">
                    <MapPin size={15} />
                    {featured.location}
                  </div>
                </div>

                {/* Button */}

                <button
                  type="button"
                  className="
                    group/button
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-[#000b76]
                    transition-all
                    duration-300
                    hover:bg-[#1554d1]
                    hover:text-white
                  "
                >
                  View Profile

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/button:translate-x-1"
                  />
                </button>
              </div>
            </article>
          )}

          {/* ===================================================
              SMALL ARTISANS
          =================================================== */}

          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {others.map((artisan) => (
              <article
                key={artisan.name}
                className="
                  group
                  relative
                  flex
                  min-h-[165px]
                  overflow-hidden
                  rounded-[26px]
                  bg-white
                  p-3
                  shadow-[0_12px_35px_rgba(7,27,73,0.08)]
                  ring-1
                  ring-slate-100
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_18px_40px_rgba(7,27,73,0.13)]
                "
              >
                {/* Image */}

                <div className="relative h-full min-h-[145px] w-[135px] shrink-0 overflow-hidden rounded-[20px]">
                  <Image
                    src={artisan.image}
                    alt={artisan.name}
                    fill
                    sizes="135px"
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute left-2 top-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1554d1] shadow-md">
                      <Check
                        size={12}
                        strokeWidth={3}
                        className="text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}

                <div className="flex flex-1 flex-col justify-center px-4 py-3">
                  <p className="text-xs font-medium text-[#1554d1]">
                    {artisan.profession}
                  </p>

                  <h3
                    className="
                      mt-1
                      text-[18px]
                      font-semibold
                      tracking-[-0.02em]
                      text-[#071b49]
                    "
                  >
                    {artisan.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-semibold text-[#071b49]">
                      <Star
                        size={13}
                        fill="currentColor"
                        className="text-[#1554d1]"
                      />

                      {artisan.rating}
                    </span>

                    <span>•</span>

                    <span>{artisan.jobs} jobs</span>
                  </div>

                  <div className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                    <MapPin size={13} />
                    {artisan.location}
                  </div>

                  <button
                    type="button"
                    className="
                      group/profile
                      mt-3
                      flex
                      w-fit
                      items-center
                      gap-1
                      text-xs
                      font-semibold
                      text-[#1554d1]
                    "
                  >
                    View Profile

                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover/profile:translate-x-1"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =====================================================
            TRUST STATS
        ===================================================== */}

      </div>
    </section>
  );
}