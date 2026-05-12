"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Hammer, ArrowRight } from "lucide-react";

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
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled || isOpen ? "py-4" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 transition-all duration-500">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled || isOpen
                ? "bg-[#000b76]/75 backdrop-blur-2xl border border-white/10 rounded-[2rem] px-8 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                : "bg-transparent px-0 py-0"
            }`}
          >
            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center space-x-3 group relative z-[110]"
            >
              <div
                className={`flex items-center justify-center transition-all duration-500 ${
                  isScrolled || isOpen
                    ? "w-11 h-11 rounded-2xl bg-white text-[#000b76]"
                    : "w-11 h-11 rounded-2xl bg-blue-500 text-white"
                } shadow-xl`}
              >
                <Hammer
                  size={20}
                  className="transition-transform duration-500 group-hover:rotate-12"
                />
              </div>

              <span className="text-2xl font-black tracking-tighter text-white uppercase">
                Go<span className="text-blue-300">Fix</span>
              </span>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-5 py-2 text-sm font-bold text-blue-100/70 hover:text-white transition-all rounded-full hover:bg-white/5"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="flex items-center space-x-4 relative z-[110]">
              <Link
                href="/login"
                className="hidden md:block text-sm font-bold text-blue-100/70 hover:text-white transition-colors"
              >
                Login
              </Link>

              {/* CTA */}
              <Link
                href="/join"
                className="group relative overflow-hidden bg-white text-[#000b76] px-6 py-3 rounded-full text-sm font-black transition-all active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.25)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Join as Pro
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>

                {/* Glow Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative flex flex-col justify-center items-center w-11 h-11 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl transition-all hover:bg-white/20"
              >
                <div
                  className={`absolute w-5 h-[2px] bg-white transition-all duration-300 ${
                    isOpen
                      ? "rotate-45"
                      : "-translate-y-[5px]"
                  }`}
                />

                <div
                  className={`absolute w-5 h-[2px] bg-white transition-all duration-300 ${
                    isOpen
                      ? "-rotate-45"
                      : "translate-y-[5px]"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[90] bg-[#000b76] transition-all duration-700 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        {/* BACKGROUND GLOW */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="h-full flex flex-col justify-center px-10 space-y-12 relative z-10">
          {/* NAV LINKS */}
          <div className="flex flex-col space-y-7">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-300/50">
              Navigation
            </span>

            {navLinks.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center justify-between text-4xl font-black tracking-tighter text-white transition-all duration-500 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <span className="group-hover:text-blue-300 transition-colors">
                  {item.name}
                </span>

                <ArrowRight
                  size={28}
                  className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                />
              </Link>
            ))}
          </div>

          {/* MOBILE CTA */}
          <div
            className={`pt-10 border-t border-white/10 flex flex-col space-y-4 transition-all duration-500 ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{
              transitionDelay: "500ms",
            }}
          >
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="w-full py-5 rounded-[1.5rem] bg-white/5 border border-white/10 text-white text-center font-bold backdrop-blur-xl"
            >
              Login to Account
            </Link>

            <Link
              href="/join"
              onClick={() => setIsOpen(false)}
              className="w-full py-5 rounded-[1.5rem] bg-white text-[#000b76] text-center font-black shadow-2xl"
            >
              Join as a Professional
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}