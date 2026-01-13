import { createSupabaseServer } from "@/lib/supabase/server";

export async function getArtisanRequests(artisanProfileId: string) {
  const supabase = await createSupabaseServer();

  const { data, error } = await supabase
    .from("service_requests")
    .select(
      `
      id,
      status,
      created_at,
      client:users!service_requests_client_id_fkey (
        full_name
      ),
      service:services (
        name
      )
    `
    )
    .eq("artisan_id", artisanProfileId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("getArtisanRequests error:", error.message);
    return [];
  }

  return data;
}
