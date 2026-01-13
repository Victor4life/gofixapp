import { createSupabaseServer } from "@/lib/supabase/server";

export async function getCurrentUser() {
  const supabase = await createSupabaseServer();

  // 1️⃣ Auth user (Supabase Auth)
  const {
    data: { user: authUser },
  } = await supabase.auth.getUser();

  if (!authUser) return null;

  // 2️⃣ App user (public.users)
  const { data: appUser, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", authUser.id)
    .single();

  if (error || !appUser) return null;

  return {
    auth: authUser,
    profile: appUser,
  };
}
