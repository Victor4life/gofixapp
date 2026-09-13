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
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1280px]">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          {/* Left */}
          <div>
            {/* Eyebrow */}
            <div className="mb-3 flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#075eea]">
                Popular Categories
              </span>

              <span className="h-[1px] w-10 bg-[#075eea]" />
            </div>

            {/* Heading */}
            <h2 className="max-w-[620px] text-[32px] font-bold leading-[1.12] tracking-[-0.035em] text-[#092d80] sm:text-[40px]">
              Find the right service for your home.
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-[560px] text-[14px] leading-6 text-[#667085]">
              From small fixes to big projects, we&apos;ve got you covered.
            </p>
          </div>

          {/* Desktop link */}
          <Link
            href="/categories"
            className="group hidden items-center gap-2 pb-1 text-[12px] font-bold text-[#075eea] transition-all sm:flex"
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
          className="group mt-5 flex w-fit items-center gap-2 text-[12px] font-bold text-[#075eea] sm:hidden"
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
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

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
                  min-h-[132px]
                  flex-col
                  rounded-[10px]
                  border
                  border-[#e4e9f2]
                  bg-white
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#cddafa]
                  hover:shadow-[0_12px_30px_rgba(7,30,100,0.08)]
                "
              >

                {/* Icon */}
                <div
                  className={`
                    flex
                    h-[43px]
                    w-[43px]
                    items-center
                    justify-center
                    rounded-full
                    ${category.iconBg}
                    ${category.iconColor}
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  `}
                >
                  <Icon
                    size={21}
                    strokeWidth={2}
                  />
                </div>

                {/* Text */}
                <div className="mt-4">
                  <h3 className="text-[13px] font-bold leading-5 text-[#092d80]">
                    {category.name}
                  </h3>

                  <p className="mt-1 text-[10px] leading-[1.45] text-[#667085]">
                    {category.description}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="
                    absolute
                    bottom-3
                    left-4
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    text-[#092d80]
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowRight
                    size={14}
                    strokeWidth={2}
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