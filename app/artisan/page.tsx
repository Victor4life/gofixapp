"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Home,
  Loader2,
  Menu,
  MessageSquare,
  Radio,
  Settings,
  Star,
  TrendingUp,
  User,
  Wrench,
  X,
} from "lucide-react";

import { supabase } from "@/lib/supabase/client";
import { getCurrentUser } from "@/lib/auth/getCurrentUser";

type Job = {
  id: string;
  status: string;
  service_id: string;
  created_at: string;
};

export default function ArtisanDashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    pending: 0,
    active: 0,
    completed: 0,
    available: true,
  });

  const [activeJobs, setActiveJobs] = useState<Job[]>([]);
  const [activity, setActivity] = useState<Job[]>([]);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    async function fetchDashboard() {
      const u = await getCurrentUser();

      if (!u || u.role !== "artisan") {
        window.location.href = "/login";
        return;
      }

      setUser(u);

      const { data: profile } = await supabase
        .from("artisan_profiles")
        .select("id, user_id, is_available")
        .eq("user_id", u.id)
        .single();

      if (!profile) {
        setLoading(false);
        return;
      }

      const { data: jobs } = await supabase
        .from("job_requests")
        .select("*")
        .eq("artisan_id", profile.user_id)
        .order("created_at", { ascending: false });

      const pending =
        jobs?.filter((job) => job.status === "pending").length || 0;

      const active =
        jobs?.filter((job) =>
          ["accepted", "in_progress"].includes(job.status)
        ) || [];

      const completed =
        jobs?.filter((job) => job.status === "completed").length || 0;

      setStats({
        pending,
        active: active.length,
        completed,
        available: profile.is_available,
      });

      setActiveJobs(active);
      setActivity(jobs?.slice(0, 5) || []);
      setLoading(false);
    }

    fetchDashboard();

    const channel = supabase
      .channel("artisan-dashboard")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "job_requests",
        },
        () => {
          fetchDashboard();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const completionRate =
    stats.completed + stats.active + stats.pending > 0
      ? Math.round(
          (stats.completed /
            (stats.completed + stats.active + stats.pending)) *
            100
        )
      : 0;

  const firstName = user?.full_name?.split(" ")[0] || "Artisan";

  const navigation = [
    {
      label: "Dashboard",
      icon: Home,
      href: "/artisan/dashboard",
      active: true,
    },
    {
      label: "Requests",
      icon: BriefcaseBusiness,
      href: "/artisan/requests",
    },
    {
      label: "Active Jobs",
      icon: Wrench,
      href: "/artisan/active-jobs",
    },
    {
      label: "Messages",
      icon: MessageSquare,
      href: "#",
    },
    {
      label: "Reviews",
      icon: Star,
      href: "#",
    },
    {
      label: "Profile",
      icon: User,
      href: "#",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "#",
    },
  ];

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7faff]">
        <div className="flex items-center gap-3 rounded-2xl bg-white px-6 py-5 shadow-sm ring-1 ring-gray-100">
          <Loader2 className="animate-spin text-[#000b76]" size={22} />
          <span className="text-sm font-medium text-gray-600">
            Loading dashboard...
          </span>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7faff] text-[#111827]">
      <div className="flex min-h-screen">

        {/* Mobile overlay */}
        {mobileMenu && (
          <button
            aria-label="Close menu"
            onClick={() => setMobileMenu(false)}
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          />
        )}

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}
        <div className="min-w-0 flex-1">
          {/* Top Header */}
          <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/95 backdrop-blur">
            <div className="flex h-[82px] items-center justify-between gap-4 px-5 sm:px-7 lg:px-9">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setMobileMenu(true)}
                  className="rounded-xl border border-gray-200 p-2.5 lg:hidden"
                >
                  <Menu size={20} />
                </button>

                <div>
                  <h1 className="text-lg font-bold text-[#000b76] sm:text-xl">
                    Good morning, {firstName} 👋
                  </h1>
                  <p className="hidden text-xs text-gray-500 sm:block">
                    Here&apos;s what&apos;s happening with your work today.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Search */}
                <div className="hidden h-11 w-[280px] items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 md:flex">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-400"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="m20 20-4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>

                  <input
                    type="text"
                    placeholder="Search jobs, customers..."
                    className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  />
                </div>

                {/* Notifications */}
                <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">
                  <Bell size={19} />

                  <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
                    3
                  </span>
                </button>

                {/* User */}
                <div className="hidden items-center gap-3 border-l border-gray-200 pl-4 sm:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#000b76]/10 text-sm font-bold text-[#000b76]">
                    {firstName.charAt(0)}
                  </div>

                  <div className="hidden xl:block">
                    <p className="text-sm font-semibold text-gray-900">
                      {firstName}
                    </p>
                    <p className="text-[11px] text-gray-500">
                      Skilled Artisan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Page */}
          <section className="px-5 py-6 sm:px-7 lg:px-9 lg:py-8">
            <div className="mx-auto max-w-[1500px]">
              {/* =====================================================
                  HERO / OPPORTUNITY BANNER
              ===================================================== */}
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-r from-[#000b76] via-[#0019a5] to-[#075de5] px-6 py-7 text-white shadow-lg shadow-[#000b76]/10 sm:px-8">
                {/* Decorative shapes */}
                <div className="absolute -right-10 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute bottom-[-80px] right-[20%] h-44 w-44 rounded-full bg-blue-300/10 blur-2xl" />

                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-5">
                    <div className="hidden h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white/10 sm:flex">
                      <Wrench size={29} />
                    </div>

                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/70">
                          Live Dashboard
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold sm:text-3xl">
                        Ready to get more jobs?
                      </h2>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
                        Keep your profile updated, showcase your skills and
                        availability, and get discovered by more customers.
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/artisan/requests"
                    className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#000b76] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    View Opportunities
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>

                <div className="relative mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 text-xs text-white/60">
                  <span className="flex items-center gap-2">
                    <Radio size={13} />
                    Status:{" "}
                    <strong className="text-white">
                      {stats.available
                        ? "Online & Accepting Jobs"
                        : "Currently Offline"}
                    </strong>
                  </span>

                  <span className="hidden h-4 w-px bg-white/20 sm:block" />

                  <span className="flex items-center gap-2">
                    <Clock3 size={13} />
                    Last active: Just now
                  </span>
                </div>
              </div>

              {/* =====================================================
                  STAT CARDS
              ===================================================== */}
              <div className="mb-6 grid gap-4 md:grid-cols-3">
                {/* Pending */}
                <div className="group rounded-2xl border border-yellow-100 bg-[#fffdf7] p-5 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                        Pending Requests
                      </p>

                      <p className="mt-3 text-3xl font-bold text-[#000b76]">
                        {stats.pending}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Awaiting your response
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-100 text-yellow-700">
                      <Clock3 size={21} />
                    </div>
                  </div>

                  <div className="mt-5 h-1 overflow-hidden rounded-full bg-yellow-100">
                    <div
                      className="h-full rounded-full bg-yellow-500 transition-all"
                      style={{
                        width: `${Math.min(
                          100,
                          Math.max(10, stats.pending * 10)
                        )}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Active */}
                <div className="group rounded-2xl border border-blue-100 bg-[#f8fbff] p-5 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                        Active Jobs
                      </p>

                      <p className="mt-3 text-3xl font-bold text-[#000b76]">
                        {stats.active}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Currently in progress
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                      <BriefcaseBusiness size={21} />
                    </div>
                  </div>

                  <div className="mt-5 h-1 overflow-hidden rounded-full bg-blue-100">
                    <div
                      className="h-full rounded-full bg-blue-600 transition-all"
                      style={{
                        width: `${Math.min(
                          100,
                          Math.max(10, stats.active * 15)
                        )}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Completed */}
                <div className="group rounded-2xl border border-green-100 bg-[#f8fffb] p-5 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                        Completed
                      </p>

                      <p className="mt-3 text-3xl font-bold text-[#000b76]">
                        {stats.completed}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Total completed jobs
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700">
                      <CheckCircle2 size={21} />
                    </div>
                  </div>

                  <div className="mt-5 h-1 overflow-hidden rounded-full bg-green-100">
                    <div
                      className="h-full rounded-full bg-green-500 transition-all"
                      style={{
                        width: `${Math.min(
                          100,
                          Math.max(10, stats.completed * 8)
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* =====================================================
                  MAIN GRID
              ===================================================== */}
              <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(300px,0.85fr)]">
                {/* ACTIVE JOBS */}
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-[#000b76]">
                        Active Jobs
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        {activeJobs.length} ongoing request
                        {activeJobs.length !== 1 ? "s" : ""}
                      </p>
                    </div>

                    {activeJobs.length > 0 && (
                      <Link
                        href="/artisan/active-jobs"
                        className="group flex items-center gap-1 text-sm font-semibold text-[#000b76]"
                      >
                        View All
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    )}
                  </div>

                  {activeJobs.length === 0 ? (
                    <div className="flex min-h-[260px] flex-col items-center justify-center rounded-xl bg-[#f8faff] p-8 text-center">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#000b76]/10 text-[#000b76]">
                        <BriefcaseBusiness size={25} />
                      </div>

                      <p className="font-semibold text-gray-900">
                        No active jobs yet
                      </p>

                      <p className="mt-2 max-w-sm text-sm text-gray-500">
                        Accepted requests will appear here so you can track
                        and manage your ongoing work.
                      </p>

                      <Link
                        href="/artisan/requests"
                        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#000b76] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#00118f]"
                      >
                        Browse Requests
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <div className="min-w-[700px]">
                        {/* Table heading */}
                        <div className="grid grid-cols-[1.4fr_1fr_1fr_100px] gap-4 rounded-xl bg-[#f7faff] px-4 py-3 text-[10px] font-bold uppercase tracking-wide text-gray-500">
                          <span>Job</span>
                          <span>Status</span>
                          <span>Date</span>
                          <span />
                        </div>

                        <div className="divide-y divide-gray-100">
                          {activeJobs.map((job) => {
                            const accepted = job.status === "accepted";

                            return (
                              <div
                                key={job.id}
                                className="grid grid-cols-[1.4fr_1fr_1fr_100px] items-center gap-4 px-4 py-4 transition hover:bg-[#fafcff]"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#000b76]/10 text-[#000b76]">
                                    <Wrench size={18} />
                                  </div>

                                  <div className="min-w-0">
                                    <p className="truncate text-sm font-semibold text-gray-900">
                                      Service #
                                      {job.service_id.slice(0, 8)}
                                    </p>

                                    <p className="mt-1 text-xs text-gray-500">
                                      Job request
                                    </p>
                                  </div>
                                </div>

                                <div>
                                  <span
                                    className={`
                                      inline-flex items-center gap-2 rounded-full px-3 py-1.5
                                      text-[11px] font-semibold capitalize
                                      ${
                                        accepted
                                          ? "bg-blue-50 text-blue-700"
                                          : "bg-yellow-50 text-yellow-700"
                                      }
                                    `}
                                  >
                                    <span
                                      className={`h-1.5 w-1.5 rounded-full ${
                                        accepted
                                          ? "bg-blue-500"
                                          : "bg-yellow-500"
                                      }`}
                                    />
                                    {job.status.replace("_", " ")}
                                  </span>
                                </div>

                                <div className="text-xs text-gray-500">
                                  {new Date(
                                    job.created_at
                                  ).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  })}
                                </div>

                                <Link
                                  href={`/artisan/jobs/${job.id}`}
                                  className="inline-flex items-center justify-center gap-1 rounded-lg border border-[#000b76]/20 px-3 py-2 text-xs font-semibold text-[#000b76] transition hover:bg-[#000b76] hover:text-white"
                                >
                                  Details
                                  <ChevronRight size={13} />
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* RECENT ACTIVITY */}
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
                  <div className="mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-7 w-1 rounded-full bg-[#000b76]" />

                      <h2 className="text-xl font-bold text-[#000b76]">
                        Recent Activity
                      </h2>
                    </div>

                    <p className="mt-2 pl-4 text-sm text-gray-500">
                      Latest updates from your requests
                    </p>
                  </div>

                  {activity.length === 0 ? (
                    <div className="flex min-h-[230px] flex-col items-center justify-center rounded-xl bg-[#f8faff] text-center">
                      <TrendingUp className="mb-3 text-gray-400" size={30} />

                      <p className="text-sm font-medium text-gray-600">
                        No recent activity
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {activity.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-3 rounded-xl border border-gray-100 bg-[#fbfcff] p-3 transition hover:border-blue-100 hover:shadow-sm"
                        >
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#000b76]/10 text-center text-[10px] font-bold text-[#000b76]">
                            {new Date(item.created_at).toLocaleDateString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "short",
                              }
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold capitalize text-gray-900">
                              Request {item.status.replace("_", " ")}
                            </p>

                            <p className="mt-1 text-xs text-gray-500">
                              {item.created_at
                                ? new Date(
                                    item.created_at
                                  ).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })
                                : "Recently"}
                            </p>
                          </div>

                          <div
                            className={`h-2 w-2 rounded-full ${
                              item.status === "completed"
                                ? "bg-green-500"
                                : item.status === "pending"
                                  ? "bg-yellow-500"
                                  : "bg-blue-500"
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Completion */}
                  <div className="mt-6 rounded-xl border border-[#000b76]/10 bg-[#000b76]/5 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-800">
                        Completion Rate
                      </span>

                      <span className="text-sm font-bold text-[#000b76]">
                        {completionRate}%
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#000b76]/10">
                      <div
                        className="h-full rounded-full bg-[#000b76] transition-all duration-700"
                        style={{ width: `${completionRate}%` }}
                      />
                    </div>

                    <p className="mt-2 text-[11px] text-gray-500">
                      Based on your current requests and completed jobs.
                    </p>
                  </div>
                </div>
              </div>

              {/* =====================================================
                  BOTTOM INFORMATION
              ===================================================== */}
              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                {/* Availability */}
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                        Availability
                      </p>

                      <p className="mt-2 text-lg font-bold text-gray-900">
                        {stats.available
                          ? "Online & Available"
                          : "Currently Offline"}
                      </p>
                    </div>

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full ${
                        stats.available
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <Radio size={20} />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        stats.available
                          ? "animate-pulse bg-green-500"
                          : "bg-gray-400"
                      }`}
                    />

                    {stats.available
                      ? "Customers can currently send you requests."
                      : "You won't receive new job requests."}
                  </div>
                </div>

                {/* Profile */}
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                        Your Profile
                      </p>

                      <p className="mt-2 text-lg font-bold text-gray-900">
                        Keep your profile updated
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-[#000b76]">
                      <User size={20} />
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">
                        Profile completion
                      </span>
                      <span className="font-bold text-[#000b76]">92%</span>
                    </div>

                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full w-[92%] rounded-full bg-[#000b76]" />
                    </div>
                  </div>
                </div>

                {/* Quick Action */}
                <div className="rounded-2xl bg-gradient-to-br from-[#000b76] to-[#075de5] p-5 text-white shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-white/60">
                        Quick Action
                      </p>

                      <p className="mt-2 text-lg font-bold">
                        Find your next job
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                      <BriefcaseBusiness size={20} />
                    </div>
                  </div>

                  <p className="mt-2 text-sm leading-5 text-white/70">
                    Browse available requests and connect with homeowners.
                  </p>

                  <Link
                    href="/artisan/requests"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-[#000b76] transition hover:-translate-y-0.5"
                  >
                    Browse Requests
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}