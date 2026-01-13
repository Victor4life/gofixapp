"use client";

import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Hammer, Mail, Lock, ArrowRight, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert(error.message);
        return;
      }

      const { data: userData } = await supabase.auth.getUser();

      const { data: profile } = await supabase
        .from("users")
        .select("role")
        .eq("id", userData.user!.id)
        .single();

      if (profile?.role === "artisan") {
        router.push("/artisan");
      } else {
        router.push("/client");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
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
            "The standard of excellence is only a few clicks away. Log in to
            manage your premium home services."
          </p>
        </div>

        {/* Trust Badge */}
        <div className="relative z-10 flex items-center space-x-4 bg-white/5 border border-white/10 w-fit p-4 rounded-2xl backdrop-blur-md">
          <ShieldCheck className="text-blue-400" size={24} />
          <div>
            <p className="text-white text-xs font-bold uppercase tracking-widest">
              Secure Portal
            </p>
            <p className="text-blue-200/50 text-[10px]">
              End-to-end encrypted session
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 RIGHT COLUMN: Login Workspace */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Sign In
            </h2>
            <p className="text-slate-500 font-medium">
              Enter your credentials to access your account
            </p>
          </div>

          <div className="space-y-6">
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
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium text-slate-900"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                  Password
                </label>
                <button className="text-[10px] font-bold text-blue-600 uppercase tracking-widest hover:underline">
                  Forgot Password?
                </button>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium text-slate-900"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={signIn}
              disabled={loading}
              className="w-full bg-[#000b76] hover:bg-blue-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center space-x-2 transition-all active:scale-95 disabled:opacity-50 shadow-xl shadow-blue-900/20"
            >
              <span>{loading ? "Authenticating..." : "Access My Account"}</span>
              {!loading && <ArrowRight size={18} />}
            </button>
          </div>

          <p className="text-center text-slate-500 text-sm font-medium">
            New to Go-Fix?{" "}
            <button className="text-blue-600 font-bold hover:underline">
              Request an Invitation
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
