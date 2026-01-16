"use client";
import React, { useEffect, useState } from "react";
import { Hammer } from "lucide-react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#000b76] flex flex-col items-center justify-center overflow-hidden">
      {/* 🔹 Background Ambient Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[180px] rounded-full animate-pulse" />

      {/* 🔹 Floating Mesh Texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center space-y-12 text-center px-6">
        {/* Animated Hammer Logo */}
        <div className="relative">
          <div className="w-28 h-28 bg-white rounded-[2.5rem] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-bounce-slow">
            <Hammer size={48} className="text-[#000b76] fill-[#000b76]/5" />
          </div>

          {/* Shimmer Orbit Lines */}
          <div className="absolute inset-[-15px] border border-blue-400/20 rounded-[3.5rem] animate-[spin_6s_linear_infinite]" />
          <div className="absolute inset-[-30px] border border-blue-400/10 rounded-[4rem] animate-[spin_8s_linear_infinite_reverse]" />
        </div>

        {/* Textual Branding */}
        <div className="space-y-4">
          <h2 className="text-5xl font-black text-white tracking-[0.3em] uppercase transition-all">
            GO-FIX
          </h2>

          {/* Aligned Subtext Row */}
          <div className="flex items-center justify-center space-x-4">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-blue-500 animate-[line-expand_2s_infinite]" />
            <p className="text-blue-400 text-[11px] font-black uppercase tracking-[0.5em] whitespace-nowrap">
              Elite Artisans
            </p>
            <div className="h-[1px] bg-gradient-to-l from-transparent to-blue-500 animate-[line-expand_2s_infinite]" />
          </div>
        </div>
      </div>

      {/* 🔹 Sleek Center-Aligned Progress Bar */}
      <div className="absolute bottom-24 flex flex-col items-center space-y-4">
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-[loading_2.5s_ease-in-out_forwards]" />
        </div>
        <span className="text-blue-200/40 text-[9px] font-bold uppercase tracking-widest">
          Establishing Secure Session
        </span>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes line-expand {
          0%,
          100% {
            width: 10px;
            opacity: 0.2;
          }
          50% {
            width: 50px;
            opacity: 1;
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
