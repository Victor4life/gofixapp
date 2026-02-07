"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { getCurrentUser } from "@/lib/auth/getCurrentUser";
import { acceptRequest, rejectRequest } from "@/lib/actions/serviceRequests";

export default function ArtisanRequestsPage() {
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const user = await getCurrentUser();

      if (!user || user.role !== "artisan") {
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
        .eq("artisan_id", user.id)
        .order("created_at", { ascending: false });

      setRequests(data ?? []);
      setLoading(false);
    }

    load();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Service Requests</h1>

      {!requests.length && <p>No requests yet</p>}

      {requests.map((req) => (
        <div
          key={req.id}
          className="flex justify-between p-5 border rounded bg-white mb-3"
        >
          <div>
            <p className="font-semibold">
              {req.client?.full_name ?? "Unknown client"}
            </p>
            <p className="text-sm text-gray-600">
              {req.service?.name ?? "Unknown service"}
            </p>
          </div>

          {req.status === "pending" && (
            <div className="flex gap-3">
              <form action={acceptRequest}>
                <input type="hidden" name="requestId" value={req.id} />
                <button className="bg-blue-900 text-white px-4 py-2 rounded">
                  Accept
                </button>
              </form>

              <form action={rejectRequest}>
                <input type="hidden" name="requestId" value={req.id} />
                <button className="border px-4 py-2 rounded">Reject</button>
              </form>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
