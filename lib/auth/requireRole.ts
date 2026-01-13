import { createSupabaseServer } from "@/lib/supabase/server";

export async function requireRole(requiredRole: "client" | "artisan") {
  const supabase = await createSupabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "unauthenticated" as const };
  }

  const { data: profile } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .single();

  if (!profile || profile.role !== requiredRole) {
    return { error: "unauthorized" as const };
  }

  return { user };
}
