"use client";
import {
  ShieldCheck,
  UserCheck,
  Zap,
  HeartHandshake,
  Shield,
} from "lucide-react";

export default function TrustSafety() {
  const points = [
    {
      number: "01",
      icon: <UserCheck className="w-6 h-6" />,
      title: "Identity Vetted",
      desc: "Every professional is personally interviewed and background cleared.",
    },
    {
      number: "02",
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Dispatch",
      desc: "No waiting. Our system matches you with available pros in real-time.",
    },
    {
      number: "03",
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Escrow Protection",
      desc: "Payment is only released when you are 100% satisfied with the work.",
    },
    {
      number: "04",
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Lifetime Support",
      desc: "Our concierge team is available 24/7 for any dispute or help.",
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* 🔹 Decorative Background Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* 🔹 LEFT: Vertical Header */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full shadow-sm">
              <Shield size={14} className="fill-blue-600/20" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Secure Standard
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-fantasy text-slate-900 tracking-tight leading-[1.1]">
              The Gold <br />
              <span className="text-blue-600 underline decoration-blue-100 decoration-4 underline-offset-8">
                Guarantee.
              </span>
            </h2>

            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xs">
              Beyond just repairs, we provide an ecosystem of trust. Our
              protocols are designed for the most discerning homeowners.
            </p>
          </div>

          {/* 🔹 RIGHT: Feature Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {points.map((p, i) => (
              <div
                key={i}
                className="group p-10 rounded-[3rem] bg-slate-50/50 border border-transparent hover:bg-white hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-slate-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    {p.icon}
                  </div>
                  <span className="font-fantasy text-3xl text-slate-200 group-hover:text-blue-100 transition-colors">
                    {p.number}
                  </span>
                </div>

                <h4 className="font-fantasy text-xl text-slate-900 mb-4 tracking-wide group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h4>

                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
