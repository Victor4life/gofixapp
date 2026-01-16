import { getArtisanRequests } from "@/lib/data/getArtisanRequests";
import { acceptRequest, rejectRequest } from "@/lib/actions/serviceRequests";
import { getCurrentUser } from "@/lib/auth/getCurrentUser";

export default async function ArtisanRequestsPage() {
  /* 1️⃣ Get current user and cast as 'any' to bypass strict Type checking */
  const user = (await getCurrentUser()) as any;

  if (!user) {
    return <p className="p-6">Please login</p>;
  }

  /* 2️⃣ Check role inside the profile object */
  if (user.profile?.role !== "artisan") {
    return (
      <p className="p-6 text-red-500">Unauthorized: Artisan access only.</p>
    );
  }

  /* 3️⃣ Fetch requests using the ID from the profile */
  const artisanId = user.profile?.id || user.auth?.id;
  const requests = await getArtisanRequests(artisanId);

  /* 4️⃣ Render */
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Service Requests</h1>

      {!requests || requests.length === 0 ? (
        <p>No requests yet</p>
      ) : (
        <div className="space-y-4">
          {requests.map((req: any) => (
            <div
              key={req.id}
              className="flex justify-between p-5 border rounded bg-white shadow-sm"
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
                <span className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700 capitalize">
                  {req.status}
                </span>

                {req.status === "pending" && (
                  <>
                    <form action={acceptRequest}>
                      <input type="hidden" name="requestId" value={req.id} />
                      <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors">
                        Accept
                      </button>
                    </form>

                    <form action={rejectRequest}>
                      <input type="hidden" name="requestId" value={req.id} />
                      <button className="border px-4 py-2 rounded hover:bg-gray-50 transition-colors">
                        Reject
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
