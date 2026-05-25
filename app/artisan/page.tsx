"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Loader2,
  Radio,
  TrendingUp,
  Wrench,
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

  const statCards = [
    {
      title: "Pending Requests",
      value: stats.pending,
      icon: Clock3,
      description: "Awaiting your response",
      bgColor: "bg-yellow-80",
      borderColor: "border-yellow-200",
      iconBg: "bg-yellow-100 text-yellow-700",
      hoverBg: "hover:bg-yellow-100",
    },
    {
      title: "Active Jobs",
      value: stats.active,
      icon: BriefcaseBusiness,
      description: "In progress",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100 text-blue-700",
      hoverBg: "hover:bg-blue-100",
    },
    {
      title: "Completed",
      value: stats.completed,
      icon: CheckCircle2,
      description: "Total completed",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-100 text-green-700",
      hoverBg: "hover:bg-green-100",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <div className="flex-1 flex flex-col">
          <section className="flex-1 overflow-auto">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
              {/* Header */}
<div className="group mb-8 overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,11,118,0.4)]" style={{ background: 'linear-gradient(135deg, #000b76 0%, #0012a0 50%, #000b76 100%)' }}>
  <div className="relative">
    {/* Animated background patterns */}
    <div className="absolute inset-0 opacity-30">
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full blur-3xl animate-pulse" style={{ background: '#000b76', opacity: 0.2 }} />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full blur-3xl animate-pulse delay-1000" style={{ background: '#000b76', opacity: 0.2 }} />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ background: '#000b76', opacity: 0.2 }} />
    </div>

    {/* Grid pattern overlay */}
    <div 
      className="absolute inset-0 opacity-50 pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
      }}
    />

    <div className="relative px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          {/* Badge Row */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-sm border border-white/20">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Live Dashboard
              </span>
            </div>
            
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-sm">
              <span className="text-xs font-medium text-white">Role: Artisan</span>
            </div>
          </div>

          {/* Title Section */}
<div className="space-y-2 p-4">
  <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-5xl">
    
    <span className="mt-2 bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">
      Hello, {user?.full_name?.split(" ")[0] || "Artisan"}!
    </span> 👋
  </h1>
  
  <p className="max-w-2xl text-base font-medium leading-relaxed text-white/80 sm:text-lg md:text-xl">
    Your command center for managing jobs and tracking requests.
  </p>
</div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/artisan/requests"
              className="group/btn inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#000b76] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
            >
              Browse Requests
              <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
            
            <Link
              href="/artisan/active-jobs"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              <BriefcaseBusiness size={16} />
              Active Jobs ({stats.active})
            </Link>
          </div>
        </div>

        {/* Right Side - Image with Card Effect */}
        <div className="relative flex-shrink-0 lg:w-auto">
          
          {/* Image Container */}
          <div className="group/img relative rounded-2xl">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/images/dashboard-img.png"
                alt="Dashboard Overview"
                className="h-auto w-full rounded-xl object-cover transition-all duration-500  lg:w-80"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x500/0012a0/white?text=Dashboard+Overview";
                }}
              />
              
            </div>
            
          </div>
          
          {/* Decorative rings */}
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
        </div>
      </div>
      
      {/* Bottom Status Bar */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${stats.available ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
            <span className="text-xs text-white/70">
              Status: {stats.available ? 'Online & Accepting Jobs' : 'Offline'}
            </span>
          </div>
          
          <div className="hidden h-4 w-px bg-white/20 sm:block" />
          
          <div className="flex items-center gap-2">
            <Clock3 size={12} className="text-white/60" />
            <span className="text-xs text-white/70">
              Last active: Just now
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/50">✨ Pro Tip: Update your services to get more requests</span>
        </div>
      </div>
    </div>
  </div>
</div>
              {loading ? (
                <div className="flex min-h-96 items-center justify-center rounded-2xl bg-gray-50 p-8 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Loader2
                      className="animate-spin text-[#000b76]"
                      size={24}
                    />
                    <span className="text-sm text-gray-600">
                      Loading dashboard...
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  {/* Stats Grid with Light Colors */}
                  <div className="mb-8 grid gap-6 md:grid-cols-3">
                    {statCards.map((stat) => {
                      const Icon = stat.icon;
                      return (
                        <div
                          key={stat.title}
                          className={`group relative overflow-hidden rounded-2xl ${stat.bgColor} border ${stat.borderColor} p-6 transition-all duration-300 ${stat.hoverBg} hover:-translate-y-1 hover:shadow-lg`}
                        >
                          <div className="relative flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                                {stat.title}
                              </p>
                              <p className="mt-3 text-4xl font-bold text-black">
                                {stat.value}
                              </p>
                              <p className="mt-2 text-xs text-gray-500">
                                {stat.description}
                              </p>
                            </div>
                            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconBg} shadow-md transition-all duration-300 group-hover:scale-110`}>
                              <Icon size={20} />
                            </div>
                          </div>
                          
                          {/* Progress bar for visual */}
                          <div className="relative mt-4 h-1 w-full overflow-hidden rounded-full bg-white/50">
                            <div 
                              className="absolute left-0 top-0 h-full rounded-full transition-all duration-500"
                              style={{ 
                                width: `${Math.min(100, (stat.value / 50) * 100)}%`,
                                backgroundColor: stat.iconBg.includes('yellow') ? '#eab308' : stat.iconBg.includes('blue') ? '#3b82f6' : '#22c55e'
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Main Content Grid */}
                  <div className="grid gap-6 lg:grid-cols-3">
                    {/* Active Jobs Section */}
                    <div className="lg:col-span-2 overflow-hidden rounded-2xl bg-white p-6 shadow-lg shadow-gray-200/50 ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-xl">
                      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h2 className="text-xl font-bold text-black">
                            Active Jobs
                          </h2>
                          <p className="mt-1 text-sm text-gray-500">
                            {activeJobs.length} ongoing request
                            {activeJobs.length !== 1 ? "s" : ""}
                          </p>
                        </div>
                        {activeJobs.length > 0 && (
                          <Link
                            href="/artisan/requests"
                            className="inline-flex items-center gap-2 text-sm font-medium text-[#000b76] transition-all duration-300 hover:text-[#000b76]/80 hover:gap-3"
                          >
                            View all jobs
                            <ArrowRight size={14} />
                          </Link>
                        )}
                      </div>

                      {activeJobs.length === 0 ? (
                        <div className="flex min-h-[220px] flex-col items-center justify-center rounded-xl bg-gray-50 p-8 text-center">
                          <BriefcaseBusiness
                            size={40}
                            className="mb-3 text-gray-400"
                          />
                          <p className="font-semibold text-black">
                            No active jobs yet
                          </p>
                          <p className="mt-2 text-sm text-gray-500">
                            Any accepted requests will show up here.
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {activeJobs.map((job) => (
                            <div
                              key={job.id}
                              className="group flex flex-col gap-4 rounded-xl bg-gray-50 p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between"
                            >
                              <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#000b76]/10 text-[#000b76] shadow-sm">
                                  <Wrench size={20} />
                                </div>
                                <div>
                                  <p className="font-semibold text-black">
                                    Service #{job.service_id.slice(0, 8)}
                                  </p>
                                  <div className="flex items-center gap-2 mt-1">
                                    <span className={`inline-flex h-2 w-2 rounded-full ${
                                      job.status === 'accepted' ? 'bg-blue-500 animate-pulse' : 'bg-yellow-500'
                                    }`} />
                                    <p className="text-sm text-gray-500 capitalize">
                                      {job.status.replace("_", " ")}
                                    </p>
                                  </div>
                                </div>
                              </div>
<Link
  href={`/artisan/jobs/${job.id}`}
  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#000b76] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
>
  View Details
  <ArrowRight size={14} />
</Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Recent Activity Section */}
                    <div className="rounded-2xl bg-white p-6 shadow-lg shadow-gray-200/50 ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-xl">
                      <div className="mb-5">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-1 rounded-full bg-[#000b76]" />
                          <h2 className="text-xl font-bold text-black">
                            Recent Activity
                          </h2>
                        </div>
                        <p className="mt-1 text-sm text-gray-500 pl-3">
                          Latest updates from your requests
                        </p>
                      </div>

                      {activity.length === 0 ? (
                        <div className="mt-6 flex min-h-[200px] flex-col items-center justify-center rounded-xl bg-gray-50 p-8 text-center">
                          <TrendingUp
                            size={32}
                            className="mb-2 text-gray-400"
                          />
                          <p className="text-sm text-gray-500">
                            No recent activity
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {activity.map((item) => (
                            <div
                              key={item.id}
                              className="group flex gap-3 rounded-xl bg-gray-50 p-3 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gray-100"
                            >
                              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#000b76]/10 text-[#000b76] shadow-sm">
                                <span className="text-xs font-bold">
                                  {new Date(item.created_at).toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: "short",
                                  })}
                                </span>
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold text-black capitalize">
                                  Request {item.status.replace("_", " ")}
                                </p>
                                <p className="mt-1 text-xs text-gray-500">
                                  {item.created_at
                                    ? new Date(item.created_at).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      })
                                    : "Recently"}
                                </p>
                              </div>
                              <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="h-2 w-2 rounded-full bg-[#000b76]" />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Activity summary card */}
                      <div className="mt-6 rounded-xl bg-[#000b76]/5 p-4 border border-[#000b76]/10">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-black">Completion Rate</span>
                          <span className="text-sm font-bold text-[#000b76]">
                            {stats.completed > 0 ? Math.round((stats.completed / (stats.completed + stats.active + stats.pending)) * 100) : 0}%
                          </span>
                        </div>
                        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#000b76]/10">
                          <div 
                            className="h-full rounded-full bg-[#000b76] transition-all duration-500"
                            style={{ width: `${stats.completed > 0 ? Math.min(100, (stats.completed / (stats.completed + stats.active + stats.pending)) * 100) : 0}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}