"use server";

import { createSupabaseServer } from "@/lib/supabase/server";

export async function acceptRequest(formData: FormData) {
  const supabase = await createSupabaseServer();
  const requestId = formData.get("requestId") as string;

  await supabase
    .from("service_requests")
    .update({ status: "accepted" })
    .eq("id", requestId);
}

export async function rejectRequest(formData: FormData) {
  const supabase = await createSupabaseServer();
  const requestId = formData.get("requestId") as string;

  await supabase
    .from("service_requests")
    .update({ status: "rejected" })
    .eq("id", requestId);
}
