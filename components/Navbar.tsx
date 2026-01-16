"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Hammer, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Categories", href: "/categories" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          isScrolled || isOpen
            ? "bg-[#000b76]/90 backdrop-blur-xl py-3 border-b border-white/10 shadow-2xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* 🔹 LOGO */}
          <Link
            href="/"
            className="flex items-center space-x-2 group relative z-[110]"
          >
            <div className="bg-blue-500 p-2 rounded-xl group-hover:rotate-12 group-hover:scale-110 transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <Hammer className="text-white" size={20} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase">
              Go<span className="text-blue-400">Fix</span>
            </span>
          </Link>

          {/* 🔹 DESKTOP LINKS */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-bold text-blue-100/70 hover:text-white px-5 py-2 rounded-full hover:bg-white/5 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 🔹 ACTIONS */}
          <div className="flex items-center space-x-5 relative z-[110]">
            <Link
              href="/login"
              className="hidden md:block text-sm font-bold text-blue-100 hover:text-white transition-colors"
            >
              Login
            </Link>

            <Link
              href="/join"
              className="relative overflow-hidden bg-blue-400 text-white px-6 py-2.5 rounded-full text-sm font-black transition-all hover:bg-blue-400 hover:text-white active:scale-95 group shadow-xl shadow-black/20"
            >
              Join as Pro
            </Link>

            {/* 🔹 UNIQUE MOBILE HAMBURGER */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 bg-white/10 rounded-xl border border-white/20 transition-all hover:bg-white/20"
            >
              <div
                className={`w-5 h-[2px] bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[2px]" : "-translate-y-1"
                }`}
              />
              <div
                className={`w-5 h-[2px] bg-white transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[0px]" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* 🔹 MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[90] bg-[#000b76] transition-all duration-700 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {/* Background Beautification */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="h-full flex flex-col justify-center px-10 space-y-10">
          <div className="flex flex-col space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-400/60">
              Navigation
            </span>
            {navLinks.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-black text-white tracking-tighter hover:text-blue-400 transition-colors flex items-center justify-between group ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {item.name}
                <ArrowRight
                  className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all"
                  size={32}
                />
              </Link>
            ))}
          </div>

          <div
            className={`pt-10 border-t border-white/10 flex flex-col space-y-4 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `500ms` }}
          >
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="w-full py-5 text-center rounded-2xl bg-white/5 border border-white/10 text-white font-bold"
            >
              Login to Account
            </Link>
            <Link
              href="/join"
              onClick={() => setIsOpen(false)}
              className="w-full py-5 text-center rounded-2xl bg-blue-600 text-white font-black shadow-lg shadow-blue-600/20"
            >
              Join as a Professional
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
