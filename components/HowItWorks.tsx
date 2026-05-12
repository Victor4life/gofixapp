"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Search,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Describe Your Need",
    description:
      "Tell us what needs attention and where. From urgent repairs to planned upgrades.",
    icon: <Search size={22} />,
  },
  {
    number: "02",
    title: "Matched Instantly",
    description:
      "Our intelligent system connects you with verified professionals nearby.",
    icon: <Sparkles size={22} />,
  },
  {
    number: "03",
    title: "Elite Service Delivery",
    description:
      "Relax while trusted artisans deliver exceptional workmanship with precision.",
    icon: <ShieldCheck size={22} />,
  },
];

export default function ProcessCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-40">
      {/* 🔹 BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[120px] opacity-80" />

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          {/* 🔹 LEFT CONTENT */}
          <div className="lg:col-span-4 space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#000b76] px-4 py-2 rounded-full">
              <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                The Process
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.95] text-slate-900">
                A smoother way to hire trusted artisans.
              </h2>

              <p className="text-slate-500 text-lg leading-relaxed font-medium max-w-md">
                From discovery to completion, every interaction is designed to
                feel seamless, transparent, and premium.
              </p>
            </div>

            {/* CONTROLS */}
            <div className="flex items-center gap-4 pt-4">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    active === i
                      ? "w-14 bg-[#000b76]"
                      : "w-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 🔹 RIGHT CAROUSEL */}
          <div className="lg:col-span-8 relative h-[500px] flex items-center justify-center overflow-hidden">
            {/* FLOW LINE */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-100 to-transparent" />

            {/* GLOW */}
            <div className="absolute w-72 h-72 rounded-full" />

            {steps.map((step, i) => {
              const position =
                (i - active + steps.length) % steps.length;

              let styles = "";

              if (position === 0) {
                styles =
                  "translate-x-0 scale-100 z-30 opacity-100";
              } else if (position === 1) {
                styles =
                  "translate-x-[70%] scale-90 z-20 opacity-50 blur-[1px]";
              } else {
                styles =
                  "-translate-x-[70%] scale-90 z-20 opacity-50 blur-[1px]";
              }

              return (
                <div
                  key={i}
                  className={`absolute w-full max-w-[520px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${styles}`}
                >
                  <div className="relative overflow-hidden rounded-[2.8rem] border border-slate-100 bg-white p-10 md:p-12 shadow-[0_30px_80px_-15px_rgba(15,23,42,0.12)]">
                    {/* CARD GLOW */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full blur-[80px]" />

                    {/* NUMBER */}
                    <span className="absolute top-6 right-8 text-8xl font-black text-slate-100 select-none">
                      {step.number}
                    </span>

                    <div className="relative z-10 space-y-10">
                      {/* ICON */}
                      <div className="w-16 h-16 rounded-2xl bg-[#000b76] text-white flex items-center justify-center shadow-lg shadow-blue-900/20">
                        {step.icon}
                      </div>

                      {/* CONTENT */}
                      <div className="space-y-5">
                        <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                          {step.title}
                        </h3>

                        <p className="text-slate-500 leading-relaxed text-lg font-medium max-w-md">
                          {step.description}
                        </p>
                      </div>

                      {/* CTA */}
                      <button className="group flex items-center gap-3 text-[#000b76] font-black">
                        Learn More

                        <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                          <ArrowRight size={16} />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}