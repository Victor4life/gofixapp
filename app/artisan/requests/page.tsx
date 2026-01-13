import { getArtisanRequests } from "@/lib/data/getArtisanRequests";
import { acceptRequest, rejectRequest } from "@/lib/actions/serviceRequests";
import { getCurrentUser } from "@/lib/auth/getCurrentUser";
import { createSupabaseServer } from "@/lib/supabase/server";

export default async function ArtisanRequestsPage() {
  const supabase = await createSupabaseServer();

  /* 1️⃣ Get current user (auth + profile) */
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <p>Please login</p>;
  }

  /* 2️⃣ Ensure artisan role */
  if (currentUser.profile.role !== "artisan") {
    return <p>Unauthorized</p>;
  }

  /* 3️⃣ Fetch artisan profile */
  const { data: requests, error } = await supabase
    .from("job_requests")
    .select(
      `
    id,
    status,
    created_at,
    artisan:artisan_id (
      full_name
    ),
    service:service_id (
      name
    )
  `
    )
    .eq("client_id", user.id);

  if (artisanError || !artisan) {
    return <p>Artisan profile not found</p>;
  }

  /* 4️⃣ Fetch artisan requests */
  const requests = await getArtisanRequests(artisan.id);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Service Requests</h1>

      {!requests.length && <p>No requests yet</p>}

      <div className="space-y-4">
        {requests.map((req: any) => (
          <div
            key={req.id}
            className="flex justify-between p-5 border rounded bg-white"
          >
            <div>
              <p className="font-semibold">
                {req.client?.full_name ?? "Unknown client"}
              </p>
              <p className="text-sm text-gray-600">
                {req.service?.name ?? "Unknown service"}
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <span className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700">
                {req.status}
              </span>

              {req.status === "pending" && (
                <>
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
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
