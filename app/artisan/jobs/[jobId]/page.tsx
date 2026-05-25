"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import {
  CheckCircle2,
  Clock,
  Loader2,
  PlayCircle,
  User,
  Wrench,
} from "lucide-react";

type Job = {
  id: string;
  status: string;
  created_at: string;

  service_id: string;
  client_id: string;
  artisan_id: string;

  services?: {
    name: string;
  }[];

  client?: {
    full_name: string;
  }[];

  artisan?: {
    full_name: string;
  }[];
};

export default function JobDetailsPage() {
  const { jobId } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchJob() {
    setLoading(true);

const { data } = await supabase
  .from("job_requests")
  .select(`
    id,
    status,
    created_at,
    service_id,
    client_id,
    artisan_id,
    services:services(name),
    client:users!job_requests_client_id_fkey(full_name),
    artisan:users!job_requests_artisan_id_fkey(full_name)
  `)
  .eq("id", jobId)
  .single();

    setJob(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchJob();

    const channel = supabase
      .channel("job-details")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "job_requests",
          filter: `id=eq.${jobId}`,
        },
        () => {
          fetchJob();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [jobId]);

  async function updateStatus(status: string) {
    await supabase
      .from("job_requests")
      .update({ status })
      .eq("id", jobId);

    fetchJob();
  }

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center p-10">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  if (!job) {
    return <div className="p-6">Job not found</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* HEADER */}
      <div className="p-6 border rounded-xl bg-white shadow-sm">
        <h1 className="text-2xl font-bold">Job Workroom</h1>

        <div className="flex items-center gap-2 mt-2">
          <span
            className={`h-2 w-2 rounded-full ${
              job.status === "accepted"
                ? "bg-yellow-500"
                : job.status === "in_progress"
                ? "bg-blue-500"
                : "bg-green-500"
            }`}
          />
          <p className="text-sm text-gray-600 capitalize">
            {job.status.replace("_", " ")}
          </p>
        </div>
      </div>

      {/* DETAILS */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-5 border rounded-xl bg-white">
          <div className="flex items-center gap-2 font-semibold">
            <Wrench size={18} />
            Service
          </div>
<p className="text-sm text-gray-500 mt-2">
  Service: {job.services?.[0]?.name || "Unknown service"}
</p>
        </div>

        <div className="p-5 border rounded-xl bg-white">
          <div className="flex items-center gap-2 font-semibold">
            <User size={18} />
            Client
          </div>
<p className="text-sm text-gray-500 mt-2">
  Client: {job.client?.[0]?.full_name || "Unknown client"}
</p>
 </div>
      </div>

      {/* ACTIONS */}
      <div className="p-6 border rounded-xl bg-white flex gap-3">
        {job.status === "accepted" && (
          <button
            onClick={() => updateStatus("in_progress")}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            <PlayCircle size={16} />
            Start Job
          </button>
        )}

        {job.status === "in_progress" && (
          <button
            onClick={() => updateStatus("completed")}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            <CheckCircle2 size={16} />
            Mark Completed
          </button>
        )}
      </div>

      {/* TIMELINE (future upgrade placeholder) */}
      <div className="p-6 border rounded-xl bg-gray-50">
        <p className="text-sm text-gray-500">
          Job timeline & chat will go here next
        </p>
      </div>
    </div>
  );
}