"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import {
  BriefcaseBusiness,
  CheckCircle2,
  Loader2,
  PlayCircle,
  Clock3,
  User,
  Wrench,
  Calendar,
  AlertCircle,
  ArrowRight,
  Zap
} from "lucide-react";
import Link from "next/link";

type Job = {
  id: string;
  status: string;
  service_id: string;
  client_id: string;
  created_at: string;
};

export default function ActiveJobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingJobId, setUpdatingJobId] = useState<string | null>(null);

  async function fetchJobs() {
    setLoading(true);

    const { data } = await supabase
      .from("job_requests")
      .select("*")
      .in("status", ["accepted", "in_progress"])
      .order("created_at", { ascending: false });

    setJobs(data || []);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs();

    const channel = supabase
      .channel("active-jobs")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "job_requests",
        },
        () => {
          fetchJobs();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  async function updateStatus(jobId: string, status: string) {
    setUpdatingJobId(jobId);
    await supabase
      .from("job_requests")
      .update({ status })
      .eq("id", jobId);

    await fetchJobs();
    setUpdatingJobId(null);
  }

  const stats = {
    accepted: jobs.filter(j => j.status === "accepted").length,
    inProgress: jobs.filter(j => j.status === "in_progress").length,
    total: jobs.length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#000b76]/10 text-[#000b76]">
              <BriefcaseBusiness size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Active Jobs</h1>
              <p className="text-sm text-slate-500 mt-1">
                Manage ongoing work in real time
              </p>
            </div>
          </div>
          
          {/* Stats Summary */}
          <div className="mt-4 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-3 py-1.5 text-xs font-medium text-yellow-700">
              <Clock3 size={12} />
              Accepted: {stats.accepted}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
              <Zap size={12} />
              In Progress: {stats.inProgress}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#000b76]/10 px-3 py-1.5 text-xs font-medium text-[#000b76]">
              <BriefcaseBusiness size={12} />
              Total Active: {stats.total}
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex min-h-[400px] items-center justify-center rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <Loader2 className="animate-spin text-[#000b76]" size={24} />
              <span className="text-sm text-slate-600">Loading active jobs...</span>
            </div>
          </div>
        ) : jobs.length === 0 ? (
          /* Empty State */
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-sm">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
              <BriefcaseBusiness size={32} className="text-slate-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">No active jobs</h3>
            <p className="mt-2 text-sm text-slate-500 max-w-sm">
              Accepted jobs will appear here once you start working on them
            </p>
            <Link
              href="/artisan/requests"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#000b76] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Browse Available Requests
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          /* Jobs List */
          <div className="space-y-4">
            {jobs.map((job, index) => {
              const isAccepted = job.status === "accepted";
              const isInProgress = job.status === "in_progress";
              const isUpdating = updatingJobId === job.id;
              
              return (
                <div
                  key={job.id}
                  className="group relative overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg"
                  style={{
                    animation: `fadeIn 0.3s ease-out ${index * 0.05}s both`
                  }}
                >
                  {/* Status indicator line */}
                  <div className={`absolute left-0 top-0 h-full w-1 ${
                    isAccepted ? "bg-yellow-500" : "bg-blue-500"
                  }`} />
                  
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    {/* Left Section - Job Info */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                            isAccepted ? "bg-yellow-100" : "bg-blue-100"
                          }`}>
                            {isAccepted ? (
                              <Clock3 size={18} className="text-yellow-600" />
                            ) : (
                              <Zap size={18} className="text-blue-600" />
                            )}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">
                              Job #{job.id.slice(0, 8)}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <div className={`h-2 w-2 rounded-full ${
                                isAccepted ? "bg-yellow-500 animate-pulse" : "bg-blue-500 animate-pulse"
                              }`} />
                              <p className="text-sm font-medium capitalize">
                                {job.status === "accepted" ? "Accepted - Ready to Start" : "In Progress"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Job Details Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="flex items-center gap-2">
                          <Wrench size={14} className="text-slate-400" />
                          <span className="text-sm text-slate-600">
                            Service ID: <span className="font-mono text-xs">{job.service_id.slice(0, 12)}...</span>
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <User size={14} className="text-slate-400" />
                          <span className="text-sm text-slate-600">
                            Client ID: <span className="font-mono text-xs">{job.client_id?.slice(0, 12)}...</span>
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-slate-400" />
                          <span className="text-sm text-slate-600">
                            Created: {new Date(job.created_at).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Clock3 size={14} className="text-slate-400" />
                          <span className="text-sm text-slate-600">
                            Time: {new Date(job.created_at).toLocaleTimeString('en-US', {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Section - Actions */}
                    <div className="flex-shrink-0">
                      {isAccepted && (
                        <button
                          onClick={() => updateStatus(job.id, "in_progress")}
                          disabled={isUpdating}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                        >
                          {isUpdating ? (
                            <>
                              <Loader2 size={16} className="animate-spin" />
                              Starting...
                            </>
                          ) : (
                            <>
                              <PlayCircle size={16} />
                              Start Job
                            </>
                          )}
                        </button>
                      )}

                      {isInProgress && (
                        <button
                          onClick={() => updateStatus(job.id, "completed")}
                          disabled={isUpdating}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                        >
                          {isUpdating ? (
                            <>
                              <Loader2 size={16} className="animate-spin" />
                              Completing...
                            </>
                          ) : (
                            <>
                              <CheckCircle2 size={16} />
                              Complete Job
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Progress Bar for In Progress Jobs */}
                  {isInProgress && (
                    <div className="mt-5">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                        <span>Job Progress</span>
                        <span>In progress...</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse"
                          style={{ width: "65%" }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Time indicator for accepted jobs */}
                  {isAccepted && (
                    <div className="mt-4 flex items-center gap-2 p-3 rounded-xl bg-yellow-50 border border-yellow-100">
                      <AlertCircle size={14} className="text-yellow-600" />
                      <p className="text-xs text-yellow-700">
                        This job is ready to start. Click "Start Job" when you begin working on it.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Footer Stats */}
        {jobs.length > 0 && (
          <div className="mt-8 rounded-2xl bg-white p-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#000b76]/10">
                  <BriefcaseBusiness size={14} className="text-[#000b76]" />
                </div>
                <p className="text-sm text-slate-600">
                  Showing {jobs.length} active job{jobs.length !== 1 ? "s" : ""}
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/artisan/requests"
                  className="text-sm text-[#000b76] hover:underline"
                >
                  Browse More Requests →
                </Link>
                <Link
                  href="/artisan/completed"
                  className="text-sm text-slate-500 hover:text-slate-700"
                >
                  View Completed
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}