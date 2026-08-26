"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "I needed a plumber urgently and GoFix made the whole process incredibly easy. I found a verified artisan, booked him and the job was completed perfectly.",
    name: "Sarah Johnson",
    role: "Homeowner",
    location: "Lagos, Nigeria",
    image: "/images/testimonials/sarah.jpg",
  },
  {
    quote:
      "Finding a reliable electrician used to be stressful. With GoFix, I could check reviews and hire someone with confidence.",
    name: "David Williams",
    role: "Business Owner",
    location: "Abuja, Nigeria",
    image: "/images/testimonials/david.jpg",
  },
  {
    quote:
      "The artisan arrived on time, understood exactly what I needed and delivered excellent work. I would definitely use GoFix again.",
    name: "Amaka Okafor",
    role: "Homeowner",
    location: "Port Harcourt, Nigeria",
    image: "/images/testimonials/amaka.jpg",
  },
];

export default function Testimonials() {
  const testimonial = testimonials[0];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 md:px-6 md:py-20 lg:px-10">
      <div
        className="
          relative
          mx-auto
          max-w-[1440px]
          overflow-hidden
          rounded-[36px]
          bg-[#000b76]
          px-6
          py-12
          md:px-10
          md:py-16
          lg:px-16
          lg:py-20
        "
      >
        {/* =====================================================
            BACKGROUND BLOBS
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -right-[180px]
            -top-[220px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#1554d1]
            opacity-40
            blur-[2px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[250px]
            -left-[150px]
            h-[500px]
            w-[650px]
            rounded-full
            bg-[#1554d1]
            opacity-30
            blur-[3px]
          "
        />

        {/* =====================================================
            DECORATIVE WHITE WAVE
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -right-[100px]
            top-[-300px]
            h-[500px]
            w-[700px]
            rotate-[-12deg]
            rounded-[50%]
            bg-white/10
          "
        />

        {/* =====================================================
            DOT PATTERN
        ===================================================== */}

        <div className="pointer-events-none absolute bottom-10 right-10 hidden opacity-30 lg:block">
          <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: 25 }).map((_, index) => (
              <span
                key={index}
                className="h-2 w-2 rounded-full bg-white"
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="relative z-10">
          {/* HEADER */}

          <div className="max-w-[600px]">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white/10
                px-4
                py-2
                text-sm
                font-semibold
                text-blue-100
                ring-1
                ring-white/10
                backdrop-blur-sm
              "
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
                <Star
                  size={11}
                  fill="currentColor"
                  className="text-[#1554d1]"
                />
              </span>

              Customer Stories
            </div>

            <h2
              className="
                mt-6
                text-[38px]
                font-semibold
                leading-[1.08]
                tracking-[-0.04em]
                text-white
                md:text-[48px]
              "
            >
              Real people.
              <br />
              <span className="text-blue-300">
                Real results.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-[520px]
                text-[15px]
                leading-7
                text-blue-100
                md:text-[16px]
              "
            >
              See why customers trust GoFix to connect them with
              skilled professionals for their everyday jobs.
            </p>
          </div>

          {/* ===================================================
              TESTIMONIAL SHOWCASE
          =================================================== */}

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_430px] lg:items-center">
            {/* QUOTE */}

            <div className="relative">
              {/* Quote icon */}

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white/10
                  text-white
                  ring-1
                  ring-white/10
                "
              >
                <Quote size={28} strokeWidth={1.5} />
              </div>

              {/* Quote text */}

              <blockquote
                className="
                  mt-7
                  max-w-[720px]
                  text-[25px]
                  font-medium
                  leading-[1.4]
                  tracking-[-0.02em]
                  text-white
                  md:text-[32px]
                  lg:text-[36px]
                "
              >
                “{testimonial.quote}”
              </blockquote>

              {/* Rating */}

              <div className="mt-7 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={17}
                    fill="currentColor"
                    className="text-white"
                  />
                ))}
              </div>

              {/* Customer */}

              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs text-blue-200">
                    {testimonial.role} · {testimonial.location}
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                CUSTOMER IMAGE
            ================================================= */}

            <div
              className="
                group
                relative
                h-[390px]
                overflow-hidden
                rounded-[30px]
                bg-white/10
                p-2
                ring-1
                ring-white/10
              "
            >
              <div className="relative h-full w-full overflow-hidden rounded-[24px]">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 430px"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#000b76]/50 via-transparent to-transparent" />

                {/* Rating badge */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-4
                    py-2.5
                    shadow-xl
                  "
                >
                  <Star
                    size={15}
                    fill="currentColor"
                    className="text-[#1554d1]"
                  />

                  <span className="text-sm font-bold text-[#071b49]">
                    5.0
                  </span>

                  <span className="text-xs text-slate-400">
                    Customer rating
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              NAVIGATION
          =================================================== */}

          <div className="mt-10 flex items-center justify-between">
            {/* Dots */}

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    index === 0
                      ? "w-8 bg-white"
                      : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}

            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/5
                  text-white
                  transition-all
                  hover:bg-white
                  hover:text-[#000b76]
                "
              >
                <ArrowLeft size={17} />
              </button>

              <button
                type="button"
                aria-label="Next testimonial"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#000b76]
                  transition-all
                  hover:bg-blue-100
                "
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}