import Link from "next/link";
import Image from "next/image";
import {
  Wrench,
  Plug,
  Hammer,
  PaintRoller,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    name: "Plumbing",
    description: "Fix leaks, install fixtures, and more.",
    image: "/images/image.png",
    icon: Wrench,
  },
  {
    name: "Electrical",
    description: "Wiring, repairs, installations done safely.",
    image: "/images/image.png",
    icon: Plug,
  },
  {
    name: "Carpentry",
    description: "Custom woodwork, repairs and installations.",
    image: "/images/image.png",
    icon: Hammer,
  },
  {
    name: "Painting",
    description: "Give your space a fresh and lasting look.",
    image: "/images/image.png",
    icon: PaintRoller,
  },
];

export default function PopularCategories() {
  return (
    <section className="bg-[#f7f9ff] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1280px]">

        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div
              className="
                mb-3
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#ffffff]
                px-4
                py-2
                text-[13px]
                font-medium
                text-[#000b76]
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

              Popular Categories

            </div>

            <h2 className="max-w-[300px] text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#07145c] sm:text-4xl">
              What do you
              <br />
              need help with?
            </h2>
          </div>

          <Link
            href="/categories"
            className="mb-1 hidden items-center gap-2 text-sm font-semibold text-[#0017a8] transition-all hover:gap-3 sm:flex"
          >
            Browse all categories
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </div>

        {/* Mobile Browse Link */}
        <Link
          href="/categories"
          className="mb-6 flex w-fit items-center gap-2 text-sm font-semibold text-[#0017a8] sm:hidden"
        >
          Browse all categories
          <ArrowRight size={16} />
        </Link>

        {/* Services */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                href={`/categories/${service.name.toLowerCase()}`}
                key={service.name}
                className="group overflow-hidden rounded-[7px] border border-[#e1e5ef] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,11,118,0.10)]"
              >
                {/* Card Information */}
                <div className="flex min-h-[108px] items-center gap-3 px-3 py-4">
                  
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#07178f] text-white">
                    <Icon size={21} strokeWidth={2} />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <h3 className="mb-1 text-[14px] font-bold text-[#07145c]">
                      {service.name}
                    </h3>

                    <p className="max-w-[145px] text-[11px] leading-[1.45] text-[#667085]">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-[155px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.name} service`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />

                  {/* Arrow */}
                  <div className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#07145c] shadow-md transition-all duration-300 group-hover:bg-[#07145c] group-hover:text-white">
                    <ArrowRight size={15} strokeWidth={2.2} />
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