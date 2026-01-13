"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Hammer, Menu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? "bg-[#000b76]/80 backdrop-blur-xl py-3 border-b border-white/10 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* 🔹 LOGO with Glow Effect */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="bg-blue-500 p-2 rounded-xl group-hover:rotate-12 group-hover:scale-110 transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <Hammer className="text-white" size={20} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            GO
            <span className="text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]">
              FIX
            </span>
          </span>
        </Link>

        {/* 🔹 DESKTOP LINKS (Glassy hover effect) */}
        <div className="hidden md:flex items-center space-x-1">
          {["Find Work", "Categories", "How it Works", "Pricing"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-semibold text-blue-100/70 hover:text-white px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                {item}
              </Link>
            )
          )}
        </div>

        {/* 🔹 ACTIONS */}
        <div className="flex items-center space-x-5">
          <button className="hidden md:block text-sm font-bold text-blue-100 hover:text-white transition-colors">
            Login
          </button>

          <button className="relative overflow-hidden bg-blue-400 hover:bg-blue-500 text-white px-7 py-3 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-95 group">
            {/* Subtle inner reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Join as Pro</span>
          </button>

          {/* MOBILE TOGGLE */}
          <button className="md:hidden text-white p-2 bg-white/10 rounded-lg">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
