import { supabase } from "@/lib/supabase/client";

export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .single();

  return {
    id: user.id,
    email: user.email,
    role: profile?.role,
  };
}
