import { createSupabaseServer } from "@/lib/supabase/server";

export async function getCurrentUser() {
  const supabase = await createSupabaseServer();

  const {
    data: { user: authUser },
  } = await supabase.auth.getUser();

  if (!authUser) return null;

  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("id", authUser.id)
    .single();

  return user ?? null;
}
