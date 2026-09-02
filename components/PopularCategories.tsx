"use client";

import {
  ArrowRight,
  ChevronRight,
  Hammer,
  MoreHorizontal,
  PaintRoller,
  Plug,
  Wrench,
} from "lucide-react";

const categories = [
  {
    name: "Plumbing",
    description: "Repairs, leaks & installations",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1000&q=85",
    icon: Wrench,
  },
  {
    name: "Electrical",
    description: "Wiring, repairs & installations",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=85",
    icon: Plug,
  },
  {
    name: "Carpentry",
    description: "Custom furniture, repairs & more",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=85",
    icon: Hammer,
  },
  {
    name: "Painting",
    description: "Interior & exterior painting services",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=85",
    icon: PaintRoller,
  },
  {
    name: "Cleaning",
    description: "Residential & commercial cleaning services",
    image:
      "https://images.unsplash.com/photo-1581579182210-1e3f5b8c6f2d?w=800&q=85",
    icon: MoreHorizontal,
  }
];

export default function PopularCategories() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-16">

      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[80px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#f2f5ff]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          bottom-[-180px]
          h-[380px]
          w-[380px]
          rounded-full
          border-[70px]
          border-[#f5f7ff]
        "
      />

            {/* =====================================================
          TOP RIGHT DOT PATTERN
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[7%]
          top-[65px]
          hidden
          opacity-70
          lg:block
        "
      >
        <div className="grid grid-cols-4 gap-[18px]">
          {Array.from({ length: 16 }).map((_, index) => (
            <span
              key={index}
              className="h-[6px] w-[6px] rounded-full bg-[#a9c6fa]"
            />
          ))}
        </div>
      </div>



      <div className="relative mx-auto max-w-[1380px] px-6 lg:px-10">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className="
            mb-12
            flex
            flex-col
            justify-between
            gap-6
            md:flex-row
            md:items-end
          "
        >

          <div>

            {/* Eyebrow */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-100
                bg-[#f1f6ff]
                px-4
                py-2
                text-sm
                font-semibold
                text-[#1554d1]
                shadow-sm
              "
            >
              <span
                className="
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-[#1554d1]
                "
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
              </span>

              Popular services
            </div>


            {/* Heading */}
            <h2
              className="
                mt-4
                max-w-[620px]
                text-[36px]
                font-bold
                leading-[1.08]
                tracking-[-0.035em]
                text-[#10234b]
                sm:text-[42px]
                lg:text-[48px]
              "
            >
              Find the right
              <span className="text-[#1554d1]">
                {" "}service.
              </span>
            </h2>


            <p
              className="
                mt-4
                max-w-[540px]
                text-[14px]
                leading-7
                text-[#64718a]
                sm:text-[15px]
              "
            >
              From everyday repairs to bigger projects,
              connect with trusted artisans ready to get
              the job done right.
            </p>

          </div>


          {/* View all */}
          <button
            type="button"
            className="
              group
              flex
              w-fit
              items-center
              gap-3
              rounded-full
              border
              border-[#dce4f5]
              bg-white
              px-5
              py-3
              text-[13px]
              font-semibold
              text-[#10234b]
              shadow-sm
              transition-all
              duration-300
              hover:border-[#1554d1]
              hover:text-[#1554d1]
              hover:shadow-md
            "
          >
            Explore all services

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-[#f0f4ff]
                text-[#1554d1]
                transition-all
                duration-300
                group-hover:bg-[#1554d1]
                group-hover:text-white
              "
            >
              <ArrowRight size={14} />
            </span>
          </button>

        </div>


        {/* ===================================================
            SERVICE SHOWCASE
        =================================================== */}

        <div
          className="
            grid
            gap-5
            lg:grid-cols-[1.15fr_1fr_1fr]
          "
        >

          {/* =================================================
              FEATURED SERVICE
          ================================================= */}

          <article
            className="
              group
              relative
              min-h-[300px]
              overflow-hidden
              rounded-[32px]
              bg-[#000b76]
            "
          >

            {/* Image */}
            <img
              src={categories[0].image}
              alt={categories[0].name}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                opacity-80
                transition-transform
                duration-700
                ease-out
                group-hover:scale-105
              "
            />

            {/* Dark blue overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#000b76]
                via-[#000b76]/65
                to-[#000b76]/10
              "
            />


            {/* Organic blob */}
            <div
              className="
                pointer-events-none
                absolute
                -right-[100px]
                -top-[100px]
                h-[260px]
                w-[260px]
                rounded-full
                bg-[#1554d1]/50
                blur-[2px]
              "
            />


            {/* Content */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                p-7
                lg:p-8
              "
            >

              {/* Icon */}
              <div
                className="
                  mb-5
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-[15px]
                  bg-white
                  text-[#000b76]
                  shadow-lg
                "
              >
                <Wrench size={22} strokeWidth={1.8} />
              </div>


              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a9c0ff]">
                Most requested
              </div>


              <h3
                className="
                  mt-2
                  text-[28px]
                  font-bold
                  tracking-[-0.025em]
                  text-white
                "
              >
                Plumbing
              </h3>


              <p
                className="
                  mt-2
                  max-w-[330px]
                  text-[13px]
                  leading-6
                  text-white/70
                "
              >
                Repairs, leaks, installations and
                everything in between.
              </p>


              <button
                type="button"
                className="
                  group/button
                  mt-5
                  flex
                  items-center
                  gap-2
                  text-[12px]
                  font-semibold
                  text-white
                "
              >
                Find an artisan

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#000b76]
                    transition-transform
                    duration-300
                    group-hover/button:translate-x-1
                  "
                >
                  <ArrowRight size={13} />
                </span>
              </button>

            </div>

          </article>


          {/* =================================================
              ELECTRICAL
          ================================================= */}

          <ServiceCard category={categories[1]} />


          {/* =================================================
              CARPENTRY
          ================================================= */}

          <ServiceCard category={categories[2]} />


          {/* =================================================
              PAINTING
          ================================================= */}

          <ServiceCard category={categories[3]} />

          {/* =================================================
              CLEANING
          ================================================= */}

          <ServiceCard category={categories[4]} />


          {/* =================================================
              MORE SERVICES
          ================================================= */}

          <article
            className="
              group
              relative
              flex
              min-h-[250px]
              flex-col
              justify-between
              overflow-hidden
              rounded-[28px]
              bg-[#f2f5ff]
              p-7
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_50px_rgba(0,11,118,0.08)]
            "
          >

            {/* Decorative blob */}
            <div
              className="
                absolute
                -right-[60px]
                -top-[60px]
                h-[180px]
                w-[180px]
                rounded-full
                bg-[#dce7ff]
              "
            />

            <div
              className="
                relative
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-[#9db8f5]
                bg-white
                text-[#1554d1]
              "
            >
              <MoreHorizontal size={25} strokeWidth={1.7} />
            </div>


            <div className="relative">

              <h3
                className="
                  text-[19px]
                  font-bold
                  tracking-tight
                  text-[#10234b]
                "
              >
                More services
              </h3>

              <p
                className="
                  mt-2
                  max-w-[280px]
                  text-[12px]
                  leading-5
                  text-[#64718a]
                "
              >
                Cleaning, welding, moving, appliance
                repair and much more.
              </p>


              <button
                type="button"
                className="
                  group/link
                  mt-4
                  flex
                  items-center
                  gap-1.5
                  text-[12px]
                  font-semibold
                  text-[#1554d1]
                "
              >
                View all services

                <ChevronRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover/link:translate-x-1
                  "
                />
              </button>

            </div>

          </article>

        </div>

      </div>
    </section>
  );
}


/* =============================================================
   SMALL SERVICE CARD
============================================================= */

function ServiceCard({
  category,
}: {
  category: (typeof categories)[number];
}) {
  const Icon = category.icon;

  return (
    <article
      className="
        group
        relative
        min-h-[250px]
        overflow-hidden
        rounded-[28px]
        bg-white
        shadow-[0_8px_30px_rgba(16,35,75,0.06)]
        ring-1
        ring-[#e8edf7]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_20px_50px_rgba(16,35,75,0.12)]
      "
    >

      {/* Image */}
      <img
        src={category.image}
        alt={category.name}
        className="
          absolute
          inset-0
          h-[145px]
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />


      {/* Image fade */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-[170px]
          bg-gradient-to-b
          from-black/10
          to-transparent
        "
      />


      {/* Icon */}
      <div
        className="
          absolute
          left-5
          top-[118px]
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-[15px]
          border-[3px]
          border-white
          bg-white
          text-[#1554d1]
          shadow-md
          transition-all
          duration-300
          group-hover:bg-[#000b76]
          group-hover:text-white
        "
      >
        <Icon size={20} strokeWidth={1.8} />
      </div>


      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 bg-white px-5 pb-5 pt-6">

        <div className="flex items-center justify-between">

          <h3
            className="
              text-[17px]
              font-bold
              tracking-tight
              text-[#10234b]
            "
          >
            {category.name}
          </h3>

          <span
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-[#f1f5ff]
              text-[#1554d1]
              transition-all
              duration-300
              group-hover:bg-[#1554d1]
              group-hover:text-white
            "
          >
            <ArrowRight size={13} />
          </span>

        </div>


        <p
          className="
            mt-2
            text-[12px]
            leading-5
            text-[#718098]
          "
        >
          {category.description}
        </p>

      </div>

    </article>
  );
}