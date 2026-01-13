"use client";
import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Hammer,
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#000b76] pt-32 pb-12 overflow-hidden">
      {/* 🔹 REVERSED WAVE BACKGROUND */}
      <div
        className="absolute left-0 top-0 w-full h-24 pointer-events-none z-0 rotate-180"
        style={{
          backgroundImage: "url('/waves/wave(5).svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      />

      {/* 🔹 Background Artistic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* 🔹 BRAND SECTION */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center space-x-3 text-white group cursor-pointer">
              <div className="w-12 h-12 bg-white text-[#000b76] rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:bg-blue-400 group-hover:text-white shadow-lg shadow-black/20">
                <Hammer size={24} />
              </div>
              <span className="text-3xl font-black tracking-tighter text-white uppercase">
                Go-Fix
              </span>
            </div>

            <p className="text-blue-100/60 text-sm leading-relaxed max-w-xs font-medium italic">
              "Redefining home maintenance with a touch of elegance. We connect
              discerning homeowners with the most elite artisans in the city."
            </p>

            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 🔹 LINKS SECTION */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-7">
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] opacity-50">
                Company
              </h4>
              <ul className="space-y-4">
                {["About Us", "Our Process", "Safety", "Artisans"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-blue-50/80 text-sm hover:text-blue-400 transition-colors flex items-center group font-medium"
                      >
                        {item}
                        <ArrowUpRight
                          size={14}
                          className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1"
                        />
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="space-y-7">
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] opacity-50">
                Services
              </h4>
              <ul className="space-y-4">
                {["Electrical", "Plumbing", "Fine Painting", "AC Repair"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-blue-50/80 text-sm hover:text-blue-400 transition-colors font-medium"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="space-y-7">
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] opacity-50">
                Contact
              </h4>
              <ul className="space-y-5">
                <li className="flex items-center space-x-3 group cursor-pointer">
                  <div className="p-2 bg-white/5 rounded-lg text-blue-400">
                    <Mail size={16} />
                  </div>
                  <span className="text-blue-50/80 text-sm font-medium">
                    concierge@gofix.com
                  </span>
                </li>
                <li className="flex items-center space-x-3 group cursor-pointer">
                  <div className="p-2 bg-white/5 rounded-lg text-blue-400">
                    <Phone size={16} />
                  </div>
                  <span className="text-blue-50/80 text-sm font-bold tracking-tight">
                    +234 800 GO FIX IT
                  </span>
                </li>
              </ul>
              <div className="pt-4">
                <form className="relative group">
                  <input
                    type="email"
                    placeholder="Join the inner circle"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-xs focus:border-blue-500 outline-none text-white transition-all"
                  />
                  <button className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-[10px] font-bold uppercase transition-all shadow-lg">
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 BOTTOM BAR */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <p className="text-blue-200/40 text-[10px] font-bold uppercase tracking-[0.25em]">
              © {currentYear} GO-FIX LIMITED
            </p>
            <div className="flex space-x-8">
              <a
                href="#"
                className="text-blue-200/40 text-[10px] font-bold hover:text-white transition-colors uppercase tracking-widest"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-blue-200/40 text-[10px] font-bold hover:text-white transition-colors uppercase tracking-widest"
              >
                Terms of Service
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-2xl border border-white/10">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
            <span className="text-[9px] font-black text-blue-100 uppercase tracking-widest">
              Service Status: Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
