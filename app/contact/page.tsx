"use client";
import Navbar from "@/components/Navbar";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Hammer,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F8FAFC] pt-40 pb-24 overflow-hidden relative">
        {/* 🔹 THE GEOMETRIC BACKGROUND (Your Image) */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "url('/waves/your-geometric-pattern.png')", // Ensure this path is correct
            backgroundSize: "600px",
            backgroundRepeat: "repeat",
          }}
        />

        {/* 🔹 Background Artistic Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50/40 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          {/* 🔹 ELEGANT SECTION HEADER */}
          <div className="max-w-3xl mb-20 space-y-4">
            <span className="text-blue-600 font-bold tracking-[0.3em] text-[10px] uppercase">
              Private Concierge
            </span>
            <h1 className="text-5xl md:text-7xl font-serif italic text-slate-900 leading-tight">
              At your{" "}
              <span className="not-italic font-sans font-black tracking-tighter uppercase text-blue-900">
                service.
              </span>
            </h1>
            <p className="text-slate-500 font-medium max-w-lg leading-relaxed">
              Experience the gold standard of home maintenance. Contact our
              elite dispatch team for immediate assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* 🔹 CONTACT FORM SECTION */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h2 className="text-3xl font-serif italic text-slate-900 mb-2">
                      Message Received
                    </h2>
                    <p className="text-slate-500 text-sm mb-6">
                      Our concierge will contact you within 30 minutes.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-blue-600 font-bold text-xs uppercase tracking-widest hover:underline"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                      <div className="relative group">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                          Full Name
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Tunde Edwards"
                          className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-blue-600 transition-colors font-serif text-lg text-slate-900 placeholder:text-slate-300"
                        />
                      </div>
                      <div className="relative group">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                          Email Address
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="tunde@example.com"
                          className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-blue-600 transition-colors font-serif text-lg text-slate-900 placeholder:text-slate-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                        Service Required
                      </label>
                      <select className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-blue-600 transition-colors font-serif text-lg text-slate-900 cursor-pointer appearance-none">
                        <option>Emergency Repair</option>
                        <option>Master Plumbing</option>
                        <option>Electrical Audit</option>
                        <option>HVAC Maintenance</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                        Project Details
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="How can we assist you?"
                        className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-blue-600 transition-colors font-serif text-lg text-slate-900 resize-none placeholder:text-slate-300"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group flex items-center justify-between w-full md:w-auto bg-[#000b76] text-white px-10 py-5 rounded-full hover:bg-blue-600 transition-all hover:shadow-xl hover:shadow-blue-900/20 active:scale-95"
                    >
                      <span className="text-xs font-bold uppercase tracking-widest mr-8">
                        Dispatch Message
                      </span>
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-2 transition-transform"
                      />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* 🔹 INFO SECTION */}
            <div className="lg:col-span-5 space-y-12 lg:pl-10">
              <div className="space-y-12">
                <section>
                  <h4 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em] mb-8">
                    Direct Channels
                  </h4>
                  <div className="space-y-10">
                    <div className="flex items-start gap-6">
                      <Phone className="text-blue-600 shrink-0" size={24} />
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                          24/7 Priority Line
                        </p>
                        <p className="text-2xl font-serif text-slate-900">
                          +234 800 GO FIX IT
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <Mail className="text-blue-600 shrink-0" size={24} />
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                          Electronic Correspondence
                        </p>
                        <p className="text-2xl font-serif text-slate-900">
                          concierge@gofix.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <MapPin className="text-blue-600 shrink-0" size={24} />
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                          Headquarters
                        </p>
                        <p className="text-2xl font-serif text-slate-900 leading-tight">
                          The Rubicon, Plot 14 <br />
                          <span className="text-lg">Admiralty Way, Lekki</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Availability Status Card */}
              <div className="p-10 rounded-[2rem] bg-[#000b76] text-white relative overflow-hidden">
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">
                      System: Operational
                    </span>
                  </div>
                  <h5 className="text-3xl font-serif italic leading-tight">
                    Elite artisans are <br />
                    currently on standby.
                  </h5>
                  <p className="text-blue-200/60 text-sm leading-relaxed">
                    Average response time for emergencies is currently 22
                    minutes within Lagos Island.
                  </p>
                </div>
                <Hammer
                  size={120}
                  className="text-white/5 absolute -right-8 -bottom-8 -rotate-12"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
