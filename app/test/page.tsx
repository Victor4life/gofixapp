import { createSupabaseServer } from "@/lib/supabase/server";

export default async function TestPage() {
  const supabase = createSupabaseServer(); // ✅ NO await

  const { data, error } = await supabase.auth.getUser();

  return <pre>{JSON.stringify({ user: data.user, error }, null, 2)}</pre>;
}
