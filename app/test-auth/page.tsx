import { createSupabaseServer } from "@/lib/supabase/server";

export default async function TestAuthPage() {
  const supabase = await createSupabaseServer();
  const { data } = await supabase.auth.getUser();

  return <pre>{JSON.stringify(data.user, null, 2)}</pre>;
}
