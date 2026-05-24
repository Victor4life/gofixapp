"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { 
  Hammer, 
  User, 
  BriefcaseBusiness, 
  Wrench, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2,
  AlertCircle,
  Loader2,
  Save,
  Sparkles
} from "lucide-react";
import LoadingScreen from "@/components/LoadingScreen";

export default function ArtisanOnboarding() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [bio, setBio] = useState("");
  const [services, setServices] = useState<any[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const { data } = await supabase.auth.getUser();
      setUser(data.user);

      const { data: servicesData } = await supabase
        .from("services")
        .select("*");

      setServices(servicesData || []);
      setLoading(false);
    }

    load();
  }, []);

  function toggleService(id: string) {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id]
    );
  }

  async function submit() {
    if (!user) return;
    setSubmitting(true);

    // 1. update artisan profile
    const { data: profile, error } = await supabase
      .from("artisan_profiles")
      .select("id")
      .eq("user_id", user.id)
      .single();

    if (error || !profile) {
      alert("Profile not found. Please restart onboarding.");
      setSubmitting(false);
      return;
    }
    
    await supabase
      .from("artisan_profiles")
      .update({
        bio,
        is_available: true,
      })
      .eq("id", profile.id);

    // 2. insert services
    await supabase.from("artisan_services").insert(
      selected.map((serviceId) => ({
        artisan_id: profile.id,
        service_id: serviceId,
      }))
    );

    router.push("/artisan");
  }

  const isFormValid = bio.trim().length > 0 && selected.length > 0;
  const selectedCount = selected.length;

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">
        {/* 🔹 LEFT COLUMN: Brand Experience */}
        <div className="relative hidden md:flex md:w-1/2 bg-[#000b76] overflow-hidden p-16 flex-col justify-between">
          {/* Animated Background Elements */}
          <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-500/10 blur-[100px] rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />

          {/* Logo */}
          <div className="relative z-10 flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#000b76]">
              <Hammer size={20} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase">
              Go-Fix
            </span>
          </div>

          {/* Progress Indicator */}
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <CheckCircle2 size={16} className="text-white" />
                </div>
                <span className="text-white/80 text-sm">Account Created</span>
              </div>
              <div className="w-12 h-px bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white text-[#000b76] flex items-center justify-center font-bold">
                  2
                </div>
                <span className="text-white font-semibold text-sm">Profile Setup</span>
              </div>
              <div className="w-12 h-px bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  3
                </div>
                <span className="text-white/60 text-sm">Ready to Go</span>
              </div>
            </div>
            
            <p className="text-blue-100/60 text-lg max-w-md font-medium italic">
              "Complete your profile to start receiving job requests and grow your artisan business."
            </p>
          </div>

          {/* Trust Badge */}
          <div className="relative z-10 flex items-center space-x-4 bg-white/5 border border-white/10 w-fit p-4 rounded-2xl backdrop-blur-md">
            <ShieldCheck className="text-blue-400" size={24} />
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-widest">
                Verified Artisan
              </p>
              <p className="text-blue-200/50 text-[10px]">
                Build trust with verified profile
              </p>
            </div>
          </div>
        </div>

        {/* 🔹 RIGHT COLUMN: Onboarding Workspace */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
          <div className="w-full max-w-md space-y-8">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles size={24} className="text-[#000b76]" />
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  Complete Your Profile
                </h2>
              </div>
              <p className="text-slate-500 font-medium">
                Tell clients about yourself and showcase your skills
              </p>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 size={32} className="animate-spin text-[#000b76]" />
              </div>
            ) : (
              <div className="space-y-8">
                {/* Bio Section */}
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                    Professional Bio
                  </label>
                  <div className="relative group">
                    <div className="absolute top-4 left-4 pointer-events-none text-slate-400">
                      <User size={18} />
                    </div>
                    <textarea
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium text-slate-900 resize-none"
                      placeholder="Write a compelling bio... (e.g., Experienced electrician with 10+ years in residential services)"
                      rows={4}
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </div>
                  <p className="text-xs text-slate-400">
                    {bio.length}/200 characters recommended
                  </p>
                </div>

                {/* Services Section */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                      Select Services
                    </label>
                    {selectedCount > 0 && (
                      <span className="text-xs font-semibold text-[#000b76] bg-[#000b76]/10 px-2 py-1 rounded-full">
                        {selectedCount} selected
                      </span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto pr-2">
                    {services.map((service) => {
                      const isSelected = selected.includes(service.id);
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => toggleService(service.id)}
                          className={`group flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                            isSelected
                              ? "border-[#000b76] bg-[#000b76]/5"
                              : "border-slate-200 bg-white hover:border-slate-300"
                          }`}
                        >
                          <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
                            isSelected
                              ? "bg-[#000b76] text-white"
                              : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                          }`}>
                            <Wrench size={18} />
                          </div>
                          <div className="flex-1">
                            <p className={`font-semibold ${
                              isSelected ? "text-[#000b76]" : "text-slate-900"
                            }`}>
                              {service.name}
                            </p>
                            {service.description && (
                              <p className="text-xs text-slate-500 mt-0.5">
                                {service.description}
                              </p>
                            )}
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            isSelected
                              ? "border-[#000b76] bg-[#000b76]"
                              : "border-slate-300"
                          }`}>
                            {isSelected && (
                              <CheckCircle2 size={12} className="text-white" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Warning if no services selected */}
                {selectedCount === 0 && (
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-200">
                    <AlertCircle size={18} className="text-amber-600" />
                    <p className="text-xs text-amber-700">
                      Please select at least one service to continue
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={submit}
                  disabled={!isFormValid || submitting}
                  className="w-full h-12 text-sm font-medium text-white hover:opacity-90 rounded-xl shadow-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#000b76" }}
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Setting up your profile...
                    </>
                  ) : (
                    <>
                      <Save size={16} />
                      Complete Setup
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

                {/* Skip for now link (optional) */}
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => router.push("/artisan")}
                    className="text-sm text-slate-500 hover:text-[#000b76] transition-colors"
                  >
                    I'll complete this later
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}