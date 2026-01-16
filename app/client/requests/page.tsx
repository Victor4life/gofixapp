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
      user:user_id (
        full_name
      )
    ),
    service:service_id (
      name
    )
  `
    )
    .eq("client_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return <p>Error loading requests</p>;
  }

  console.log("AUTH CHECK", user);

  /* 4️⃣ Render */
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Requests</h1>

      {!requests?.length && <p>No requests yet</p>}

      <div className="space-y-4">
        {requests.map((r: any) => (
          <div key={r.id}>
            <p>{r.artisan?.[0]?.user?.[0]?.full_name ?? "Unknown artisan"}</p>
            <p>{r.service?.[0]?.name ?? "Unknown service"}</p>
            <p>{r.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
