"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { getCurrentUser } from "@/lib/auth/getCurrentUser";

export default function ClientRequestsPage() {
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const user = await getCurrentUser();

      if (!user || user.role !== "client") {
        window.location.href = "/login";
        return;
      }

      const { data } = await supabase
        .from("job_requests")
        .select(
          `
          id,
          status,
          client:client_id (
            full_name
          ),
          service:service_id (
            name
          )
        `,
        )
        .eq("client_id", user.id)
        .order("created_at", { ascending: false });

      setRequests(data ?? []);
      setLoading(false);
    }

    load();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Requests</h1>

      {!requests.length && <p>No requests yet</p>}

      {requests.map((r) => (
        <div key={r.id} className="border p-4 rounded bg-white mb-3">
          <p className="font-semibold">{r.service?.name}</p>
          <p className="text-sm capitalize">Status: {r.status}</p>
        </div>
      ))}
    </div>
  );
}
