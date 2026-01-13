import { createSupabaseServer } from "@/lib/supabase/server";

export async function getUserProfile(userId: string) {
  const supabase = await createSupabaseServer();

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) return null;

  return data;
}
