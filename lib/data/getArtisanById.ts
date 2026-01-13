import { createSupabaseServer } from "@/lib/supabase/server";

export async function getArtisanById(id: string) {
  const supabase = await createSupabaseServer();

  const { data, error } = await supabase
    .from("artisan_profiles")
    .select(
      `
      id,
      bio,
      is_available,
      rating,
      users (
        full_name
      ),
      artisan_services (
        services (
          id,
          name
        )
      )
    `
    )
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching artisan:", error.message);
    return null;
  }

  return data;
}
