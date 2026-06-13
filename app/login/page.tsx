"use client";

import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Hammer, Mail, Lock, ArrowRight, ShieldCheck, Eye, EyeOff, ArrowLeft } from "lucide-react";
import LoadingScreen from "@/components/LoadingScreen";
import { toast } from "react-toastify";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Add this for registration
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentView, setCurrentView] = useState<"login" | "register" | "forgot">("login");

  // Remove these helper functions (we'll use toast directly)
  // const handleSuccess = () => {
  //   toast.success("Operation completed successfully!");
  // };
  // const handleError = () => {
  //   toast.error("Something went wrong!");
  // };

  // LOGIN FUNCTION
  const signIn = async () => {
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // Handle specific Supabase errors
        if (error.message.includes("Invalid login credentials")) {
          toast.error("Invalid email or password. Please try again.");
        } else if (error.message.includes("Email not confirmed")) {
          toast.warning("Please verify your email before logging in.");
        } else {
          toast.error(error.message);
        }
        return;
      }

      // Success login
      toast.success("Welcome back! Login successful 🎉");

      const { data: userData } = await supabase.auth.getUser();
      const { data: profile } = await supabase
        .from("users")
        .select("role")
        .eq("id", userData.user!.id)
        .single();

      // Redirect based on role
      if (profile?.role === "artisan") {
        router.push("/artisan");
      } else {
        router.push("/client");
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  // REGISTER FUNCTION
  const signUp = async () => {
    // Validation
    if (!email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        if (error.message.includes("User already registered")) {
          toast.error("Email already registered. Please log in instead.");
        } else {
          toast.error(error.message);
        }
        return;
      }

      // Success registration
      toast.success("Account created successfully! Please check your email to verify your account.");
      
      // Optional: Switch to login view after 3 seconds
      setTimeout(() => {
        setCurrentView("login");
        setPassword("");
        setConfirmPassword("");
      }, 3000);
      
    } catch (err) {
      console.error("Signup error:", err);
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // FORGOT PASSWORD FUNCTION
  const forgotPassword = async () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        if (error.message.includes("User not found")) {
          toast.error("No account found with this email address");
        } else {
          toast.error(error.message);
        }
        return;
      }

      // Success
      toast.info("Password reset link sent to your email! Check your inbox.");
      
      // Optional: Switch back to login after 3 seconds
      setTimeout(() => {
        setCurrentView("login");
      }, 3000);
      
    } catch (err) {
      console.error("Password reset error:", err);
      toast.error("Failed to send reset link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle button click based on current view
  const handleAuthAction = () => {
    if (currentView === "login") {
      signIn();
    } else if (currentView === "register") {
      signUp();
    } else if (currentView === "forgot") {
      forgotPassword();
    }
  };

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">
        {/* LEFT COLUMN: Brand Experience - Keep as is */}
        <div className="relative hidden md:flex md:w-1/2 bg-[#000b76] overflow-hidden p-16 flex-col justify-between">
          {/* ... keep your existing left column code ... */}
          <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-500/10 blur-[100px] rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />
          <div className="relative z-10 flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#000b76]">
              <Hammer size={20} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase">
              Go-Fix
            </span>
          </div>
          <div className="relative z-10">
            <p className="text-blue-100/60 text-lg max-w-md font-medium italic">
              "The standard of excellence is only a few clicks away. Log in to
              manage your premium home services."
            </p>
          </div>
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

        {/* RIGHT COLUMN: Login Workspace */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
          <div className="w-full max-w-md space-y-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                {currentView === "login" && "Welcome Back👋"}
                {currentView === "register" && "Create Account✨"}
                {currentView === "forgot" && "Reset Password🔐"}
              </h2>
              <p className="text-slate-500 font-medium">
                {currentView === "login" && "Enter your credentials to access your account"}
                {currentView === "register" && "Join Go-Fix and find trusted artisans"}
                {currentView === "forgot" && "We'll send you a link to reset your password"}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium text-slate-900"
                  />
                </div>
              </div>

              {/* Password Field (not for forgot) */}
              {currentView !== "forgot" && (
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                    PASSWORD
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                      <Lock size={18} />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-12 outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium text-slate-900"
                    />
                    <button
                      type="button"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-slate-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-slate-400" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Confirm Password (register only) */}
              {currentView === "register" && (
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                    CONFIRM PASSWORD
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                      <Lock size={18} />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-12 outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium text-slate-900"
                    />
                    <button
                      type="button"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent cursor-pointer"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-slate-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-slate-400" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Remember me & Forgot password (login only) */}
              {currentView === "login" && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="remember" className="rounded border-gray-300 cursor-pointer" />
                    <label htmlFor="remember" className="text-sm text-slate-600 cursor-pointer">
                      Remember Me
                    </label>
                  </div>
                  <button
                    className="p-0 h-auto text-sm hover:text-opacity-80 font-medium cursor-pointer"
                    style={{ color: "#000b76" }}
                    onClick={() => setCurrentView("forgot")}
                  >
                    Forgot Password?
                  </button>
                </div>
              )}
            </div>

            {/* MAIN ACTION BUTTON */}
            <button
              className="w-full h-12 text-sm font-medium text-white hover:opacity-90 rounded-lg shadow-none cursor-pointer disabled:opacity-50 transition-all"
              style={{ backgroundColor: "#000b76" }}
              onClick={handleAuthAction}
              disabled={loading}
            >
              {loading ? "Processing..." : (
                currentView === "login" ? "Log In" :
                currentView === "register" ? "Create Account" :
                "Send Reset Link"
              )}
            </button>

            {/* Social Login (not for forgot) */}
            {currentView !== "forgot" && (
              <>
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">
                      Or {currentView === "login" ? "Login" : "Sign Up"} With
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center h-12 w-full border border-gray-200 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Google
                  </button>
                  <button className="flex items-center justify-center h-12 w-full border border-gray-200 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-.96 3.64-.82 1.57.06 2.75.63 3.54 1.51-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    Apple
                  </button>
                </div>
              </>
            )}

            {/* Switch between login/register/forgot */}
            <div className="text-center text-sm text-slate-600">
              {currentView === "login" && (
                <>
                  Don't have an account?{" "}
                  <button
                    className="p-0 h-auto text-sm hover:text-opacity-80 font-medium cursor-pointer"
                    style={{ color: "#000b76" }}
                    onClick={() => setCurrentView("register")}
                  >
                    Register Now
                  </button>
                </>
              )}
              {currentView === "register" && (
                <>
                  Already have an account?{" "}
                  <button
                    className="p-0 h-auto text-sm hover:text-opacity-80 font-medium cursor-pointer"
                    style={{ color: "#000b76" }}
                    onClick={() => setCurrentView("login")}
                  >
                    Sign In
                  </button>
                </>
              )}
              {currentView === "forgot" && (
                <>
                  Remember your password?{" "}
                  <button
                    className="p-0 h-auto text-sm hover:text-opacity-80 font-medium cursor-pointer"
                    style={{ color: "#000b76" }}
                    onClick={() => setCurrentView("login")}
                  >
                    Back to Login
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}