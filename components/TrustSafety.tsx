export default function TrustSection() {
  const items = [
    {
      title: "Verified Experts",
      desc: "Every artisan is screened and approved before joining.",
    },
    {
      title: "Transparent Pricing",
      desc: "Know what you’ll pay before the job starts.",
    },
    {
      title: "Fast Response",
      desc: "Get matched with available pros in minutes.",
    },
    {
      title: "Quality Guaranteed",
      desc: "We make sure the job gets done right.",
    },
  ];

  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      {/* 🔹 Soft background glow (like your loader vibe) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#000b76]/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#000b76]/5 border border-[#000b76]/10 text-[#000b76] px-4 py-2 rounded-full">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
              Trust & Safety
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            Why You Can Trust{" "}
            <span className="text-[#000b76]">GO-FIX</span>
          </h2>

          <p className="max-w-2xl text-slate-500 font-medium">
            No more guesswork. Just reliable professionals you can count on.
          </p>
        </div>

        {/* Floating Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative group"
            >
              {/* Big faded number (like your steps) */}
              <span className="absolute -top-16 left-4 text-[6rem] font-black text-slate-100 select-none pointer-events-none">
                0{i + 1}
              </span>

              {/* Card */}
              <div className="relative p-8 rounded-[2rem] bg-white border border-slate-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_25px_50px_-15px_rgba(0,11,118,0.25)] transition-all duration-300 group-hover:-translate-y-3">
                
                {/* Dot indicator (matches your step dots) */}
                <div className="w-5 h-5 bg-[#000b76] border-[4px] border-white rounded-full mb-6 shadow-lg group-hover:scale-125 transition-transform" />

                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}