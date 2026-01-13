import { createSupabaseServer } from "@/lib/supabase/server";

export default async function ClientRequestsPage() {
  const supabase = await createSupabaseServer();

  /* 1️⃣ Get authenticated user */
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <p>Please login</p>;
  }

  /* 2️⃣ Fetch role from users table */
  const { data: profile, error: profileError } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profileError || profile?.role !== "client") {
    return <p>Unauthorized</p>;
  }

  /* 3️⃣ Fetch client requests */
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

  if (error) {
    console.error(error);
    return <p>Error loading requests</p>;
  }

  /* 4️⃣ Render */
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Requests</h1>

      {!requests?.length && <p>No requests yet</p>}

      <div className="space-y-4">
        {requests.map((r: any) => (
          <div key={r.id} className="border p-4 rounded bg-white">
            <p className="font-semibold">
              {r.artisan?.full_name ?? "Unknown artisan"}
            </p>

            <p className="text-sm text-gray-600">
              {r.service?.name ?? "Unknown service"}
            </p>

            <p className="text-sm mt-1 capitalize">Status: {r.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
