"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { Bell, Clock3, CheckCircle2, AlertCircle, Wrench, Loader2, Inbox } from "lucide-react";
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
        return <Loader2 size={16} className="text-blue-500 animate-spin" />;
      case "completed":
        return <CheckCircle2 size={16} className="text-green-500" />;
      default:
        return <Bell size={16} className="text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-amber-50 border-amber-200 hover:border-amber-300";
      case "accepted":
      case "in_progress":
        return "bg-blue-50 border-blue-200 hover:border-blue-300";
      case "completed":
        return "bg-green-50 border-green-200 hover:border-green-300";
      default:
        return "bg-white border-gray-200 hover:border-gray-300";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#000b76]/10 text-[#000b76]">
              <Bell size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>
              <p className="text-sm text-slate-500 mt-1">
                Stay updated with your job requests and status changes
              </p>
            </div>
          </div>
          
          {/* Stats Summary */}
          <div className="mt-4 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700">
              <AlertCircle size={12} />
              Pending: {notifications.filter(n => n.status === "pending").length}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
              <Loader2 size={12} className="animate-spin" />
              Active: {notifications.filter(n => ["accepted", "in_progress"].includes(n.status)).length}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700">
              <CheckCircle2 size={12} />
              Completed: {notifications.filter(n => n.status === "completed").length}
            </div>
          </div>
        </div>

        {/* Notifications List */}
        {loading ? (
          <div className="flex min-h-[400px] items-center justify-center rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <Loader2 className="animate-spin text-[#000b76]" size={24} />
              <span className="text-sm text-slate-600">Loading notifications...</span>
            </div>
          </div>
        ) : notifications.length === 0 ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-sm">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
              <Inbox size={32} className="text-slate-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">No notifications yet</h3>
            <p className="mt-2 text-sm text-slate-500">
              When you receive job requests, they will appear here
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {notifications.map((notification, index) => (
              <div
                key={notification.id}
                className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:shadow-md ${getStatusColor(notification.status)}`}
                style={{
                  animation: `fadeIn 0.3s ease-out ${index * 0.05}s both`
                }}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  {/* Left side - Icon & Content */}
                  <div className="flex gap-4 flex-1">
                    {/* Status Icon */}
                    <div className="flex-shrink-0">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm`}>
                        {getStatusIcon(notification.status)}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <p className="font-semibold text-slate-900">
                          New job request
                        </p>
                        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                          notification.status === "pending" ? "bg-amber-100 text-amber-700" :
                          notification.status === "completed" ? "bg-green-100 text-green-700" :
                          "bg-blue-100 text-blue-700"
                        }`}>
                          {getStatusIcon(notification.status)}
                          {getStatusText(notification.status)}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mb-1">
                        Service ID: <span className="font-mono text-xs">{notification.service_id.slice(0, 12)}...</span>
                      </p>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Clock3 size={12} />
                        <span>
                          {new Date(notification.created_at).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Action Button */}
                  <div className="flex-shrink-0">
                    <Link
                      href={`/artisan/requests`}
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-[#000b76] shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105"
                    >
                      View Details
                    </Link>
                  </div>
                </div>

                {/* Decorative progress bar for active notifications */}
                {["accepted", "in_progress"].includes(notification.status) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-transparent animate-pulse" />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Footer Note */}
        {notifications.length > 0 && (
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-400">
              Showing last {Math.min(notifications.length, 20)} notifications
            </p>
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