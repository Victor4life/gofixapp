"use client";

import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Hammer,
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  Eye,
  EyeOff,
  ArrowLeft,
} from "lucide-react";
import LoadingScreen from "@/components/LoadingScreen";
import { toast } from "react-toastify";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentView, setCurrentView] = useState<
    "login" | "register" | "forgot"
  >("login");

  // ============================================================
  // LOGIN FUNCTION
  // ============================================================

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
        if (error.message.includes("Invalid login credentials")) {
          toast.error("Invalid email or password. Please try again.");
        } else if (error.message.includes("Email not confirmed")) {
          toast.warning("Please verify your email before logging in.");
        } else {
          toast.error(error.message);
        }

        return;
      }

      toast.success("Welcome back! Login successful 🎉");

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
      toast.error("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  // ============================================================
  // REGISTER FUNCTION
  // ============================================================

  const signUp = async () => {
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

      toast.success(
        "Account created successfully! Please check your email to verify your account."
      );

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

  // ============================================================
  // FORGOT PASSWORD FUNCTION
  // ============================================================

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

      toast.info("Password reset link sent to your email! Check your inbox.");

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

  // ============================================================
  // AUTH ACTION
  // ============================================================

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

    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <div className="flex min-h-screen w-full flex-col md:flex-row">

        {/* =====================================================
            LEFT BRAND PANEL — DESKTOP ONLY
        ====================================================== */}
        <div className="relative hidden min-h-screen w-1/2 overflow-hidden bg-[#000b76] p-10 lg:p-16 md:flex md:flex-col md:justify-between">

          {/* Background glow */}
          <div className="absolute -left-[10%] -top-[10%] h-[70%] w-[70%] rounded-full bg-blue-600/20 blur-[120px]" />

          <div className="absolute -bottom-[10%] -right-[10%] h-[60%] w-[60%] rounded-full bg-indigo-500/10 blur-[100px]" />

          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          {/* Logo */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#000b76]">
              <Hammer size={20} />
            </div>

            <span className="text-2xl font-black tracking-tighter text-white">
              Go-Fix
            </span>
          </div>

          {/* Quote */}
          <div className="relative z-10 max-w-md">
            <p className="text-lg font-medium italic leading-relaxed text-blue-100/70">
              "The standard of excellence is only a few clicks away. Log in to
              manage your premium home services."
            </p>
          </div>

          {/* Security card */}
          <div className="relative z-10 flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
            <ShieldCheck
              className="text-blue-400"
              size={24}
            />

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white">
                Secure Portal
              </p>

              <p className="mt-1 text-[10px] text-blue-200/50">
                End-to-end encrypted session
              </p>
            </div>
          </div>
        </div>


        {/* =====================================================
            RIGHT AUTH AREA
        ====================================================== */}
        <div className="flex min-h-screen w-full flex-1 items-center justify-center px-5 py-8 sm:px-8 sm:py-12 md:w-1/2 md:px-10 lg:px-16">

          <div className="w-full max-w-[430px]">

            {/* =================================================
                MOBILE LOGO
            ================================================== */}
            <div className="mb-8 flex items-center gap-2 md:hidden">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#000b76] text-white">
                <Hammer size={18} />
              </div>

              <span className="text-xl font-black tracking-tight text-[#000b76]">
                Go-Fix
              </span>

            </div>


            {/* =================================================
                HEADER
            ================================================== */}
            <div className="mb-7 space-y-2 sm:mb-9">

              <h2 className="text-[27px] font-black leading-tight tracking-[-0.03em] text-slate-900 sm:text-3xl">
                {currentView === "login" && "Welcome Back 👋"}
                {currentView === "register" && "Create Account ✨"}
                {currentView === "forgot" && "Reset Password 🔐"}
              </h2>

              <p className="max-w-[360px] text-[13px] leading-5 text-slate-500 sm:text-sm">
                {currentView === "login" &&
                  "Enter your credentials to access your account"}

                {currentView === "register" &&
                  "Join Go-Fix and find trusted artisans"}

                {currentView === "forgot" &&
                  "We'll send you a link to reset your password"}
              </p>

            </div>


            {/* =================================================
                FORM
            ================================================== */}
            <div className="space-y-5 sm:space-y-6">

              {/* EMAIL */}
              <div className="space-y-2">

                <label className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
                  Email Address
                </label>

                <div className="group relative">

                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 transition-colors group-focus-within:text-[#000b76]">
                    <Mail size={17} />
                  </div>

                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="
                      h-[50px]
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      pl-11
                      pr-4
                      text-sm
                      font-medium
                      text-slate-900
                      outline-none
                      transition-all
                      placeholder:text-slate-400
                      focus:border-[#000b76]
                      focus:bg-white
                      focus:ring-2
                      focus:ring-[#000b76]/10
                      sm:h-[54px]
                      sm:rounded-2xl
                    "
                  />

                </div>
              </div>


              {/* PASSWORD */}
              {currentView !== "forgot" && (
                <div className="space-y-2">

                  <label className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
                    Password
                  </label>

                  <div className="group relative">

                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 transition-colors group-focus-within:text-[#000b76]">
                      <Lock size={17} />
                    </div>

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="
                        h-[50px]
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        pl-11
                        pr-12
                        text-sm
                        font-medium
                        text-slate-900
                        outline-none
                        transition-all
                        placeholder:text-slate-400
                        focus:border-[#000b76]
                        focus:bg-white
                        focus:ring-2
                        focus:ring-[#000b76]/10
                        sm:h-[54px]
                        sm:rounded-2xl
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-0 top-0 flex h-full w-11 items-center justify-center text-slate-400"
                    >
                      {showPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>

                  </div>
                </div>
              )}


              {/* CONFIRM PASSWORD */}
              {currentView === "register" && (
                <div className="space-y-2">

                  <label className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
                    Confirm Password
                  </label>

                  <div className="group relative">

                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 transition-colors group-focus-within:text-[#000b76]">
                      <Lock size={17} />
                    </div>

                    <input
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) =>
                        setConfirmPassword(e.target.value)
                      }
                      className="
                        h-[50px]
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        pl-11
                        pr-12
                        text-sm
                        font-medium
                        text-slate-900
                        outline-none
                        transition-all
                        placeholder:text-slate-400
                        focus:border-[#000b76]
                        focus:bg-white
                        focus:ring-2
                        focus:ring-[#000b76]/10
                        sm:h-[54px]
                        sm:rounded-2xl
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                      className="absolute right-0 top-0 flex h-full w-11 items-center justify-center text-slate-400"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>

                  </div>
                </div>
              )}


              {/* REMEMBER / FORGOT */}
              {currentView === "login" && (
                <div className="flex items-center justify-between gap-3">

                  <label className="flex items-center gap-2 text-xs text-slate-600 sm:text-sm">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 cursor-pointer rounded border-gray-300 accent-[#000b76]"
                    />

                    <span>Remember Me</span>
                  </label>

                  <button
                    onClick={() => setCurrentView("forgot")}
                    className="text-xs font-semibold text-[#000b76] sm:text-sm"
                  >
                    Forgot Password?
                  </button>

                </div>
              )}

            </div>


            {/* =================================================
                MAIN BUTTON
            ================================================== */}
            <button
              onClick={handleAuthAction}
              disabled={loading}
              className="
                mt-6
                flex
                h-[50px]
                w-full
                items-center
                justify-center
                rounded-xl
                bg-[#000b76]
                text-sm
                font-bold
                text-white
                transition-all
                hover:bg-[#00128f]
                active:scale-[0.99]
                disabled:cursor-not-allowed
                disabled:opacity-50
                sm:mt-7
                sm:h-[54px]
                sm:rounded-2xl
              "
            >
              {loading
                ? "Processing..."
                : currentView === "login"
                ? "Log In"
                : currentView === "register"
                ? "Create Account"
                : "Send Reset Link"}
            </button>


            {/* =================================================
                SOCIAL LOGIN
            ================================================== */}
            {currentView !== "forgot" && (
              <>

                <div className="relative my-6 sm:my-7">

                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200" />
                  </div>

                  <div className="relative flex justify-center">
                    <span className="bg-white px-3 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                      Or {currentView === "login" ? "Login" : "Sign Up"} With
                    </span>
                  </div>

                </div>


                <div className="grid grid-cols-2 gap-3 sm:gap-4">

                  <button
                    className="
                      flex
                      h-[48px]
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      text-xs
                      font-medium
                      text-slate-700
                      transition
                      hover:bg-slate-50
                      sm:h-[52px]
                    "
                  >
                    <svg
                      className="mr-2 h-4 w-4 sm:h-5 sm:w-5"
                      viewBox="0 0 24 24"
                    >
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


                  <button
                    className="
                      flex
                      h-[48px]
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      text-xs
                      font-medium
                      text-slate-700
                      transition
                      hover:bg-slate-50
                      sm:h-[52px]
                    "
                  >
                    <svg
                      className="mr-2 h-4 w-4 sm:h-5 sm:w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-.96 3.64-.82 1.57.06 2.75.63 3.54 1.51-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>

                    Apple
                  </button>

                </div>

              </>
            )}


            {/* =================================================
                SWITCH VIEW
            ================================================== */}
            <div className="mt-7 text-center text-xs text-slate-500 sm:mt-8 sm:text-sm">

              {currentView === "login" && (
                <>
                  Don't have an account?{" "}
                  <button
                    onClick={() => setCurrentView("register")}
                    className="font-semibold text-[#000b76]"
                  >
                    Register Now
                  </button>
                </>
              )}

              {currentView === "register" && (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setCurrentView("login")}
                    className="font-semibold text-[#000b76]"
                  >
                    Sign In
                  </button>
                </>
              )}

              {currentView === "forgot" && (
                <>
                  Remember your password?{" "}
                  <button
                    onClick={() => setCurrentView("login")}
                    className="font-semibold text-[#000b76]"
                  >
                    Back to Login
                  </button>
                </>
              )}

            </div>

          </div>
        </div>
      </div>
    </div>
  </>
);}