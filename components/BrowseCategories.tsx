"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  Plug,
  Hammer,
  PaintRoller,
  Sparkles,
  Settings,
  Snowflake,
  Grid3X3,
  House,
  Bug,
  Leaf,
  BriefcaseBusiness,
  Users,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    name: "Plumbing",
    description: "Fix leaks, install fixtures, and more.",
    artisans: "1,250+",
    image: "/images/categories/plumbing.jpg",
    icon: Wrench,
  },
  {
    name: "Electrical",
    description: "Wiring, repairs, installations done safely.",
    artisans: "1,180+",
    image: "/images/categories/electrical.jpg",
    icon: Plug,
  },
  {
    name: "Carpentry",
    description: "Custom woodwork, repairs and installations.",
    artisans: "980+",
    image: "/images/categories/carpentry.jpg",
    icon: Hammer,
  },
  {
    name: "Painting",
    description: "Give your space a fresh and lasting look.",
    artisans: "1,100+",
    image: "/images/categories/painting.jpg",
    icon: PaintRoller,
  },
  {
    name: "Cleaning",
    description: "Home, office, deep cleaning services.",
    artisans: "870+",
    image: "/images/categories/cleaning.jpg",
    icon: Sparkles,
  },
  {
    name: "Appliance Repair",
    description: "Fix and maintain your home appliances.",
    artisans: "760+",
    image: "/images/categories/appliance-repair.jpg",
    icon: Settings,
  },
  {
    name: "AC & Heating",
    description: "Installation, maintenance and repairs.",
    artisans: "640+",
    image: "/images/categories/ac-heating.jpg",
    icon: Snowflake,
  },
  {
    name: "Tiling",
    description: "Wall, floor, kitchen and bathroom tiling.",
    artisans: "520+",
    image: "/images/categories/tiling.jpg",
    icon: Grid3X3,
  },
  {
    name: "Roofing",
    description: "Roof repairs, installation and maintenance.",
    artisans: "430+",
    image: "/images/categories/roofing.jpg",
    icon: House,
  },
  {
    name: "Pest Control",
    description: "Get rid of pests and keep your space safe.",
    artisans: "380+",
    image: "/images/categories/pest-control.jpg",
    icon: Bug,
  },
  {
    name: "Gardening",
    description: "Lawn care, trimming and landscaping.",
    artisans: "310+",
    image: "/images/categories/gardening.jpg",
    icon: Leaf,
  },
  {
    name: "Handyman",
    description: "General repairs and maintenance.",
    artisans: "900+",
    image: "/images/categories/handyman.jpg",
    icon: BriefcaseBusiness,
  },
];

export default function BrowseCategories() {
  return (
    <section className="bg-[#f7f9ff] px-6 py-16 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1400px]">

        {/* ==========================================================
            TOP SECTION
        ========================================================== */}

        <div
          className="
            mb-10
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          {/* LEFT */}

          <div className="max-w-[560px]">

            {/* BREADCRUMB */}

            <div
              className="
                mb-6
                flex
                items-center
                gap-3
                text-[13px]
                font-medium
                text-[#7b849d]
              "
            >
              <Link
                href="/"
                className="transition-colors hover:text-[#000b76]"
              >
                Home
              </Link>

              <span>/</span>

              <span className="text-[#000b76]">
                Categories
              </span>
            </div>

            {/* LABEL */}

            <p
              className="
                mb-2
                text-[12px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#1747e8]
              "
            >
              OUR SERVICES
            </p>

            {/* TITLE */}

            <h2
              className="
                text-[34px]
                font-semibold
                leading-[1.12]
                tracking-[-0.025em]
                text-[#07135f]
                sm:text-[40px]
                lg:text-[44px]
              "
            >
              Browse by category
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-3
                max-w-[520px]
                text-[15px]
                leading-[1.65]
                text-[#68718a]
                sm:text-[16px]
              "
            >
              Explore our wide range of services and find
              the right professional for your needs.
            </p>
          </div>

          {/* ======================================================
              SORT
          ====================================================== */}

          <button
            type="button"
            className="
              flex
              h-[48px]
              min-w-[150px]
              items-center
              justify-between
              gap-5
              rounded-[10px]
              border
              border-[#dfe4ef]
              bg-white
              px-4
              text-[13px]
              font-semibold
              text-[#26315f]
              shadow-[0_4px_14px_rgba(12,35,100,0.06)]
              transition-all
              hover:border-[#bfc8e0]
              hover:shadow-md
            "
          >
            <span>Sort by Popular</span>

            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>

        {/* ==========================================================
            CATEGORY GRID
        ========================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                href={`/categories/${category.name
                  .toLowerCase()
                  .replace(/&/g, "and")
                  .replace(/\s+/g, "-")}`}
                className="
                  group
                  overflow-hidden
                  rounded-[14px]
                  border
                  border-[#e1e5ef]
                  bg-white
                  shadow-[0_4px_15px_rgba(12,35,100,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#cdd5eb]
                  hover:shadow-[0_14px_35px_rgba(12,35,100,0.11)]
                "
              >

                {/* ==================================================
                    CARD INFORMATION
                ================================================== */}

                <div className="p-4 sm:p-5">

                  <div className="flex items-start gap-4">

                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-[48px]
                        w-[48px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#07188e]
                        text-white
                      "
                    >
                      <Icon
                        size={23}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* TEXT */}

                    <div className="min-w-0">

                      <h3
                        className="
                          text-[16px]
                          font-bold
                          leading-tight
                          text-[#07135f]
                          sm:text-[17px]
                        "
                      >
                        {category.name}
                      </h3>

                      <p
                        className="
                          mt-1.5
                          line-clamp-2
                          text-[12px]
                          leading-[1.5]
                          text-[#68718a]
                          sm:text-[13px]
                        "
                      >
                        {category.description}
                      </p>

                    </div>
                  </div>
                </div>

                {/* ==================================================
                    IMAGE
                ================================================== */}

                <div
                  className="
                    relative
                    h-[145px]
                    w-full
                    overflow-hidden
                    sm:h-[150px]
                  "
                >
                  <Image
                    src={category.image}
                    alt={`${category.name} services`}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-[1.04]
                    "
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      25vw
                    "
                  />
                </div>

                {/* ==================================================
                    CARD FOOTER
                ================================================== */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    px-4
                    py-3.5
                    sm:px-5
                  "
                >

                  {/* ARTISAN COUNT */}

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-[12px]
                      font-medium
                      text-[#26315f]
                    "
                  >
                    <Users
                      size={16}
                      strokeWidth={1.8}
                      className="text-[#1747e8]"
                    />

                    <span>
                      {category.artisans} Artisans
                    </span>
                  </div>

                  {/* ARROW */}

                  <div
                    className="
                      flex
                      h-[26px]
                      w-[26px]
                      items-center
                      justify-center
                      text-[#1747e8]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowRight
                      size={17}
                      strokeWidth={2}
                    />
                  </div>

                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}