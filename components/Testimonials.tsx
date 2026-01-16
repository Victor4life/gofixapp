"use client";
import { Hammer, ChevronRight } from "lucide-react";

const quotes = [
  {
    text: "Go-Fix didn't just find me a repairman; they found me peace of mind. The craftsmanship was beyond expectation.",
    author: "Chidimma Nwosu",
    location: "Lekki Residence",
  },
  {
    text: "The efficiency is unmatched. Within an hour, I had a certified electrician at my door. Simply the best service in Lagos.",
    author: "Tunde Bakare",
    location: "Victoria Island",
  },
  {
    text: "I appreciate the transparency in pricing. No hidden fees, just honest work from true professionals. Highly recommended!",
    author: "Sarah Phillips",
    location: "Ikeja GRA",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-48 overflow-hidden group">
      {/* 🔹 PARALLAX BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0 scale-110"
        style={{
          backgroundImage: "url('/images/image.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />

      {/* 🔹 GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-[#000b76]/95 z-10" />

      {/* 🔹 ADDED BEAUTIFICATION ELEMENTS */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Decorative Floating Shapes (Glass Orbs) */}
        <div className="absolute bottom-1/2 left-5 w-8 h-8 bg-blue-400/20 rounded-full blur-sm animate-ping" />
        <div className="absolute bottom-1/4 right-5 w-8 h-8 bg-blue-400/20 rounded-full blur-sm animate-ping" />
      </div>

      {/* 🔹 CONTENT SLIDER CONTAINER */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 relative z-30">
        {/* Label */}
        <div className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-400/30 text-blue-200 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
          <Hammer size={16} />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
            Client Chronicles
          </span>
        </div>

        {/* The Sliding Window */}
        <div className="overflow-hidden">
          <div className="flex animate-testimonial-slide">
            {[...quotes, ...quotes].map((item, index) => (
              <div key={index} className="min-w-full md:pr-24">
                <span className="text-8xl font-serif text-blue-400/30 leading-none block -mb-10 select-none">
                  “
                </span>

                <h3 className="text-3xl md:text-5xl font-medium text-white leading-tight italic tracking-tight">
                  {item.text}
                </h3>

                <div className="mt-12 flex items-center gap-6">
                  <div className="h-[2px] w-12 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                  <div>
                    <p className="text-xl font-bold text-white tracking-wide">
                      {item.author}
                    </p>
                    <p className="text-blue-400 text-xs uppercase tracking-[0.2em] font-bold mt-1">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute right-8 md:right-24 bottom-0 flex items-center gap-4">
          <div className="h-px w-24 bg-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500 animate-progress-line" />
          </div>
          <button className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white hover:bg-blue-600 transition-all active:scale-90">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes testimonial-slide {
          0%,
          16.66% {
            transform: translateX(0);
          }
          33.33%,
          50% {
            transform: translateX(-100%);
          }
          66.66%,
          83.33% {
            transform: translateX(-200%);
          }
          100% {
            transform: translateX(-300%);
          }
        }

        @keyframes progress-line {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-testimonial-slide {
          animation: testimonial-slide 18s cubic-bezier(0.8, 0, 0.2, 1) infinite;
        }

        .animate-progress-line {
          animation: progress-line 6s linear infinite;
        }

        .animate-testimonial-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
