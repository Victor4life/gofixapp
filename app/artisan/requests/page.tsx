"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { getCurrentUser } from "@/lib/auth/getCurrentUser";
import {
  acceptRequest,
  rejectRequest,
  startJob,
  completeJob,
} from "@/lib/actions/serviceRequests";
import {
  ArrowRight,
  BriefcaseBusiness,
  Calendar,
  CheckCircle,
  CheckCircle2,
  Clock3,
  ClipboardList,
  AlertCircle,
  Loader2,
  MessageSquare,
  PlayCircle,
  User,
  Wrench,
  XCircle,
} from "lucide-react";
import Link from "next/link";

export default function ArtisanRequestsPage() {
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const user = await getCurrentUser();

      if (!user || user.role !== "artisan") {
        window.location.href = "/login";
        return;
      }

      const { data, error } = await supabase
        .from("job_requests")
        .select(
          `
          id,
          status,
          created_at,
          client_id,
          service_id,
          client:client_id (
            full_name
          ),
          service:service_id (
            name
          )
        `,
        )
        .eq("artisan_id", user.id)
        .order("created_at", { ascending: false });

      console.log("Raw data from Supabase:", data);
      console.log("Error if any:", error);

      setRequests(data ?? []);
      setLoading(false);
    }

    load();
  }, []);

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "pending":
        return {
          icon: Clock3,
          label: "Pending",
          badge:
            "bg-amber-50 text-amber-700 border-amber-100",
          iconBg: "bg-amber-100 text-amber-600",
          accent: "bg-amber-400",
        };

      case "accepted":
        return {
          icon: CheckCircle2,
          label: "Accepted",
          badge:
            "bg-blue-50 text-blue-700 border-blue-100",
          iconBg: "bg-blue-100 text-blue-600",
          accent: "bg-blue-500",
        };

      case "in_progress":
        return {
          icon: Loader2,
          label: "In Progress",
          badge:
            "bg-indigo-50 text-indigo-700 border-indigo-100",
          iconBg: "bg-indigo-100 text-indigo-600",
          accent: "bg-indigo-500",
        };

      case "completed":
        return {
          icon: CheckCircle,
          label: "Completed",
          badge:
            "bg-green-50 text-green-700 border-green-100",
          iconBg: "bg-green-100 text-green-600",
          accent: "bg-green-500",
        };

      case "rejected":
        return {
          icon: XCircle,
          label: "Rejected",
          badge:
            "bg-red-50 text-red-700 border-red-100",
          iconBg: "bg-red-100 text-red-600",
          accent: "bg-red-500",
        };

      default:
        return {
          icon: AlertCircle,
          label: status || "Unknown",
          badge:
            "bg-gray-50 text-gray-600 border-gray-100",
          iconBg: "bg-gray-100 text-gray-500",
          accent: "bg-gray-400",
        };
    }
  };

  const handleAction = async (
    action: Function,
    requestId: string,
  ) => {
    setActionLoading(requestId);

    try {
      const formData = new FormData();
      formData.append("requestId", requestId);

      await action(formData);

      window.location.reload();
    } catch (error) {
      console.error("Action failed:", error);
    } finally {
      setActionLoading(null);
    }
  };

  const stats = {
    pending: requests.filter(
      (r) => r?.status === "pending",
    ).length,

    active: requests.filter((r) =>
      ["accepted", "in_progress"].includes(r?.status),
    ).length,

    completed: requests.filter(
      (r) => r?.status === "completed",
    ).length,

    total: requests.length,
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f7faff]">
        <div className="flex min-h-[500px] items-center justify-center">
          <div className="flex items-center gap-3 rounded-xl bg-white px-6 py-4 shadow-sm">
            <Loader2
              size={20}
              className="animate-spin text-[#000b76]"
            />

            <span className="text-sm font-medium text-gray-500">
              Loading requests...
            </span>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7faff] px-5 py-6 sm:px-7 lg:px-9 lg:py-8">
      <div className="mx-auto max-w-[1150px]">

        {/* =====================================================
            PAGE HEADER
        ===================================================== */}
        <section className="mb-7">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#1264f5]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1264f5]">
                  Artisan Workspace
                </span>
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-[#000b76] sm:text-3xl">
                Service Requests
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
                Review incoming jobs, respond to clients and manage your
                service requests.
              </p>
            </div>

            <Link
              href="/artisan"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-semibold text-gray-600 transition hover:border-[#000b76]/20 hover:text-[#000b76]"
            >
              Dashboard
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* =====================================================
            STATS
        ===================================================== */}
        <section className="mb-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {/* Pending */}
          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Clock3 size={18} />
              </div>

              <span className="text-2xl font-bold text-[#000b76]">
                {stats.pending}
              </span>
            </div>

            <p className="mt-4 text-xs font-bold text-gray-700">
              Pending
            </p>

            <p className="mt-1 text-[10px] text-gray-400">
              Awaiting response
            </p>
          </div>

          {/* Active */}
          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#1264f5]">
                <BriefcaseBusiness size={18} />
              </div>

              <span className="text-2xl font-bold text-[#000b76]">
                {stats.active}
              </span>
            </div>

            <p className="mt-4 text-xs font-bold text-gray-700">
              Active Jobs
            </p>

            <p className="mt-1 text-[10px] text-gray-400">
              Currently ongoing
            </p>
          </div>

          {/* Completed */}
          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <CheckCircle size={18} />
              </div>

              <span className="text-2xl font-bold text-[#000b76]">
                {stats.completed}
              </span>
            </div>

            <p className="mt-4 text-xs font-bold text-gray-700">
              Completed
            </p>

            <p className="mt-1 text-[10px] text-gray-400">
              Successfully finished
            </p>
          </div>

          {/* Total */}
          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#000b76]/5 text-[#000b76]">
                <ClipboardList size={18} />
              </div>

              <span className="text-2xl font-bold text-[#000b76]">
                {stats.total}
              </span>
            </div>

            <p className="mt-4 text-xs font-bold text-gray-700">
              Total Requests
            </p>

            <p className="mt-1 text-[10px] text-gray-400">
              All requests
            </p>
          </div>
        </section>

        {/* =====================================================
            REQUESTS SECTION
        ===================================================== */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#000b76]">
                Incoming Requests
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Review your latest client requests.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-xs text-gray-400 sm:flex">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Live requests
            </div>
          </div>

          {/* =================================================
              EMPTY STATE
          ================================================= */}
          {requests.length === 0 ? (
            <div className="flex min-h-[380px] flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#1264f5]">
                <ClipboardList size={28} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#000b76]">
                No requests yet
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                When clients send you service requests, they will appear here.
              </p>

              <Link
                href="/artisan"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#000b76] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#00108f]"
              >
                Back to Dashboard
                <ArrowRight size={14} />
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {requests.map((req) => {
                const statusConfig = getStatusConfig(req?.status);
                const StatusIcon = statusConfig.icon;
                const isActionLoading =
                  actionLoading === req?.id;

                const clientName =
                  req?.client?.full_name ||
                  req?.client_id ||
                  "Unknown client";

                const serviceName =
                  req?.service?.name ||
                  req?.service_id ||
                  "Unknown service";

                return (
                  <article
                    key={req?.id}
                    className="
                      group relative overflow-hidden
                      rounded-2xl
                      border border-gray-100
                      bg-white
                      p-5
                      shadow-sm
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:shadow-lg
                    "
                  >
                    {/* Status accent */}
                    <div
                      className={`absolute bottom-0 left-0 top-0 w-1 ${statusConfig.accent}`}
                    />

                    <div className="pl-2">
                      {/* =====================================
                          TOP ROW
                      ===================================== */}
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        {/* Client */}
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#000b76]/5 text-[#000b76]">
                            <User size={19} />
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-sm font-bold text-gray-900">
                              {clientName}
                            </p>

                            <p className="mt-1 text-[10px] text-gray-400">
                              Request ID:{" "}
                              {req?.id?.slice(0, 8)}
                              ...
                            </p>
                          </div>
                        </div>

                        {/* Status */}
                        <div
                          className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-bold ${statusConfig.badge}`}
                        >
                          {req?.status === "in_progress" ? (
                            <StatusIcon
                              size={12}
                              className="animate-spin"
                            />
                          ) : (
                            <StatusIcon size={12} />
                          )}

                          {statusConfig.label}
                        </div>
                      </div>

                      {/* =====================================
                          DETAILS
                      ===================================== */}
                      <div className="mt-5 grid gap-4 border-t border-gray-100 pt-5 sm:grid-cols-2">
                        {/* Service */}
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#1264f5]">
                            <Wrench size={16} />
                          </div>

                          <div>
                            <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                              Service
                            </p>

                            <p className="mt-0.5 text-sm font-semibold text-gray-700">
                              {serviceName}
                            </p>
                          </div>
                        </div>

                        {/* Date */}
                        {req?.created_at && (
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-gray-500">
                              <Calendar size={16} />
                            </div>

                            <div>
                              <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                                Requested
                              </p>

                              <p className="mt-0.5 text-sm font-semibold text-gray-700">
                                {new Date(
                                  req.created_at,
                                ).toLocaleDateString(
                                  "en-US",
                                  {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  },
                                )}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* =====================================
                          ACTIONS
                      ===================================== */}
                      <div className="mt-5 flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                        {/* Request info */}
                        <div className="flex items-center gap-2 text-[10px] text-gray-400">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${statusConfig.accent}`}
                          />

                          {req?.status === "pending"
                            ? "Action required"
                            : `Request ${statusConfig.label.toLowerCase()}`}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {/* Pending */}
                          {req?.status === "pending" && (
                            <>
                              <button
                                onClick={() =>
                                  handleAction(
                                    acceptRequest,
                                    req.id,
                                  )
                                }
                                disabled={isActionLoading}
                                className="
                                  inline-flex items-center
                                  justify-center gap-2
                                  rounded-xl
                                  bg-[#000b76]
                                  px-4 py-2.5
                                  text-xs font-semibold text-white
                                  shadow-sm
                                  transition-all
                                  hover:bg-[#00108f]
                                  hover:shadow-md
                                  disabled:cursor-not-allowed
                                  disabled:opacity-50
                                "
                              >
                                {isActionLoading ? (
                                  <Loader2
                                    size={14}
                                    className="animate-spin"
                                  />
                                ) : (
                                  <CheckCircle2 size={14} />
                                )}

                                Accept Request
                              </button>

                              <button
                                onClick={() =>
                                  handleAction(
                                    rejectRequest,
                                    req.id,
                                  )
                                }
                                disabled={isActionLoading}
                                className="
                                  inline-flex items-center
                                  justify-center gap-2
                                  rounded-xl
                                  border border-red-100
                                  bg-white
                                  px-4 py-2.5
                                  text-xs font-semibold text-red-600
                                  transition
                                  hover:bg-red-50
                                  disabled:opacity-50
                                "
                              >
                                <XCircle size={14} />
                                Reject
                              </button>
                            </>
                          )}

                          {/* Accepted */}
                          {req?.status === "accepted" && (
                            <button
                              onClick={() =>
                                handleAction(
                                  startJob,
                                  req.id,
                                )
                              }
                              disabled={isActionLoading}
                              className="
                                inline-flex items-center
                                justify-center gap-2
                                rounded-xl
                                bg-[#000b76]
                                px-5 py-2.5
                                text-xs font-semibold text-white
                                transition
                                hover:bg-[#00108f]
                                disabled:opacity-50
                              "
                            >
                              {isActionLoading ? (
                                <Loader2
                                  size={14}
                                  className="animate-spin"
                                />
                              ) : (
                                <PlayCircle size={14} />
                              )}

                              Start Job
                            </button>
                          )}

                          {/* In Progress */}
                          {req?.status === "in_progress" && (
                            <button
                              onClick={() =>
                                handleAction(
                                  completeJob,
                                  req.id,
                                )
                              }
                              disabled={isActionLoading}
                              className="
                                inline-flex items-center
                                justify-center gap-2
                                rounded-xl
                                bg-green-600
                                px-5 py-2.5
                                text-xs font-semibold text-white
                                transition
                                hover:bg-green-700
                                disabled:opacity-50
                              "
                            >
                              {isActionLoading ? (
                                <Loader2
                                  size={14}
                                  className="animate-spin"
                                />
                              ) : (
                                <CheckCircle size={14} />
                              )}

                              Complete Job
                            </button>
                          )}

                          {/* Completed */}
                          {req?.status === "completed" && (
                            <div className="inline-flex items-center gap-2 rounded-xl bg-green-50 px-4 py-2.5 text-xs font-semibold text-green-700">
                              <MessageSquare size={14} />
                              Job Completed
                            </div>
                          )}

                          {/* Rejected */}
                          {req?.status === "rejected" && (
                            <div className="inline-flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2.5 text-xs font-semibold text-red-600">
                              <XCircle size={14} />
                              Request Rejected
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* =====================================================
            FOOTER SUMMARY
        ===================================================== */}
        {requests.length > 0 && (
          <section className="mt-7 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#000b76]/5 text-[#000b76]">
                  <BriefcaseBusiness size={16} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-700">
                    {requests.length}{" "}
                    {requests.length === 1
                      ? "request"
                      : "requests"}{" "}
                    in total
                  </p>

                  <p className="mt-0.5 text-[10px] text-gray-400">
                    Keep your requests organized and up to date.
                  </p>
                </div>
              </div>

              <Link
                href="/artisan"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#000b76] transition hover:text-[#1264f5]"
              >
                Back to Dashboard
                <ArrowRight size={14} />
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}