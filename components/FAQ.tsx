"use client";
import React, { useState } from "react";
import { ChevronDown, Sparkles, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How do you verify your artisans?",
    answer:
      "Our vetting process is the most rigorous in the industry. It includes a comprehensive background check, a theory exam, and a supervised practical project. Only the top 10% of craftsmen earn the Go-Fix Seal.",
  },
  {
    question: "Is there a guarantee on the handiwork?",
    answer:
      "Every service is backed by our 'Go-Fix Promise.' If a repair fails within 30 days, we return to rectify it at zero cost. Your satisfaction is our signature.",
  },
  {
    question: "What about pricing transparency?",
    answer:
      "We use a standardized pricing model. Once your pro assesses the task, you receive a digital quote. No cash-in-hand negotiations, no hidden fees—just pure clarity.",
  },
  {
    question: "Are the professionals insured?",
    answer:
      "Yes. Every job booked through Go-Fix is covered by our comprehensive liability insurance, protecting your home and giving you absolute peace of mind.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white relative">
      {/* 🔹 Background Decor - Minimalist Auras */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-1/4 -right-24 w-64 h-64 bg-slate-50 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* 🔹 LEFT: Header Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full shadow-sm">
              <Sparkles size={14} className="animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Assurance
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.05] tracking-tighter">
                FAQs{" "}
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-sm font-medium">
                Everything you need to know about the Go-Fix standard, our elite
                artisans, and our safety protocols.
              </p>
            </div>

            {/* Premium CTA Card */}
            <div className="pt-8">
              <div className="p-8 bg-[#000b76] rounded-[2.5rem] text-white space-y-5 shadow-2xl shadow-blue-900/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <MessageCircle size={80} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-300 relative z-10">
                  Still Curious?
                </p>
                <p className="text-base text-slate-200 relative z-10 font-medium">
                  Our concierge team is available 24/7 for personalized
                  assistance.
                </p>
                <button className="flex items-center gap-2 text-sm font-bold bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl transition-all relative z-10">
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          {/* 🔹 RIGHT: Elegant Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`transition-all duration-500 rounded-[2.2rem] border ${
                  active === i
                    ? "bg-white border-blue-200 shadow-[0_20px_50px_-15px_rgba(37,99,235,0.1)] translate-x-3"
                    : "bg-slate-50 border-transparent hover:border-slate-200"
                }`}
              >
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className="w-full px-8 py-8 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={`text-xl font-bold transition-colors ${
                        active === i ? "text-blue-600" : "text-slate-300"
                      }`}
                    >
                      {i < 9 ? `0${i + 1}` : i + 1}
                    </span>
                    <span
                      className={`text-xl font-bold tracking-tight transition-colors ${
                        active === i ? "text-slate-900" : "text-slate-700"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`p-2 rounded-full transition-all duration-500 ${
                      active === i
                        ? "bg-blue-600 rotate-180 text-white"
                        : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    active === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8 pl-20">
                    <p className="text-slate-500 text-base leading-relaxed font-medium">
                      {faq.answer}
                    </p>
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
