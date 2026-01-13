"use client";
import {
  Hammer,
  Droplets,
  Zap,
  Wrench,
  Paintbrush,
  Scissors,
  Car,
  ChevronRight,
} from "lucide-react";

const categories = [
  {
    name: "Plumbing",
    icon: <Droplets size={20} />,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    name: "Electrical",
    icon: <Zap size={20} />,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    name: "Carpentry",
    icon: <Wrench size={20} />,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    name: "Painting",
    icon: <Paintbrush size={20} />,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    name: "Mechanic",
    icon: <Car size={20} />,
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    name: "Cleaning",
    icon: <Scissors size={20} />,
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

const steps = [
  {
    number: "01",
    title: "Request a Service",
    description: "Select the repair task you need. From plumbing to painting.",
    containerClass:
      "relative md:absolute md:top-[15%] md:left-[5%] w-full md:w-64",
  },
  {
    number: "02",
    title: "Match with a Pro",
    description:
      "Our system connects you with the highest-rated artisans currently available.",
    containerClass:
      "relative md:absolute md:top-[40%] md:left-[38%] w-full md:w-64",
  },
  {
    number: "03",
    title: "Relax & Rate",
    description:
      "Pay securely and leave a review once the job is completed perfectly.",
    containerClass:
      "relative md:absolute md:top-[10%] md:left-[70%] w-full md:w-64",
  },
];

export default function UnifiedDiscovery() {
  return (
    <section className="relative bg-white">
      {/* 🔹 1. AUTO-SLIDING CATEGORIES (-MT to overlap Hero) */}
      <div className="relative z-30 -mt-8 md:-mt-10 overflow-hidden flex flex-1 mx-8 md:mx-20">
        {/* Infinite Slide Container */}
        <div className="flex gap-4 animate-scroll whitespace-nowrap pb-6 relative">
          {/* Duplicate for infinite loop */}
          {[...categories, ...categories].map((cat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white border border-slate-100 p-4 pr-8 rounded-2xl shadow-xl shadow-slate-200/50 hover:shadow-blue-100 hover:-translate-y-1 transition-all cursor-pointer min-w-[200px]"
            >
              <div className={`${cat.bg} ${cat.color} p-3 rounded-xl`}>
                {cat.icon}
              </div>
              <span className="font-bold text-slate-800 tracking-tight">
                {cat.name}
              </span>
            </div>
          ))}
        </div>

        {/* Floating Slide Action Button */}
        <div className="max-w-7xl mx-auto px-6 mt-6 flex absolute -right-5">
          <button className="bg-[#000b76] p-3 rounded-full shadow-lg border border-slate-100 hover:bg-blue-600 hover:text-white transition-colors group">
            <ChevronRight
              size={20}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </button>
        </div>
      </div>
      {/* 🔹 2. HOW IT WORKS CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-5 md:py-5">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full">
            <Hammer size={14} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
              The Process
            </span>
          </div>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            How it <span className="text-blue-600 font-outline-2">works</span>
          </h3>
          <p className="max-w-2xl text-slate-500 font-medium">
            Professional home help is just three steps away.
          </p>
        </div>

        {/* Wavy Path Area */}
        <div className="relative min-h-[700px] md:min-h-[300px] w-full">
          <div className="flex flex-col md:block gap-16 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className={step.containerClass}>
                <span className="absolute -top-20 left-0 text-[12rem] font-black text-slate-200 select-none pointer-events-none -z-10">
                  {step.number}
                </span>

                <div className="relative flex flex-col items-start group">
                  <div className="w-6 h-6 bg-blue-600 border-[5px] border-white rounded-full mb-6 shadow-xl group-hover:scale-125 transition-transform" />
                  <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_25px_50px_-15px_rgba(59,130,246,0.2)] transition-all group-hover:-translate-y-2">
                    <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Update the CSS Animation for the new width */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * 6 - 1rem * 6));
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
