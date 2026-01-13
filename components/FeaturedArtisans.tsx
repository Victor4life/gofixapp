"use client";
import { Star, Hammer, ArrowUpRight, BadgeCheck } from "lucide-react";

const artisans = [
  {
    name: "Samuel Okon",
    category: "Master Plumber",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400",
  },
  {
    name: "Amina Yusuf",
    category: "Electrical Engineer",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400",
  },
  {
    name: "Victor Evans",
    category: "Fine Painter",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
  {
    name: "Olawale Silva",
    category: "HVAC Specialist",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400",
  },
  {
    name: "Blessing Ade",
    category: "Interior Carpenter",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
  {
    name: "Julian Hart",
    category: "Smart Home Pro",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1558227108-83a15ddbbb15?w=400",
  },
];

export default function FeaturedArtisans() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* 🔹 Background Aura */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        {/* 🔹 HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full shadow-sm">
              <Hammer size={14} className="fill-blue-600/20" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                The Elite Circle
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter">
              Featured Artisans
            </h3>
          </div>
          <button className="text-blue-600 font-fantasy text-lg hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-600/30 transition-all active:scale-95 group">
            Explore All Professionals
            <ArrowUpRight
              className="inline-block ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              size={20}
            />
          </button>
        </div>

        {/* 🔹 ARTISAN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {artisans.map((pro, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative h-[200px] w-full overflow-hidden rounded-[2.5rem] mb-6 shadow-xl shadow-blue-900/5">
                <img
                  src={pro.img}
                  alt={pro.name}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Overlay with Glassmorphism Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating Badge */}
                <div className="absolute top-6 left-6 flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-white/20">
                  <BadgeCheck size={14} className="text-blue-600" />
                  <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">
                    Premium
                  </span>
                </div>

                {/* View Profile Arrow */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Info Area */}
              <div className="px-2 space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-2xl font-fantasy text-slate-900 group-hover:text-blue-600 transition-colors">
                    {pro.name}
                  </h4>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="fill-blue-600 text-blue-600" />
                    <span className="text-sm font-bold text-slate-900">
                      {pro.rating}
                    </span>
                  </div>
                </div>
                <p className="text-blue-500 text-xs font-bold uppercase tracking-[0.2em]">
                  {pro.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
