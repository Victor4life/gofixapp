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

<div className="loader" />

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

  /* 🔥 YOUR LOADER */
  .loader {
    height: 80px;
    aspect-ratio: 1;
    display: grid;
  }

  .loader:before,
  .loader:after {
    content: "";
    --c: no-repeat linear-gradient(#fff 0 0);
    background: var(--c), var(--c);
    background-size: 25% 50%;
    animation: l4 1.5s infinite linear;
  }

  .loader:after {
    transform: scale(-1);
  }

  @keyframes l4 {
    0%,
    10% {
      background-position: 33.4% 100%, 66.6% 100%;
    }
    40% {
      background-position: 33.4% 0, 100% 100%;
    }
    70% {
      background-position: 0 100%, 66.6% 0;
    }
    100% {
      background-position: 33.4% 100%, 66.6% 100%;
    }
  }
`}</style>
    </div>
  );
}
