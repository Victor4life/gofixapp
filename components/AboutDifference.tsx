import {
  BadgeCheck,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Trusted Professionals",
    description:
      "Connect with skilled artisans who are carefully selected to help you feel confident about who you invite into your home.",
  },
  {
    number: "02",
    icon: BadgeCheck,
    title: "Quality First",
    description:
      "We make it easier to find professionals who take pride in their work and deliver reliable results.",
  },
  {
    number: "03",
    icon: Search,
    title: "Easy to Find",
    description:
      "Search for the right service, explore your options and find the professional that fits your project.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Hassle-Free",
    description:
      "From finding an artisan to getting the job done, GoFix is designed to make the entire experience simpler.",
  },
];

export default function AboutDifference() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-wide text-[#1458e8]">
                Why GoFix
              </span>

              <span className="h-px w-12 bg-[#1458e8]" />
            </div>

            <h2 className="max-w-[650px] text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-[#000b76] md:text-5xl">
              Built for a better
              <br />
              home service experience.
            </h2>
          </div>

          <p className="max-w-[520px] text-base leading-7 text-slate-500 md:ml-auto md:text-lg">
            Getting help around your home shouldn't involve endless searching
            or uncertainty. GoFix brings the important parts together in one
            simple experience.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="mt-16 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.number}
                  className={`
                    group relative py-9 lg:px-8
                    ${
                      index !== benefits.length - 1
                        ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                        : ""
                    }
                    ${index === 0 ? "lg:pl-0" : ""}
                  `}
                >
                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#1458e8]">
                      {benefit.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf4ff] transition-all duration-300 group-hover:bg-[#000b76]">
                      <Icon
                        size={22}
                        strokeWidth={1.8}
                        className="text-[#1458e8] transition-colors duration-300 group-hover:text-white"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-8 text-xl font-bold tracking-tight text-[#000b76]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 max-w-[270px] text-sm leading-6 text-slate-500">
                    {benefit.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-7 flex items-center gap-2 text-xs font-semibold text-[#1458e8]">
                    <span className="h-px w-6 bg-[#1458e8] transition-all duration-300 group-hover:w-10" />
                    GoFix
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#f1f6ff]" />
    </section>
  );
}