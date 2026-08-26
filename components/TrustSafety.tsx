"use client";

import {
  Search,
  MapPin,
  ChevronDown,
  Users,
  BriefcaseBusiness,
  Star,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    value: "10K+",
    label: "Verified Artisans",
    icon: Users,
  },
  {
    value: "50K+",
    label: "Jobs Completed",
    icon: BriefcaseBusiness,
  },
  {
    value: "4.8★",
    label: "Average Rating",
    icon: Star,
  },
  {
    value: "100%",
    label: "Satisfaction Guarantee",
    icon: ShieldCheck,
  },
];

export default function ArtisanSearch() {
  return (
    <section className="relative z-20 -mt-10 px-4 sm:px-6">
      <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-6 lg:px-10">

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`
                    flex items-center justify-center gap-4
                    px-5 py-5
                    ${index > 0 ? "md:border-l md:border-slate-200" : ""}
                    ${index > 1 ? "border-t border-slate-100 md:border-t-0" : ""}
                  `}
                >
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1558d6]">
                    <Icon size={21} strokeWidth={1.9} />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-[20px] font-bold leading-none tracking-tight text-[#0d2148]">
                      {stat.value}
                    </p>

                    <p className="mt-1.5 whitespace-nowrap text-[11px] font-medium text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

    </section>
  );
}