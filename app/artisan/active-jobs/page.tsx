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
  Zap,
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
    <div className="min-h-screen bg-[#f7faff]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#1264f5]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1264f5]">
                  Artisan Workspace
                </span>
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-[#000b76] sm:text-3xl">
                Active Jobs
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
                Manage your accepted jobs and keep track of work currently in
                progress.
              </p>
            </div>

            <Link
              href="/artisan/requests"
              className="group inline-flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-[#000b76]/20 hover:text-[#000b76] hover:shadow-md"
            >
              Browse Requests
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">

          {/* Accepted */}
          <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Accepted
                </p>

                <p className="mt-3 text-3xl font-bold text-gray-900">
                  {stats.accepted}
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Ready to start
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-transform duration-300 group-hover:scale-105">
                <Clock3 size={19} />
              </div>
            </div>
          </div>

          {/* In Progress */}
          <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  In Progress
                </p>

                <p className="mt-3 text-3xl font-bold text-gray-900">
                  {stats.inProgress}
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Currently working
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1264f5] transition-transform duration-300 group-hover:scale-105">
                <Zap size={19} />
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="group rounded-2xl bg-[#000b76] p-5 shadow-lg shadow-[#000b76]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
                  Total Active
                </p>

                <p className="mt-3 text-3xl font-bold text-white">
                  {stats.total}
                </p>

                <p className="mt-1 text-xs text-white/60">
                  All active jobs
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-transform duration-300 group-hover:scale-105">
                <BriefcaseBusiness size={19} />
              </div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex min-h-[420px] items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#000b76]/5">
                <Loader2
                  className="animate-spin text-[#000b76]"
                  size={22}
                />
              </div>

              <span className="text-sm font-medium text-gray-500">
                Loading active jobs...
              </span>
            </div>
          </div>
        ) : jobs.length === 0 ? (

          /* Empty State */
          <div className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#000b76]/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-100/50 blur-3xl" />

            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-[#000b76]/5 text-[#000b76]">
              <BriefcaseBusiness size={32} />
            </div>

            <h3 className="relative mt-5 text-lg font-bold text-gray-900">
              No active jobs
            </h3>

            <p className="relative mt-2 max-w-sm text-sm leading-6 text-gray-500">
              Accepted jobs will appear here once you start working on them.
            </p>

            <Link
              href="/artisan/requests"
              className="group relative mt-6 inline-flex items-center gap-2 rounded-xl bg-[#000b76] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00108f] hover:shadow-lg"
            >
              Browse Available Requests
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        ) : (

          /* Jobs List */
          <div>

            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Current Jobs
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  {jobs.length} active{" "}
                  {jobs.length === 1 ? "job" : "jobs"}
                </p>
              </div>

              <div className="hidden items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[10px] font-medium text-gray-500 shadow-sm ring-1 ring-gray-100 sm:flex">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                Live updates
              </div>
            </div>

            <div className="space-y-4">
              {jobs.map((job, index) => {
                const isAccepted = job.status === "accepted";
                const isInProgress = job.status === "in_progress";
                const isUpdating = updatingJobId === job.id;

                return (
                  <div
                    key={job.id}
                    className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-6"
                    style={{
                      animation: `fadeIn 0.3s ease-out ${
                        index * 0.05
                      }s both`,
                    }}
                  >

                    {/* Status indicator */}
                    <div
                      className={`absolute left-0 top-0 h-full w-1 ${
                        isAccepted
                          ? "bg-amber-400"
                          : "bg-[#1264f5]"
                      }`}
                    />

                    <div className="pl-2">

                      {/* Job Header */}
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                              isAccepted
                                ? "bg-amber-50 text-amber-600"
                                : "bg-blue-50 text-[#1264f5]"
                            }`}
                          >
                            {isAccepted ? (
                              <Clock3 size={19} />
                            ) : (
                              <Zap size={19} />
                            )}
                          </div>

                          <div>
                            <p className="text-sm font-bold text-gray-900">
                              Job #{job.id.slice(0, 8)}
                            </p>

                            <div className="mt-1 flex items-center gap-2">
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${
                                  isAccepted
                                    ? "animate-pulse bg-amber-500"
                                    : "animate-pulse bg-[#1264f5]"
                                }`}
                              />

                              <p className="text-xs font-medium text-gray-500">
                                {job.status === "accepted"
                                  ? "Accepted · Ready to Start"
                                  : "In Progress"}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div
                          className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold ${
                            isAccepted
                              ? "bg-amber-50 text-amber-700"
                              : "bg-blue-50 text-blue-700"
                          }`}
                        >
                          {isAccepted ? (
                            <>
                              <Clock3 size={11} />
                              Ready to Start
                            </>
                          ) : (
                            <>
                              <Zap size={11} />
                              In Progress
                            </>
                          )}
                        </div>
                      </div>

                      {/* Details */}
                      <div className="mt-5 grid gap-3 border-t border-gray-100 pt-5 sm:grid-cols-2 lg:grid-cols-4">

                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-400">
                            <Wrench size={15} />
                          </div>

                          <div className="min-w-0">
                            <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                              Service ID
                            </p>

                            <p className="mt-0.5 truncate font-mono text-[11px] text-gray-600">
                              {job.service_id.slice(0, 12)}...
                            </p>
                          </div>
                        </div>

                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-400">
                            <User size={15} />
                          </div>

                          <div className="min-w-0">
                            <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                              Client ID
                            </p>

                            <p className="mt-0.5 truncate font-mono text-[11px] text-gray-600">
                              {job.client_id?.slice(0, 12)}...
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-400">
                            <Calendar size={15} />
                          </div>

                          <div>
                            <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                              Created
                            </p>

                            <p className="mt-0.5 text-[11px] font-medium text-gray-600">
                              {new Date(
                                job.created_at
                              ).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-400">
                            <Clock3 size={15} />
                          </div>

                          <div>
                            <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                              Time
                            </p>

                            <p className="mt-0.5 text-[11px] font-medium text-gray-600">
                              {new Date(
                                job.created_at
                              ).toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Progress */}
                      {isInProgress && (
                        <div className="mt-5 rounded-xl bg-blue-50/60 p-4">
                          <div className="mb-2 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1264f5]" />

                              <span className="text-[10px] font-semibold text-[#000b76]">
                                Job Progress
                              </span>
                            </div>

                            <span className="text-[10px] text-gray-400">
                              In progress...
                            </span>
                          </div>

                          <div className="h-1.5 overflow-hidden rounded-full bg-white">
                            <div
                              className="h-full animate-pulse rounded-full bg-gradient-to-r from-[#000b76] to-[#1264f5]"
                              style={{ width: "65%" }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Accepted Notice */}
                      {isAccepted && (
                        <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50/70 p-3.5">
                          <AlertCircle
                            size={15}
                            className="mt-0.5 shrink-0 text-amber-600"
                          />

                          <p className="text-[11px] leading-5 text-amber-700">
                            This job is ready to start. Click{" "}
                            <span className="font-semibold">
                              "Start Job"
                            </span>{" "}
                            when you begin working on it.
                          </p>
                        </div>
                      )}

                      {/* Bottom Action Row */}
                      <div className="mt-5 flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:justify-between">

                        <p className="text-[10px] text-gray-400">
                          Job ID:{" "}
                          <span className="font-mono">
                            {job.id.slice(0, 16)}
                          </span>
                        </p>

                        <div className="w-full sm:w-auto">

                          {isAccepted && (
                            <button
                              onClick={() =>
                                updateStatus(
                                  job.id,
                                  "in_progress"
                                )
                              }
                              disabled={isUpdating}
                              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#000b76] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#00108f] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                            >
                              {isUpdating ? (
                                <>
                                  <Loader2
                                    size={15}
                                    className="animate-spin"
                                  />
                                  Starting...
                                </>
                              ) : (
                                <>
                                  <PlayCircle size={15} />
                                  Start Job
                                </>
                              )}
                            </button>
                          )}

                          {isInProgress && (
                            <button
                              onClick={() =>
                                updateStatus(
                                  job.id,
                                  "completed"
                                )
                              }
                              disabled={isUpdating}
                              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-green-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                            >
                              {isUpdating ? (
                                <>
                                  <Loader2
                                    size={15}
                                    className="animate-spin"
                                  />
                                  Completing...
                                </>
                              ) : (
                                <>
                                  <CheckCircle2 size={15} />
                                  Complete Job
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer */}
        {jobs.length > 0 && (
          <div className="mt-7 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#000b76]/5 text-[#000b76]">
                  <BriefcaseBusiness size={15} />
                </div>

                <p className="text-xs text-gray-500">
                  Showing{" "}
                  <span className="font-semibold text-gray-700">
                    {jobs.length}
                  </span>{" "}
                  active job{jobs.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/artisan/requests"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#000b76] transition hover:text-[#1264f5]"
                >
                  Browse More Requests
                  <ArrowRight size={13} />
                </Link>

                <Link
                  href="/artisan/completed"
                  className="text-xs font-semibold text-gray-400 transition hover:text-gray-700"
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