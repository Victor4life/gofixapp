"use client";

import {
  ShieldCheck,
  Clock3,
  Wallet,
  BadgeCheck,
} from "lucide-react";

const items = [
  {
    title: "Verified Experts",
    desc: "Every artisan undergoes rigorous screening and quality checks.",
    icon: <ShieldCheck size={18} />,
  },
  {
    title: "Transparent Pricing",
    desc: "Clear digital quotes with zero hidden costs or surprises.",
    icon: <Wallet size={18} />,
  },
  {
    title: "Fast Response",
    desc: "Get matched with available professionals within minutes.",
    icon: <Clock3 size={18} />,
  },
  {
    title: "Guaranteed Quality",
    desc: "Every completed service is backed by the Go-Fix Promise.",
    icon: <BadgeCheck size={18} />,
  },
];

export default function TrustFlow() {
  return (
    <section className="relative bg-white py-18 overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-28">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full shadow-sm mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
              Trust & Safety
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[1.05]">
            Home services{" "}
            <span className="text-[#000b76]">
              without uncertainty.
            </span>
          </h2>

          <p className="text-slate-500 text-lg leading-relaxed font-medium mt-6">
            Every professional on Go-Fix is verified, monitored, and held to
            exceptional standards.
          </p>
        </div>

        {/* FLOW AREA */}
        <div className="relative">
          {/* SVG CONNECTING LINE */}
          <svg
            className="absolute top-0 left-1/2 -translate-x-1/2 h-full hidden md:block"
            width="300"
            height="1200"
            viewBox="0 0 300 1200"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="
                M150 40
                C260 120, 260 220, 150 300
                C40 380, 40 480, 150 560
                C260 640, 260 740, 150 820
                C40 900, 40 1000, 150 1080
              "
              stroke="rgba(0,11,118,0.12)"
              strokeWidth="2"
              strokeDasharray="8 10"
              strokeLinecap="round"
            />
          </svg>

          <div className="space-y-24 relative">
            {items.map((item, i) => (
              <div
                key={i}
                className={`flex ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="group relative w-full md:w-[480px]">
                  {/* Floating Number */}
                  <span
                    className={`absolute -top-10 ${
                      i % 2 === 0 ? "-left-4" : "-right-4"
                    } text-7xl font-black text-slate-100 select-none pointer-events-none transition-all duration-500 group-hover:text-blue-50`}
                  >
                    0{i + 1}
                  </span>

                  {/* CARD */}
                  <div className="relative rounded-[2rem] bg-white border border-slate-100 p-8 md:p-10 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08)] hover:shadow-[0_25px_60px_-15px_rgba(0,11,118,0.12)] transition-all duration-500 hover:-translate-y-2">
                    {/* Tiny Connection Dot */}
                    <div
                      className={`hidden md:block absolute top-1/2 ${
                        i % 2 === 0
                          ? "-right-[42px]"
                          : "-left-[42px]"
                      } -translate-y-1/2`}
                    >
                      <div className="w-5 h-5 rounded-full bg-[#000b76] border-[6px] border-white shadow-lg" />
                    </div>

                    <div className="flex items-start gap-5">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-[#000b76] text-white flex items-center justify-center shadow-lg shadow-blue-900/10 shrink-0">
                        {item.icon}
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-3">
                          {item.title}
                        </h3>

                        <p className="text-slate-500 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}