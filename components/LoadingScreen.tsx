"use client";
import React, { useEffect, useState } from "react";
import { Hammer } from "lucide-react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-900 flex flex-col items-center justify-center overflow-hidden">
      {/* 🔹 Background Ambient Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full animate-pulse" />

      <div className="relative z-10 flex flex-col items-center space-y-8 text-center px-6">
        {/* Animated Hammer Logo */}
        <div className="relative">
          <div className="w-24 h-24 bg-blue-600 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-blue-500/40 animate-bounce transition-all duration-1000">
            <Hammer size={40} className="text-white fill-white/10" />
          </div>
          {/* Shimmer Orbit */}
          <div className="absolute inset-[-10px] border-2 border-blue-400/30 rounded-[3rem] animate-[spin_4s_linear_infinite]" />
        </div>

        <div className="space-y-2">
          <h2 className="text-4xl font-fantasy text-white tracking-[0.2em] animate-pulse">
            GO-FIX
          </h2>
          <div className="flex items-center justify-center space-x-1.5">
            <div className="h-[2px] w-8 bg-blue-600 rounded-full animate-[shimmer_2s_infinite]" />
            <p className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.4em] translate-x-1">
              Elite Artisans
            </p>
            <div className="h-[2px] w-8 bg-blue-600 rounded-full animate-[shimmer_2s_infinite]" />
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Progress Bar */}
      <div className="absolute bottom-20 w-48 h-[1px] bg-slate-800 overflow-hidden">
        <div className="h-full bg-blue-500 animate-[loading_2.5s_ease-in-out_forwards]" />
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
        @keyframes shimmer {
          0% {
            opacity: 0.3;
            width: 10px;
          }
          50% {
            opacity: 1;
            width: 40px;
          }
          100% {
            opacity: 0.3;
            width: 10px;
          }
        }
      `}</style>
    </div>
  );
}
