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
  ClipboardList, 
  User, 
  Wrench, 
  CheckCircle2, 
  Clock3, 
  AlertCircle,
  Loader2,
  XCircle,
  PlayCircle,
  CheckCircle,
  BriefcaseBusiness,
  Calendar,
  MessageSquare
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

      // Debug: Log the data to see what's coming back
      console.log("Raw data from Supabase:", data);
      console.log("Error if any:", error);

      setRequests(data ?? []);
      setLoading(false);
    }

    load();
  }, []);

  // Debug: Log requests whenever they change
  useEffect(() => {
    console.log("Requests state:", requests);
    console.log("Number of requests:", requests.length);
  }, [requests]);

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "pending":
        return {
          icon: Clock3,
          bgColor: "bg-amber-50",
          borderColor: "border-amber-200",
          textColor: "text-amber-700",
          badgeColor: "bg-amber-100 text-amber-700",
          label: "Pending",
        };
      case "accepted":
        return {
          icon: CheckCircle2,
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
          textColor: "text-blue-700",
          badgeColor: "bg-blue-100 text-blue-700",
          label: "Accepted",
        };
      case "in_progress":
        return {
          icon: Loader2,
          bgColor: "bg-indigo-50",
          borderColor: "border-indigo-200",
          textColor: "text-indigo-700",
          badgeColor: "bg-indigo-100 text-indigo-700",
          label: "In Progress",
        };
      case "completed":
        return {
          icon: CheckCircle,
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          textColor: "text-green-700",
          badgeColor: "bg-green-100 text-green-700",
          label: "Completed",
        };
      case "rejected":
        return {
          icon: XCircle,
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          textColor: "text-red-700",
          badgeColor: "bg-red-100 text-red-700",
          label: "Rejected",
        };
      default:
        return {
          icon: AlertCircle,
          bgColor: "bg-gray-50",
          borderColor: "border-gray-200",
          textColor: "text-gray-700",
          badgeColor: "bg-gray-100 text-gray-700",
          label: status || "Unknown",
        };
    }
  };

  const handleAction = async (action: Function, requestId: string) => {
    setActionLoading(requestId);
    try {
      const formData = new FormData();
      formData.append("requestId", requestId);
      await action(formData);
      // Refresh the page after action
      window.location.reload();
    } catch (error) {
      console.error("Action failed:", error);
    } finally {
      setActionLoading(null);
    }
  };

  const stats = {
    pending: requests.filter(r => r?.status === "pending").length,
    active: requests.filter(r => ["accepted", "in_progress"].includes(r?.status)).length,
    completed: requests.filter(r => r?.status === "completed").length,
    total: requests.length,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <Loader2 className="animate-spin text-[#000b76]" size={32} />
          <span className="text-sm text-slate-600">Loading requests...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#000b76]/10 text-[#000b76]">
              <ClipboardList size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Service Requests</h1>
              <p className="text-sm text-slate-500 mt-1">
                Manage and respond to incoming job requests
              </p>
            </div>
          </div>
          
          {/* Stats Summary */}
          <div className="mt-4 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700">
              <Clock3 size={12} />
              Pending: {stats.pending}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
              <BriefcaseBusiness size={12} />
              Active: {stats.active}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700">
              <CheckCircle size={12} />
              Completed: {stats.completed}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
              <ClipboardList size={12} />
              Total: {stats.total}
            </div>
          </div>
        </div>

        {/* Debug info - Remove after testing 
        <div className="mb-4 rounded-lg bg-yellow-50 p-4 text-xs text-yellow-800">
          <strong>Debug:</strong> Found {requests.length} request(s). Check console for more details.
        </div>*/}

        {/* Requests List */}
        {requests.length === 0 ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-sm">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
              <ClipboardList size={32} className="text-slate-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">No requests yet</h3>
            <p className="mt-2 text-sm text-slate-500">
              When clients send you service requests, they will appear here
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {requests.map((req) => {
              const statusConfig = getStatusConfig(req?.status);
              const StatusIcon = statusConfig.icon;
              const isActionLoading = actionLoading === req?.id;
              
              // Safely access client and service data
              const clientName = req?.client?.full_name || req?.client_id || "Unknown client";
              const serviceName = req?.service?.name || req?.service_id || "Unknown service";
              
              return (
                <div
                  key={req?.id}
                  className={`relative overflow-hidden rounded-2xl border ${statusConfig.borderColor} ${statusConfig.bgColor} p-6 transition-all duration-300 hover:shadow-md`}
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    {/* Left Section - Client & Service Info */}
                    <div className="flex-1 space-y-4">
                      {/* Client Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                            <User size={18} className="text-slate-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">
                              {clientName}
                            </p>
                            <p className="text-xs text-slate-500">
                              Request ID: {req?.id?.slice(0, 8)}...
                            </p>
                          </div>
                        </div>
                        
                        {/* Status Badge */}
                        <div className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${statusConfig.badgeColor}`}>
                          {req?.status === "in_progress" ? (
                            <StatusIcon size={12} className="animate-spin" />
                          ) : (
                            <StatusIcon size={12} />
                          )}
                          {statusConfig.label}
                        </div>
                      </div>

                      {/* Service Details */}
                      <div className="ml-13 pl-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Wrench size={14} className="text-slate-400" />
                          <p className="text-sm font-medium text-slate-700">
                            {serviceName}
                          </p>
                        </div>
                        
                        {/* Created At */}
                        {req?.created_at && (
                          <div className="flex items-center gap-2 mt-3">
                            <Calendar size={12} className="text-slate-400" />
                            <p className="text-xs text-slate-400">
                              Requested: {new Date(req.created_at).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Section - Action Buttons */}
                    <div className="flex flex-wrap gap-3 lg:flex-col lg:items-end">
                      {req?.status === "pending" && (
                        <>
                          <button
                            onClick={() => handleAction(acceptRequest, req.id)}
                            disabled={isActionLoading}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#000b76] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isActionLoading ? (
                              <Loader2 size={16} className="animate-spin" />
                            ) : (
                              <CheckCircle2 size={16} />
                            )}
                            Accept Request
                          </button>
                          <button
                            onClick={() => handleAction(rejectRequest, req.id)}
                            disabled={isActionLoading}
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-6 py-2.5 text-sm font-semibold text-red-600 transition-all duration-300 hover:bg-red-50 hover:scale-105 disabled:opacity-50"
                          >
                            <XCircle size={16} />
                            Reject
                          </button>
                        </>
                      )}
                      
                      {req?.status === "accepted" && (
                        <button
                          onClick={() => handleAction(startJob, req.id)}
                          disabled={isActionLoading}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50"
                        >
                          {isActionLoading ? (
                            <Loader2 size={16} className="animate-spin" />
                          ) : (
                            <PlayCircle size={16} />
                          )}
                          Start Job
                        </button>
                      )}
                      
                      {req?.status === "in_progress" && (
                        <button
                          onClick={() => handleAction(completeJob, req.id)}
                          disabled={isActionLoading}
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50"
                        >
                          {isActionLoading ? (
                            <Loader2 size={16} className="animate-spin" />
                          ) : (
                            <CheckCircle size={16} />
                          )}
                          Complete Job
                        </button>
                      )}
                      
                      {req?.status === "completed" && (
                        <div className="flex items-center gap-2 rounded-xl bg-green-100 px-4 py-2">
                          <MessageSquare size={14} className="text-green-600" />
                          <span className="text-xs font-medium text-green-700">
                            Job Completed
                          </span>
                        </div>
                      )}
                      
                      {req?.status === "rejected" && (
                        <div className="flex items-center gap-2 rounded-xl bg-red-100 px-4 py-2">
                          <XCircle size={14} className="text-red-600" />
                          <span className="text-xs font-medium text-red-700">
                            Request Rejected
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Decorative elements for active status */}
                  {req?.status === "in_progress" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-blue-500 to-transparent animate-pulse" />
                  )}
                  
                  {req?.status === "accepted" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Footer Stats */}
        {requests.length > 0 && (
          <div className="mt-8 rounded-2xl bg-white p-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#000b76]/10">
                  <BriefcaseBusiness size={14} className="text-[#000b76]" />
                </div>
                <p className="text-sm text-slate-600">
                  Showing {requests.length} request{requests.length !== 1 ? "s" : ""}
                </p>
              </div>
              <Link
                href="/artisan"
                className="text-sm text-[#000b76] hover:underline"
              >
                Back to Dashboard →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}