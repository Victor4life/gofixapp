"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import {
  Bell,
  Clock3,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Inbox,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchNotifications() {
    setLoading(true);
    const { data } = await supabase
      .from("job_requests")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(20);

    setNotifications(data || []);
    setLoading(false);
  }

  useEffect(() => {
    fetchNotifications();

    const channel = supabase
      .channel("notifications")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "job_requests",
        },
        () => {
          fetchNotifications();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <AlertCircle size={16} className="text-amber-500" />;
      case "accepted":
      case "in_progress":
        return (
          <Loader2
            size={16}
            className="animate-spin text-blue-500"
          />
        );
      case "completed":
        return <CheckCircle2 size={16} className="text-green-500" />;
      default:
        return <Bell size={16} className="text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "border-amber-100 bg-amber-50/60";
      case "accepted":
      case "in_progress":
        return "border-blue-100 bg-blue-50/60";
      case "completed":
        return "border-green-100 bg-green-50/60";
      default:
        return "border-gray-100 bg-white";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "Pending Review";
      case "accepted":
        return "Accepted";
      case "in_progress":
        return "In Progress";
      case "completed":
        return "Completed";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-[#f7faff]">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

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

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#000b76]/5 text-[#000b76]">
                  <Bell size={20} />
                </div>

                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-[#000b76] sm:text-3xl">
                    Notifications
                  </h1>

                  <p className="mt-1 text-sm text-gray-500">
                    Stay updated with your job requests and status changes.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[10px] font-medium text-gray-500 shadow-sm ring-1 ring-gray-100 sm:flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              Live updates
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">

            {/* Pending */}
            <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Pending
                  </p>

                  <p className="mt-2 text-2xl font-bold text-gray-900">
                    {
                      notifications.filter(
                        n => n.status === "pending"
                      ).length
                    }
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                  <AlertCircle size={18} />
                </div>
              </div>
            </div>

            {/* Active */}
            <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Active
                  </p>

                  <p className="mt-2 text-2xl font-bold text-gray-900">
                    {
                      notifications.filter(n =>
                        ["accepted", "in_progress"].includes(
                          n.status
                        )
                      ).length
                    }
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#1264f5]">
                  <Loader2 size={18} />
                </div>
              </div>
            </div>

            {/* Completed */}
            <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Completed
                  </p>

                  <p className="mt-2 text-2xl font-bold text-gray-900">
                    {
                      notifications.filter(
                        n => n.status === "completed"
                      ).length
                    }
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-500">
                  <CheckCircle2 size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        {!loading && notifications.length > 0 && (
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Recent Notifications
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Your latest job activity.
              </p>
            </div>

            <span className="text-xs font-medium text-gray-400">
              {notifications.length} total
            </span>
          </div>
        )}

        {/* Loading */}
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
                Loading notifications...
              </span>
            </div>
          </div>
        ) : notifications.length === 0 ? (

          /* Empty State */
          <div className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#000b76]/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-100/50 blur-3xl" />

            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-[#000b76]/5 text-[#000b76]">
              <Inbox size={32} />
            </div>

            <h3 className="relative mt-5 text-lg font-bold text-gray-900">
              No notifications yet
            </h3>

            <p className="relative mt-2 max-w-sm text-sm leading-6 text-gray-500">
              When you receive job requests, they will appear here.
            </p>
          </div>

        ) : (

          /* Notifications */
          <div className="space-y-3">
            {notifications.map((notification, index) => (

              <div
                key={notification.id}
                className={`group relative overflow-hidden rounded-2xl border p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-5 ${getStatusColor(
                  notification.status
                )}`}
                style={{
                  animation: `fadeIn 0.3s ease-out ${
                    index * 0.05
                  }s both`,
                }}
              >

                {/* Status indicator */}
                <div
                  className={`absolute left-0 top-0 h-full w-1 ${
                    notification.status === "pending"
                      ? "bg-amber-400"
                      : notification.status === "completed"
                      ? "bg-green-500"
                      : "bg-[#1264f5]"
                  }`}
                />

                <div className="pl-2">

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    {/* Notification Content */}
                    <div className="flex min-w-0 flex-1 items-start gap-4">

                      {/* Icon */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
                        {getStatusIcon(notification.status)}
                      </div>

                      <div className="min-w-0 flex-1">

                        {/* Title + Status */}
                        <div className="flex flex-wrap items-center gap-2">

                          <p className="text-sm font-bold text-gray-900">
                            New job request
                          </p>

                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold ${
                              notification.status === "pending"
                                ? "bg-amber-100 text-amber-700"
                                : notification.status ===
                                  "completed"
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {getStatusIcon(
                              notification.status
                            )}

                            {getStatusText(
                              notification.status
                            )}
                          </span>
                        </div>

                        {/* Service */}
                        <p className="mt-2 text-xs text-gray-500">
                          Service ID:{" "}
                          <span className="font-mono text-[11px] text-gray-600">
                            {notification.service_id.slice(
                              0,
                              12
                            )}
                            ...
                          </span>
                        </p>

                        {/* Date */}
                        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-gray-400">
                          <Clock3 size={11} />

                          <span>
                            {new Date(
                              notification.created_at
                            ).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="sm:pl-4">
                      <Link
                        href={`/artisan/requests`}
                        className="group/button inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-[#000b76] shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:bg-[#000b76] hover:text-white hover:shadow-md sm:w-auto"
                      >
                        View Details

                        <ArrowRight
                          size={13}
                          className="transition-transform duration-300 group-hover/button:translate-x-0.5"
                        />
                      </Link>
                    </div>
                  </div>

                  {/* Active indicator */}
                  {["accepted", "in_progress"].includes(
                    notification.status
                  ) && (
                    <div className="mt-4 flex items-center gap-2 border-t border-blue-100/70 pt-3">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1264f5]" />

                      <span className="text-[10px] font-medium text-blue-600">
                        This job is currently active
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {notifications.length > 0 && (
          <div className="mt-6 flex items-center justify-center">
            <div className="rounded-full bg-white px-4 py-2 text-[10px] font-medium text-gray-400 shadow-sm ring-1 ring-gray-100">
              Showing last{" "}
              {Math.min(notifications.length, 20)} notifications
            </div>
          </div>
        )}
      </div>

      {/* Animation */}
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