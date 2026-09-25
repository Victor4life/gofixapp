import Link from "next/link";
import {
  Droplets,
  Zap,
  Paintbrush,
  Hammer,
  Snowflake,
  Wrench,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    name: "Plumbing",
    description: "Leaks, pipes & installations",
    icon: Droplets,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    name: "Electrical",
    description: "Repairs, wiring & installations",
    icon: Zap,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    name: "Painting",
    description: "Interior & exterior painting",
    icon: Paintbrush,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    name: "Carpentry",
    description: "Furniture & woodwork",
    icon: Hammer,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    name: "AC & Cooling",
    description: "Installation & repairs",
    icon: Snowflake,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    name: "Home Repairs",
    description: "General maintenance",
    icon: Wrench,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
  },
];

export default function PopularCategories() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-10 lg:py-20 xl:py-24">
      <div className="mx-auto w-full max-w-[1280px]">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          {/* LEFT */}
          <div className="min-w-0">
            {/* Eyebrow */}
            <div className="mb-3 flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#075eea] sm:text-[11px]">
                Popular Categories
              </span>

              <span className="h-px w-8 bg-[#075eea] sm:w-10" />
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-[620px]
                text-[28px]
                font-bold
                leading-[1.12]
                tracking-[-0.035em]
                text-[#092d80]
                sm:text-[34px]
                md:text-[38px]
                lg:text-[40px]
              "
            >
              Find the right service for your home.
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-[560px] text-[13px] leading-6 text-[#667085] sm:text-[14px]">
              From small fixes to big projects, we&apos;ve got you covered.
            </p>
          </div>

          {/* DESKTOP LINK */}
          <Link
            href="/categories"
            className="
              group
              hidden
              shrink-0
              items-center
              gap-2
              pb-1
              text-[12px]
              font-bold
              text-[#075eea]
              transition-all
              sm:flex
            "
          >
            View all categories

            <ArrowRight
              size={16}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* =========================
            MOBILE LINK
        ========================== */}
        <Link
          href="/categories"
          className="
            group
            mt-5
            flex
            w-fit
            items-center
            gap-2
            text-[12px]
            font-bold
            text-[#075eea]
            sm:hidden
          "
        >
          View all categories

          <ArrowRight
            size={16}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        {/* =========================
            CATEGORY GRID
        ========================== */}
        <div
          className="
            mt-8
            grid
            grid-cols-2
            gap-3
            sm:mt-10
            sm:grid-cols-2
            sm:gap-4
            md:grid-cols-3
            lg:grid-cols-3
            xl:grid-cols-6
          "
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                href={`/categories/${category.name
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll("&", "and")}`}
                className="
                  group
                  relative
                  flex
                  min-w-0
                  min-h-[145px]
                  flex-col
                  overflow-hidden
                  rounded-[10px]
                  border
                  border-[#e4e9f2]
                  bg-white
                  p-3.5
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#cddafa]
                  hover:shadow-[0_12px_30px_rgba(7,30,100,0.08)]

                  sm:min-h-[150px]
                  sm:p-4

                  xl:min-h-[145px]
                "
              >
                {/* ICON */}
                <div
                  className={`
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    ${category.iconBg}
                    ${category.iconColor}
                    transition-transform
                    duration-300
                    group-hover:scale-105

                    sm:h-[43px]
                    sm:w-[43px]
                  `}
                >
                  <Icon
                    size={19}
                    strokeWidth={2}
                    className="sm:h-[21px] sm:w-[21px]"
                  />
                </div>

                {/* TEXT */}
                <div className="mt-3 min-w-0 pr-1 sm:mt-4">
                  <h3
                    className="
                      truncate
                      text-[12px]
                      font-bold
                      leading-5
                      text-[#092d80]
                      sm:text-[13px]
                    "
                  >
                    {category.name}
                  </h3>

                  <p
                    className="
                      mt-1
                      line-clamp-2
                      text-[9px]
                      leading-[1.45]
                      text-[#667085]
                      sm:text-[10px]
                    "
                  >
                    {category.description}
                  </p>
                </div>

                {/* ARROW */}
                <div
                  className="
                    absolute
                    bottom-3
                    right-3
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    text-[#092d80]
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    sm:bottom-3
                    sm:right-4
                  "
                >
                  <ArrowRight
                    size={13}
                    strokeWidth={2}
                    className="sm:h-[14px] sm:w-[14px]"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}