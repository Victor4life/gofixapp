// lib/data/getArtisanRequests.ts
import { createSupabaseServer } from "@/lib/supabase/server";

export async function getArtisanRequests(artisanUserId: string) {
  const supabase = createSupabaseServer();

  const { data, error } = await supabase
    .from("job_requests")
    .select(
      `
      id,
      status,
      created_at,
      client:client_id (
        full_name
      ),
      service:service_id (
        name
      )
    `,
    )
    .eq("artisan_id", artisanUserId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
}
