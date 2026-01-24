import { Inter } from "next/font/google";
import { Search, MapPin, ArrowRight, Hammer } from "lucide-react";
import HowItWorks from "@/components/HowItWorks";
import FeaturedArtisans from "@/components/FeaturedArtisans";
import TrustSafety from "@/components/TrustSafety";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({ subsets: ["latin"] });

export default function LandingPage() {
  return (
    <>
      <LoadingScreen />
      <div className="animate-in fade-in duration-1000">
        <main
          className={`${inter.className} relative min-h-screen h-screen flex flex-col bg-[#000b76] overflow-hidden pt-10 md:pt-20 text-slate-900`}
        >
          <div
            className="absolute right-0 top-0 h-full w-full pointer-events-none z-0 opacity-100 translate-x-1/4 lg:translate-x-0"
            style={{
              backgroundImage: "url('/waves/wave(5).svg')",

              backgroundRepeat: "no-repeat",

              backgroundPosition: "bottom right",

              backgroundSize: "contain",
            }}
          />
          {/* MAIN CONTENT */}
          <section className="relative z-10 flex-1 flex items-center justify-center px-6 lg:px-20 pb-12 lg:pb-0">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* 🔹 LEFT CONTENT: 1/2 Width */}
              <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full mx-auto lg:mx-0 w-fit shadow-[0_0_15px_rgba(59,130,246,0.2)] backdrop-blur-xl animate-fade-in">
                    <Hammer
                      size={16}
                      className="text-blue-400 drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]"
                    />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                      Trusted Artisans
                    </span>
                  </div>{" "}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-white">
                    <span className="drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
                      Quality Work.
                    </span>
                    <br />
                    <span className="text-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                      Zero Stress.
                    </span>
                  </h1>{" "}
                </div>
                {/* ===== GLASS SEARCH CARD ===== */}
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl lg:rounded-full border border-white/20 w-full max-w-xl relative z-20 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  <form
                    action="/client"
                    method="get"
                    className="flex flex-col lg:flex-row items-center gap-1"
                  >
                    <div className="relative group w-full lg:flex-[1.2]">
                      <Search
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-300 group-focus-within:text-white transition-colors"
                        size={18}
                      />
                      <select
                        name="service"
                        className="w-full pl-12 pr-4 py-3 bg-transparent border-none focus:ring-0 transition-all appearance-none font-semibold text-white cursor-pointer text-sm md:text-base [&>option]:bg-[#000b76] [&>option]:text-white"
                        required
                      >
                        <option value="" className="bg-slate-900">
                          Service?
                        </option>
                        <option value="plumber">Plumbing</option>
                        <option value="electrician">Electrical</option>
                        <option value="mechanic">Mechanic</option>
                        <option value="carpenter">Carpenter</option>
                      </select>
                    </div>

                    <div className="hidden lg:block w-[1px] h-6 bg-white/20 mx-1" />

                    <div className="relative group w-full lg:flex-1">
                      <MapPin
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-300 group-focus-within:text-white transition-colors"
                        size={18}
                      />
                      <select
                        name="city"
                        className="w-full pl-12 pr-4 py-3 bg-transparent border-none focus:ring-0 transition-all appearance-none font-semibold text-white cursor-pointer text-sm md:text-base [&>option]:bg-[#000b76] [&>option]:text-white"
                        required
                      >
                        <option value="" className="bg-slate-900">
                          City
                        </option>
                        <option value="Lagos">Lagos</option>
                        <option value="Abuja">Abuja</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full lg:w-auto bg-blue-400 hover:bg-blue-400 text-white px-8 py-3 rounded-xl lg:rounded-full font-bold text-sm md:text-base transition-all flex items-center justify-center shadow-lg shadow-blue-500/20 active:scale-95 group"
                    >
                      <span className="whitespace-nowrap">Find Pro</span>
                      <ArrowRight
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                        size={18}
                      />
                    </button>
                  </form>
                </div>{" "}
                {/* ===== POPULAR SEARCHES (TAGS) =====
                <div className="space-y-3">
                  <p className="text-sm font-bold text-blue-200/50 uppercase tracking-widest">
                    Popular Searches
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {[
                      "Plumbing",
                      "Electrical",
                      "AC Repair",
                      "Carpentry",
                      "Painting",
                    ].map((tag) => (
                      <button
                        key={tag}
                        className="px-4 py-1.5 bg-white/5 border border-white/10 text-blue-100 rounded-full text-sm font-semibold hover:bg-white/20 hover:border-blue-400 transition-all duration-200 backdrop-blur-sm shadow-sm"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>*/}
              </div>
              {/* 🔹 RIGHT CONTENT: Floating Composition */}
              <div className="hidden lg:flex relative items-center justify-center h-full">
                {/* 1. Large Ambient Glow behind everything */}
                <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />

                {/* 2. The Base Image (The Professional)*/}
                <div className="relative z-10 transform translate-x-10 opacity-70 h-[420px]">
                  <img
                    src="/images/hero-image.png"
                    alt="Expert Artisan"
                    className="max-h-[500px] w-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]
                    "
                  />
                </div>

                {/* 3. Floating "Object" Card: Verification Status 
  <div className="absolute top-20 right-0 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl animate-bounce duration-[6000ms]">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-ping" />
      </div>
      <div>
        <p className="text-white font-bold text-xs uppercase tracking-tighter">Verified Master</p>
        <p className="text-blue-200 text-[10px]">Background Checked</p>
      </div>
    </div>
  </div>*/}

                {/* 4. Floating "Object" Card: Rating/Social Proof*/}
                <div className="absolute bottom-32 left-0 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl duration-[4000ms] delay-700">
                  <div className="space-y-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className="text-yellow-400 text-xs">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-white font-black text-sm">
                      4.9/5 Average Rating
                    </p>
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full border-2 border-[#000b76] bg-slate-400"
                        />
                      ))}
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white font-bold border-2 border-[#000b76]">
                        +2k
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Decorative Floating Shapes (Glass Orbs) */}
                <div className="absolute top-1/4 -left-10 w-12 h-12 bg-gradient-to-br from-white/20 to-transparent rounded-full backdrop-blur-sm border border-white/30 animate-pulse" />
                <div className="absolute bottom-1/4 -right-5 w-8 h-8 bg-blue-400/20 rounded-full blur-sm animate-ping" />
              </div>
            </div>
          </section>
        </main>
        <HowItWorks />
        <FeaturedArtisans />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
