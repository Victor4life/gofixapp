import {
  HeartHandshake,
  LockKeyhole,
  Medal,
  Sparkles,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "Everything we build starts with making the experience better for the people who need help at home.",
  },
  {
    number: "02",
    icon: LockKeyhole,
    title: "Trust & Safety",
    description:
      "We believe finding someone to work in your home should come with confidence and peace of mind.",
  },
  {
    number: "03",
    icon: Medal,
    title: "Quality",
    description:
      "We value skilled workmanship and professionals who care about delivering a job well done.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Simplicity",
    description:
      "From finding a service to getting the work completed, we remove unnecessary complexity.",
  },
];

export default function AboutValues() {
  return (
    <section className="relative overflow-hidden bg-[#f7faff] py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* TOP */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-wide text-[#1458e8]">
                Our Values
              </span>

              <span className="h-px w-12 bg-[#1458e8]" />
            </div>

            <h2 className="text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-[#000b76] md:text-5xl">
              What we believe
              <br />
              in.
            </h2>
          </div>

          <p className="max-w-[590px] text-base leading-7 text-slate-500 lg:ml-auto md:text-lg">
            Our values shape how we build GoFix, how we work with
            professionals, and how we create better experiences for
            homeowners.
          </p>
        </div>

        {/* VALUES */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.number}
                className="group relative min-h-[300px] overflow-hidden rounded-[24px] border border-blue-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,11,118,0.08)]"
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold text-[#1458e8]">
                    {value.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edf4ff] transition-all duration-300 group-hover:bg-[#000b76]">
                    <Icon
                      size={23}
                      strokeWidth={1.8}
                      className="text-[#1458e8] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="mt-16">
                  <h3 className="text-xl font-bold tracking-tight text-[#000b76]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {value.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-[#f1f6ff] transition-transform duration-500 group-hover:scale-125" />
              </div>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-14 flex flex-col gap-6 border-t border-blue-100 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[700px] text-sm leading-6 text-slate-500 md:text-base">
            These principles aren't just words. They're the foundation for
            every connection we make between homeowners and professionals.
          </p>

          <div className="flex items-center gap-3 text-sm font-semibold text-[#000b76]">
            <span className="h-2 w-2 rounded-full bg-[#1458e8]" />
            Built around people
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 bottom-[-120px] h-80 w-80 rounded-full bg-white" />
    </section>
  );
}