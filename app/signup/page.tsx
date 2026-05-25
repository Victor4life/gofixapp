"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Hammer, Mail, Lock, User, ArrowRight, ShieldCheck, Eye, EyeOff, BriefcaseBusiness, UserRound } from "lucide-react";
import LoadingScreen from "@/components/LoadingScreen";

export default function SignupPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    /* 1️⃣ Create auth user */
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error || !data.user) {
      alert(error?.message || "Signup failed");
      setLoading(false);
      return;
    }

    /* 2️⃣ Create app user */
    const { error: userError } = await supabase.from("users").insert({
      id: data.user.id,
      full_name: fullName,
      role,
    });

    if (userError) {
      alert(userError.message);
      setLoading(false);
      return;
    }

    /* 3️⃣ If artisan → create profile */
    if (role === "artisan") {
      const { error: artisanError } = await supabase
        .from("artisan_profiles")
        .insert({
          user_id: data.user.id,
          is_available: true,
        });

      if (artisanError) {
        alert(artisanError.message);
        setLoading(false);
        return;
      }
    }

    /* 4️⃣ Redirect */
    if (role === "artisan") {
      router.push("/onboarding/artisan");
    } else {
      router.push("/client");
    }
  }

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

          {/* Branding Text */}
          <div className="relative z-10">
            <p className="text-blue-100/60 text-lg max-w-md font-medium italic">
              "Join the platform that connects top-tier artisans with quality clients. Start your journey today."
            </p>
          </div>

          {/* Trust Badge */}
          <div className="relative z-10 flex items-center space-x-4 bg-white/5 border border-white/10 w-fit p-4 rounded-2xl backdrop-blur-md">
            <ShieldCheck className="text-blue-400" size={24} />
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-widest">
                Secure Signup
              </p>
              <p className="text-blue-200/50 text-[10px]">
                Your data is protected & encrypted
              </p>
            </div>
          </div>
        </div>

        {/* 🔹 RIGHT COLUMN: Signup Workspace */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
          <div className="w-full max-w-md space-y-8">
            {/* Header */}
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Create Account 🚀
              </h2>
              <p className="text-slate-500 font-medium">
                Join Go-Fix and start your journey
              </p>
            </div>

            <form onSubmit={handleSignup} className="space-y-6">
              {/* Full Name Field */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                  Full Name
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium text-slate-900"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium text-slate-900"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                    <Lock size={18} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-12 outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium text-slate-900"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-0 top-0 h-full px-4 py-2 hover:bg-transparent cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff size={18} className="text-slate-400" />
                    ) : (
                      <Eye size={18} className="text-slate-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Role Selection */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                  I am a
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setRole("client")}
                    className={`flex items-center justify-center gap-3 p-4 rounded-2xl border-2 transition-all duration-300 ${
                      role === "client"
                        ? "border-[#000b76] bg-[#000b76]/5 text-[#000b76]"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <UserRound size={20} />
                    <span className="font-semibold">Client</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setRole("artisan")}
                    className={`flex items-center justify-center gap-3 p-4 rounded-2xl border-2 transition-all duration-300 ${
                      role === "artisan"
                        ? "border-[#000b76] bg-[#000b76]/5 text-[#000b76]"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <BriefcaseBusiness size={20} />
                    <span className="font-semibold">Artisan</span>
                  </button>
                </div>
              </div>

              {/* Signup Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 text-sm font-medium text-white hover:opacity-90 rounded-xl shadow-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ backgroundColor: "#000b76" }}
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    Sign Up
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">
                  Or Sign Up With
                </span>
              </div>
            </div>

            {/* Social Login Options */}
            <div className="grid grid-cols-2 gap-4">
              {/* Google Button */}
              <button
                type="button"
                className="flex items-center justify-center h-12 w-full border border-gray-200 rounded-xl bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 shadow-sm transition"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>

              {/* Apple Button */}
              <button
                type="button"
                className="flex items-center justify-center h-12 w-full border border-gray-200 rounded-xl bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 shadow-sm transition"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-.96 3.64-.82 1.57.06 2.75.63 3.54 1.51-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Apple
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <button
                type="button"
                className="p-0 h-auto text-sm hover:text-opacity-80 font-medium cursor-pointer"
                style={{ color: "#000b76" }}
                onClick={() => router.push("/login")}
              >
                Sign In.
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}