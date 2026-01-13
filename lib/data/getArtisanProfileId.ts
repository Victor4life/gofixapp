import { createSupabaseServer } from "@/lib/supabase/server";

export async function getArtisanProfileId(userId: string) {
  const supabase = await createSupabaseServer();

  const { data, error } = await supabase
    .from("artisan_profiles")
    .select("id")
    .eq("user_id", userId)
    .single();

  if (error) return null;

  return data.id;
}
