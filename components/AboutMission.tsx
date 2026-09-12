import { Diamond, ShieldCheck, Zap } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Trust",
    description: "Build confidence in every booking.",
  },
  {
    icon: Diamond,
    title: "Quality",
    description: "Skilled professionals, lasting results.",
  },
  {
    icon: Zap,
    title: "Simple",
    description: "Easy. Fast. Hassle-free.",
  },
];

export default function AboutMission() {
  return (
    <section className="relative overflow-hidden bg-[#f1f7ff] py-20 md:py-24 lg:py-28">
      {/* Decorative background shapes */}
      <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-white/60 blur-2xl" />
      <div className="absolute right-[-100px] bottom-[-100px] h-80 w-80 rounded-full bg-[#dce9ff] opacity-70" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr_0.75fr] lg:gap-10">

          {/* LEFT */}
          <div className="relative z-10">
            <div className="mb-5 flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-wide text-[#1458e8]">
                Our Mission
              </span>

              <span className="h-px w-12 bg-[#1458e8]" />
            </div>

            <h2 className="max-w-[460px] text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-[#000b76] md:text-5xl">
              Making quality home
              <br />
              services accessible
              <br />
              to everyone.
            </h2>
          </div>

          {/* CENTER */}
          <div className="relative z-10">
            <p className="max-w-[430px] text-base leading-7 text-slate-500 md:text-lg">
              We're on a mission to bridge the gap between homeowners and
              skilled professionals, creating safer, better and more
              convenient home service experiences across every neighborhood.
            </p>

            {/* Pillars */}
            <div className="mt-9 grid grid-cols-3 gap-5">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div key={pillar.title}>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e2edff]">
                      <Icon
                        size={24}
                        strokeWidth={2}
                        className="text-[#1458e8]"
                      />
                    </div>

                    <h3 className="text-sm font-bold text-[#000b76]">
                      {pillar.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — ARTISAN */}
          <div className="relative flex min-h-[300px] items-end justify-center lg:min-h-[360px]">
            {/* Blue abstract shape */}
            <div className="absolute bottom-4 h-[260px] w-[260px] rounded-[48%_52%_45%_55%] bg-[#d5e5ff]" />

            <div className="absolute bottom-10 right-0 h-28 w-28 rounded-full bg-[#e3eeff]" />

            <div className="relative z-10 h-[350px] w-full overflow-hidden">
              <img
                src="/images/about-mission-woman.png"
                alt="GoFix professional artisan"
                className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain"
              />
            </div>

            {/* Decorative lines */}
            <div className="absolute right-4 top-12 hidden lg:block">
              <span className="absolute h-8 w-[2px] rotate-[25deg] bg-[#1458e8]" />
              <span className="absolute left-5 top-1 h-5 w-[2px] rotate-[65deg] bg-[#1458e8]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}